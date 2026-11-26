/**
 * Applications
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import ApplicationCards from '@/components/pages/ApplicationCards';

export default function Applications() {
  return (
    <>
      <Seo
        title="Applications"
        description="Where Tullomer™ filament and fiber are used, with the data behind each application."
        path="/applications"
      />
      <Band>
        <PageHero
          page="Applications"
          title="Applications"
          lede="Pure Tullomer parts print entirely in Tullomer and keep every property of the material. Multi-material parts use Z-CAD to place Tullomer reinforcement inside a second material."
        />
      </Band>
      <Band tone="alt">
        <ApplicationCards />
      </Band>
    </>
  );
}
