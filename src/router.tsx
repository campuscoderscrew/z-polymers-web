/**
 * All routes. To add a page: create src/pages/YourPage.tsx and add it here
 * (and to src/components/nav.ts if it belongs in the menu).
 */
import { createBrowserRouter } from 'react-router';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import Material from './pages/Material';
import Fiber from './pages/Fiber';
import Applications from './pages/Applications';
import ZCad from './pages/ZCad';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import WhereToBuy from './pages/WhereToBuy';
import Styleguide from './pages/Styleguide';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/material', element: <Material /> },
      { path: '/material/fiber', element: <Fiber /> },
      { path: '/applications', element: <Applications /> },
      { path: '/z-cad', element: <ZCad /> },
      { path: '/resources', element: <Resources /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/where-to-buy', element: <WhereToBuy /> },
      { path: '/styleguide', element: <Styleguide /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
