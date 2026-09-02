"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { Button } from "@/components/ui/Button";
import { useGateway } from "@/components/providers/GatewayProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useFinePointer } from "@/hooks/useFinePointer";

type Side = "left" | "right";

const copy: Record<string, string> = {
  "Genomic Biointelligence":
    "Transforming genetic variation into deeper, pathway-level biological insight and personalized guidance.",
  "Ocular Biointelligence":
    "Exploring how retinal imaging and artificial intelligence can reveal systemic biological states non-invasively.",
};

/** Entry animations are CSS (see `.gateway-enter` in globals.css) so the
 *  overlay paints on the first frame rather than waiting for hydration —
 *  the stagger is just a delay per element. */
const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

/* --------------------------------------------------------------------------
   Cursor glow
   -------------------------------------------------------------------------- */

/** Slack enough that the glow trails the cursor rather than sticking to it. */
const follow = { stiffness: 45, damping: 20, mass: 1.2 };

/** Idle drift — a slow, barely-there wander while the glow sits at rest. */
const drift = {
  animate: { x: [0, 10, -8, 0], y: [0, -9, 7, 0], scale: [1, 1.06, 0.96, 1] },
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" as const },
};

type CursorGlowProps = {
  /** The element the glow parks over whenever there's no cursor to follow. */
  restRef: RefObject<HTMLElement | null>;
  /** A real cursor is present and motion is welcome. */
  interactive: boolean;
  still: boolean;
};

/**
 * The single blurred glow behind the gateway. It follows the cursor, and falls
 * back to the middle of the logo-mark when there's no cursor to follow —
 * on a touch screen, or once the pointer has left the window.
 *
 * Layers, each owning one transform so they can animate independently:
 * fade-in wrapper -> spring-driven position -> centering -> idle drift.
 */
