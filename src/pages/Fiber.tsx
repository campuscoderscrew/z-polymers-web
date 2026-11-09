/**
 * Tullomer fiber
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function Fiber() {
  return (
    <>
      <Seo
        title="Tullomer fiber"
        description="Tullomer™ fiber: properties, formats and technical data."
        path="/material/fiber"
      />
      <PageHero
        eyebrow="Material"
        title="Tullomer™ fiber"
        lede="Properties, formats and technical data for Tullomer™ fiber."
      />

      <Section tone="alt" id="key-properties" heading="Key properties">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="formats" heading="Formats">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="bg" id="technical-data" heading="Technical data">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
