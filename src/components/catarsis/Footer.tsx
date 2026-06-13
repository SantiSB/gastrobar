import { CatarsisLogo } from './CatarsisLogo';

export function Footer() {
  return (
    <footer
      id="reservas"
      className="relative overflow-hidden"
      style={{ background: '#030303', borderTop: '1px solid rgba(229,9,20,0.1)' }}
    >
      {/* Top line glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(229,9,20,0.35), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CatarsisLogo size={38} />
              <span
                className="text-white font-black text-xl tracking-[0.18em] uppercase"
              >
                CATARSIS
              </span>
            </div>
            <p className="text-white/38 text-sm leading-relaxed">
              La experiencia de liberación emocional. Discoteca, eventos y noches que no olvidarás.
            </p>
            <p className="text-white/22 text-xs">Catarsis Club · Pasto, Colombia</p>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white/50 text-xs font-bold tracking-[0.22em] uppercase mb-1">
              Información
            </h4>
            <p className="text-white/45 text-sm">📍 Cll 18 # 29-83 Parque Infantil, Pasto</p>
            <p className="text-white/45 text-sm">🕘 Abierto todos los días</p>
            <a
              href="https://wa.me/573043485381"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white text-sm transition-colors duration-200"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#e50914')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')
              }
            >
              📱 +57 304 348 5381
            </a>
            <a
              href="https://instagram.com/catarsisclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 text-sm transition-colors duration-200"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#e50914')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')
              }
            >
              📸 @catarsisclub
            </a>
          </div>

          {/* Reserve CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 text-xs font-bold tracking-[0.22em] uppercase mb-1">
              ¿Lista tu noche?
            </h4>
            <p className="text-white/38 text-sm leading-relaxed">
              Reserva tu mesa, compra boletas o cotiza tu evento privado.
            </p>
            <a
              href="https://wa.me/573043485381"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-white font-black text-xs tracking-[0.15em] uppercase rounded-xl transition-all duration-200 active:scale-95 text-center"
              style={{ background: '#e50914' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#ff2a2a';
                el.style.boxShadow = '0 0 20px rgba(229,9,20,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#e50914';
                el.style.boxShadow = 'none';
              }}
            >
              Reservar ahora
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-white/18 text-xs">
            © 2025 Catarsis Club. Todos los derechos reservados.
          </p>
          <p className="text-white/18 text-xs">Demo de concepto · Diseño web</p>
        </div>
      </div>
    </footer>
  );
}
