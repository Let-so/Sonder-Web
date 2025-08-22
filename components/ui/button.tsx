import * as React from "react";
import { cn } from "@/lib/utils";

/** Variantes:
 * - primary  → gradiente azul→fucsia
 * - outline  → borde gris, fondo blanco
 * - ghost    → transparente
 * - default  → fondo negro (por si lo querés)
 * Tamaños: sm, md
 * Soporta `asChild` para <a> o cualquier elemento.
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

  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white shadow-lg shadow-blue-600/20 hover:opacity-95 focus:ring-blue-400",
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
