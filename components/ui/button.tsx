import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Button con:
 * - variant: "default" | "outline" | "ghost"
 * - size: "sm" | "md"
 * - asChild: si es true, clona el hijo (ej. <a>) y le aplica las clases del botón.
 */

type Common = {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
};

type ButtonAsButton =
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & Common
  & { asChild?: false };

type ButtonAsChild =
  & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">
  & Common
  & { asChild: true; children: React.ReactElement<any, any> };

type Props = ButtonAsButton | ButtonAsChild;

export function Button(props: Props) {
  const {
    className,
    variant = "default",
    size = "md",
    asChild,
    
    children,
    ...rest
  } = props as any;

  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    default: "bg-neutral-900 text-white hover:opacity-90 focus:ring-neutral-400",
    outline: "border border-neutral-300 bg-white hover:bg-neutral-50 focus:ring-neutral-300",
    ghost: "bg-transparent hover:bg-neutral-100 focus:ring-neutral-300",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
  };
  const classes = cn(base, variants[variant], sizes[size], className);

  // asChild → clonar el hijo (por ejemplo, <a>) y mergear className
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(
      child,
      // 'any' para evitar la queja de TS sobre props específicas del hijo
      { className: cn(child.props?.className, classes), ...rest } as any
    );
  }

  // Render normal como <button>
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
