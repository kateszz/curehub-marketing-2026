import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const WORKING_TOWARDS = [
  "A deeper understanding of individual biological health.",
  "Non-invasive assessment of systemic biological processes.",
  "Earlier recognition of potentially meaningful biological changes.",
  "More accessible and personalised preventive healthcare.",
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

/** Section 4 — Curehub Ocular AI, the flagship vision of the page. */
export function FlagshipSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
          <Reveal>
            <Eyebrow tone="snow">Flagship Research</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-h2">Curehub Ocular AI</h2>
          </Reveal>
        </div>

        {/* The vision statement gets its own treatment — it is the future
            the entire program is working towards, not body copy. */}
        <Reveal delay={0.1} direction="none">
          <figure className="relative overflow-hidden rounded-md border border-glow/30 bg-gradient-to-br from-brand-700/50 via-ink to-ink p-fluid-lg sm:p-fluid-2xl md:p-fluid-4xl">
            <div
              className="pointer-events-none absolute -left-10 top-1/2 size-60 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl"
              aria-hidden="true"
            />
            <figcaption className="relative font-display text-body-sm uppercase tracking-[0.08em] text-glow">
              Our Vision
            </figcaption>
            <blockquote className="text-h3 relative mt-fluid-xl max-w-4xl font-light max-md:mt-fluid-md max-md:text-h4 max-md:leading-[1.2]">
              Imagine a future where a simple image of the eye could help us
              understand what is happening throughout the human body —
              potentially revealing early biological changes before they become
              clinically apparent.
            </blockquote>
          </figure>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-4xl lg:grid-cols-2">
          <div className="flex flex-col gap-fluid-xl">
            <Reveal>
              <p className="text-h5 max-w-3xl font-light text-snow">
                This is the future we are working towards.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-body-lg text-snow/70">
                Through Curehub Ocular AI, we are developing technologies
                designed to explore the relationship between visible ocular
                patterns and the body’s underlying biological processes.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-body-lg text-snow/70">
                Our goal is to transform routinely accessible medical imaging
                into a deeper source of personalised health intelligence,
                supporting earlier investigation, more informed clinical
                decisions and a more preventive approach to healthcare.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-fluid-xl">
            <Reveal>
              <h3 className="text-h4">What We Are Working Towards</h3>
            </Reveal>
            <List items={WORKING_TOWARDS} />
          </div>
        </div>
      </Container>
    </section>
  );
}
