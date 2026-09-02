import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyState } from "./EmptyState";
import { ProfileCard } from "./ProfileCard";
import { TeamSectionHeading } from "./TeamSectionHeading";
import { scientificProfileHref } from "@/lib/team";
import type { TeamMember } from "@/lib/sanity/types";

/**
 * Section 2 — Leadership: who runs the company.
 *
 * Three large cards, one per founder, on a flat dark ground. Dr. Spisák's
 * card is the only one that links out: his detailed scientific background
 * is a profile on Why Trust Us, and the same hover-CTA pattern repeats on
 * every researcher card in the section below.
 *
 * `id="team"` is the anchor the Why Trust Us closing CTA links to.
 */
export function LeadershipSection({ members }: { members: TeamMember[] }) {
  return (
    <section
      id="team"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-section-lg text-snow"
    >
      <div
        className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-full bg-brand-500/20 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-fluid-4xl">
        <TeamSectionHeading
          index={1}
          label="Founders and executive scientific leadership"
          title="Leadership"
        />

        {members.length === 0 ? (
          <EmptyState message="Leadership profiles are coming soon — add them in the Studio at /studio." />
        ) : (
          <div className="grid grid-cols-1 gap-fluid-3xl sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => {
              const href = scientificProfileHref(member.name);
              return (
                <Reveal key={member._id} delay={i * 0.08} className="h-full">
                  <ProfileCard
                    member={member}
                    href={href}
                    ctaLabel={href ? "Explore scientific background" : undefined}
                    nameClassName="text-h4"
                  />
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
