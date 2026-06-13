import { motion, useReducedMotion } from 'framer-motion';
import { JULY_EVENTS } from '../../lib/berraco.data';
import type { EventCard } from '../../types/berraco.types';

const PASSTIX = 'https://passtix.co';

function EventCardItem({ event, index, reduced }: { event: EventCard; index: number; reduced: boolean | null }) {
  return (
    <motion.article
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(160deg, ${event.colorBg} 0%, rgba(5,12,7,0.97) 45%, #050c07 100%)`,
        border: `1px solid ${event.color}22`,
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      initial={reduced ? {} : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={reduced ? {} : { y: -4 }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${event.color}55`;
        el.style.boxShadow = `0 0 32px ${event.colorGlow}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${event.color}22`;
        el.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, transparent, ${event.color}, transparent)`, opacity: 0.6 }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, ${event.color}33 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-3 flex-1">
        {/* Type badge */}
        <span
          className="self-start text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{
            color: event.color,
            background: `${event.color}12`,
            border: `1px solid ${event.color}28`,
          }}
        >
          {event.subtitle}
        </span>

        {/* Event name */}
        <div>
          <h3
            className="text-xl sm:text-2xl font-black uppercase leading-[0.95] tracking-tight"
            style={{ color: '#fff', textShadow: `0 0 30px ${event.color}40` }}
          >
            {event.name}
          </h3>
        </div>

        {/* Date & time */}
        <div className="flex flex-col gap-0.5">
          <p className="text-white/80 text-xs font-semibold">{event.date}</p>
          <p className="text-white/40 text-xs">{event.time} · Palermo, Pasto</p>
        </div>

        {/* Genre tags */}
        <p className="text-white/35 text-xs leading-relaxed">{event.genre}</p>

        {/* Description */}
        <p className="text-white/45 text-xs leading-relaxed hidden sm:block flex-1">
          {event.description}
        </p>

        {/* CTA */}
        <a
          href={PASSTIX}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black tracking-[0.14em] uppercase transition-all duration-200 active:scale-95"
          style={{ background: event.color, color: '#0e3325' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 18px ${event.colorGlow}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
          }}
        >
          🎟 Comprar boletas
        </a>
      </div>
    </motion.article>
  );
}

export function EventSection() {
  const reduced = useReducedMotion();

  return (
    <section id="eventos" className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#040e08' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14,51,37,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <motion.div
          className="mb-8"
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <span
              className="text-xs font-bold tracking-[0.28em] uppercase"
              style={{ color: '#efefec' }}
            >
              Eventos · Julio 2025
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(239,239,236,0.12)' }} />
            <span className="text-white/25 text-xs">Palermo, Pasto</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {JULY_EVENTS.map((event, i) => (
            <EventCardItem key={event.id} event={event} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
