import ChecklistCard from '../shared/ChecklistCard';

/**
 * #19 Why replace aluminum and steel · Sprint 49, task 3
 * Used on: Material
 * Two #10 Checklist cards side by side. Copy from concept v2; owner can restyle in Sprint 49.
 */
export default function WhyReplaceMetals() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChecklistCard
        label="Versus metals"
        items={[
          'Higher strength-to-weight and stiffness-to-weight ratios',
          'Excellent corrosion resistance',
          'Major space and weight savings',
          'Advantageous electrical properties',
          'Faster solidification time and higher dimensional stability',
          'No secondary machining',
        ]}
      />
      <ChecklistCard
        label="Versus other printing polymers"
        items={[
          'Exceeds the strength of all commercially available FDM super polymer filaments',
          'Superior thermal stability, low CTE and excellent dimensional stability',
          'Halogen-free flame retardant (UL 94 V-0)',
          'Outstanding chemical resistance and low water absorption',
          'Superior gas barrier with low oxygen and moisture permeability',
          'No annealing or post-processing, and a lower print temperature than PEEK',
        ]}
      />
    </div>
  );
}
