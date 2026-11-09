/**
 * Read Tullomer specs from src/data/tullomer.json.
 * Never type a spec number into a page; use these helpers.
 *
 *   import { spec, specRange } from '@/lib/specs';
 *   spec('filament.tensileStrength')       // "52 MPa" (or "—" until filled)
 *   specRange('filament.print.nozzleTemp') // "230–250 °C"
 */
import tullomer from '@/data/tullomer.json';

export type Spec = {
  value: number | string | null;
  unit: string;
  method: string | null;
  tolerance?: number | null;
};

export type SpecRange = {
  min: number | null;
  max: number | null;
  unit: string;
  method: string | null;
};

export const PENDING = '—';

export const data = tullomer;

function lookup(path: string): unknown {
  const node = path
    .split('.')
    .reduce<unknown>(
      (obj, key) => (obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[key] : undefined),
      tullomer,
    );
  if (node === undefined) throw new Error(`Unknown Tullomer spec path: "${path}"`);
  return node;
}

export function getSpec(path: string): Spec {
  return lookup(path) as Spec;
}

export function getRange(path: string): SpecRange {
  return lookup(path) as SpecRange;
}

const fmt = (n: number | string) => (typeof n === 'number' ? n.toLocaleString('en-US') : n);
const withUnit = (v: string, unit: string) => (unit === '%' ? `${v}%` : `${v} ${unit}`);

/** Formatted value with unit, e.g. "52 MPa". Shows "—" while the value is null. */
export function spec(path: string): string {
  const s = getSpec(path);
  if (s.value === null || s.value === undefined) return PENDING;
  const v = fmt(s.value);
  return withUnit(s.tolerance != null ? `${v} ± ${fmt(s.tolerance)}` : v, s.unit);
}

/** Formatted range with unit, e.g. "230–250 °C". */
export function specRange(path: string): string {
  const r = getRange(path);
  if (r.min == null || r.max == null) return PENDING;
  return withUnit(`${fmt(r.min)}–${fmt(r.max)}`, r.unit);
}

/** The test method behind a spec, or null. Show it next to the number. */
export function specMethod(path: string): string | null {
  return (lookup(path) as { method?: string | null }).method ?? null;
}
