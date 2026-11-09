# Z-Polymers Website

The new z-polymers.com, built by Campus Coders Crew, Team Cookiecutter. Z-Polymers sells Tullomer™ as 3D printing filament and as fiber. This site has to look like the established materials company they are, and follow the Z-Polymers Brand Guide v2.0 for typography, colors, logo and voice. Page layout follows the concept page ("Website v2"). See ADR-002.

## Tech stack

| Tool | Job |
| --- | --- |
| Vite | Dev server and production build |
| React 19 + TypeScript | Every page and component |
| React Router | Client-side routing (all routes in `src/router.tsx`) |
| Tailwind CSS v4 | Styling. Brand tokens live in `src/styles/global.css` under `@theme` |
| Fontsource | Self-hosted Quicksand and Nunito Sans |
| lucide-react | Icons, `strokeWidth={1.75}` |
| Netlify / Vercel | Hosting, plus a preview link for every pull request. `netlify.toml` and `vercel.json` are both included and send every route to `index.html` so deep links work |

## Local setup

You need Node.js (current LTS) and Git.

```bash
git clone https://github.com/campuscoderscrew/z-polymers-web.git
cd z-polymers-web
npm install
npm run dev
```

The site runs at http://localhost:4321. Open `/styleguide` first. It shows every color, font and component, so you can confirm your setup matches the brand guide.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Type-check, then build the production site into `dist/` |
| `npm run preview` | Serve the built site locally to check it |
| `npm run check` | Type-check, then run the brand guard |
| `npm run lint:brand` | Brand guard only: hex codes, typed spec numbers, exclamation marks, cream count, pages without `<Seo>` |

VS Code: install the recommended extensions (Tailwind CSS IntelliSense) when prompted.

## Project structure

```
index.html      the single HTML page Vite serves
src/
  main.tsx      entry point: mounts the router, imports global.css
  router.tsx    every route, one line each
  layouts/      BaseLayout.tsx: skip link, #1 NoticeBar, #2 Header, <Outlet /> for the page, #5 Footer
  pages/        one component per route: Home, Material, Fiber, Applications, ZCad,
                Resources, About, Contact, WhereToBuy, plus Styleguide and NotFound
  components/
    shared/     team sheet #1–#11: NoticeBar, Header, Navbar, MobileMenu, Footer, PageHero,
                SectionHeading, Button, SpecRail, ChecklistCard, StrengthBarChart
    home/       #12–#16: HomeHero, ZcadLiteWidget, PathsCards, HowZcadWorks, PureVsMmpCards
    material/   #17–#20: SpecTable, DownloadsList, WhyReplaceMetals, VideoSection
    pages/      #21–#27: ApplicationCards, ZcadTool, ResourcesList, CompanyStory,
                ContactForm, ContactInfo, ResellerList
    (top level) working building blocks: Band, Section, Card, Logo, Seo, SpecTabs, and
                reference versions of Button.tsx / PageHero.tsx used by Styleguide and 404
  data/         tullomer.json: every Tullomer spec number
  lib/          specs.ts (spec helpers), news.ts (news loader), styles.ts, cx.ts
  content/news/ news posts in Markdown with frontmatter
  styles/       global.css: fonts, brand tokens, type classes
public/         logo.svg, favicon, images/, downloads/ (PDFs)
scripts/        check-brand.mjs: the brand guard
```

## Building your component

The site is split into components #1–#27, matching the team sheet. Each one starts as a dashed placeholder box that lists what belongs there, and it's already placed on the right pages, so you can see where your work will appear.

1. Find your component number on the team sheet and open its file (the header comment has the number, sprint, task and which pages use it). For example, #17 is `src/components/material/SpecTable.tsx`.
2. Replace the placeholder `<div className="placeholder">…</div>` with the real component. **Keep the file name and the export name**, so the pages that use it keep working.
3. Build it from the concept page ("Website v2") with brand tokens and type classes. Reuse the building blocks in `src/components/`: `<Section>`, `<Card>`, `<Logo />`, and the reference `Button.tsx` / `PageHero.tsx`.
4. Something clickable (tabs, charts, lookups)? Use React state. `SpecTabs.tsx` is the reference for keyboard support.
5. Internal links use `<Link to="/route">` from `react-router`, not a plain `<a>`, so pages switch without a reload.
6. Pages live in `src/pages/` and set their title and description with `<Seo>`. Sections are wrapped in `<Band tone="bg | alt">`. New route? Add one line to `src/router.tsx`, and a link in #3 Navbar.
7. Spec numbers: `import { spec, specRange } from '@/lib/specs'` and write `{spec('filament.tensileStrength')}`.
8. Preview it at `http://localhost:4321/<your-route>`.

## Brand rules

These are enforced in code review, and partly by `npm run lint:brand`.

### Colors

Use semantic token names, never hex codes. The site follows the visitor's OS light/dark setting (no toggle). Semantic tokens switch automatically, so you never write mode-specific colors.

