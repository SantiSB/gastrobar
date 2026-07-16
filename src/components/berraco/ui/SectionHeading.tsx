import { cn } from '../../../lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  /** Renders the title as h1 (hero); defaults to h2. */
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className={cn('eyebrow text-orange-400 mb-3', centered && 'flex items-center justify-center gap-2')}>
          {eyebrow}
        </p>
      ) : null}
      <Tag className="display-2 text-cream text-balance">{title}</Tag>
      {lead ? (
        <p className={cn('mt-4 text-[color:var(--color-ink-muted)] text-base sm:text-lg leading-relaxed', centered && 'mx-auto')}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
