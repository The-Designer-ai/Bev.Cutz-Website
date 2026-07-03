"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why BEV.CUTS"
          title="Consistent detail from first pass to final lineup."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass rounded-lg p-5"
            >
              <CheckCircle2 className="h-6 w-6 text-blood" />
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
