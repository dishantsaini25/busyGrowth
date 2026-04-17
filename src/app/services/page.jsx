"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "../components/sections/common";

const serviceCategories = [
  { title: "Social Media", icon: "📱", color: "cyan", services: ["Social Media Strategy", "Account Setup & Optimization", "Content Creation", "Content Calendar Planning", "Social Media Management", "Audience Engagement", "Influencer Marketing", "Analytics & Reporting", "Brand Monitoring", "Hashtag & Trend Research", "Social Media Audit"] },
  { title: "Meta Ads", icon: "📊", color: "gold", services: ["Meta Ads Strategy & Planning", "Campaign Setup & Structure", "Audience Research & Targeting", "Creative Design (Ad Creatives)", "A/B Testing (Split Testing)", "Pixel Setup & Conversion Tracking", "Retargeting Campaigns", "Lead Generation Ads", "E-commerce Ads", "Budget Management & Scaling", "Performance Monitoring & Optimization", "Detailed Reporting & Insights"] },
  { title: "AI & Automation", icon: "🤖", color: "purple", services: ["AI Chatbot Development", "Lead Generation Automation", "Email & WhatsApp Automation", "AI Content Generation", "Workflow Integration"] },
  { title: "Video Editing", icon: "🎬", color: "pink", services: ["Social Media Video Editing", "Reels & Shorts Editing", "YouTube Video Editing", "Ad Video Editing", "Corporate & Business Videos", "Color Correction & Grading", "Sound Design & Audio Enhancement", "Subtitle & Captioning", "Video Optimization for Platforms", "Raw Footage Editing", "Bulk Video Editing"] },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
        <Chip variant="gold" className="mb-6">What We Offer</Chip>
        <h1 className="mx-auto mb-6 max-w-4xl font-manrope text-4xl font-bold text-text-dark md:text-5xl lg:text-6xl">Comprehensive <span className="text-gradient-gold">Digital Growth</span> Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-text-gray">From strategy to execution—everything you need to scale your brand in one place.</p>
      </motion.div>
      <div className="space-y-16">
        {serviceCategories.map((cat, idx) => (
          <motion.section key={cat.title} id={cat.title.toLowerCase().replace(/\s+/g, '-')} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">{cat.icon}</span>
              <h2 className={`font-manrope text-3xl font-bold text-${cat.color}-accent`}>{cat.title}</h2>
              <span className="ml-auto text-sm text-text-light">{cat.services.length} services</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((service, i) => (
                <motion.div key={service} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className={`rounded-xl border border-${cat.color}-accent/20 bg-white p-5 shadow-card-soft transition-all hover:shadow-card-hover`}>
                  <div className="flex items-start gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-${cat.color}-accent/10 text-${cat.color}-accent text-xs font-bold`}>{i + 1}</span>
                    <p className="font-medium text-text-dark">{service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 rounded-3xl border border-gold/30 bg-linear-to-r from-gold/5 to-transparent p-12 text-center">
        <h3 className="font-manrope text-3xl font-bold text-text-dark">Ready to grow your brand?</h3>
        <p className="mt-4 text-text-gray">Let's discuss which services fit your goals.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-linear-to-r from-gold to-gold-dim px-8 py-4 text-sm font-bold text-white shadow-glow-gold hover:scale-105 transition-all">Book your free strategy call →</Link>
      </motion.div>
    </div>
  );
}