/**
 * #13 Z-CAD Lite widget · Sprint 47, task 7
 * Used on: Home (in #12 Home hero), Z-CAD
 * Video preview, 3 steps (model upload, printer + reinforcement, Export 3MF), link to the full web app.
 * Note: UI only until Mike confirms a backend. Nothing is uploaded or generated.
 */
import { useState, type DragEvent, type FormEvent } from 'react';
import { Link } from 'react-router';
import Button from '@/components/shared/Button';
import { cx } from '@/lib/cx';
import { fieldClass } from '@/lib/styles';

const printers = ['Bambu Lab H2D', 'Bambu Lab X1C', 'Bambu Lab X1E', 'Other dual-nozzle'];
const strategies = ['Auto-optimized', 'Concentric', 'Solid fill'];
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ZcadLiteWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [over, setOver] = useState(false);
  const [printer, setPrinter] = useState(printers[0]);
  const [strategy, setStrategy] = useState(strategies[0]);
  const [msg, setMsg] = useState<{ text: string; error: boolean } | null>(null);

  const pick = (f: File | undefined) => {
    if (!f) return;
    setFile(f);
    setMsg(null);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setOver(false);
    pick(e.dataTransfer.files[0]);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return setMsg({ text: 'Add a 3D model first, then export.', error: true });
    setMsg({
      text: `Ready: ${file.name}, ${strategy.toLowerCase()} reinforcement for ${printer}. On the live site, Z-CAD Lite generates and downloads the 3MF here, with the grams of Tullomer needed.`,
      error: false,
    });
  };

  const step = 'flex min-w-0 flex-col gap-2 p-4';
  const stepNo = (n: string, label: string) => (
    <span className="type-caption uppercase tracking-wider">
      <b className="font-semibold text-accent">{n}</b> {label}
    </span>
  );

  return (
    <form
      id="zcad-lite"
      noValidate
      aria-label="Z-CAD Lite"
      onSubmit={onSubmit}
      className="flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-card border border-border bg-surface"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <h2 className="font-display text-lg font-semibold text-fg-strong">
          Z-CAD <span className="text-accent">Lite</span>
        </h2>
        <span className="type-caption ml-auto flex items-center gap-2 text-ok before:size-2 before:rounded-full before:bg-ok">
          Free · no login
        </span>
      </div>

      <div className="relative aspect-[1902/1000] bg-bg-alt">
        <video
          src="/images/zcad-demo.mp4"
          poster="/images/zcad-poster.jpg"
          autoPlay={!reducedMotion()}
          muted
          loop
          playsInline
          className="size-full object-cover"
          aria-label="Z-CAD demo: a bracket model loads and Tullomer reinforcement layers are generated inside it"
        />
        <span className="type-caption absolute bottom-3 left-3 rounded-btn bg-bg/85 px-2 py-1 text-accent">
          Reinforcement generated · bracket_bolt_holes
        </span>
      </div>

      <div className="grid border-t border-border sm:grid-cols-[1.25fr_1fr_auto] sm:divide-x divide-border max-sm:divide-y">
        <div className={step}>
          {stepNo('01', 'Your model')}
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setOver(true);
            }}
            onDragLeave={() => setOver(false)}
            onDrop={onDrop}
            className={cx(
              'relative flex cursor-pointer flex-col gap-0.5 rounded-btn border border-dashed px-3 py-2.5 transition-colors focus-within:outline-2 focus-within:outline-focus',
              file ? 'border-solid border-ok' : over ? 'border-accent bg-bg-alt' : 'border-border-control hover:border-accent',
            )}
          >
            <input
              type="file"
              accept=".stl,.3mf,.obj,.step,.stp"
              aria-label="Choose a 3D model"
              className="absolute inset-0 cursor-pointer opacity-0"
              onChange={(e) => pick(e.target.files?.[0])}
            />
            <strong className="text-sm font-semibold text-fg-strong [overflow-wrap:anywhere]">
              {file ? `${file.name} · ${(file.size / 1048576).toFixed(1)} MB` : 'Drop a file or browse'}
            </strong>
            <small className="type-caption">STL, 3MF, OBJ or STEP</small>
          </label>
        </div>
        <div className={step}>
          {stepNo('02', 'Settings')}
          <select aria-label="Printer" value={printer} onChange={(e) => setPrinter(e.target.value)} className={cx(fieldClass, 'py-2')}>
            {printers.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <select
            aria-label="Reinforcement"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className={cx(fieldClass, 'py-2')}
          >
            {strategies.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className={cx(step, 'justify-end')}>
          {stepNo('03', 'Export')}
          <Button type="submit">Export 3MF</Button>
        </div>
      </div>

      <p role="status" className={cx('px-4 text-sm empty:hidden', msg && 'pb-4', msg?.error ? 'text-bad' : 'text-ok')}>
        {msg?.text}
      </p>

      <div className="type-caption flex flex-wrap justify-between gap-x-4 gap-y-1.5 border-t border-border px-4 py-2.5">
        <span>Need ranges, pillars or keep-out zones?</span>
        <Link to="/z-cad" className="text-accent hover:text-link-hover">
          Open the full Z-CAD web app
        </Link>
      </div>
    </form>
  );
}
