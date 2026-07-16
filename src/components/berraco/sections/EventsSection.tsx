import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { RoseWindow } from '../brand/RoseWindow';
import { Icon } from '../ui/Icon';
import { EventGrid } from '../events/EventGrid';
import { getFeaturedEvent, getUpcomingEvents } from '../../../data/events';
import { PASSTIX_URL } from '../../../lib/constants';

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

        {/* Passtix — ticketera oficial (mención sutil) */}
        <a
          href={PASSTIX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-[var(--radius-pill)] border border-[var(--color-line)] px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)] transition-colors duration-[var(--dur-base)] hover:border-[var(--color-line-strong)] hover:text-[color:var(--color-ink-muted)] sm:self-auto"
        >
          <Icon name="ticket" size={14} className="text-orange-400" />
          Ticketera oficial · PASSTIX
        </a>
      </div>

      <EventGrid featured={featured} upcoming={upcoming} />
    </Section>
  );
}
