"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-28 md:py-40 border-t border-ezia-warm-gray/10">
      {/* Subtle Central Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-ezia-champagne/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative flex flex-col items-center text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Begin Your Optical Journey
          </span>

          <h2 className="mt-6 font-serif text-clamp-heading font-light uppercase tracking-tight text-ezia-ivory max-w-4xl leading-[1.02]">
            See What’s <br />
            <span className="italic text-ezia-champagne font-normal">Next.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base md:text-lg font-light text-ezia-warm-gray/80 leading-relaxed">
            Discover eyewear designed around the way you see. Experience precision digital examination and bespoke frame fitting in our flagship stores.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/collection"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ezia-champagne px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/stores"
              className="group flex items-center space-x-2 rounded-full border border-ezia-warm-gray/30 bg-ezia-charcoal/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:border-ezia-champagne hover:bg-ezia-charcoal/80"
            >
              <MapPin className="h-4 w-4 text-ezia-champagne" />
              <span>Find a Store</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
