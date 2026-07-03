"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title="Premium cuts. Clear prices."
          text="Simple booking, polished results, and service options that match the finish you want."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group glass rounded-lg p-5 transition hover:-translate-y-1 hover:border-blood/50"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blood/15 text-blood">
                  <Scissors className="h-5 w-5" />
                </span>
                <span className="font-display text-2xl font-bold text-white">{service.price}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{service.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
