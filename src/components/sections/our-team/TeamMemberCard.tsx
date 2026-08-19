import { SanityImg } from "@/components/ui/SanityImg";
import type { TeamMember } from "@/lib/sanity/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex h-full flex-col gap-fluid-lg rounded-md border border-ink/10 bg-white/40 p-fluid-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        <SanityImg
          image={member.image}
          fallbackAlt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-fluid-xs">
        <h3 className="text-h6">{member.name}</h3>
        <p className="font-display text-body-sm uppercase tracking-[0.06em] text-brand-600">
          {member.position}
        </p>
        {member.description && (
          <p className="text-body-sm text-ink/70">{member.description}</p>
        )}
      </div>
    </div>
  );
}
