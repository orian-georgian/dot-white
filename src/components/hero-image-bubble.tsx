"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type HeroImageBubbleProps = {
  wrapperClassName: string;
  wrapperInitial?: HTMLMotionProps<"div">["initial"];
  wrapperAnimate?: HTMLMotionProps<"div">["animate"];
  wrapperTransition?: HTMLMotionProps<"div">["transition"];
  innerClassName: string;
  innerAnimate?: HTMLMotionProps<"div">["animate"];
  innerTransition?: HTMLMotionProps<"div">["transition"];
  children: ReactNode;
};

export function HeroImageBubble({
  wrapperClassName,
  wrapperInitial,
  wrapperAnimate,
  wrapperTransition,
  innerClassName,
  innerAnimate,
  innerTransition,
  children,
}: HeroImageBubbleProps) {
  return (
    <motion.div
      className={wrapperClassName}
      initial={wrapperInitial}
      animate={wrapperAnimate}
      transition={wrapperTransition}
    >
      <motion.div
        className={innerClassName}
        animate={innerAnimate}
        transition={innerTransition}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
