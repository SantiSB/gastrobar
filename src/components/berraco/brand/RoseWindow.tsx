import type { SVGProps } from 'react';

interface RoseWindowProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Rosetón — the gothic rose-window motif that recurs across the
 * Berraco menu. Decorative only; inherits `color` via currentColor.
 */
export function RoseWindow({ size = 320, ...props }: RoseWindowProps) {
  const petals = Array.from({ length: 12 });
  const trefoils = Array.from({ length: 12 });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {/* Inner petals */}
      {petals.map((_, i) => (
        <g key={`p-${i}`} transform={`rotate(${i * 30} 100 100)`}>
          <path
            d="M100 40 C110 58 110 74 100 88 C90 74 90 58 100 40 Z"
            fill="currentColor"
            opacity="0.9"
          />
        </g>
      ))}
      {/* Outer trefoils */}
      {trefoils.map((_, i) => (
        <g key={`t-${i}`} transform={`rotate(${i * 30 + 15} 100 100)`}>
          <circle cx="100" cy="24" r="4.5" fill="currentColor" opacity="0.55" />
          <circle cx="94" cy="32" r="4.5" fill="currentColor" opacity="0.55" />
          <circle cx="106" cy="32" r="4.5" fill="currentColor" opacity="0.55" />
        </g>
      ))}
      <circle cx="100" cy="100" r="14" fill="currentColor" />
      <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="3" opacity="0.3" />
    </svg>
  );
}
