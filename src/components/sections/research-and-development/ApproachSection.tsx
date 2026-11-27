import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const BLOCKS = [
  {
    title: "Making the Invisible Visible",
    paragraphs: [
      "The human body constantly reveals information about its internal biological state. Much of this information, however, remains beyond our ability to interpret.",
      "At Curehub, we are bringing together artificial intelligence, biological science and medical imaging to explore new ways of understanding human health.",
      "Our ambition is to make deeper biological insights accessible through technologies that are non-invasive, scalable and increasingly personalised.",
    ],
  },
  {
    title: "A New Window Into Human Health",
    paragraphs: [
      "The eye offers a remarkable opportunity to understand what is happening beyond the surface of the human body.",
      "Its intricate network of blood vessels and biological structures may hold valuable information about our systemic health, metabolic balance and underlying biological processes.",
      "By combining advanced artificial intelligence with retinal imaging, we are exploring how these naturally occurring signals could become a new source of meaningful health intelligence.",
    ],
  },
];

const BENEFITS = [
  {
    title: "Non-Invasive by Nature",
    body: "Exploring ways to understand internal biological processes without invasive procedures.",
  },
  {
    title: "Intelligence Beyond Human Vision",
    body: "Using artificial intelligence to uncover complex biological patterns that may otherwise remain unnoticed.",
  },
  {
    title: "Designed for Accessibility",
    body: "Working towards technologies that make advanced health insights available to a broader population.",
  },
];

/** Section 2 — why the retina can say something about the whole organism. */
export function ApproachSection() {
  return (
    <section className="bg-ink py-section-md text-snow">
      <Container className="flex flex-col gap-fluid-4xl">
        {BLOCKS.map((block) => (
          <div
            key={block.title}
            className="grid grid-cols-1 gap-fluid-2xl lg:grid-cols-[1fr_1.1fr] lg:gap-fluid-4xl"
          >
            <Reveal>
              <h2 className="text-h2 max-w-3xl max-sm:text-h3">{block.title}</h2>
            </Reveal>
            <div className="flex flex-col gap-fluid-lg">
              {block.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                  <p className="text-body-lg text-snow/70">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-fluid-lg md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="relative flex h-full flex-col gap-fluid-md overflow-hidden rounded-md border border-snow/10 bg-gradient-to-br from-brand-700/40 via-ink to-ink p-fluid-2xl">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-500/30 blur-2xl"
                  aria-hidden="true"
                />
                <h3 className="text-h5 relative">{benefit.title}</h3>
                <p className="text-body relative text-snow/70">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
