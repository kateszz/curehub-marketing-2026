import { personSlug } from "@/lib/researchers";

/**
 * Local Portrait Override Layer (WP-02B).
 *
 * The founder-approved portraits live in `public/images/team/` and replace
 * the Sanity photos on Our Team and Why Trust Us without touching the CMS.
 * Every other field (names, titles, biographies, order, slugs) still comes
 * from Sanity unchanged.
 *
 * Identity evidence: content-studio/approvals/WP-02B_APPROVED_MAPPING.json
 * (published-perspective CMS records, founder-approved).
 *
 * Rollback: set `PORTRAIT_OVERRIDES_ENABLED` to `false` and every surface
 * renders exactly what it rendered before — the Sanity image, or Dr.
 * Spisák's original local file on Why Trust Us.
 */
export const PORTRAIT_OVERRIDES_ENABLED = true;

/** Upper bound for per-person zoom. The 4:5 crop of a 1254 px source is
 *  already close to its native resolution on large 2x screens, so anything
 *  beyond this would visibly soften the image. */
export const MAX_PORTRAIT_ZOOM = 1.1;

/** The two frame shapes the portrait cards use: 4:5 (Leadership, Research
 *  Team, the Why Trust Us profiles) and 1:1 (Development Team). */
export type PortraitFrame = "portrait" | "square";

/**
 * Optional per-person framing inside a frame. All values are uniform —
 * the image is never stretched.
 *
 * - `focusX` / `focusY`: the point (in % of the frame) that stays fixed
 *   when zooming; also used as the image's `object-position`. The default
 *   `50% 0%` reproduces the existing `object-top` behaviour exactly.
 * - `zoom`: uniform scale, 1 to `MAX_PORTRAIT_ZOOM`.
 */
export type PortraitFraming = {
  focusX?: number;
  focusY?: number;
  zoom?: number;
};

export type PortraitEntry = {
  /** Stable registry key — the person's existing anchor slug. */
  id: string;
  /** Path under `public/`. */
  src: string;
  /** Intrinsic size of the original file (documentation and QA only). */
  width: number;
  height: number;
  /** Verified Sanity document IDs — the primary identity evidence. */
  cmsIds: readonly string[];
  /** Approved name keys, already normalised with `personSlug()`: the
   *  verified CMS name and the founder-approved Hungarian-order name. */
  aliases: readonly string[];
  framing?: Partial<Record<PortraitFrame, PortraitFraming>>;
};

export const PORTRAITS: readonly PortraitEntry[] = [
  // ---- Leadership (4:5) --------------------------------------------------
  {
    id: "mark-erdelyi",
    src: "/images/team/erdelyi-mark.jpg",
    width: 1021,
    height: 1280,
    cmsIds: ["teamMember-mark-erdelyi"],
    aliases: ["mark-erdelyi", "erdelyi-mark"],
    // The only 4:5 source in the set, shot wider than the others: at the
    // neutral framing the head is ~39% of the frame height against ~50–60%
    // for the other two Leadership portraits, and the eyes sit at ~29%.
    // A top-anchored 1.10 zoom brings the eye line to ~32% (matching
    // Fehérváry and Spisák) and the head to ~43%, without clipping the hair.
    framing: { portrait: { focusX: 50, focusY: 0, zoom: 1.1 } },
  },
  {
    id: "csaba-fehervary",
    src: "/images/team/fehervary-csaba.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["teamMember-csaba-fehervary"],
    aliases: ["csaba-fehervary", "fehervary-csaba"],
  },
  {
    id: "sandor-spisak",
    src: "/images/team/spisak-sandor.jpg",
    width: 1254,
    height: 1254,
    // Also rendered on Why Trust Us outside the CMS — see
    // ScienceFoundationSection, which looks this entry up by `id`.
    cmsIds: ["teamMember-dr-sandor-spisak"],
    aliases: ["sandor-spisak", "spisak-sandor"],
  },

  // ---- Research Team (4:5) + Why Trust Us researcher profiles (4:5) ------
  {
    id: "andras-hajdu",
    src: "/images/team/hajdu-andras.jpg",
    width: 1254,
    height: 1254,
    cmsIds: [
      "59088595-4d07-45d1-952b-70e43437ef03", // teamMember
      "779e6916-df7f-4473-a4b6-0b8127c351bb", // researcher
    ],
    aliases: ["andras-hajdu", "hajdu-andras"],
  },
  {
    id: "gabor-szederkenyi",
    src: "/images/team/szederkenyi-gabor.jpg",
    width: 1254,
    height: 1254,
    cmsIds: [
      "77401453-6275-48cc-a177-34529211c0ea", // teamMember
      "6b8e7519-7633-4662-9901-d52f46717832", // researcher
    ],
    aliases: ["gabor-szederkenyi", "szederkenyi-gabor"],
  },
  {
    id: "adrienne-csutak",
    src: "/images/team/csutak-adrienne.jpg",
    width: 1254,
    height: 1254,
    cmsIds: [
      "7e0d22e7-c596-4527-985d-cde8b01a2e78", // teamMember
      "e0228474-9f0a-498d-b5ae-db7b5a7b2f11", // researcher
    ],
    aliases: ["adrienne-csutak", "csutak-adrienne"],
  },
  {
    id: "andras-horvath",
    src: "/images/team/horvath-andras.jpg",
    width: 1248,
    height: 1248,
    cmsIds: [
      "3b74783d-7e8a-487e-b3b8-85afde94428b", // teamMember
      "1cbc8f26-abd3-4b57-8498-65064cc36c10", // researcher
    ],
    aliases: ["andras-horvath", "horvath-andras"],
  },

  // ---- Development Team (1:1) --------------------------------------------
  {
    id: "gabor-barta",
    src: "/images/team/barta-gabor.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["5e51760e-8818-480d-b4da-d3ad9437d20a"],
    aliases: ["gabor-barta", "barta-gabor"],
  },
  {
    id: "mark-fialovszky",
    src: "/images/team/fialovszky-mark.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["teamMember-mark-fialovszky"],
    aliases: ["mark-fialovszky", "fialovszky-mark"],
  },
  {
    // CMS name "Katalin Dan"; founder-confirmed as Dán Katalin Anna.
    id: "katalin-dan",
    src: "/images/team/dan-katalin-anna.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["teamMember-katalin-dan"],
    aliases: ["katalin-dan", "dan-katalin-anna"],
  },
  {
    // Original file prefix 26d281ef — founder-confirmed as Muhammad Saad.
    id: "muhammad-saad",
    src: "/images/team/muhammad-saad.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["teamMember-muhammad-saad"],
    aliases: ["muhammad-saad"],
  },
  {
    id: "syed-abdul-wahab",
    src: "/images/team/syed-abdul-wahab.jpg",
    width: 1254,
    height: 1254,
    cmsIds: ["teamMember-syed-wahab"],
    aliases: ["syed-abdul-wahab"],
  },
];

