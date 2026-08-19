import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScienceFoundationSection } from "@/components/sections/why-trust-us/ScienceFoundationSection";
import { PrivacySection } from "@/components/sections/why-trust-us/PrivacySection";

export const metadata: Metadata = {
  title: "Why Trust Us",
  description:
    "Learn how Curehub uses peer-reviewed genetic research and secure data practices to create personalized supplement plans tailored to your unique DNA profile.",
};

export default function WhyTrustUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Trust Us"
        title={
          <>
            <span className="text-glow">Trust</span> Begins With <i>Scientific Rigor</i>
          </>
        }
        description={
          <span className="inline-flex items-start gap-fluid-sm text-left">
            <Image
              src="/images/asterisk.svg"
              alt=""
              width={20}
              height={20}
              className="mt-1 size-5 shrink-0"
            />
           At Curehub, biological insight is built through multidisciplinary research, clinical expertise, responsible AI, and uncompromising data protection.
          </span>
        }
      />
      <ScienceFoundationSection />

      <ContactSection />
    </>
  );
}
