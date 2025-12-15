'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(t.form.status.sending);

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setStatus(t.form.status.success);
      // Limpiar el formulario
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setStatus(`${t.form.status.error}${data.error}`);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                {t.title}
              </CardTitle>
              <CardDescription className="mt-4 text-lg">
                {t.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input id="name" placeholder={t.form.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.form.email}</Label>
                    <Input id="email" type="email" placeholder={t.form.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t.form.subject}</Label>
                  <Input id="subject" placeholder={t.form.subjectPlaceholder} value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.form.messagePlaceholder}
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    {t.buttonText}
                  </Button>
                </div>
                {status && <p className="text-center mt-4">{status}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
