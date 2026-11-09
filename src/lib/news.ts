/**
 * News posts from src/content/news/*.md, bundled at build time.
 * Each file starts with frontmatter:
 *   ---
 *   title: Post title
 *   date: 2026-11-08
 *   summary: One sentence.
 *   draft: false
 *   ---
 * The body is returned as raw Markdown. Add a Markdown renderer when the
 * News section is built.
 */
export type NewsPost = {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  draft: boolean;
  body: string;
};

const files = import.meta.glob('/src/content/news/*.md', { query: '?raw', import: 'default', eager: true }) as Record<
  string,
  string
>;

function parse(path: string, raw: string): NewsPost {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`News post ${path} is missing frontmatter`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  for (const key of ['title', 'date', 'summary']) {
    if (!meta[key]) throw new Error(`News post ${path} is missing "${key}"`);
  }
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: meta.title,
    date: new Date(meta.date),
    summary: meta.summary,
    draft: meta.draft === 'true',
    body: match[2].trim(),
  };
}

/** Published posts, newest first. Drafts are hidden in production builds only. */
export const news: NewsPost[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((p) => import.meta.env.DEV || !p.draft)
  .sort((a, b) => b.date.getTime() - a.date.getTime());
