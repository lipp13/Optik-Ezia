"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FRAME_HIGHLIGHTS = [
  {
    num: "01",
    label: "BAHAN",
    value: "Beta-Titanium Jepang & Asetat Mazzucchelli Italia",
    desc: "Paduan logam aerospace hipoalergenik fleksibel dengan bobot super ringan di bawah 12 gram.",
  },
  {
    num: "02",
    label: "BENTUK",
    value: "Profil Panthos & Geometris Arsitektural",
    desc: "Tepi bingkai berlekuk presisi yang mampu menangkap pantulan cahaya studio dari setiap sudut.",
  },
  {
    num: "03",
    label: "FIT",
    value: "Bantalan Hidung Anatomis & Keseimbangan Tangkai",
    desc: "Distribui tekanan sub-milimeter yang dirancang untuk kenyamanan pemakaian sepanjang hari.",
  },
  {
    num: "04",
    label: "KARAKTER",
    value: "Identitas Minimalis & Elegan",
    desc: "Profil geometris bersih tanpa logo mencolok atau ornamen berlebihan.",
  },
];

export default function FrameStory() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Section Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">02 / BINGKAI KACAMATA</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">OBJEK DESAIN / METADATA</span>
        </div>

        {/* Headline */}
        <div className="mt-16 flex flex-col lg:flex-row lg:items-end justify-between">
          <div>
            <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
              02
            </span>
            <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
              Objek Desain <span className="italic text-ezia-champagne font-normal">Kacamata</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-medium uppercase tracking-[0.22em] text-ezia-ivory transition-colors hover:text-ezia-champagne lg:mt-0"
          >
            <span>Lihat Seluruh Katalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial Metadata Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FRAME_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveHighlight(index)}
              className={`group cursor-pointer rounded-2xl border p-8 transition-all duration-500 ${
                activeHighlight === index
                  ? "border-ezia-champagne/60 bg-ezia-charcoal/40 shadow-2xl"
                  : "border-hairline bg-ezia-charcoal/10 hover:border-hairline/60"
              }`}
            >
              <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
                <span className="font-serif text-2xl font-light text-ezia-champagne">
                  {item.num}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-stone">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                {item.value}
              </h3>

              <p className="mt-3 text-xs text-ezia-stone font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