| Class | Use | Dark | Light |
| --- | --- | --- | --- |
| `bg-bg` / `bg-bg-alt` | Page ground / alternating band | #171717 / #0E0E0E | #FFFFFF / #F4F4F5 |
| `bg-surface` | Cards and panels | #212121 * | #F4F4F5 |
| `bg-field` | Form inputs | #1B1B1B * | #FFFFFF |
| `text-fg-strong` | Headings | #FFFFFF | #171717 |
| `text-fg` | Body text | #B9BFC5 | #3F454B |
| `text-fg-muted` | Captions and dates | #8B9298 | #5E6670 |
| `text-accent` | Section headings, eyebrows, links, icons | #6F9DC6 | #3E6488 |
| `text-link-hover` | Link hover | #A8C8E2 | #2F5172 |
| `bg-btn-hover` | Primary button hover | #4F78A0 * | #2F5172 * |
| `border-border` | Hairlines | rgb(255 255 255 / 0.12) | #E4E4E7 |
| `border-border-control` | Outlined buttons and inputs | #7A8189 | #7A8189 |
| `outline-focus` | Focus ring (shared, in global.css) | #A8C8E2 | #3E6488 |
| `text-ok` / `text-bad` | Form messages | #93D6A5 / #F2A7A0 | #2F7A4A / #B42318 |
| `text-logo` | The logo's color | #FFFFFF | #1D1F20 |

\* Provisional until the steel ramp arrives (also `steel-dark`).

Fixed brand palette (same in both modes, Brand Guide v2.0): `charcoal` #171717, `near-black` #0E0E0E, `paper` #F4F4F5, `cream` #FBDFA0, `steel` #3E6488, `steel-dark` #2F5172, `steel-light` #6F9DC6, `steel-hover` #A8C8E2, `warm-grey` #B9BFC5, `muted` #8B9298, `ink` #1D1F20. Tailwind's default palette is switched off, so classes like `bg-blue-500` don't exist.

Two bands look the same in both modes. Use `<Section tone="steel">` / `<Section tone="cream">` (or the `band-steel` / `band-cream` classes). They re-point the semantic tokens, so type classes and links inside just work.

- **Steel band** (one feature section per page): white text and white underlined links.
- **Cream** (once per page): reserved for "Where to buy". Other primary buttons are steel. Text on cream is ink.

Check your page in both modes before opening a PR: flip your OS setting, or in Chrome DevTools open Rendering and set "Emulate CSS prefers-color-scheme".

### Typography

Use the type classes, not one-off sizes.

| Class | Font | Use |
| --- | --- | --- |
| `.type-hero` | Quicksand 600, 48–62px | Page hero |
| `.type-section` | Quicksand 500, 30–38px, centered | Section headings |
| `.type-card` | Quicksand 600, 18–22px | Card titles |
| `.type-label` | Quicksand 600, 13px caps | Small labels |
| `.type-lede` | Nunito Sans 18–20px (400 on dark, 300 on light) | Intro paragraph under a heading |
| `.type-body` | Nunito Sans 400, 16px / 1.75 | Body text, max 68 characters wide |
| `.type-caption` | Nunito Sans 400, 13px | Captions and dates |

Quicksand weights are 500 and 600 only. Pure white is for headings, never for long paragraphs.

### Shapes and icons

- Buttons and inputs use `rounded-btn` (8px) and are at least 48px tall (`min-h-12`). Cards and images use `rounded-card` (16px).
- Keyboard focus uses the shared focus ring from global.css; never remove outlines.
- Square corners are only allowed on full-width bands.
- Never put two bands of the same color back to back.
- Icons are Lucide with `strokeWidth={1.75}`: white on dark, ink on cream.

### Logo

Use `<Logo />`. It inherits the text color, so it's white on dark and ink on cream. Never stretch it, rotate it, or add effects. The current artwork is a placeholder until the final file arrives.

### Numbers

Every Tullomer spec comes from `src/data/tullomer.json`. Never type a spec number into a page. Each spec has a `method` field: no claim a test method can't back.

### Voice

- Lead with the number, then explain it in plain words.
- No exclamation marks.
- No claim a test method can't back.

## Git workflow

Never push to main. Every change goes through a pull request.

```bash
git checkout main && git pull                # start from the latest main
git checkout -b your-name/page-name          # e.g. guillaume/filament
# ...make changes...
npm run check
git add .
git commit -m "Add print settings tabs to filament page"
git push -u origin your-name/page-name
```

Then on GitHub:

1. Click **Compare & pull request**.
2. Write a clear title and summary, and paste the deploy preview link.
3. Request a review from the team lead.
4. Address the comments. The lead merges once the PR is approved.

## Pull request checklist

The PR template (`.github/pull_request_template.md`) includes it:

- [ ] Uses brand tokens and type classes only (no hex codes, no stray fonts)
- [ ] Cream appears at most once on the page
- [ ] Spec numbers come from tullomer.json
- [ ] Works at 375px phone width with no sideways scroll
- [ ] Keyboard-usable, visible focus, alt text on images, WCAG AA contrast
- [ ] Uses semantic color tokens; checked in both light and dark mode
- [ ] Page has a title and meta description

## Open items

- Real Tullomer spec values in `src/data/tullomer.json` (currently `null`, shown as "—").
- Final logo file (replace the placeholder in `src/components/Logo.tsx` and `public/logo.svg`).
- Steel ramp from the brand team (replaces the provisional surface, field, steel-dark and btn-hover values).
- Contact form backend (Netlify Forms or a form service, once the host is chosen).
- Default social image `public/og-default.png`.

## Questions

Ask in the team Discord, or comment on your pull request.
