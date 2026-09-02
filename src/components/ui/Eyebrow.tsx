import { cn } from "@/lib/utils";

/** `brand` is the default label colour; `snow` is for the bright brand-blue
 *  radial sections, where brand-600 all but disappears. Picked here rather
 *  than overridden via className — `cn` is plain clsx, so two colour
 *  utilities on one element would resolve by stylesheet order, not intent. */
type Tone = "brand" | "snow";

const tones: Record<Tone, string> = {
  brand: "text-brand-600",
  snow: "text-snow",
};

/** Small uppercase label used above section headings (e.g. "OUR PRODUCT"). */
export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-fluid-sm border-b border-current/20 px-fluid-md py-fluid-xs font-display text-body-sm uppercase tracking-[0.08em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
