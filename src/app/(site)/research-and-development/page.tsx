import { type Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { ApproachSection } from "@/components/sections/research-and-development/ApproachSection";
import { ResearchStrengthSection } from "@/components/sections/research-and-development/ResearchStrengthSection";
import { FlagshipSection } from "@/components/sections/research-and-development/FlagshipSection";
import { DevelopmentPathSection } from "@/components/sections/research-and-development/DevelopmentPathSection";
import { ClosingCta } from "@/components/sections/research-and-development/ClosingCta";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "Curehub is researching AI models that extract clinically relevant insights from retinal imaging, supporting earlier investigation and more accessible assessment of systemic health.",
};

/**
 * /research-and-development — the Ocular Biointelligence side of the
 * gateway, told in narrative order: Vision → Why the retina → Scientific
 * strength → Current research → Validation path → Intended clinical outcome.
 *
 * NOTE: the hero currently reuses the dark brand mesh. The bespoke retinal
 * imaging / microvasculature background the client asked for does not exist
 * yet — no stock eye photography is to be used in its place.
 */
export default function ResearchAndDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Development"
        background="/images/retina.jpg"
        title={
          <span className="block max-sm:text-[length:min(9vw,var(--text-h1))] max-sm:tracking-[-0.02em]">
            Pioneering the next generation of Biointelligence.
          </span>
        }
        description="Research & Development"
      />
      <ApproachSection />
      <ResearchStrengthSection />
      <FlagshipSection />
      <DevelopmentPathSection />
      <ClosingCta />
      <ContactSection />
    </>
  );
}
