import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const PARAGRAPHS = [
  "Our research follows a structured, evidence-driven journey, connecting scientific discovery with meaningful clinical applications.",
];

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    body: "Exploring the biological information within ocular images and its potential relationship with systemic health.",
  },
  {
    number: "02",
    title: "Intelligence",
    body: "Developing artificial intelligence capable of recognising and interpreting complex biological patterns.",
  },
  {
    number: "03",
    title: "Scientific & Clinical Validation",
    body: "Evaluating our findings against real-world clinical and biological evidence to establish reliability and scientific relevance.",
  },
  {
    number: "04",
    title: "Real-World Application",
    body: "Working towards accessible technologies that support healthcare professionals and empower individuals with deeper insights into their health.",
  },
];

/** The one-line summary of the whole programme, spelled out so the
 *  progression is readable at a glance before the four detailed steps. */
const PROGRESSION = [
  "Current research",
  "Paired clinical evidence",
  "Independent validation",
  "Intended clinical application",
];

/** Section 5 — from retinal patterns to non-invasive biomarker research,
 *  visualised as one four-step development path. */
export function DevelopmentPathSection() {
  return (
    <section className="py-section-md bg-radial-[at_85%_5%] from-brand-500 to-ink to-80% text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
          <Reveal>
            <Eyebrow tone="snow">The Development Path</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-h2 max-w-4xl max-sm:text-h3">
              From Scientific Discovery to Real-World Impact
            </h2>
          </Reveal>
          {PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.16 + i * 0.06}>
              <p className="text-body-lg max-w-3xl text-snow/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-fluid-2xl">
          {/* The progression itself: a single connected track on desktop,
              a numbered stack on mobile. */}
          <ol className="relative grid grid-cols-1 gap-fluid-lg md:grid-cols-2 lg:grid-cols-4">
            <div
              // Sits at the vertical centre of the step badges so the track reads
              // as one continuous line running through them.
              className="pointer-events-none absolute left-0 right-0 top-13 hidden h-px bg-gradient-to-r from-brand-500 via-glow/60 to-brand-500/20 lg:block"
              aria-hidden="true"
            />
            {STEPS.map((step, i) => (
              <li key={step.number} className="h-full">
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="relative flex h-full flex-col gap-fluid-md rounded-md border border-snow/10 bg-ink/60 p-fluid-xl backdrop-blur-sm">
                    <span className="relative flex size-12 items-center justify-center rounded-full border border-glow/40 bg-ink font-display text-body-lg text-glow">
                      {step.number}
                    </span>
                    <h4 className="text-h5">{step.title}</h4>
                    <p className="text-body text-snow/70">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

     
        </div>
      </Container>
    </section>
  );
}
