import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const WORK_INCLUDES = [
  "Retinal-image preparation, harmonisation, and quality control",
  "AI-based representation learning and image analysis",
  "Controlled signal-recovery experiments",
  "Negative controls and artifact detection",
  "Cross-device and cross-dataset validation",
  "Explainability and uncertainty analysis",
  "Preparation for validation with real clinical and laboratory data",
];

const OUTCOME_ESTABLISHES = [
  "A meaningful signal can be detected",
  "Which retinal features and model architectures carry the strongest information",
  "Whether results remain stable across datasets, devices, and patient groups",
  "Which confounding factors must be controlled",
  "What clinical data are required for real-world biological validation",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-fluid-sm">
      {items.map((item, i) => (
        <li key={item}>
          <Reveal delay={i * 0.05} direction="left">
            <span className="text-body flex gap-fluid-md border-b border-snow/10 pb-fluid-sm text-snow/75">
              <span className="text-brand-500">&bull;</span>
              <span>{item}</span>
            </span>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** Section 4 — Curehub Ocular AI, the technical centrepiece of the page. */
export function FlagshipSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
          <Reveal>
            <Eyebrow>Flagship Research</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-h2">Curehub Ocular AI</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-body-lg max-w-3xl text-snow/70">
              Curehub Ocular AI is our flagship research program exploring
              whether retinal images contain reproducible patterns associated
              with systemic microvascular and metabolic states.
            </p>
          </Reveal>
        </div>

        {/* The research question gets its own treatment — it is the question
            the entire program is built to answer, not body copy. */}
        <Reveal delay={0.1} direction="none">
          <figure className="relative overflow-hidden rounded-md border border-glow/30 bg-gradient-to-br from-brand-700/50 via-ink to-ink p-fluid-2xl md:p-fluid-4xl">
            <div
              className="pointer-events-none absolute -left-10 top-1/2 size-60 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl"
              aria-hidden="true"
            />
            <figcaption className="relative font-display text-body-sm uppercase tracking-[0.08em] text-glow">
              The research question
            </figcaption>
            <blockquote className="text-h3 relative mt-fluid-xl max-w-4xl font-light">
              Can AI identify biologically meaningful systemic signals within
              retinal images, and distinguish those signals from age, image
              quality, device differences, existing ocular conditions, and other
              confounding factors?
            </blockquote>
          </figure>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-4xl lg:grid-cols-2">
          <div className="flex flex-col gap-fluid-xl">
            <Reveal>
              <h3 className="text-h4">What we are developing</h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-body-lg text-snow/70">
                We are building and evaluating AI models that learn
                high-dimensional representations of retinal images and test
                whether structured microvascular and metabolic signals can be
                recovered consistently.
              </p>
            </Reveal>
            <div className="flex flex-col gap-fluid-md">
              <Reveal delay={0.12}>
                <p className="font-display text-body-sm uppercase tracking-[0.06em] text-snow/50">
                  Our work includes
                </p>
              </Reveal>
              <List items={WORK_INCLUDES} />
            </div>
          </div>

          <div className="flex flex-col gap-fluid-xl">
            <Reveal>
              <h3 className="text-h4">What the research is designed to deliver</h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-body-lg text-snow/70">
                The immediate objective is a scientifically defensible technical
                and validation framework showing whether the underlying approach
                is sufficiently robust to progress toward clinical-data studies.
              </p>
            </Reveal>
            <div className="flex flex-col gap-fluid-md">
              <Reveal delay={0.12}>
                <p className="font-display text-body-sm uppercase tracking-[0.06em] text-snow/50">
                  A successful research outcome will establish
                </p>
              </Reveal>
              <List items={OUTCOME_ESTABLISHES} />
            </div>
          </div>
        </div>

        <Reveal>
          <p className="text-h5 max-w-3xl font-light text-snow">
            The current research is a feasibility and validation program that
            creates the foundation for future clinical models.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
