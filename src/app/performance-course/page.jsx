"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "../components/sections/common";


const modules = [
  { week: "1-2", title: "Meta Ads Foundation", topics: ["Business Manager", "Campaign Structure", "Ad Objectives", "Budgeting"] },
  { week: "3-4", title: "Audience & Targeting", topics: ["Custom Audiences", "Lookalikes", "Interest Targeting", "Retargeting"] },
  { week: "5-6", title: "Creative & Copy", topics: ["Ad Creatives", "Copywriting", "A/B Testing", "Dynamic Creative"] },
  { week: "7-8", title: "Google Search Ads", topics: ["Keyword Research", "Match Types", "Ad Copy", "Extensions"] },
  { week: "9-10", title: "Google Display & Video", topics: ["Display Network", "YouTube Ads", "Placements", "Remarketing"] },
  { week: "11-12", title: "Tracking & Scaling", topics: ["Pixel & CAPI", "GA4 Integration", "Performance Max", "Scaling Budgets"] },
];

export default function PerformanceCoursePage() {
  return (
    <div className="min-h-screen pt-32 pb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <Chip variant="cyan" className="mb-6">12 Weeks Intensive</Chip>
        <h1 className="mb-4 font-manrope text-4xl font-bold text-text-dark md:text-5xl lg:text-6xl">Performance Marketing <span className="text-cyan-accent">Mastery</span></h1>
        <p className="mb-8 max-w-3xl text-lg text-text-gray">Master Meta Ads and Google Ads. Learn to plan, execute, and scale profitable campaigns with real budgets and live projects.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-cyan-accent to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">Enroll Now →</Link>
          <Link href="/course" className="rounded-full border border-border-gray bg-white px-8 py-3 text-sm font-medium text-text-gray shadow-sm">Compare with Full DM Course</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[{ v: "12", l: "Weeks" }, { v: "24+", l: "Sessions" }, { v: "8+", l: "Projects" }, { v: "Certificate", l: "Recognized" }].map((s, i) => (<div key={i} className="rounded-xl border border-border-light bg-white p-4 text-center shadow-card-soft"><p className="text-2xl font-bold text-cyan-accent">{s.v}</p><p className="text-xs text-text-light">{s.l}</p></div>))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="mb-8 font-manrope text-3xl font-bold text-text-dark">Curriculum Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border-light bg-white p-6 shadow-card-soft">
              <span className="text-sm font-semibold text-cyan-accent">Week {m.week}</span>
              <h3 className="mt-2 text-xl font-semibold text-text-dark">{m.title}</h3>
              <ul className="mt-4 space-y-2">{m.topics.map((t) => (<li key={t} className="flex items-center gap-2 text-sm text-text-gray"><span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />{t}</li>))}</ul>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 rounded-2xl border border-border-light bg-white p-8 shadow-card-soft">
        <h3 className="text-xl font-semibold text-text-dark">Tools You'll Master</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {["Meta Ads Manager", "Google Ads", "Google Tag Manager", "GA4", "Meta Pixel", "Google Analytics", "Canva", "ChatGPT"].map((t) => (<span key={t} className="rounded-full border border-border-light bg-bg-gray px-4 py-2 text-sm text-text-gray">{t}</span>))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 rounded-3xl border border-gold/30 bg-linear-to-r from-gold/5 to-transparent p-12 text-center">
        <h3 className="font-manrope text-3xl font-bold text-text-dark">Ready to become a Performance Marketing specialist?</h3>
        <p className="mt-4 text-text-gray">Limited seats available for next batch.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-linear-to-r from-cyan-accent to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">Apply for next batch →</Link>
      </motion.div>
    </div>
  );
}