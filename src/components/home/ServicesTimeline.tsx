"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_PROCESS } from "@/data/services";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

export default function ServicesTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
              Master Ocular Care
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase">
              Your Vision Deserves <br />
              <span className="italic text-ezia-champagne font-normal">Precision.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <span>Book 5-Stage Examination</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Step Process: Responsive Layout (Mobile Vertical, Desktop Multi-Card Timeline) */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {SERVICES_PROCESS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-ezia-warm-gray/15 bg-gradient-to-b from-ezia-charcoal/30 to-ezia-black p-6 transition-all duration-300 hover:border-ezia-champagne/50 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ezia-warm-gray/10 pb-4">
                  <span className="font-serif text-3xl font-light text-ezia-champagne">
                    {step.stepNumber}
                  </span>
                  <span className="rounded-full bg-ezia-warm-gray/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-ezia-warm-gray/70">
                    {step.equipmentTag}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-ezia-warm-gray/60 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t border-ezia-warm-gray/10 pt-4">
                <ul className="space-y-2 text-[11px] text-ezia-warm-gray/70">
                  {step.detailPoints.map((point) => (
                    <li key={point} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="h-3 w-3 text-ezia-champagne shrink-0" />
                      <span className="truncate">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Examination CTA Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between rounded-2xl border border-ezia-champagne/30 bg-gradient-to-r from-ezia-charcoal/60 via-ezia-black to-ezia-charcoal/60 p-8">
          <div>
            <h4 className="font-serif text-2xl font-light text-ezia-ivory">
              Ready for your digital vision assessment?
            </h4>
            <p className="mt-1 text-xs text-ezia-warm-gray/60 font-light">
              Appointments take 30 minutes. Complimentary lens consultation included.
            </p>
          </div>

          <Link
            href="/services"
            className="mt-6 sm:mt-0 rounded-full bg-ezia-champagne px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black transition-transform hover:scale-105 active:scale-95"
          >
            Schedule Examination
          </Link>
        </div>
      </div>
    </section>
  );
}
