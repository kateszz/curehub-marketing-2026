import { type ReactNode } from "react";

export type AccordionItem = {
  question: string;
  answer: ReactNode;
  href?: string;
  linkLabel?: string;
};

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Native <details>/<summary> accordion — no client JS needed, works with
 * SSR out of the box, and is keyboard/screen-reader accessible for free.
 * Styled for dark section backgrounds (borrows `currentColor`/`text-snow`).
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-snow/15 border-t border-snow/15">
      {items.map((item) => (
        <details key={item.question} className="group py-fluid-lg">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-fluid-lg font-display text-body-lg uppercase tracking-[0.02em] marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronIcon />
          </summary>
          <div className="max-w-2xl pt-fluid-md text-body text-snow/70">
            <p>{item.answer}</p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-fluid-md inline-block border-b border-current pb-0.5 text-body-sm uppercase tracking-[0.04em] text-snow hover:text-brand-300"
              >
                {item.linkLabel ?? "Read articles"}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
