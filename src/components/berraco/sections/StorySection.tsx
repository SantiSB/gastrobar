import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { BullMark } from '../brand/BullMark';
import { BRAND } from '../../../data/site';

export function StorySection() {
  return (
    <Section id="nosotros" tone="bg">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Mascot / visual */}
        <Reveal className="relative flex justify-center">
          <div
            className="absolute inset-0 m-auto h-64 w-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(170,179,136,0.18), transparent 65%)' }}
          />
          <BullMark width={240} />
        </Reveal>

        {/* Copy */}
        <Reveal delay={100}>
          <p className="eyebrow text-orange-400">{BRAND.storyEyebrow}</p>
          <h2 className="display-2 mt-3 text-cream text-balance">{BRAND.storyTitle}</h2>

          <div className="mt-5 space-y-4">
            {BRAND.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pillars: Visión & Misión */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {BRAND.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-surface-2 p-5"
              >
                <h3 className="font-display text-xl text-orange-400">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
