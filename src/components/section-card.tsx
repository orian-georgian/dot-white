"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SectionCardProps = Omit<HTMLMotionProps<"article">, "children" | "className"> & {
  className: string;
  children: ReactNode;
};

export function SectionCard({ className, children, ...props }: SectionCardProps) {
  return (
    <motion.article className={className} {...props}>
      {children}
    </motion.article>
  );
}
