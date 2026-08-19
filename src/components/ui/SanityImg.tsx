import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/sanity/types";

/** Renders a Sanity CMS image through next/image, with automatic
 *  CDN-side resizing via @sanity/image-url. */
export function SanityImg({
  image,
  fallbackAlt,
  sizes,
  className,
  fill,
  width,
  height,
}: {
  image: SanityImage;
  fallbackAlt: string;
  sizes?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  const w = width ?? 800;
  const h = height ?? 800;
  const src = fill
    ? urlFor(image).width(w * 2).fit("crop").url()
    : urlFor(image).width(w * 2).height(h * 2).fit("crop").url();

  if (fill) {
    return (
      <Image
        src={src}
        alt={image.alt || fallbackAlt}
        fill
        sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={image.alt || fallbackAlt}
      width={w}
      height={h}
      sizes={sizes}
      className={className}
    />
  );
}
