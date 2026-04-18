"use client";
import { useEffect, useState } from "react";

export const CursorLayer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX - 16, y: e.clientY - 16 });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border border-gold/40 bg-gold/20 shadow-glow-gold backdrop-blur-[2px] hidden md:block"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transition: 'transform 0.05s ease-out' }}
      />
      <div
        className="pointer-events-none fixed z-[9998] h-20 w-20 rounded-full bg-gold/5 blur-xl hidden md:block"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transition: 'transform 0.05s ease-out' }}
      />
    </>
  );
};