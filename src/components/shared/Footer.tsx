import { Link } from 'react-router';
import Logo from '@/components/Logo';

/** #5 Footer content (BaseLayout supplies the <footer> element). Every page. */
const columns: { heading: string; links: [string, string][] }[] = [
  {
    heading: 'Tullomer',
    links: [['/material', 'Material'], ['/applications', 'Applications'], ['/resources', 'Data sheet'], ['/where-to-buy', 'Where to buy']],
  },
  { heading: 'Z-CAD', links: [['/z-cad', 'Z-CAD Lite'], ['/z-cad', 'Web app'], ['/resources', 'Printer profiles']] },
  { heading: 'Company', links: [['/about', 'About'], ['/contact', 'Contact'], ['/contact', 'Become a reseller']] },
];

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <Logo className="h-8" />
          <p className="mt-4 max-w-xs text-sm">
            Advanced polymers for demanding applications. Developed in Lowell, Massachusetts.
          </p>
          {/* TODO: social icons once Mike sends account URLs */}
        </div>
        {columns.map(({ heading, links }) => (
          <div key={heading}>
            <h2 className="font-display text-sm font-semibold tracking-wide text-fg-strong uppercase">{heading}</h2>
            <ul className="mt-4 space-y-2">
              {links.map(([to, label]) => (
                <li key={label}>
                  <Link to={to} className="text-fg no-underline hover:text-link-hover">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-fg-muted md:flex-row md:justify-between">
        <p>© 2026 Z-Polymers</p>
        <p>110 Canal Street, Suite 206, Lowell, MA 01852</p>
      </div>
    </>
  );
}
