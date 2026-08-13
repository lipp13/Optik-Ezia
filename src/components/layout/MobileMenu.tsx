"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MapPin, Phone, Calendar } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  pathname,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const menuContainerVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at 95% 5%)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 95% 5%)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkItemVariants = {
    closed: { y: 40, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuContainerVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[990] flex flex-col justify-between bg-ezia-black/98 p-6 pt-24 text-ezia-ivory backdrop-blur-2xl md:hidden"
        >
          {/* Header Action inside Menu */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={onClose}
              aria-label="Close Navigation Menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ezia-warm-gray/20 bg-ezia-charcoal/40 text-ezia-ivory transition-colors hover:border-ezia-champagne"
            >
              <X className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-col space-y-6 pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ezia-champagne/80">
              Navigation Menu
            </span>
            <nav className="flex flex-col space-y-4">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkItemVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between font-serif text-3xl font-light tracking-wide transition-colors ${
                        isActive
                          ? "text-ezia-champagne font-normal"
                          : "text-ezia-ivory/80 hover:text-ezia-ivory"
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="text-xs font-sans text-ezia-warm-gray/40">
                          0{i + 1}
                        </span>
                        <span>{link.name}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ezia-warm-gray/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ezia-champagne" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Quick Actions & Store Info */}
          <div className="space-y-4 border-t border-ezia-warm-gray/10 pt-6 pb-4">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/stores"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 rounded-lg border border-ezia-warm-gray/20 bg-ezia-charcoal/60 py-3 text-xs font-medium tracking-wider uppercase text-ezia-ivory transition-colors hover:border-ezia-champagne"
              >
                <MapPin className="h-3.5 w-3.5 text-ezia-champagne" />
                <span>Find Store</span>
              </Link>

              <Link
                href="/services"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 rounded-lg bg-ezia-champagne py-3 text-xs font-medium tracking-wider uppercase text-ezia-black transition-transform active:scale-95"
              >
                <Calendar className="h-3.5 w-3.5 text-ezia-black" />
                <span>Book Exam</span>
              </Link>
            </div>

            <div className="flex items-center justify-between text-[11px] text-ezia-warm-gray/50 pt-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-ezia-champagne" />
                <span>+62 811 9882 101</span>
              </div>
              <span className="uppercase tracking-widest text-[9px]">
                Senayan Flagship • Jakarta
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
