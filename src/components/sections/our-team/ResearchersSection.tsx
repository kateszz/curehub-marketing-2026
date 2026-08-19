import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "./EmptyState";
import { ResearcherCard } from "./ResearcherCard";
import type { Researcher } from "@/lib/sanity/types";

/**
 * Renders the researchers list. Falls back to an on-brand placeholder when
 * the CMS has no researchers yet.
 */
export function ResearchersSection({ researchers }: { researchers: Researcher[] }) {
  return (
    <section className="bg-white/40 py-section-md">
      <Container className="flex flex-col gap-fluid-3xl">
        <SectionHeading
          eyebrow="Research"
          title="The Scientists Behind Our Science"
          description="The researchers whose work shapes Curehub's genomic and epigenetic models."
        />

        {researchers.length === 0 ? (
          <EmptyState message="Researcher profiles are coming soon — add them in the Studio at /studio." />
        ) : (
          <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2 lg:grid-cols-3">
            {researchers.map((researcher, i) => (
              <Reveal key={researcher._id} delay={i * 0.06}>
                <ResearcherCard researcher={researcher} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
