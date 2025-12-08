import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import TravelConcierge from '@/components/sections/travel-concierge';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <TravelConcierge />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
