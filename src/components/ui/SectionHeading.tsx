import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-fluid-lg",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={cn("text-h2 max-w-3xl", align === "center" && "mx-auto")}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={cn("text-body-lg max-w-2xl text-snow/70", align === "center" && "mx-auto")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
