"use client";

import { useState } from "react";
import { STORES_DATA, StoreBranch } from "@/data/stores";
import { MapPin, Phone, Clock, Navigation, Search, MessageSquare } from "lucide-react";

const CITIES = ["All", "Jakarta", "Surabaya", "Bandung", "Bali", "Yogyakarta"];

export default function StoresClient() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState<StoreBranch>(STORES_DATA[0]);

  const filteredBranches = STORES_DATA.filter((b) => {
    const matchesCity = selectedCity === "All" || b.city === selectedCity;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ezia-black text-ezia-ivory pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Page Header */}
        <div className="border-b border-ezia-warm-gray/10 pb-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Store Network
          </span>
          <h1 className="mt-2 font-serif text-4xl md:text-6xl font-light uppercase text-ezia-ivory">
            Flagship Boutiques <span className="italic text-ezia-champagne font-normal">& Studios</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xs md:text-sm font-light text-ezia-warm-gray/70">
            Visit our optical boutiques across Jakarta, Surabaya, Bandung, Bali, and Yogyakarta for personalized eyewear fitting and 3D digital vision examinations.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCity === city
                    ? "bg-ezia-champagne text-ezia-black font-semibold shadow-lg"
                    : "border border-ezia-warm-gray/20 bg-ezia-charcoal/30 text-ezia-warm-gray/70 hover:text-ezia-ivory"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

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

        {/* Interactive Store Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Map Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative flex h-[420px] lg:h-[550px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(#2D4B50_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-ezia-champagne/40 bg-ezia-black/60 px-4 py-1.5 text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                  {activeBranch.city} • {activeBranch.district}
                </span>
                <Navigation className="h-5 w-5 text-ezia-champagne" />
              </div>

              <div className="relative z-10 my-auto flex flex-col items-center text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-ezia-champagne/15 border border-ezia-champagne text-ezia-champagne animate-pulse">
                  <MapPin className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-normal text-ezia-ivory">
                  {activeBranch.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-ezia-warm-gray/70 font-light max-w-md">
                  {activeBranch.address}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {activeBranch.services?.map((srv) => (
                    <span
                      key={srv}
                      className="rounded-full border border-ezia-warm-gray/20 bg-ezia-black/40 px-3 py-1 text-[9px] uppercase tracking-wider text-ezia-warm-gray/80"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-ezia-warm-gray/10 pt-4">
                <a
                  href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-ezia-warm-gray/30 bg-ezia-black/60 py-3.5 text-xs font-medium uppercase tracking-wider text-ezia-ivory hover:border-ezia-champagne"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl bg-ezia-champagne py-3.5 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Branch Selection Column */}
          <div className="lg:col-span-6 space-y-4 max-h-[550px] overflow-y-auto pr-1 no-scrollbar">
            {filteredBranches.map((branch) => {
              const isSelected = activeBranch.id === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-ezia-champagne bg-ezia-charcoal/60 shadow-xl"
                      : "border-ezia-warm-gray/10 bg-ezia-charcoal/20 hover:border-ezia-warm-gray/30 hover:bg-ezia-charcoal/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-normal text-ezia-ivory group-hover:text-ezia-champagne transition-colors">
                      {branch.name}
                    </h3>
                    {branch.isFlagship && (
                      <span className="rounded-full bg-ezia-champagne/15 px-3 py-1 text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase">
                        Flagship Studio
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
