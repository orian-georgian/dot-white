"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type ThemeFlipIconProps = {
  isDark: boolean;
  isHovered: boolean;
  prefersReducedMotion: boolean;
  size?: number;
};

export function ThemeFlipIcon({
  isDark,
  isHovered,
  prefersReducedMotion,
  size = 16,
}: ThemeFlipIconProps) {
  if (prefersReducedMotion) {
    return isDark ? <Sun size={size} /> : <Moon size={size} />;
  }

  return (
    <motion.span
      animate={{ rotateY: isHovered ? 180 : 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative inline-flex h-4 w-4 items-center justify-center"
    >
      <span
        className="absolute inset-0 inline-flex items-center justify-center"
        style={{ backfaceVisibility: "hidden" }}
      >
        {isDark ? <Sun size={size} /> : <Moon size={size} />}
      </span>
      <span
        className="absolute inset-0 inline-flex items-center justify-center"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        {isDark ? <Moon size={size} /> : <Sun size={size} />}
      </span>
    </motion.span>
  );
}
