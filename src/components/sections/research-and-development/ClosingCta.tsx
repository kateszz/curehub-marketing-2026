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
          <h2 className="text-h2 max-w-4xl max-sm:text-h3">
            Building a Future Where Healthcare Begins Before Illness
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-lg max-w-3xl text-snow/70">
            We believe the future of healthcare lies not only in treating
            disease, but in understanding the biological changes that precede
            it.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-body-lg max-w-3xl text-snow/70">
            By connecting artificial intelligence with the complexity of human
            biology, Curehub is working towards a future where healthcare is
            more preventive, more personalised and more accessible.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-body-lg max-w-3xl text-snow/70">
            Because the better we understand the human body, the earlier and
            more intelligently we can act.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href="/why-trust-us">Meet our research team</Button>
        </Reveal>
      </Container>
    </section>
  );
}
