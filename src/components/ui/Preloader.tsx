"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 1800;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-ezia-black p-8 md:p-14 text-ezia-ivory select-none overflow-hidden"
        >
          {/* Subtle Ambient Flare */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-ezia-champagne/10 blur-[130px]" />

          {/* Top Technical Label */}
          <div className="relative z-10 flex items-center justify-between border-b border-hairline pb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-ezia-stone">
            <span>OPTIK EZIA / 001</span>
            <span>DUNIA PENGLIHATAN PRESI</span>
          </div>

          {/* Center Aperture Ring */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center">
            <div className="relative flex h-36 w-36 md:h-44 md:w-44 items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-ezia-champagne/40"
              />

              <motion.div
                style={{ scale: 0.5 + (progress / 100) * 0.5 }}
                className="h-28 w-28 md:h-36 md:w-36 rounded-full border border-ezia-champagne/70 bg-ezia-charcoal/40 backdrop-blur-md flex items-center justify-center shadow-2xl"
              >
                <span className="font-serif text-3xl md:text-4xl font-light tracking-[0.2em] text-ezia-ivory uppercase">
                  EZIA
                </span>
              </motion.div>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ezia-champagne">
              Refraksi Cahaya • Presisi Permukaan Lensa
            </p>
          </div>

          {/* Bottom Counter Row */}
          <div className="relative z-10 flex items-end justify-between border-t border-hairline pt-4 font-mono">
            <div className="text-[10px] uppercase tracking-widest text-ezia-stone">
              MEMUAT STUDIO OPTIK
            </div>

            <div className="flex items-baseline space-x-1 font-mono text-4xl md:text-6xl font-light text-ezia-ivory">
              <span>{Math.floor(progress).toString().padStart(2, "0")}</span>
              <span className="text-sm text-ezia-champagne font-normal">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
