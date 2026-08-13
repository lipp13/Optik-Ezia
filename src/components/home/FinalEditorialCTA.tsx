"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

export default function FinalEditorialCTA() {
  return (
    <section className="relative w-full bg-ezia-black py-32 md:py-48 border-t border-hairline overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-ezia-champagne/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">08 / PERNYATAAN AKHIR</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">MULAI PERJALANAN</span>
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <h2 className="text-clamp-editorial-hero font-serif font-light uppercase tracking-tight text-ezia-ivory max-w-5xl leading-[0.95]">
            <AnimatedText text="LIHAT APA YANG" /> <br />
            <span className="italic text-ezia-champagne font-normal">
              <AnimatedText text="SELANJUTNYA." />
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base md:text-xl font-light text-ezia-stone leading-relaxed">
            Temukan kacamata yang dirancang khusus sesuai cara Anda melihat dunia. Rasakan pemeriksaan penglihatan digital presisi dan penyetelan bingkai kustom di gerai boutique kami.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono">
            <Link
              href="/collection"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ezia-champagne px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Jelajahi Koleksi</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/stores"
              className="group flex items-center space-x-2 rounded-full border border-hairline bg-ezia-charcoal/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:border-ezia-champagne hover:bg-ezia-charcoal/80"
            >
              <MapPin className="h-4 w-4 text-ezia-champagne" />
              <span>Temukan Gerai</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
