import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScienceFoundationSection } from "@/components/sections/why-trust-us/ScienceFoundationSection";
import { ResearcherProfilesSection } from "@/components/sections/why-trust-us/ResearcherProfilesSection";
import { WhyThisMattersSection } from "@/components/sections/why-trust-us/WhyThisMattersSection";
import { ClosingCta } from "@/components/sections/why-trust-us/ClosingCta";
import { safeFetch } from "@/lib/sanity/client";
import { researchersQuery } from "@/lib/sanity/queries";
import type { Researcher } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Why Trust Us",
  description:
    "Curehub's research is built on multidisciplinary scientific expertise — molecular biology, clinical ophthalmology, mathematical modelling, and AI reliability — examined together rather than in isolation.",
};

// The researcher profiles are CMS content, so the page can't only ever show
// whatever was fetched at build time.
export const revalidate = 60;

/**
 * /why-trust-us — the page order the content brief specifies:
 * Hero → Our Scientific Foundation → Dr. Sándor Spisák → the four
 * researcher profiles → Why This Matters → closing CTAs.
 */
export default async function WhyTrustUsPage() {
  const researchers = await safeFetch<Researcher[]>(researchersQuery, []);

  return (
    // `overflow-x-clip`, not `overflow-x-hidden`: the decorative blobs and
    // Reveal's slide-in offsets both extend past the viewport on a phone,
    // and `hidden` would turn this wrapper into a scroll container, which
    // kills the `position: sticky` portrait column inside each profile.
    // `clip` cuts the overflow without creating one.
    <div className="overflow-x-clip">
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
      <ResearcherProfilesSection researchers={researchers} />
      <WhyThisMattersSection />
      <ClosingCta />

      <ContactSection />
    </div>
  );
}
