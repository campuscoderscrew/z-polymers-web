import { Link } from 'react-router';

/**
 * #3 Navbar · Sprint 46, task 7
 * Used on: Every page, inside #2 Header
 * Note: Active underline uses the accent token
 * Replace this placeholder div with the real component. Keep the export name.
 */
// Temporary plain links so every page stays reachable while #3 is being built.
const links: [string, string][] = [['/', 'Home'], ['/material', 'Material'], ['/applications', 'Applications'], ['/z-cad', 'Z-CAD'], ['/resources', 'Resources'], ['/about', 'About'], ['/contact', 'Contact'], ['/where-to-buy', 'Where to buy']];

export default function Navbar() {
  return (
    <div className="placeholder">
      <p className="placeholder-title">#3 Navbar</p>
      <ul>
        <li>Links: Material, Applications, Z-CAD, Resources, About, Contact</li>
        <li>Underline on the active page</li>
      </ul>
      <nav aria-label="Main" className="flex flex-wrap gap-3">
        {links.map(([to, label]) => <Link key={to} to={to} className="underline">{label}</Link>)}
      </nav>
    </div>
  );
}
