import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MENU_ITEMS, FULL_MENU } from '../../lib/catarsis.data';
import { MenuModal } from './MenuModal';

export function MenuSection() {
  const reduced = useReducedMotion();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  function openMenu(categoryId: string) {
    setActiveCategory(categoryId);
    setModalOpen(true);
  }

  return (
    <>
      <section id="menu" className="relative py-24 overflow-hidden" style={{ background: '#070707' }}>
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(229,9,20,0.18), transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(229,9,20,0.05) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-5 md:px-10">
          {/* Simple header */}
          <motion.div
            className="text-center mb-12"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span
              className="block text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: '#e50914' }}
            >
              Lo que sirve la noche
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Menú
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {MENU_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                className="group relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(14,5,5,0.95) 0%, rgba(8,5,5,0.98) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'default',
                }}
                initial={reduced ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={reduced ? {} : { y: -5 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,9,20,0.22)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(229,9,20,0.55), transparent)',
                  }}
                />
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(229,9,20,0.06) 0%, transparent 55%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-club transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-7">{item.description}</p>
                  <button
                    onClick={() => openMenu(FULL_MENU[i].id)}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white/55 hover:text-white transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.09)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(229,9,20,0.3)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(229,9,20,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.09)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    }}
                  >
                    Ver menú
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MenuModal
        isOpen={modalOpen}
        initialCategory={activeCategory}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
