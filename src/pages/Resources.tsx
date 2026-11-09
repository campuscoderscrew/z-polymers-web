/**
 * Resources
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import ResourcesList from '@/components/pages/ResourcesList';
import VideoSection from '@/components/material/VideoSection';

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
