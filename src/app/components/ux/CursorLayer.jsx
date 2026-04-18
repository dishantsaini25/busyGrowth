"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const CursorLayer = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [ripples, setRipples] = useState([]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      
      // Add ripple effect
      setRipples(prev => [
        ...prev.slice(-5),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor - Small Gold Circle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full bg-gradient-to-br from-gold to-amber-400 shadow-[0_0_20px_rgba(212,160,23,0.5)] md:block"
        style={{ x: springX, y: springY }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-6 w-6 rounded-full border border-gold/50 md:block"
        style={{ x: springX, y: springY }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Ripples */}
      {ripples.map((ripple, i) => (
        <motion.div
          key={ripple.id}
          className="pointer-events-none fixed z-[9997] hidden h-2 w-2 rounded-full bg-gold/20 md:block"
          initial={{ 
            left: ripple.x - 4, 
            top: ripple.y - 4,
            scale: 1,
            opacity: 0.6 
          }}
          animate={{ 
            scale: 8,
            opacity: 0 
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => {
            setRipples(prev => prev.filter(r => r.id !== ripple.id));
          }}
        />
      ))}
    </>
  );
};