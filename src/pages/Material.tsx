/**
 * Material (Tullomer filament). Sections follow the team sheet.
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import SpecRail from '@/components/shared/SpecRail';
import SpecTable from '@/components/material/SpecTable';
import WhyReplaceMetals from '@/components/material/WhyReplaceMetals';
import DownloadsList from '@/components/material/DownloadsList';
import VideoSection from '@/components/material/VideoSection';

export default function Material() {
  return (
    <>
      <Seo
        title="Tullomer filament"
        description="Tullomer™ 3D printing filament: mechanical properties, print settings and datasheets."
        path="/material"
      />
      <Band>
        <PageHero />
      </Band>
      <Band tone="alt">
        <SpecRail />
      </Band>
      <Band withHeading>
        <SpecTable />
      </Band>
      <Band tone="alt" withHeading>
        <WhyReplaceMetals />
      </Band>
      <Band withHeading>
        <DownloadsList />
      </Band>
      <Band tone="alt" withHeading>
        <VideoSection />
      </Band>
    </>
  );
}
