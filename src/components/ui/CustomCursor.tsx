"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch screen or small viewports
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;
    setIsTouchDevice(touch);

    if (touch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if target or parent has interactive attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, select, [data-cursor], [role="button"]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const cursorMode = interactiveEl.getAttribute("data-cursor");
        if (cursorMode === "view") {
          setCursorText("VIEW");
        } else if (cursorMode === "drag") {
          setCursorText("DRAG");
        } else if (cursorMode === "zoom") {
          setCursorText("ZOOM");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-ezia-champagne/70 bg-ezia-charcoal/20 backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 72 : 44) : 18,
          height: isHovered ? (cursorText ? 72 : 44) : 18,
          opacity: 1,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-semibold tracking-widest text-ezia-champagne uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Central Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-ezia-champagne"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovered && cursorText ? 0 : 1,
        }}
      />
    </div>
  );
}
