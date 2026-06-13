import { motion, useReducedMotion } from 'framer-motion';
import { BerracoLogo } from './BerracoLogo';

const WA = 'https://wa.me/573105079441';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#040e08' }}
    >
      {/* Radial green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 48%, rgba(14,51,37,0.55) 0%, rgba(14,51,37,0.15) 45%, transparent 70%)',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520,
          height: 520,
          top: '8%',
          left: '3%',
          background: 'radial-gradient(circle, rgba(14,51,37,0.35) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
        animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          bottom: '12%',
          right: '6%',
          background: 'radial-gradient(circle, rgba(239,239,236,0.04) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        animate={reduced ? {} : { scale: [1.15, 0.9, 1.15], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Large background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="opacity-[0.04]"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '50%', originY: '50%' }}
        >
          <BerracoLogo size={560} className="w-[320px] h-[320px] md:w-[560px] md:h-[560px]" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #040e08)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              color: '#efefec',
              border: '1px solid rgba(239,239,236,0.22)',
              background: 'rgba(239,239,236,0.05)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#efefec',
                animation: reduced ? 'none' : 'pulse 2s infinite',
              }}
            />
            Cra 36 #18-43 Palermo · Pasto
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white mb-6"
          style={{ textShadow: '0 0 80px rgba(14,51,37,0.6)' }}
        >
          Gastronomía
          <br />
          <span
            style={{
              color: '#efefec',
              textShadow: '0 0 50px rgba(239,239,236,0.25)',
            }}
          >
            de autor.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-white/55 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Experiencias únicas, gastronomía y coctelería de autor en el corazón de Pasto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#eventos"
            className="w-full sm:w-auto font-black text-xs tracking-[0.18em] uppercase px-9 py-4 rounded-xl transition-all duration-200 active:scale-95 min-w-[200px] text-center"
            style={{ background: '#efefec', color: '#0e3325' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fff';
              el.style.boxShadow = '0 0 28px rgba(239,239,236,0.30)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#efefec';
              el.style.boxShadow = 'none';
            }}
          >
            Ver eventos
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-white font-black text-xs tracking-[0.18em] uppercase px-9 py-4 rounded-xl transition-all duration-200 active:scale-95 min-w-[200px] text-center"
            style={{
              background: 'transparent',
              border: '1px solid rgba(239,239,236,0.22)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(239,239,236,0.55)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(239,239,236,0.06)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(239,239,236,0.22)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            Reservar mesa
          </a>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
