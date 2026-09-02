import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** The four perspectives, in the order the page has just presented them. */
const LAYERS = [
  {
    label: "Biological validity",
    body: "Molecular biology, epigenetics, functional genomics, and mechanistic interpretation.",
  },
  {
    label: "Clinical relevance",
    body: "Ophthalmology, retinal imaging, clinical research, screening, and real-world validation.",
  },
  {
    label: "Mathematical rigor",
    body: "Systems modelling, latent-variable design, identifiability, stability, and reproducibility.",
  },
  {
    label: "AI reliability",
    body: "Data science, computer vision, medical-image analysis, neural networks, and artifact control.",
  },
];

/**
 * Section 12 — what the four profiles add up to.
 *
 * The layers are deliberately *not* four feature cards. They hang off one
 * continuous rail and are joined by multiplication signs, so the structure
 * itself says what the copy says: each layer checks the others, and no
 * single one of them is sufficient on its own. The formula band underneath
 * states the same relationship outright.
 */
export function WhyThisMattersSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-section-md text-snow">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 size-[36rem] rounded-full bg-brand-500/20 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
          <Reveal>
            <span className="font-display text-body-sm uppercase tracking-[0.12em] text-glow">
              Why This Matters
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-h2 max-w-4xl">
              Scientific Confidence Is Built Through Independent Layers of
              Expertise
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-body-lg max-w-3xl text-snow/70">
              Curehub&rsquo;s research is examined through several complementary
              scientific perspectives:
            </p>
          </Reveal>
        </div>

        {/* One rail, four markers — the markers after the first are literal
            multiplication signs, so the list reads as layer × layer × … */}
        <ol className="relative flex flex-col">
          <div
            className="absolute bottom-8 left-3 top-8 w-px bg-gradient-to-b from-glow/70 via-brand-300/60 to-glow/25"
            aria-hidden="true"
          />
          {LAYERS.map((layer, i) => (
            <li key={layer.label} className="relative">
              <Reveal delay={i * 0.08} direction="left">
                <div className="flex gap-fluid-lg py-fluid-lg md:gap-fluid-2xl">
                  <span
                    className="relative z-1 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink font-display text-body leading-none text-glow"
                    aria-hidden="true"
                  >
                    {i === 0 ? (
                      <span className="size-2 rounded-full bg-glow" />
                    ) : (
                      "×"
                    )}
                  </span>
                  <div className="flex flex-col gap-fluid-sm md:flex-row md:items-baseline md:gap-fluid-2xl">
                    <h3 className="text-h5 shrink-0 md:w-64 lg:w-72">
                      {layer.label}
                    </h3>
                    <p className="text-body-lg text-snow/70">{layer.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal direction="none">
          <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-brand-700/50 via-ink to-brand-700/50 px-fluid-xl py-fluid-3xl md:px-fluid-4xl">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-fluid-lg">
              <div className="flex flex-wrap items-center justify-center gap-x-fluid-md gap-y-fluid-sm text-center">
                {LAYERS.map((layer, i) => (
                  <Fragment key={layer.label}>
                    {i > 0 && (
                      <span
                        className="font-display text-h5 font-light text-glow/70"
                        aria-hidden="true"
                      >
                        &times;
                      </span>
                    )}
                    <span className="font-display text-body-sm uppercase tracking-[0.1em] text-snow/85 md:text-body">
                      {layer.label}
                    </span>
                  </Fragment>
                ))}
              </div>
              {/* The result sits on its own line at every width, so the
                  formula never breaks mid-product — hence a downward arrow
                  rather than the rightward one it would be on one line. */}
              <span
                className="font-display text-h5 font-light leading-none text-glow"
                aria-hidden="true"
              >
                &darr;
              </span>
              <span className="font-display text-body uppercase tracking-[0.1em] text-glow md:text-body-lg">
                Scientific confidence
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-body-lg max-w-3xl text-snow/70">
            This multidisciplinary structure helps us move beyond isolated
            correlations and build research programs in which biological
            assumptions, AI performance, and clinical meaning can be evaluated
            together.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
