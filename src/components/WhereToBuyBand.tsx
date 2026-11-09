/**
 * The single cream band on a page: the "Where to buy" call to action.
 * Use at most once per page.
 */
import { Link } from 'react-router';
import Section from './Section';
import { buttonBase } from './Button';

type Props = {
  heading?: string;
  text?: string;
};

export default function WhereToBuyBand({
  heading = 'Where to buy Tullomer™',
  text = 'Buy filament and fiber from Z-Polymers directly or through an authorized distributor.',
}: Props) {
  return (
    <Section tone="cream" id="where-to-buy-cta" heading={heading}>
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="type-lede">{text}</p>
        <Link to="/where-to-buy" className={`${buttonBase} bg-ink text-cream hover:text-cream hover:opacity-90`}>
          Find a seller
        </Link>
      </div>
    </Section>
  );
}
