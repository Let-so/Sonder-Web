import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center border border-neutral-300 bg-white text-neutral-600", "rounded-full px-2.5 py-1 text-[10px] sm:text-xs", className)}
      {...props}
    />
  );
}
