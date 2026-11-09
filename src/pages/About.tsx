/**
 * About
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Z-Polymers, the company behind Tullomer™."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="About Z-Polymers"
        lede="The company behind Tullomer™."
      />

      <Section tone="alt" id="our-story" heading="Our story">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="team" heading="Team">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
