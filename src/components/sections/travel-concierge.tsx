'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function TravelConcierge() {
  const { language } = useLanguage();
  const mapImage = PlaceHolderImages.find((p) => p.id === 'map');

  return (
    <section id="concierge-de-viajes" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {translations[language].travelConcierge.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {translations[language].travelConcierge.description}
            </p>
            <ul className="space-y-4">
              {translations[language].travelConcierge.serviceList.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#contacto">{translations[language].travelConcierge.buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
