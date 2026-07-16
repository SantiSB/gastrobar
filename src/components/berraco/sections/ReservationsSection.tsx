import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { RoseWindow } from '../brand/RoseWindow';
import { WHATSAPP_RESERVE_URL, HOURS, ADDRESS, CITY, MAPS_URL } from '../../../lib/constants';

const PERKS = [
  { icon: 'calendar' as const, title: 'Reserva en segundos', text: 'Escríbenos por WhatsApp y confirmamos tu mesa al instante.' },
  { icon: 'clock' as const, title: 'Horario', text: HOURS },
  { icon: 'map' as const, title: 'Dónde estamos', text: `${ADDRESS}, ${CITY}`, href: MAPS_URL },
];

export function ReservationsSection() {
  return (
    <Section
      id="reservas"
      tone="brown"
      decor={
        <RoseWindow
          size={560}
          className="pointer-events-none absolute -right-40 -bottom-32 text-cream opacity-[0.06]"
          style={{ zIndex: 'var(--z-base)' }}
        />
      }
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-orange-400">Reservas</p>
          <h2 className="display-2 mt-3 text-cream text-balance">
            Aparta tu mesa y vívelo berraco
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
            Ya sea una noche entre amigos, una celebración o un plan de fin de semana, te guardamos
            el mejor lugar. Reserva directo por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={WHATSAPP_RESERVE_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              <Icon name="whatsapp" size={20} />
              Reservar por WhatsApp
            </Button>
            <Button href="#eventos" variant="outline" size="lg">
              Ver eventos
            </Button>
          </div>
        </div>

        <ul className="grid gap-4">
          {PERKS.map((perk) => {
            const Wrapper = perk.href ? 'a' : 'div';
            return (
              <li key={perk.title}>
                <Wrapper
                  {...(perk.href
                    ? { href: perk.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-start gap-4 rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[rgba(6,26,18,0.35)] p-5 transition-colors duration-[var(--dur-base)] hover:border-[var(--color-line-strong)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-orange text-cream">
                    <Icon name={perk.icon} size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{perk.title}</p>
                    <p className="mt-0.5 text-sm text-[color:var(--color-ink-muted)]">{perk.text}</p>
                  </div>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
