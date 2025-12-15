'use client';

import { Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <nav className="flex gap-x-6 text-sm text-muted-foreground">
            {translations[language].footer.navLinks.map((link) => (
            <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
                prefetch={false}
            >
                {link.label}
            </Link>
            ))}
        </nav>
        <p className="flex items-center gap-2 text-sm text-muted-foreground" suppressHydrationWarning>
            <Globe className="h-4 w-4" />
            {translations[language].footer.copyRight.replace('{new Date().getFullYear()}', currentYear.toString())}
        </p>
      </div>
    </footer>
  );
}
