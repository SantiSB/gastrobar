import type { ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export type BadgeTone = 'orange' | 'sage' | 'cream' | 'green' | 'outline';

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const TONES: Record<BadgeTone, string> = {
  orange: 'bg-orange text-cream',
  sage: 'bg-sage text-green-950',
  cream: 'bg-cream text-green-950',
  green: 'bg-green-700 text-cream',
  outline: 'bg-[rgba(254,251,226,0.06)] text-cream border border-[var(--color-line-strong)]',
};

export function Badge({ children, tone = 'outline', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1',
        'text-[0.68rem] font-semibold uppercase tracking-[0.14em] leading-none whitespace-nowrap',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
