"use client";
import { motion } from "framer-motion";

export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919352757834?text=Hi%20BusyGrowth%20Studio%2C%20I'm%20interested%20in%20your%20services!"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-white shadow-lg hover:bg-emerald-600 md:bottom-20 md:right-10"
  >
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.499 2 2.006 6.493 2.006 12c0 1.76.46 3.483 1.333 5l-1.333 4.86 5.013-1.313c1.452.793 3.087 1.207 4.78 1.207h.004c5.507 0 10-4.493 10-10 0-2.677-1.041-5.185-2.926-7.072z" />
    </svg>
    <span className="hidden text-sm font-medium group-hover:inline">Chat on WhatsApp</span>
  </motion.a>
);