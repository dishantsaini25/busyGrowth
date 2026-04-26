"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Chip } from "../components/sections/common";

const milestones = [
  { 
    id: "M1", 
    title: "Foundation & AI Mindset", 
    weeks: "Weeks 1-2", 
    sessions: "6", 
    projects: "2", 
    desc: "Core concepts, websites, landing pages. Build the foundation with audience research and funnel thinking.", 
    topics: ["Digital ecosystem", "ICP & personas", "WordPress", "AI ideation"], 
    color: "cyan",
    image: "https://as2.ftcdn.net/v2/jpg/02/52/76/09/1000_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg"
  },
  { 
    id: "M2", 
    title: "SEO & AEO", 
    weeks: "Weeks 3-7", 
    sessions: "15", 
    projects: "5", 
    desc: "Organic visibility, modern SEO. Master keyword strategy, technical SEO, and AI-driven search.", 
    topics: ["Keyword strategy", "On-page/Technical", "AEO & SGE", "GSC & GA4"], 
    color: "emerald",
    image: "https://as2.ftcdn.net/v2/jpg/02/75/87/93/1000_F_275879381_ARBnyLcOKNJPiJJgDWvcTIm1titf2KR2.jpg"
  },
  { 
    id: "M3", 
    title: "Social & Content", 
    weeks: "Weeks 8-11", 
    sessions: "12", 
    projects: "4", 
    desc: "Platform-native content, influencer marketing. Build organic reach through engaging content.", 
    topics: ["Algorithms", "Short-form video", "Copywriting", "Influencer marketing"], 
    color: "purple",
    image: "https://as1.ftcdn.net/v2/jpg/00/81/67/40/1000_F_81674070_NWoOEpm4vbxd4FfEKAH5JnMJSgW6Ugwh.jpg"
  },
  { 
    id: "M4", 
    title: "Meta & Google Ads", 
    weeks: "Weeks 12-18", 
    sessions: "10", 
    projects: "7", 
    desc: "Paid marketing, conversion tracking. Master Meta and Google Ads for profitable campaigns.", 
    topics: ["Meta Ads structure", "Pixel & CAPI", "Google Search/Display", "Performance Max"], 
    color: "blue",
    image: "https://as2.ftcdn.net/v2/jpg/11/81/37/03/1000_F_1181370320_3LSvkB3RuaFc5dcgD2mhf7EVQmN8KxYH.jpg"
  },
  { 
    id: "M5", 
    title: "Automation & AI", 
    weeks: "Weeks 19-20", 
    sessions: "4", 
    projects: "2", 
    desc: "n8n workflows, email, WhatsApp. Build scalable automation systems for marketing operations.", 
    topics: ["n8n automation", "Email marketing", "WhatsApp API", "Freelancing"], 
    color: "pink",
    image: "https://as1.ftcdn.net/v2/jpg/06/29/77/56/1000_F_629775658_2lXX288g1w43ILk7L4DRq4tESZRTGsvn.jpg"
  },
];

const colors = { 
  cyan: "border-cyan-accent/30 bg-cyan-accent/5", 
  emerald: "border-emerald-accent/30 bg-emerald-accent/5", 
  purple: "border-purple-accent/30 bg-purple-accent/5", 
  blue: "border-primary/30 bg-primary/5", 
  pink: "border-pink-accent/30 bg-pink-accent/5" 
};

