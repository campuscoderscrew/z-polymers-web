import { Link } from 'react-router';
import Logo from './Logo';
import { mainNav, whereToBuy } from './nav';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1fr_auto] md:py-16">
        <div className="flex flex-col gap-4">
          <Logo className="h-8" />
          <p className="type-body">Tullomer™ for 3D printing filament and fiber.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
            {[...mainNav, whereToBuy].map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex min-h-12 items-center text-fg no-underline hover:text-accent sm:min-h-10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-2 py-6 sm:flex-row sm:justify-between">
          <p className="type-caption">© {year} Z-Polymers. Tullomer™ is a trademark of Z-Polymers.</p>
          <p className="type-caption">Site by Campus Coders Crew</p>
        </div>
      </div>
    </footer>
  );
}
