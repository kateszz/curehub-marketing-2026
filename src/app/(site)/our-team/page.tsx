import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { VisionSection } from "@/components/sections/our-team/VisionSection";
import { LeadershipSection } from "@/components/sections/our-team/LeadershipSection";
import { ResearchTeamSection } from "@/components/sections/our-team/ResearchTeamSection";
import { DevelopmentTeamSection } from "@/components/sections/our-team/DevelopmentTeamSection";
import { JoinUsSection } from "@/components/sections/our-team/JoinUsSection";
import { safeFetch } from "@/lib/sanity/client";
import { teamMembersQuery } from "@/lib/sanity/queries";
import { groupTeamMembers } from "@/lib/team";
import type { TeamMember } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Curehub is a multidisciplinary Biointelligence company. Meet the leadership, the research team behind our AI, systems modelling, ophthalmology and validation work, and the developers building it.",
};

// Revalidate periodically once real Sanity content exists, rather than only
// ever showing whatever was fetched at build time.
export const revalidate = 60;

/**
 * /our-team — the page order the content brief specifies:
 * Company Vision → Leadership → Research Team → Development Team →
 * Partnership / Join Us → contact.
 *
 * The three team layers are three separate sections rather than one grid:
 * a visitor should read who runs the company, who provides the scientific
 * foundation and who builds it as connected but distinct layers.
 */
export default async function OurTeamPage() {
  const teamMembers = await safeFetch<TeamMember[]>(teamMembersQuery, []);
  const { leadership, research, development } = groupTeamMembers(teamMembers);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        background="/images/building.png"
        title={
          <>
            We Are Building the <span className="text-glow">Future</span> of
            Biointelligence.
          </>
        }
      />
      <VisionSection />
      <LeadershipSection members={leadership} />
      <ResearchTeamSection members={research} />
      <DevelopmentTeamSection members={development} />
      <JoinUsSection />
      <ContactSection />
    </>
  );
}
