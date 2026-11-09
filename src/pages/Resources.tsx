/**
 * Resources
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources"
        description="Datasheets, safety data sheets, print guides and news from Z-Polymers."
        path="/resources"
      />
      <PageHero
        eyebrow="Resources"
        title="Resources"
        lede="Datasheets, safety data sheets, print guides and news."
      />

      <Section tone="alt" id="downloads" heading="Downloads">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="guides" heading="Guides">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="bg" id="news" heading="News">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
