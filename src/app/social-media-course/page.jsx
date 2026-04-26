"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "../components/sections/common";

const modules = [
  { 
    week: "1-2", 
    title: "Social Media Foundation", 
    topics: ["Platform Algorithms", "Content Strategy", "Audience Research", "Competitor Analysis"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
  },
  { 
    week: "3-4", 
    title: "Content Creation Mastery", 
    topics: ["Reels & Shorts Scripting", "Graphic Design Basics", "Video Recording Setup", "AI Content Tools"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop"
  },
  { 
    week: "5-6", 
    title: "Instagram & Facebook Growth", 
    topics: ["Instagram Algorithm", "Reels Strategy", "Story Marketing", "Facebook Groups"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
  },
  { 
    week: "7-8", 
    title: "YouTube & LinkedIn", 
    topics: ["YouTube SEO", "Thumbnail Design", "LinkedIn Content", "B2B Strategy"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop"
  },
  { 
    week: "9-10", 
    title: "Influencer & Community", 
    topics: ["Influencer Outreach", "UGC Campaigns", "Community Building", "Brand Deals"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
  },
  { 
    week: "11-12", 
    title: "Analytics & Monetization", 
    topics: ["Social Media Analytics", "ROI Tracking", "Client Acquisition", "Freelancing"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop"
  },
];

export default function SocialMediaCoursePage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 sm:mb-14">
        <Chip variant="cyan" className="mb-4 sm:mb-6">12 Weeks Program</Chip>
        <h1 className="mb-4 font-manrope text-3xl font-bold text-text-dark sm:text-4xl md:text-5xl lg:text-6xl">
          Social Media <span className="text-cyan-accent">Mastery</span> Course
        </h1>
        <p className="mb-6 max-w-3xl text-base text-text-gray sm:text-lg">
          Master Instagram, YouTube, LinkedIn & Facebook. Learn content creation, influencer marketing, and monetization.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-cyan-accent to-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all sm:px-8 sm:py-3">
            Enroll Now →
          </Link>
          <Link href="/course" className="rounded-full border border-border-gray bg-white px-6 py-2.5 text-sm font-medium text-text-gray shadow-sm hover:border-cyan-accent/50 transition-all sm:px-8 sm:py-3">
            Compare with Full DM Course
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[{ v: "12", l: "Weeks" }, { v: "24+", l: "Sessions" }, { v: "6+", l: "Projects" }, { v: "Certificate", l: "Recognized" }].map((s, i) => (
          <div key={i} className="rounded-xl border border-border-light bg-white p-3 text-center shadow-card-soft sm:p-4">
            <p className="text-xl font-bold text-cyan-accent sm:text-2xl">{s.v}</p>
            <p className="text-[10px] text-text-light sm:text-xs">{s.l}</p>
          </div>
        ))}
      </motion.div>

      {/* Curriculum */}
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
              <div className="relative h-36 w-full overflow-hidden sm:h-40">
                <img src={m.image} alt={m.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-accent/70 to-transparent" />
                <span className="absolute bottom-2 left-3 text-base font-bold text-white sm:text-lg">Week {m.week}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold text-text-dark sm:text-lg">{m.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {m.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-text-gray sm:text-sm">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-3xl border border-cyan-accent/30 bg-gradient-to-r from-cyan-accent/5 to-transparent p-8 text-center sm:p-12">
        <h3 className="font-manrope text-2xl font-bold text-text-dark sm:text-3xl">Ready to become a Social Media expert?</h3>
        <p className="mt-3 text-text-gray">Limited seats available for next batch.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-full bg-gradient-to-r from-cyan-accent to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all sm:px-8 sm:py-4">
          Apply for next batch →
        </Link>
      </motion.div>
    </div>
  );
}