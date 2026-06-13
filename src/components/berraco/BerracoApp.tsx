import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { EventSection } from './EventSection';
import { MenuSection } from './MenuSection';
import { ServicesSection } from './ServicesSection';
import { Footer } from './Footer';

export default function BerracoApp() {
  return (
    <div style={{ background: '#040e08', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <EventSection />
      <MenuSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
