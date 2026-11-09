import ChecklistCard from '../shared/ChecklistCard.jsx';

/**
 * #19 Why replace aluminum and steel · Sprint 49, task 3
 * Used on: Material
 * Note: Reuse #10 Checklist card
 * Replace this placeholder div with the real component. Keep the export name.
 */
export default function WhyReplaceMetals() {
  return (
    <div className="placeholder min-h-64">
      <p className="placeholder-title">#19 Why replace aluminum and steel</p>
      <ul>
        <li>Two #10 Checklist cards side by side</li>
        <li>vs aluminum and steel | vs other polymers</li>
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        <ChecklistCard />
        <ChecklistCard />
      </div>
    </div>
  );
}
