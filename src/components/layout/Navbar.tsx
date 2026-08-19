"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-product", label: "Our Product" },
  { href: "/why-trust-us", label: "Why Trust Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/for-partners", label: "For Partners" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-screen flex justify-center bg-ink/50 backdrop-blur-md">
      <div className="flex h-[var(--nav-height)] w-[var(--container-page)] items-center justify-between  pl-fluid-lg pr-fluid-lg">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logotype-snow.svg"
            alt="Curehub"
            width={130}
            height={28}
            priority
          />
        </Link>

        <nav className="ml-fluid-2xl hidden items-center gap-fluid-xl md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-body-sm uppercase tracking-[0.04em] text-snow/70 transition-colors hover:text-snow",
                  active && "text-snow",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-fluid-lg flex size-10 items-center justify-center rounded-full text-snow md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-px bg-current transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-px bg-current transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <nav className="flex w-full flex-col gap-fluid-md border-b border-snow/15 bg-ink/95 p-fluid-xl backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-body-lg uppercase tracking-[0.04em] text-snow/80 hover:text-snow"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
