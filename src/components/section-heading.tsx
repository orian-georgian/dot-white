"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  prefersReducedMotion: boolean;
  eyebrow: string;
  title: string;
  subtitle?: string;
  headingId?: string;
  containerClassName: string;
  eyebrowClassName?: string;
  titleClassName: string;
  subtitleClassName?: string;
  initialY?: number;
  viewportAmount?: number;
  duration?: number;
  delay?: number;
};

export function SectionHeading({
  prefersReducedMotion,
  eyebrow,
  title,
  subtitle,
  headingId,
  containerClassName,
  eyebrowClassName = "text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55",
  titleClassName,
  subtitleClassName = "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg",
  initialY = 16,
  viewportAmount = 0.55,
  duration = 0.45,
  delay = 0,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={containerClassName}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: initialY }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 id={headingId} className={titleClassName}>
        {title}
      </h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
    </motion.div>
  );
}
