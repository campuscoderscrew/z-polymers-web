/** Page hero: eyebrow, .type-hero title (the page h1), .type-lede intro, optional actions. */
import type { ReactNode } from 'react';

type Props = {
  title: string;
  lede?: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function PageHero({ title, lede, eyebrow, children }: Props) {
  return (
    <section className="bg-bg pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="container-site flex flex-col items-start gap-6">
        {eyebrow && <p className="type-label">{eyebrow}</p>}
        <h1 className="type-hero max-w-[18ch]">{title}</h1>
        {lede && <p className="type-lede">{lede}</p>}
        {children && <div className="flex flex-wrap gap-4 pt-2">{children}</div>}
      </div>
    </section>
  );
}
