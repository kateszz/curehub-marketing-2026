import { Container } from "@/components/ui/Container";
import { ResearcherProfile } from "./ResearcherProfile";
import { orderResearchers } from "@/lib/researchers";
import type { Researcher } from "@/lib/sanity/types";

/**
 * The four researcher profiles, straight after Dr. Spisák's section.
 *
 * They share one layout that mirrors on every other profile (portrait left,
 * right, left, right) and are separated by whitespace and a hairline rather
 * than framed as cards — the brief explicitly rules out both four identical
 * CV blocks and a dashboard of many small boxes.
 *
 * Content comes from the `researcher` collection in the Studio; the section
 * renders nothing at all if that collection is empty, rather than leaving a
 * placeholder in the middle of the page.
 */
export function ResearcherProfilesSection({
  researchers,
}: {
  researchers: Researcher[];
}) {
  const ordered = orderResearchers(researchers);
  if (ordered.length === 0) return null;

  return (
    <section className="relative bg-ink py-section-lg text-snow">
      {/* Separates this section from the equally dark one above it. A
          radial gradient rather than a blurred blob: a blob wide enough to
          span the page needs a clipping wrapper, and its own soft-but-still
          visible edge then reads as a shape sitting on the section. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(70%_100%_at_50%_0%,color-mix(in_srgb,var(--color-brand-500)_38%,transparent),transparent_72%)]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col">
        {ordered.map((researcher, i) => (
          <div key={researcher._id}>
            {i > 0 && (
              <div
                className="my-section-sm h-px w-full bg-gradient-to-r from-transparent via-snow/15 to-transparent"
                aria-hidden="true"
              />
            )}
            <ResearcherProfile
              researcher={researcher}
              index={i}
              portraitSide={i % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
