/**
 * #8 Button / link-button.
 *  - primary: steel, white text (default)
 *  - outline: transparent with border-border-control
 *  - cream: "Where to buy" only, nowhere else
 *  - download: primary look with a download icon; with href it downloads the file
 * Internal paths render a router <Link>, external URLs an <a>, otherwise a <button>.
 * Always at least 48px tall.
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';
import { Download } from 'lucide-react';
import { cx } from '@/lib/cx';

type Variant = 'primary' | 'outline' | 'cream' | 'download';

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export const buttonBase =
  'btn inline-flex min-h-12 items-center justify-center gap-2 rounded-btn px-6 font-display font-semibold no-underline transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50';

const primary = 'bg-steel text-white hover:bg-btn-hover hover:text-white';
const variants: Record<Variant, string> = {
  primary,
  outline: 'border border-border-control bg-transparent text-fg-strong hover:border-accent hover:text-accent',
  cream: 'bg-cream text-ink hover:bg-cream/85 hover:text-ink',
  download: primary,
};

export default function Button({ variant = 'primary', href, className, children, type = 'button', ...rest }: Props) {
  const classes = cx(buttonBase, variants[variant], className);
  const isDownload = variant === 'download';
  const content = (
    <>
      {isDownload && <Download className="size-4" aria-hidden="true" />}
      {children}
    </>
  );
  if (href?.startsWith('/') && !isDownload) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} download={isDownload || undefined}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
