import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Button from './Button';

/**
 * #2 Header · Sprint 46, task 6
 * Used on: Every page
 * Note: Where to buy is the one cream button
 * Replace this placeholder div with the real component. Keep the export name.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="max-w-site mx-auto flex items-start gap-4 px-5 py-3">
        <div className="placeholder flex-1">
          <p className="placeholder-title">#2 Header</p>
          <ul>
            <li>Logo on the left (links to Home)</li>
            <li>#3 Navbar (1000px and wider)</li>
            <li>#8 Button: "Where to buy" (cream)</li>
            <li>#4 Mobile menu (under 1000px)</li>
            <li>Sticks to the top when scrolling</li>
          </ul>
        </div>
        <div className="hidden flex-1 flex-col gap-3 lg:flex">
          <Navbar />
          <Button variant="cream" href="/where-to-buy">Where to buy</Button>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
