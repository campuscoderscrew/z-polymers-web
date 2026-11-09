/**
 * Per-page <title> and meta description. Every page must render one.
 * React 19 hoists <title>, <meta> and <link> into <head> automatically.
 */
const SITE = 'https://z-polymers.com';

type Props = {
  /** Page title. " | Z-Polymers" is appended unless it already contains it. */
  title: string;
  /** Meta description, about 150 characters. */
  description: string;
  /** Path for the canonical URL, e.g. "/material". */
  path?: string;
  noindex?: boolean;
};

export default function Seo({ title, description, path, noindex }: Props) {
  const fullTitle = title.includes('Z-Polymers') ? title : `${title} | Z-Polymers`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {path && <link rel="canonical" href={`${SITE}${path}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  );
}
