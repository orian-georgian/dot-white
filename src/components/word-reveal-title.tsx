"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type WordRevealTitleProps = {
  id?: string;
  className: string;
  text: string;
  prefersReducedMotion: boolean;
  staggerChildren?: number;
  delayChildren?: number;
  wordDuration?: number;
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
} as const;

export function WordRevealTitle({
  id,
  className,
  text,
  prefersReducedMotion,
  staggerChildren = 0.14,
  delayChildren = 0.4,
  wordDuration = 0.72,
}: WordRevealTitleProps) {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <motion.h1
      id={id}
      className={className}
      initial={prefersReducedMotion ? undefined : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.3em]"
          variants={titleWordVariants}
          transition={{ duration: wordDuration, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
