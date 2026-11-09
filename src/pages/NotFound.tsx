import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist on z-polymers.com." noindex />
      <PageHero eyebrow="404" title="Page not found" lede="The page you asked for does not exist or has moved.">
        <Button href="/">Go to the home page</Button>
      </PageHero>
    </>
  );
}
