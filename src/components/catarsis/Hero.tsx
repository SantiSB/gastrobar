import { motion, useReducedMotion } from 'framer-motion';
import { CatarsisLogo } from './CatarsisLogo';

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
      style={{ background: '#050505' }}
    >
      {/* Radial red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 48%, rgba(229,9,20,0.20) 0%, rgba(229,9,20,0.06) 45%, transparent 70%)',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
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
          width: 480,
          height: 480,
          top: '10%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(229,9,20,0.12) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={reduced ? {} : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 360,
          height: 360,
          bottom: '15%',
          right: '8%',
          background: 'radial-gradient(circle, rgba(229,9,20,0.09) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
        animate={reduced ? {} : { scale: [1.2, 0.9, 1.2], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Large background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="opacity-[0.045]"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '50%', originY: '50%' }}
        >
          <CatarsisLogo size={560} className="w-[320px] h-[320px] md:w-[560px] md:h-[560px]" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050505)' }}
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
              color: '#e50914',
              border: '1px solid rgba(229,9,20,0.28)',
              background: 'rgba(229,9,20,0.06)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#e50914',
                animation: reduced ? 'none' : 'pulse 2s infinite',
              }}
            />
            Abierto todos los días · Parque Infantil, Pasto
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white mb-6"
          style={{ textShadow: '0 0 80px rgba(229,9,20,0.25)' }}
        >
          Libera la noche.
          <br />
          <span
            style={{
              color: '#e50914',
              textShadow: '0 0 40px rgba(229,9,20,0.55)',
            }}
          >
            Vive Catarsis.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-white/55 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Discoteca, eventos y experiencias nocturnas en el corazón de Pasto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#eventos"
            className="w-full sm:w-auto text-white font-black text-xs tracking-[0.18em] uppercase px-9 py-4 rounded-xl transition-all duration-200 active:scale-95 min-w-[200px] text-center"
            style={{ background: '#e50914' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#ff2a2a';
              el.style.boxShadow = '0 0 28px rgba(229,9,20,0.55)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#e50914';
              el.style.boxShadow = 'none';
            }}
          >
            Comprar boletas
          </a>
          <a
            href="https://wa.me/573043485381"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-white font-black text-xs tracking-[0.18em] uppercase px-9 py-4 rounded-xl transition-all duration-200 active:scale-95 min-w-[200px] text-center"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(229,9,20,0.45)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(229,9,20,0.06)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)';
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
