import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Simple top header shared by the legal pages (Terms & Conditions, Privacy
 * Policy) — just enough top padding to clear the fixed navbar (matching the
 * top-spacing token `PageHero` uses) plus a page title. These pages don't
 * need the full gradient hero treatment.
 */
export function LegalHeader({ title }: { title: string }) {
  return (
    <section className="pt-section-top pb-section-sm">
      <Container>
        <Reveal>
          <h1 className="text-h2">{title}</h1>
        </Reveal>
      </Container>
    </section>
  );
}

/** Narrow, readable single-column wrapper for long-form legal body copy. */
export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="pb-section-lg">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-fluid-3xl">
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

/** One legal clause/section: an optional heading plus its body content. */
export function LegalSection({
  heading,
  level = "h4",
  className,
  children,
}: {
  heading?: string;
  level?: "h4" | "h5";
  className?: string;
  children: ReactNode;
}) {
  const Heading = level;
  return (
    <div className={cn("flex flex-col gap-fluid-lg", className)}>
      {heading && (
        <Heading className={level === "h4" ? "text-h4" : "text-h5"}>{heading}</Heading>
      )}
      <div className="flex flex-col gap-fluid-md">{children}</div>
    </div>
  );
}

/** Visible-marker list (bulleted or numbered) for clauses that enumerate items. */
export function LegalList({
  ordered = false,
  items,
}: {
  ordered?: boolean;
  items: ReactNode[];
}) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag
      className={cn(
        "flex flex-col gap-fluid-sm pl-fluid-lg text-body text-ink/80",
        ordered ? "list-decimal" : "list-disc"
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="pl-fluid-xs">
          {item}
        </li>
      ))}
    </ListTag>
  );
}
