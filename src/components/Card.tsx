/**
 * Card: bg-surface, rounded-card. Optional image (alt is required).
 * Pass href to make the whole card a link.
 */
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { cx } from '@/lib/cx';

type Props = {
  title: string;
  href?: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  eyebrow?: string;
  className?: string;
  children?: ReactNode;
};

export default function Card({ title, href, image, eyebrow, className, children }: Props) {
  return (
    <article
      className={cx('group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface', className)}
    >
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 p-6">
        {eyebrow && <p className="type-label">{eyebrow}</p>}
        <h3 className="type-card">
          {href ? (
            <Link to={href} className="text-fg-strong no-underline after:absolute after:inset-0 hover:text-accent">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {children && <div className="type-body">{children}</div>}
      </div>
    </article>
  );
}
