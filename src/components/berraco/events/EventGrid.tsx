import type { BerracoEvent } from '../../../types/berraco.types';
import { EventCard } from './EventCard';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

interface EventGridProps {
  featured: BerracoEvent | null;
  upcoming: BerracoEvent[];
}

/** Renders the featured event plus any upcoming ones; scalable to N events. */
export function EventGrid({ featured, upcoming }: EventGridProps) {
  if (!featured && upcoming.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-dashed border-[var(--color-line-strong)] bg-surface-2 px-6 py-16 text-center">
        <Icon name="calendar" size={40} className="text-sage" />
        <p className="font-display text-2xl text-cream">Aún no hay eventos publicados</p>
        <p className="max-w-sm text-[color:var(--color-ink-muted)]">
          Estamos preparando la próxima fiesta berraca. Síguenos para no perderte el próximo anuncio.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {featured ? (
        <Reveal>
          <EventCard event={featured} featured />
        </Reveal>
      ) : null}

      {upcoming.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {upcoming.map((event, i) => (
            <Reveal key={event.slug} delay={i * 80}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
