/**
 * Applications
 * Build section by section from the concept page ("Website v2").
 * Spec numbers come from @/lib/specs (src/data/tullomer.json), never typed here.
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function Applications() {
  return (
    <>
      <Seo
        title="Applications"
        description="Where Tullomer™ filament and fiber are used, with the data behind each application."
        path="/applications"
      />
      <PageHero
        eyebrow="Applications"
        title="Built with Tullomer™"
        lede="Where engineers use Tullomer™ filament and fiber, and the data behind each use."
      />

      <Section tone="alt" id="by-industry" heading="By industry">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <Section tone="steel" id="case-studies" heading="Case studies">
        <p className="type-body mx-auto text-center">TODO: build this section from the concept page ("Website v2").</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
