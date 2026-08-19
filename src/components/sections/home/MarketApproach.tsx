import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function MarketApproach() {
  return (
    <section className="py-section-md">
      <Container className="flex flex-col gap-fluid-2xl">
        <Reveal>
          <Eyebrow>Our Market Approach</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-h2">Dual Market Approach</h2>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <p className="text-body-lg max-w-xl self-end text-ink/70">
            Curehub delivers <strong className="text-ink">personalized wellness insights</strong>{" "}
            through <strong className="text-ink">two complementary channels,</strong>{" "}
            supporting both individuals and organizations with{" "}
            <strong className="text-ink">biology-driven, data-informed solutions.</strong>
          </p>
        </Reveal>

        <div className="mt-fluid-lg grid grid-cols-1 gap-fluid-3xl md:grid-cols-2 md:gap-fluid-4xl">
          <Reveal>
            <div className="flex h-full flex-col gap-fluid-lg">
              <span className="font-display text-h5 text-brand-500">B2C</span>
              <p className="text-body-lg text-ink/80">
                Empowering individuals with personalized wellness insights and
                lifestyle guidance. Helping users better understand their
                biology and support everyday wellbeing.
              </p>
              <Button href="/our-product" className="mt-auto self-start">
                Explore our product
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-fluid-lg border-t border-ink/10 pt-fluid-3xl md:border-l md:border-t-0 md:pl-fluid-4xl md:pt-0">
              <span className="font-display text-h5 text-brand-500">B2B</span>
              <p className="text-body-lg text-ink/80">
                Providing organizations and wellness-focused partners with our
                advanced tool to deliver personalized, science-backed wellness
                insights and improve user engagement through data-driven
                personalization.
              </p>
              <Button href="/for-partners" className="mt-auto self-start">
                See B2B opportunities
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="text-body-lg max-w-xl self-end text-right text-ink/70">
            Whether you&rsquo;re an <strong className="text-ink">individual seeking
            personalized wellness insights</strong> or an{" "}
            <strong className="text-ink">organization looking to enhance wellness
            offerings</strong>, Curehub delivers tailored solutions designed around
            individual biology.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
