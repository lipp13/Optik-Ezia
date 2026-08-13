"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Shield, Sparkles } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative flex h-[400px] lg:h-[520px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-ezia-warm-gray/20 bg-gradient-to-tr from-ezia-charcoal/80 via-ezia-black to-ezia-charcoal/80 p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-ezia-champagne font-medium">
                  Indonesian Optical Mastery
                </span>
                <Sparkles className="h-4 w-4 text-ezia-champagne" />
              </div>

              {/* Vector Artwork Illustration */}
              <div className="my-auto flex flex-col items-center text-center">
                <svg
                  className="h-40 w-64 text-ezia-champagne/80"
                  viewBox="0 0 200 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 85 45 Q 100 38 115 45" />
                  <rect x="25" y="28" width="60" height="42" rx="14" />
                  <rect x="115" y="28" width="60" height="42" rx="14" />
                  <circle cx="55" cy="49" r="12" stroke="rgba(229,223,200,0.5)" />
                  <circle cx="145" cy="49" r="12" stroke="rgba(229,223,200,0.5)" />
                </svg>
                <span className="mt-4 font-serif text-2xl font-light text-ezia-ivory uppercase">
                  Optik Ezia Heritage
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-ezia-warm-gray/10 pt-4 text-xs text-ezia-warm-gray/60">
                <span>Hand-Adjusted Fitting</span>
                <span>ZEISS Digital Equipment</span>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
              Our Identity
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase leading-[1.08]">
              Vision, Style, <br />
              <span className="italic text-ezia-champagne font-normal">
                And Care.
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-base font-light text-ezia-warm-gray/80 leading-relaxed">
              Optik Ezia was founded with a singular purpose: to elevate optical care in Indonesia into a cinematic, modern retail experience. We combine clinical optometrist expertise with handpicked luxury frames forged from aerospace titanium and bio-acetate.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ezia-warm-gray/10 pt-6">
              <div>
                <span className="font-serif text-3xl font-light text-ezia-champagne">
                  6+ Stores
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-widest text-ezia-warm-gray/60">
                  Across Major Indonesian Cities
                </span>
              </div>

              <div>
                <span className="font-serif text-3xl font-light text-ezia-ivory">
                  3D Fitting
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-widest text-ezia-warm-gray/60">
                  Sub-Millimeter Accuracy
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:text-ezia-champagne"
              >
                <span>Read Full Brand Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
