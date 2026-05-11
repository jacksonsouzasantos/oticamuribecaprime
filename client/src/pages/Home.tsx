import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Visagismo from '@/components/Visagismo';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Home Page - Ótica Muribeca Prime Landing Page
 * 
 * Design: Organic Luxury Modernism
 * - Full-page scroll experience
 * - Smooth animations and transitions
 * - Conversion-focused sections
 * - Premium aesthetic with warm color palette
 */

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Visagismo Section */}
      <section id="visagismo">
        <Visagismo />
      </section>

      {/* Gallery Section */}
      <section id="galeria">
        <Gallery />
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contato">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
