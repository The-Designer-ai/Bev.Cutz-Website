import { Calendar, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function BookingSection() {
  return (
    <section id="book" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px red-line opacity-60" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Booking"
          title="Book Your Appointment"
          text="Choose a time that works for you and secure your next cut instantly."
        />
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="glass rounded-lg p-6 sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-blood text-white shadow-glow">
              <Calendar className="h-5 w-5" />
            </div>
            <h3 className="mt-8 font-display text-3xl font-semibold text-white">
              Lock in the next available chair time.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/62">
              Haircuts start at {siteConfig.basePrice}. For custom timing, questions, or same-day openings,
              send a DM and include the style you want.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blood px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-white hover:text-ink"
              >
                Open Cal.com
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:border-blood/70 hover:bg-blood/10"
              >
                <Instagram className="h-4 w-4 text-blood" />
                DM on Instagram
              </a>
            </div>
          </div>
          <div className="glass min-h-[680px] overflow-hidden rounded-lg p-2">
            <iframe
              title="BEV.CUTS Cal.com booking"
              src={siteConfig.bookingUrl}
              className="h-[680px] w-full rounded-md bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
