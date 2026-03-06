"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedArrowProps = {
  prefersReducedMotion: boolean;
  className?: string;
  axis?: "x" | "y";
  distance?: number;
  duration?: number;
  delay?: number;
  children: ReactNode;
};

export function AnimatedArrow({
  prefersReducedMotion,
  className = "relative z-10 ml-2",
  axis = "x",
  distance = 4,
  duration = 1.4,
  delay = 0,
  children,
}: AnimatedArrowProps) {
  const animate =
    prefersReducedMotion
      ? undefined
      : axis === "x"
        ? { x: [0, distance, 0] }
        : { y: [0, distance, 0] };

  return (
    <motion.span
      aria-hidden="true"
      className={className}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.span>
  );
}
