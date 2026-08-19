import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** The dark closing statement that caps off the report walkthrough,
 *  before the page hands off to the shared contact section. */
export function ClosingStatement() {
  return (
    <section className="bg-ink py-section-lg text-snow">
      <Container>
        <Reveal>
          <p className="text-h2 max-w-4xl">
            Our model doesn&rsquo;t tell you what everyone should do.
            <br />
            It helps you understand what your body responds to best.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-h2 mt-fluid-lg max-w-4xl italic text-glow">
            Your Biology Is Unique.
            <br />
            Your Strategy Should Be Too.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
