import { useId } from 'react';
import { motion } from 'framer-motion';

interface BerracoLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function BerracoLogo({ size = 48, animated = false, className = '' }: BerracoLogoProps) {
  const uid = useId().replace(/:/g, '');
  const filterId = `glow-b-${uid}`;

  const letterB = (
    <>
      {/* Stem (vertical bar of B) */}
      <rect x="32" y="22" width="9" height="56" rx="2" fill="#efefec" />

      {/* Top bowl of B */}
      <path
        d="M41 22 L54 22 Q68 22 68 36 Q68 50 54 50 L41 50Z"
        fill="#efefec"
      />
      {/* Top bowl inner cutout */}
      <path
        d="M41 27 L53 27 Q62 27 62 36 Q62 45 53 45 L41 45Z"
        fill="#0e3325"
      />

      {/* Bottom bowl of B */}
      <path
        d="M41 50 L56 50 Q72 50 72 64 Q72 78 56 78 L41 78Z"
        fill="#efefec"
      />
      {/* Bottom bowl inner cutout */}
      <path
        d="M41 55 L55 55 Q66 55 66 64 Q66 73 55 73 L41 73Z"
        fill="#0e3325"
      />
    </>
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Berraco logo"
    >
      <defs>
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="50" cy="50" r="47" stroke="#efefec" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#efefec"
        strokeWidth="1.5"
        fill="none"
        filter={`url(#${filterId})`}
      />
      <circle cx="50" cy="50" r="32" fill="rgba(239,239,236,0.04)" />

      {/* B letterform */}
      {animated ? (
        <motion.g
          filter={`url(#${filterId})`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          {letterB}
        </motion.g>
      ) : (
        <g filter={`url(#${filterId})`}>{letterB}</g>
      )}
    </svg>
  );
}
