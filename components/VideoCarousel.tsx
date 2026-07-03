"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { TransformationVideo } from "@/lib/gallery";
import { SectionHeader } from "./SectionHeader";

function VideoTile({
  video,
  onOpen
}: {
  video: TransformationVideo;
  onOpen: (video: TransformationVideo) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void node.play().catch(() => undefined);
        } else {
          node.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group relative block aspect-[9/14] w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] text-left shadow-glass outline-none transition focus-visible:ring-2 focus-visible:ring-blood"
      aria-label={`Open ${video.label} video`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="video-mask absolute inset-0" />
      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
        {video.label}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">{video.caption}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
            BEV.CUTS
          </p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-blood text-white shadow-glow">
          <Maximize2 className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

export function VideoCarousel({ videos }: { videos: TransformationVideo[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [selected, setSelected] = useState<TransformationVideo | null>(null);
  const canUseVideos = videos.length > 0;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="transformations" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div aria-hidden="true" className="absolute right-0 top-20 h-80 w-80 translate-x-1/2 rounded-full bg-blood/15 blur-3xl" />
      <SectionHeader
        eyebrow="Transformations"
        title="A reels-style showcase built for the cut."
        text="Swipe through before-and-after work, fades, tapers, lineups, and finished transformations."
      />

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {canUseVideos ? (
              videos.map((video) => (
                <div key={video.src} className="min-w-0 flex-[0_0_82%] pl-4 sm:flex-[0_0_44%] lg:flex-[0_0_26%]">
                  <VideoTile video={video} onOpen={setSelected} />
                </div>
              ))
            ) : (
              <div className="min-w-0 flex-[0_0_100%] pl-4">
                <div className="glass rounded-lg p-8 text-center text-white/70">
                  Add .mp4 files to /public/gallery.
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 hidden justify-center gap-3 md:flex">
          <button
            type="button"
            onClick={scrollPrev}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-blood hover:bg-blood/15"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-blood hover:bg-blood/15"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/88 px-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.label} video`}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.video
              key={selected.src}
              src={selected.src}
              className="max-h-[88vh] w-full max-w-md rounded-[1.35rem] border border-white/10 object-contain shadow-glow"
              controls
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
