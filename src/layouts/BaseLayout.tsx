/**
 * Site shell: skip link, #1 Notice bar, #2 Header, routed page, #5 Footer.
 * Notice bar, header and footer are the real shared components (Sprint 46).
 */
import { Outlet, ScrollRestoration } from 'react-router';
import NoticeBar from '@/components/shared/NoticeBar';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function BaseLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-[60] rounded-btn bg-steel px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <NoticeBar />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border bg-bg-alt">
        <div className="container-site py-12">
          <Footer />
        </div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
