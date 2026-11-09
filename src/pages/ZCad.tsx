/**
 * Z-CAD
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function ZCad() {
  return (
    <>
      <Seo
        title="Z-CAD"
        description="Z-CAD from Z-Polymers."
        path="/z-cad"
      />
      <PageHero
        eyebrow="Z-CAD"
        title="Z-CAD"
        lede="TODO: lede from the concept page."
      />

      <Section tone="alt" id="what-it-does" heading="What it does">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="how-it-works" heading="How it works">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
