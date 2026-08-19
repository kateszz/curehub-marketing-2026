import { SanityImg } from "@/components/ui/SanityImg";
import type { Researcher } from "@/lib/sanity/types";

export function ResearcherCard({ researcher }: { researcher: Researcher }) {
  return (
    <div className="flex h-full flex-col gap-fluid-lg rounded-md border border-ink/10 bg-white/40 p-fluid-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        <SanityImg
          image={researcher.image}
          fallbackAlt={researcher.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-fluid-md">
        <div className="flex flex-col gap-fluid-xs">
          <h3 className="text-h6">{researcher.name}</h3>
          <p className="font-display text-body-sm uppercase tracking-[0.06em] text-brand-600">
            {researcher.academicTitle}
          </p>
        </div>
        <p className="text-body-sm text-ink/70">{researcher.background}</p>
        {researcher.keyAchievements && researcher.keyAchievements.length > 0 && (
          <ul className="flex flex-col gap-fluid-xs">
            {researcher.keyAchievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-fluid-sm text-body-sm text-ink/70"
              >
                <span className="text-brand-500" aria-hidden="true">
                  &bull;
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        {researcher.contribution && (
          <p className="border-t border-ink/10 pt-fluid-md text-body-sm text-ink/70">
            <strong className="text-ink">Contribution to Curehub: </strong>
            {researcher.contribution}
          </p>
        )}
      </div>
    </div>
  );
}
