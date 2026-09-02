import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/components/ui/icons";

/**
 * Section 14 — the two closing CTAs.
 *
 * The secondary action is a plain underlined link rather than the shared
 * Button's "text" variant: that variant is `text-ink`, which disappears on
 * this dark band, and overriding the colour through `className` would leave
 * two competing colour utilities to be resolved by stylesheet order.
 */
export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-section-md text-snow">
      <div
        className="pointer-events-none absolute -right-32 -top-24 size-[32rem] rounded-full bg-brand-500/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-glow/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal direction="none">
          <div className="flex flex-col items-start gap-fluid-xl sm:flex-row sm:items-center sm:gap-fluid-3xl">
            <Button href="/research-and-development">Explore our R&amp;D</Button>
            <Link
              href="/our-team#team"
              className="group inline-flex items-center gap-fluid-md border-b border-snow/25 pb-2 font-display text-body-sm uppercase tracking-[0.06em] text-snow/75 transition-colors hover:border-glow hover:text-glow"
            >
              <span>Get to know our full team</span>
              <ArrowUpRightIcon className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
