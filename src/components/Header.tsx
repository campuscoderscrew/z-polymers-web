import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { mainNav, whereToBuy } from './nav';

const navLink =
  'font-display font-medium text-fg no-underline hover:text-accent aria-[current=page]:text-accent';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-btn bg-steel px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/85">
        <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
          <Link to="/" className="flex items-center no-underline" aria-label="Z-Polymers home">
            <Logo className="h-7 md:h-8" title="" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink to={item.href} end className={navLink}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Button href={whereToBuy.href}>{whereToBuy.label}</Button>
          </div>

          <button
            type="button"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-btn border border-border-control text-fg-strong lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.75} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.75} aria-hidden="true" />}
          </button>
        </div>

        <nav id={menuId} aria-label="Main" hidden={!open} className="absolute inset-x-0 top-full border-b border-border bg-bg lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} end className={`${navLink} flex min-h-12 items-center`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <Button href={whereToBuy.href} className="w-full">
                {whereToBuy.label}
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
