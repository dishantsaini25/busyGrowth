"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const CursorLayer = () => {
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(
        typeof window !== "undefined" && 
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
      );
    };
    
    checkMobile();

    if (!isMobile) {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, [cursorX, cursorY, isMobile]);

  // Don't render anything on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      {/* Main Gold Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-gold/40 bg-gold/20 shadow-glow-gold backdrop-blur-[2px]"
        style={{ x: springX, y: springY }}
      />
      {/* Subtle Halo */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-20 w-20 rounded-full bg-gold/5 blur-xl"
        style={{ x: springX, y: springY }}
      />
    </>
  );
};