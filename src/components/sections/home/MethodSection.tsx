import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { verb: "Identify", text: "key genetic variants involved in methylation and nutrient metabolism" },
  { verb: "Map", text: "how efficiently your core biological pathways function" },
  { verb: "Highlight", text: "potential areas that could benefit from additional support" },
  { verb: "Provide", text: "the solutions" },
];

export function MethodSection() {
  return (
    <section className="py-section-md bg-radial-[at_80%_95%] from-brand-500 to-ink to-90% text-snow">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow>The Curehub Method</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2 max-w-2xl">
            Gene mutation based supplementation &mdash; get to know what
            supplements your body actually needs
          </h2>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <p className="text-body-lg max-w-xl self-end text-snow/70">
            Curehub AI traces back how your biology is wired and uses that
            knowledge to empower you with actionable insights. All it needs is
            a raw DNA file to:
          </p>
        </Reveal>

        <div className="mt-fluid-lg grid grid-cols-1 gap-fluid-lg md:grid-cols-2">
          {STEPS.map((step, i) => (
            <Reveal key={step.verb} delay={i * 0.06}>
              <div className="flex items-center gap-fluid-lg border border-snow/10 bg-snow/5 p-fluid-xl">
                <span className="font-display text-h4 text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body-lg">
                  <strong>{step.verb}</strong> {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="text-body-lg max-w-xl text-snow/70">
            Learn which nutritional &lsquo;raw materials&rsquo; your body benefits
            from and explore personalised daily guidance shaped around your
            unique biology.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <Button href="/our-product">Take a look into our product in detail</Button>
        </Reveal>
      </Container>
    </section>
  );
}
