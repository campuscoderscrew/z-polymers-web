# Islands

Interactive parts only (tabs, charts, lookups). Everything else is plain Astro and ships no JavaScript.

- One React component per file, default export, `.tsx`.
- Add it to a page with a client directive. Prefer `client:visible`:
  ```astro
  ---
  import SpecTabs from '@/islands/SpecTabs';
  ---
  <SpecTabs client:visible />
  ```
- Style with the same Tailwind token classes as everywhere else (`bg-surface`, `text-fg`, `rounded-btn` and so on). No hex codes.
- Spec numbers come from `@/lib/specs` (`spec`, `specRange`, `specMethod`), never typed in.
- Icons: `lucide-react` with `strokeWidth={1.75}` and `aria-hidden="true"` when decorative.
- Keyboard first: follow the WAI-ARIA pattern for the widget. `SpecTabs.tsx` is the reference for tabs.
