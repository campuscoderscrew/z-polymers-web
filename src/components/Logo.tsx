/**
 * Z-Polymers logo. Inherits the current text color (fill="currentColor"):
 * text-logo on normal grounds; inside .band-steel / .band-cream it switches
 * to white / ink automatically.
 * Never stretch, rotate or add effects. Size it with a height class only.
 *
 * PLACEHOLDER artwork until the final logo file lands. Replace the <svg>
 * contents (keep fill="currentColor").
 */
type Props = {
  className?: string;
  /** Accessible name. Pass "" when nearby text or a parent label already names it. */
  title?: string;
};

export default function Logo({ className = 'h-8', title = 'Z-Polymers' }: Props) {
  return (
    <svg
      className={`w-auto shrink-0 text-logo ${className}`}
      viewBox="0 0 220 40"
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      preserveAspectRatio="xMinYMid meet"
    >
      <path d="M4 6h28v5L13 30h19v5H3v-5l19-19H4z" />
      <text x="44" y="29" fontFamily="Quicksand, sans-serif" fontWeight="600" fontSize="22" letterSpacing="1">
        Z-POLYMERS
      </text>
    </svg>
  );
}
