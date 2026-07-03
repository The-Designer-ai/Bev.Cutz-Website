"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden px-5 py-6 sm:px-8">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blood/20 blur-3xl sm:h-[34rem] sm:w-[34rem]"
        animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl sm:inset-x-8">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.3em] text-white">
          BEV.CUTS
        </a>
        <a
          href={siteConfig.instagramUrl}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-blood/60 hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="h-4 w-4 text-blood" />
          {siteConfig.instagramHandle}
        </a>
      </div>
      <div id="top" className="relative z-[1] mx-auto flex w-full max-w-6xl flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blood/30 bg-blood/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-glow">
            Windsor barber culture
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Fresh Cuts. Clean Fades.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-xl sm:leading-8">
            Modern haircuts, tapers, fades, lineups, and transformations by BEV.CUTS.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blood px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-white hover:text-ink"
            >
              <Calendar className="h-4 w-4" />
              Book a $35 Cut
            </a>
            <a
              href="#transformations"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-blood/70 hover:bg-blood/10"
            >
              View Transformations
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
            {["$35 cuts", "Windsor", "@bev.cuts"].map((item) => (
              <div key={item} className="glass rounded-lg px-3 py-4">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
