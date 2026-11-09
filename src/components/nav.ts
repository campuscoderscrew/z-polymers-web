/** Site navigation. Header and Footer both read from here. */
export const mainNav = [
  { href: '/material', label: 'Material' },
  { href: '/material/fiber', label: 'Fiber' },
  { href: '/applications', label: 'Applications' },
  { href: '/z-cad', label: 'Z-CAD' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const whereToBuy = { href: '/where-to-buy', label: 'Where to buy' } as const;
