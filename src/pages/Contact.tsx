/**
 * Contact. Sections follow the team sheet.
 */
import Seo from '@/components/Seo';
import Band from '@/components/Band';
import PageHero from '@/components/shared/PageHero.jsx';
import ContactForm from '@/components/pages/ContactForm.jsx';
import ContactInfo from '@/components/pages/ContactInfo.jsx';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Z-Polymers about Tullomer™ filament, fiber, samples and distribution."
        path="/contact"
      />
      <Band>
        <PageHero />
      </Band>
      <Band tone="alt">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Band>
    </>
  );
}
