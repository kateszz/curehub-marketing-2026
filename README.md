# Curehub Website

Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + Sanity, rebuilt
from the original Webflow export. See `DESIGN_SYSTEM.md` for the full design
token reference (fonts, colors, type scale, spacing scale, components).

## Stack

- **Next.js 16** — App Router, React Server Components, TypeScript
- **Tailwind CSS v4** — CSS-first config, all design tokens live in
  `src/app/globals.css`
- **Framer Motion** — scroll reveals (`src/components/ui/Reveal.tsx`), the
  mobile nav menu, and button micro-interactions
- **Sanity** — embedded Studio at `/studio`, two document types:
  `teamMember` and `researcher` (see `src/sanity/schemaTypes/`)

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project (free, ~2 minutes)

This project's Studio and content fetching need a real Sanity project ID —
there isn't one wired up yet.

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a free
   account if you don't have one.
2. Click **Create project**. Give it any name (e.g. "Curehub"). When asked
   for a dataset, use `production`.
3. Copy the **Project ID** shown on the project's overview page.
4. Duplicate `.env.local.example` as `.env.local` and fill in:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<paste your project ID>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
   ```

5. In [sanity.io/manage](https://www.sanity.io/manage) → your project →
   **API** → **CORS origins**, add `http://localhost:3000` (allow
   credentials) so the embedded Studio can talk to the API in dev. Add your
   real domain here too once you deploy.

### 3. Run it

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Studio (CMS): [http://localhost:3000/studio](http://localhost:3000/studio)
  — sign in with the same account you used to create the Sanity project.

### 4. Add content

The **Our Team** page (`/our-team`) reads two collections live from Sanity:

- **Team Members** — name, photo, position, description, team category
  (Leadership / Science & Research / Product & Engineering / Operations &
  Growth / Advisors), and a ranking number that controls sort order within
  a category.
- **Researchers** — name, academic title, photo, background, key
  achievements (a list), and their contribution to Curehub.

Both collections start empty — the page shows a friendly "coming soon, add
in the Studio" placeholder until you add real entries at `/studio`. Once you
publish a document there, refresh the page (or wait up to 60 seconds — the
page revalidates automatically) to see it appear.

## Project structure

```
src/
  app/
    (site)/            marketing pages — each is a route folder + page.tsx
    studio/[[...tool]]/ embedded Sanity Studio
    api/contact/        contact form handler (see note below)
    globals.css          all design tokens (@theme block) + base styles
  components/
    ui/                 primitives: Button, Container, Eyebrow, Reveal, ...
    layout/              Navbar, Footer
    sections/            page sections, grouped by page folder where page-
                          specific, or shared (ContactSection, PageHero)
  lib/
    fonts.ts             self-hosted Epilogue + Syne via next/font/local
    sanity/               Sanity client, image URL builder, GROQ queries,
                          TypeScript types
  sanity/
    schemaTypes/          teamMember.ts, researcher.ts
    structure.ts          Studio sidebar grouping
sanity.config.ts          Studio config (embedded at /studio)
DESIGN_SYSTEM.md          design token reference — read this first
```

## Notes on things intentionally left as follow-ups

- **Contact form** (`src/app/api/contact/route.ts`): the original Webflow
  site posted straight to Sender.net from the browser with an API bearer
  token hard-coded in client-side JS (visible in the page source). That's
  not safe to carry over, so this route accepts the submission server-side
  and currently just logs it — wire up your real email/CRM provider there
  (the TODO comment in the file shows where). **If that Sender.net token is
  still live, rotate/revoke it** — it was exposed in the public Webflow
  export.
- **Homepage explainer video** (`src/components/sections/home/IntroVideo.tsx`)
  and **hero background video** (`src/components/sections/home/VideoHero.tsx`):
  the original site streamed video via a third-party CDN account tied to the
  old Webflow host — not something we could carry over. Both components are
  built and styled, just pointing at placeholder paths (`/videos/...`) —
  drop real `.mp4` files in `public/videos/` (or update the `src`/`videoSrc`
  props) to wire up real footage.
- **No sitemap.xml / robots.txt yet** — worth adding before this goes live
  for SEO (`src/app/sitemap.ts` and `src/app/robots.ts` are the App Router
  convention).
- **Images**: the Webflow export included multiple pre-resized versions of
  every photo (e.g. `cover-p-500.webp`, `cover-p-800.webp`, ...) since
  Webflow doesn't do on-demand resizing. Next.js's `<Image>` component
  resizes on demand from a single source file, so only the largest/master
  version of each image was carried over into `public/images/` — you don't
  need the other sizes.

## Deploying

This is a standard Next.js app — [Vercel](https://vercel.com) (made by the
Next.js team) is the path of least resistance: connect the repo, add the
same three `NEXT_PUBLIC_SANITY_*` environment variables in the project
settings, deploy. Any other Node host works too (`npm run build && npm run
start`).
