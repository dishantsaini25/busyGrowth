"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip, Metric } from "./common";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const cardVariant = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } };

export const Hero = () => (
  <section className="relative flex flex-col items-center justify-start px-4 pt-18 mt-4 sm:px-6 lg:min-h-screen lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-8 lg:pt-0">

    <motion.div className="w-full max-w-2xl pb-8 lg:w-1/2 lg:pb-0" variants={fadeUp} initial="hidden" animate="visible">
      <Chip variant="gold" className="mb-3 inline-block bg-white/80 backdrop-blur-sm text-xs sm:mb-4 sm:text-sm">
        ⚡ Jaipur-based performance studio
      </Chip>

      <h1 className="mb-3 font-manrope text-2xl font-bold leading-tight text-text-dark sm:mb-4 sm:text-3xl lg:text-4xl xl:text-5xl">
        We build digital experiences that{" "}
        <span className="text-gradient-gold">print leads on autopilot</span>
        <br />
        <span className="text-cyan-accent">using reels, ads & automation.</span>
      </h1>

      <p className="mb-4 text-sm text-text-gray sm:mb-6 sm:text-base">
        A small, hands-on team that actually runs the ads, edits the reels, and builds the systems.
        No agency fluff — just real growth for founders and creators.
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-gold to-gold-dim px-4 py-2 text-xs font-bold text-white !text-white shadow-glow-gold transition-all hover:scale-105 hover:!text-white sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Get a free growth plan →
        </Link>
        <Link href="/services" className="rounded-full border border-border-gray bg-white/80 px-4 py-2 text-xs font-medium text-text-gray shadow-sm transition-all hover:border-gold/50 hover:text-gold sm:px-6 sm:py-2.5 sm:text-sm">
          View services
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
        <Chip variant="cyan" className="text-[10px] sm:text-xs">🎬 Reels & short-form</Chip>
        <Chip variant="purple" className="text-[10px] sm:text-xs">📊 Meta & Google Ads</Chip>
        <Chip variant="pink" className="text-[10px] sm:text-xs">🤖 WhatsApp + email flows</Chip>
      </div>

      <motion.div className="relative mt-6 block lg:hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl border border-gold/20 bg-white/80 p-4 backdrop-blur-sm">
          <div className="text-center"><p className="text-xl font-bold text-gold">15+</p><p className="text-[10px] text-text-light">Campaigns</p></div>
          <div className="h-6 w-px bg-border-light" />
          <div className="text-center"><p className="text-xl font-bold text-cyan-accent">2.4x</p><p className="text-[10px] text-text-light">Avg ROAS</p></div>
          <div className="h-6 w-px bg-border-light" />
          <div className="text-center"><p className="text-xl font-bold text-emerald-accent">6+</p><p className="text-[10px] text-text-light">Clients</p></div>
        </div>
      </motion.div>
    </motion.div>

    <div className="mt-8 hidden w-full max-w-md lg:mt-0 lg:block lg:w-1/2 xl:max-w-lg">
      <div className="grid gap-4 xl:gap-6 pt-20">
        <motion.div whileHover={{ y: -5 }} className="w-fit self-end rounded-2xl border border-cyan-accent/20 bg-white/90 p-4 shadow-card-soft">
          <div className="flex items-center gap-4"><div><p className="text-xs font-medium text-cyan-accent">📈 Campaign snapshot</p><p className="text-sm font-medium text-text-dark">D2C Beauty</p></div><div className="h-8 w-px bg-border-light" /><div><p className="text-xs text-text-light">ROAS</p><p className="text-lg font-bold text-emerald-accent">3.8x</p></div></div>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-border-light bg-white/90 p-5 shadow-card-soft hover:shadow-card-hover xl:p-6">
          <h3 className="text-lg font-semibold text-text-dark xl:text-xl">Performance hub</h3>
          <p className="text-sm text-text-light mb-4">Real-time dash</p>
          <div className="grid grid-cols-3 gap-y-4 xl:gap-y-6">
            <Metric label="Leads" value="850+" tone="green" /><Metric label="ROAS" value="2.8x" tone="gold" /><Metric label="CPL" value="-18%" tone="green" />
            <Metric label="Reply" value="3m 12s" tone="cyan" /><Metric label="Bookings" value="120+" tone="purple" /><Metric label="Reels" value="45+" tone="pink" />
          </div>
          <p className="mt-4 border-t border-border-light pt-4 text-sm italic text-text-gray">💬 "Scaled from 0 to ₹5L/mo in 3 months"</p>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="w-4/5 self-start rounded-2xl border border-emerald-accent/20 bg-white/90 p-4 shadow-card-soft">
          <p className="mb-3 text-xs font-medium uppercase text-emerald-accent">💬 WhatsApp leads</p>
          <div className="space-y-3">
            <div className="flex gap-3"><div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-orange-accent" /><div className="rounded-2xl bg-bg-gray/80 p-3"><p className="text-xs text-text-dark">Course details</p><p className="text-[10px] text-text-muted">Just now</p></div></div>
            <div className="flex gap-3"><div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-accent to-purple-accent" /><div className="rounded-2xl bg-bg-gray/80 p-3"><p className="text-xs text-text-dark">Ad management</p><p className="text-[10px] text-text-muted">2m ago</p></div></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);