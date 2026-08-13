"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, SlidersHorizontal, Check } from "lucide-react";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";

const CATEGORIES = [
  { id: "all", label: "All Curated" },
  { id: "optical", label: "Optical Frames" },
  { id: "sun", label: "Sunglasses" },
  { id: "contact", label: "Contact Lenses" },
  { id: "kids", label: "Kids Optical" },
];

export default function EditorialCollection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
              Catalogue Showcase
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase">
              Curated <span className="italic text-ezia-champagne font-normal">Eyewear</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <span>View Full Editorial Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Pills Filter Bar */}
        <div className="mt-10 flex items-center space-x-2 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-ezia-champagne text-ezia-black shadow-lg"
                    : "border border-ezia-warm-gray/20 bg-ezia-charcoal/30 text-ezia-warm-gray/70 hover:border-ezia-warm-gray/50 hover:text-ezia-ivory"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Desktop Editorial Grid / Mobile Horizontal Snap Carousel */}
        <motion.div
          layout
          className="mt-12 flex space-x-6 overflow-x-auto pb-6 pt-2 md:grid md:grid-cols-2 md:gap-8 md:space-x-0 lg:grid-cols-3 no-scrollbar snap-x snap-mandatory"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  data-cursor="view"
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ezia-warm-gray/15 bg-gradient-to-b from-ezia-charcoal/40 to-ezia-black p-6 transition-all duration-500 hover:border-ezia-champagne/50 hover:shadow-2xl cursor-pointer"
                >
                  {/* Visual Top Bar Tags */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-ezia-warm-gray/60">
                      {product.series}
                    </span>
                    {product.tag && (
                      <span className="rounded-full border border-ezia-champagne/30 bg-ezia-champagne/10 px-3 py-1 text-[9px] uppercase tracking-widest text-ezia-champagne font-medium">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Frame Visual Display Card */}
                  <div className="relative my-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-ezia-charcoal/30">
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${product.visualBg} opacity-60 transition-opacity group-hover:opacity-100`}
                    />
                    
                    {/* SVG Frame Silhouette Illustration */}
                    <div className="relative z-10 flex flex-col items-center transition-transform duration-700 group-hover:scale-105">
                      <svg
                        className="h-28 w-44 text-ezia-ivory/80 transition-colors group-hover:text-ezia-champagne"
                        viewBox="0 0 200 90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Bridge */}
                        <path d="M 85 45 Q 100 38 115 45" />
                        {/* Left Rim */}
                        <rect x="25" y="28" width="60" height="42" rx="14" />
                        {/* Right Rim */}
                        <rect x="115" y="28" width="60" height="42" rx="14" />
                        {/* Left Temple End */}
                        <path d="M 25 38 L 5 32" />
                        {/* Right Temple End */}
                        <path d="M 175 38 L 195 32" />
                        {/* Lens Reflection Highlight */}
                        <line x1="40" y1="36" x2="60" y2="56" stroke="rgba(229,223,200,0.4)" strokeWidth="1.5" />
                        <line x1="130" y1="36" x2="150" y2="56" stroke="rgba(229,223,200,0.4)" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest text-ezia-warm-gray/40">
                      {product.dimensions}
                    </span>
                  </div>

                  {/* Metadata & Pricing */}
                  <div className="mt-2 border-t border-ezia-warm-gray/10 pt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-normal text-ezia-ivory transition-colors group-hover:text-ezia-champagne">
                        {product.name}
                      </h3>
                      <span className="text-xs font-semibold text-ezia-champagne">
                        {product.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-ezia-warm-gray/60 font-light line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-ezia-warm-gray/50">
                      <span>{product.material}</span>
                      <span className="flex items-center space-x-1 text-ezia-champagne font-medium">
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-ezia-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-2xl border border-ezia-warm-gray/20 bg-ezia-black p-6 md:p-8 shadow-2xl text-ezia-ivory"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-ezia-champagne">
                    {selectedProduct.series}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-ezia-ivory uppercase mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full border border-ezia-warm-gray/20 p-2 text-ezia-warm-gray hover:text-ezia-ivory"
                >
                  ✕
                </button>
              </div>

              {/* Graphic Spec Panel */}
              <div className="my-6 flex h-48 items-center justify-center rounded-xl bg-ezia-charcoal/40 p-4 border border-ezia-warm-gray/10">
                <svg
                  className="h-32 w-56 text-ezia-champagne"
                  viewBox="0 0 200 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M 85 45 Q 100 38 115 45" />
                  <rect x="25" y="28" width="60" height="42" rx="14" />
                  <rect x="115" y="28" width="60" height="42" rx="14" />
                  <path d="M 25 38 L 5 32" />
                  <path d="M 175 38 L 195 32" />
                </svg>
              </div>

              <p className="text-sm font-light text-ezia-warm-gray/80 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ezia-warm-gray/10 pt-4 text-xs">
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Material</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.material}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Dimensions</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.dimensions}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Price</span>
                  <span className="text-ezia-champagne font-semibold mt-0.5 block">{selectedProduct.price}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Colors</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.colorway.join(", ")}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end space-x-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full border border-ezia-warm-gray/30 px-6 py-3 text-xs uppercase tracking-wider text-ezia-warm-gray hover:text-ezia-ivory"
                >
                  Close
                </button>
                <Link
                  href={`/collection`}
                  className="rounded-full bg-ezia-champagne px-8 py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                >
                  Book Fitting in Store
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
