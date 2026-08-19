"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra delay (seconds) before this element animates in — stagger
   *  siblings by passing increasing values (0, 0.08, 0.16, ...). */
  delay?: number;
  /** Direction the content travels in from. */
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  /** Animate every time it enters the viewport instead of just once. */
  repeat?: boolean;
};

const distance = 24;

const offsets: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: distance },
  down: { x: 0, y: -distance },
  left: { x: distance, y: 0 },
  right: { x: -distance, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered fade + slide reveal, built on Framer Motion's
 * `whileInView`. Wrap any element that should animate in as the user
 * scrolls to it. Respects `prefers-reduced-motion` automatically.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  repeat = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
