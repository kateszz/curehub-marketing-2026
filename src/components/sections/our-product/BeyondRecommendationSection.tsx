import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const PARAGRAPHS = [
  "Knowing what to take is only part of the picture. Understanding why a particular nutrient may be relevant to your individual biology is equally important.",
  "The Curehub Methylation Report connects personalised supplement guidance with the underlying biological processes and scientific reasoning that inform it, bringing a deeper level of understanding to the relationship between your genetics and nutritional wellbeing.",
];

/**
 * The "Beyond the Recommendation" section of the Our Product page: a compact,
 * text-led editorial statement on the reasoning behind the recommendations.
 * Layout follows the R&D page (ApproachSection / DevelopmentPathSection).
 *
 * Typography guard: "Supplementation." is the longest word on the section
 * (~8–9em in Syne 600). Every heading size below keeps that word inside its
 * column, so it can never overflow, and `break-normal hyphens-none` stops
 * the browser from splitting or hyphenating words. The heading only shares a
 * row with the copy from `xl` up, where its column is wide enough at full
 * `text-h2`. The tracks are plain `fr` (min-width auto), so a long word
 * widens its own column instead of being clipped.
 *
 * Background: the glow sits top-right so it picks up where the
 * HowItWorksSection glow (bottom-right) leaves off, then fades to ink so the
 * hand-off into the ink ClosingStatement has no visible seam.
 */
export function BeyondRecommendationSection() {
  return (
    <section
      aria-labelledby="beyond-the-recommendation-heading"
      className="py-section-md bg-radial-[at_85%_5%] from-brand-500 to-ink to-80% text-snow"
    >
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow tone="snow">BEYOND THE RECOMMENDATION</Eyebrow>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-2xl xl:grid-cols-[1.15fr_1fr] xl:gap-fluid-4xl">
          <Reveal delay={0.08}>
            <h2
              id="beyond-the-recommendation-heading"
              className="text-h2 max-w-4xl break-normal hyphens-none max-sm:text-[length:min(var(--text-h3),9.5vw)]"
            >
              Understanding the Science Behind Your Supplementation.
            </h2>
          </Reveal>

          <div className="flex max-w-3xl flex-col gap-fluid-lg">
            {PARAGRAPHS.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.12 + i * 0.06}>
                <p className="text-body-lg text-snow/80">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="border-t border-snow/10 pt-fluid-2xl text-h3 max-w-4xl font-light leading-[1.2] break-normal hyphens-none max-md:text-h4">
            <span className="text-snow/60 sm:block">Not just a recommendation.</span>{" "}
            <span className="text-snow sm:block">An understanding of why.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
