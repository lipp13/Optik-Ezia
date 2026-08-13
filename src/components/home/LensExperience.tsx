"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LENS_COATINGS } from "@/data/services";
import { Eye, Shield, Sun, Sparkles } from "lucide-react";

export default function LensExperience() {
  const [activeLensIndex, setActiveLensIndex] = useState(0);
  const activeLens = LENS_COATINGS[activeLensIndex];

  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Optical Engineering
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase">
            The Lens <span className="italic text-ezia-champagne font-normal">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base font-light text-ezia-warm-gray/70">
            Engineered with German freeform digital surfacing to deliver sub-micron visual clarity and maximum ocular protection.
          </p>
        </div>

        {/* Sticky Interactive Dual Panel Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Refraction Visual Simulator */}
          <div className="lg:col-span-6">
            <div className="relative flex h-[380px] md:h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-ezia-warm-gray/20 bg-gradient-to-b from-ezia-charcoal/60 via-ezia-black to-ezia-black p-8 shadow-2xl">
              {/* Dynamic Refraction Lens Outer Silhouette */}
              <motion.div
                key={activeLensIndex}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex h-64 w-64 items-center justify-center rounded-full border border-ezia-champagne/40 bg-gradient-to-tr from-ezia-accent/20 via-transparent to-ezia-champagne/20 shadow-2xl backdrop-blur-md"
              >
                {/* Refraction Beam Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`h-[2px] w-full bg-gradient-to-r ${
                      activeLensIndex === 0
                        ? "from-cyan-400 via-ezia-champagne to-blue-500"
                        : activeLensIndex === 1
                        ? "from-blue-600 via-purple-500 to-cyan-300"
                        : activeLensIndex === 2
                        ? "from-amber-400 via-yellow-600 to-stone-800"
                        : "from-teal-300 via-emerald-400 to-cyan-500"
                    } blur-[1px] transition-all duration-700`}
                  />
                </div>

                {/* Inner Focal Core Ring */}
                <div className="h-32 w-32 rounded-full border border-ezia-ivory/30 bg-ezia-charcoal/40 flex flex-col items-center justify-center text-center p-2 backdrop-blur-lg">
                  <Eye className="h-6 w-6 text-ezia-champagne" />
                  <span className="mt-2 text-[10px] font-semibold tracking-widest text-ezia-ivory uppercase">
                    100% CLEAR
                  </span>
                </div>
              </motion.div>

              {/* Simulation Status Indicator */}
              <div className="mt-6 flex items-center space-x-3 text-xs uppercase tracking-widest text-ezia-warm-gray/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Simulating: {activeLens.name}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Coating Selection & Detailed Specs */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {LENS_COATINGS.map((coating, i) => {
                const isActive = activeLensIndex === i;
                return (
                  <div
                    key={coating.name}
                    onClick={() => setActiveLensIndex(i)}
                    className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                      isActive
                        ? "border-ezia-champagne bg-ezia-charcoal/50 shadow-xl"
                        : "border-ezia-warm-gray/10 bg-ezia-charcoal/10 hover:border-ezia-warm-gray/30 hover:bg-ezia-charcoal/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-champagne">
                        0{i + 1} — {coating.tag}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-ezia-champagne/20 px-3 py-1 text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase">
                          Active Coating
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-2 font-serif text-2xl font-light ${
                        isActive ? "text-ezia-champagne" : "text-ezia-ivory"
                      }`}
                    >
                      {coating.name}
                    </h3>

                    <p className="mt-3 text-xs md:text-sm text-ezia-warm-gray/70 font-light leading-relaxed">
                      {coating.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
