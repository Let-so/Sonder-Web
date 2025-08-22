"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Bell,
  FileUp,
  Watch,
  Pill,
  Bot,
  ChevronRight,
  Menu,
} from "lucide-react";

// ===== Utilidades =====
type ContainerProps = { children: React.ReactNode; className?: string };
const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>
);


const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <section id={id} className="relative py-14 sm:py-20">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        {eyebrow && (
          <div className="mb-3">
            <Badge className="rounded-full px-3 py-1 text-[10px] sm:text-xs tracking-wider">
              {eyebrow}
            </Badge>
          </div>
        )}
        {title && <h2 className="text-2xl/tight sm:text-4xl/tight font-semibold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </Container>
  </section>
);

// ===== Fondo =====
const Bg = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_10%,theme(colors.blue.500/.10),transparent),radial-gradient(25%_20%_at_90%_10%,theme(colors.fuchsia.500/.08),transparent),radial-gradient(30%_25%_at_10%_10%,theme(colors.cyan.400/.10),transparent)]" />
    <div className="hidden sm:block absolute inset-0 [background:linear-gradient(to_right,theme(colors.black/5)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.black/5)_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />
  </div>
);

// ===== Logo =====
const LogoS = ({ size = 84, src = "/logo-sonder.png" }:{
  size?: number | string; src?: string;
}) => {
  const px = typeof size === "number" ? size : Number(String(size).replace("px", "")) || 84;
  return (
    <Image
      src={src}
      alt="Logo Sonder"
      width={px}
      height={px}
      priority
      style={{ width: px, height: px }}
      className="inline-block object-contain select-none"
    />
  );
};


// ===== Navbar =====
const Nav = () => (
  <header className="sticky top-0 z-40 border-b backdrop-blur bg-white/70">
    <Container className="flex h-14 items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <LogoS size={28} />
        <span className="text-sm font-semibold tracking-tight">Sonder</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#que-es" className="hover:text-foreground">Qué es</a>
        <a href="#como-funciona" className="hover:text-foreground">Cómo funciona</a>
        <a href="#features" className="hover:text-foreground">Características</a>
        <a href="#faq" className="hover:text-foreground">FAQ</a>
      </nav>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button asChild variant="ghost" className="hidden sm:flex px-3 py-1.5 text-xs">
          <a href="#demo">Demo</a>
        </Button>
       <Button asChild size="sm" variant="primary">
         <a href="#waitlist">Unirme</a>
        </Button>
        <button className="md:hidden p-2 text-muted-foreground" aria-label="Abrir menú">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </Container>
  </header>
);

// ===== Widgets =====
const TinyStat = ({ label, value, suffix }: { label: string; value: string; suffix?: string }) => (
  <div className="rounded-2xl border bg-background/60 p-3 text-center">
    <div className="text-xl sm:text-2xl font-semibold tracking-tight">
      {value}
      {suffix && <span className="text-sm sm:text-base font-medium">{suffix}</span>}
    </div>
    <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground">{label}</div>
  </div>
);

// ===== Hero =====
const Hero = () => (
  <section className="relative overflow-hidden py-14 sm:py-20">
    <Container>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] sm:text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Salud personalizada con IA</span>
          </div>
          <div className="mt-4">
            <LogoS size={84} />
          </div>
          <h1 className="mt-4 text-3xl/tight sm:text-5xl/tight font-semibold tracking-tight">
            Menos <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">ensayo y error</span>,<br /> más vida.
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-muted-foreground max-w-xl">
            Sonder conecta a médicos y pacientes para acelerar el encuentro con el tratamiento adecuado, combinando datos clínicos, registros diarios y señales fisiológicas.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
           <Button asChild size="sm" variant="primary">
  <a href="#waitlist" className="flex items-center">
    Unirme a la lista <ChevronRight className="ml-1 h-4 w-4" />
  </a>
</Button>

<Button asChild size="sm" variant="outline">
  <a href="#que-es" className="flex items-center">Saber más</a>
