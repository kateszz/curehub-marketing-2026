import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PromiseCard } from "./PromiseCard";

const GDPR_HIPAA_PRACTICES = [
  {
    title: "End-to-End Encryption",
    description:
      "Your DNA file is encrypted the moment you upload it, in transit and at rest.",
  },
  {
    title: "Minimal Data Retention",
    description:
      "We store only the data necessary for your analysis and apply strict data minimization practices. Data deletion is supported upon request.",
  },
  {
    title: "No Selling, No Sharing",
    description:
      "Your genetic and health data is never sold, rented, or shared with third parties.",
  },
  {
    title: "Access Control",
    description:
      "Access to your data is restricted to your authenticated account. Internal access is tightly controlled and logged under least-privilege policies.",
  },
  {
    title: "Audit & Monitoring",
    description:
      "All access and system activity is logged and monitored to support auditing and security reviews.",
  },
];

export function PrivacySection() {
  return (
    <section className="py-section-md bg-radial-[at_80%_95%] from-brand-500 to-ink to-90% text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        <div className="flex flex-col gap-fluid-2xl">
          <Reveal>
            <h2 className="text-h2">Your Privacy, Our Promise.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-2">
            <Reveal delay={0.08}>
              <PromiseCard icon="/images/heart-handshake.svg">
                <strong>Your data is never sold,</strong> never shared, never
                compromised.
              </PromiseCard>
            </Reveal>
            <Reveal delay={0.16}>
              <PromiseCard icon="/images/key-round.svg">
                <strong>You&rsquo;re in control:</strong> delete your profile or data
                any time you&rsquo;d like.
              </PromiseCard>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col gap-fluid-xl">
          <Reveal>
            <h2 className="text-h2">GDPR and HIPAA in practice:</h2>
          </Reveal>
          <div className="flex flex-col">
            {GDPR_HIPAA_PRACTICES.map((practice, i) => (
              <Reveal key={practice.title} delay={i * 0.06}>
                <div className="flex flex-col gap-fluid-sm border-b border-snow/10 py-fluid-xl sm:flex-row sm:items-baseline sm:justify-between sm:gap-fluid-3xl">
                  <span className="text-h6 shrink-0 font-medium sm:w-1/3">
                    {practice.title}
                  </span>
                  <p className="text-body text-snow/70 sm:w-2/3">
                    {practice.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
