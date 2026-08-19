import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SYMPTOMS = [
  "Feel tired or mentally foggy?",
  "Struggle with focus, mood, or stress tolerance?",
  "Experience digestive issues, poor sleep, or slow recovery?",
  "Take supplements but aren’t sure if they’re helping—or doing nothing at all?",
];

const CONDITIONS = [
  "ADHD or attention-related disorders",
  "Depression or anxiety-related conditions",
  "Irritable bowel syndrome (IBS) or chronic gut issues",
  "Liver function abnormalities or detoxification strain",
  "Bladder-related dysfunctions",
  "Higher blood pressure and elevated homocysteine levels (hyperhomocysteinemia)",
  "Cardiovascular or heart-related conditions",
];

export function SymptomsSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <Reveal>
          <h2 className="text-h2">Do you...</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2 lg:grid-cols-4">
          {SYMPTOMS.map((symptom, i) => (
            <Reveal key={symptom} delay={i * 0.06}>
              <div className="relative h-full overflow-hidden border bg-gradient-to-br from-brand-700/40 via-ink to-ink p-fluid-xl">
                <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-500/30 blur-2xl" />
                <p className="text-h5 relative font-medium">{symptom}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="text-h2 max-w-3xl">
            Have you ever been diagnosed with &mdash; or do you know someone who
            has...
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-fluid-3xl gap-y-fluid-lg text-right sm:grid-cols-1">
          {CONDITIONS.map((condition, i) => (
            <Reveal key={condition} delay={i * 0.05} direction="left">
              <p className="text-body-lg border-b border-snow/10 pb-fluid-lg text-snow/80">
                {condition}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-body-lg max-w-2xl self-end text-right text-snow/60">
            These are often <strong className="text-snow">early-stage signs</strong> that
            underlying <em>regulatory systems</em>&mdash;such as methylation&mdash;
            <strong className="text-snow"> may not be functioning optimally.</strong>
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-h2">
            The reason is rooted in genetics.
            <br />
            The solution is personalized supplementation.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
