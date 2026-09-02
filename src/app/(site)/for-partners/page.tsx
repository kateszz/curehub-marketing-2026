import { type Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { PartnershipPaths } from "@/components/sections/for-partners/PartnershipPaths";
import { ClinicsLabs } from "@/components/sections/for-partners/ClinicsLabs";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "AI-powered genetic & methylation-based wellness insights for enterprises, clinics, and consumer health brands — without medical diagnosis or regulatory overreach.",
};

export default function ForPartnersPage() {
  return (
    <>
      <PageHero 
        eyebrow="For Partners"
        title="Partner with Curehub to Deliver the Next Generation of Wellness Genomics"
        description="AI-powered genetic & methylation-based wellness insights for enterprises, clinics, and consumer health brands — without medical diagnosis or regulatory overreach."
        background="/images/IMG_3490.jpeg"
      />
      <PartnershipPaths />
      <ClinicsLabs />
      <ContactSection />
    </>
  );
}
