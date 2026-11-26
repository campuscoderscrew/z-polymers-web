/**
 * #7 Section heading · Sprint 47, task 2
 * Used on: Most sections (via <Band heading={...}>)
 * Concept layout: label (with a short rule) + h2 on the left, intro on the right from md up.
 * Brand type: h2 is .type-section (Quicksand 500, steel light), left-aligned here, normal case.
 */
export type SectionHeadingProps = {
  label?: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({ label, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
      <div className="flex flex-col gap-4">
        {label && (
          <p className="type-label flex items-center gap-3 before:h-px before:w-6 before:bg-current">{label}</p>
        )}
        <h2 className="type-section text-left">{title}</h2>
      </div>
      {intro && <p className="type-lede md:justify-self-end">{intro}</p>}
    </div>
  );
}
