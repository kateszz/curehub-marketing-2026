"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

type ButtonVariant = "primary" | "text";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Show the trailing arrow icon (defaults on for "primary"). */
  icon?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center gap-fluid-md font-display text-body-sm uppercase tracking-[0.06em] transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-snow/10 bg-brand-500 bg-[radial-gradient(circle_farthest-corner_at_0%_50%,color-mix(in_srgb,var(--color-ink)_20%,transparent),var(--color-brand-600)_83%,var(--color-brand-500))] px-fluid-xl py-fluid-md text-snow shadow-[0_8px_30px_-8px_var(--color-brand-700)] backdrop-blur-sm hover:border-snow/70",
  text: "text-ink hover:text-brand-600 border-b border-current pb-1",
};

/**
 * The site's primary CTA button ("button-prim" in the source design — a
 * glassy blue gradient pill with a trailing arrow) plus a plain
 * underlined "text" variant for secondary actions.
 */
export function Button(props: ButtonProps) {
  const { children, variant = "primary", icon, className } = props;
  const showIcon = icon ?? variant === "primary";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <ArrowUpRightIcon className="size-4 shrink-0" />}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <motion.a
          href={props.href}
          target={props.target ?? "_blank"}
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={props.href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
