/**
 * #10 Checklist card · Sprint 47, task 4
 * Used on: #16 Pure vs MMP cards, #19 Why replace aluminum and steel
 * Bordered card: small label, optional title, list with diamond bullets, optional "Best for" line.
 */
type Props = {
  label: string;
  title?: string;
  items: string[];
  bestFor?: string;
};

export default function ChecklistCard({ label, title, items, bestFor }: Props) {
  return (
    <article className="flex min-w-0 flex-col gap-5 rounded-card border border-border bg-surface p-6 md:p-8">
      <p className="type-label">{label}</p>
      {title && <h3 className="type-card">{title}</h3>}
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="type-body grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2.5 border-t border-border py-3 text-fg-strong before:mt-2.5 before:size-2 before:rotate-45 before:border-[1.5px] before:border-accent"
          >
            {item}
          </li>
        ))}
      </ul>
      {bestFor && <p className="type-caption">{bestFor}</p>}
    </article>
  );
}
