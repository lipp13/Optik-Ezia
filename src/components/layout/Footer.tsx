"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-ezia-black text-ezia-ivory border-t border-hairline pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16 border-b border-hairline">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-4xl font-light tracking-[0.25em] text-ezia-ivory uppercase block">
              EZIA
            </span>
            <span className="editorial-tag block font-mono">
              ARSITEKTUR OPTIK / 001
            </span>

            <p className="max-w-sm text-xs text-ezia-stone font-light leading-relaxed pt-2">
              Pengalaman optik Indonesia yang memadukan uji penglihatan digital 3D Jerman dengan bingkai titanium buatan tangan Jepang.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/optikezia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-ezia-charcoal/40 text-ezia-ivory transition-colors hover:border-ezia-champagne hover:text-ezia-champagne"
                aria-label="Profil Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/628119882101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-full border border-hairline bg-ezia-charcoal/40 px-4 py-2 text-xs text-ezia-stone transition-colors hover:border-ezia-champagne hover:text-ezia-ivory font-mono"
              >
                <Phone className="h-3.5 w-3.5 text-ezia-champagne" />
                <span>+62 811 9882 101</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="editorial-tag block font-mono">NAVIGASI</span>
            <ul className="space-y-3 text-xs font-light text-ezia-stone">
              <li>
                <Link href="/collection" className="hover:text-ezia-ivory transition-colors">
                  Katalog Koleksi
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ezia-ivory transition-colors">
                  Layanan Optik
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-ezia-ivory transition-colors">
                  Lokasi Gerai Boutique
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ezia-ivory transition-colors">
                  Tentang Optik Ezia
                </Link>
              </li>
            </ul>
          </div>

          {/* Boutiques */}
          <div className="lg:col-span-3 space-y-4">
            <span className="editorial-tag block font-mono">GERAI BOUTIQUE</span>
            <ul className="space-y-3 text-xs font-light text-ezia-stone">
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 text-ezia-champagne shrink-0 mt-0.5" />
                <span>Plaza Senayan, Jakarta Selatan</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 text-ezia-champagne shrink-0 mt-0.5" />
                <span>PIK Avenue, Jakarta Utara</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 text-ezia-champagne shrink-0 mt-0.5" />
                <span>Pakuwon Mall, Surabaya</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 text-ezia-champagne shrink-0 mt-0.5" />
                <span>Seminyak Sanctuary, Bali</span>
              </li>
            </ul>
          </div>

          {/* Technical Microcopy */}
          <div className="lg:col-span-2 space-y-4">
            <span className="editorial-tag block font-mono">METADATA</span>
            <div className="text-[10px] uppercase tracking-widest text-ezia-stone space-y-2 font-mono">
              <p>SISTEM OPTIK EZIA</p>
              <p>REFRAKSI / 001</p>
              <p>INDONESIA / 2026</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[10px] uppercase tracking-widest text-ezia-stone sm:flex-row font-mono">
          <p>© {new Date().getFullYear()} OPTIK EZIA. HAK CIPTA DILINDUNGI.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-ezia-ivory transition-colors">PRIVASI</span>
            <span className="hover:text-ezia-ivory transition-colors">KETENTUAN</span>
            <span className="hover:text-ezia-ivory transition-colors">LAYANAN MEDIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
