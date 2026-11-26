/**
 * #6 Page hero · Sprint 47, task 1
 * Used on: Every page except Home. Sits inside a <Band>, which supplies the section + container.
 * Breadcrumb (Home / page), two-tone h1 (title in fg-strong, optional accent part in the accent color), intro.
 */
import { Link } from 'react-router';

type Props = {
  /** Page name shown in the breadcrumb. */
  page: string;
  title: string;
  /** Second half of the title, shown in the accent color. */
  accent?: string;
  lede?: string;
};

export default function PageHero({ page, title, accent, lede }: Props) {
  return (
    <div className="flex flex-col items-start gap-5 pt-8 pb-4 md:pt-16 md:pb-8">
      <nav aria-label="Breadcrumb" className="type-label text-fg-muted">
        <ol className="flex gap-2">
          <li>
            <Link to="/" className="text-accent no-underline hover:text-link-hover">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{page}</li>
        </ol>
      </nav>
      <h1 className="type-hero max-w-[18ch]">
        {title}
        {accent && <span className="text-accent"> {accent}</span>}
      </h1>
      {lede && <p className="type-lede">{lede}</p>}
    </div>
  );
}
