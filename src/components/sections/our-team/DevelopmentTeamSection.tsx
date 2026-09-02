import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyState } from "./EmptyState";
import { ProfileCard } from "./ProfileCard";
import { TeamSectionHeading } from "./TeamSectionHeading";
import type { TeamMember } from "@/lib/sanity/types";

/**
 * Section 4 — the Development Team: who builds it.
 *
 * Square portraits and a denser grid than the two sections above, so the
 * page's three layers stay visually distinct at a glance without changing
 * the site's visual language. The grid is plain `auto-flow`, so removing
 * or adding a member re-balances it rather than leaving a hole.
 */
export function DevelopmentTeamSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="relative overflow-hidden py-section-lg text-snow bg-radial-[at_85%_100%] from-brand-500 to-ink to-80%">
      <Container className="relative flex flex-col gap-fluid-4xl">
        <TeamSectionHeading
          index={3}
          label="Technical implementation and product development"
          title="Development Team"
        />

        {members.length === 0 ? (
          <EmptyState message="Development team profiles are coming soon — add them in the Studio at /studio." />
        ) : (
          <div className="grid grid-cols-1 gap-fluid-3xl sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <Reveal key={member._id} delay={Math.min(i, 3) * 0.06} className="h-full">
                <ProfileCard
                  member={member}
                  shape="square"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
