"use client";

import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function CampaignBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-20 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-ezia-champagne/30 bg-gradient-to-r from-ezia-charcoal/80 via-ezia-black to-ezia-charcoal/80 p-8 md:p-14 lg:flex-row">
          {/* Ambient Lighting background */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-ezia-champagne/10 blur-[100px]" />

          {/* Left Text Column */}
          <div className="z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-ezia-champagne/40 bg-ezia-champagne/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-ezia-champagne">
              <Tag className="h-3 w-3" />
              <span>Seasonal Privilege • Up to 70% Off</span>
            </div>

            <h2 className="mt-6 font-serif text-4xl md:text-6xl font-light uppercase tracking-tight text-ezia-ivory leading-[1.05]">
              See it. Love it. <br />
              <span className="italic text-ezia-champagne font-normal">
                Make it yours.
              </span>
            </h2>

            <p className="mt-4 text-xs md:text-sm font-light text-ezia-warm-gray/70 leading-relaxed">
              Exclusive seasonal spectacle frame privileges and complimentary German digital anti-glare lens upgrades across selected Optik Ezia store boutiques.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/collection"
                className="group inline-flex items-center space-x-2 rounded-full bg-ezia-champagne px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black transition-transform hover:scale-105 active:scale-95"
              >
                <span>Explore Privileges</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Visual Graphic Badge */}
          <div className="relative z-10 mt-10 lg:mt-0 flex flex-col items-center">
            <div className="relative flex h-52 w-52 flex-col items-center justify-center rounded-full border border-ezia-champagne/40 bg-ezia-charcoal/60 p-6 text-center backdrop-blur-md shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-ezia-warm-gray/60 font-medium">
                Privilege Badge
              </span>
              <span className="font-serif text-5xl font-light text-ezia-champagne my-1">
                70%
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-ezia-ivory font-light">
                Off Select Frames
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
