import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const MISSIONS = ["Preventive", "Personalised", "Empowering"];

/**
 * The "why we started Curehub" statement block — real copy pulled from
 * about-us.html (the two dark sections directly under the hero).
 */
export function MissionSection() {
  return (
    <section className="bg-ink text-snow">
      <Container className="flex flex-col gap-fluid-3xl py-section-md">
        <Reveal>
          <h2 className="text-h2 max-w-3xl">
            We started Curehub <span className="text-glow">because</span> we
            believe healthcare <span className="text-glow">should be...</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-fluid-lg sm:grid-cols-3">
          {MISSIONS.map((mission, i) => (
            <Reveal key={mission} delay={i * 0.08}>
              <div className="relative flex items-center gap-fluid-md overflow-hidden rounded-md border border-snow/10 p-fluid-xl">
                <Image
                  src="/images/asterisk_1.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <span className="font-display text-h5 uppercase">
                  {mission}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col gap-fluid-2xl border-t border-snow/10 py-section-md">
        <Reveal>
          <p className="text-h3 max-w-3xl">
            For too long, people have been treated{" "}
            <em>based on averages</em> instead of{" "}
            <strong>their unique biology.</strong>
          </p>
        </Reveal>
        <Reveal delay={0.1} direction="left">
          <p className="text-body-lg max-w-2xl self-end text-snow/70">
            Curehub was founded on the belief that{" "}
            <strong className="text-snow">
              our genes and epigenetic patterns hold the key to true
              prevention
            </strong>
            .
            <br />
            <br />
            By understanding how each body processes vitamins, detoxifies,
            and regulates methylation, we can{" "}
            <strong className="text-snow">
              predict health risks before illness appears — or actively
              address and help defeat existing ones
            </strong>{" "}
            through precise, data-driven interventions.
            <br />
            <br />
            Our goal is to make{" "}
            <strong className="text-snow">
              cutting-edge health technology accessible to everyone
            </strong>
            , regardless of financial status.
            <br />
            <br />
            With the power of <strong className="text-snow">AI</strong>, we
            can analyze complex biological data with a precision far beyond
            human capability &mdash;{" "}
            <strong className="text-snow">
              reducing costs significantly while delivering deeper, more
              accurate personalization
            </strong>{" "}
            in a matter of minutes.
            <br />
            <br />
            Curehub bridges{" "}
            <strong className="text-snow">
              genomic science and everyday wellness
            </strong>
            , empowering people to take control of their health and
            longevity.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
