import Image from "next/image";
import { SanityImg } from "@/components/ui/SanityImg";
import {
  portraitFraming,
  type PortraitEntry,
  type PortraitFrame,
} from "@/lib/portrait-registry";
import type { SanityImage } from "@/lib/sanity/types";

/** Sanity image asset refs look like `image-<hash>-<w>x<h>-<format>`.
 *  `@sanity/image-url` throws on anything else, which would take the whole
 *  page down — so anything that doesn't match is treated as no image. */
const SANITY_IMAGE_REF = /^image-[A-Za-z0-9]+-\d+x\d+-[a-z0-9]+$/;

function isUsableSanityImage(image: SanityImage | null | undefined): image is SanityImage {
  const asset = image?.asset as { _ref?: unknown; _id?: unknown } | undefined;
  const ref = asset?._ref ?? asset?._id;
  return typeof ref === "string" && SANITY_IMAGE_REF.test(ref);
}

/**
 * One portrait inside an existing card frame. The frame (size, aspect
 * ratio, rounding, background) stays with the caller; this only decides
 * what fills it, in order:
 *
 * 1. the local override from the portrait registry, when enabled;
 * 2. the record's Sanity image, when it is usable;
 * 3. a static local fallback (`fallbackSrc`), where the caller has one;
 * 4. nothing — the caller's empty frame shows through.
 *
 * Every branch renders through `next/image` with `fill`, so the image
 * optimisation, `sizes` and lazy loading are the same as before, and the
 * caller's `className` (object-fit, hover zoom) is applied unchanged.
 */
export function Portrait({
  override,
  image,
  fallbackSrc,
  fallbackAlt,
  frame,
  sizes,
  width,
  className,
}: {
  /** Result of `resolvePortrait()` / `portraitById()`. */
  override?: PortraitEntry;
  image?: SanityImage | null;
  fallbackSrc?: string;
  fallbackAlt: string;
  frame: PortraitFrame;
  sizes: string;
  /** Forwarded to `SanityImg` (CDN request width) — unchanged per caller. */
  width?: number;
  className?: string;
}) {
  if (override) {
    const { focusX, focusY, zoom } = portraitFraming(override, frame);
    const picture = (
      <Image
        src={override.src}
        alt={fallbackAlt}
        fill
        sizes={sizes}
        className={className}
        // Inline so it takes precedence over the caller's `object-top`;
        // the default (50% 0%) is the same position.
        style={{ objectPosition: `${focusX}% ${focusY}%` }}
      />
    );

    if (zoom === 1) return picture;

    // The zoom sits on its own layer so it composes with — rather than
    // replaces — the card's hover scale on the image itself. The frame's
    // `overflow-hidden` clips it.
    return (
      <div
        className="absolute inset-0"
        style={{ transform: `scale(${zoom})`, transformOrigin: `${focusX}% ${focusY}%` }}
      >
        {picture}
      </div>
    );
  }

  if (isUsableSanityImage(image)) {
    return (
      <SanityImg
        image={image}
        fallbackAlt={fallbackAlt}
        fill
        width={width}
        sizes={sizes}
        className={className}
      />
    );
  }

  if (fallbackSrc) {
    return (
      <Image src={fallbackSrc} alt={fallbackAlt} fill sizes={sizes} className={className} />
    );
  }

  return null;
}
