import ChecklistCard from '../shared/ChecklistCard.jsx';

/**
 * #16 Pure vs MMP cards · Sprint 48, task 3
 * Used on: Home
 * Note: Reuse #10 Checklist card
 * Replace this placeholder div with the real component. Keep the export name.
 */
export default function PureVsMmpCards() {
  return (
    <div className="placeholder min-h-64">
      <p className="placeholder-title">#16 Pure vs MMP cards</p>
      <ul>
        <li>Two #10 Checklist cards side by side</li>
        <li>Pure Tullomer | Multi-material with Z-CAD</li>
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        <ChecklistCard />
        <ChecklistCard />
      </div>
    </div>
  );
}
