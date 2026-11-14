/**
 * /styleguide: every color, font and component. Open it first to confirm your
 * setup matches Brand Guide v2.0. Flip your OS light/dark setting to check both modes.
 * Not linked from the nav, and marked noindex.
 */
import { ArrowRight, CircleAlert, CircleCheck, Download, Factory, Printer } from 'lucide-react';
import Seo from '@/components/Seo';
import Section from '@/components/Section';
import Button from '@/components/shared/Button';
import Card from '@/components/Card';
import Logo from '@/components/Logo';
import SpecTabs from '@/components/SpecTabs';
import { spec, specRange } from '@/lib/specs';
import { fieldClass } from '@/lib/styles';

const palette = [
  ['charcoal', 'bg-charcoal'],
  ['near-black', 'bg-near-black'],
  ['paper', 'bg-paper'],
  ['cream', 'bg-cream'],
  ['steel', 'bg-steel'],
  ['steel-dark', 'bg-steel-dark'],
  ['steel-light', 'bg-steel-light'],
  ['steel-hover', 'bg-steel-hover'],
  ['warm-grey', 'bg-warm-grey'],
  ['muted', 'bg-muted'],
  ['ink', 'bg-ink'],
] as const;

const semantic = [
  ['bg', 'bg-bg', 'Page ground'],
  ['bg-alt', 'bg-bg-alt', 'Alternating band'],
  ['surface', 'bg-surface', 'Cards and panels'],
  ['field', 'bg-field', 'Form inputs'],
  ['fg-strong', 'bg-fg-strong', 'Headings'],
  ['fg', 'bg-fg', 'Body text'],
  ['fg-muted', 'bg-fg-muted', 'Captions and dates'],
  ['accent', 'bg-accent', 'Section headings, links, icons'],
  ['link-hover', 'bg-link-hover', 'Link hover'],
  ['btn-hover', 'bg-btn-hover', 'Primary button hover'],
  ['border', 'bg-border', 'Hairlines'],
  ['border-control', 'bg-border-control', 'Outlined buttons and inputs'],
  ['focus', 'bg-focus', 'Focus ring'],
  ['ok', 'bg-ok', 'Form success'],
  ['bad', 'bg-bad', 'Form error'],
  ['logo', 'bg-logo', 'Logo color'],
] as const;

const typeSamples = [
  ['type-hero', 'Quicksand 600, 48–62px', 'Tullomer™ filament'],
  ['type-section', 'Quicksand 500, 30–38px, centered', 'Section heading'],
  ['type-card', 'Quicksand 600, 18–22px', 'Card title'],
  ['type-label', 'Quicksand 600, 13px caps', 'Small label'],
  ['type-lede', 'Nunito Sans 18–20px, 400 dark / 300 light', 'Intro paragraph under a heading. Lead with the number, then explain it in plain words.'],
  ['type-body', 'Nunito Sans 400, 16px / 1.75, max 68ch', 'Body text. Keep paragraphs short and concrete. Every claim needs a test method that backs it, and every spec number comes from tullomer.json.'],
  ['type-caption', 'Nunito Sans 400, 13px', 'Caption or date: 8 November 2026'],
] as const;

const icons = [
  ['Printer', Printer],
  ['Factory', Factory],
  ['Download', Download],
  ['ArrowRight', ArrowRight],
  ['CircleCheck', CircleCheck],
  ['CircleAlert', CircleAlert],
] as const;

