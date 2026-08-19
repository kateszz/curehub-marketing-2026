import Image from "next/image";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small icon + statement card used for the trust/privacy "promises"
 * (e.g. "Your data is never sold", "You're in control"). Works on both
 * light and dark section backgrounds since it only ever borrows the
 * current text color.
 */
export function PromiseCard({
  icon,
  children,
  className,
}: {
  icon: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full items-start gap-fluid-lg rounded-md border border-current/10 p-fluid-xl",
        className
      )}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-500/15">
        <Image src={icon} alt="" width={24} height={24} className="size-6" />
      </span>
      <p className="text-body-lg">{children}</p>
    </div>
  );
}
