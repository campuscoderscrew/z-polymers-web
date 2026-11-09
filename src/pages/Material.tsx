/**
 * Tullomer filament
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function Material() {
  return (
    <>
      <Seo
        title="Tullomer filament"
        description="Tullomer™ 3D printing filament: mechanical properties, print settings and datasheets."
        path="/material"
      />
      <PageHero
        eyebrow="Material"
        title="Tullomer™ filament"
        lede="Mechanical data, print settings and datasheets for Tullomer™ 3D printing filament."
      />

      <Section tone="alt" id="key-properties" heading="Key properties">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="print-settings" heading="Print settings">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="bg" id="datasheets" heading="Datasheets">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
