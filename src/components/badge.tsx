"use client";

import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "pink" | "sky" | "emerald";
};

const toneClasses = {
  pink: "bg-pink-brand/12 text-foreground/70",
  sky: "bg-sky-400/12 text-foreground/70",
  emerald: "bg-emerald-400/12 text-foreground/70",
} as const;

export function Badge({ children, className, tone = "pink" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.07em]",
        toneClasses[tone],
        className ?? "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