</Button>

          </div>
          <div className="mt-5 grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center gap-3 text-[11px] sm:text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Privacidad primero</div>
            <div className="flex items-center gap-1.5"><HeartPulse className="h-4 w-4" /> Datos clínicos y fisiológicos</div>
            <div className="flex items-center gap-1.5"><Stethoscope className="h-4 w-4" /> Diseñado junto a profesionales</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative mx-auto w-full max-w-sm">
            <Card className="rounded-3xl border bg-background/90 shadow-2xl backdrop-blur">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <HeartPulse className="h-5 w-5 text-blue-600" /> Panel del paciente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <TinyStat label="Ritmo" value="72" suffix="bpm" />
                  <TinyStat label="Pasos" value="8.320" />
                  <TinyStat label="Sueño" value="7,2" suffix="h" />
                </div>
                <div className="rounded-2xl border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm"><Pill className="h-4 w-4" /> Sertralina 50mg</div>
                    <Switch />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">Recordatorio diario, 08:00</p>
                </div>
                <div className="rounded-2xl border p-3">
                  <div className="flex items-center gap-2 text-sm"><Bell className="h-4 w-4" /> Posible baja respuesta</div>
                  <p className="mt-1 text-[11px] text-muted-foreground">La IA detectó señales tempranas. Se notificó al médico.</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                 <Button variant="outline" className="w-full h-9 text-sm">
  <FileUp className="mr-2 h-4 w-4" /> Subir estudio
          <Button asChild variant="primary" className="w-full h-9 text-sm justify-center">
  <a href="#">
    <span className="mr-2 inline-grid place-items-center rounded-md bg-white/20 p-1">
      <Watch className="h-4 w-4 text-white" />
    </span>
    Conectar reloj
  </a>
</Button>
                </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

