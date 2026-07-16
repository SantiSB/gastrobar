import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { CUISINES, CUISINE_INTRO } from '../../../data/cuisines';
import type { Cuisine } from '../../../types/berraco.types';
import { WHATSAPP_RESERVE_URL } from '../../../lib/constants';
import { cn } from '../../../lib/cn';

const ACCENT_BAR: Record<Cuisine['accent'], string> = {
  green: 'bg-sage',
  orange: 'bg-orange',
  sage: 'bg-sage',
  brown: 'bg-orange-400',
};

const ACCENT_NUM: Record<Cuisine['accent'], string> = {
  green: 'text-sage',
  orange: 'text-orange-400',
  sage: 'text-sage',
  brown: 'text-orange-400',
};

function CuisineCard({ cuisine, index }: { cuisine: Cuisine; index: number }) {
  return (
    <Reveal delay={index * 100} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-surface-2 p-7 transition-[transform,border-color] duration-[var(--dur-base)] ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] sm:p-8">
        <span className={cn('absolute inset-x-0 top-0 h-1', ACCENT_BAR[cuisine.accent])} />
        <span className={cn('font-display text-5xl leading-none', ACCENT_NUM[cuisine.accent])}>
          0{index + 1}
        </span>
        <p className="eyebrow mt-6 text-[color:var(--color-ink-faint)]">{cuisine.kicker}</p>
        <h3 className="mt-1 font-display text-3xl font-semibold text-cream sm:text-4xl">
          {cuisine.name}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-[color:var(--color-ink-muted)]">
          {cuisine.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {cuisine.tags.map((tag) => (
            <li key={tag}>
              <Badge tone="outline">{tag}</Badge>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function CuisinesSection() {
  return (
    <Section id="cocinas" tone="surface">
      <SectionHeading
        eyebrow={CUISINE_INTRO.eyebrow}
        title={CUISINE_INTRO.title}
        lead={CUISINE_INTRO.lead}
        align="center"
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {CUISINES.map((cuisine, i) => (
          <CuisineCard key={cuisine.id} cuisine={cuisine} index={i} />
        ))}
      </div>

      {/* Carta teaser — the full carta ships in a next stage */}
      <div className="mt-12 flex flex-col items-center gap-5 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-surface-2 px-6 py-10 text-center">
        <Icon name="utensils" size={30} className="text-orange-400" />
        <h3 className="font-display text-2xl text-cream sm:text-3xl">La carta completa viene en camino</h3>
        <p className="max-w-md text-[color:var(--color-ink-muted)]">
          Estamos preparando la carta digital con todos los platos, coctelería y precios. Mientras
          tanto, reserva tu mesa y vívelo en persona.
        </p>
        <Button href={WHATSAPP_RESERVE_URL} target="_blank" rel="noopener noreferrer" variant="primary">
          <Icon name="whatsapp" size={18} />
          Reservar mesa
        </Button>
      </div>
    </Section>
  );
}
