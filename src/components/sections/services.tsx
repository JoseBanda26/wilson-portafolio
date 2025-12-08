import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.3334 12.1667H6.66669C5.74622 12.1667 5.00002 12.9129 5.00002 13.8333V32.1667C5.00002 33.0871 5.74622 33.8333 6.66669 33.8333H33.3334C34.2538 33.8333 35 33.0871 35 32.1667V13.8333C35 12.9129 34.2538 12.1667 33.3334 12.1667Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 33.8333V8.83333C13.3333 8.3731 13.5089 7.93115 13.8214 7.6186C14.134 7.30605 14.5759 7.16666 15 7.16666H25C25.4241 7.16666 25.866 7.30605 26.1786 7.6186C26.4911 7.93115 26.6667 8.3731 26.6667 8.83333V33.8333" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Constitución de empresas",
  },
  {
    icon: (
       <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8.83334H8.33333C7.8731 8.83334 7.43115 9.00894 7.1186 9.32149C6.80605 9.63404 6.66667 10.0759 6.66667 10.5V32.1667C6.66667 32.6269 6.80605 33.0688 7.1186 33.3814C7.43115 33.6939 7.8731 33.8333 8.33333 33.8333H31.6667C32.1269 33.8333 32.5688 33.6939 32.8814 33.3814C33.1939 33.0688 33.3333 32.6269 33.3333 32.1667V10.5C33.3333 10.0759 33.1939 9.63404 32.8814 9.32149C32.5688 9.00894 32.1269 8.83334 31.6667 8.83334H25" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 7.16666C25 6.70642 24.8244 6.26448 24.5118 5.95193C24.1993 5.63938 23.7574 5.5 23.3333 5.5H16.6667C16.2426 5.5 15.8007 5.63938 15.4882 5.95193C15.1756 6.26448 15 6.70642 15 7.16666V10.5C15 10.9602 15.1756 11.4022 15.4882 11.7147C15.8007 12.0273 16.2426 12.1667 16.6667 12.1667H23.3333C23.7574 12.1667 24.1993 12.0273 24.5118 11.7147C24.8244 11.4022 25 10.9602 25 10.5V7.16666Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 21.3333H25" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 27.1667H25" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Contabilidad y reportes financieros",
  },
  {
    icon: (
       <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35.5C28.2843 35.5 35 28.7843 35 20.5C35 12.2157 28.2843 5.5 20 5.5C11.7157 5.5 5 12.2157 5 20.5C5 28.7843 11.7157 35.5 20 35.5Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 20.5H35" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 35.5C23.3137 35.5 26.1661 30.2843 27.4098 20.5C26.1661 10.7157 23.3137 5.5 20 5.5C16.6863 5.5 13.8339 10.7157 12.5902 20.5C13.8339 30.2843 16.6863 35.5 20 35.5Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Asesoría en negocios internacionales",
  },
  {
    icon: (
       <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 22.1667C24.6024 22.1667 28.3333 18.4357 28.3333 13.8333C28.3333 9.23096 24.6024 5.5 20 5.5C15.3976 5.5 11.6667 9.23096 11.6667 13.8333C11.6667 18.4357 15.3976 22.1667 20 22.1667Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.6667 35.5V32.1667C31.6667 30.3956 30.9469 28.6992 29.6967 27.449C28.4465 26.1988 26.7502 25.479 25 25.479H15C13.2498 25.479 11.5535 26.1988 10.3033 27.449C9.05311 28.6992 8.33333 30.3956 8.33333 32.1667V35.5" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Planilla y RRHH",
  },
  {
    icon: (
       <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 7.16666H8.33333C7.8731 7.16666 7.43115 7.34225 7.1186 7.6548C6.80605 7.96735 6.66667 8.4093 6.66667 8.83333V32.1667C6.66667 32.6269 6.80605 33.0688 7.1186 33.3814C7.43115 33.6939 7.8731 33.8333 8.33333 33.8333H31.6667C32.1269 33.8333 32.5688 33.6939 32.8814 33.3814C33.1939 33.0688 33.3333 32.6269 33.3333 32.1667V15.5L25 7.16666Z" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 7.16666V15.5H33.3333" stroke="#B89535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Auditorias y requerimientos SUNAT",
  },
];

export default function Services() {
  return (
    <section id="servicios-contables" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Soluciones contables y tributarias para extranjeros en Perú y Latinoamérica
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-0 shadow-none bg-transparent">
              <CardHeader className="p-0">
                <div className="mb-4 flex h-16 w-16 items-center justify-center mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="font-sans text-base font-bold h-10">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center space-y-4">
             <p className="text-lg">
                Hablemos sobre cómo puedo optimizar tu contabilidad internacional.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contacto">Agendar Consulta</Link>
              </Button>
        </div>
      </div>
    </section>
  );
}
