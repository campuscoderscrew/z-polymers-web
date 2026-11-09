/**
 * SpecTabs: example island. Accessible tabs (WAI-ARIA tabs pattern) that show
 * Tullomer specs from src/data/tullomer.json.
 *
 * Use on a page with a client directive:
 *   <SpecTabs client:visible />
 */
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Layers, Spool } from 'lucide-react';
import { spec, specMethod, specRange } from '@/lib/specs';

type Row = { label: string; path: string; range?: boolean };

const tabs = [
  {
    id: 'filament',
    label: 'Filament',
    Icon: Spool,
    rows: [
      { label: 'Diameter', path: 'filament.diameter' },
      { label: 'Density', path: 'filament.density' },
      { label: 'Tensile strength', path: 'filament.tensileStrength' },
      { label: 'Elongation at break', path: 'filament.elongationAtBreak' },
      { label: 'Nozzle temperature', path: 'filament.print.nozzleTemp', range: true },
      { label: 'Bed temperature', path: 'filament.print.bedTemp', range: true },
    ] as Row[],
  },
  {
    id: 'fiber',
    label: 'Fiber',
    Icon: Layers,
    rows: [
      { label: 'Linear density', path: 'fiber.linearDensity' },
      { label: 'Tenacity', path: 'fiber.tenacity' },
      { label: 'Elongation at break', path: 'fiber.elongationAtBreak' },
      { label: 'Density', path: 'fiber.density' },
    ] as Row[],
  },
];

export default function SpecTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = tabs.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="rounded-card border border-border bg-surface p-4 sm:p-6">
      <div role="tablist" aria-label="Tullomer specs" className="flex gap-2" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`${uid}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                'inline-flex min-h-12 items-center gap-2 rounded-btn px-4 font-display font-semibold transition-colors',
                selected
                  ? 'bg-steel text-white'
                  : 'border border-border-control text-fg-strong hover:border-accent hover:text-accent',
              ].join(' ')}
            >
              <tab.Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="mt-6"
        >
          <dl className="divide-y divide-border">
            {tab.rows.map((row) => {
              const method = specMethod(row.path);
              return (
                <div key={row.path} className="grid grid-cols-[1fr_auto] gap-x-4 py-3">
                  <dt className="text-fg">{row.label}</dt>
                  <dd className="text-right font-display font-semibold text-fg-strong">
                    {row.range ? specRange(row.path) : spec(row.path)}
                  </dd>
                  {method && <dd className="type-caption col-span-2">Test method: {method}</dd>}
                </div>
              );
            })}
          </dl>
          <p className="type-caption mt-4">Values from src/data/tullomer.json. A dash means the value is not filled in yet.</p>
        </div>
      ))}
    </div>
  );
}
