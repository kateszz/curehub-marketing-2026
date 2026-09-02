import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const KEYWORDS = ["Preventive", "Personalised", "Empowering"];

/**
 * Section 1 — the opening company vision.
 *
 * Replaces the previous genomics/methylation opening in full: the page now
 * has to read as a multidisciplinary Biointelligence company rather than a
 * genetics company, so the copy states the problem, the approach, and the
 * two technology directions before a single face appears.
 *
 * The type is deliberately three-speed — the three keywords carry the
 * page's loudest voice, the opening statement is set at display size, and
 * the two supporting paragraphs sit at normal reading size in a column
 * pair — so the block never reads as one flat wall of text.
 */
export function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-snow">
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[34rem] rounded-full bg-brand-500/20 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-fluid-4xl py-section-md">
        <Reveal>
          <h2 className="text-h2 max-w-4xl">
            We started Curehub <span className="text-glow">because</span> we
            believe healthcare <span className="text-glow">should be&hellip;</span>
          </h2>
        </Reveal>

        {/* The triple keyword block — the brief's one non-negotiable visual
            element on this section. Hairlines rather than boxes: three
            framed cards would compete with the team cards further down. */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {KEYWORDS.map((word, i) => (
            <Reveal key={word} delay={i * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col justify-between gap-fluid-2xl border-t border-snow/15 pt-fluid-lg",
                  i > 0 && "mt-fluid-lg sm:mt-0 sm:border-l sm:pl-fluid-lg"
                )}
              >
                <div className="flex items-center gap-fluid-md">
                  <Image
                    src="/images/asterisk_1.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0 opacity-70"
                    aria-hidden="true"
                  />
                  <span className="font-display text-body-sm uppercase tracking-[0.14em] text-glow tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-display text-h3 uppercase leading-[0.95] tracking-[-0.02em] break-words">
                  {word}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="relative flex flex-col gap-fluid-4xl border-t border-snow/10 py-section-md">
        <Reveal>
          <p className="text-h4 max-w-4xl font-light leading-snug text-snow/90">
            For too long, human biology has been understood through isolated
            measurements, population averages, and signals we could not fully
            interpret.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-2xl md:grid-cols-2 md:gap-fluid-4xl">
          <Reveal delay={0.08}>
            <p className="text-body-lg text-snow/70">
              Curehub is building technologies that combine{" "}
              <strong className="font-semibold text-snow">
                AI, biological science, and clinical research
              </strong>{" "}
              to transform complex biological signals into deeper,
              individualized insight.
            </p>
          </Reveal>

          {/* The two technology directions get typographic emphasis here so
              they are already perceptible before the R&D page names them. */}
          <Reveal delay={0.16}>
            <p className="text-body-lg text-snow/70">
              Today, this vision is taking shape through{" "}
              <em className="font-display not-italic tracking-[-0.01em] text-glow">
                Genomic Biointelligence
              </em>
              , where we interpret genetic variation at the pathway level, and{" "}
              <em className="font-display not-italic tracking-[-0.01em] text-glow">
                Ocular Biointelligence
              </em>
              , where we research how retinal imaging may reveal systemic
              biological states non-invasively.
            </p>
          </Reveal>
        </div>

        <Reveal direction="none">
          <div className="relative max-w-4xl pl-fluid-xl md:pl-fluid-2xl">
            <div
              className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-glow via-glow/40 to-transparent"
              aria-hidden="true"
            />
            <p className="text-h3 font-light leading-tight">
              Our ambition is simple: make human biology more{" "}
              <span className="text-glow">interpretable</span>,{" "}
              <span className="text-glow">actionable</span>, and{" "}
              <span className="text-glow">accessible</span>.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
