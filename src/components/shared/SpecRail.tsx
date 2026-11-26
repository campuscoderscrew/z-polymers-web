/**
 * #9 Spec rail · Sprint 47, task 3
 * Used on: Home, Material (inside <Band tone="alt">)
 * 6 headline values from tullomer.json, each with a short note; hairline dividers; 2 / 3 / 6 columns.
 * Values are concept v2 numbers until Mike confirms (see "source" in tullomer.json).
 */
import { spec } from '@/lib/specs';

const stats = [
  { value: spec('filament.tensileStrength'), note: 'Tensile strength' },
  { value: spec('filament.weightVsSteel'), note: 'The weight of steel' },
  { value: spec('filament.flammability'), note: 'Halogen-free' },
  { value: `Dk ${spec('filament.dielectricConstant')}`, note: `Loss tangent ${spec('filament.lossTangent')}` },
  { value: spec('filament.frequencyStability'), note: 'Dielectric stability' },
  { value: spec('filament.outgassing'), note: 'Outgassing of any printed plastic' },
];

export default function SpecRail() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
      {stats.map(({ value, note }) => (
        <div key={note} className="flex flex-col-reverse gap-1.5 bg-bg-alt px-5 py-6">
          <dt className="type-caption">{note}</dt>
          <dd className="font-display text-xl font-semibold leading-tight text-fg-strong tabular-nums md:text-2xl">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
