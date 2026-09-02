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
        background="/images/blue-dark-mesh.svg"
        title="Researching AI Models for Non-Invasive Clinical Decision Support"
        description={
          <>
            <span className="block">
              We are developing a new generation of AI models designed to extract
              clinically relevant insights from retinal imaging, supporting
              earlier investigation, more informed clinical decisions, and more
              accessible assessment of systemic health.
            </span>
            <span className="mt-fluid-lg block text-snow">
              Our long-term goal is to help transform a fast, safe, and routinely
              available image of the eye into a non-invasive clinical
              decision-support signal.
            </span>
          </>
        }
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
