"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "This is what Curehub is all about" — explainer video block.
 * Drop an .mp4 at /public/videos/explainer.mp4 (or pass a different
 * `src`) to wire up real footage; until then it renders a poster frame
 * with a play affordance so the layout is complete either way.
 */
export function IntroVideo({ src = "/videos/explainer.mp4" }: { src?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="py-section-md bg-radial-[at_80%_95%] from-brand-500 to-ink to-90% text-snow">
      <Container className="flex flex-col items-center gap-fluid-3xl text-center">
        <Reveal>
          <h2 className="text-h2 max-w-2xl">
            <span className="text-brand-600">This is what Curehub</span> is all about
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="w-full">
          <button
            type="button"
            onClick={toggle}
            className="group relative aspect-video w-full overflow-hidden rounded-md bg-ink shadow-[0_20px_60px_-20px_rgba(20,2,46,0.4)]"
          >
            <video
              ref={videoRef}
              src={src}
              muted
              loop
              playsInline
              className="size-full object-cover opacity-90"
            />
            {!playing && (
              <span className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/20">
                <span className="flex size-16 items-center justify-center rounded-full bg-snow/90 text-ink">
                  <svg viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            )}
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
