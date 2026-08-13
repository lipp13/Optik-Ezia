"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const LENS_NARRATIVE = [
  {
    tag: "01 / JERNIH",
    title: "Transmitansi Sangat Jernih",
    desc: "Lapisan anti-refleksi DuraVision ion yang meminimalkan 99,4% pantulan cahaya mengganggu.",
    coating: "Anti-Reflektif Platinum",
  },
  {
    tag: "02 / KENYAMANAN",
    title: "Pelindung Kelelahan Mata Digital",
    desc: "Saringan radiasi sinar biru (blue light) layar digital untuk menjaga ritme sirkadian alami Anda.",
    coating: "BlueGuard Armor",
  },
  {
    tag: "03 / PERLINDUNGAN",
    title: "Tint Adaptif Photochromic",
    desc: "Bereaksi cepat terhadap intensitas UV luar ruangan untuk kenyamanan penglihatan indoor-outdoor.",
    coating: "PhotoFusion X Adaptive",
  },
  {
    tag: "04 / PRESISI",
    title: "Permukaan Digital Freeform 3D",
    desc: "Teknologi pemahatan lensa presisi 3D Jerman yang dibuat khusus sesuai anatomi unik mata Anda.",
    coating: "ZEISS SmartLife Optic",
  },
];

export default function LensStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = LENS_NARRATIVE[activeIndex];

  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">03 / LENSA DIGITAL</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">TEKNOLOGI OPTIK</span>
        </div>

        {/* Section Headline */}
        <div className="mt-16">
          <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
            03
          </span>
          <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
            Refraksi & Lapisan <span className="italic text-ezia-champagne font-normal">Digital</span>
          </h2>
        </div>

        {/* Sequential Storytelling Split Layout */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Transparent Glass Lens Display */}
          <div className="lg:col-span-6">
            <div className="relative flex h-[380px] md:h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-hairline bg-gradient-to-b from-ezia-charcoal/50 to-ezia-black p-8 shadow-2xl">
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.9, opacity: 0.4 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex h-64 w-64 items-center justify-center rounded-full border border-ezia-champagne/40 bg-gradient-to-tr from-ezia-accent/20 via-transparent to-ezia-champagne/20 shadow-2xl backdrop-blur-md"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-ezia-champagne to-blue-500 blur-[1px] transition-all duration-700" />
                </div>

                <div className="h-32 w-32 rounded-full border border-hairline bg-ezia-charcoal/60 flex flex-col items-center justify-center text-center p-2 backdrop-blur-lg">
                  <Eye className="h-6 w-6 text-ezia-champagne" />
                  <span className="mt-2 text-[10px] font-semibold tracking-widest text-ezia-ivory uppercase font-mono">
                    {activeStep.tag.split(" / ")[1]}
                  </span>
                </div>
              </motion.div>

              <div className="mt-6 text-[10px] uppercase tracking-widest text-ezia-stone font-mono">
                Lapisan Aktif: <span className="text-ezia-champagne font-medium">{activeStep.coating}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Steps */}
          <div className="lg:col-span-6 space-y-4">
            {LENS_NARRATIVE.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={step.tag}
                  onClick={() => setActiveIndex(index)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-ezia-champagne bg-ezia-charcoal/50 shadow-xl"
                      : "border-hairline bg-ezia-charcoal/10 hover:border-hairline/60"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-champagne">
                      {step.tag}
                    </span>
                    {isActive && (
                      <span className="rounded-full bg-ezia-champagne/20 px-3 py-0.5 text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase">
                        Terpilih
                      </span>
                    )}
                  </div>

                  <h3 className={`mt-2 font-serif text-2xl font-light ${isActive ? "text-ezia-champagne" : "text-ezia-ivory"}`}>
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs md:text-sm text-ezia-stone font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
