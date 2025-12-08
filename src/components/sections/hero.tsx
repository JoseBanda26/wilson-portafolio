import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-primary-foreground md:h-[80vh]">
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
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Negocios y viajes sin fronteras.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
            Contabilidad para extranjeros y concierge de viajes en Latinoamérica.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#servicios-contables">Servicios Contables</Link>
            </Button>
            <Button asChild size="lg" variant='outline' className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="#concierge-de-viajes">Concierge de Viajes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="#contacto">Contactame</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
