import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/ui/Portrait";
import { portraitById } from "@/lib/portrait-registry";
import { PromiseCard } from "./PromiseCard";
import { Accordion, type AccordionItem } from "./Accordion";

const HIGHLIGHTS: AccordionItem[] = [
  {
    question: "Author of high-impact publications in Nature Medicine",
    answer:
      "→ CAUSEL methodology establishing causal links for non-coding GWAS variants",
    href: "https://www.nature.com/articles/s41591-020-0933-1",
  },
  {
    question: "Pioneer of DNA-methylation–based liquid biopsy approaches",
    answer:
      "→ Demonstrated non-invasive molecular signal detection from blood and urine samples",
    href: "https://pubmed.ncbi.nlm.nih.gov/26398868/",
  },
  {
    question:
      "Extensive experience with genome & epigenome editing, single-cell technologies, and functional genomics",
    answer: "→ Systems-level analysis of epigenetic regulation and variant function",
    href: "https://pubmed.ncbi.nlm.nih.gov/34145376/",
  },
  {
    question: "Recipient of elite competitive research funding",
    answer:
      "→ MTA Bolyai János Research Fellowship (nationally awarded on the basis of scientific excellence and independent research leadership)",
  },
];

const FOCUS_AREAS = [
  "Identifying which genetic variants are truly causal, especially within non-coding regulatory regions",
  "Experimentally testing how variants alter biological regulation using genome and epigenome editing combined with cell-based functional assays",
  "Building mechanistic, systems-level understanding of epigenetic regulation relevant to complex biological pathways and long-term physiological outcomes",
  "Integrating computational biology and high-resolution experimental data to move beyond correlations toward validated biological logic",
];

const METHODOLOGY: AccordionItem[] = [
  {
    question: "Gene-Variant Informed Supplementation",
    answer: (
      <>
        Curehub&rsquo;s foundation lies in analyzing genetic variants that influence
        human metabolism, with a particular focus on the One-Carbon Metabolism
        (OCM) pathway, which plays a central role in methylation processes,
        detoxification, and nutrient conversion.
        <br />
        <br />
        By evaluating key SNPs (Single Nucleotide Polymorphisms) across genes such
        as MTHFR, COMT, MTR, MTRR, CBS, BHMT, and AHCY, the platform identifies
        potential functional bottlenecks within these pathways and translates
        them into personalized, actionable supplement recommendations with
        dosage guidance.
        <br />
        <br />
        This science-driven approach forms the backbone of gene-variant&ndash;informed
        supplementation, enabling individualized health optimization strategies
        grounded in molecular biology and current scientific understanding.
      </>
    ),
  },
  {
    question: "Methylation Pathways and Epigenetic Precision",
    answer: (
      <>
        Methylation is a fundamental biochemical system involved in DNA repair,
        detoxification, and neurotransmitter balance.
        <br />
        <br />
        Curehub&rsquo;s AI model is informed by decades of methylation and epigenetic
        research, combining curated genetic rules, peer-reviewed scientific
        literature, and advanced AI synthesis to interpret relevant SNP patterns
        and translate them into personalized micronutrient recommendations with
        dosage guidance.
        <br />
        <br />
        Through this approach, Curehub bridges the gap between genetic
        predisposition and functional insight, delivering research-grade
        epigenetic intelligence directly to the user in an accessible and
        actionable format.
      </>
    ),
  },
  {
    question: "Evidence-Backed Personalization",
    answer: (
      <>
        Every Curehub report and recommendation is informed by established
        scientific literature.
        <br />
        <br />
        The platform references curated, peer-reviewed sources &mdash; including
        PubMed, SNPedia, and relevant clinical publications &mdash; to associate
        genetic variants with their documented biological roles and functional
        implications.
        <br />
        <br />
        Through this evidence-informed approach, Curehub delivers personalized
        insights rather than generic suggestions, helping users better
        understand factors related to methylation efficiency, detoxification
        pathways, and metabolic function in a structured and actionable way.
      </>
    ),
  },
];

export function ScienceFoundationSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-lg">
         
          <Reveal delay={0.08}>
            <h2 className="text-h2 max-w-3xl">Our Scientific Foundation</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative w-full">
              <div className="absolute top-0 left-0 rounded-full blur-3xl bg-brand-500 w-30 h-30 z-0"></div>
            <h3 className="text-h3 font-[100] max-w-2xl text-snow/70 z-1 relative text-left w-full">
              
           Science requires  <b> more</b> than one perspective
            </h3>
            </div>
           
             {/* Stacks below md: three columns of body copy cannot shrink
                 below their min-content width, so on a phone this row used
                 to push the page ~85px wider than the viewport. */}
             <div className="relative z-1 mt-12 flex flex-col gap-fluid-lg md:flex-row md:gap-8">
              <p>
                Developing responsible AI for healthcare requires more than strong algorithms. It requires biological
understanding, mathematical rigor, clinically meaningful data, careful validation, and the ability to
distinguish genuine signal from misleading correlation.
    </p>
    <p>
