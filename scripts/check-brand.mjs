#!/usr/bin/env node
/**
 * Brand guard: enforces the code-review rules that a machine can check.
 *  1. No hex color codes in pages, components or islands (use semantic tokens).
 *  2. No spec-looking numbers typed into pages (they come from tullomer.json).
 *  3. No exclamation marks in visible copy of pages.
 *  4. Cream band at most once per page.
 *  5. Every page passes a description to BaseLayout.
 * Run: npm run lint:brand
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const errors = [];
const report = (file, line, msg) => errors.push(`${relative(root, file)}:${line}  ${msg}`);
const lineOf = (src, index) => src.slice(0, index).split('\n').length;

const codeDirs = ['src/pages', 'src/components', 'src/islands'].map((d) => join(root, d));
const codeFiles = codeDirs.flatMap(walk).filter((f) => /\.(astro|tsx?|jsx?|css)$/.test(f));

const HEX = /(?<![\w&/])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/g;
const SPEC = /\b\d+(?:[.,]\d+)?\s?(?:MPa|GPa|°C|g\/cm³|g\/cm3|mm\/s|g\/den|denier)\b/g;

for (const file of codeFiles) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(HEX)) {
    report(file, lineOf(src, m.index), `hex color "${m[0]}": use a semantic token class instead`);
  }
  if (file.includes(join('src', 'pages'))) {
    for (const m of src.matchAll(SPEC)) {
      report(file, lineOf(src, m.index), `spec number "${m[0]}": read it from tullomer.json via @/lib/specs`);
    }
  }
}

const pages = walk(join(root, 'src/pages')).filter((f) => f.endsWith('.astro'));
for (const file of pages) {
  const src = readFileSync(file, 'utf8');
  const template = src.replace(/^---[\s\S]*?---/, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
  // Text between tags, and string attributes that render as copy.
  const copy = [...template.matchAll(/>([^<>{}]+)</g), ...template.matchAll(/\b(?:title|lede|heading|description|text)="([^"]*)"/g)];
  for (const m of copy) {
    if (m[1].includes('!')) report(file, lineOf(src, src.indexOf(m[1])), 'exclamation mark in copy: brand voice says no');
  }
  const creamCount =
    (template.match(/tone="cream"/g) ?? []).length +
    (template.match(/<WhereToBuyBand\b/g) ?? []).length +
    (template.match(/\bband-cream\b|\bbg-cream\b/g) ?? []).length;
  if (creamCount > 1 && !file.endsWith('styleguide.astro')) report(file, 1, `cream used ${creamCount} times: at most once per page`);
  if (src.includes('<BaseLayout') && !/<BaseLayout[\s\S]*?description=/.test(src)) {
    report(file, 1, 'BaseLayout is missing a description');
  }
}

if (errors.length) {
  console.error(`Brand check failed (${errors.length}):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`Brand check passed (${codeFiles.length} files).`);
