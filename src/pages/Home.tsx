/**
 * Home. Sections follow the team sheet; each placeholder is replaced by its owner.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import HomeHero from '@/components/home/HomeHero';
import SpecRail from '@/components/shared/SpecRail';
import StrengthBarChart from '@/components/shared/StrengthBarChart';
import ZcadLiteWidget from '@/components/home/ZcadLiteWidget';
import PathsCards from '@/components/home/PathsCards';
import HowZcadWorks from '@/components/home/HowZcadWorks';
import PureVsMmpCards from '@/components/home/PureVsMmpCards';

export default function Home() {
  return (
    <>
      <Seo
        title="Z-Polymers | Tullomer™ filament and fiber"
        description="Z-Polymers makes Tullomer™, sold as 3D printing filament and as fiber. Specs, print settings, applications and where to buy."
        path="/"
      />
      <Band>
        <HomeHero />
      </Band>
      <Band tone="alt">
        <SpecRail />
      </Band>
      <Band withHeading>
        <StrengthBarChart />
      </Band>
      <Band tone="alt" withHeading>
        <ZcadLiteWidget />
      </Band>
      <Band withHeading>
        <PathsCards />
      </Band>
      <Band tone="alt" withHeading>
        <HowZcadWorks />
      </Band>
      <Band withHeading>
        <PureVsMmpCards />
      </Band>
    </>
  );
}
