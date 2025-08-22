"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Switch({ className, id }: { className?: string; id?: string }) {
  const [on, setOn] = React.useState(true);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-labelledby={id}
      onClick={() => setOn(!on)}
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
        on ? "bg-neutral-900" : "bg-neutral-300",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          on ? "translate-x-4" : "translate-x-1"
        )}
      />
    </button>
  );
}
