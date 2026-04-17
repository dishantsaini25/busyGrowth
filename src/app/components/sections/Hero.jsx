"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip, Metric } from "./common";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const cardVariant = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } };

export const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center gap-12 pt-20 lg:flex-row lg:gap-16">
    {/* Left Column */}
    <motion.div className="flex max-w-2xl flex-col lg:w-1/2" variants={fadeUp} initial="hidden" animate="visible">
      <Chip variant="gold" className="mb-6 bg-white shadow-sm">⚡ Jaipur-based performance studio</Chip>
      <h1 className="mb-6 font-manrope text-4xl font-bold leading-tight text-text-dark md:text-5xl lg:text-6xl">
        We build digital experiences that{" "}
        <span className="text-gradient-gold">print leads on autopilot</span>
        <br />
        <span className="text-cyan-accent">using reels, ads & automation.</span>
      </h1>
      <p className="mb-8 text-lg text-text-gray">
        A small, hands-on team that actually runs the ads, edits the reels, and builds the systems.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-dim px-6 py-3 text-sm font-bold text-white shadow-glow-gold hover:scale-105 transition-all sm:px-8 sm:py-3.5">
          Get a free growth plan →
        </Link>
        <Link href="/services" className="rounded-full border border-border-gray bg-white px-6 py-3 text-sm font-medium text-text-gray shadow-sm hover:border-gold/50 hover:text-gold transition-all sm:px-8 sm:py-3.5">
          View services
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
        <Chip variant="cyan">🎬 Reels</Chip>
        <Chip variant="purple">📊 Ads</Chip>
        <Chip variant="pink">🤖 Automation</Chip>
      </div>
    </motion.div>

    {/* Right Column - Cards (Hidden on Mobile, Visible on Desktop) */}
    <motion.div 
      className="relative hidden lg:block lg:w-1/2" 
      variants={cardVariant} 
      initial="hidden" 
      animate="visible"
    >
      <div className="grid gap-6">
        {/* Campaign Snapshot Card */}
        <motion.div whileHover={{ y: -5 }} className="w-fit self-end rounded-2xl border border-cyan-accent/20 bg-white p-4 shadow-card-soft">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs font-medium text-cyan-accent">📈 Campaign snapshot</p>
              <p className="text-sm font-medium text-text-dark">D2C Beauty</p>
            </div>
            <div className="h-8 w-px bg-border-light" />
            <div>
              <p className="text-xs text-text-light">ROAS</p>
              <p className="text-lg font-bold text-emerald-accent">4.2x</p>
            </div>
          </div>
        </motion.div>

        {/* Main Performance Hub Card */}
        <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-border-light bg-white p-6 shadow-card-soft hover:shadow-card-hover">
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
          <p className="mt-6 border-t border-border-light pt-4 text-sm italic text-text-gray">
            💬 "Scaled to ₹15L/mo in 4 months"
          </p>
        </motion.div>

        {/* WhatsApp Leads Card */}
        <motion.div whileHover={{ y: -5 }} className="w-4/5 self-start rounded-2xl border border-emerald-accent/20 bg-white p-4 shadow-card-soft">
          <p className="mb-3 text-xs font-medium uppercase text-emerald-accent">💬 WhatsApp leads</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-orange-accent" />
              <div className="rounded-2xl bg-bg-gray p-3">
                <p className="text-xs text-text-dark">Course details</p>
                <p className="text-[10px] text-text-muted">Just now</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-accent to-purple-accent" />
              <div className="rounded-2xl bg-bg-gray p-3">
                <p className="text-xs text-text-dark">Ad management</p>
                <p className="text-[10px] text-text-muted">2m ago</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Mobile Alternative - Simple Stats (Optional) */}
    <motion.div 
      className="relative mt-8 block lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-gold/20 bg-white/80 p-6 backdrop-blur-sm">
        <div className="text-center">
          <p className="text-2xl font-bold text-gold">80+</p>
          <p className="text-xs text-text-light">Campaigns</p>
        </div>
        <div className="h-8 w-px bg-border-light" />
        <div className="text-center">
          <p className="text-2xl font-bold text-cyan-accent">3.8x</p>
          <p className="text-xs text-text-light">Avg ROAS</p>
        </div>
        <div className="h-8 w-px bg-border-light" />
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-accent">12.4k</p>
          <p className="text-xs text-text-light">Leads</p>
        </div>
      </div>
    </motion.div>
  </section>
);