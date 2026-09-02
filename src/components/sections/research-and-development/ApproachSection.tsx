import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const PARAGRAPHS = [
  "The retina provides a uniquely accessible view of the body’s microvascular system. Subtle changes in retinal structure, vascular patterns, and tissue characteristics may reflect biological processes extending beyond the eye, including microvascular stress, metabolic imbalance, oxidative stress, and other systemic changes.",
  "Our vision is to develop AI models capable of recognizing these complex patterns and translating them into probabilistic, clinically meaningful insights.",
  "Retinal imaging offers several important advantages: it is non-invasive, fast, repeatable, and already used extensively across ophthalmology and screening workflows. This creates the possibility of generating additional clinical value from an existing and widely scalable form of medical imaging.",
  "The intended role of these models is not to replace clinicians or laboratory testing. Their purpose is to support clinical decisions, helping identify when further investigation may be valuable, prioritizing confirmatory testing, and potentially enabling earlier recognition of clinically relevant biological changes.",
];

const BENEFITS = [
  {
    title: "A direct view of microvascular health",
    body: "The retina is one of the few places where blood vessels and microvascular structures can be observed directly and non-invasively.",
  },
  {
    title: "Accessible and repeatable",
    body: "Retinal imaging can be performed quickly and repeatedly without invasive procedures, making it suitable for screening and longitudinal monitoring.",
  },
  {
    title: "AI-readable biological complexity",
    body: "Advanced models can analyse image patterns and relationships that may be too subtle or multidimensional for conventional visual assessment.",
  },
];

/** Section 2 — why the retina can say something about the whole organism. */
export function ApproachSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="grid grid-cols-1 gap-fluid-2xl lg:grid-cols-[1fr_1.1fr] lg:gap-fluid-4xl">
          <Reveal>
            <h2 className="text-h2 max-w-3xl">A New Window Into Systemic Health</h2>
          </Reveal>
          <div className="flex flex-col gap-fluid-lg">
            {PARAGRAPHS.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                <p className="text-body-lg text-snow/70">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-fluid-lg md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="relative flex h-full flex-col gap-fluid-md overflow-hidden rounded-md border border-snow/10 bg-gradient-to-br from-brand-700/40 via-ink to-ink p-fluid-2xl">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-500/30 blur-2xl"
                  aria-hidden="true"
                />
                <h3 className="text-h5 relative">{benefit.title}</h3>
                <p className="text-body relative text-snow/70">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
