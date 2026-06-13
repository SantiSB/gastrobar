import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BerracoLogo } from './BerracoLogo';
import { NAV_LINKS } from '../../lib/berraco.data';

const WA = 'https://wa.me/573105079441';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(4,14,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(239,239,236,0.10)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.35s ease',
      }}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group select-none">
            <BerracoLogo size={34} />
            <span
              className="text-white font-black text-lg tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ letterSpacing: '0.18em' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = '#efefec')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = '#fff')}
            >
              BERRACO
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200"
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#efefec')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-black tracking-[0.15em] uppercase rounded-lg transition-all duration-200 active:scale-95"
            style={{ background: '#efefec', color: '#0e3325' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 22px rgba(239,239,236,0.25)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#efefec';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            Reservar mesa
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className="block w-6 h-0.5 bg-white origin-center transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white origin-center transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(4,14,8,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(239,239,236,0.08)',
            }}
          >
            <div className="px-5 py-7 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-semibold tracking-[0.15em] uppercase py-3 border-b border-white/5 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 py-3.5 text-center text-xs font-black tracking-[0.15em] uppercase rounded-xl"
                style={{ background: '#efefec', color: '#0e3325' }}
              >
                Reservar mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
