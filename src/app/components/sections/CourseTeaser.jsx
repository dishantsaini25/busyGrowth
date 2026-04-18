"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
    color: "orange",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    topics: ["Meta Ads", "Google Search", "Pixel & CAPI", "Performance Max"],
  },
  {
    id: "M5",
    title: "Automation & AI",
    subtitle: "n8n, email & WhatsApp flows",
    color: "pink",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    topics: ["n8n workflows", "AI agents", "Email automation", "WhatsApp API"],
  },
];

export const CourseTeaser = () => (
  <section className="py-16 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      
      {/* Left Column - All Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="flex flex-col"
      >
        {/* Course Info */}
        <div>
          <span className="inline-block rounded-full bg-gradient-to-r from-cyan/10 to-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            20+ Week Mentorship Program
          </span>
          
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl">
            Learn the same playbooks we run on client accounts.
          </h2>
          
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            BusyGrowth Digital Marketing Course covers everything from SEO to paid ads, 
            automation to AI. Live sessions, real projects, and lifetime access.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-transparent p-4">
            <p className="font-display text-2xl font-bold text-cyan">47+</p>
            <p className="text-xs text-text-tertiary">Live Sessions</p>
          </div>
          <div className="rounded-xl border border-emerald/20 bg-gradient-to-br from-emerald/5 to-transparent p-4">
            <p className="font-display text-2xl font-bold text-emerald">20+</p>
            <p className="text-xs text-text-tertiary">Real Projects</p>
          </div>
          <div className="rounded-xl border border-purple/20 bg-gradient-to-br from-purple/5 to-transparent p-4">
            <p className="font-display text-2xl font-bold text-purple">5</p>
            <p className="text-xs text-text-tertiary">Milestones</p>
          </div>
          <div className="rounded-xl border border-amber/20 bg-gradient-to-br from-amber/5 to-transparent p-4">
            <p className="font-display text-2xl font-bold text-amber">Lifetime</p>
            <p className="text-xs text-text-tertiary">Access</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link 
            href="/course" 
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-cyan to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-cyan transition-all hover:scale-105"
          >
            See full curriculum
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link 
            href="/performance-course" 
            className="inline-flex items-center gap-2 rounded-xl border-2 border-orange/30 bg-white px-6 py-3 text-sm font-medium text-text-secondary shadow-sm transition-all hover:border-orange hover:text-orange"
          >
            Performance Marketing (12 Weeks)
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Next Batch CTA - Now on Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
     <div className="rounded-2xl border-2 border-dashed border-amber/40 bg-gradient-to-br from-amber/20 via-orange/15 to-pink/20 p-5 shadow-lg">
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber via-orange to-pink text-white shadow-glow-amber">
      <span className="text-xl animate-pulse">🎓</span>
    </div>
    <div>
      <span className="inline-block rounded-full bg-gradient-to-r from-amber to-orange px-3 py-1 text-xs font-bold text-white shadow-sm">
        🔥 NEXT BATCH
      </span>
      <h4 className="mt-1 font-display text-lg font-bold text-text-dark">
        Limited Seats Available
      </h4>
    </div>
  </div>
  <p className="mt-3 text-sm font-medium text-text-dark">
    Join <span className="font-bold text-amber">500+ students</span> who transformed their careers. Next batch starts soon!
  </p>
  <Link 
    href="/contact" 
    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber via-orange to-pink px-6 py-3 text-sm font-bold text-black shadow-glow-amber transition-all hover:scale-[1.02] hover:shadow-glow-pink sm:w-auto"
  >
    Reserve your seat
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>
        </motion.div>
      </motion.div>

      {/* Right Column - Milestone Cards Grid */}
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
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl border bg-white shadow-md transition-all hover:shadow-lg ${
              card.color === 'cyan' ? 'border-cyan/30' :
              card.color === 'emerald' ? 'border-emerald/30' :
              card.color === 'purple' ? 'border-purple/30' :
              card.color === 'orange' ? 'border-orange/30' :
              'border-pink/30'
            }`}
          >
            {/* Image Section */}
            <div className="relative h-32 w-full overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                card.color === 'cyan' ? 'from-cyan/80 to-transparent' :
                card.color === 'emerald' ? 'from-emerald/80 to-transparent' :
                card.color === 'purple' ? 'from-purple/80 to-transparent' :
                card.color === 'orange' ? 'from-orange/80 to-transparent' :
                'from-pink/80 to-transparent'
              }`} />
              {/* Badge */}
              <span className={`absolute bottom-2 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold backdrop-blur-sm ${
                card.color === 'cyan' ? 'text-cyan' :
                card.color === 'emerald' ? 'text-emerald' :
                card.color === 'purple' ? 'text-purple' :
                card.color === 'orange' ? 'text-orange' :
                'text-pink'
              }`}>
                {card.id}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="font-display text-base font-semibold text-text-primary">{card.title}</h3>
              <p className="text-xs text-text-tertiary">{card.subtitle}</p>
              
              {/* Topics */}
              <div className="mt-3 flex flex-wrap gap-1">
                {card.topics.slice(0, 2).map((topic, i) => (
                  <span key={i} className="rounded-full bg-bg-tertiary px-2 py-0.5 text-[10px] text-text-tertiary">
                    {topic}
                  </span>
                ))}
                {card.topics.length > 2 && (
                  <span className="rounded-full bg-bg-tertiary px-2 py-0.5 text-[10px] text-text-tertiary">
                    +{card.topics.length - 2}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);