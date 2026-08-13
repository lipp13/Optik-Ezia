"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";
import { Search, ArrowRight, X } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  { id: "all", label: "All Frames" },
  { id: "optical", label: "Optical Frames" },
  { id: "sun", label: "Sunglasses" },
  { id: "contact", label: "Contact Lenses" },
  { id: "kids", label: "Kids Optical" },
];

export default function CollectionClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<EyewearProduct | null>(null);

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCat = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ezia-black text-ezia-ivory pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Page Header */}
        <div className="border-b border-ezia-warm-gray/10 pb-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Eyewear Editorial
          </span>
          <h1 className="mt-2 font-serif text-4xl md:text-6xl font-light uppercase text-ezia-ivory">
            The Eyewear <span className="italic text-ezia-champagne font-normal">Catalogue</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xs md:text-sm font-light text-ezia-warm-gray/70">
            Handcrafted Japanese titanium and Italian bio-acetate frames fitted with custom German precision digital lenses.
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-ezia-champagne text-ezia-black font-semibold shadow-lg"
                    : "border border-ezia-warm-gray/20 bg-ezia-charcoal/30 text-ezia-warm-gray/70 hover:text-ezia-ivory"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ezia-warm-gray/40" />
            <input
              type="text"
              placeholder="Search frames or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-ezia-warm-gray/20 bg-ezia-charcoal/40 py-2.5 pl-10 pr-4 text-xs text-ezia-ivory placeholder-ezia-warm-gray/40 focus:border-ezia-champagne focus:outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setActiveProduct(product)}
              data-cursor="view"
              className="group cursor-pointer rounded-2xl border border-ezia-warm-gray/15 bg-gradient-to-b from-ezia-charcoal/40 to-ezia-black p-6 transition-all duration-300 hover:border-ezia-champagne/60 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-ezia-warm-gray/60">
                    {product.series}
                  </span>
                  {product.tag && (
                    <span className="rounded-full bg-ezia-champagne/15 px-3 py-1 text-[9px] uppercase tracking-widest text-ezia-champagne font-medium">
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="relative my-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-ezia-charcoal/30">
                  <svg
                    className="h-28 w-44 text-ezia-ivory/80 transition-transform duration-500 group-hover:scale-105 group-hover:text-ezia-champagne"
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

                <h3 className="font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs text-ezia-warm-gray/60 font-light line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 border-t border-ezia-warm-gray/10 pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-ezia-champagne">
                  {product.price}
                </span>
                <span className="flex items-center space-x-1 text-xs text-ezia-ivory group-hover:text-ezia-champagne">
                  <span>Inspect Spec</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Spec Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="absolute inset-0 bg-ezia-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-2xl border border-ezia-warm-gray/20 bg-ezia-black p-8 shadow-2xl text-ezia-ivory"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-ezia-champagne">
                    {activeProduct.series}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-ezia-ivory uppercase mt-1">
                    {activeProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="rounded-full border border-ezia-warm-gray/20 p-2 text-ezia-warm-gray hover:text-ezia-ivory"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

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
                {activeProduct.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ezia-warm-gray/10 pt-4 text-xs">
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Frame Material</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{activeProduct.material}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Dimensions</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{activeProduct.dimensions}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Retail Privilege</span>
                  <span className="text-ezia-champagne font-semibold mt-0.5 block">{activeProduct.price}</span>
                </div>
                <div>
                  <span className="block text-ezia-warm-gray/50 uppercase tracking-widest text-[10px]">Colorways</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{activeProduct.colorway.join(", ")}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end space-x-4">
                <button
                  onClick={() => setActiveProduct(null)}
                  className="rounded-full border border-ezia-warm-gray/30 px-6 py-3 text-xs uppercase tracking-wider text-ezia-warm-gray hover:text-ezia-ivory"
                >
                  Close
                </button>
                <Link
                  href="/stores"
                  className="rounded-full bg-ezia-champagne px-8 py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                >
                  Book Fitting in Store
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
