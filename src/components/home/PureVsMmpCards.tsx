import ChecklistCard from '../shared/ChecklistCard';

/**
 * #16 Pure vs MMP cards · Sprint 48, task 3
 * Used on: Home
 * Two #10 Checklist cards side by side. Copy from concept v2.
 */
export default function PureVsMmpCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChecklistCard
        label="Pure Tullomer"
        title="Replace PEEK and ULTEM"
        items={[
          'Ultra-low outgassing for vacuum and space',
          'RF-transparent and non-conductive',
          'UL 94 V-0, halogen-free',
          'Resists acids, caustics and autoclave sterilization',
        ]}
        bestFor="Best for UHV fixtures, flight hardware, drone and RF housings, gears."
      />
      <ChecklistCard
        label="Multi-material with Z-CAD"
        title="Reinforce the parts you already print"
        items={[
          'Tullomer reinforcement inside a second material, such as TPU',
          'Strong enough to replace machined aluminum',
          'Runs on desktop dual-nozzle printers, no proprietary hardware',
          'Z-CAD generates and places the reinforcement for you',
        ]}
        bestFor="Best for jigs and fixtures, tooling, end-effectors, brackets, O&P sockets."
      />
    </div>
  );
}
