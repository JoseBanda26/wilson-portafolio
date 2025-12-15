'use client';

import * as React from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();

  const closeSheet = () => setIsSheetOpen(false);

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = translations[language].header.navLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold tracking-wide">
            Wilson Mendoza
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                {translations[language].header.language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('es')}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        {isClient ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={closeSheet}
                  >
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-semibold">
                      Wilson Mendoza
                    </span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xl font-medium text-foreground transition-colors hover:text-primary"
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t pt-6">
                  <div className="flex justify-center gap-4">
                  <Button onClick={() => {setLanguage('en'); closeSheet()}} variant={language === 'en' ? 'accent' : 'outline'}>English</Button>
                  <Button onClick={() => {setLanguage('es'); closeSheet()}} variant={language === 'es' ? 'accent' : 'outline'}>Español</Button>
                  </div>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="md:hidden h-10 w-10" />
        )}
      </div>
    </header>
  );
}
