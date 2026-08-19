import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContentBlock, Label, BulletList, StepList } from "./shared";

const RISK_FREE_POINTS = [
  <>
    <strong className="text-snow">Risk-free</strong> implementation
  </>,
  <>
    <strong className="text-snow">No prepayment</strong> or subscription
  </>,
  <>
    Backed by <strong className="text-snow">leading genetics researchers</strong>
  </>,
  <>
    Designed with the <strong className="text-snow">highest security and privacy standards</strong>
  </>,
];

const SCALE_PROBLEMS = [
  "Generic wellness recommendations limit perceived value",
  "Genetic data often lacks clear, actionable interpretation",
  "Clients disengage after one-off tests or consultations",
  "Regulatory boundaries restrict how insights can be communicated",
  "Brands need scalable personalisation without clinical risk",
];

const PLATFORM_POINTS = [
  "Processes genetic inputs in ~1 minute",
  "Converts biological signals into structured wellness insights automatically",
  "Detects patterns in large-scale datasets where the naked eye fails to recognize",
  "Generates client-ready reports without manual intervention",
  "Enables scalable delivery",
];

const BUSINESS_IMPACT = [
  {
    title: "Time Efficiency = Cost Efficiency",
    points: [
      "No internal expert team required for report building",
      "No weeks-long interpretation cycles",
      "No additional clinical staffing needed",
    ],
    result: "Lower operational cost per client.",
  },
  {
    title: "Scalability Without Operational Risk",
    points: ["Automated delivery", "No proportional increase in manpower"],
    result: "Growth without structural overhead.",
  },
  {
    title: "Revenue Expansion Opportunities",
    points: [
      "Introduce personalised wellness as a premium upgrade",
      "Build structured follow-up journeys on top of Curehub reports",
      "Increase overall client lifetime value",
    ],
    result: "Partners can build an ongoing client relationship, not just one-time report users.",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Partner integrates the Curehub module",
    description:
      "Curehub is deployed as a secure frontend module into the partner's existing platform, laboratory workflow, or client portal. This integration becomes both the data intake layer and the report delivery environment.",
  },
  {
    title: "Genetic data is securely transmitted through the partner's existing workflow",
    description:
      "Partners upload genetic data generated or managed within their infrastructure, which gets securely transferred to Curehub for automated processing. No additional client-side actions are required.",
  },
  {
    title: "Curehub AI generates structured wellness intelligence",
    description:
      "Curehub's AI engine processes the genetic dataset, interprets relevant biological patterns, and generates a personalised supplement guide and wellness report through an automated workflow.",
  },
];

const MONETISATION_MODELS = [
  "White-label or co-branded solutions upon partner's request",
  "Per-report or revenue-share models",
  "No prepayment, no subscription fee. Implement it risk free and start scaling your business today!",
];

/** B2B2C — Clinics, Labs & Health Brands section. */
export function ClinicsLabs() {
  return (
    <section id="clinics-labs" className="relative overflow-hidden bg-ink py-section-lg text-snow">
       <Reveal>
          <div className="flex flex-row items-center justify-between px-fluid-4xl gap-fluid-sm text-center bg-[url(/images/IMG_3488.webp)] bg-position-[60%] w-full h-[26vh] backdrop-opacity-25 mb-16">
          <div className="inset-0 pointer-none absolute bg-linear-to-b from-brand-500/80 to-ink/30 -z-1"></div>
            <p className="text-display font-display leading-none text-snow">B2B2C</p>
            <p className="text-h4">Clinics, Labs & Health Brands</p>
          </div>
        </Reveal>
      <Container className="relative flex flex-col gap-fluid-4xl">
       

        <ContentBlock title="Wellness Genomics for Patient- and Client-Facing Brands">
          <p className="text-body-lg max-w-2xl text-snow/80">
            Curehub enables clinics, laboratories, and wellness brands to deliver scalable,
            genomics-driven wellness insights under their own brand.
          </p>
          <BulletList items={RISK_FREE_POINTS} />
        </ContentBlock>

        <ContentBlock title="Without Curehub, Personalised Wellness Is Hard to Scale" delay={0.06}>
          <p className="text-body-lg max-w-2xl text-snow/80">
            Traditional models rely on manual interpretation, expert review, and complex report
            assembly. This leads to:
          </p>
          <BulletList items={SCALE_PROBLEMS} />
          <p className="text-h6 max-w-2xl font-medium">
            This creates a ceiling on growth. Offering personalisation often means increasing
            operational complexity.
          </p>
        </ContentBlock>

        <ContentBlock title="How Curehub Creates Partner Value and Offers Scalability" delay={0.06}>
          <p className="text-body-lg max-w-2xl text-snow/80">
            Curehub introduces an AI-driven interpretation layer designed to remove the
            operational bottleneck behind personalised wellness — the manual interpretation,
            expert review, and complex report assembly traditional models rely on.
          </p>
          <div className="flex flex-col gap-fluid-sm">
            <Label>The platform</Label>
            <BulletList items={PLATFORM_POINTS} />
          </div>
          <p className="text-h6 max-w-2xl font-medium">
            Instead of adding workload, Curehub allows partners to expand personalised offerings
            while maintaining operational efficiency.
          </p>
        </ContentBlock>

        <ContentBlock title="The Business Impact for Partners" delay={0.06}>
          <div className="grid grid-cols-1 gap-fluid-lg md:grid-cols-3">
            {BUSINESS_IMPACT.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-fluid-md rounded-md border border-snow/10 bg-snow/5 p-fluid-xl">
                  <p className="text-h6 font-semibold">{item.title}</p>
                  <BulletList items={item.points} className="grow" />
                  <p className="text-body-sm text-brand-300">Result: {item.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Implementation & Partner Workflow" delay={0.06}>
          <StepList steps={WORKFLOW_STEPS} />
          <p className="text-h4 max-w-xl">Generate value to your client in 1 minute.</p>
        </ContentBlock>

        <ContentBlock title="Flexible Models for Growth & Monetisation" delay={0.06}>
          <BulletList items={MONETISATION_MODELS} />
        </ContentBlock>

        <ContentBlock title="Scientifically Grounded Approach" delay={0.06}>
          <p className="text-body-lg max-w-2xl text-snow/80">
            Our interpretation framework has been developed in collaboration with experienced
            genetics and molecular biology specialists and is built upon established biological
            pathway research.
          </p>
          <Button href="/why-trust-us">Explore our scientific foundation</Button>
        </ContentBlock>

        <Reveal>
          <Button href="#contact">Contact us to explore partnership opportunities in detail</Button>
        </Reveal>
      </Container>
    </section>
  );
}
