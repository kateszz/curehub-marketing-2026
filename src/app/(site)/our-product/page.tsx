import { type Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { PromiseSection } from "@/components/sections/our-product/PromiseSection";
import { HowItWorksSection } from "@/components/sections/our-product/HowItWorksSection";
import { ReportSection } from "@/components/sections/our-product/ReportSection";
import { ClosingStatement } from "@/components/sections/our-product/ClosingStatement";

export const metadata: Metadata = {
  title: "Our Product",
  description:
    "Learn how Curehub uses peer-reviewed genetic research and secure data practices to create personalized supplement plans tailored to your unique DNA profile.",
};

export default function OurProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Product"
        title="A Clear, Actionable Map of Your Biology"
        description={
          <>
            Curehub transforms <strong className="text-snow">complex genetic</strong> and
            methylation data <strong className="text-snow">into clear decisions</strong> you
            can actually act on.
          </>
        }
      />
      <PromiseSection />
      <HowItWorksSection />
      <ReportSection />
      <ClosingStatement />
      <ContactSection />
    </>
  );
}
