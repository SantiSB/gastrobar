import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { CUISINES, CUISINE_INTRO } from '../../../data/cuisines';
import type { Cuisine } from '../../../types/berraco.types';

/**
 * "Ver menú" call to action — the digital carta is not live yet, so the
 * button is intentionally blocked and paired with a "Muy pronto" badge.
 */
function MenuCta() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Button as="button" type="button" variant="outline" size="lg" disabled aria-disabled="true">
        <Icon name="utensils" size={18} />
        Ver menú
      </Button>
      <Badge tone="orange">Muy pronto</Badge>
    </div>
  );
}

/** All cuisines share the exact same layout — todas igual de importantes. */
function CuisineCard({ cuisine, index }: { cuisine: Cuisine; index: number }) {
  return (
    <Reveal delay={index * 100} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-surface-2 p-7 transition-[transform,border-color] duration-[var(--dur-base)] ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] sm:p-8">
        <span className="absolute inset-x-0 top-0 h-1 bg-orange" />
        <span className="font-display text-5xl leading-none text-orange-400">0{index + 1}</span>
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
        className="mb-8"
      />

      {/* Ver menú — arriba */}
      <MenuCta />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {CUISINES.map((cuisine, i) => (
          <CuisineCard key={cuisine.id} cuisine={cuisine} index={i} />
        ))}
      </div>

      {/* Ver menú — abajo */}
      <div className="mt-12">
        <MenuCta />
      </div>
    </Section>
  );
}
