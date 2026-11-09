/**
 * Where to buy. The single cream band on this page is the seller list.
 */
import { Link } from 'react-router';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function WhereToBuy() {
  return (
    <>
      <Seo
        title="Where to buy"
        description="Buy Tullomer™ filament and fiber from Z-Polymers or an authorized distributor."
        path="/where-to-buy"
      />
      <PageHero
        eyebrow="Where to buy"
        title="Where to buy Tullomer™"
        lede="Buy direct from Z-Polymers or from an authorized distributor."
      />

      <Section tone="cream" id="sellers" heading="Sellers">
        <p className="type-body mx-auto text-center">TODO: seller list from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="bulk" heading="Bulk and fiber orders">
        <p className="type-body mx-auto text-center">
          TODO: bulk order details from the concept page. <Link to="/contact">Contact sales</Link>.
        </p>
      </Section>
    </>
  );
}
