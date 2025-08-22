import * as React from "react";
import { cn } from "@/lib/utils";

/** Variantes:
 * - primary  → gradiente fucsia→violeta→azul (como el logo)
 * - outline  → borde gris, fondo blanco
 * - ghost    → transparente
 * - default  → fondo negro
 * Tamaños: sm, md
 * Soporta `asChild` para <a> u otro elemento.
 */

type Common = {
  className?: string;
  variant?: "primary" | "outline" | "ghost" | "default";
  size?: "sm" | "md";
};

type ButtonAsButton =
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & Common
  & { asChild?: false };

type ChildWithClassName = { className?: string };

type ButtonAsChild =
  & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">
  & Common
  & { asChild: true; children: React.ReactElement<ChildWithClassName> };

type Props = ButtonAsButton | ButtonAsChild;

function isAsChild(p: Props): p is ButtonAsChild {
  return (p as ButtonAsChild).asChild === true;
}

export function Button(props: Props) {
  const { className, variant = "default", size = "md" } = props;

  // Bordes tipo píldora en todos los botones
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    // Gradiente del logo: fucsia → violeta → azul + sombras y focus acordes
    primary:
      "bg-gradient-to-r from-[#FF2DB1] via-[#A855F7] to-[#2563EB] " +
      "text-white shadow-lg shadow-[#2563EB]/25 hover:opacity-95 focus:ring-[#A855F7]",
    outline:
      "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300",
    ghost:
      "bg-transparent text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300",
    default:
      "bg-neutral-900 text-white hover:opacity-90 focus:ring-neutral-400",
  };

  const sizes: Record<NonNullable<Props["size"]>, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (isAsChild(props)) {
    const { children, ...rest } = props;
    if (!React.isValidElement<ChildWithClassName>(children)) return null;
    return React.cloneElement(children, {
      className: cn(children.props.className, classes),
      ...(rest as Omit<ButtonAsChild, "children">),
    } as Partial<ChildWithClassName>);
  }

  const { asChild, children, ...restBtn } = props;
  return (
    <button className={classes} {...restBtn}>
      {children}
    </button>
  );
}
