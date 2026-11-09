/** Site shell: skip link, header, routed page, footer. */
import { Outlet, ScrollRestoration } from 'react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BaseLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
