import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CatarsisLogo } from './CatarsisLogo';
import { NAV_LINKS } from '../../lib/catarsis.data';

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
        background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(229,9,20,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(229,9,20,0.08)' : 'none',
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
            <CatarsisLogo size={34} />
            <span
              className="text-white font-black text-lg tracking-[0.18em] uppercase transition-colors duration-300 group-hover:text-red-club"
              style={{ letterSpacing: '0.18em' }}
            >
              CATARSIS
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-club"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/573043485381"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-black tracking-[0.15em] uppercase text-white rounded-lg transition-all duration-200 active:scale-95"
            style={{
              background: '#e50914',
              boxShadow: '0 0 0 rgba(229,9,20,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#ff2a2a';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 22px rgba(229,9,20,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#e50914';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(229,9,20,0)';
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
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(229,9,20,0.12)',
            }}
          >
            <div className="px-5 py-7 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-semibold tracking-[0.15em] uppercase py-3 border-b border-white/5 transition-colors hover:text-red-club"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/573043485381"
            target="_blank"
            rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 py-3.5 text-center text-xs font-black tracking-[0.15em] uppercase text-white rounded-xl"
                style={{ background: '#e50914' }}
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
