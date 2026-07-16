import { cn } from '../../../lib/cn';

type WordmarkVariant = 'cream' | 'green' | 'black';

interface WordmarkProps {
  variant?: WordmarkVariant;
  /** Rendered height in px (width scales with the logo aspect ratio). */
  height?: number;
  className?: string;
  priority?: boolean;
}

const SRC: Record<WordmarkVariant, string> = {
  cream: '/brand/berraco-wordmark-cream.png',
  green: '/brand/berraco-wordmark-green.png',
  black: '/brand/berraco-wordmark-black.png',
};

/** Native aspect ratio of the exported wordmark (1544×576). */
const RATIO = 1544 / 576;

export function Wordmark({ variant = 'cream', height = 40, className, priority = false }: WordmarkProps) {
  const width = Math.round(height * RATIO);
  return (
    <img
      src={SRC[variant]}
      alt="Berraco Gastrobar"
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('block h-auto w-auto select-none', className)}
      style={{ height, width }}
      draggable={false}
    />
  );
}
