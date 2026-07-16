import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { RoseWindow } from '../brand/RoseWindow';
import { EventGrid } from '../events/EventGrid';
import { getFeaturedEvent, getUpcomingEvents } from '../../../data/events';

export function EventsSection() {
  const featured = getFeaturedEvent();
  const upcoming = getUpcomingEvents();

  return (
    <Section
      id="eventos"
      tone="bg"
      decor={
        <RoseWindow
          size={520}
          className="pointer-events-none absolute -left-40 top-10 text-green-700 opacity-[0.12]"
          style={{ zIndex: 'var(--z-base)' }}
        />
      }
    >
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Agenda Berraco"
          title="Eventos que se viven"
          lead="Noches con carácter en el corazón de Pasto. Asegura tu entrada antes de que se agote."
        />
      </div>

      <EventGrid featured={featured} upcoming={upcoming} />
    </Section>
  );
}
