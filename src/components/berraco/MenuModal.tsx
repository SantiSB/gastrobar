import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FULL_MENU } from '../../lib/berraco.data';

const WA = 'https://wa.me/573105079441';

interface MenuModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
}

export function MenuModal({ isOpen, initialCategory, onClose }: MenuModalProps) {
  const [activeTab, setActiveTab] = useState(initialCategory ?? FULL_MENU[0].id);

  useEffect(() => {
    if (initialCategory) setActiveTab(initialCategory);
  }, [initialCategory, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const activeCategory = FULL_MENU.find((c) => c.id === activeTab) ?? FULL_MENU[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-label="Menú Berraco"
            aria-modal="true"
            className="fixed inset-x-4 bottom-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-50 w-auto md:w-full md:max-w-2xl rounded-t-3xl md:rounded-3xl overflow-hidden"
            style={{
              background: '#040e08',
              border: '1px solid rgba(239,239,236,0.12)',
              boxShadow: '0 0 80px rgba(14,51,37,0.4)',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 shrink-0"
              style={{ borderBottom: '1px solid rgba(239,239,236,0.08)' }}
            >
              <div>
                <h2 className="text-white font-black text-xl uppercase tracking-tight">
                  Carta
                </h2>
                <p className="text-white/35 text-xs mt-0.5">Berraco · Palermo, Pasto</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div
              className="flex gap-1 px-5 py-3 shrink-0 overflow-x-auto"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {FULL_MENU.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200"
                  style={{
                    background: activeTab === cat.id ? '#efefec' : 'rgba(255,255,255,0.04)',
                    color: activeTab === cat.id ? '#0e3325' : 'rgba(255,255,255,0.5)',
                    border: activeTab === cat.id
                      ? '1px solid transparent'
                      : '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Items list */}
            <div className="overflow-y-auto flex-1 px-5 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2 pb-4"
                >
                  {activeCategory.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 px-4 py-3.5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.055)',
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
                        {item.description && (
                          <p className="text-white/35 text-xs mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span
                        className="font-black text-sm whitespace-nowrap shrink-0"
                        style={{ color: '#efefec' }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer CTA */}
            <div
              className="px-5 py-4 shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center w-full py-3.5 rounded-xl font-black text-xs tracking-[0.15em] uppercase transition-all duration-200 active:scale-95"
                style={{ background: '#efefec', color: '#0e3325' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = '#fff';
                  el.style.boxShadow = '0 0 20px rgba(239,239,236,0.25)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = '#efefec';
                  el.style.boxShadow = 'none';
                }}
              >
                Reservar mesa
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
