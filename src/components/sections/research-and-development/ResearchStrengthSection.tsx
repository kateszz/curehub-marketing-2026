import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PARAGRAPHS = [
  "Our R&D program brings together leading expertise in artificial intelligence, computer vision, biomedical image analysis, systems modelling, ophthalmology, and clinical research.",
  "The active scientific background behind the program includes professors, clinical directors, senior medical researchers, and AI specialists from the University of Debrecen, Pázmány Péter Catholic University, the University of Pécs Clinical Centre, and HUN-REN SZTAKI.",
  "This multidisciplinary foundation allows us to approach the challenge from every critical direction: biological plausibility, clinical relevance, image quality, model development, statistical validity, and real-world translation.",
];

const INSTITUTIONS = [
  "University of Debrecen",
  "Pázmány Péter Catholic University",
  "University of Pécs Clinical Centre",
  "HUN-REN SZTAKI",
];

/** Section 3 — the scientific and clinical expertise behind the program.
 *  Deliberately institution-led: the detailed researcher profiles live on
 *  Why Trust Us, and this section only points there. */
export function ResearchStrengthSection() {
  return (
    <section className="py-section-md bg-radial-[at_15%_10%] from-brand-500 to-ink to-80% text-snow">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow tone="snow">Active Scientific Expertise</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2 max-w-4xl">
            Research Built on Exceptional Scientific and Clinical Expertise
          </h2>
        </Reveal>

        <div className="flex flex-col gap-fluid-lg">
          {PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.12 + i * 0.06}>
              <p className="text-body-lg max-w-3xl text-snow/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-fluid-lg flex flex-wrap gap-fluid-md">
          {INSTITUTIONS.map((institution, i) => (
            <Reveal key={institution} delay={i * 0.06} direction="none">
              <span className="inline-flex rounded-md border border-snow/15 bg-snow/5 px-fluid-lg py-fluid-md font-display text-body-sm uppercase tracking-[0.06em] text-snow/80">
                {institution}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Button href="/why-trust-us">Meet our research team</Button>
        </Reveal>
      </Container>
    </section>
  );
}
