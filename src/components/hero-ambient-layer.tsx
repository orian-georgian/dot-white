"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  FloatingBubbleField,
  type FloatingBubble,
} from "@/components/floating-bubble-field";

const bubbles: FloatingBubble[] = [
  {
    left: "8%",
    top: "12%",
    size: 72,
    duration: 8.4,
    delay: 0,
    color: "border-pink-brand/45",
  },
  {
    left: "10%",
    top: "60%",
    size: 50,
    duration: 7.2,
    delay: 0.6,
    color: "border-foreground/32",
  },
  {
    left: "42%",
    top: "16%",
    size: 40,
    duration: 8.8,
    delay: 0.3,
    color: "border-foreground/32",
  },
  {
    left: "60%",
    top: "12%",
    size: 90,
    duration: 9.4,
    delay: 0.9,
    color: "border-pink-brand/40",
  },
  {
    left: "92%",
    top: "84%",
    size: 21,
    duration: 7.8,
    color: "border-foreground/32",
  },
  {
    left: "58%",
    top: "88%",
    size: 56,
    duration: 7.4,
    color: "border-pink-brand/38",
  },
];

const gridBackgroundStyle = {
  backgroundImage:
    "linear-gradient(to right, rgb(120 120 120 / 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgb(120 120 120 / 0.12) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
} as const;

type AmbientDotConfig = {
  className: string;
  axis: "x" | "y";
  travel: number;
  duration: number;
  mobileOpacity: [number, number, number];
  desktopOpacity: [number, number, number];
};

const ambientDotConfigs: AmbientDotConfig[] = [
  {
    className:
      "absolute left-[12%] top-[20%] h-4 w-4 rounded-full bg-foreground/45 sm:bg-foreground/50",
    axis: "y",
    travel: -20,
    duration: 3.8,
    mobileOpacity: [0.2, 0.45, 0.2],
    desktopOpacity: [0.5, 1, 0.5],
  },
  {
    className:
      "absolute right-[7%] top-[22%] h-3.5 w-3.5 rounded-full bg-pink-brand/38 sm:bg-pink-brand/50",
    axis: "y",
    travel: 18,
    duration: 4.4,
    mobileOpacity: [0.2, 0.45, 0.2],
    desktopOpacity: [0.45, 0.95, 0.45],
  },
  {
    className:
      "absolute bottom-[15%] left-[32%] h-3.5 w-3.5 rounded-full bg-foreground/45 sm:bg-foreground/50",
    axis: "x",
    travel: 18,
    duration: 4.8,
    mobileOpacity: [0.2, 0.42, 0.2],
    desktopOpacity: [0.4, 0.9, 0.4],
  },
];

type AmbientLineConfig = {
  className: string;
  duration: number;
  mobileOpacity: [number, number, number];
  desktopOpacity: [number, number, number];
};

const ambientLineConfigs: AmbientLineConfig[] = [
  {
    className:
      "absolute -left-8 top-1/4 h-[2px] w-40 bg-foreground/30 sm:w-56 sm:bg-foreground/35",
    duration: 3.8,
    mobileOpacity: [0.15, 0.35, 0.15],
    desktopOpacity: [0.35, 1, 0.35],
  },
  {
    className:
      "absolute right-0 top-[80%] h-[2px] w-36 bg-foreground/30 sm:w-52 sm:bg-foreground/35",
    duration: 4.2,
    mobileOpacity: [0.15, 0.35, 0.15],
    desktopOpacity: [0.35, 0.95, 0.35],
  },
];

type HeroAmbientLayerProps = {
  prefersReducedMotion: boolean;
  shouldAnimate: boolean;
  isMobile: boolean;
  isHeroHovered: boolean;
};

export function HeroAmbientLayer({
  prefersReducedMotion,
  shouldAnimate,
  isMobile,
  isHeroHovered,
}: HeroAmbientLayerProps) {
  const backgroundGridAnimate = useMemo(
    () =>
      shouldAnimate
        ? {
            backgroundPosition: ["0px 0px", "24px 24px", "0px 0px"],
            opacity: [0.65, 0.95, 0.65],
          }
        : undefined,
    [shouldAnimate],
  );

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={gridBackgroundStyle}
        animate={backgroundGridAnimate}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingBubbleField
        bubbles={bubbles}
        shouldAnimate={shouldAnimate}
        isMobile={isMobile}
        isHovered={isHeroHovered}
      />
      <motion.div
        className="absolute bottom-[14%] left-[8%] h-5 w-5 rounded-full bg-pink-brand/45 shadow-[0_0_24px_rgba(var(--pink-brand-rgb),0.45)] sm:bg-pink-brand/55"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -24, 0],
                opacity: isMobile ? [0.2, 0.45, 0.2] : [0.45, 0.95, 0.45],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-foreground/20 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 34, 0], y: [0, -24, 0], opacity: [0.22, 0.52, 0.22] }
        }
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {ambientDotConfigs.map((dot) => (
        <motion.div
          key={dot.className}
          className={dot.className}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  [dot.axis]: [0, dot.travel, 0],
                  opacity: isMobile ? dot.mobileOpacity : dot.desktopOpacity,
                }
          }
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {ambientLineConfigs.map((line) => (
        <motion.div
          key={line.className}
          className={line.className}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: isMobile ? line.mobileOpacity : line.desktopOpacity,
                }
          }
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute right-[4%] top-[4%] h-20 w-20 rounded-full border border-foreground/15 sm:h-28 sm:w-28"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                rotate: [0, 16, 0],
                scale: [1, 1.08, 1],
                opacity: [0.28, 0.78, 0.28],
              }
        }
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
