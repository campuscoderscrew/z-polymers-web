import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { mainNav, whereToBuy } from '@/components/nav';
import { cx } from '@/lib/cx';
import Button from './Button';

/**
 * #4 Mobile menu: hamburger + dropdown, under 1000px, inside #2 Header.
 * Closes on link tap, on any route change (incl. browser back) and on Escape.
 * The panel anchors to the nearest `relative` ancestor (the header).
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Close on any link tap, including the current page (no route change then).
  const closeOnLink = (e: MouseEvent) => (e.target as Element).closest('a') && setOpen(false);
  // Close when focus leaves the menu (Tab past the panel, click elsewhere), so nothing focused hides under it.
  const closeOnFocusOut = (e: FocusEvent<HTMLElement>) =>
    !e.currentTarget.contains(e.relatedTarget as Node | null) && setOpen(false);

  return (
    <nav aria-label="Main" onBlur={closeOnFocusOut}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-12 items-center justify-center rounded-btn text-fg-strong hover:text-link-hover"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div id="mobile-menu" hidden={!open} className="absolute inset-x-0 top-full border-b border-border bg-bg">
        <div className="container-site flex flex-col gap-4 py-4" onClick={closeOnLink}>
          <ul>
            {mainNav.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cx(
                      'flex min-h-12 items-center font-display font-semibold no-underline',
                      isActive ? 'text-accent' : 'text-fg-strong hover:text-link-hover',
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button variant="cream" href={whereToBuy.to} className="w-full">
            {whereToBuy.label}
          </Button>
        </div>
      </div>
    </nav>
  );
}
