import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES } from '../../lib/catarsis.data';

export function ServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section id="servicios" className="relative py-24 overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(229,9,20,0.18), transparent)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(229,9,20,0.05) 0%, transparent 65%)',
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
            style={{ color: '#e50914' }}
          >
            Eventos privados
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Tu evento también puede{' '}
            <span style={{ color: '#e50914' }}>vivir Catarsis</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Cumpleaños, fiestas privadas, eventos empresariales, transmisiones deportivas y
            celebraciones especiales con sonido, ambiente, licor y logística.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {SERVICES.map((srv, i) => (
            <motion.div
              key={srv.id}
              className="group relative p-5 md:p-6 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(145deg, rgba(12,5,5,0.92) 0%, rgba(8,5,5,0.98) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={reduced ? {} : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={reduced ? {} : { y: -3 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,9,20,0.22)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(229,9,20,0.6), transparent)',
                }}
              />

              <div className="text-2xl md:text-3xl mb-3">{srv.icon}</div>
              <h3
                className="text-white font-bold text-sm md:text-base leading-tight mb-2 transition-colors duration-200 group-hover:text-red-club"
              >
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
            href="https://wa.me/573043485381"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-white font-black text-xs tracking-[0.18em] uppercase rounded-xl transition-all duration-200 active:scale-95"
            style={{ background: '#e50914' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#ff2a2a';
              el.style.boxShadow = '0 0 28px rgba(229,9,20,0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#e50914';
              el.style.boxShadow = 'none';
            }}
          >
            Cotizar mi evento
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
