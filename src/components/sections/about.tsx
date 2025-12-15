'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone, PlayCircle, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import React, { useRef, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/context/language-context';

export default function About() {
  const { language } = useLanguage();
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-photo');
  const travelImages = PlaceHolderImages.filter((p) =>
    p.id.startsWith('travel-')
  );
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Sonido activado por defecto
  const [videoProgress, setVideoProgress] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleMuteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

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
              {translations[language].about.title}
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
                {translations[language].about.intro}
              </p>
            </div>
            <p className="text-lg text-foreground/80">
              {translations[language].about.experience}
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
              setApi={setApi}
              className="w-full max-w-lg"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent
                      className="relative aspect-[4/3] p-0 overflow-hidden rounded-lg shadow-xl cursor-pointer"
                      onClick={handleVideoClick}
                    >
                      <video
                        ref={videoRef}
                        src="/videos/video-1.mp4"
                        playsInline
                        className="object-cover w-full h-full"
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnd}
                      />
                      {!isVideoPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                      )}
                      {isVideoPlaying && (
                        <div className="absolute bottom-2 right-2 z-10">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleMuteClick}
                            className="h-8 w-8"
                          >
                            {isMuted ? (
                              <VolumeX className="h-5 w-5 text-white" />
                            ) : (
                              <Volume2 className="h-5 w-5 text-white" />
                            )}
                          </Button>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/40">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${videoProgress}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                {travelImages.map((image) => (
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
