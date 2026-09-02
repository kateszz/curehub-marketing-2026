import Link from "next/link";
import { type ReactNode } from "react";
import { SanityImg } from "@/components/ui/SanityImg";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { toParagraphs } from "@/lib/researchers";
import { memberDescription } from "@/lib/team";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/sanity/types";

/**
 * A Leadership / Development Team card: portrait, name, position, and the
 * profile copy revealed over the photo on hover.
 *
 * No client JS — the reveal is `.card-reveal` in globals.css, which turns
 * the copy into an overlay only where hovering is possible and otherwise
 * leaves it in flow under the card. That is the touch equivalent, and it
 * keeps the copy in the DOM exactly once for screen readers.
 *
 * `href` turns the whole card into a link (Dr. Spisák, whose full
 * scientific background lives on Why Trust Us); everyone else renders as a
 * plain article.
 */
export function ProfileCard({
  member,
  href,
  ctaLabel,
  shape = "portrait",
  nameClassName = "text-h5",
  sizes,
}: {
  member: TeamMember;
  href?: string;
  ctaLabel?: string;
  shape?: "portrait" | "square";
  nameClassName?: string;
  sizes?: string;
}) {
  const paragraphs = toParagraphs(memberDescription(member) ?? "");
  const square = shape === "square";

  const content: ReactNode = (
    <>
      {/* Portrait beside the name on a phone, above it from `sm` up — a
          column of full-width portraits turns this page into a very long
          scroll on a small screen. */}
      <div className="flex flex-row items-center gap-fluid-lg sm:flex-col sm:items-stretch sm:gap-0">
        <div
          className={cn(
            "relative w-[38%] shrink-0 overflow-hidden rounded-md bg-brand-900/40 sm:w-full",
            square ? "aspect-square" : "aspect-[4/5]"
          )}
        >
          {/* `object-top` because the supplied portraits differ in aspect
              ratio — anything taller than the frame is cropped from the
              bottom, which keeps every face in shot. */}
          <SanityImg
            image={member.image}
            fallbackAlt={`Portrait of ${member.name}`}
            fill
            width={720}
            sizes={sizes ?? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 36vw"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div className="flex flex-col gap-fluid-xs sm:mt-fluid-lg">
          <h3 className={cn(nameClassName, "text-snow")}>{member.name}</h3>
          <p className="font-display text-body-sm uppercase tracking-[0.1em] text-glow">
            {member.position}
          </p>
        </div>
      </div>

      {(paragraphs.length > 0 || ctaLabel) && (
        <div className="card-reveal flex flex-col gap-fluid-md text-body-sm leading-relaxed text-snow/80">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          {ctaLabel && (
            <span className="inline-flex items-center gap-fluid-sm font-display text-body-sm uppercase tracking-[0.1em] text-glow">
              <span>{ctaLabel}</span>
              <ArrowUpRightIcon className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      )}
    </>
  );

  const shell = cn(
    "group relative flex h-full flex-col",
    square && "[--card-aspect:1]",
    href &&
      "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
  );

  if (href) {
    return (
      <Link href={href} className={shell}>
        {content}
      </Link>
    );
  }

  return <article className={shell}>{content}</article>;
}
