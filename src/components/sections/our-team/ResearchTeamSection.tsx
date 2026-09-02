import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyState } from "./EmptyState";
import { ResearchCard } from "./ResearchCard";
import { TeamSectionHeading } from "./TeamSectionHeading";
import { scientificProfileHref } from "@/lib/team";
import type { TeamMember } from "@/lib/sanity/types";

/** The four perspectives the research programme is built on. Listed above
 *  the cards so the disciplines register before the faces do. */
const PERSPECTIVES = [
  "AI / Medical Imaging",
  "Systems Modelling",
  "Clinical Ophthalmology",
  "AI Validation",
];

/**
 * Section 3 — the Research Team: who provides the scientific foundation.
 *
 * The section the brief asks to carry the strongest independent presence,
 * so it gets its own brand-blue ground, the largest section title on the
 * page, and a discipline strip of its own. The cards stay deliberately
 * plain and identical — the biographies belong on Why Trust Us, and four
 * matched cards are what makes the four perspectives read as equals.
 */
export function ResearchTeamSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="relative overflow-hidden py-section-lg text-snow bg-radial-[at_15%_0%] from-brand-500 to-ink to-75%">
      <Container className="relative flex flex-col gap-fluid-4xl">
        <TeamSectionHeading
          index={2}
          label="AI · Systems Modelling · Ophthalmology · Scientific Validation"
          title="Research Team"
          size="feature"
        >
          <p className="text-body-lg max-w-3xl text-snow/70">
            Curehub&rsquo;s research programme is supported by four different
            professional perspectives. The full scientific profiles &mdash;
            positions, publications and contribution to our R&amp;D &mdash; live
            on{" "}
            <Link
              href="/why-trust-us"
              className="border-b border-glow/40 text-snow transition-colors hover:border-glow hover:text-glow"
            >
              Why Trust Us
            </Link>
            .
          </p>
        </TeamSectionHeading>

        {/* Equal weight, stated as well as designed: four columns of the
            same width, four cards of the same build. */}
        <Reveal>
          <ul className="grid grid-cols-1 border-t border-snow/15 sm:grid-cols-2 lg:grid-cols-4">
            {PERSPECTIVES.map((perspective, i) => (
              <li
                key={perspective}
                className="border-b border-snow/15 py-fluid-lg font-display text-body-sm uppercase tracking-[0.1em] text-snow/70 lg:border-l lg:pl-fluid-lg lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="mr-fluid-sm text-glow tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {perspective}
              </li>
            ))}
          </ul>
        </Reveal>

        {members.length === 0 ? (
          <EmptyState message="Researcher profiles are coming soon — add them in the Studio at /studio." />
        ) : (
          <div className="grid grid-cols-1 gap-fluid-3xl sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, i) => (
              <Reveal key={member._id} delay={i * 0.06} className="h-full">
                <ResearchCard
                  member={member}
                  href={scientificProfileHref(member.name) ?? "/why-trust-us"}
                />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
