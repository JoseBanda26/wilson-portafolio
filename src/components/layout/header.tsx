"use client";

import * as React from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#servicios-contables", label: "Servicios Contables" },
  { href: "#concierge-de-viajes", label: "Concierge de Viajes" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contáctame" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  // Solución al error de hidratación:
  // Forzar el renderizado del Sheet solo en el lado del cliente
  // para evitar inconsistencias entre el servidor y el cliente.
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);


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
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
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
