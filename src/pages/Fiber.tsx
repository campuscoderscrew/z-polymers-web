/**
 * Tullomer fiber. Not on the team sheet yet: only the page hero for now.
 * Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero';

export default function Fiber() {
  return (
    <>
      <Seo
        title="Tullomer fiber"
        description="Tullomer™ fiber: properties, formats and technical data."
        path="/material/fiber"
      />
      <Band>
        <PageHero />
      </Band>
    </>
  );
}
