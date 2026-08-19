import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContentBlock, Label, BulletList, StepList } from "./shared";

const TARGET_PARTNERS = [
  "Large enterprises & multinational companies",
  "Corporate wellness providers",
  "Employee benefit platforms",
  "Insurance-linked prevention programs",
];

const WHY_FALLS_SHORT = [
  "One-size-fits-all wellness programs don't engage employees",
  "Generic advice lacks personal relevance",
  "Burnout, fatigue, and disengagement remain invisible until late",
  "Employers want impact — without handling sensitive health data",
];

const EMPLOYEES_RECEIVE = [
  "Individual wellness report based on genetics & methylation-related pathways",
  "Clear lifestyle, nutrition, and supplement guidance",
];

const EMPLOYERS_GAIN = [
  <>
    <strong className="text-snow">Higher energy and vitality across teams</strong>, supporting
    sustained performance and focus
  </>,
  <>
    <strong className="text-snow">Improved cognitive clarity and stress resilience</strong>,
    contributing to better day-to-day decision-making
  </>,
  <>
    <strong className="text-snow">Enhanced productivity and work consistency</strong>, driven by
    better recovery and physiological balance
  </>,
  <>
    <strong className="text-snow">Stronger engagement with wellbeing initiatives</strong>, as
    employees see clear, personalised value
  </>,
  <>
    <strong className="text-snow">Reduced burnout risk through proactive lifestyle optimisation</strong>,
    not reactive intervention
  </>,
  <>
    <strong className="text-snow">Elevated employer brand</strong> through science-backed,
    forward-thinking wellness benefits
  </>,
];

const HOW_IT_WORKS = [
  { title: "Company launches Curehub as a voluntary benefit" },
  { title: "Employees opt in individually" },
  { title: "Sample collection handled by partner lab" },
  { title: "Curehub generates personalised wellness reports" },
  { title: "Employees access results via secure platform" },
];

const SAFE_DEPLOYMENT = [
  "Wellness-only positioning (non-medical, non-diagnostic)",
  "GDPR-aligned data handling",
  "Data localisation options",
  "No employer access to individual data",
];

const COLLABORATION_MODELS = [
  "Per-employee licensing",
  "Corporate wellness pilots",
  "White-label enterprise programs",
  "Multi-country rollouts",
  "Co-branded wellbeing initiatives",
];

/** B2B — Corporate Wellness section. */
export function CorporateWellness() {
  return (
    <section id="corporate-wellness" className="bg-ink py-section-lg text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <Reveal>
          <div className="flex flex-col items-center gap-fluid-sm text-center">
            <p className="text-display font-display leading-none text-brand-300">B2B</p>
            <p className="text-h4">Corporate Wellness</p>
          </div>
        </Reveal>

        <ContentBlock title="Wellness Genomics for Modern Workforces">
          <p className="text-body-lg max-w-2xl text-snow/80">
            Curehub helps enterprises upgrade traditional corporate wellness programs with
            personalised, science-based insights. Empowering employees to understand how their
            body responds to lifestyle, nutrition, and stress.
          </p>
          <div className="flex flex-col gap-fluid-sm">
            <Label>Target Partners</Label>
            <BulletList items={TARGET_PARTNERS} />
          </div>
        </ContentBlock>

        <ContentBlock title="Why Traditional Corporate Wellness Falls Short" delay={0.06}>
          <BulletList items={WHY_FALLS_SHORT} />
          <p className="text-h6 max-w-2xl font-medium">
            Curehub solves this by personalising wellness, creating value for both the employee
            and the employer.
          </p>
        </ContentBlock>

        <ContentBlock title="Personalised Wellness Reports — Built for Enterprise Use" delay={0.06}>
          <div className="flex flex-col gap-fluid-sm">
            <Label>What employees receive</Label>
            <BulletList items={EMPLOYEES_RECEIVE} />
          </div>
          <div className="flex flex-col gap-fluid-sm">
            <Label>What employers gain</Label>
            <BulletList items={EMPLOYERS_GAIN} />
          </div>
        </ContentBlock>

        <ContentBlock title="How it Works" delay={0.06}>
          <StepList steps={HOW_IT_WORKS} />
          <p className="text-body text-snow/70">
            <strong className="text-snow">Optional add on:</strong> Annual or biannual re-testing
            for engagement & retention.
          </p>
        </ContentBlock>

        <ContentBlock title="Designed for Wellness. Safe for Global Deployment." delay={0.06}>
          <BulletList items={SAFE_DEPLOYMENT} />
        </ContentBlock>

        <ContentBlock title="Flexible Enterprise Collaboration Models" delay={0.06}>
          <div className="flex flex-col gap-fluid-sm">
            <Label>Options</Label>
            <BulletList items={COLLABORATION_MODELS} />
          </div>
        </ContentBlock>

        <Reveal>
          <Button href="#contact">Talk to us about corporate wellness</Button>
        </Reveal>
      </Container>
    </section>
  );
}
