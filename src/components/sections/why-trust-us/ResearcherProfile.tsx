import { Fragment, type ReactNode } from "react";
import { SanityImg } from "@/components/ui/SanityImg";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import {
  researcherSlug,
  researcherDisciplines,
  splitPositions,
  toParagraphs,
} from "@/lib/researchers";
import type { Researcher } from "@/lib/sanity/types";

/** Standalone numbers only — the leading `\b` keeps the "1" inside "D1/Q1"
 *  out of it, and the trailing group deliberately stops before a sentence's
 *  full stop so "…since 2015." doesn't highlight the period too. */
const NUMBER = /(\b\d+(?:[.,]\d+)*)/g;

/**
 * Lifts the numbers out of an achievement line without touching the words
 * around them — the brief asks for the strongest figures to read visually,
 * while the sentence itself has to stay exactly as supplied.
 */
function withHighlightedNumbers(text: string): ReactNode[] {
  return text.split(NUMBER).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-display text-glow">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/**
 * One researcher profile: the shared layout built once and reused for all
 * four scientists, mirrored left/right by `portraitSide` so the page reads
 * as a rhythm rather than four identical CV cards.
 *
 * Reading order is deliberately three-speed — the header band (index,
 * discipline, name, positions) scans in seconds, the biography carries the
 * normal read, and the credentials + contribution blocks close it out. The
 * biography, achievements and contribution copy are protected client text:
 * this component only ever re-flows and emphasises them.
 */
export function ResearcherProfile({
  researcher,
  index,
  portraitSide,
}: {
  researcher: Researcher;
  index: number;
  portraitSide: "left" | "right";
}) {
  const slug = researcherSlug(researcher);
  const disciplines = researcherDisciplines(researcher);
  const positions = splitPositions(researcher.academicTitle);
  const biography = toParagraphs(researcher.background);
  const contribution = researcher.contribution
    ? toParagraphs(researcher.contribution)
    : [];
  // Only treat the opening paragraph as a pull-quote when something follows
  // it — where the whole contribution is a single paragraph (Prof. Hajdu),
  // setting it at display size turns the block into a wall of huge text,
  // especially on a phone.
  const hasLead = contribution.length > 1;
  const achievements = researcher.keyAchievements
    ?.map((achievement) => achievement.trim())
    .filter(Boolean);

  const portraitLeft = portraitSide === "left";

  return (
    <article
      id={slug}
      // Clears the fixed navbar when the Our Team page deep-links to a profile.
      className="relative scroll-mt-32"
    >
      {/* Accent layer. Deliberately unclipped here so the blob bleeds past
          the article box instead of ending on a straight cut — the page
          wrapper's `overflow-x-clip` is what stops it at the screen edge. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-visible"
        aria-hidden="true"
      >
        <div
          className={cn(
            "absolute top-24 size-80 rounded-full bg-brand-500/20 blur-[110px] lg:size-[30rem]",
            portraitLeft ? "-left-32" : "-right-32"
          )}
        />
      </div>

      <div className="relative flex flex-col gap-fluid-3xl">
        {/* ---- Quick scan: who, what field, what positions ------------- */}
        <header className="flex flex-col gap-fluid-lg">
          <Reveal>
            {/* Baseline, not centre: the discipline label wraps to two
                lines on a phone, and centring drops the index between them. */}
            <div className="flex items-baseline gap-fluid-lg">
              <span className="font-display text-h4 leading-none text-snow/20 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {disciplines && (
                <span className="font-display text-body-sm uppercase leading-snug tracking-[0.12em] text-glow">
                  {disciplines}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="text-h2 max-w-4xl">{researcher.name}</h3>
          </Reveal>

          {positions.length > 0 && (
            <Reveal delay={0.12}>
              <ul className="flex max-w-3xl flex-col gap-fluid-sm">
                {positions.map((position) => (
                  <li
                    key={position}
                    className="text-body-lg flex gap-fluid-md text-snow"
                  >
                    <span
                      className="mt-[0.7em] h-px w-6 shrink-0 bg-gradient-to-r from-glow to-glow/0"
                      aria-hidden="true"
                    />
                    <span>{position}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </header>

        {/* ---- Normal read: portrait beside the full biography --------- */}
        <div className="grid grid-cols-1 gap-fluid-2xl lg:grid-cols-[0.95fr_1.05fr] lg:gap-fluid-4xl">
          <div className={cn(portraitLeft ? "lg:order-1" : "lg:order-2")}>
            <div className="lg:sticky lg:top-28">
              <Reveal direction={portraitLeft ? "right" : "left"}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-brand-900/40">
                  {/* `object-top` because the supplied portraits differ in
                      aspect ratio — anything taller than 4:5 is cropped from
                      the bottom, which keeps every face in frame. */}
                  <SanityImg
                    image={researcher.image}
                    fallbackAlt={`Portrait of ${researcher.name}`}
                    fill
                    width={720}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col gap-fluid-2xl",
              portraitLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div className="flex flex-col gap-fluid-lg">
              {biography.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 32)} delay={Math.min(i, 4) * 0.05}>
                  <p
                    className={cn(
                      i === 0
                        ? "text-body-lg text-snow/85"
                        : "text-body text-snow/70"
                    )}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {achievements && achievements.length > 0 && (
              <Reveal delay={0.08} direction="none">
                <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-brand-700/45 via-ink to-ink p-fluid-xl md:p-fluid-2xl">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-brand-500/30 blur-3xl"
                    aria-hidden="true"
                  />
                  <p className="relative font-display text-body-sm uppercase tracking-[0.12em] text-glow">
                    Selected credentials
                  </p>
                  <ul className="relative mt-fluid-lg flex flex-col">
                    {achievements.map((achievement, i) => (
                      <li
                        key={achievement}
                        className="text-body flex gap-fluid-lg border-b border-snow/10 py-fluid-md text-snow/80 last:border-b-0 last:pb-0"
                      >
                        <span
                          className="font-display text-body-sm tabular-nums text-snow/25"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{withHighlightedNumbers(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* ---- The reason they are on this page ----------------------- */}
        {contribution.length > 0 && (
          <Reveal direction="none">
            <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-glow/12 via-brand-700/15 to-transparent">
              <div
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-glow via-glow/40 to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-fluid-lg p-fluid-xl pl-fluid-2xl md:p-fluid-3xl md:pl-fluid-4xl">
                <p className="font-display text-body-sm uppercase tracking-[0.12em] text-glow">
                  Contribution to Curehub R&amp;D
                </p>
                {contribution.map((paragraph, i) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className={cn(
                      i === 0
                        ? hasLead
                          ? "text-h5 max-w-4xl font-light leading-snug text-snow md:text-h4"
                          : "text-body-lg max-w-3xl font-light leading-snug text-snow md:text-h5"
                        : "text-body-lg max-w-3xl text-snow/70"
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}
