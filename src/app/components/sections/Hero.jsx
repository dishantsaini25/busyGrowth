"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip, Metric } from "./common";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const cardVariant = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } };

export const Hero = () => (
  <section className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 overflow-hidden pt-4 lg:min-h-screen lg:flex-row lg:gap-16 lg:pt-24">
    {/* Left Column */}
    <motion.div className="flex max-w-2xl flex-col lg:w-1/2" variants={fadeUp} initial="hidden" animate="visible">
      <Chip variant="gold" className="mb-2 bg-white/80 backdrop-blur-sm sm:mb-4">⚡ Jaipur-based performance studio</Chip>
      
      <h1 className="mb-2 font-manrope text-2xl font-bold leading-tight text-text-dark sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
        We build digital experiences that{" "}
        <span className="text-gradient-gold">print leads on autopilot</span>
        <br />
        <span className="text-cyan-accent">using reels, ads & automation.</span>
      </h1>
      
      <p className="mb-4 text-sm text-text-gray sm:mb-6 sm:text-base lg:text-lg">
        A small, hands-on team that actually runs the ads, edits the reels, and builds the systems. 
        No agency fluff — just real growth for founders and creators.
      </p>
      
      <div className="flex flex-wrap gap-2 sm:gap-4">
        <Link href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-dim px-4 py-2 text-xs font-bold text-white shadow-glow-gold transition-all hover:scale-105 sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5">
          Get a free growth plan →
        </Link>
        <Link href="/services" className="rounded-full border border-border-gray bg-white/80 px-4 py-2 text-xs font-medium text-text-gray shadow-sm transition-all hover:border-gold/50 hover:text-gold sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5">
          View services
        </Link>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2 lg:mt-10 lg:gap-3">
        <Chip variant="cyan" className="text-[10px] sm:text-xs">🎬 Reels & short-form</Chip>
        <Chip variant="purple" className="text-[10px] sm:text-xs">📊 Meta & Google Ads</Chip>
        <Chip variant="pink" className="text-[10px] sm:text-xs">🤖 WhatsApp + email flows</Chip>
      </div>
    </motion.div>

    {/* Right Column - Cards (Hidden on Mobile) */}
    <motion.div className="relative hidden lg:block lg:w-1/2" variants={cardVariant} initial="hidden" animate="visible">
      <div className="grid gap-6">
        <motion.div whileHover={{ y: -5 }} className="w-fit self-end rounded-2xl border border-cyan-accent/20 bg-white/90 p-4 shadow-card-soft">
          <div className="flex items-center gap-4">
            <div><p className="text-xs font-medium text-cyan-accent">📈 Campaign snapshot</p><p className="text-sm font-medium text-text-dark">D2C Beauty</p></div>
            <div className="h-8 w-px bg-border-light" />
            <div><p className="text-xs text-text-light">ROAS</p><p className="text-lg font-bold text-emerald-accent">4.2x</p></div>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-border-light bg-white/90 p-6 shadow-card-soft hover:shadow-card-hover">
          <h3 className="text-xl font-semibold text-text-dark">Performance hub</h3>
          <p className="text-sm text-text-light mb-5">Real-time dash</p>
          <div className="grid grid-cols-3 gap-y-6">
            <Metric label="Leads" value="12.4k" tone="green" />
            <Metric label="ROAS" value="3.8x" tone="gold" />
            <Metric label="CPL" value="-22%" tone="green" />
            <Metric label="Reply" value="3m 12s" tone="cyan" />
            <Metric label="Bookings" value="847" tone="purple" />
            <Metric label="Reels" value="24+" tone="pink" />
          </div>
          <p className="mt-6 border-t border-border-light pt-4 text-sm italic text-text-gray">💬 "Scaled to ₹15L/mo in 4 months"</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="w-4/5 self-start rounded-2xl border border-emerald-accent/20 bg-white/90 p-4 shadow-card-soft">
          <p className="mb-3 text-xs font-medium uppercase text-emerald-accent">💬 WhatsApp leads</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-orange-accent" />
              <div className="rounded-2xl bg-bg-gray/80 p-3"><p className="text-xs text-text-dark">Course details</p><p className="text-[10px] text-text-muted">Just now</p></div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-accent to-purple-accent" />
              <div className="rounded-2xl bg-bg-gray/80 p-3"><p className="text-xs text-text-dark">Ad management</p><p className="text-[10px] text-text-muted">2m ago</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Mobile Stats - Simple Version */}
    <motion.div 
      className="relative mt-2 block lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-gold/20 bg-white/80 p-3 backdrop-blur-sm sm:gap-6 sm:p-6">
        <div className="text-center">
          <p className="text-lg font-bold text-gold sm:text-2xl">80+</p>
          <p className="text-[9px] text-text-light sm:text-xs">Campaigns</p>
        </div>
        <div className="h-5 w-px bg-border-light sm:h-8" />
        <div className="text-center">
          <p className="text-lg font-bold text-cyan-accent sm:text-2xl">3.8x</p>
          <p className="text-[9px] text-text-light sm:text-xs">Avg ROAS</p>
        </div>
        <div className="h-5 w-px bg-border-light sm:h-8" />
        <div className="text-center">
          <p className="text-lg font-bold text-emerald-accent sm:text-2xl">12.4k</p>
          <p className="text-[9px] text-text-light sm:text-xs">Leads</p>
        </div>
      </div>
    </motion.div>
  </section>
);