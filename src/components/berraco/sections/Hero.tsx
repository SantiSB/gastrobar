import { Wordmark } from '../brand/Wordmark';
import { BullMark } from '../brand/BullMark';
import { RoseWindow } from '../brand/RoseWindow';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { BRAND } from '../../../data/site';
import { WHATSAPP_RESERVE_URL, ADDRESS, CITY } from '../../../lib/constants';

/**
 * Hero — above the fold. Entrance uses CSS load animations (`.rise`)
 * so the content is fully visible without JS (SSR/SEO safe).
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg pt-28 pb-16"
    >
      {/* ---- Decorative layers ------------------------------- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(120% 90% at 50% 0%, rgba(18,69,51,0.55) 0%, rgba(6,26,18,0) 60%)',
          zIndex: 'var(--z-base)',
        }}
      />
      <RoseWindow
        size={720}
        className="pointer-events-none absolute -right-40 -top-24 hidden text-green-700 opacity-[0.16] sm:block"
        style={{ zIndex: 'var(--z-base)' }}
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" style={{ zIndex: 'var(--z-base)' }} />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))', zIndex: 'var(--z-decor)' }}
      />

      {/* ---- Content ----------------------------------------- */}
      <div className="container-berraco relative" style={{ zIndex: 'var(--z-content)' }}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="rise mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse-dot" />
              <span className="eyebrow text-[color:var(--color-ink-muted)]">
                {ADDRESS} · {CITY}
              </span>
            </div>

            <div className="rise rise-1 mb-6">
              <Wordmark variant="cream" height={64} priority className="sm:!h-20 lg:!h-24" />
            </div>

            <h1 className="rise rise-2 display-1 max-w-[15ch] text-cream">
              Puro sabor
              <br />
              <span className="text-orange-400">del sur.</span>
            </h1>

            <p className="rise rise-3 mt-5 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
              {BRAND.heroLead}
            </p>

            {/* CTAs */}
            <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#eventos" variant="primary" size="lg" className="sm:w-auto" block>
                <Icon name="ticket" size={18} />
                Ver eventos
              </Button>
              <Button href="#cocinas" variant="outline" size="lg" className="sm:w-auto" block>
                <Icon name="utensils" size={18} />
                Ver menú
              </Button>
              <Button
                href={WHATSAPP_RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="sm:w-auto"
                block
              >
                <Icon name="whatsapp" size={18} />
                Reservar mesa
              </Button>
            </div>
          </div>

          {/* Mascot */}
          <div className="rise rise-2 relative hidden justify-center lg:flex">
            <div
              className="absolute inset-0 m-auto h-72 w-72 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(196,102,31,0.22), transparent 65%)' }}
            />
            <div className="animate-float">
              <BullMark width={300} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
