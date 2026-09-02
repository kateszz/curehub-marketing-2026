import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Section 6 — the closing statement that hands the visitor over to the
 *  scientific profiles on Why Trust Us. */
export function ClosingCta() {
  return (
    <section className="bg-ink py-section-lg text-snow">
      <Container className="flex flex-col items-start gap-fluid-2xl">
        <Reveal>
          <h2 className="text-h2 max-w-4xl">
            Building the Evidence for Non-Invasive Clinical AI
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-lg max-w-3xl text-snow/70">
            Our work is bringing together retinal imaging, artificial
            intelligence, clinical science, and biological validation to explore
            a new frontier in non-invasive decision support.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Button href="/why-trust-us">Meet our research team</Button>
        </Reveal>
      </Container>
    </section>
  );
}
