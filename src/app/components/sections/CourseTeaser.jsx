"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const milestoneCards = [
  {
    id: "M1",
    title: "Foundation & AI",
    subtitle: "Websites, funnels & AI mindset",
    color: "cyan",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    topics: ["Digital ecosystem", "ICP & personas", "WordPress", "AI tools"],
  },
  {
    id: "M2",
    title: "SEO & AEO",
    subtitle: "Search dominance in AI era",
    color: "emerald",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
    topics: ["Keyword strategy", "Technical SEO", "AEO & SGE", "GSC & GA4"],
  },
  {
    id: "M3",
    title: "Social & Content",
    subtitle: "Platform-led growth",
    color: "purple",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
    topics: ["Algorithms", "Short-form video", "Copywriting", "Influencer"],
  },
  {
    id: "M4",
    title: "Meta & Google Ads",
    subtitle: "Performance marketing",
    color: "gold",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    topics: ["Meta Ads", "Google Search", "Pixel & CAPI", "Performance Max"],
  },
];

export const CourseTeaser = () => (
  <section className="py-16 lg:py-16">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left Column - Course Info */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-cyan-accent">
          20+ Week Mentorship Program
        </span>
        
        <h2 className="mt-4 font-manrope text-4xl font-bold leading-tight text-text-dark md:text-5xl">
          Learn the same playbooks we run on client accounts.
        </h2>
        
        <p className="mt-6 text-lg leading-relaxed text-text-gray">
          BusyGrowth Digital Marketing Course covers everything from SEO to paid ads, 
          automation to AI. Live sessions, real projects, and lifetime access.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-cyan-accent/20 bg-cyan-accent/5 p-4">
            <p className="text-2xl font-bold text-cyan-accent">47+</p>
            <p className="text-xs text-text-light">Live Sessions</p>
          </div>
          <div className="rounded-xl border border-emerald-accent/20 bg-emerald-accent/5 p-4">
            <p className="text-2xl font-bold text-emerald-accent">20+</p>
            <p className="text-xs text-text-light">Real Projects</p>
          </div>
          <div className="rounded-xl border border-purple-accent/20 bg-purple-accent/5 p-4">
            <p className="text-2xl font-bold text-purple-accent">5</p>
            <p className="text-xs text-text-light">Milestones</p>
          </div>
          <div className="rounded-xl border border-gold/20 bg-gold/5 p-4">
            <p className="text-2xl font-bold text-gold">Lifetime</p>
            <p className="text-xs text-text-light">Access</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link 
            href="/course" 
            className="rounded-full bg-gradient-to-r from-cyan-accent to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all sm:px-8"
          >
            See full curriculum →
          </Link>
          <Link 
            href="/performance-course" 
            className="rounded-full border-2 border-gold/30 bg-white px-6 py-3 text-sm font-medium text-text-gray shadow-sm hover:border-gold hover:text-gold transition-all sm:px-8"
          >
            Performance Marketing (12 Weeks) →
          </Link>
        </div>
      </motion.div>

      {/* Right Column - Milestone Cards with Images */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {milestoneCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl border bg-white shadow-card-soft transition-all hover:shadow-card-hover ${
              card.color === 'cyan' ? 'border-cyan-accent/30' :
              card.color === 'emerald' ? 'border-emerald-accent/30' :
              card.color === 'purple' ? 'border-purple-accent/30' :
              'border-gold/30'
            }`}
          >
            {/* Image Section */}
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={card.image} 
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                card.color === 'cyan' ? 'from-cyan-accent/80 to-transparent' :
                card.color === 'emerald' ? 'from-emerald-accent/80 to-transparent' :
                card.color === 'purple' ? 'from-purple-accent/80 to-transparent' :
                'from-gold/80 to-transparent'
              }`} />
              {/* Badge */}
              <span className={`absolute bottom-2 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold backdrop-blur-sm ${
                card.color === 'cyan' ? 'text-cyan-accent' :
                card.color === 'emerald' ? 'text-emerald-accent' :
                card.color === 'purple' ? 'text-purple-accent' :
                'text-gold'
              }`}>
                {card.id}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="font-semibold text-text-dark">{card.title}</h3>
              <p className="text-xs text-text-light">{card.subtitle}</p>
              
              {/* Topics */}
              <div className="mt-3 flex flex-wrap gap-1">
                {card.topics.slice(0, 2).map((topic, i) => (
                  <span key={i} className="rounded-full bg-bg-gray px-2 py-0.5 text-[10px] text-text-light">
                    {topic}
                  </span>
                ))}
                {card.topics.length > 2 && (
                  <span className="rounded-full bg-bg-gray px-2 py-0.5 text-[10px] text-text-light">
                    +{card.topics.length - 2}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* M5 Automation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-2xl border border-pink-accent/30 bg-white shadow-card-soft transition-all hover:shadow-card-hover"
        >
          <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" 
              alt="Automation & AI"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-accent/80 to-transparent" />
            <span className="absolute bottom-2 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-pink-accent backdrop-blur-sm">
              M5
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-text-dark">Automation & AI</h3>
            <p className="text-xs text-text-light">n8n, email & WhatsApp flows</p>
            <div className="mt-3 flex flex-wrap gap-1">
              <span className="rounded-full bg-bg-gray px-2 py-0.5 text-[10px] text-text-light">n8n workflows</span>
              <span className="rounded-full bg-bg-gray px-2 py-0.5 text-[10px] text-text-light">AI agents</span>
              <span className="rounded-full bg-bg-gray px-2 py-0.5 text-[10px] text-text-light">+2</span>
            </div>
          </div>
        </motion.div>

        {/* Next Batch CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="col-span-1 sm:col-span-2"
        >
          <div className="rounded-2xl border-2 border-dashed border-gold/40 bg-gradient-to-r from-gold/10 via-amber-50/50 to-gold/10 p-6 text-center">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold">
              🎓 NEXT BATCH
            </span>
            <h4 className="mt-3 text-xl font-bold text-text-dark">Limited Seats Available</h4>
            <p className="mt-1 text-sm text-text-gray">Join 500+ students who transformed their careers</p>
            <Link 
              href="/contact" 
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dim px-6 py-2.5 text-sm font-bold text-white shadow-glow-gold hover:scale-105 transition-all"
            >
              Reserve your seat →
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);