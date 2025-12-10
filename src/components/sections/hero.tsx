import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full text-foreground animate-slide-down">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Negocios y viajes sin fronteras.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-xl text-foreground/90 md:text-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Contabilidad para extranjeros y concierge de viajes en Latinoamérica.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" variant="default">
              <Link href="#servicios-contables">Servicios Contables</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#concierge-de-viajes">Concierge de Viajes</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contacto">Contactame</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
