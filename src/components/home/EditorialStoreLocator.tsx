"use client";

import { useState } from "react";
import Link from "next/link";
import { STORES_DATA, StoreBranch } from "@/data/stores";
import { MapPin, Phone, Clock, Navigation, Search, MessageSquare, ExternalLink } from "lucide-react";

const CITIES = ["Semua", "Jakarta", "Surabaya", "Bandung", "Bali", "Yogyakarta"];

export default function EditorialStoreLocator() {
  const [selectedCity, setSelectedCity] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState<StoreBranch>(STORES_DATA[0]);

  const filteredBranches = STORES_DATA.filter((b) => {
    const matchesCity = selectedCity === "Semua" || b.city === selectedCity;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section className="relative w-full bg-ezia-black py-28 md:py-44 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Technical Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono">
          <span className="editorial-tag">06 / LOKASI GERAI</span>
          <span className="text-[10px] uppercase tracking-widest text-ezia-stone">PENEMUAN BOUTIQUE</span>
        </div>

        {/* Headline */}
        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-serif text-6xl md:text-8xl font-light text-ezia-champagne/40 block">
              06
            </span>
            <h2 className="mt-2 text-clamp-editorial-heading font-serif font-light uppercase tracking-tight text-ezia-ivory">
              Temukan Gerai <span className="italic text-ezia-champagne font-normal">Ezia Terdekat</span>
            </h2>
          </div>

          <Link
            href="/stores"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.22em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0 font-mono"
          >
            <span>Lihat 6 Gerai Boutique</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* City Filter Toolbar */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar font-mono">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCity === city
                    ? "bg-ezia-champagne text-ezia-black font-semibold shadow-lg"
                    : "border border-hairline bg-ezia-charcoal/30 text-ezia-stone hover:text-ezia-ivory"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 font-mono">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ezia-stone" />
            <input
              type="text"
              placeholder="Cari cabang atau wilayah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-hairline bg-ezia-charcoal/40 py-2.5 pl-10 pr-4 text-xs text-ezia-ivory placeholder-ezia-stone focus:border-ezia-champagne focus:outline-none"
            />
          </div>
        </div>

        {/* Store Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Map Preview Stage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative flex h-[380px] lg:h-[500px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-hairline bg-ezia-charcoal/40 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(#2D4B50_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

              <div className="relative z-10 flex items-center justify-between border-b border-hairline pb-4 font-mono">
                <span className="editorial-tag">{activeBranch.city} • {activeBranch.district}</span>
                <Navigation className="h-4 w-4 text-ezia-champagne" />
              </div>

              <div className="relative z-10 my-auto flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ezia-champagne/15 border border-ezia-champagne text-ezia-champagne animate-pulse">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-3xl font-normal text-ezia-ivory">
                  {activeBranch.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-ezia-stone font-light max-w-md">
                  {activeBranch.address}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-hairline pt-4 font-mono">
                <a
                  href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-hairline bg-ezia-black/60 py-3 text-xs font-medium uppercase tracking-wider text-ezia-ivory hover:border-ezia-champagne"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl bg-ezia-champagne py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Petunjuk Arah</span>
                </a>
              </div>
            </div>
          </div>

          {/* Branch List */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
            {filteredBranches.map((branch) => {
              const isSelected = activeBranch.id === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-ezia-champagne bg-ezia-charcoal/60 shadow-xl"
                      : "border-hairline bg-ezia-charcoal/20 hover:border-hairline/60 hover:bg-ezia-charcoal/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                      {branch.name}
                    </h3>
                    {branch.isFlagship && (
                      <span className="rounded-full bg-ezia-champagne/15 px-3 py-1 text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase font-mono">
                        Flagship
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-ezia-stone font-light">
                    {branch.address}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-ezia-stone border-t border-hairline pt-3 font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="h-3.5 w-3.5 text-ezia-champagne" />
                      <span>{branch.openingHours}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Phone className="h-3.5 w-3.5 text-ezia-champagne" />
                      <span>{branch.phone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
