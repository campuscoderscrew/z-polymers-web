/**
 * #11 Strength bar chart · Sprint 47, task 5
 * Used on: Home
 * Text column + bar chart: Tullomer (highlighted) vs comparison filaments, all from tullomer.json.
 * Note: Blocked: tensile number + OK to name competitors. Caption says so while "source" is set.
 */
import { comparison, getSpec, specMethod } from '@/lib/specs';

const TICKS = 5;

export default function StrengthBarChart() {
  const ours = getSpec('filament.tensileStrength');
  const others = comparison('tensileStrength');
  const rows = [
    { name: 'Tullomer', value: typeof ours.value === 'number' ? ours.value : 0, us: true },
    ...others.items.map((i) => ({ ...i, us: false })),
  ];
  const max = Math.max(...rows.map((r) => r.value)) || 1;
  const pct = (v: number) => `${(v / max) * 100}%`;
  const method = specMethod('filament.tensileStrength') ?? others.method;
  const unconfirmed = ours.source || others.source;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
      <div className="flex flex-col gap-5">
        <p className="type-label flex items-center gap-3 before:h-px before:w-6 before:bg-current">Tensile strength</p>
        <h2 className="type-section text-left">Three times the filaments it replaces</h2>
        <p className="type-lede">
          Tullomer prints at a lower temperature than PEEK, needs no annealing, and comes off the bed with more than three
          times the tensile strength of glass- and carbon-filled engineering filaments.
        </p>
      </div>

      <figure className="m-0">
        <div className="flex flex-col" role="list" aria-label={`Tensile strength in ${others.unit}`}>
          {rows.map((r) => (
            <div key={r.name} role="listitem" className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 py-2.5">
              <span className={`type-caption text-right ${r.us ? 'font-semibold text-fg-strong' : ''}`}>{r.name}</span>
              <div className="relative h-10 border-r border-border bg-[repeating-linear-gradient(90deg,var(--z-border)_0_1px,transparent_1px_20%)]">
                <div
                  className={`absolute inset-y-1.5 left-0 origin-left rounded-r-btn motion-safe:animate-[grow_1.1s_cubic-bezier(.2,.7,.2,1)_both] ${
                    r.us ? 'inset-y-0.5 bg-accent' : 'border border-border-control bg-surface'
                  }`}
                  style={{ width: pct(r.value) }}
                />
                <span
                  className={`absolute top-1/2 -translate-y-1/2 text-sm tabular-nums ${
                    r.us ? 'right-3 font-semibold text-bg' : 'text-fg-strong'
                  }`}
                  style={r.us ? undefined : { left: `calc(${pct(r.value)} + 0.625rem)` }}
                >
                  {r.us ? `${r.value} ${others.unit}` : r.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4" aria-hidden="true">
          <span />
          <div className="type-caption relative h-5">
            {Array.from({ length: TICKS + 1 }, (_, i) => (
              <span
                key={i}
                className={`absolute ${i === 0 ? '' : i === TICKS ? '-translate-x-full' : '-translate-x-1/2'}`}
                style={{ left: `${(i / TICKS) * 100}%` }}
              >
                {Math.round((max / TICKS) * i)}
                {i === TICKS && ` ${others.unit}`}
              </span>
            ))}
          </div>
        </div>
        <figcaption className="type-caption mt-4">
          Tensile strength, {others.unit}. {method ? `Tested to ${method}.` : 'Test method to be confirmed.'}
          {unconfirmed && ' Values from design concept v2, not yet confirmed by Z-Polymers.'}
        </figcaption>
      </figure>
    </div>
  );
}
