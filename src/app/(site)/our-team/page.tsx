import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { MissionSection } from "@/components/sections/our-team/MissionSection";
import { TeamGrid } from "@/components/sections/our-team/TeamGrid";
import { ResearchersSection } from "@/components/sections/our-team/ResearchersSection";
import { safeFetch } from "@/lib/sanity/client";
import { teamMembersQuery, researchersQuery } from "@/lib/sanity/queries";
import type { TeamMember, Researcher } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Curehub combines genetic science with personalized nutrition. Discover our mission to make DNA-based supplement optimization accessible to everyone.",
};

// Revalidate periodically once real Sanity content exists, rather than only
// ever showing whatever was fetched at build time.
export const revalidate = 60;

export default async function OurTeamPage() {
  const [teamMembers, researchers] = await Promise.all([
    safeFetch<TeamMember[]>(teamMembersQuery, []),
    safeFetch<Researcher[]>(researchersQuery, []),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            We Are Building the <span className="text-glow">Future</span> of
            Healthcare.
          </>
        }
      />
      <MissionSection />
      <TeamGrid teamMembers={teamMembers} />
      <ResearchersSection researchers={researchers} />
      <ContactSection />
    </>
  );
}
