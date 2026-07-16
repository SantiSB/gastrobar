import type { BerracoEvent } from '../../../types/berraco.types';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';
import { cn } from '../../../lib/cn';

interface EventCardProps {
  event: BerracoEvent;
  /** Featured events use the larger 2-column layout on desktop. */
  featured?: boolean;
}

const STATUS_LABEL: Record<BerracoEvent['status'], string> = {
  upcoming: 'Entradas disponibles',
  soldout: 'Agotado',
  finished: 'Finalizado',
  hidden: '',
};

export function EventCard({ event, featured = false }: EventCardProps) {
  const isActive = event.status === 'upcoming';
  const srcSet = `/events/${event.slug}-960.jpg 960w, ${event.image} 1920w`;

  const MetaRow = (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[color:var(--color-ink-muted)]">
      <li className="inline-flex items-center gap-2">
        <Icon name="calendar" size={16} className="text-orange-400" />
        {event.dateLabel}
      </li>
      <li className="inline-flex items-center gap-2">
        <Icon name="clock" size={16} className="text-orange-400" />
        {event.time}
      </li>
      <li className="inline-flex items-center gap-2">
        <Icon name="map" size={16} className="text-orange-400" />
        {event.location}
      </li>
    </ul>
  );

  return (
    <a
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${event.name} — ${STATUS_LABEL[event.status]}. Abrir entradas en una nueva pestaña.`}
      aria-disabled={!isActive || undefined}
      className={cn(
        'group relative grid overflow-hidden rounded-[var(--radius-xl)] no-underline',
        'border border-[var(--color-line)] bg-surface-2',
        'shadow-[var(--shadow-md)] transition-[transform,box-shadow,border-color] duration-[var(--dur-base)] ease-[var(--ease-brand)]',
        'hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[var(--shadow-lg)]',
        'active:translate-y-0',
        featured ? 'lg:grid-cols-2' : 'grid-cols-1',
        !isActive && 'opacity-90',
      )}
    >
      {/* ---- Media ------------------------------------------- */}
      <div
        className={cn(
          'relative overflow-hidden',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/9]',
        )}
      >
        <img
          src={event.image}
          srcSet={srcSet}
          sizes={featured ? '(min-width: 64rem) 50vw, 100vw' : '100vw'}
          alt={event.imageAlt}
          width={1920}
          height={720}
          loading="lazy"
          decoding="async"
          className={cn(
            'h-full w-full object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-brand)]',
            isActive && 'group-hover:scale-[1.04]',
            !isActive && 'grayscale-[0.35]',
          )}
        />
        {/* legibility gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,26,18,0) 45%, rgba(6,26,18,0.65) 100%)',
          }}
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone="orange">{event.category.label}</Badge>
          {event.status === 'soldout' && <Badge tone="cream">Agotado</Badge>}
          {event.status === 'finished' && <Badge tone="outline">Finalizado</Badge>}
        </div>
      </div>

      {/* ---- Body -------------------------------------------- */}
      <div className={cn('flex flex-col gap-4 p-6 sm:p-8', featured && 'lg:justify-center lg:p-10')}>
        {event.tagline ? (
          <p className="eyebrow text-sage">{event.tagline}</p>
        ) : null}

        <h3
          className={cn(
            'font-display font-semibold leading-[0.95] text-cream',
            featured ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl',
          )}
        >
          {event.name}
        </h3>

        <p className="text-[color:var(--color-ink-muted)] leading-relaxed max-w-prose">
          {event.description}
        </p>

        {MetaRow}

        {/* CTA — visual affordance; the whole card is the link */}
        <span
          className={cn(
            'mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3.5 sm:w-auto',
            'text-[0.72rem] font-semibold uppercase tracking-[0.16em] min-h-[44px]',
            'transition-[background,box-shadow,transform] duration-[var(--dur-base)] ease-[var(--ease-brand)]',
            isActive
              ? 'bg-orange text-cream shadow-[var(--shadow-glow-orange)] group-hover:bg-orange-500'
              : 'bg-[rgba(254,251,226,0.08)] text-[color:var(--color-ink-faint)]',
          )}
        >
          <Icon name="ticket" size={18} />
          {isActive ? 'Comprar entradas' : STATUS_LABEL[event.status]}
          {isActive && (
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-[var(--dur-base)] group-hover:translate-x-1"
            />
          )}
        </span>
      </div>
    </a>
  );
}
