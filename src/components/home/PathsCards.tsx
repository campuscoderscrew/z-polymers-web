/**
 * #14 Paths cards · Sprint 48, task 1
 * Used on: Home
 * 3 cards: icon, title, text, meta line, arrow link. Whole card is clickable via the link.
 */
import { Link } from 'react-router';
import { ArrowRight, Factory, Layers, Scale, type LucideIcon } from 'lucide-react';

const paths: { icon: LucideIcon; title: string; text: string; meta: string; cta: string; to: string }[] = [
  {
    icon: Layers,
    title: 'Reinforce a part in Z-CAD',
    text: 'Drop in your model and Z-CAD adds optimized Tullomer reinforcement, ready to print as a 3MF. Free, with no account.',
    meta: 'Free · Runs in your browser',
    cta: 'Open Z-CAD',
    to: '/z-cad',
  },
  {
    icon: Scale,
    title: 'Buy by the gram',
    text: 'Z-CAD tells you exactly how much Tullomer your part needs. Participating resellers cut that amount from the spool for you.',
    meta: 'Cut-to-order · From 20 g',
    cta: 'Find a reseller',
    to: '/where-to-buy',
  },
  {
    icon: Factory,
    title: 'Request an application review',
    text: 'For vacuum, space, RF and high-strength parts. Our team reviews the fit, then prints samples or sends filament for your own testing.',
    meta: 'Industrial · Engineering support',
    cta: 'Start a review',
    to: '/contact',
  },
];

export default function PathsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {paths.map(({ icon: Icon, title, text, meta, cta, to }) => (
        <article
          key={title}
          className="group relative flex flex-col gap-4 rounded-card border border-border bg-surface p-7 transition-colors hover:border-accent"
        >
          <div className="grid size-11 place-items-center rounded-btn border border-border text-fg-strong">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="type-card">{title}</h3>
          <p className="type-body">{text}</p>
          <p className="type-caption mt-auto pt-2 uppercase tracking-wider">{meta}</p>
          <Link
            to={to}
            className="inline-flex items-center gap-2 font-display font-semibold text-accent no-underline after:absolute after:inset-0 after:rounded-card hover:text-link-hover"
          >
            {cta}
            <ArrowRight
              className="size-4 motion-safe:transition-transform group-hover:translate-x-1"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </article>
      ))}
    </div>
  );
}
