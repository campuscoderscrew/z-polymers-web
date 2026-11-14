/** Site menu links. Used by #3 Navbar, #4 Mobile menu and #5 Footer. */
export type NavItem = { to: string; label: string };

export const mainNav: NavItem[] = [
  { to: '/material', label: 'Material' },
  { to: '/applications', label: 'Applications' },
  { to: '/z-cad', label: 'Z-CAD' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const whereToBuy: NavItem = { to: '/where-to-buy', label: 'Where to buy' };
