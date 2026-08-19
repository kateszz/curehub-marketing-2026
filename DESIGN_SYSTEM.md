# Curehub — Design System Reference

This is a plain-language map of the tokens extracted from the original Webflow
export, and how they translate into Tailwind CSS v4. All of this lives in
`src/app/globals.css` inside the `@theme { ... }` block — Tailwind v4 reads
CSS custom properties there directly and turns them into utility classes, so
there's no separate `tailwind.config.js` to keep in sync.

## Fonts

| Token | Family | Used for | Tailwind utility |
|---|---|---|---|
| `--font-epilogue` | Epilogue (variable, 100–900, has italics) | Body copy, paragraphs, UI text | `font-sans` (default) |
| `--font-syne` | Syne (variable, 400–800) | Headings, buttons, eyebrow labels | `font-display` |

Both are self-hosted via `next/font/local` (see `src/lib/fonts.ts`) — this
avoids a render-blocking network request and gives you automatic
`font-display: swap` + no layout shift.

Headings (`h1`–`h6`) default to `font-display` automatically (set in the
`@layer base` block), so you don't need to add `font-display` by hand every
time you write a heading.

## Colors

The source site builds its entire blue palette from **one** brand color using
`color-mix()` — we kept that approach so the palette stays perfectly
consistent and you only ever need to tune one hex value.

| Token | Value | Tailwind class |
|---|---|---|
| `--color-brand-500` | `#2f62ed` (the brand blue) | `bg-brand-500`, `text-brand-500`, `border-brand-500` |
| `--color-brand-100…400` | brand-500 mixed with white | `bg-brand-100` … `bg-brand-400` |
| `--color-brand-600…900` | brand-500 mixed with black | `bg-brand-600` … `bg-brand-900` |
| `--color-ink` | `#14022e` — near-black, main text color | `text-ink`, `bg-ink` |
| `--color-snow` | `#f5f2fc` — near-white, default page background | `bg-snow`, `text-snow` |
| `--color-glow` | `#c2b1ff` — lavender accent for glows/highlights | `bg-glow`, `text-glow` |

Dark sections (hero, footer, CTA bands) are just `bg-ink text-snow` (or
`bg-brand-500 text-snow` for the hero) applied directly on the `<section>` —
the source site does this with a more complex variable-swapping system, but a
plain Tailwind class on the section wrapper is simpler and just as
maintainable for a single-brand site like this.

Need transparency? Use Tailwind's opacity modifier rather than a new token,
e.g. `bg-brand-500/50`, `border-snow/20`.

## Type scale

All font sizes are **fluid** — they scale smoothly between a 320px and a
1440px viewport using `clamp()`, exactly like the source site, so you never
get an abrupt jump at a breakpoint.

| Utility | Min → Max |
|---|---|
| `text-body-sm` | 14px → 16px |
| `text-body` (paragraph default) | 16px → 18px |
| `text-body-lg` | 18px → 20px |
| `text-h6` | 16px → 18px |
| `text-h5` | 22px → 24px |
| `text-h4` | 28px → 32px |
| `text-h3` | 36px → 48px |
| `text-h2` | 40px → 64px |
| `text-h1` | 48px → 80px |
| `text-display` | 64px → 112px (big hero numerals / statement type) |

## Spacing scale

Also fluid, same idea — use these instead of raw Tailwind numbers (`p-4`,
`gap-6`...) whenever you want spacing that breathes on desktop without being
too cramped on mobile.

**Important naming note:** these are namespaced `fluid-*` (`p-fluid-lg`, not
`p-lg`) very deliberately. Tailwind v4 resolves named `max-w-*`/`w-*` sizes
(`max-w-3xl`, `max-w-xl`, ...) through this same spacing theme namespace —
early on this project briefly defined a bare `--spacing-3xl` token, which
silently hijacked the built-in `max-w-3xl` utility (48rem) and replaced it
with a small ~48px gap value sitewide, badly breaking every `max-w-*` layout
width on the site. Keeping the custom scale under the `fluid` prefix avoids
that collision entirely — if you ever add a new named token to `@theme`,
double-check it doesn't shadow one of Tailwind's built-in scale names
(`xs`/`sm`/`md`/`lg`/`xl`/`2xl`/`3xl`.../`7xl` are all reserved across
several utility namespaces).

| Utility (e.g. `p-fluid-`, `gap-fluid-`, `space-y-fluid-`) | Min → Max |
|---|---|
| `xs` | 6px → 8px |
| `sm` | 10px → 12px |
| `md` | 14px → 16px |
| `lg` | 20px → 24px |
| `xl` | 28px → 32px |
| `2xl` | 32px → 40px |
| `3xl` | 36px → 48px |
| `4xl` | 40px → 64px |

Section vertical rhythm (use as `py-section-md` etc on a `<section>`):

| Utility | Min → Max |
|---|---|
| `section-sm` | 48px → 80px |
| `section-md` | 64px → 112px |
| `section-lg` | 88px → 160px |
| `section-top` | 160px → 224px (space below the fixed navbar on page-top heroes) |

Page gutter (horizontal edge padding, already baked into `.container-page`):
`--spacing-gutter` → 16px → 48px.

## Layout container

Wrap page content in the `.container-page` class (defined in `globals.css`)
instead of reaching for `max-w-...mx-auto px-...` every time — it centers
content, clamps to the site's 1440px design width, and applies the fluid
gutter automatically.

## Radius

| Token | Value | Tailwind class |
|---|---|---|
| `--radius-sm` | 8px | `rounded-sm` — buttons, inputs, small chips |
| `--radius-md` | 16px | `rounded-md` — cards, image panels |
| (pill/round) | — | use Tailwind's built-in `rounded-full` |

## Reusable UI building blocks

All in `src/components/ui/`:

- **`Container`** — thin wrapper around `.container-page`.
- **`Button`** — `variant="primary"` (the glassy gradient blue CTA used
  everywhere on the source site) and `variant="text"` (the underlined
  text-link style used for secondary actions).
- **`Eyebrow`** — small uppercase label pill (used above section headings).
- **`SectionHeading`** — eyebrow + heading + optional supporting copy,
  consistently spaced.
- **`Reveal`** — Framer Motion scroll-reveal wrapper (fade + slide up on
  enter). Use it around anything you want to animate in as the user
  scrolls; it wraps `motion.div` and respects `prefers-reduced-motion`.

Page sections (hero, stats row, team grid, FAQ accordion, etc.) live in
`src/components/sections/` and compose these primitives — reuse them across
pages rather than writing one-off markup.
