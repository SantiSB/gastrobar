import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { EventsSection } from './sections/EventsSection';
import { CuisinesSection } from './sections/CuisinesSection';
import { ReservationsSection } from './sections/ReservationsSection';
import { StorySection } from './sections/StorySection';
import { ContactSection } from './sections/ContactSection';

/**
 * Berraco landing — one page.
 * Content priority (per brief): Hero → Eventos → Cocinas →
 * Reservas → Nosotros → Contacto → Footer.
 */
export default function BerracoApp() {
  return (
    <div className="bg-bg">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <CuisinesSection />
        <ReservationsSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
