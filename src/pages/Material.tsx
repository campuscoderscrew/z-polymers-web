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
        <PageHero
          page="Material"
          title="Tullomer™"
          accent="super polymer"
          lede="A high-performance liquid crystal polymer, produced as pellets, 3D printing filament, ultra-fine monofilament and multifilament yarn. Lightweight and very strong, with high thermal performance and the chemical resistance to outlast other polymers."
        />
      </Band>
      <Band tone="alt">
        <SpecRail />
      </Band>
      <Band>
        <SpecTable />
      </Band>
      <Band tone="alt" heading={{
          label: 'Compared with metals',
          title: 'Why replace aluminum and steel',
          intro: 'Against aluminum, stainless steel and magnesium, Tullomer parts are lighter, resist corrosion and come off the printer ready to use.',
        }}>
        <WhyReplaceMetals />
      </Band>
      <Band>
        <DownloadsList />
      </Band>
      <Band tone="alt" heading={{
          label: 'See it tested',
          title: "Don't take our word for it",
          intro: 'Pull tests, adhesion demos and independent reviews.',
        }}>
        <VideoSection />
      </Band>
    </>
  );
}
