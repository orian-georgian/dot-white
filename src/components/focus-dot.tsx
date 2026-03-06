"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type FocusDotProps = {
  focused: boolean;
  prefersReducedMotion: boolean;
};

export function FocusDot({ focused, prefersReducedMotion }: FocusDotProps) {
  if (!focused) {
    return null;
  }

  return (
    <motion.span
      layoutId="focus-dot"
      aria-hidden="true"
      className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-pink-brand text-background"
      transition={{
        layout: {
          type: "tween",
          duration: 0.55,
          ease: "easeOut",
        },
      }}
    >
      <motion.span
        aria-hidden="true"
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6 }
        }
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
        }
        transition={{
          duration: 0.18,
          delay: prefersReducedMotion ? 0 : 0.58,
          ease: "easeOut",
        }}
      >
        <Check size={10} strokeWidth={3} />
      </motion.span>
    </motion.span>
  );
}
