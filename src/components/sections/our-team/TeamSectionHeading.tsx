import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * The header of one team layer.
 *
 * The three sections are numbered (01/02/03) and carry a discipline label
 * above the title — the same header rhythm the researcher profiles on Why
 * Trust Us use, so a visitor reads the page as three connected layers
 * rather than three unrelated grids.
 *
 * `size="feature"` gives the Research Team the larger title: it is the one
 * section the brief asks to have an independent presence of its own.
 */
export function TeamSectionHeading({
  index,
  label,
  title,
  children,
  size = "default",
}: {
  index: number;
  label: string;
  title: string;
  children?: ReactNode;
  size?: "default" | "feature";
}) {
  return (
    <div className="flex flex-col gap-fluid-lg">
      <Reveal>
        {/* Baseline rather than centre: the label wraps to two lines on a
            phone, and centring would drop the numeral between them. */}
        <div className="flex items-baseline gap-fluid-lg">
          <span className="font-display text-h4 leading-none text-snow/20 tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-display text-body-sm uppercase leading-snug tracking-[0.12em] text-glow">
            {label}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className={cn("max-w-4xl", size === "feature" ? "text-h1" : "text-h2")}>
          {title}
        </h2>
      </Reveal>

      {children && <Reveal delay={0.12}>{children}</Reveal>}
    </div>
  );
}
