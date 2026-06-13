import { useId } from 'react';
import { motion } from 'framer-motion';

interface CatarsisLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function CatarsisLogo({ size = 48, animated = false, className = '' }: CatarsisLogoProps) {
  const uid = useId().replace(/:/g, '');
  const filterId = `glow-${uid}`;

  const phoenix = (
    <>
      {/* Crest flames */}
      <path d="M43 34 C40 25 42 18 45 14 C47 20 46 27 44 34Z" fill="#e50914" opacity="0.6" />
      <path d="M47 32 C44 22 46 14 50 9 C54 14 56 22 53 32Z" fill="#e50914" />
      <path d="M57 34 C60 25 58 18 55 14 C53 20 54 27 56 34Z" fill="#e50914" opacity="0.6" />

      {/* Head */}
      <circle cx="50" cy="38" r="5.5" fill="#e50914" />

      {/* Beak */}
      <path d="M47.5 34.5 L50 29 L52.5 34.5Z" fill="#e50914" />

      {/* Body */}
      <ellipse cx="50" cy="50" rx="5" ry="7" fill="#e50914" />

      {/* Left wing */}
      <path
        d="M45 46 C36 39 22 34 12 41 C9 47 13 54 20 56 C28 57 36 54 44 55Z"
        fill="#e50914"
      />

      {/* Right wing */}
      <path
        d="M55 46 C64 39 78 34 88 41 C91 47 87 54 80 56 C72 57 64 54 56 55Z"
        fill="#e50914"
      />

      {/* Tail feathers */}
      <path d="M46 57 C42 65 41 72 43 77 C47 72 48 64 48 57Z" fill="#e50914" opacity="0.7" />
      <path d="M48 57 C47 66 47 73 50 79 C53 73 53 66 52 57Z" fill="#e50914" />
      <path d="M54 57 C58 65 59 72 57 77 C53 72 52 64 52 57Z" fill="#e50914" opacity="0.7" />

      {/* Wing-tip glows */}
      <circle cx="11" cy="48" r="3" fill="#e50914" opacity="0.25" />
      <circle cx="89" cy="48" r="3" fill="#e50914" opacity="0.25" />
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
      aria-label="Catarsis Club logo"
    >
      <defs>
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rings */}
      <circle cx="50" cy="50" r="47" stroke="#e50914" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#e50914"
        strokeWidth="1.5"
        fill="none"
        filter={`url(#${filterId})`}
      />
      <circle cx="50" cy="50" r="32" fill="rgba(229,9,20,0.04)" />

      {/* Phoenix */}
      {animated ? (
        <motion.g
          filter={`url(#${filterId})`}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          {phoenix}
        </motion.g>
      ) : (
        <g filter={`url(#${filterId})`}>{phoenix}</g>
      )}
    </svg>
  );
}
