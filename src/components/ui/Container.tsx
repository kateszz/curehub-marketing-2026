import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Centers content, clamps to the site's 1440px design width, and applies
 * the fluid side gutter (`--spacing-gutter`). Use this instead of writing
 * `max-w-... mx-auto px-...` by hand on every section.
 */
export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn("container-page", className)} {...props}>
      {children}
    </Component>
  );
}
