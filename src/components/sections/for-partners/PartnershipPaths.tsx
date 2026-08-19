import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PATHS = [
  { href: "#clinics-labs", label: "B2B2C — Clinics, Labs & Health Brands" }
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

       
      </Container>
    </section>
  );
}
