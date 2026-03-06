"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SectionSeparatorProps = {
  Icon: LucideIcon;
};

export function SectionSeparator({ Icon }: SectionSeparatorProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2"
      animate={
        prefersReducedMotion
          ? undefined
          : { y: [0, 4, 0], opacity: [0.75, 1, 0.75] }
      }
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute h-px w-24 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 bg-background/88 text-foreground/70">
          <Icon size={17} strokeWidth={2} />
        </span>
      </div>
    </motion.div>
  );
}
