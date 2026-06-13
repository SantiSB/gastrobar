import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES } from '../../lib/berraco.data';

const WA = 'https://wa.me/573105079441';

export function ServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section id="servicios" className="relative py-24 overflow-hidden" style={{ background: '#040e08' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(239,239,236,0.10), transparent)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(14,51,37,0.18) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="block text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#efefec' }}
          >
            Experiencias privadas
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Tu momento también puede ser{' '}
            <span style={{ color: '#efefec' }}>Berraco</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Cenas íntimas, celebraciones especiales, eventos corporativos y experiencias de maridaje
            con gastronomía y coctelería de autor pensadas para ti.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {SERVICES.map((srv, i) => (
            <motion.div
              key={srv.id}
              className="group relative p-5 md:p-6 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(145deg, rgba(8,18,10,0.92) 0%, rgba(5,12,7,0.98) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={reduced ? {} : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={reduced ? {} : { y: -3 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(239,239,236,0.14)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(239,239,236,0.45), transparent)',
                }}
              />

              <div className="text-2xl md:text-3xl mb-3">{srv.icon}</div>
              <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2 transition-colors duration-200 group-hover:text-[#efefec]">
                {srv.name}
              </h3>
              <p className="text-white/38 text-xs leading-relaxed">{srv.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 font-black text-xs tracking-[0.18em] uppercase rounded-xl transition-all duration-200 active:scale-95"
            style={{ background: '#efefec', color: '#0e3325' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fff';
              el.style.boxShadow = '0 0 28px rgba(239,239,236,0.25)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#efefec';
              el.style.boxShadow = 'none';
            }}
          >
            Cotizar mi experiencia
            <span className="text-base" aria-hidden>→</span>
          </a>
          <p className="text-white/25 text-xs mt-4">
            Respuesta en menos de 24 horas · WhatsApp o llamada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
