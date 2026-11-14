import { NavLink } from 'react-router';
import { mainNav } from '@/components/nav';
import { cx } from '@/lib/cx';

/** #3 Navbar: main page links, accent underline on the active page. Inside #2 Header, 1000px and wider. */
export default function Navbar() {
  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-6">
        {mainNav.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                cx(
                  'font-display font-semibold',
                  isActive
                    ? 'text-fg-strong underline decoration-accent decoration-2 underline-offset-8'
                    : 'text-fg no-underline hover:text-link-hover',
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
