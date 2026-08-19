"use client";

import { motion } from "framer-motion";

/**
 * Full-bleed video/gradient hero for the homepage.
 *
 * The original site streamed an HLS video (via a third-party CDN,
 * with the playback URL hard-coded in page JS) as the background. That
 * URL is specific to the old Webflow host's video account, so it isn't
 * something we can safely carry over — plug your own hosted video into
 * `videoSrc` (an .mp4 works with a plain <video> tag; swap back to
 * hls.js only if you specifically need adaptive HLS streaming) and it
 * will autoplay behind the gradient exactly like the original.
 */
export function VideoHero({ videoSrc }: { videoSrc?: string }) {
  return (
    <section className="sectionhero relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-500">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url(/images/blue-snow-mesh.svg)" }}
        aria-hidden="true"
      />
      {videoSrc && (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-h1 relative px-gutter text-center text-snow drop-shadow-[0_4px_24px_rgba(20,2,46,0.35)]"
      >
        Your DNA is the Map, we are the Guide.
      </motion.h1>
    </section>
  );
}
