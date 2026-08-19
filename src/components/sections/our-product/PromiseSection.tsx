import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Promise = {
  icon: string;
  text: string;
  strong?: boolean;
};

const PROMISES: Promise[] = [
  { icon: "/images/heart-handshake.svg", text: "No raw DNA dumps.", strong: true },
  { icon: "/images/key-round.svg", text: "No generic supplement lists." },
  { icon: "/images/heart-handshake.svg", text: "No medical diagnoses.", strong: true },
];

/** The three "trust promise" cards plus the structured-report statement
 *  that follows the hero on the Our Product page. */
export function PromiseSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-3">
          {PROMISES.map((promise, i) => (
            <Reveal key={promise.text} delay={i * 0.08}>
              <div className="relative flex h-full flex-col items-center gap-fluid-lg overflow-hidden rounded-md border border-snow/10 bg-gradient-to-br from-brand-700/40 via-ink to-ink p-fluid-2xl text-center">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-500/30 blur-2xl"
                  aria-hidden="true"
                />
                <span className="relative flex size-14 items-center justify-center rounded-full bg-brand-500/80">
                  <Image src={promise.icon} alt="" width={28} height={28} />
                </span>
                <p className="text-h5 relative">
                  {promise.strong ? <strong>{promise.text}</strong> : promise.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h2 className="text-h2 max-w-4xl">
            A structured, science-based report that shows how your body
            functions&mdash;and how to support it intelligently.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
