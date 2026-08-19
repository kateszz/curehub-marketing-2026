import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PATHS = [
  { href: "#corporate-wellness", label: "B2B — Corporate Wellness" },
  { href: "#clinics-labs", label: "B2B2C — Clinics, Labs & Health Brands" },
];

/** The dark "Get in touch" banner + two jump links to the B2B / B2B2C sections below. */
export function PartnershipPaths() {
  return (
    <section className="bg-ink py-section-sm text-snow">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-fluid-lg sm:flex-row sm:items-center">
            <div className="flex items-center gap-fluid-md">
              <Image
                src="/images/asterisk.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="opacity-80"
              />
              <h2 className="text-h2">Get in touch</h2>
            </div>
            <Button href="#contact">Book a partner call or request a demo</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 divide-y divide-snow/10 border-t border-snow/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {PATHS.map((path, i) => (
            <Reveal key={path.href} delay={0.08 + i * 0.08}>
              <a
                href={path.href}
                className="group flex items-center justify-between gap-fluid-lg py-fluid-xl transition-colors hover:text-brand-300 sm:px-fluid-2xl"
              >
                <span className="text-h5 font-medium">{path.label}</span>
                <span
                  aria-hidden="true"
                  className="text-h5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
