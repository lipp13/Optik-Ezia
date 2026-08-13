"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

export default function VisionStory() {
  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Technical Label */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">01 / SISTEM PENGLIHATAN</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">OPTIK EZIA EDITORIAL</span>
        </div>

        {/* Large Asymmetrical Headline */}
        <div className="mt-16 max-w-5xl">
          <h2 className="text-clamp-editorial-statement font-serif font-light uppercase tracking-tight text-ezia-ivory leading-[0.98]">
            <AnimatedText text="KAMI TIDAK HANYA" /> <br />
            <AnimatedText text="MELIHAT." /> <br />
            <span className="italic text-ezia-champagne font-normal">
              <AnimatedText text="KAMI MERASAKAN." />
            </span>
          </h2>
        </div>

        {/* Asymmetric Content Layout with Large Negative Space */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          {/* Paragraph copy placed on the right column */}
          <div className="lg:col-start-7 lg:col-span-6 space-y-6">
            <p className="text-base md:text-xl font-light text-ezia-ivory/80 leading-relaxed">
              Penglihatan bukan sekadar cahaya yang jatuh di retina. Penglihatan adalah cara kita memaknai arsitektur, gaya hidup, emosi, dan detail di sekitar kita.
            </p>
            <p className="text-sm md:text-base font-light text-ezia-stone leading-relaxed">
              Kami merancang bingkai kacamata sebagai objek arsitektural yang menyatu harmoni dengan struktur wajah, dipadukan dengan permukaan lensa digital presisi Jerman.
            </p>

            <div className="pt-6 border-t border-hairline flex items-center justify-between text-[11px] text-ezia-stone uppercase tracking-widest font-mono">
              <span>REFRAKSI WAVEFRONT JERMAN</span>
              <span>BETA-TITANIUM JEPANG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
