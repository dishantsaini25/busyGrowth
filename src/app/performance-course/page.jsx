"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "../components/sections/common";


const modules = [
  { 
    week: "1-2", 
    title: "Meta Ads Foundation", 
    topics: ["Business Manager", "Campaign Structure", "Ad Objectives", "Budgeting"],
    image: "https://as2.ftcdn.net/v2/jpg/19/56/07/41/1000_F_1956074130_gCKQM5oD9OauKyoxWr7czn6Sx2LYkwyi.jpg"
  },
  { 
    week: "3-4", 
    title: "Audience & Targeting", 
    topics: ["Custom Audiences", "Lookalikes", "Interest Targeting", "Retargeting"],
    image: "https://as2.ftcdn.net/v2/jpg/09/11/69/71/1000_F_911697105_yhi5knEeqYw6gL3JncVmUuQoYTQUnNlJ.jpg"
  },
  { 
    week: "5-6", 
    title: "Creative & Copy", 
    topics: ["Ad Creatives", "Copywriting", "A/B Testing", "Dynamic Creative"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80"
  },
  { 
    week: "7-8", 
    title: "Google Search Ads", 
    topics: ["Keyword Research", "Match Types", "Ad Copy", "Extensions"],
    image: "https://as1.ftcdn.net/v2/jpg/12/07/73/86/1000_F_1207738683_gE9UPGw7xCUIQhLyqe0kxALYnl7xiuxl.jpg"
  },
  { 
    week: "9-10", 
    title: "Google Display & Video", 
    topics: ["Display Network", "YouTube Ads", "Placements", "Remarketing"],
    image: "https://as1.ftcdn.net/v2/jpg/19/32/18/56/1000_F_1932185636_tbdcFJYkaOO9RtbBlaNJrssxY4IEsNCj.jpg"
  },
  { 
    week: "11-12", 
    title: "Tracking & Scaling", 
    topics: ["Pixel & CAPI", "GA4 Integration", "Performance Max", "Scaling Budgets"],
    image: "https://as1.ftcdn.net/v2/jpg/19/67/89/78/1000_F_1967897890_CQbls5gO9OreWZ4K7frV9VsuImRhQbjK.jpg"
  },
];

export default function PerformanceCoursePage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-10">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <Chip variant="cyan" className="mb-4 sm:mb-6">12 Weeks Intensive</Chip>
        <h1 className="mb-4 font-manrope text-3xl font-bold text-text-dark sm:text-4xl md:text-5xl lg:text-6xl">
          Performance Marketing <span className="text-cyan-accent">Mastery</span>
        </h1>
        <p className="mb-6 max-w-3xl text-base text-text-gray sm:text-lg">
          Master Meta Ads and Google Ads. Learn to plan, execute, and scale profitable campaigns with real budgets and live projects.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link href="/contact" className="rounded-full bg-linear-to-r from-cyan-accent to-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all sm:px-8 sm:py-3">
            Enroll Now →
          </Link>
          <Link href="/course" className="rounded-full border border-border-gray bg-white px-6 py-2.5 text-sm font-medium text-text-gray shadow-sm hover:border-cyan-accent/50 transition-all sm:px-8 sm:py-3">
            Compare with Full DM Course
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[{ v: "12", l: "Weeks" }, { v: "24+", l: "Sessions" }, { v: "8+", l: "Projects" }, { v: "Certificate", l: "Recognized" }].map((s, i) => (
          <div key={i} className="rounded-xl border border-border-light bg-white p-3 text-center shadow-card-soft sm:p-4">
            <p className="text-xl font-bold text-cyan-accent sm:text-2xl">{s.v}</p>
            <p className="text-[10px] text-text-light sm:text-xs">{s.l}</p>
          </div>
        ))}
      </motion.div>

      {/* Curriculum Cards with Images */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="mb-6 font-manrope text-2xl font-bold text-text-dark sm:text-3xl">Curriculum Overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-card-soft transition-all hover:shadow-card-hover"
            >
              {/* Module Image */}
              <div className="relative h-36 w-full overflow-hidden sm:h-40">
                <img 
                  src={m.image} 
                  alt={m.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-accent/70 to-transparent" />
                <span className="absolute bottom-3 left-4 text-lg font-bold text-white">Week {m.week}</span>
              </div>
              
              {/* Module Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-dark">{m.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {m.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-gray">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-2xl border border-border-light bg-white p-6 shadow-card-soft sm:p-8">
        <h3 className="text-lg font-semibold text-text-dark sm:text-xl">Tools You'll Master</h3>
        <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
          {["Meta Ads Manager", "Google Ads", "Google Tag Manager", "GA4", "Meta Pixel", "Google Analytics", "Canva", "ChatGPT"].map((t) => (
            <span key={t} className="rounded-full border border-border-light bg-linear-to-br from-slate-50 to-gray-50 px-3 py-1.5 text-xs text-text-gray sm:px-4 sm:py-2 sm:text-sm">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-3xl border border-gold/30 bg-linear-to-r from-gold/5 to-transparent p-8 text-center sm:p-12">
        <h3 className="font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
          Ready to become a Performance Marketing specialist?
        </h3>
        <p className="mt-3 text-text-gray">Limited seats available for next batch.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-full bg-linear-to-r from-cyan-accent to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all sm:px-8 sm:py-4">
          Apply for next batch →
        </Link>
      </motion.div>
    </div>
  );
}