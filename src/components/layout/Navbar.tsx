"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { name: "Koleksi", href: "/collection", num: "01" },
  { name: "Layanan", href: "/services", num: "02" },
  { name: "Gerai", href: "/stores", num: "03" },
  { name: "Tentang Kami", href: "/about", num: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          isScrolled
            ? "bg-ezia-black/90 py-4 backdrop-blur-md border-b border-hairline shadow-2xl"
            : "bg-gradient-to-b from-ezia-black/80 via-ezia-black/30 to-transparent py-7"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo / Editorial Brand Mark */}
          <Link href="/" className="group flex items-center space-x-3">
            <span className="font-serif text-2xl lg:text-3xl font-light tracking-[0.25em] text-ezia-ivory group-hover:text-ezia-champagne transition-colors uppercase">
              EZIA
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.35em] text-ezia-stone font-light border-l border-hairline pl-3 font-mono">
              OPTIK / 001
            </span>
          </Link>

          {/* Center Minimal Navigation Links */}
          <nav className="hidden items-center space-x-10 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-1.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors ${
                    isActive ? "text-ezia-champagne" : "text-ezia-ivory/70 hover:text-ezia-ivory"
                  }`}
                >
                  <span className="text-[9px] text-ezia-stone font-mono">{item.num}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeEditorialNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-ezia-champagne"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="/services"
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-ezia-ivory transition-colors hover:text-ezia-champagne"
            >
              <span>Periksa Mata</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka Menu Navigasi"
              className="flex items-center space-x-2 rounded-full border border-hairline bg-ezia-charcoal/40 px-4 py-2 text-xs uppercase tracking-widest text-ezia-ivory"
            >
              <span>Menu</span>
              <Menu className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_ITEMS}
        pathname={pathname}
      />
    </>
  );
}