Curehub&rsquo;s active scientific background brings together internationally experienced professors,
clinical leaders, and AI researchers across these disciplines.</p>
<p>
Together, they provide the expertise required to examine our research from biological,
computational, mathematical, ophthalmological, and translational perspectives.
</p>
        </div>
          </Reveal>
        </div>

        {/* Dr. Sándor Spisák — the id lets the Our Team page deep-link
            straight to this profile (/why-trust-us#sandor-spisak). */}
        <div id="sandor-spisak" className="flex scroll-mt-32 flex-col gap-fluid-2xl">
          <Reveal>
            <h3 className="text-h3">Dr. Sándor Spisák</h3>
          </Reveal>

          <div className="grid grid-cols-1 gap-fluid-2xl lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal direction="right">
              <div className="flex flex-col gap-fluid-lg">
                <span className="font-display text-body-sm uppercase tracking-[0.06em] text-snow/60">
                  Chief Scientific Officer / Co-founder
                </span>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
                  {/* Same registry entry as his Our Team card; the original
                      file stays as the fallback when overrides are off. */}
                  <Portrait
                    override={portraitById("sandor-spisak")}
                    fallbackSrc="/images/IMG_3484-1-1.jpg"
                    fallbackAlt="Dr. Sándor Spisák, Chief Scientific Officer and Co-founder of Curehub"
                    frame="portrait"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-fluid-2xl">
              <Reveal delay={0.08}>
                <div className="flex flex-col gap-fluid-lg text-body-lg text-snow/80">
                  <p>
                    Dr. Spisák is an internationally recognised molecular biologist
                    specialising in epigenetics, gene regulation, functional
                    genomics, and genome/epigenome editing.
                  </p>
                  <p>
                    He earned his PhD in Molecular Gastroenterology at
                    Semmelweis University (Budapest), followed by:
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2">
                <Reveal delay={0.12}>
                  <PromiseCard icon="/images/heart-handshake.svg">
                    &ndash; more than <strong>a decade of high-impact</strong> academic
                    research in Boston,
                  </PromiseCard>
                </Reveal>
                <Reveal delay={0.18}>
                  <PromiseCard icon="/images/key-round.svg">
                    including nearly 10 years at Harvard Medical School&ndash;affiliated
                    institutes, most notably
                  </PromiseCard>
                </Reveal>
                <Reveal delay={0.24} className="sm:col-span-2">
                  <PromiseCard icon="/images/heart-handshake.svg">
                    the <strong className="italic">Dana-Farber Cancer Institute,</strong>{" "}
                    where he worked as a postdoctoral researcher and later
                    instructor.
                  </PromiseCard>
                </Reveal>
              </div>
            </div>
          </div>

          <Reveal>
            <p className="text-body-lg max-w-3xl text-snow/80">
              Next to his involvement with Curehub he currently leads the{" "}
              <strong>
                Epigenetics &amp; Genome Editing Research Group at HUN-REN TTK
                (Institute of Molecular Life Sciences),
              </strong>{" "}
              where his work focuses on uncovering the{" "}
              <strong>
                mechanistic foundations of epigenetic regulation and genetic
                variant function.
              </strong>
            </p>
          </Reveal>
        </div>

        {/* Academic & scientific highlights */}
        <div className="flex flex-col gap-fluid-xl">
          <Reveal>
            <h2 className="text-h2">Academic &amp; Scientific Highlights</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion items={HIGHLIGHTS} />
          </Reveal>
        </div>

        {/* Focus areas */}
        <div className="flex flex-col gap-fluid-xl">
          <Reveal>
            <h2 className="text-h2">
              Focus of the Epigenetics &amp; Genome Editing Research Group
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2">
            {FOCUS_AREAS.map((focus, i) => (
              <Reveal key={focus} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-fluid-lg rounded-md border border-snow/10 p-fluid-xl">
                  <Image
                    src="/images/microscope.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="size-8"
                  />
                  <p className="text-body text-snow/70">{focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* At Curehub */}
        <div className="flex flex-col gap-fluid-xl">
          <Reveal>
            <h2 className="text-h2">At Curehub</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-lg max-w-3xl text-snow/80">
             he leads systems-level investigations into metabolism-linked epigenetic networks
encompassing DNA, RNA, and histone methylation, and oversees high-throughput and targeted
translational research programs. He also contributes to Research and Development as a
Systems Biology Expert Validator.
              <br />
              <br />
              This collaboration{" "}
              <strong>ensures that Curehub&rsquo;s AI driven wellness insights are grounded</strong>{" "}
              in:
            </p>
          </Reveal>
          <div className="flex flex-col gap-fluid-lg">
            {[
              "Causally validated biological mechanisms, not statistical associations alone",
              "Systems-level epigenetic thinking, aligned with real-world biology",
              "Scientific rigor suitable for long-term platform credibility and regulatory awareness",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.06} direction="left">
                <p className="text-body-lg border-b border-snow/10 pb-fluid-lg font-medium text-snow">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
         
        </div>

      
      </Container>
    </section>
  );
}
