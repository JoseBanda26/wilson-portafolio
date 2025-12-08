import { Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-center py-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Wilson Mendoza
          </span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
          &copy; {currentYear} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
