"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { icon: "📱", title: "Social Media", desc: "Strategy, content, management & influencer marketing.", color: "cyan", href: "/services#social-media" },
  { icon: "📊", title: "Meta Ads", desc: "Campaign setup, creative, A/B testing & scaling.", color: "blue", href: "/services#meta-ads" },
  { icon: "🤖", title: "AI & Automation", desc: "Chatbots, lead gen, email & WhatsApp flows.", color: "purple", href: "/services#ai-automation" },
  { icon: "🎬", title: "Video Editing", desc: "Reels, YouTube, ad videos & color grading.", color: "pink", href: "/services#video-editing" },
];

export const Services = () => (
  <section id="services" className="py-12 sm:py-16">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className="mb-8 sm:mb-12"
    >
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        What We Do
      </h2>
      <p className="max-w-2xl text-2xl font-medium text-text-dark sm:text-3xl md:text-4xl">
        Hands-on execution for founders who want scale.
      </p>
    </motion.div>

    {/* 2 Columns on Mobile, 4 on Desktop */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
      {services.map((s, i) => (
        <motion.div 
          key={s.title} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.1 }} 
          whileHover={{ y: -6 }} 
          className="group relative overflow-hidden rounded-xl border bg-white p-4 shadow-card-soft transition-all hover:shadow-card-hover sm:rounded-2xl sm:p-6"
          style={{
            borderColor: s.color === 'cyan' ? 'rgba(47, 143, 230, 0.2)' :
                         s.color === 'blue' ? 'rgba(42, 91, 218, 0.2)' :
                         s.color === 'purple' ? 'rgba(99, 102, 241, 0.2)' :
                         'rgba(236, 72, 153, 0.2)'
          }}
        >
          <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">{s.icon}</div>
          <h3 className="relative mb-1.5 text-base font-semibold text-text-dark sm:mb-2 sm:text-xl">
            {s.title}
          </h3>
          <p className="relative text-xs text-text-gray sm:text-sm">
            {s.desc}
          </p>
          <Link 
            href={s.href} 
            className="relative mt-3 inline-block text-xs font-medium text-primary hover:underline sm:mt-4"
          >
            Learn more →
          </Link>
        </motion.div>
      ))}
    </div>

    <div className="mt-8 text-center sm:mt-10">
      <Link 
        href="/services" 
        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/10 sm:px-6 sm:py-3"
      >
        View all 35+ services →
      </Link>
    </div>
  </section>
);