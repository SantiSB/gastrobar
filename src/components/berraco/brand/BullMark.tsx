import { cn } from '../../../lib/cn';

interface BullMarkProps {
  /** Rendered width in px (height scales with the mascot aspect ratio). */
  width?: number;
  className?: string;
  priority?: boolean;
}

/** Native aspect ratio of the exported mascot (700×1161). */
const RATIO = 700 / 1161;

/** Berraco's brand mascot — the bull in the bomber jacket. */
export function BullMark({ width = 220, className, priority = false }: BullMarkProps) {
  const height = Math.round(width / RATIO);
  return (
    <img
      src="/brand/mascota-berraco.png"
      alt="Mascota de Berraco, un toro con chaqueta bomber"
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('block select-none', className)}
      style={{ width, height }}
      draggable={false}
    />
  );
}
