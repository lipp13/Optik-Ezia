"use client";

import { useState } from "react";
import Link from "next/link";
import { STORES_DATA, StoreBranch } from "@/data/stores";
import { MapPin, Phone, Clock, Navigation, Search, MessageSquare, ExternalLink } from "lucide-react";

const CITIES = ["All", "Jakarta", "Surabaya", "Bandung", "Bali", "Yogyakarta"];

export default function StoreLocatorPreview() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState<StoreBranch>(STORES_DATA[0]);

  const filteredBranches = STORES_DATA.filter((branch) => {
    const matchesCity = selectedCity === "All" || branch.city === selectedCity;
    const matchesSearch =
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section className="relative w-full overflow-hidden bg-ezia-black py-24 md:py-36 border-t border-ezia-warm-gray/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
              Boutique Discovery
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl lg:text-6xl font-light text-ezia-ivory tracking-tight uppercase">
              Find Your Nearest <span className="italic text-ezia-champagne font-normal">Ezia</span>
            </h2>
          </div>

          <Link
            href="/stores"
            className="group mt-6 inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-ivory transition-colors hover:text-ezia-champagne md:mt-0"
          >
            <span>Explore All 6 Flagships</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* City Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCity === city
                    ? "bg-ezia-champagne text-ezia-black font-semibold"
                    : "border border-ezia-warm-gray/20 bg-ezia-charcoal/30 text-ezia-warm-gray/70 hover:text-ezia-ivory"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ezia-warm-gray/40" />
            <input
              type="text"
              placeholder="Search branch or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-ezia-warm-gray/20 bg-ezia-charcoal/40 py-2.5 pl-10 pr-4 text-xs text-ezia-ivory placeholder-ezia-warm-gray/40 focus:border-ezia-champagne focus:outline-none"
            />
          </div>
        </div>

        {/* Store Locator Grid Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Interactive Map Graphic Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative flex h-[380px] lg:h-[500px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-8 shadow-2xl">
              {/* Stylized Vector Map Mockup */}
              <div className="absolute inset-0 bg-[radial-gradient(#2D4B50_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-ezia-champagne/40 bg-ezia-black/60 px-3.5 py-1 text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                  {activeBranch.city} • Flagship Studio
                </span>
                <Navigation className="h-5 w-5 text-ezia-champagne" />
              </div>

              {/* Map Marker Graphic */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ezia-champagne/10 border border-ezia-champagne text-ezia-champagne animate-pulse">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-normal text-ezia-ivory">
                  {activeBranch.name}
                </h3>
                <p className="mt-1 text-xs text-ezia-warm-gray/60 font-light max-w-sm">
                  {activeBranch.address}
                </p>
              </div>

              {/* Action Buttons for Active Branch */}
              <div className="relative z-10 grid grid-cols-2 gap-3 border-t border-ezia-warm-gray/10 pt-4">
                <a
                  href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-ezia-warm-gray/30 bg-ezia-black/60 py-3 text-xs font-medium uppercase tracking-wider text-ezia-ivory hover:border-ezia-champagne"
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
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Branch List Cards */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
            {filteredBranches.length === 0 ? (
              <div className="rounded-2xl border border-ezia-warm-gray/15 bg-ezia-charcoal/20 p-8 text-center text-ezia-warm-gray/60 text-xs">
                No store branches found matching your search.
              </div>
            ) : (
              filteredBranches.map((branch) => {
                const isSelected = activeBranch.id === branch.id;
                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveBranch(branch)}
                    className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                      isSelected
                        ? "border-ezia-champagne bg-ezia-charcoal/50 shadow-xl"
                        : "border-ezia-warm-gray/10 bg-ezia-charcoal/20 hover:border-ezia-warm-gray/30 hover:bg-ezia-charcoal/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                        {branch.name}
                      </h4>
                      {branch.isFlagship && (
                        <span className="rounded-full bg-ezia-champagne/15 px-2.5 py-0.5 text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase">
                          Flagship
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-ezia-warm-gray/60 font-light">
                      {branch.address}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-ezia-warm-gray/50 border-t border-ezia-warm-gray/10 pt-3">
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
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
