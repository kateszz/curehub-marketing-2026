import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The simple statement hero used on every inner page (Our Product, Why
 * Trust Us, Our Team, For Partners) — brand-blue gradient background,
 * eyebrow label, and a big headline. The home page uses the dedicated
 * `VideoHero` instead.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  background
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  background?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-section-md pt-section-top text-snow">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: background ? `url(${background})` : "url(/images/blue-snow-mesh.svg)", backgroundSize: "cover" }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-start gap-fluid-xl text-left">
       {description && (
          <Reveal delay={0.16}>
            <p className="text-body-lg max-w-2xl text-snow/80">{description}</p>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h1 className="text-h1 max-w-4xl">{title}</h1>
        </Reveal>
       
      </Container>
    </section>
  );
}