function CursorGlow({ restRef, interactive, still }: CursorGlowProps) {
  // Springs are driven directly — `set` animates toward the new point, `jump`
  // teleports (used once, to place the glow before its first frame).
  const springX = useSpring(0, follow);
  const springY = useSpring(0, follow);

  useEffect(() => {
    const rest = { x: 0, y: 0 };
    let following = false;
    /** Once the cursor has had the glow, going home is a move, not a jump. */
    let hasFollowed = false;

    /** Re-read where the logo sits. Layout keeps settling after mount — fonts
     *  land, the entry animation slides the logo into place — and moves again
     *  on resize or scroll, so this runs on every one of those. */
    const measure = () => {
      const el = restRef.current;
      if (!el) return;

      const box = el.getBoundingClientRect();
      if (!box.width && !box.height) return; // not laid out yet

      rest.x = box.left + box.width / 2;
      rest.y = box.top + box.height / 2;

      if (following) return;
      if (hasFollowed) {
        springX.set(rest.x);
        springY.set(rest.y);
      } else {
        // Never been driven by a cursor: sit on the logo outright, rather
        // than gliding in from the top-left corner.
        springX.jump(rest.x);
        springY.jump(rest.y);
      }
    };

    measure();
    const frame = requestAnimationFrame(measure);
    document.fonts?.ready.then(measure);
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    // Capture: the overlay scrolls itself on short screens.
    window.addEventListener("scroll", measure, true);
    // The entry stagger slides the logo down into place.
    restRef.current?.addEventListener("animationend", measure);

    const observer = new ResizeObserver(measure);
    if (restRef.current) observer.observe(restRef.current);

    const logo = restRef.current;
    const stop = () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
      logo?.removeEventListener("animationend", measure);
      observer.disconnect();
    };

    if (!interactive) return stop;

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      following = true;
      hasFollowed = true;
      springX.set(event.clientX);
      springY.set(event.clientY);
    };

    /** Pointer gone (left the window, or the tab lost focus) — go home. */
    const release = () => {
      following = false;
      springX.set(rest.x);
      springY.set(rest.y);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", release);
    window.addEventListener("blur", release);

    return () => {
      stop();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", release);
      window.removeEventListener("blur", release);
    };
  }, [interactive, restRef, springX, springY]);

  const blob =
    "h-28 w-28 rounded-full bg-brand-500/70 blur-2xl md:h-44 md:w-44 md:blur-3xl overflow-visible";

  return (
    <div
      style={delay(0.5)}
      className="gateway-glow-in pointer-events-none fixed inset-0 z-0"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-0 left-0"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          {still ? (
            <div className={blob} />
          ) : (
            <motion.div
              initial={false}
              animate={drift.animate}
              transition={drift.transition}
              className={blob}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Option area
   -------------------------------------------------------------------------- */

type OptionAreaProps = {
  side: Side;
  category: string;
  /** Where [ ENTER ] leads. Omit to simply dismiss the gateway and drop the
   *  visitor onto the home page underneath. */
  href?: string;
  onEnter: () => void;
  /** Where this column starts in the entry stagger, in seconds. */
  enterDelay: number;
};

/** Defined at module scope, not inside GatewaySection — a component redeclared
 *  on every render would remount (and replay its entry animation) each time
 *  the parent re-renders. */
function OptionArea({
  side,
  category,
  href,
  onEnter,
  enterDelay,
}: OptionAreaProps) {
  const catWords = category.split(" ");
  const isLeft = side === "left";
  // The two columns mirror each other on both layouts, just around different
  // axes: side by side from md up (left column right-aligned against the
  // logo-mark), and stacked below that — where the right column is the bottom
  // card, so it hangs off the right edge instead.
  const boxAlign = isLeft ? undefined : "self-end md:self-auto";
  const itemAlign = isLeft
    ? "items-start md:items-end"
    : "items-end md:items-start";
  const textAlign = isLeft ? "md:text-right" : "text-right md:text-left";

  return (
    <div
      className={cn(
        "relative w-full max-w-[34ch] md:w-auto md:max-w-min",
        boxAlign,
      )}
    >
      <div
        className={cn(
          "relative z-5 flex flex-col gap-fluid-md md:gap-fluid-lg",
          itemAlign,
        )}
      >
        <p
          style={delay(enterDelay)}
          className={cn(
            "gateway-enter font-display text-body-sm uppercase tracking-[0.06em] text-snow/70",
            textAlign,
          )}
        >
          <span className="font-bold text-snow"> {catWords[0]}</span>{" "}
          {catWords[1]}
        </p>

        <div
          className={cn(
            "flex flex-col gap-fluid-md",
            itemAlign,
          )}
        >
          <p
            style={delay(enterDelay + 0.08)}
            className={cn(
              "gateway-enter w-[30ch] max-w-full text-sm font-extralight text-snow",
              textAlign,
            )}
          >
            {copy[category]}
          </p>
          <div style={delay(enterDelay + 0.16)} className="gateway-enter">
            {/* Navigating is enough to close the gateway on its own — the
                provider drops it whenever the path stops being "/" — so the
                link deliberately doesn't also dismiss it on click, which
                would flash the home page during the route change. */}
            {href ? (
              <Button href={href} className="text-glow touch-manipulation">
                [ ENTER ]
              </Button>
            ) : (
              <Button className="text-glow touch-manipulation" onClick={onEnter}>
                [ ENTER ]
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Gateway
   -------------------------------------------------------------------------- */

export function GatewaySection() {
  const { gatewayIsActive, setGatewayIsActive } = useGateway();
  const finePointer = useFinePointer();
  const shouldReduceMotion = useReducedMotion();
  const logoRef = useRef<HTMLDivElement>(null);

  // No cursor to follow (touch) and no motion wanted (reduced-motion) both
  // collapse to "the glow stays on the logo".
  const interactive = finePointer && !shouldReduceMotion;

  return (
    <AnimatePresence>
      {gatewayIsActive && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 z-50 flex h-svh w-full flex-col items-center justify-center gap-fluid-2xl overflow-y-auto bg-[url(/images/blue-dark-mesh.svg)] bg-size-[105%] bg-center px-gutter py-fluid-2xl md:h-dvh md:justify-start md:gap-60 md:pt-40 md:pb-fluid-4xl"
        >
          <CursorGlow
            restRef={logoRef}
            interactive={interactive}
            still={!!shouldReduceMotion}
          />

          <div className="relative z-10">
            <h1
              style={delay(0.05)}
              className="gateway-enter text-h1 text-center text-snow"
            >
              <span className="font-light text-snow/70">The </span>Future
              <span className="font-light text-snow/70"> of</span> Biointelligence
            </h1>
            <p
              style={delay(0.15)}
              className="gateway-enter text-center font-extralight text-snow"
            >
              Understanding the human body from signals we could never fully
              interpret before.
            </p>
          </div>

          <div className="relative z-10 flex w-full flex-col items-start gap-fluid-2xl md:w-auto md:flex-row md:items-start md:gap-fluid-3xl">
            <OptionArea
              side="left"
              category="Genomic Biointelligence"
              onEnter={() => setGatewayIsActive(false)}
              enterDelay={0.3}
            />
            <div
              ref={logoRef}
              style={delay(0.34)}
              className="gateway-enter self-center md:self-auto"
            >
              <Image
                src="/images/logomark-blue.svg"
                alt="The Curehub logo-mark"
                width={400}
                height={400}
                className="w-16 md:w-40"
              />
            </div>
            <OptionArea
              side="right"
              category="Ocular Biointelligence"
              href="/research-and-development"
              onEnter={() => setGatewayIsActive(false)}
              enterDelay={0.42}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
