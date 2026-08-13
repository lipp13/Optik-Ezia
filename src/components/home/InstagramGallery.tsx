"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

const IG_POSTS = [
  {
    id: 1,
    title: "Aura Titanium 01 in Raw Silver",
    tag: "@optikezia • Editorial",
    span: "col-span-1 md:col-span-2 row-span-2",
    bgGradient: "from-amber-950/40 via-stone-900/60 to-black",
  },
  {
    id: 2,
    title: "Plaza Senayan Flagship Fitting Room",
    tag: "@optikezia • Studio",
    span: "col-span-1 row-span-1",
    bgGradient: "from-blue-950/40 via-zinc-900/60 to-black",
  },
  {
    id: 3,
    title: "Japanese Beta-Titanium Hinge Detail",
    tag: "@optikezia • Craft",
    span: "col-span-1 row-span-1",
    bgGradient: "from-teal-950/40 via-zinc-900/60 to-black",
  },
  {
    id: 4,
    title: "Solaris Monolith Sun Series",
    tag: "@optikezia • Campaign",
    span: "col-span-1 md:col-span-2 row-span-1",
    bgGradient: "from-yellow-950/40 via-stone-900/60 to-black",
  },
];

export default function InstagramGallery() {
  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
              Social Editorial
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase">
              Follow The <span className="italic text-ezia-champagne font-normal">Ezia World</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/optikezia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <Instagram className="h-4 w-4 text-ezia-champagne" />
            <span>@optikezia on Instagram</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
          {IG_POSTS.map((post) => (
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
              className={`group relative min-h-[260px] md:min-h-[300px] overflow-hidden rounded-2xl border border-ezia-warm-gray/15 bg-ezia-charcoal/40 p-6 flex flex-col justify-between transition-all duration-500 hover:border-ezia-champagne/60 ${post.span}`}
            >
              {/* Background Visual Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${post.bgGradient} transition-transform duration-700 group-hover:scale-110`}
              />

              {/* Vector Eyewear Silhouette Artwork overlay */}
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

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                  {post.tag}
                </span>
                <Instagram className="h-4 w-4 text-ezia-ivory/60 group-hover:text-ezia-champagne transition-colors" />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-xl font-light text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
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
