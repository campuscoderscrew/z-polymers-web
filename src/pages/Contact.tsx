/**
 * Contact. The form is a static placeholder: wire it to Netlify Forms or a
 * form service once hosting is chosen.
 */
import type { FormEvent } from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Button from '@/components/Button';
import WhereToBuyBand from '@/components/WhereToBuyBand';
import { fieldClass } from '@/lib/styles';

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to the form backend.
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Z-Polymers about Tullomer™ filament, fiber, samples and distribution."
        path="/contact"
      />
      <PageHero eyebrow="Contact" title="Talk to Z-Polymers" lede="Questions about Tullomer™, samples or distribution." />

      <Section tone="alt" id="form" heading="Send a message">
        <form className="mx-auto grid max-w-xl gap-6" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name" className="type-label">
              Name
            </label>
            <input id="name" name="name" autoComplete="name" required className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="type-label">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="type-label">
              Message
            </label>
            <textarea id="message" name="message" rows={5} required className={fieldClass} />
          </div>
          <Button type="submit" className="justify-self-start">
            Send message
          </Button>
        </form>
      </Section>

      <WhereToBuyBand />
    </>
  );
}
