/**
 * #15 How Z-CAD works · Sprint 48, task 2
 * Used on: Home
 * 3 numbered steps, each with a section-view diagram (ported from concept v2, colors from tokens) and short text.
 */
import type { ReactNode } from 'react';

const body = 'fill-surface stroke-accent';
const hole = 'fill-bg-alt stroke-accent';
const tullomer = 'fill-fg-strong';
const holes = [72, 142, 212];

const figures: Record<string, ReactNode> = {
  model: (
    <>
      <rect x="40" y="62" width="220" height="56" className={body} strokeWidth="1.5" />
      {holes.map((x) => (
        <rect key={x} x={x} y="62" width="16" height="56" className={hole} strokeWidth="1.2" />
      ))}
      <text x="40" y="148" className="fill-fg-muted" fontSize="11">
        bracket.stl · section view
      </text>
    </>
  ),
  reinforce: (
    <>
      <rect x="40" y="62" width="220" height="56" className={body} strokeWidth="1.5" />
      {[70, 86, 102].map((y) => (
        <rect key={y} x="44" y={y} width="212" height="5" className={tullomer} />
      ))}
      {holes.map((x) => (
        <rect key={x} x={x} y="62" width="16" height="56" className={hole} strokeWidth="1.2" />
      ))}
      {holes.map((x) => (
        <rect key={x} x={x - 4} y="66" width="24" height="48" fill="none" className="stroke-fg-strong" strokeWidth="2" />
      ))}
      <text x="40" y="148" className="fill-fg-strong" fontSize="11">
        + reinforcement body · optimized
      </text>
    </>
  ),
  print: (
    <>
      <rect x="70" y="18" width="160" height="34" className={body} strokeWidth="1.5" />
      <path d="M108 52h14l-7 14z" className="fill-accent" />
      <path d="M178 52h14l-7 14z" className={tullomer} />
      <text x="96" y="40" className="fill-fg" fontSize="10">
        BASE
      </text>
      <text x="164" y="40" className="fill-fg-strong" fontSize="10">
        TULLOMER
      </text>
      <rect x="40" y="96" width="220" height="40" className={body} strokeWidth="1.5" />
      <rect x="44" y="104" width="212" height="4" className={tullomer} />
      <rect x="44" y="118" width="140" height="4" className={tullomer} />
      <line x1="40" y1="148" x2="260" y2="148" className="stroke-fg-muted" strokeWidth="1" />
      <text x="40" y="164" className="fill-fg-muted" fontSize="11">
        export 3MF · 300 °C nozzle
      </text>
    </>
  ),
};

const steps = [
  {
    n: '01',
    label: 'Your model',
    fig: 'model',
    alt: 'A plain bracket model',
    text: 'Upload the STL, 3MF, OBJ or STEP file you already print. No redesign needed.',
  },
  {
    n: '02',
    label: 'Z-CAD adds reinforcement',
    fig: 'reinforce',
    alt: 'The same bracket with Tullomer reinforcement layers inside',
    text: 'Z-CAD generates the second model automatically, with layers and rings around holes, and tells you how many grams of Tullomer it needs.',
  },
  {
    n: '03',
    label: 'Print on two nozzles',
    fig: 'print',
    alt: 'A dual-nozzle print head printing base material and Tullomer',
    text: 'Export a 3MF and print on a dual-nozzle or tool-changer printer with a 300 °C nozzle. No dry box or AMS required.',
  },
];

export default function HowZcadWorks() {
  return (
    <ol className="grid border-t border-border-control md:grid-cols-3">
      {steps.map((s, i) => (
        <li
          key={s.n}
          className={`flex min-w-0 flex-col gap-4 py-7 md:pr-7 ${i > 0 ? 'border-border max-md:border-t md:border-l md:pl-7' : ''}`}
        >
          <span className="type-label">
            {s.n} · {s.label}
          </span>
          <svg
            viewBox="0 0 300 170"
            role="img"
            aria-label={s.alt}
            className="h-auto w-full rounded-card border border-border bg-bg font-body"
          >
            {figures[s.fig]}
          </svg>
          <p className="type-body">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
