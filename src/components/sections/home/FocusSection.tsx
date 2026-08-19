import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FocusSection() {
  return (
    <section className="py-section-md bg-radial-[at_80%_95%] from-brand-500 to-ink to-90%">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow>Our Focus</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2 max-w-2xl text-snow">We are focusing on methylation</h2>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <p className="text-body-lg max-w-xl self-end text-snow/70">
            Your <strong className="text-snow">methylation profile</strong> describes how
            efficiently{" "}
            <strong className="text-snow">
              your body processes certain vitamins, amino acids, essential
              nutrients,
            </strong>{" "}
            and other biologically active compounds into{" "}
            <strong className="text-snow">forms your body can use.</strong>
            <br />
            <br />
            Think about it as a <strong className="text-snow">cooking process.</strong>
            <br />
            <br />
            <strong className="text-snow">Ingredients alone don&rsquo;t make a meal</strong>{" "}
            <em>&mdash;&gt; they need preparation.</em>
            <br />
            <br />
            Vitamins, amino acids and essential nutrients{" "}
            <strong className="text-snow">are like raw ingredients</strong>, and{" "}
            <strong className="text-snow">methylation</strong> is the{" "}
            <strong className="text-snow">cooking process</strong> that{" "}
            <strong className="text-snow">transforms them into forms</strong> your body
            can work with.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Button href="/why-trust-us">Take a look into our scientific foundation in detail</Button>
        </Reveal>
      </Container>
    </section>
  );
}
