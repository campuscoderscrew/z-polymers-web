/**
 * About
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import CompanyStory from '@/components/pages/CompanyStory';

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Z-Polymers, the company behind Tullomer™."
        path="/about"
      />
      <Band>
        <PageHero />
      </Band>
      <Band tone="alt">
        <CompanyStory />
      </Band>
    </>
  );
}
