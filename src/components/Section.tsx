/**
 * Full-width band. Square corners are allowed here (and only here).
 *  - bg:    page ground (bg-bg)
 *  - alt:   alternating band (bg-bg-alt)
 *  - steel: brand feature band, one per page. White text, white underlined links.
 *  - cream: "Where to buy" only, once per page. Ink text.
 * Never put two bands of the same tone back to back.
 */
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

type Tone = 'bg' | 'alt' | 'steel' | 'cream';

type Props = {
  tone?: Tone;
  id?: string;
  className?: string;
  /** Visible heading, rendered with .type-section. */
  heading?: string;
  /** Small label above the heading. */
  eyebrow?: string;
  children?: ReactNode;
};

const tones: Record<Tone, string> = {
  bg: 'bg-bg',
  alt: 'bg-bg-alt',
  steel: 'band-steel',
  cream: 'band-cream',
};

export default function Section({ tone = 'bg', id, className, heading, eyebrow, children }: Props) {
  const headingId = heading && id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={cx(tones[tone], 'py-16 md:py-24', className)}>
      <div className="container-site">
        {(eyebrow || heading) && (
          <header className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
            {eyebrow && <p className="type-label">{eyebrow}</p>}
            {heading && (
              <h2 id={headingId} className="type-section">
                {heading}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
