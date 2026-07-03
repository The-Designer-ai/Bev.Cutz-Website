"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function InstagramCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-blood/25 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.34),transparent_34%),linear-gradient(135deg,rgba(215,25,32,0.2),rgba(255,255,255,0.04))] px-6 py-14 shadow-glow sm:px-10 sm:py-20"
      >
        <div className="absolute inset-0 bg-black/38" />
        <div className="relative z-[1] mx-auto max-w-3xl text-center">
          <Instagram className="mx-auto h-10 w-10 text-blood" />
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            See More Transformations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/68 sm:text-base">
            Watch recent cuts, finished fades, and new openings directly on Instagram.
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-ink transition hover:bg-blood hover:text-white"
          >
            Follow {siteConfig.instagramHandle}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
