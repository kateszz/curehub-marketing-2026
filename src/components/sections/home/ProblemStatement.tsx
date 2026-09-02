import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemStatement() {
  return (
    <section className="bg-ink py-section-md text-snow relative">
      <div className="absolute z-0 top-0 right-0 h-full w-[50%] bg-cover bg-[url(/images/human-bg.png)] opacity-20"></div>
      <Container className="relative flex flex-col gap-fluid-2xl z-1">
        <Reveal>
          <Eyebrow className="border-snow/20 text-glow">Why We&rsquo;re Building Curehub&rsquo;s Methylation Engine</Eyebrow>
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
