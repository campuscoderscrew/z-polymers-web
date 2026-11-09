/**
 * Resources
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero.jsx';
import ResourcesList from '@/components/pages/ResourcesList.jsx';
import VideoSection from '@/components/material/VideoSection.jsx';

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources"
        description="Datasheets, safety data sheets, print guides and videos from Z-Polymers."
        path="/resources"
      />
      <Band>
        <PageHero />
      </Band>
      <Band tone="alt">
        <ResourcesList />
      </Band>
      <Band withHeading>
        <VideoSection />
      </Band>
    </>
  );
}
