import { VideoHero } from "@/components/sections/home/VideoHero";
import { IntroVideo } from "@/components/sections/home/IntroVideo";
import { ProblemStatement } from "@/components/sections/home/ProblemStatement";
import { FocusSection } from "@/components/sections/home/FocusSection";
import { SymptomsSection } from "@/components/sections/home/SymptomsSection";
import { MethodSection } from "@/components/sections/home/MethodSection";
import { OperationsSection } from "@/components/sections/home/OperationsSection";
import { MarketApproach } from "@/components/sections/home/MarketApproach";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <ProblemStatement />
      <FocusSection />
      <SymptomsSection />
      <MethodSection />
      <OperationsSection />
      <MarketApproach />
      <ContactSection />
    </>
  );
}
