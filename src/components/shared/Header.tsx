import { Link } from 'react-router';
import Logo from '@/components/Logo';
import { whereToBuy } from '@/components/nav';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Button from './Button';

/** #2 Header: sticky top bar. Logo, #3 Navbar + cream Where to buy at 1000px+, #4 Mobile menu below. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="container-site flex min-h-16 items-center justify-between gap-6 py-2">
        <Link to="/" className="text-logo no-underline" aria-label="Z-Polymers home">
          <Logo className="h-8" title="" />
        </Link>
        <div className="hidden items-center gap-8 min-[1000px]:flex">
          <Navbar />
          <Button variant="cream" href={whereToBuy.to}>
            {whereToBuy.label}
          </Button>
        </div>
        <div className="min-[1000px]:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
