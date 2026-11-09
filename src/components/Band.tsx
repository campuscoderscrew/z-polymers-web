/**
 * Full-width band used to lay out the team-sheet sections on each page.
 * tone alternates bg / alt; never put two of the same tone back to back.
 * withHeading renders #7 Section heading above the content.
 */
import type { ReactNode } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';

type Props = {
  tone?: 'bg' | 'alt';
  withHeading?: boolean;
  children: ReactNode;
};

export default function Band({ tone = 'bg', withHeading = false, children }: Props) {
  return (
    <section className={`${tone === 'alt' ? 'bg-bg-alt' : 'bg-bg'} py-12 md:py-16`}>
      <div className="container-site">
        {withHeading && <SectionHeading />}
        {children}
      </div>
    </section>
  );
}
