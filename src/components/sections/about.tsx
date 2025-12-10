'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-photo');
  const travelImages = PlaceHolderImages.filter((p) =>
    p.id.startsWith('travel-')
  );
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section
      id="sobre-mi"
      className="py-16 md:py-24 bg-secondary animate-slide-up"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              Sobre mí
            </h2>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full shadow-lg flex-shrink-0">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt="Wilson Mendoza"
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <p className="text-lg text-foreground/80">
                Soy Wilson Mendoza, Contador Público Colegiado con más de 10
                años de experiencia en contabilidad internacional.
              </p>
            </div>
            <p className="text-lg text-foreground/80">
              He asesorado a empresas extranjeras en Latinoamérica y he viajado
              por 24 países, lo que me da una perspectiva única para ayudarte a
              navegar el panorama de negocios y viajes en la región.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button asChild>
                <Link href="https://wa.me/51999999999" target="_blank">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:info@vrisonmendoza.com">
                  <Mail className="mr-2 h-5 w-5" />
                  info@vrisonmendoza.com
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="flex items-center justify-center animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Carousel
              className="w-full max-w-lg"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {travelImages.map((image, index) => (
                  <CarouselItem key={image.id}>
                    <Card className="bg-transparent border-0 shadow-none">
                      <CardContent className="relative aspect-[4/3] p-0 overflow-hidden rounded-lg shadow-xl">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:inline-flex bg-secondary/80 text-foreground hover:bg-secondary" />
              <CarouselNext className="hidden sm:inline-flex bg-secondary/80 text-foreground hover:bg-secondary" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
