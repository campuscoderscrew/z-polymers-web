/**
 * Home. Build section by section from the concept page ("Website v2").
 */
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import WhereToBuyBand from '@/components/WhereToBuyBand';

export default function Home() {
  return (
    <>
      <Seo
        title="Z-Polymers | Tullomer™ filament and fiber"
        description="Z-Polymers makes Tullomer™, sold as 3D printing filament and as fiber. Specs, print settings, applications and where to buy."
        path="/"
      />
      <PageHero
        eyebrow="Tullomer™"
        title="Tullomer™ filament and fiber"
        lede="TODO: hero lede from the concept page. Lead with the number, then explain it."
      >
        <Button href="/material">Explore the material</Button>
        <Button href="/contact" variant="outline">
          Request a sample
        </Button>
      </PageHero>

      <Section tone="alt" id="products" heading="Two forms, one material">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Filament" href="/material" eyebrow="3D printing">
            TODO: one-line summary from the concept page.
          </Card>
          <Card title="Fiber" href="/material/fiber" eyebrow="Fiber">
            TODO: one-line summary from the concept page.
          </Card>
        </div>
      </Section>

      <Section tone="steel" id="feature" heading="Feature band">
        <p className="type-body mx-auto text-center">TODO: the single steel feature section on this page.</p>
      </Section>

      <Section tone="bg" id="applications" heading="Applications">
        <p className="type-body mx-auto text-center">TODO: build from the concept page.</p>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
