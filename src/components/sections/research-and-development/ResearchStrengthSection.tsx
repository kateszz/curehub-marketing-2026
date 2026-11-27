import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PARAGRAPHS = [
  "Innovation of this magnitude requires more than artificial intelligence alone.",
  "Our research brings together expertise across molecular biology, ophthalmology, medical imaging, computer science and clinical research.",
  "With scientific expertise from internationally recognised academic and research institutions, Curehub is building a multidisciplinary foundation for the next generation of health intelligence.",
  "Our approach is driven by scientific evidence, responsible innovation and a shared commitment to improving human health.",
];

/** Academic affiliations of the research team — text only, deliberately
 *  lighter than the collaboration cards so no direct partnership is implied. */
const UNIVERSITIES = [
  "University of Debrecen",
  "Pázmány Péter Catholic University",
  "University of Pécs Clinical Centre",
];

/** HUN-REN SZTAKI is the direct service provider within the AI EDIH Hungary
 *  programme — one relationship shown as two cards, not two partnerships. */
const COLLABORATORS = [
  {
    logo: "/images/logo-hun-ren-sztaki.png",
    logoLabel: "HUN-REN SZTAKI logo",
    name: "HUN-REN SZTAKI",
    category: "Research & Technology",
    description:
      "Specialist expertise in artificial intelligence, advanced computing, prototype development and technological validation.",
  },
  {
    logo: "/images/logo-ai-edih-hungary.png",
    logoLabel: "AI EDIH Hungary logo",
    name: "AI EDIH Hungary",
    category: "European Innovation",
    description:
      "Access to a European innovation ecosystem supporting AI experimentation, technology development and the transition from research to real-world applications.",
  },
];

const CAPABILITIES = [
  "High-Performance Computing",
  "AI Research & Engineering",
  "Scalability & Reliability",
];

/** Section 3 — the scientific foundation behind the program: expertise and
 *  academic affiliations (A, B), institutional collaboration (C), research
 *  infrastructure (D) and the European programme acknowledgement (E).
 *  The detailed researcher profiles live on Why Trust Us; this section only
 *  points there. */
export function ResearchStrengthSection() {
  return (
    <section className="py-section-md bg-radial-[at_15%_10%] from-brand-500 to-ink to-80% text-snow">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow tone="snow">Active Scientific Expertise</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2 max-w-4xl max-sm:text-h3">
            Where Science, Medicine and Technology Converge
          </h2>
        </Reveal>

        <div className="flex flex-col gap-fluid-lg">
          {PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.12 + i * 0.06}>
              <p className="text-body-lg max-w-3xl text-snow/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-fluid-lg flex flex-col gap-fluid-md">
          <Reveal>
            <p className="font-display text-body-sm uppercase tracking-[0.06em] text-snow/80">
              Academic Affiliations of Our Research Team
            </p>
          </Reveal>
          <ul className="grid grid-cols-1 gap-fluid-md md:grid-cols-3">
            {UNIVERSITIES.map((institution, i) => (
              <li key={institution}>
                <Reveal delay={i * 0.06} direction="none" className="h-full">
                  <span className="flex h-full items-center rounded-md border border-snow/15 bg-snow/5 px-fluid-lg py-fluid-md font-display text-body-sm uppercase tracking-[0.06em] text-snow/80">
                    {institution}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <Button href="/why-trust-us">Meet our research team</Button>
        </Reveal>

        {/* C — institutional collaboration */}
        <div className="mt-fluid-xs flex flex-col gap-fluid-xl">
          <div className="flex flex-col gap-fluid-lg">
            <Reveal>
              <Eyebrow tone="snow">Institutional Collaboration</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="text-h3 max-w-4xl max-md:text-h4">
                Advancing Innovation Through Collaboration
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-body-lg max-w-3xl text-snow/80">
                Through our collaboration with HUN-REN SZTAKI within the AI EDIH
                Hungary programme, Curehub has gained access to specialist
                expertise and advanced technological resources to support the
                development of next-generation health intelligence.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-fluid-lg xl:grid-cols-2">
            {COLLABORATORS.map((collaborator, i) => (
              <Reveal key={collaborator.name} delay={i * 0.08} className="h-full">
                <article className="relative flex h-full flex-col gap-fluid-lg overflow-hidden rounded-md border border-snow/10 bg-gradient-to-br from-brand-700/40 via-ink to-ink p-fluid-xl sm:flex-row sm:items-center">
                  <div className="relative h-12 w-40 shrink-0 sm:w-44">
                    <Image
                      src={collaborator.logo}
                      alt={collaborator.logoLabel}
                      fill
                      sizes="(min-width: 640px) 176px, 160px"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="relative flex flex-col gap-fluid-sm">
                    <p className="font-display text-body-sm uppercase tracking-[0.06em] text-glow">
                      {collaborator.category}
                    </p>
                    <h4 className="text-h5">{collaborator.name}</h4>
                    <p className="text-body text-snow/70">{collaborator.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* D — advanced research infrastructure: one editorial feature,
            ~40% image / ~60% content on desktop, image above text below. */}
        <Reveal className="mt-fluid-xs">
          <article className="relative grid grid-cols-1 overflow-hidden rounded-md border border-snow/10 bg-gradient-to-br from-brand-700/40 via-ink to-ink lg:grid-cols-[2fr_3fr]">
            <div className="relative aspect-[2/1] md:aspect-[5/2] lg:aspect-auto">
              <Image
                src="/images/komondor-supercomputer.jpg"
                alt="The Komondor supercomputer in Hungary, with its cabinet doors open to reveal the liquid-cooled compute racks"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[55%_center]"
              />
            </div>
            <div className="flex flex-col gap-fluid-lg p-fluid-md sm:p-fluid-xl lg:p-fluid-2xl">
              <div>
                <Eyebrow tone="snow">Advanced Research Infrastructure</Eyebrow>
              </div>
              <h3 className="text-h3 max-md:text-h4">
                Harnessing the Power of Supercomputing
              </h3>
              <p className="text-body-lg text-snow/70">
                Advanced computational infrastructure opens new possibilities for
                exploring complex biological data, training sophisticated AI
                models and developing scalable health intelligence technologies.
              </p>
              <p className="text-body-lg text-snow/70">
                Access to high-performance computing through our institutional
                collaboration supports the computationally intensive research
                behind our scientific vision.
              </p>
              <ul className="flex flex-col gap-fluid-sm sm:flex-row sm:flex-wrap">
                {CAPABILITIES.map((capability) => (
                  <li
                    key={capability}
                    className="inline-flex items-center gap-fluid-sm rounded-md border border-snow/15 bg-snow/5 px-fluid-md py-fluid-sm font-display text-body-sm uppercase tracking-[0.06em] text-snow/80"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-glow" aria-hidden="true" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {/* E — European programme acknowledgement: restrained strip, not a
            partner or endorsement. Emblem rules follow official EU guidance. */}
        <Reveal>
          <div className="flex flex-col items-start gap-fluid-md border-t border-snow/10 pt-fluid-xl sm:flex-row sm:items-center sm:gap-fluid-xl">
            <div className="relative h-14 w-64 shrink-0">
              <Image
                src="/images/eu-co-funded.png"
                alt="Co-funded by the European Union"
                fill
                sizes="256px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-body-sm max-w-3xl text-snow/70">
              Curehub’s participation in AI EDIH Hungary is part of a European
              innovation programme co-funded by the European Union.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
