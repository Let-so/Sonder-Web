import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonder — Salud personalizada con IA",
  description:
    "Sonder conecta a médicos y pacientes para acelerar el encuentro con el tratamiento adecuado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Fondo claro + texto oscuro */}
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
