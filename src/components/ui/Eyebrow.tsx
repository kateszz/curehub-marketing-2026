import { cn } from "@/lib/utils";

/** Small uppercase label used above section headings (e.g. "OUR PRODUCT"). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-fluid-sm border-b border-current/20 px-fluid-md py-fluid-xs font-display text-body-sm uppercase tracking-[0.08em] text-brand-600",
        className
      )}
    >
      {children}
    </span>
  );
}
