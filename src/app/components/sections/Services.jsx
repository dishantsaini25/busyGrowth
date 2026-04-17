"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { icon: "📱", title: "Social Media", desc: "Strategy, content, management & influencer marketing.", color: "cyan", href: "/services#social-media" },
  { icon: "📊", title: "Meta Ads", desc: "Campaign setup, creative, A/B testing & scaling.", color: "gold", href: "/services#meta-ads" },
  { icon: "🤖", title: "AI & Automation", desc: "Chatbots, lead gen, email & WhatsApp flows.", color: "purple", href: "/services#ai-automation" },
  { icon: "🎬", title: "Video Editing", desc: "Reels, YouTube, ad videos & color grading.", color: "pink", href: "/services#video-editing" },
];
const colors = { cyan: "border-cyan-accent/20", gold: "border-gold/20", purple: "border-purple-accent/20", pink: "border-pink-accent/20" };

export const Services = () => (
  <section id="services" className="py-15">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">What We Do</h2>
      <p className="mb-12 max-w-2xl text-3xl font-medium text-text-dark md:text-4xl">Hands-on execution for founders who want scale.</p>
    </motion.div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-card-soft hover:shadow-card-hover ${colors[s.color]}`}>
          <div className="text-4xl mb-4">{s.icon}</div>
          <h3 className="relative mb-2 text-xl font-semibold text-text-dark">{s.title}</h3>
          <p className="relative text-sm text-text-gray">{s.desc}</p>
          <Link href={s.href} className="relative mt-4 inline-block text-xs font-medium text-gold group-hover:underline">Learn more →</Link>
        </motion.div>
      ))}
    </div>
    <div className="mt-10 text-center">
      <Link href="/services" className="inline-flex items-center gap-2 rounded-full der-gold/30 bg-gold/5 px-6 py-3 text-sm font-medium text-gold hover:bg-gold/10 transition-all">View all 35+ services →</Link>
    </div>
  </section>
);