"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "../components/sections/common";

const serviceCategories = [
  { 
    title: "Social Media", 
    icon: "📱", 
    color: "cyan", 
    services: [
      "Social Media Strategy", 
      "Account Setup & Optimization", 
      "Content Creation", 
      "Content Calendar Planning", 
      "Social Media Management", 
      "Audience Engagement", 
      "Influencer Marketing", 
      "Analytics & Reporting", 
      "Brand Monitoring", 
      "Hashtag & Trend Research", 
      "Social Media Audit"
    ] 
  },
  { 
    title: "Meta Ads", 
    icon: "📊", 
    color: "blue", 
    services: [
      "Meta Ads Strategy & Planning", 
      "Campaign Setup & Structure", 
      "Audience Research & Targeting", 
      "Creative Design", 
      "A/B Testing", 
      "Pixel Setup & Tracking", 
      "Retargeting Campaigns", 
      "Lead Generation Ads", 
      "E-commerce Ads", 
      "Budget Management", 
      "Performance Monitoring", 
      "Detailed Reporting"
    ] 
  },
  { 
    title: "AI & Automation", 
    icon: "🤖", 
    color: "purple", 
    services: [
      "AI Chatbot Development", 
      "Lead Generation Automation", 
      "Email & WhatsApp Automation", 
      "AI Content Generation", 
      "Workflow Integration"
    ] 
  },
  { 
    title: "Video Editing", 
    icon: "🎬", 
    color: "pink", 
    services: [
      "Social Media Video Editing", 
      "Reels & Shorts Editing", 
      "YouTube Video Editing", 
      "Ad Video Editing", 
      "Corporate Videos", 
      "Color Correction", 
      "Sound Design", 
      "Subtitle & Captioning", 
      "Platform Optimization", 
      "Raw Footage Editing", 
      "Bulk Video Editing"
    ] 
  },
  { 
    title: "Web Development", 
    icon: "💻", 
    color: "emerald", 
    services: [
      "Landing Page Design",
      "Business Website (5-7 Pages)",
      "E-Commerce Store",
      "Custom Web Applications",
      "Responsive Design",
      "Next.js / React Dev",
      "Tailwind CSS Styling",
      "Framer Motion Animation",
      "Contact Form Integration",
      "Payment Gateway Setup",
      "WhatsApp API Integration",
      "SEO-Friendly Structure",
      "Google Analytics",
      "SSL Certificate",
      "Website Maintenance",
      "Website Redesign",
      "Speed Optimization",
      "Source Code Delivery"
    ] 
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-10 text-center sm:mb-14"
      >
        <Chip variant="gold" className="mb-4 sm:mb-6">What We Offer</Chip>
        <h1 className="mx-auto mb-3 max-w-4xl font-manrope text-2xl font-bold text-text-dark sm:text-4xl md:text-5xl lg:text-6xl">
          Comprehensive <span className="text-gradient-primary">Digital Growth</span> Services
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-text-gray sm:text-base lg:text-lg">
          From strategy to execution—everything you need to scale your brand.
        </p>
      </motion.div>

      {/* Service Categories */}
      <div className="space-y-10 sm:space-y-14">
        {serviceCategories.map((cat, idx) => (
          <motion.section 
            key={cat.title} 
            id={cat.title.toLowerCase().replace(/\s+/g, '-')} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1 }}
          >
            {/* Category Header */}
            <div className="mb-4 flex items-center gap-2 sm:mb-6">
              <span className="text-xl sm:text-2xl">{cat.icon}</span>
              <h2 className="font-manrope text-xl font-bold sm:text-2xl lg:text-3xl" style={{
                color: cat.color === 'cyan' ? '#2F8FE6' :
                       cat.color === 'blue' ? '#2A5BDA' :
                       cat.color === 'purple' ? '#6366f1' :
                       cat.color === 'pink' ? '#ec4899' : '#4CD964'
              }}>
                {cat.title}
              </h2>
              <span className="ml-auto text-xs text-text-light sm:text-sm">{cat.services.length} services</span>
            </div>

            {/* Services Grid - 2 COLUMNS ON MOBILE */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 lg:gap-4">
              {cat.services.map((service, i) => (
                <motion.div 
                  key={service} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.02 }}
                  className="group rounded-lg border bg-white p-2.5 shadow-card-soft transition-all hover:shadow-card-hover sm:rounded-xl sm:p-4"
                  style={{
                    borderColor: cat.color === 'cyan' ? 'rgba(47, 143, 230, 0.2)' :
                                 cat.color === 'blue' ? 'rgba(42, 91, 218, 0.2)' :
                                 cat.color === 'purple' ? 'rgba(99, 102, 241, 0.2)' :
                                 cat.color === 'pink' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(76, 217, 100, 0.2)'
                  }}
                >
                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold sm:h-6 sm:w-6 sm:text-xs"
                      style={{
                        backgroundColor: cat.color === 'cyan' ? 'rgba(47, 143, 230, 0.1)' :
                                         cat.color === 'blue' ? 'rgba(42, 91, 218, 0.1)' :
                                         cat.color === 'purple' ? 'rgba(99, 102, 241, 0.1)' :
                                         cat.color === 'pink' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(76, 217, 100, 0.1)',
                        color: cat.color === 'cyan' ? '#2F8FE6' :
                               cat.color === 'blue' ? '#2A5BDA' :
                               cat.color === 'purple' ? '#6366f1' :
                               cat.color === 'pink' ? '#ec4899' : '#4CD964'
                      }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-xs leading-tight text-text-dark group-hover:text-primary sm:text-sm sm:leading-normal">
                      {service}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Web Development Packages Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14"
        >
          <div className="mb-4 flex items-center gap-2 sm:mb-6">
            <span className="text-xl sm:text-2xl">💻</span>
            <h2 className="font-manrope text-xl font-bold text-green sm:text-2xl lg:text-3xl">
              Web Development Packages
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              {
                name: "Starter",
                tag: "Landing Page",
                timeline: "3-5 Days",
                description: "Perfect for product launches & lead capture",
                features: ["1-Page Responsive Design", "Hero Section + CTA", "Contact Form", "WhatsApp Integration", "Mobile Optimized", "SSL Certificate", "Basic SEO", "2 Revisions"],
                popular: false,
              },
              {
                name: "Business Pro",
                tag: "Professional Website",
                timeline: "7-10 Days",
                description: "Complete online presence for service businesses",
                features: ["5-7 Pages", "Premium Design", "Contact Form + Email", "WhatsApp Business", "Advanced SEO", "Google Analytics", "Social Media Integration", "3 Revisions"],
                popular: true,
              },
              {
                name: "E-Commerce",
                tag: "Online Store",
                timeline: "30-45 Days",
                description: "Full-featured store for D2C brands",
                features: ["10+ Pages", "Product Catalog", "Cart + Checkout", "Razorpay Payment", "Order Management", "Inventory Tracking", "Customer Accounts", "SEO Optimized", "5 Revisions"],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card-soft transition-all hover:shadow-card-hover ${
                  pkg.popular ? "border-primary/40 ring-2 ring-primary/20" : "border-border-light"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-0 top-0 z-10">
                    <div className="rounded-bl-xl bg-gradient-primary px-3 py-1 text-xs font-bold text-white shadow-md">
                      🔥 Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 text-center">
                    <span className="inline-block rounded-full bg-bg-gray px-2.5 py-0.5 text-xs font-medium text-text-light">
                      {pkg.tag}
                    </span>
                    <h3 className="mt-2 font-manrope text-xl font-bold text-text-dark sm:text-2xl">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary">
                      ⏱️ {pkg.timeline}
                    </p>
                  </div>

                  <p className="mb-3 text-center text-xs text-text-gray sm:text-sm">
                    {pkg.description}
                  </p>

                  <ul className="flex-1 space-y-1.5 border-t border-border-light pt-3 sm:space-y-2 sm:pt-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-text-gray sm:gap-2 sm:text-sm">
                        <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 space-y-2">
                    <Link
                      href="/contact?service=web-development"
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 ${
                        pkg.popular ? "bg-gradient-primary shadow-glow" : "bg-green hover:bg-green-light"
                      }`}
                    >
                      Get Quote
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <p className="text-center text-[10px] text-text-muted">
                      Or WhatsApp: +91 93527 57834
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        className="mt-12 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-teal/10 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-10"
      >
        <h3 className="font-manrope text-xl font-bold text-text-dark sm:text-2xl lg:text-3xl">
          Ready to grow your brand?
        </h3>
        <p className="mt-2 text-sm text-text-gray sm:mt-3 sm:text-base">
          Let's discuss which services fit your goals. No obligation, just strategy.
        </p>
        <Link 
          href="/contact" 
          className="mt-5 inline-block rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 sm:mt-6 sm:px-8 sm:py-4"
        >
          Book your free strategy call →
        </Link>
      </motion.div>
    </div>
  );
}