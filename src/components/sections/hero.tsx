'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
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
            {translations[language].hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-xl text-foreground/90 md:text-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {translations[language].hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" variant="default">
              <Link href="#contacto">{translations[language].hero.buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
