"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_PROCESS } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareStory() {
  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">04 / KESEHATAN MATA</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">PROTOKOL DIAGNOSTIK</span>
        </div>

        {/* Headline */}
        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
              04
            </span>
            <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
              Mata Anda Layak <span className="italic text-ezia-champagne font-normal">Mendapatkan Perhatian.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.22em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <span>Buat Janji 5 Tahapan Periksa</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Vertical Editorial Protocol Timeline */}
        <div className="mt-20 space-y-8">
          {SERVICES_PROCESS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-hairline bg-ezia-charcoal/20 p-8 transition-all duration-300 hover:border-ezia-champagne/50 hover:bg-ezia-charcoal/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-6">
                <span className="font-serif text-4xl font-light text-ezia-champagne shrink-0">
                  {step.stepNumber}
                </span>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-stone font-mono">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-ezia-stone font-light max-w-2xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-hairline pt-4 lg:pt-0 lg:pl-8 shrink-0">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-champagne font-mono">
                  {step.equipmentTag}
                </span>
                <ul className="mt-2 space-y-1 text-xs text-ezia-stone">
                  {step.detailPoints.map((point) => (
                    <li key={point} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-ezia-champagne shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
