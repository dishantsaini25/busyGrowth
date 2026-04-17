"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Chip } from "../components/sections/common";


const milestones = [
  { id: "M1", title: "Foundation & AI Mindset", weeks: "Weeks 1-2", sessions: "6", projects: "2", desc: "Core concepts, websites, landing pages.", topics: ["Digital ecosystem", "ICP & personas", "WordPress", "AI ideation"], color: "cyan" },
  { id: "M2", title: "SEO & AEO", weeks: "Weeks 3-7", sessions: "15", projects: "5", desc: "Organic visibility, modern SEO.", topics: ["Keyword strategy", "On-page/Technical", "AEO & SGE", "GSC & GA4"], color: "emerald" },
  { id: "M3", title: "Social & Content", weeks: "Weeks 8-11", sessions: "12", projects: "4", desc: "Platform-native content, influencer.", topics: ["Algorithms", "Short-form video", "Copywriting", "Influencer marketing"], color: "purple" },
  { id: "M4", title: "Meta & Google Ads", weeks: "Weeks 12-18", sessions: "10", projects: "7", desc: "Paid marketing, conversion tracking.", topics: ["Meta Ads structure", "Pixel & CAPI", "Google Search/Display", "Performance Max"], color: "gold" },
  { id: "M5", title: "Automation & AI", weeks: "Weeks 19-20", sessions: "4", projects: "2", desc: "n8n workflows, email, WhatsApp.", topics: ["n8n automation", "Email marketing", "WhatsApp API", "Freelancing"], color: "pink" },
];
const colors = { cyan: "border-cyan-accent/30 bg-cyan-accent/5", emerald: "border-emerald-accent/30 bg-emerald-accent/5", purple: "border-purple-accent/30 bg-purple-accent/5", gold: "border-gold/30 bg-gold/5", pink: "border-pink-accent/30 bg-pink-accent/5" };

export default function CoursePage() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen pt-32 pb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
        <Chip variant="gold" className="mb-6">20+ Weeks Mentorship</Chip>
        <h1 className="mx-auto mb-6 max-w-4xl font-manrope text-4xl font-bold text-text-dark md:text-5xl lg:text-6xl">BusyGrowth <span className="text-gradient-gold">Digital Marketing</span> Course</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-text-gray">Learn the exact playbooks we run on client accounts.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-dim px-8 py-3 text-sm font-bold text-white shadow-glow-gold">Enroll for next batch →</Link>
          <Link href="/performance-course" className="rounded-full border border-border-gray bg-white px-8 py-3 text-sm font-medium text-text-gray shadow-sm">Compare with Performance Marketing</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[{ v: "20+", l: "Weeks" }, { v: "47+", l: "Sessions" }, { v: "20+", l: "Projects" }, { v: "Lifetime", l: "Access" }].map((s, i) => (<div key={i} className="rounded-xl border border-border-light bg-white p-4 text-center shadow-card-soft"><p className="text-2xl font-bold text-gold">{s.v}</p><p className="text-xs text-text-light">{s.l}</p></div>))}
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
          <h2 className="mb-4 text-sm font-semibold uppercase text-text-light">Curriculum</h2>
          {milestones.map((m, i) => (<button key={m.id} onClick={() => setActive(i)} className={`w-full rounded-xl border p-4 text-left transition-all ${active === i ? colors[m.color] + " shadow-card-soft" : "border-border-light bg-white"}`}><div className="flex justify-between"><span className="font-bold text-text-dark">{m.id}: {m.title.split("&")[0]}</span><span className="text-xs text-text-light">{m.weeks}</span></div><div className="mt-1 flex gap-3 text-xs text-text-light"><span>{m.sessions} Sessions</span><span>•</span><span>{m.projects} Projects</span></div></button>))}
        </motion.div>
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
          <div className="rounded-3xl border border-border-light bg-white p-8 shadow-card-soft">
            <span className="text-sm font-semibold uppercase text-gold">Milestone {active+1}</span>
            <h2 className="mt-2 font-manrope text-3xl font-bold text-text-dark">{milestones[active].title}</h2>
            <div className="mt-2 flex gap-4 text-sm text-text-light"><span>{milestones[active].weeks}</span><span>•</span><span>{milestones[active].sessions} Sessions</span><span>•</span><span>{milestones[active].projects} Projects</span></div>
            <p className="my-6 text-text-gray">{milestones[active].desc}</p>
            <h3 className="mb-4 text-sm font-semibold uppercase text-text-light">What You'll Learn</h3>
            <ul className="grid gap-3 md:grid-cols-2">{milestones[active].topics.map((t, i) => (<li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /><span className="text-sm text-text-gray">{t}</span></li>))}</ul>
          </div>
        </motion.div>
      </div>
      {/* Comparison Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 rounded-3xl border border-border-light bg-white p-8 shadow-card-soft">
        <h2 className="font-manrope text-2xl font-bold text-text-dark text-center">Which Course is Right for You?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
            <h3 className="text-xl font-bold text-gold">Full Digital Marketing</h3>
            <p className="mt-2 text-sm text-text-gray">20 Weeks • 47+ Sessions • All 5 Milestones</p>
            <ul className="mt-4 space-y-2 text-sm"><li>✓ SEO, Social, Content, Ads, Automation</li><li>✓ Complete digital marketing stack</li><li>✓ Best for beginners & career switchers</li></ul>
            <Link href="/contact" className="mt-6 inline-block text-sm font-medium text-gold hover:underline">Enroll →</Link>
          </div>
          <div className="rounded-2xl border border-cyan-accent/30 bg-cyan-accent/5 p-6">
            <h3 className="text-xl font-bold text-cyan-accent">Performance Marketing</h3>
            <p className="mt-2 text-sm text-text-gray">12 Weeks • 24+ Sessions • Ads Focused</p>
            <ul className="mt-4 space-y-2 text-sm"><li>✓ Meta Ads + Google Ads deep dive</li><li>✓ Campaign optimization & scaling</li><li>✓ Best for media buyers & specialists</li></ul>
            <Link href="/performance-course" className="mt-6 inline-block text-sm font-medium text-cyan-accent hover:underline">Learn more →</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}