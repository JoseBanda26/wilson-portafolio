import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');
  const travelImages = PlaceHolderImages.filter(p => p.id.startsWith('travel-'));

  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative aspect-square w-40 h-40 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
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
              <div className="text-center sm:text-left">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  Sobre mi
                </h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                  Soy Wilson Mendoza, Contador Público Colegiado con más de 10 años de experiencia en contabilidad internacional. He asesorado a empresas extranjeras en Latinoamérica y he viajado por 24 países.
                </p>
              </div>
            </div>
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4">
                <Link href="https://wa.me/51999999999" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5"/>
                    <span>WhatsApp</span>
                </Link>
                 <Link href="mailto:info@vrisonmendoza.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5"/>
                    <span>info@vrisonmendoza.com</span>
                </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {travelImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <Card>
                      <CardContent className="relative aspect-[4/3] p-0 overflow-hidden rounded-lg">
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
              <CarouselPrevious className="hidden sm:inline-flex" />
              <CarouselNext className="hidden sm:inline-flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}