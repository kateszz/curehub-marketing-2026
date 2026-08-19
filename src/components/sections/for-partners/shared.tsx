import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * A single "content block" as used repeatedly in the source page's dark
 * B2B / B2B2C sections — a left border rule, a subsection heading, and
 * free-form supporting content underneath.
 */
export function ContentBlock({
  title,
  children,
  delay = 0,
  className,
}: {
  title: ReactNode;
  children?: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "flex flex-col gap-fluid-lg border-l border-snow/15 pl-fluid-lg md:pl-fluid-2xl",
          className
        )}
      >
        <h3 className="text-h3 max-w-3xl">{title}</h3>
        {children}
      </div>
    </Reveal>
  );
}

/** Small uppercase label used above a list inside a `ContentBlock` (e.g. "TARGET PARTNERS"). */
export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="font-display text-h6 uppercase tracking-[0.06em] text-brand-300">
      {children}
    </span>
  );
}

/** Bulleted list styled for the dark sections of this page. */
export function BulletList({
  items,
  className,
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-fluid-sm text-body-lg text-snow/80", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-fluid-sm">
          <span aria-hidden="true" className="text-brand-300">
            &bull;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered step list (matches the home page's `MethodSection` numbering style, dark variant). */
export function StepList({
  steps,
  className,
}: {
  steps: { title: ReactNode; description?: ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-fluid-lg md:grid-cols-2", className)}>
      {steps.map((step, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="flex h-full items-center gap-fluid-lg border border-snow/10 bg-snow/5 p-fluid-xl">
            <span className="font-display text-h4 text-brand-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-fluid-xs">
              <p className="text-h6 font-semibold">{step.title}</p>
              {step.description && (
                <p className="text-body text-snow/70">{step.description}</p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
