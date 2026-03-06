"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type InViewRevealProps = Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition"> & {
  prefersReducedMotion: boolean;
  initialY?: number;
  amount?: number;
  duration?: number;
  delay?: number;
};

export function InViewReveal({
  prefersReducedMotion,
  initialY = 14,
  amount = 0.45,
  duration = 0.45,
  delay = 0,
  ...props
}: InViewRevealProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: initialY }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    />
  );
}
