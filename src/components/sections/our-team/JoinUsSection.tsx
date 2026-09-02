import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/icons";

/**
 * Section 5 — "You can join us": how you can work with Curehub.
 *
 * Two partnership routes, deliberately built from one shared card so
 * neither outranks the other — clinical integration is no longer the only
 * way in, and the research route has to read as an equal invitation. The
 * former Corporate Wellness category is gone entirely; the grid is two
 * columns rather than three so nothing is left standing in its place.
 */
const ROUTES = [
  {
    title: "Clinical Integration",
    copy: "Integrate Curehub into your clinical workflows and collaborate with us on research and development.",
    href: "/for-partners",
    cta: "See how partnership works",
  },
  {
    title: "Research & Academic Partnerships",
    copy: "We are open to collaborate with universities, research institutes, and clinical scientists to validate AI models, and co-develop next generation genomic and epigenetic tools and ocular AI models.",
    href: "#contact",
    cta: "Start a research conversation",
  },
];

export function JoinUsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-section-lg text-snow">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 size-[28rem] rounded-full bg-glow/10 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
          <Reveal>
            <Eyebrow tone="snow">Partnership</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-h2 max-w-3xl">You can join us</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-h5 max-w-3xl font-light leading-snug text-snow/80">
              Professionals can become our partners by integrating Curehub into
              their clinical workflows, collaborating on research and
              development.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-fluid-lg md:grid-cols-2">
          {ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={i * 0.08} className="h-full">
              <Link
                href={route.href}
                className="group flex h-full flex-col justify-between gap-fluid-2xl rounded-md border border-snow/12 bg-snow/5 p-fluid-xl outline-none transition-colors hover:border-glow/50 hover:bg-snow/8 focus-visible:ring-2 focus-visible:ring-glow md:p-fluid-2xl"
              >
                <div className="flex flex-col gap-fluid-lg">
                  <h3 className="font-display text-h5 uppercase tracking-[0.04em]">
                    {route.title}
                  </h3>
                  <p className="text-body-lg text-snow/70">{route.copy}</p>
                </div>
                <span className="inline-flex items-center gap-fluid-sm font-display text-body-sm uppercase tracking-[0.1em] text-glow">
                  <span>{route.cta}</span>
                  <ArrowUpRightIcon className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
