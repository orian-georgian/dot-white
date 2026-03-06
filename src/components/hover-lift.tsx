"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
};

export function HoverLift({
  children,
  className,
  y = -5,
  duration = 0.25,
}: HoverLiftProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? undefined : { y }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
