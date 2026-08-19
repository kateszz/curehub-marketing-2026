import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "./EmptyState";
import { TeamMemberCard } from "./TeamMemberCard";
import { TEAM_CATEGORY_LABELS, type TeamCategory, type TeamMember } from "@/lib/sanity/types";

const CATEGORY_ORDER = Object.keys(TEAM_CATEGORY_LABELS) as TeamCategory[];

/**
 * Groups team members by `teamCategory` and renders each non-empty group
 * as its own labelled grid. Falls back to an on-brand placeholder when the
 * CMS has no team members yet.
 */
export function TeamGrid({ teamMembers }: { teamMembers: TeamMember[] }) {
  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    members: teamMembers.filter((member) => member.teamCategory === category),
  })).filter((group) => group.members.length > 0);

  return (
    <section id="team" className="py-section-md bg-radial-[at_80%_95%] from-brand-500 to-ink to-90% text-snow">
      <Container className="flex flex-col gap-fluid-3xl">
        <SectionHeading eyebrow="The People" title="Our Team" />

        {groups.length === 0 ? (
          <EmptyState message="Team member profiles are coming soon — add them in the Studio at /studio." />
        ) : (
          <div className="flex flex-col gap-fluid-3xl">
            {groups.map(({ category, members }) => (
              <div key={category} className="flex flex-col gap-fluid-lg">
                <Reveal>
                  <h3 className="text-h4">{TEAM_CATEGORY_LABELS[category]}</h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2 lg:grid-cols-3">
                  {members.map((member, i) => (
                    <Reveal key={member._id} delay={i * 0.06}>
                      <TeamMemberCard member={member} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