export default function Styleguide() {
  return (
    <>
      <Seo
        title="Styleguide"
        description="Z-Polymers brand tokens, type classes and components, for the web team."
        noindex
      />

      <section className="bg-bg py-16 md:py-20">
        <div className="container-site flex flex-col gap-4">
          <p className="type-label">Brand Guide v2.0</p>
          <h1 className="type-hero">Styleguide</h1>
          <p className="type-lede">
            Every color, font and component on the site. Switch your OS between light and dark mode (or use Chrome
            DevTools, Rendering, "Emulate CSS prefers-color-scheme") and check that this page still reads well.
          </p>
        </div>
      </section>

      <Section tone="alt" id="semantic" heading="Semantic colors" eyebrow="Use these in components">
        <p className="type-body mx-auto mb-8 text-center">
          These switch with the OS setting. Use the class shown, never a hex code.
        </p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semantic.map(([name, cls, use]) => (
            <li key={name} className="flex items-center gap-4 rounded-card border border-border bg-surface p-4">
              <span className={`h-12 w-12 shrink-0 rounded-btn border border-border ${cls}`} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-display font-semibold text-fg-strong">{name}</span>
                <span className="type-caption block">{use}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bg" id="palette" heading="Brand palette" eyebrow="Same in both modes">
        <p className="type-body mx-auto mb-8 text-center">
          Fixed colors. Use them directly only for the steel band, the cream band and text on cream.
        </p>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map(([name, cls]) => (
            <li key={name} className="flex flex-col gap-2">
              <span className={`h-20 rounded-card border border-border ${cls}`} aria-hidden="true" />
              <span className="font-display font-semibold text-fg-strong">{name}</span>
              <code className="type-caption">{cls}</code>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt" id="type" heading="Type classes" eyebrow="Quicksand and Nunito Sans">
        <div className="flex flex-col divide-y divide-border">
          {typeSamples.map(([cls, desc, sample]) => (
            <div key={cls} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
              <div>
                <code className="font-display font-semibold text-fg-strong">.{cls}</code>
                <p className="type-caption">{desc}</p>
              </div>
              <p className={cls}>{sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="bg" id="buttons" heading="Buttons and links" eyebrow="rounded-btn, at least 48px tall">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
            <Button variant="cream" href="/where-to-buy">Where to buy</Button>
            <Button variant="download" href="/logo.svg">Logo file</Button>
            <Button href="#buttons">
              Link button <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>
          <p className="type-body text-center">
            An inline <a href="#buttons">text link</a> uses the accent color. Press Tab to see the shared focus ring.
          </p>
        </div>
      </Section>

      <Section tone="steel" id="steel" heading="Steel band" eyebrow="One feature section per page">
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo className="h-10" />
          <p className="type-lede">
            White text and <a href="#steel">white underlined links</a>. Looks the same in both modes.
          </p>
          <Button variant="outline">Outline on steel</Button>
        </div>
      </Section>

      <Section tone="alt" id="cards" heading="Cards" eyebrow="bg-surface, rounded-card">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Card title" eyebrow="Label">
            Short supporting text in the body style.
          </Card>
          <Card title="Linked card" href="/styleguide" eyebrow="Clickable">
            The whole card is the link target.
          </Card>
          <Card title="Spec card" eyebrow="From tullomer.json">
            Tensile strength: {spec('filament.tensileStrength')}. Nozzle: {specRange('filament.print.nozzleTemp')}.
          </Card>
        </div>
      </Section>

      <Section tone="bg" id="interactive" heading="Interactive component" eyebrow="React state and keyboard support">
        <div className="mx-auto max-w-2xl">
          <SpecTabs />
          <p className="type-caption mt-4 text-center">Tab into the tab list, then use the arrow keys.</p>
        </div>
      </Section>

      <Section tone="alt" id="forms" heading="Form fields" eyebrow="bg-field, border-border-control">
        <form className="mx-auto grid max-w-xl gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-2">
            <label htmlFor="sg-email" className="type-label">
              Email
            </label>
            <input id="sg-email" type="email" placeholder="you@company.com" className={fieldClass} />
          </div>
          <p className="flex items-center gap-2 text-ok">
            <CircleCheck size={20} strokeWidth={1.75} aria-hidden="true" /> Thanks. We will reply within two business days.
          </p>
          <p className="flex items-center gap-2 text-bad">
            <CircleAlert size={20} strokeWidth={1.75} aria-hidden="true" /> Enter an email address.
          </p>
        </form>
      </Section>

      <Section tone="bg" id="icons" heading="Icons and logo" eyebrow="Lucide, strokeWidth 1.75">
        <ul className="mb-12 flex flex-wrap justify-center gap-6">
          {icons.map(([name, Icon]) => (
            <li key={name} className="flex w-24 flex-col items-center gap-2 text-accent">
              <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
              <span className="type-caption">{name}</span>
            </li>
          ))}
        </ul>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center justify-center rounded-card border border-border bg-surface p-8">
            <Logo className="h-10" title="Z-Polymers logo on the page ground" />
          </div>
          <div className="band-cream flex items-center justify-center rounded-card p-8">
            <Logo className="h-10" title="Z-Polymers logo on cream" />
          </div>
        </div>
      </Section>

      <Section tone="cream" id="cream" heading="Cream band" eyebrow="Where to buy only, once per page">
        <p className="type-lede mx-auto text-center">Text on cream is ink. Icons on cream are ink.</p>
      </Section>
    </>
  );
}
