import Link from "next/link";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { resolvePortrait } from "@/lib/portrait-registry";
import { memberDescription } from "@/lib/team";
import type { TeamMember } from "@/lib/sanity/types";

/**
 * A Research Team card.
 *
 * Deliberately not a ProfileCard: this card carries no biography at all.
 * The full scientific profiles live on Why Trust Us, so the card shows
 * only photo · name · role · a short expertise line, and the hover state
 * is the CTA alone rather than a wall of text. The whole card is the link
 * to that researcher's anchor.
 *
 * Every card is built from the same fixed parts at the same size, so no
 * researcher can read as secondary to another — the four disciplines carry
 * equal weight by construction.
 */
export function ResearchCard({
  member,
  href,
}: {
  member: TeamMember;
  href: string;
}) {
  const expertise = memberDescription(member);

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-md outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
    >
      {/* Portrait beside the text on a phone, above it from `sm` up — four
          full-width portraits in a column is a long scroll for cards this
          light on content. */}
      <div className="flex flex-1 flex-row items-start gap-fluid-lg sm:flex-col sm:gap-0">
        <div className="relative aspect-[4/5] w-[38%] shrink-0 overflow-hidden rounded-md bg-brand-900/40 sm:w-full">
          <Portrait
            override={resolvePortrait(member)}
            image={member.image}
            frame="portrait"
            fallbackAlt={`Portrait of ${member.name}`}
            width={640}
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 36vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div className="flex flex-1 flex-col gap-fluid-md sm:mt-fluid-lg">
          <div className="flex flex-col gap-fluid-xs">
            <h3 className="text-h5 text-snow">{member.name}</h3>
            <p className="font-display text-body-sm uppercase tracking-[0.1em] text-glow">
              {member.position}
            </p>
          </div>
          {expertise && (
            <p className="text-body-sm leading-relaxed text-snow/65">{expertise}</p>
          )}
        </div>
      </div>

      {/* Overlay on hover, a plain link line under the card on touch —
          see `.card-reveal` in globals.css. */}
      <div className="card-reveal">
        <span className="inline-flex items-center gap-fluid-sm font-display text-body-sm uppercase tracking-[0.1em] text-glow">
          <span>View scientific profile</span>
          <ArrowUpRightIcon className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
