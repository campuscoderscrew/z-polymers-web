/**
 * Home. Section order and copy follow concept v2; #13 Z-CAD Lite sits inside #12 Home hero.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import HomeHero from '@/components/home/HomeHero';
import SpecRail from '@/components/shared/SpecRail';
import StrengthBarChart from '@/components/shared/StrengthBarChart';
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
      <Band
        heading={{
          label: 'Get started',
          title: 'Three ways to try Tullomer',
          intro:
            'Start with a free design tool, buy just the grams your part needs, or have our team check whether Tullomer fits your application.',
        }}
      >
        <PathsCards />
      </Band>
      <Band tone="alt">
        <StrengthBarChart />
      </Band>
      <Band
        heading={{
          label: 'Two ways to use it',
          title: 'Print it pure, or build it in',
          intro:
            'Pure Tullomer keeps every property of the material. Multi-material parts put Tullomer only where the strength is needed, on hardware you may already own.',
        }}
      >
        <PureVsMmpCards />
      </Band>
      <Band
        tone="alt"
        heading={{
          label: 'How Z-CAD works',
          title: 'From your model to a reinforced part',
          intro: 'Continuous-fiber-class reinforcement, without a proprietary printer.',
        }}
      >
        <HowZcadWorks />
      </Band>
    </>
  );
}
