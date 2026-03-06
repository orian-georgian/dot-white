"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export type FloatingBubble = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay?: number;
  color: string;
};

type FloatingBubbleFieldProps = {
  bubbles: readonly FloatingBubble[];
  shouldAnimate: boolean;
  isMobile: boolean;
  isHovered: boolean;
};

export function FloatingBubbleField({
  bubbles,
  shouldAnimate,
  isMobile,
  isHovered,
}: FloatingBubbleFieldProps) {
  const floatingBubbleAnimate = useMemo(
    () =>
      shouldAnimate
        ? {
            y: isHovered ? [0, -28, 0] : [0, -18, 0],
            x: isHovered ? [0, 14, 0] : [0, 8, 0],
            opacity: isMobile
              ? isHovered
                ? [0.18, 0.38, 0.18]
                : [0.14, 0.3, 0.14]
              : isHovered
                ? [0.4, 0.92, 0.4]
                : [0.28, 0.78, 0.28],
            scale: isHovered ? [1, 1.14, 1] : [1, 1.08, 1],
          }
        : undefined,
    [isHovered, isMobile, shouldAnimate],
  );

  return (
    <>
      {bubbles.map((bubble, index) => (
        <motion.div
          key={`${bubble.left}-${bubble.top}-${index}`}
          className={`absolute rounded-full border ${bubble.color}`}
          style={{
            left: bubble.left,
            top: bubble.top,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={floatingBubbleAnimate}
          transition={{
            duration: isHovered ? bubble.duration * 0.68 : bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
