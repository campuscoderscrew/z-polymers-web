/**
 * Where to buy
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import ResellerList from '@/components/pages/ResellerList';

export default function WhereToBuy() {
  return (
    <>
      <Seo
        title="Where to buy"
        description="Buy Tullomer™ filament and fiber from Z-Polymers or an authorized reseller."
        path="/where-to-buy"
      />
      <Band>
        <PageHero />
      </Band>
      <Band tone="alt">
        <ResellerList />
      </Band>
    </>
  );
}
