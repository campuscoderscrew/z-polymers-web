/**
 * Z-CAD
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';
import ZcadTool from '@/components/pages/ZcadTool';

export default function ZCad() {
  return (
    <>
      <Seo
        title="Z-CAD"
        description="Z-CAD from Z-Polymers: reinforce a 3D printed part with Tullomer™."
        path="/z-cad"
      />
      <Band>
        <PageHero
          page="Z-CAD"
          title="Z-CAD"
          accent="does the second model for you."
          lede="Adding reinforcement used to mean designing every part twice. Z-CAD generates the Tullomer reinforcement body automatically and optimizes where it goes, so it fits into the workflow you already have."
        />
      </Band>
      <Band tone="alt">
        <ZcadTool />
      </Band>
    </>
  );
}