export default function CoursePage() {
  const [active, setActive] = useState(0);
  
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <Chip variant="gold" className="mb-4 sm:mb-6">20+ Weeks Mentorship</Chip>
        <h1 className="mx-auto mb-4 max-w-4xl font-manrope text-3xl font-bold text-text-dark sm:text-4xl md:text-5xl lg:text-6xl">
          BusyGrowth <span className="text-gradient-primary">Digital Marketing</span> Course
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base text-text-gray sm:text-lg">
          Learn the exact playbooks we run on client accounts. Live sessions, real projects.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/contact" className="rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-white shadow-glow hover:scale-105 transition-all sm:px-8 sm:py-3">
            Enroll for next batch →
          </Link>
          <Link href="/performance-course" className="rounded-full border border-border-gray bg-white px-6 py-2.5 text-sm font-medium text-text-gray shadow-sm hover:border-primary/50 hover:text-primary transition-all sm:px-8 sm:py-3">
            Compare Courses
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[{ v: "20+", l: "Weeks" }, { v: "47+", l: "Sessions" }, { v: "20+", l: "Projects" }, { v: "Lifetime", l: "Access" }].map((s, i) => (
          <div key={i} className="rounded-xl border border-border-light bg-white p-3 text-center shadow-card-soft sm:p-4">
            <p className="text-xl font-bold text-primary sm:text-2xl">{s.v}</p>
            <p className="text-[10px] text-text-light sm:text-xs">{s.l}</p>
          </div>
        ))}
      </motion.div>

      {/* Curriculum Section */}
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Left Sidebar - Milestone List */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-2 sm:space-y-3">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-light">Curriculum</h2>
          {milestones.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className={`w-full rounded-xl border p-3 text-left transition-all sm:p-4 ${
                active === i ? colors[m.color] + " shadow-card-soft" : "border-border-light bg-white"
              }`}
            >
              <div className="flex justify-between">
                <span className="text-sm font-bold text-text-dark sm:text-base">{m.id}: {m.title.split("&")[0]}</span>
                <span className="text-xs text-text-light">{m.weeks}</span>
              </div>
              <div className="mt-1 flex gap-2 text-xs text-text-light">
                <span>{m.sessions} Sessions</span>
                <span>•</span>
                <span>{m.projects} Projects</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Right Content - Milestone Details */}
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-card-soft sm:rounded-3xl">
            <div className="relative h-36 w-full overflow-hidden sm:h-44 lg:h-48">
              <img src={milestones[active].image} alt={milestones[active].title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {milestones[active].id}
                </span>
              </div>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Milestone {active+1}</span>
              <h2 className="mt-2 font-manrope text-xl font-bold text-text-dark sm:text-2xl lg:text-3xl">{milestones[active].title}</h2>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-text-light">
                <span>{milestones[active].weeks}</span><span>•</span>
                <span>{milestones[active].sessions} Live Sessions</span><span>•</span>
                <span>{milestones[active].projects} Projects</span>
              </div>
              <p className="my-4 text-text-gray sm:my-5">{milestones[active].desc}</p>
              
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-light">What You'll Learn</h3>
              <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                {milestones[active].topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-text-gray">{t}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 border-t border-border-light pt-4">
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Request detailed curriculum →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comparison Section - All 4 Courses */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-2xl border border-border-light bg-white p-5 shadow-card-soft sm:mt-16 sm:rounded-3xl sm:p-8">
        <h2 className="font-manrope text-xl font-bold text-text-dark text-center sm:text-2xl">Which Course is Right for You?</h2>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          
          {/* Full DM */}
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50/30 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-primary sm:text-xl">Full Digital Marketing</h3>
            <p className="mt-2 text-sm text-text-gray">20 Weeks • 47+ Sessions • All 5 Milestones</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> SEO, Social, Content, Ads, Automation</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Complete digital marketing stack</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Best for beginners & career switchers</li>
            </ul>
            <Link href="/contact" className="mt-5 inline-block text-sm font-medium text-primary hover:underline">Enroll Now →</Link>
          </div>

          {/* Performance Marketing */}
          <div className="rounded-2xl border border-blue-light/30 bg-gradient-to-br from-blue-light/5 to-blue-50/30 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-blue-light sm:text-xl">Performance Marketing</h3>
            <p className="mt-2 text-sm text-text-gray">12 Weeks • 24+ Sessions • Ads Focused</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-light">✓</span> Meta Ads + Google Ads deep dive</li>
              <li className="flex items-start gap-2"><span className="text-blue-light">✓</span> Campaign optimization & scaling</li>
              <li className="flex items-start gap-2"><span className="text-blue-light">✓</span> Best for media buyers & specialists</li>
            </ul>
            <Link href="/performance-course" className="mt-5 inline-block text-sm font-medium text-blue-light hover:underline">Learn more →</Link>
          </div>

          {/* Social Media */}
          <div className="rounded-2xl border border-pink-accent/30 bg-gradient-to-br from-pink-accent/5 to-pink-50/30 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-pink-accent sm:text-xl">Social Media Mastery</h3>
            <p className="mt-2 text-sm text-text-gray">8 Weeks • 24+ Sessions • Content Focused</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-pink-accent">✓</span> Instagram, YouTube, LinkedIn</li>
              <li className="flex items-start gap-2"><span className="text-pink-accent">✓</span> Content creation & influencer marketing</li>
              <li className="flex items-start gap-2"><span className="text-pink-accent">✓</span> Best for creators & social managers</li>
            </ul>
            <Link href="/social-media-course" className="mt-5 inline-block text-sm font-medium text-pink-accent hover:underline">Learn more →</Link>
          </div>

          {/* WordPress */}
          <div className="rounded-2xl border border-green/30 bg-gradient-to-br from-green/5 to-green-50/30 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-green sm:text-xl">WordPress Website</h3>
            <p className="mt-2 text-sm text-text-gray">8 Weeks • 20+ Sessions • 3+ Websites</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-green">✓</span> No coding required</li>
              <li className="flex items-start gap-2"><span className="text-green">✓</span> WooCommerce & client projects</li>
              <li className="flex items-start gap-2"><span className="text-green">✓</span> Best for freelancers & business owners</li>
            </ul>
            <Link href="/wordpress-course" className="mt-5 inline-block text-sm font-medium text-green hover:underline">Learn more →</Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}