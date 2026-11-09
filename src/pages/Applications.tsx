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
        <PageHero />
      </Band>
      <Band tone="alt">
        <ApplicationCards />
      </Band>
    </>
  );
}