// ===== Bloques de secciones =====
type FeatureCardProps = { icon: React.ReactNode; title: string; text: string };
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
  >
    <Card className="h-full rounded-2xl border bg-background/60 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-[15px] font-semibold">
          {icon} {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const QueEs = () => (
  <Section
    id="que-es"
    eyebrow="Qué es Sonder"
    title={<>Una plataforma de salud que entiende tu particularidad</>}
    subtitle={
      "Sonder conecta al médico con el paciente mediante un código único y crea un espacio compartido para registrar síntomas, hábitos, medicación y estudios. Con IA, detecta tendencias y alerta al profesional si algo no va bien."
    }
  >
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard icon={<Stethoscope className="h-5 w-5" />} title="Vínculo médico–paciente" text="El médico genera un código único. El paciente lo ingresa al registrarse y se establece el vínculo clínico." />
      <FeatureCard icon={<FileUp className="h-5 w-5" />} title="Estudios y registros" text="Subí PDFs de estudios, registrá síntomas y hábitos diarios de forma simple." />
      <FeatureCard icon={<Watch className="h-5 w-5" />} title="Datos fisiológicos" text="Integración con smartwatches para pasos, ritmo cardíaco y más." />
      <FeatureCard icon={<Pill className="h-5 w-5" />} title="Tratamientos" text="Lista de medicación con dosis y horarios, con confirmación diaria." />
      <FeatureCard icon={<Bot className="h-5 w-5" />} title="Asistencia con IA" text="Un asistente organiza la información para el seguimiento clínico." />
      <FeatureCard icon={<Bell className="h-5 w-5" />} title="Alertas tempranas" text="Si el tratamiento no parece responder bien, la IA notifica al médico con una explicación basada en datos." />
    </div>
  </Section>
);

const Step = ({ num, title, text }: { num: number; title: string; text: string }) => (
  <li>
    <div className="relative h-full rounded-2xl border bg-background/60 p-4 sm:p-5 backdrop-blur">
      <div className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white text-sm font-semibold shadow-md">
        {num}
      </div>
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
    </div>
  </li>
);

const ComoFunciona = () => (
  <Section
    id="como-funciona"
    eyebrow="Cómo funciona"
    title={<>Del consultorio a los datos, sin fricción</>}
    subtitle="Un flujo simple diseñado para no agregar carga al paciente ni al médico."
  >
    <ol className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Step num={1} title="Código del médico" text="El profesional crea un código y se lo comparte al paciente." />
      <Step num={2} title="Registro del paciente" text="La persona ingresa el código y responde preguntas según su patología." />
      <Step num={3} title="Seguimiento" text="Sube estudios, registra medicación y puede conectar su smartwatch." />
      <Step num={4} title="Detección temprana" text="La IA alerta al médico si el tratamiento no parece funcionar." />
    </ol>
    <p className="mt-5 text-[11px] sm:text-xs text-muted-foreground">
      Nota: Sonder no prescribe ni recomienda medicamentos. Es una herramienta de apoyo para el equipo de salud.
    </p>
  </Section>
);

type DeepFeatureProps = { icon: React.ReactNode; title: string; bullets: string[] };
const DeepFeature: React.FC<DeepFeatureProps> = ({ icon, title, bullets }) => (
  <Card className="rounded-2xl border bg-background/60">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-[15px] font-semibold">
        {icon} {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" /> {b}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);


const Features = () => (
  <Section id="features" eyebrow="Características" title={<>Todo lo que necesitás para un seguimiento moderno</>}>
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
      <DeepFeature icon={<ShieldCheck className="h-5 w-5" />} title="Privacidad y seguridad" bullets={["Datos cifrados en tránsito y en reposo", "Control del vínculo por parte del médico", "Diseñado para adecuación normativa en Argentina"]} />
      <DeepFeature icon={<HeartPulse className="h-5 w-5" />} title="Panel del paciente" bullets={["Carga de estudios en PDF", "Conexión con smartwatch", "Registro de medicación con confirmación diaria", "Preguntas guiadas según patología"]} />
      <DeepFeature icon={<Stethoscope className="h-5 w-5" />} title="Panel del médico" bullets={["Vista rápida de evolución", "Alertas explicadas con datos", "Historial centralizado del paciente", "Exportaciones para la historia clínica"]} />
    </div>
  </Section>
);

const DemoWaitlist = () => {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState<"Paciente" | "Médico">("Paciente");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <Section
      id="waitlist"
      eyebrow="Probá Sonder"
      title="Solicitá una demo o sumate a la lista de espera"
      subtitle="Dejanos tu contacto y te escribimos cuando esté disponible para tu perfil."
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <Card className="rounded-3xl border bg-background/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-[15px] sm:text-base">Unite a la lista</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-4">
              <div className="grid gap-1.5">
                <Label className="text-sm">Nombre</Label>
                <Input placeholder="Tu nombre" required className="h-10" />
              </div>
              <div className="grid gap-1.5">
                <Label className="text-sm">Email</Label>
                <Input type="email" placeholder="tu@email.com" required className="h-10" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm">Perfil</Label>
                <div className="grid grid-cols-2 gap-2">
                 <Button
  type="button"
  variant={role === "Paciente" ? "primary" : "outline"}
  onClick={() => setRole("Paciente")}
>
  Paciente
</Button>
<Button
  type="button"
  variant={role === "Médico" ? "primary" : "outline"}
  onClick={() => setRole("Médico")}
>
  Médico
</Button>

                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Switch id="updates" />
                  <Label htmlFor="updates">Recibir novedades del proyecto</Label>
                </div>
                <span>{role}</span>
              </div>
<Button type="submit" variant="primary" className="h-10 w-full text-sm justify-center">
  <span className="mr-2 inline-grid place-items-center rounded-md bg-white/20 p-1">
    <Send className="h-4 w-4 text-white" />
  </span>
  Enviar
</Button>

              {sent && <p className="text-sm text-green-600">¡Listo! Te contactaremos pronto. (Demo de envío)</p>}
            </form>
          </CardContent>
        </Card>

        <Card id="demo" className="rounded-3xl border bg-background/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-[15px] sm:text-base">Solicitar demo para instituciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              ¿Sos parte de un equipo de salud? Coordinemos una demo privada enfocada en tus procesos.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" /> Configuración por especialidad
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" /> Perfiles de acceso y seguridad
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" /> Exportación e interoperabilidad
              </li>
            </ul>
<Button asChild variant="primary" className="h-10 w-full text-sm justify-center">
  <a href="mailto:hola@sonder.app" aria-label="Agendar conversación por email">
    <span className="mr-2 inline-grid place-items-center rounded-md bg-white/20 p-1">
      <Mail className="h-4 w-4 text-white" />
    </span>
    Agendar conversación
  </a>
</Button>


          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

const FAQ = () => (
  <Section id="faq" eyebrow="Preguntas frecuentes" title="Lo esencial, claro y directo">
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
      <FaqItem q="¿Sonder prescribe tratamientos?" a="No. Sonder no prescribe ni recomienda directamente medicación. Es una herramienta de apoyo para seguimiento y comunicación clínica." />
      <FaqItem q="¿Cómo se vinculan médico y paciente?" a="El médico genera un código único desde su panel y el paciente lo ingresa al registrarse. Así se establece el vínculo clínico." />
      <FaqItem q="¿Qué datos usa la IA?" a="Combina información declarada por el paciente con estudios y, si lo eligen, datos de smartwatch." />
      <FaqItem q="¿Qué pasa con mi privacidad?" a="Priorizamos la seguridad de los datos, con cifrado en tránsito y en reposo y controles de acceso." />
    </div>
  </Section>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <div className="rounded-2xl border bg-background/60 p-4 sm:p-5">
    <h3 className="text-[15px] font-semibold">{q}</h3>
    <p className="mt-1.5 text-sm text-muted-foreground">{a}</p>
  </div>
);

const Footer = () => (
  <footer className="border-t py-8 sm:py-10">
    <Container>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <LogoS size={28} />
          <div>
            <div className="text-sm font-semibold">Sonder</div>
            <div className="text-[11px] text-muted-foreground">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-sm">
          <a href="#que-es" className="text-muted-foreground hover:text-foreground">Qué es</a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground">Cómo funciona</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground">Características</a>
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground">Contacto</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function SonderLanding() {
  return (
    <div className="relative min-h-screen text-foreground antialiased">
      <Bg />
      <Nav />
      <main>
        <Hero />
        <QueEs />
        <ComoFunciona />
        <Features />
        <DemoWaitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
