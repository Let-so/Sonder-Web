function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-[10px] text-neutral-600">
      {children}
    </span>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5"
         style={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.75)" }}>
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
    </div>
  );
}

function TinyStat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-3 text-center">
      <div className="text-xl font-semibold">
        {value}{suffix && <span className="text-sm font-medium">{suffix}</span>}
      </div>
      <div className="mt-1 text-[11px] text-neutral-600">{label}</div>
    </div>
  );
}

function Step({ num, title, text }: { num: number; title: string; text: string }) {
  return (
    <li className="relative rounded-2xl border border-neutral-200 p-5"
        style={{ backdropFilter: "blur(10px)", background: "color-mix(in srgb, rgb(17 24 39), transparent 50%)" }}>
      <div className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white text-sm font-semibold">
        {num}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-neutral-600">{text}</p>
    </li>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0"
             style={{
               background: `
                 radial-gradient(40% 30% at 50% 10%, rgba(59,130,246,.25), transparent),
                 radial-gradient(25% 20% at 90% 10%, rgba(217,70,239,.25), transparent),
                 radial-gradient(30% 25% at 10% 10%, rgba(34,211,238,.35), transparent)
               `
             }} />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 backdrop-blur bg-white/70">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-sonder.png" alt="Sonder" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold">Sonder</span>
          </div>
          <a href="#waitlist"
             className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-3 py-1.5 text-xs font-medium shadow">
            Unirme
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Eyebrow>Salud personalizada con IA</Eyebrow>
            <div className="mt-4">
              <img src="/logo-sonder.png" alt="Logo Sonder" className="h-20 w-20 object-contain" />
            </div>
            <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">
              Menos <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                ensayo y error
              </span>,<br /> más vida.
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-neutral-600 max-w-xl">
              Sonder conecta a médicos y pacientes para acelerar el encuentro con el tratamiento adecuado,
              combinando datos clínicos, registros diarios y señales fisiológicas.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a href="#waitlist"
                 className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-medium shadow">
                Unirme a la lista
              </a>
              <a href="#que-es" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm">
                Saber más
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-neutral-200 p-5 shadow-2xl max-w-sm mx-auto"
                 style={{ backdropFilter: "blur(10px)", background: "color-mix(in srgb, rgb(17 24 39), transparent 50%)" }}>
              <div className="flex items-center gap-2 text-sm font-medium">Panel del paciente</div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                <TinyStat label="Ritmo" value="72" suffix="bpm" />
                <TinyStat label="Pasos" value="8.320" />
                <TinyStat label="Sueño" value="7,2" suffix="h" />
              </div>
              <div className="rounded-2xl border border-neutral-200 p-3 mt-3">
                <div className="text-sm">Sertralina 50mg</div>
                <p className="mt-1 text-[11px] text-neutral-600">Recordatorio diario, 08:00</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-3 mt-3">
                <div className="text-sm">Posible baja respuesta</div>
                <p className="mt-1 text-[11px] text-neutral-600">La IA detectó señales tempranas. Se notificó al médico.</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <a className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-center text-sm" href="#">
                  Subir estudio
                </a>
                <a className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-3 py-2 text-center text-sm" href="#">
                  Conectar reloj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section id="que-es" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Qué es Sonder</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">
            Una plataforma de salud que entiende tu particularidad
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-neutral-600">
            Sonder conecta al médico con el paciente mediante un código único y crea un espacio compartido
            para registrar síntomas, hábitos, medicación y estudios. Con IA, detecta tendencias y alerta al
            profesional si algo no va bien.
          </p>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              ["Vínculo médico–paciente", "El médico genera un código único y el paciente lo ingresa al registrarse."],
              ["Estudios y registros", "Subí PDFs de estudios y registrá síntomas y hábitos diarios."],
              ["Datos fisiológicos", "Integración con smartwatches para pasos, ritmo, etc."],
              ["Tratamientos", "Lista de medicación con dosis y horarios, con confirmación diaria."],
              ["Asistencia con IA", "El asistente organiza la información para el seguimiento clínico."],
              ["Alertas tempranas", "La IA notifica al médico con explicación basada en datos."]
            ].map(([t, d]) => <Card key={t as string} title={t as string} text={d as string} />)}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">Del consultorio a los datos, sin fricción</h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Un flujo simple diseñado para no agregar carga al paciente ni al médico.
          </p>
          <ol className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            {[
              ["Código del médico", "El profesional crea un código y lo comparte con el paciente."],
              ["Registro del paciente", "Ingresa el código y responde preguntas según su patología."],
              ["Seguimiento", "Carga estudios, registra medicación y puede conectar su smartwatch."],
              ["Detección temprana", "La IA alerta al médico si el tratamiento no parece funcionar."]
            ].map(([t, d], i) => <Step key={t as string} num={i + 1} title={t as string} text={d as string} />)}
          </ol>
          <p className="mt-5 text-[11px] text-neutral-500">
            Nota: Sonder no prescribe ni recomienda medicamentos. Es una herramienta de apoyo para el equipo de salud.
          </p>
        </div>
      </section>

{/* FOOTER */}
<footer className="border-t border-neutral-200 py-8">
  <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div className="flex items-center gap-2">
      <img src="/logo-sonder.png" alt="Sonder" className="h-6 w-6 object-contain" />
      <div>
        <div className="text-sm font-semibold">Sonder</div>
        <div className="text-[11px] text-neutral-500">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </div>
      </div>
    </div>
    <div className="flex gap-5 text-sm text-neutral-600">
      <a href="#que-es" className="hover:text-neutral-900">Qué es</a>
      <a href="#como-funciona" className="hover:text-neutral-900">Cómo funciona</a>
      <a href="#features" className="hover:text-neutral-900">Características</a>
      <a href="#waitlist" className="hover:text-neutral-900">Contacto</a>
    </div>
  </div>
</footer>
</div>  
);       
}       
