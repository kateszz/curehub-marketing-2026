import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const PARAGRAPHS = [
  "The next phase is to connect our retinal AI models with real clinical evidence.",
  "This requires carefully governed datasets in which retinal images can be studied alongside laboratory measurements and relevant clinical information. These paired datasets will allow us to determine whether image-derived signals correlate with real biological states and whether they provide information beyond conventional risk factors.",
  "The initial biological focus includes pathways connected with microvascular health, one-carbon metabolism, redox balance, and oxidative stress.",
];

const STEPS = [
  {
    number: "01",
    title: "Technical Feasibility",
    body: "Develop robust retinal-image representations and demonstrate that the research pipeline can recover controlled signals without relying on image artifacts or dataset shortcuts.",
  },
  {
    number: "02",
    title: "Clinical-Data Validation",
    body: "Evaluate the models using retinal images paired with blood biomarkers, clinical metadata, and longitudinal or genomic information.",
  },
  {
    number: "03",
    title: "Independent Validation",
    body: "Test model performance across new clinical sites, devices, populations, and patient groups that were not involved in model development.",
  },
  {
    number: "04",
    title: "Clinical Decision Support",
    body: "Develop probabilistic, uncertainty-aware outputs that help clinicians identify patients who could benefit from confirmatory laboratory testing or further investigation.",
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
            <h2 className="text-h2 max-w-4xl">
              From Retinal Patterns to Non-Invasive Biomarker Research
            </h2>
          </Reveal>
          {PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.16 + i * 0.06}>
              <p className="text-body-lg max-w-3xl text-snow/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-fluid-2xl">
          <Reveal>
            <h3 className="text-h4">Our Development Path</h3>
          </Reveal>

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
