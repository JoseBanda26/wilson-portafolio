import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Contáctame
              </CardTitle>
              <CardDescription className="mt-4 text-lg">
                ¿Tienes alguna pregunta o quieres discutir tus necesidades? Completa el formulario a continuación y me pondré en contacto contigo a la brevedad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Ej: 'Consulta sobre constitución de empresa'" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame cómo puedo ayudarte."
                    className="min-h-[150px]"
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
