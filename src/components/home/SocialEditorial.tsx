"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

const COLLAGE_POSTS = [
  { id: 1, title: "Aura Titanium 01 Varian Raw Silver", tag: "@optikezia • 001", span: "col-span-1 md:col-span-2 row-span-2", bg: "from-amber-950/40 via-stone-900/60 to-black" },
  { id: 2, title: "Ruang Fitting Plaza Senayan", tag: "@optikezia • 002", span: "col-span-1 row-span-1", bg: "from-blue-950/40 via-zinc-900/60 to-black" },
  { id: 3, title: "Engsel Presisi Beta-Titanium", tag: "@optikezia • 003", span: "col-span-1 row-span-1", bg: "from-teal-950/40 via-zinc-900/60 to-black" },
  { id: 4, title: "Seri Sun Monolith Solaris", tag: "@optikezia • 004", span: "col-span-1 md:col-span-2 row-span-1", bg: "from-yellow-950/40 via-stone-900/60 to-black" },
];

export default function SocialEditorial() {
  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">07 / DUNIA SOSIAL</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">KOLASE INSTAGRAM</span>
        </div>

        {/* Headline */}
        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
              07
            </span>
            <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
              Ikuti Dunia <span className="italic text-ezia-champagne font-normal">Optik Ezia</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/optikezia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.22em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0 font-mono"
          >
            <Instagram className="h-4 w-4 text-ezia-champagne" />
            <span>@optikezia di Instagram</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Fashion Image Collage */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
          {COLLAGE_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/optikezia/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-cursor="view"
              className={`group relative min-h-[260px] md:min-h-[300px] overflow-hidden rounded-3xl border border-hairline bg-ezia-charcoal/40 p-8 flex flex-col justify-between transition-all duration-500 hover:border-ezia-champagne/60 ${post.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-tr ${post.bg} transition-transform duration-700 group-hover:scale-110`} />

              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                <svg
                  className="h-32 w-48 text-ezia-ivory/60"
                  viewBox="0 0 200 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 85 45 Q 100 38 115 45" />
                  <rect x="25" y="28" width="60" height="42" rx="14" />
                  <rect x="115" y="28" width="60" height="42" rx="14" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between border-b border-hairline pb-4 font-mono">
                <span className="editorial-tag">{post.tag}</span>
                <Instagram className="h-4 w-4 text-ezia-ivory/60 group-hover:text-ezia-champagne transition-colors" />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-light text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
