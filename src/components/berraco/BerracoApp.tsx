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
 * Content priority: Hero → Cocinas (carta) → Eventos →
 * Reservas → Nosotros → Contacto → Footer.
 */
export default function BerracoApp() {
  return (
    <div className="bg-bg">
      <Navbar />
      <main>
        <Hero />
        <CuisinesSection />
        <EventsSection />
        <ReservationsSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
