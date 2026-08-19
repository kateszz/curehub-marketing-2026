import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemStatement() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow className="border-snow/20 text-glow">Why We&rsquo;re Building Curehub</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2 max-w-3xl">
            Most people take supplements without truly knowing what their body
            actually needs,
          </h2>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <p className="text-body-lg max-w-xl self-end text-snow/70">
            <strong className="text-snow">relying on trends,</strong> generic advice, or
            marketing claims.
            <br />
            <br />
            <strong className="text-snow">&ldquo;One-size-fits-all&rdquo; formulas</strong>{" "}
            assume the same nutrients work the same way for everyone, even though
            genetic and epigenetic differences mean
            <br />
            <br />
            <strong className="text-snow">
              the same supplement can have very different effects in different
              individuals.
            </strong>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
