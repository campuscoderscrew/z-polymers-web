/**
 * #12 Home hero · Sprint 47, task 6
 * Used on: Home
 * Copy left (label, two-line headline, lede, steel buttons, printer chips), #13 Z-CAD Lite on the right.
 * Note: Hero buttons are steel; cream is only Where to buy
 */
import { ArrowRight } from 'lucide-react';
import Button from '@/components/shared/Button';
import ZcadLiteWidget from '@/components/home/ZcadLiteWidget';

const chips = ['Dual-nozzle or tool changer', '300 °C nozzle', 'No dry box needed'];
const rise = 'block motion-safe:animate-[rise_0.8s_cubic-bezier(.2,.7,.2,1)_both]';

export default function HomeHero() {
  return (
    <div className="grid items-center gap-8 py-4 md:gap-12 md:py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div className="flex flex-col gap-6">
        <p className="type-label flex items-center gap-3 before:h-px before:w-6 before:bg-current">
          Tullomer™ super polymer · Lowell, MA
        </p>
        <h1 className="type-hero">
          <span className={rise}>Metal-grade strength</span>
          <span className={rise} style={{ animationDelay: '80ms' }}>
            from <span className="text-accent">your printer.</span>
          </span>
        </h1>
        <p className="type-lede">
          Tullomer is a liquid crystal polymer with up to 6 times the strength of steel at 1/6 the weight. Print it pure to
          replace PEEK and ULTEM, or use Z-CAD to reinforce the parts you already make.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#zcad-lite">
            Reinforce a part, free <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </Button>
          <Button variant="outline" href="/material" className="max-sm:hidden">
            See the data sheet
          </Button>
        </div>
        <ul className="flex flex-wrap gap-2 max-sm:hidden" aria-label="Printer requirements">
          {chips.map((c) => (
            <li key={c} className="type-caption rounded-btn border border-border px-2.5 py-1.5">
              {c}
            </li>
          ))}
        </ul>
      </div>
      <ZcadLiteWidget />
    </div>
  );
}
