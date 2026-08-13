"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { Eye, ShieldCheck, Compass } from "lucide-react";

export default function BrandStatement() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-ezia-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-ezia-champagne"
          >
            <span className="h-[1px] w-8 bg-ezia-champagne/40" />
            <span>The Ezia Vision Philosophy</span>
            <span className="h-[1px] w-8 bg-ezia-champagne/40" />
          </motion.div>

          <h2 className="mt-8 text-clamp-statement font-serif font-light uppercase tracking-tight text-ezia-ivory max-w-5xl leading-[1.08]">
            <AnimatedText text="MORE THAN GLASSES." /> <br />
            <span className="text-ezia-champagne italic font-normal">
              It’s how you see the world.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-ezia-warm-gray/70">
            At Optik Ezia, we merge anatomical eye diagnostic precision with contemporary fashion architecture. Every lens enhances visual clarity while empowering personal expression.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-2xl border border-ezia-warm-gray/10 bg-ezia-charcoal/20 p-8 transition-all duration-300 hover:border-ezia-champagne/40 hover:bg-ezia-charcoal/40 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ezia-champagne/10 text-ezia-champagne transition-transform group-hover:scale-110">
              <Eye className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
              Diagnostic Precision
            </h3>
            <p className="mt-3 text-sm text-ezia-warm-gray/60 font-light leading-relaxed">
              3D digital wavefront refraction analysis measuring sub-micron corneal aberrations for perfect optical correction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl border border-ezia-warm-gray/10 bg-ezia-charcoal/20 p-8 transition-all duration-300 hover:border-ezia-champagne/40 hover:bg-ezia-charcoal/40 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ezia-champagne/10 text-ezia-champagne transition-transform group-hover:scale-110">
              <ShieldCheck className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
              Titanium Mastery
            </h3>
            <p className="mt-3 text-sm text-ezia-warm-gray/60 font-light leading-relaxed">
              Hypoallergenic Japanese titanium and Italian bio-acetate forged for featherweight endurance and effortless comfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-2xl border border-ezia-warm-gray/10 bg-ezia-charcoal/20 p-8 transition-all duration-300 hover:border-ezia-champagne/40 hover:bg-ezia-charcoal/40 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ezia-champagne/10 text-ezia-champagne transition-transform group-hover:scale-110">
              <Compass className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
              End-to-End Care
            </h3>
            <p className="mt-3 text-sm text-ezia-warm-gray/60 font-light leading-relaxed">
              Lifetime frame tuning, complimentary ultrasonic cleansing, and personalized lens prescription follow-ups.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
