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
  /** How much of the element must be in view before it animates in.
   *  Keep the default for normal-sized blocks; pass "some" for anything
   *  that can grow taller than ~3x the viewport (e.g. a whole legal
   *  document), since a fractional threshold can never be met there and
   *  the content would stay stuck at opacity 0. */
  amount?: "some" | "all" | number;
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
  amount = 0.3,
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
      viewport={{ once: !repeat, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
