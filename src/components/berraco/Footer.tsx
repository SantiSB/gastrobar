import { BerracoLogo } from './BerracoLogo';

const WA = 'https://wa.me/573105079441';

export function Footer() {
  return (
    <footer
      id="reservas"
      className="relative overflow-hidden"
      style={{ background: '#030c06', borderTop: '1px solid rgba(239,239,236,0.08)' }}
    >
      {/* Top line glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(239,239,236,0.25), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BerracoLogo size={38} />
              <span className="text-white font-black text-xl tracking-[0.18em] uppercase">
                BERRACO
              </span>
            </div>
            <p className="text-white/38 text-sm leading-relaxed">
              Experiencias únicas, gastronomía y coctelería de autor en el corazón de Pasto.
            </p>
            <p className="text-white/22 text-xs">Berraco Gastrobar · Pasto, Colombia</p>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white/50 text-xs font-bold tracking-[0.22em] uppercase mb-1">
              Información
            </h4>
            <p className="text-white/45 text-sm">📍 Cra 36 #18-43 Palermo, Pasto</p>
            <p className="text-white/45 text-sm">🕘 Abierto todos los días</p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white text-sm transition-colors duration-200"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#efefec')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')
              }
            >
              📱 +57 310 507 9441
            </a>
            <a
              href="https://instagram.com/berraco.gastrobar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 text-sm transition-colors duration-200"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#efefec')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')
              }
            >
              📸 @berraco.gastrobar
            </a>
          </div>

          {/* Reserve CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 text-xs font-bold tracking-[0.22em] uppercase mb-1">
              ¿Lista tu experiencia?
            </h4>
            <p className="text-white/38 text-sm leading-relaxed">
              Reserva tu mesa, compra boletas o cotiza tu evento privado.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 font-black text-xs tracking-[0.15em] uppercase rounded-xl transition-all duration-200 active:scale-95 text-center"
              style={{ background: '#efefec', color: '#0e3325' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#fff';
                el.style.boxShadow = '0 0 20px rgba(239,239,236,0.22)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#efefec';
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
            © 2025 Berraco Gastrobar. Todos los derechos reservados.
          </p>
          <p className="text-white/18 text-xs">Demo de concepto · Diseño web</p>
        </div>
      </div>
    </footer>
  );
}
