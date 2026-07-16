import type { ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export type SectionTone = 'bg' | 'surface' | 'surface-2' | 'brown';

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  /** Adds the standard vertical rhythm. */
  padded?: boolean;
  className?: string;
  /** Extra content rendered before children (decorative layers). */
  decor?: ReactNode;
  children: ReactNode;
  'aria-label'?: string;
}

const TONES: Record<SectionTone, string> = {
  bg: 'bg-bg',
  surface: 'bg-surface',
  'surface-2': 'bg-surface-2',
  brown: 'bg-brown',
};

/**
 * Semantic <section> wrapper with brand background tones and a
 * width-constrained inner container. Keeps every section consistent.
 */
export function Section({
  id,
  tone = 'bg',
  padded = true,
  className,
  decor,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', TONES[tone], padded && 'section-y', className)}
      {...rest}
    >
      {decor}
      <div className="container-berraco relative" style={{ zIndex: 'var(--z-content)' }}>
        {children}
      </div>
    </section>
  );
}
