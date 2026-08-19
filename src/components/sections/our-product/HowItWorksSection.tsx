import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  label: string;
  title: string;
  duration?: string;
  summary: string;
  detailIntro?: string;
  detailList?: string[];
  detailClosing?: string;
};

const STEPS: Step[] = [
  {
    label: "Step 1",
    title: "Upload a raw DNA file",
    summary:
      "You start by uploading genetic data from an existing test or integrated provider.",
    detailIntro:
      "Curehub AI currently supports CSV, TXT, and VCF genetic data formats, enabling flexible integration with most consumer and laboratory-based genetic testing providers.",
  },
  {
    label: "Step 2",
    title: "Curehub AI takes it from here",
    duration: "~1 minute",
    summary:
      "Once your file is uploaded, Curehub AI automatically processes your data in a secure environment.",
    detailIntro: "Behind the scenes, the system:",
    detailList: [
      "validates and structures your genetic input",
      "places genetic signals into biological and metabolic context",
      "cross-references patterns against large, continuously updated, peer-reviewed scientific databases",
      "interprets results on a system level",
    ],
    detailClosing: "All analysis happens automatically — no manual input required.",
  },
  {
    label: "Step 3",
    title: "Your personalized report is ready",
    summary:
      "Your Curehub report transforms complex genetic signals into clear, actionable wellness insights.",
    detailIntro: "You receive:",
    detailList: [
      "an easy-to-understand methylation-focused overview",
      "personalized lifestyle and supplement guidance",
      "insights designed to support optimal biological functioning",
    ],
  },
];

/** The three-step "How it works" walkthrough on the Our Product page. */
export function HowItWorksSection() {
  return (
    <section className="py-section-md">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow>The Process</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2">How it works</h2>
        </Reveal>

        <div className="mt-fluid-lg flex flex-col gap-fluid-lg">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-fluid-lg rounded-md border border-ink/10 bg-white/40 p-fluid-xl lg:grid-cols-[auto_1fr] lg:gap-fluid-2xl lg:p-fluid-2xl">
                <span className="font-display text-h4 text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-fluid-md">
                  <h3 className="text-h4">
                    <strong>{step.label}:</strong> {step.title}
                    {step.duration && (
                      <span className="ml-fluid-sm text-body-sm font-sans font-normal text-ink/50">
                        ⏱ {step.duration}
                      </span>
                    )}
                  </h3>
                  <p className="text-body-lg text-ink/70">{step.summary}</p>

                  {(step.detailIntro || step.detailList) && (
                    <div className="mt-fluid-sm flex flex-col gap-fluid-sm border-t border-ink/10 pt-fluid-lg">
                      {step.detailIntro && (
                        <p className="text-body text-ink/60">{step.detailIntro}</p>
                      )}
                      {step.detailList && (
                        <ul className="flex flex-col gap-fluid-xs text-body text-ink/70">
                          {step.detailList.map((item) => (
                            <li key={item} className="flex gap-fluid-sm">
                              <span className="text-brand-500">&bull;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.detailClosing && (
                        <p className="text-body-sm text-ink/50">{step.detailClosing}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
