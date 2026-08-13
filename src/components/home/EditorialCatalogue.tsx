"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";
import { ArrowRight, X } from "lucide-react";

export default function EditorialCatalogue() {
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">05 / KATALOG PILIHAN</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">SHOWCASE KURASI</span>
        </div>

        {/* Headline */}
        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
              05
            </span>
            <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
              Katalog Kacamata <span className="italic text-ezia-champagne font-normal">Pilihan</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.22em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <span>Lihat Seluruh Katalog Editorial</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Vertical Asymmetric Fashion Catalogue */}
        <div className="mt-20 space-y-16">
          {PRODUCTS_DATA.slice(0, 4).map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                onClick={() => setSelectedProduct(product)}
                data-cursor="view"
                className={`group cursor-pointer rounded-3xl border border-hairline bg-ezia-charcoal/20 p-8 lg:p-12 transition-all duration-500 hover:border-ezia-champagne/60 hover:bg-ezia-charcoal/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* SVG Visual Presentation */}
                <div className={`lg:col-span-6 flex items-center justify-center rounded-2xl bg-ezia-charcoal/40 p-10 h-72 border border-hairline transition-transform duration-700 group-hover:scale-[1.02] ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <svg
                    className="h-36 w-60 text-ezia-ivory/80 group-hover:text-ezia-champagne transition-colors duration-500"
                    viewBox="0 0 200 90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M 85 45 Q 100 38 115 45" />
                    <rect x="25" y="28" width="60" height="42" rx="14" />
                    <rect x="115" y="28" width="60" height="42" rx="14" />
                    <path d="M 25 38 L 5 32" />
                    <path d="M 175 38 L 195 32" />
                  </svg>
                </div>

                {/* Information Column */}
                <div className={`lg:col-span-6 space-y-4 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div className="flex items-center space-x-3 text-[10px] font-semibold uppercase tracking-widest text-ezia-champagne font-mono">
                    <span>0{index + 1} / {product.category.toUpperCase()}</span>
                    <span>•</span>
                    <span>{product.series}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-light uppercase text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs md:text-sm font-light text-ezia-stone leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-hairline flex items-center justify-between font-mono">
                    <span className="text-sm font-semibold text-ezia-champagne">
                      {product.price}
                    </span>
                    <span className="flex items-center space-x-2 text-xs uppercase tracking-widest text-ezia-ivory group-hover:text-ezia-champagne">
                      <span>Inspeksi Spesifikasi</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Product Spec Modal */}
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
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-hairline bg-ezia-black p-8 shadow-2xl text-ezia-ivory"
            >
              <div className="flex items-start justify-between border-b border-hairline pb-4 font-mono">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                    {selectedProduct.series}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-ezia-ivory uppercase mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full border border-hairline p-2 text-ezia-stone hover:text-ezia-ivory"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-6 flex h-48 items-center justify-center rounded-xl bg-ezia-charcoal/40 p-4 border border-hairline">
                <svg
                  className="h-32 w-56 text-ezia-champagne"
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

              <p className="text-sm font-light text-ezia-stone leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-hairline pt-4 text-xs font-mono">
                <div>
                  <span className="block text-ezia-stone uppercase tracking-widest text-[10px]">Bahan Bingkai</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.material}</span>
                </div>
                <div>
                  <span className="block text-ezia-stone uppercase tracking-widest text-[10px]">Dimensi Ukuran</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.dimensions}</span>
                </div>
                <div>
                  <span className="block text-ezia-stone uppercase tracking-widest text-[10px]">Harga Privilege</span>
                  <span className="text-ezia-champagne font-semibold mt-0.5 block">{selectedProduct.price}</span>
                </div>
                <div>
                  <span className="block text-ezia-stone uppercase tracking-widest text-[10px]">Varian Warna</span>
                  <span className="text-ezia-ivory font-medium mt-0.5 block">{selectedProduct.colorway.join(", ")}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end space-x-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full border border-hairline px-6 py-3 text-xs uppercase tracking-wider text-ezia-stone hover:text-ezia-ivory font-mono"
                >
                  Tutup
                </button>
                <Link
                  href="/stores"
                  className="rounded-full bg-ezia-champagne px-8 py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory font-mono"
                >
                  Pesan Fitting di Gerai
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