/* ---- Index + integrity checks --------------------------------------------
 * Built once at module load. Any duplicate or malformed entry throws, which
 * fails `next build` — an ambiguous mapping can never reach production. */

const BY_ID = new Map<string, PortraitEntry>();
const BY_CMS_ID = new Map<string, PortraitEntry>();
const BY_ALIAS = new Map<string, PortraitEntry>();

for (const entry of PORTRAITS) {
  if (BY_ID.has(entry.id)) {
    throw new Error(`[portrait-registry] Duplicate id "${entry.id}".`);
  }
  BY_ID.set(entry.id, entry);

  if (!entry.src.startsWith("/images/team/")) {
    throw new Error(`[portrait-registry] "${entry.id}" must live under /images/team/.`);
  }

  for (const cmsId of entry.cmsIds) {
    if (BY_CMS_ID.has(cmsId)) {
      throw new Error(`[portrait-registry] CMS id "${cmsId}" is mapped twice.`);
    }
    BY_CMS_ID.set(cmsId, entry);
  }

  for (const alias of entry.aliases) {
    if (alias !== personSlug(alias)) {
      throw new Error(`[portrait-registry] Alias "${alias}" is not a normalised name key.`);
    }
    if (BY_ALIAS.has(alias)) {
      throw new Error(`[portrait-registry] Alias "${alias}" is mapped twice.`);
    }
    BY_ALIAS.set(alias, entry);
  }

  for (const framing of Object.values(entry.framing ?? {})) {
    const zoom = framing?.zoom ?? 1;
    if (zoom < 1 || zoom > MAX_PORTRAIT_ZOOM) {
      throw new Error(
        `[portrait-registry] "${entry.id}" zoom ${zoom} is outside 1–${MAX_PORTRAIT_ZOOM}.`
      );
    }
  }
}

/* ---- Resolution ---------------------------------------------------------- */

/** The identity evidence a CMS record carries. */
export type PortraitSubject = {
  _id?: string;
  name?: string;
  slug?: { current?: string } | null;
};

/**
 * The local portrait for a CMS record, or `undefined` to keep the Sanity
 * image.
 *
 * Deterministic and exact: the document `_id`, the normalised name
 * (`personSlug`) and the Studio slug are each looked up exactly — no fuzzy
 * or first-name matching. An override is applied only when every piece of
 * evidence that matches anything points at the *same* person; if they
 * disagree, nothing is overridden. Unknown and future records fall through
 * to their Sanity image untouched.
 */
export function resolvePortrait(subject: PortraitSubject): PortraitEntry | undefined {
  if (!PORTRAIT_OVERRIDES_ENABLED) return undefined;

  const slug = subject.slug?.current?.trim();
  const candidates = [
    subject._id ? BY_CMS_ID.get(subject._id) : undefined,
    subject.name ? BY_ALIAS.get(personSlug(subject.name)) : undefined,
    slug ? BY_ALIAS.get(slug) : undefined,
  ].filter((entry): entry is PortraitEntry => entry !== undefined);

  const matches = new Set(candidates);
  return matches.size === 1 ? candidates[0] : undefined;
}

/** Direct lookup for surfaces that render a person outside the CMS (Dr.
 *  Spisák on Why Trust Us). */
export function portraitById(id: string): PortraitEntry | undefined {
  return PORTRAIT_OVERRIDES_ENABLED ? BY_ID.get(id) : undefined;
}

/** The framing for an entry in a given frame shape, with defaults applied
 *  (`50% 0%`, no zoom — identical to the existing `object-top`). */
export function portraitFraming(
  entry: PortraitEntry,
  frame: PortraitFrame
): Required<PortraitFraming> {
  const framing = entry.framing?.[frame];
  return {
    focusX: framing?.focusX ?? 50,
    focusY: framing?.focusY ?? 0,
    zoom: framing?.zoom ?? 1,
  };
}
