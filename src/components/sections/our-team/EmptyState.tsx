import { Reveal } from "@/components/ui/Reveal";

/**
 * On-brand placeholder shown when a CMS-driven list (team members,
 * researchers) has no entries yet, instead of letting the section render
 * as a jarring blank gap under its heading.
 */
export function EmptyState({ message }: { message: string }) {
  return (
    <Reveal>
      <div className="flex flex-col items-center gap-fluid-md rounded-md border border-dashed border-snow/15 bg-snow/5 px-fluid-xl py-fluid-3xl text-center">
        <p className="text-body-lg text-snow/60">{message}</p>
      </div>
    </Reveal>
  );
}
