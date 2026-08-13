"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Eye, Sun, Shield, ExternalLink } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";

const FullGlassesCanvas = dynamic(
  () => import("@/components/3d/FullGlassesCanvas"),
  {
    ssr: false,
    loading: () => null,
  }
);

const FRAME_FINISHES = [
  { id: "gold", label: "Champagne Gold", hex: "#E5DFC8" },
  { id: "silver", label: "Raw Silver", hex: "#E2E8F0" },
  { id: "obsidian", label: "Matte Obsidian", hex: "#18191B" },
  { id: "rose", label: "Rose Gold", hex: "#E8C8C0" },
] as const;

const LENS_MODES = [
  { id: "clear", label: "Jernih Optik", icon: Eye },
  { id: "polarized", label: "Polarized Sun", icon: Sun },
  { id: "blueguard", label: "BlueGuard Shield", icon: Shield },
] as const;

export default function Hero() {
  const [selectedFinish, setSelectedFinish] = useState<"gold" | "silver" | "obsidian" | "rose">("gold");
  const [selectedLens, setSelectedLens] = useState<"clear" | "polarized" | "blueguard" | "rose">("clear");

  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full overflow-hidden bg-ezia-black pt-28 pb-16 md:pt-36 lg:pt-40 flex items-center">
      {/* --- FULL-BLEED ULTRA-LIGHTWEIGHT 3D BACKGROUND STAGE --- */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <FullGlassesCanvas colorway={selectedFinish} lensMode={selectedLens} />
      </div>

      {/* Ambient Lighting Overlays */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ezia-accent/20 via-ezia-black/60 to-ezia-black" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-ezia-champagne/10 blur-[160px] animate-pulse-subtle" />

      {/* Foreground Editorial Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 flex flex-col justify-between min-h-[75vh]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center space-x-2.5 self-start rounded-full border border-hairline bg-ezia-charcoal/40 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-ezia-champagne" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-ezia-champagne uppercase font-mono">
              Dunia Penglihatan Presisi
            </span>
          </motion.div>

          <h1 className="text-clamp-editorial-hero font-serif font-light text-ezia-ivory tracking-tight uppercase leading-[0.94]">
            <AnimatedText text="LIHAT DUNIA" /> <br />
            <span className="font-normal italic text-ezia-champagne">
              Cara Berbeda.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base md:text-lg font-light leading-relaxed text-ezia-stone">
            &quot;Terangkan matamu seperti air 💧&quot; — Perpaduan presisi optik Jerman dengan ketelitian buatan tangan titanium Jepang. Kacamata yang dirancang khusus untuk kenyamanan penglihatan Anda.
          </p>

          {/* Action Call-to-Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton>
              <Link
                href="/collection"
                data-cursor="view"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ezia-ivory px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Jelajahi Koleksi</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://linktr.ee/optikezia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 rounded-full border border-hairline bg-ezia-charcoal/40 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:border-ezia-champagne hover:bg-ezia-charcoal/80 backdrop-blur-md"
              >
                <ExternalLink className="h-4 w-4 text-ezia-champagne" />
                <span>Linktree Resmi</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Metadata & Floating Minimal Studio Customizer Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-hairline pt-6">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <span className="block font-serif text-2xl font-light text-ezia-champagne">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-ezia-stone font-mono">Optik ZEISS</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-light text-ezia-ivory">6+</span>
              <span className="text-[10px] uppercase tracking-widest text-ezia-stone font-mono">Boutique</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-light text-ezia-ivory">12g</span>
              <span className="text-[10px] uppercase tracking-widest text-ezia-stone font-mono">Titanium</span>
            </div>
          </div>

          {/* Minimal Integrated Customizer Toolbar */}
          <div className="w-full md:w-auto rounded-2xl border border-hairline bg-ezia-black/80 p-3 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            {/* Finishes */}
            <div className="flex items-center space-x-2">
              <span className="text-[9px] uppercase tracking-widest text-ezia-stone font-mono">
                Warna Bingkai:
              </span>
              {FRAME_FINISHES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinish(f.id)}
                  title={f.label}
                  className={`h-5 w-5 rounded-full border transition-transform ${
                    selectedFinish === f.id ? "scale-125 border-ezia-champagne ring-2 ring-ezia-champagne/30" : "border-white/20 opacity-70"
                  }`}
                  style={{ backgroundColor: f.hex }}
                />
              ))}
            </div>

            {/* Lens Tints */}
            <div className="flex items-center space-x-1.5">
              <span className="text-[9px] uppercase tracking-widest text-ezia-stone font-mono">
                Lensa:
              </span>
              {LENS_MODES.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLens(l.id)}
                  className={`rounded-full border px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider transition-colors ${
                    selectedLens === l.id
                      ? "border-ezia-champagne bg-ezia-champagne/20 text-ezia-champagne"
                      : "border-hairline bg-ezia-black/40 text-ezia-stone"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
