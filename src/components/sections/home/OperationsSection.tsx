import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function OperationsSection() {
  return (
    <section className="py-section-md">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow>Our Operations</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2">How Curehub operates</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="relative w-full overflow-hidden rounded-md">
            <Image
              src="/images/Asset-1.avif"
              alt="Diagram of the Curehub process, from raw DNA data to personalized supplement guidance"
              width={2600}
              height={1400}
              className="h-auto w-full"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
