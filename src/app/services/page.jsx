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
      "Creative Design (Ad Creatives)", 
      "A/B Testing (Split Testing)", 
      "Pixel Setup & Conversion Tracking", 
      "Retargeting Campaigns", 
      "Lead Generation Ads", 
      "E-commerce Ads", 
      "Budget Management & Scaling", 
      "Performance Monitoring & Optimization", 
      "Detailed Reporting & Insights"
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
      "Corporate & Business Videos", 
      "Color Correction & Grading", 
      "Sound Design & Audio Enhancement", 
      "Subtitle & Captioning", 
      "Video Optimization for Platforms", 
      "Raw Footage Editing", 
      "Bulk Video Editing"
    ] 
  },
  { 
    title: "Web Development", 
    icon: "💻", 
    color: "emerald", 
    services: [
      "Landing Page Design & Development",
      "Business Website (5-7 Pages)",
      "E-Commerce Store (Shopify/WooCommerce)",
      "Custom Web Applications",
      "Responsive Mobile-First Design",
      "Next.js / React Development",
      "Tailwind CSS Styling",
      "Framer Motion Animations",
      "Contact Form Integration",
      "Payment Gateway (Razorpay/Stripe)",
      "WhatsApp Business API Integration",
      "SEO-Friendly Structure",
      "Google Analytics Setup",
      "SSL Certificate Setup",
      "Website Maintenance & Support",
      "Website Redesign & Revamp",
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
        className="mb-12 text-center sm:mb-16"
      >
        <Chip variant="gold" className="mb-4 sm:mb-6">What We Offer</Chip>
        <h1 className="mx-auto mb-4 max-w-4xl font-manrope text-3xl font-bold text-text-dark sm:text-4xl md:text-5xl lg:text-6xl">
          Comprehensive <span className="text-gradient-primary">Digital Growth</span> Services
        </h1>
        <p className="mx-auto max-w-2xl text-base text-text-gray sm:text-lg">
          From strategy to execution—everything you need to scale your brand in one place.
        </p>
      </motion.div>

      {/* Service Categories */}
      <div className="space-y-14 sm:space-y-18">
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
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="text-2xl sm:text-3xl">{cat.icon}</span>
              <h2 className={`font-manrope text-2xl font-bold sm:text-3xl text-${cat.color}-accent`}>
                {cat.title}
              </h2>
              <span className="ml-auto text-sm text-text-light">{cat.services.length} services</span>
            </div>

            {/* Services Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {cat.services.map((service, i) => (
                <motion.div 
                  key={service} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.02 }}
                  className={`group rounded-xl border bg-white p-4 shadow-card-soft transition-all hover:shadow-card-hover sm:p-5 ${
                    cat.color === 'cyan' ? 'border-cyan-accent/20 hover:border-cyan-accent/40' :
                    cat.color === 'blue' ? 'border-blue-light/20 hover:border-blue-light/40' :
                    cat.color === 'purple' ? 'border-purple-accent/20 hover:border-purple-accent/40' :
                    cat.color === 'pink' ? 'border-pink-accent/20 hover:border-pink-accent/40' :
                    'border-green/20 hover:border-green/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      cat.color === 'cyan' ? 'bg-cyan-accent/10 text-cyan-accent' :
                      cat.color === 'blue' ? 'bg-blue-light/10 text-blue-light' :
                      cat.color === 'purple' ? 'bg-purple-accent/10 text-purple-accent' :
                      cat.color === 'pink' ? 'bg-pink-accent/10 text-pink-accent' :
                      'bg-green/10 text-green'
                    }`}>
                      {i + 1}
                    </span>
                    <p className="text-sm font-medium text-text-dark group-hover:text-primary sm:text-base">
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
          className="mt-14 sm:mt-18"
        >
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <span className="text-2xl sm:text-3xl">💻</span>
            <h2 className="font-manrope text-2xl font-bold text-green sm:text-3xl">
              Web Development Packages
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                name: "Starter",
                tag: "Landing Page",
                timeline: "3-5 Days",
                description: "Perfect for product launches & lead capture",
                features: [
                  "1-Page Responsive Design",
                  "Hero Section + CTA",
                  "Contact Form with Email",
                  "WhatsApp Integration",
                  "Mobile Optimized",
                  "Free SSL Certificate",
                  "Basic SEO Setup",
                  "2 Revisions",
                ],
                popular: false,
              },
              {
                name: "Business Pro",
                tag: "Professional Website",
                timeline: "7-10 Days",
                description: "Complete online presence for service businesses",
                features: [
                  "5-7 Pages (Home, About, Services, Contact, Blog)",
                  "Premium Design (Like this site)",
                  "Contact Form + Email Automation",
                  "WhatsApp Business Integration",
                  "Advanced SEO (Meta, Schema, Sitemap)",
                  "Google Analytics + Search Console",
                  "Social Media Integration",
                  "3 Revisions",
                ],
                popular: true,
              },
              {
                name: "E-Commerce",
                tag: "Online Store",
                timeline: "30-45 Days",
                description: "Full-featured store for D2C brands",
                features: [
                  "10+ Pages",
                  "Product Catalog (Unlimited)",
                  "Shopping Cart + Checkout",
                  "Razorpay Payment Gateway",
                  "Order Management System",
                  "Inventory Tracking",
                  "Customer Accounts",
                  "SEO + Speed Optimized",
                  "5 Revisions",
                ],
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
                  pkg.popular
                    ? "border-primary/40 ring-2 ring-primary/20"
                    : "border-border-light"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-0 top-0 z-10">
                    <div className="rounded-bl-xl bg-gradient-primary px-4 py-1.5 text-xs font-bold text-white shadow-md">
                      🔥 Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4 text-center">
                    <span className="inline-block rounded-full bg-bg-gray px-3 py-1 text-xs font-medium text-text-light">
                      {pkg.tag}
                    </span>
                    <h3 className="mt-3 font-manrope text-2xl font-bold text-text-dark">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary">
                      ⏱️ Delivery: {pkg.timeline}
                    </p>
                  </div>

                  <p className="mb-4 text-center text-sm text-text-gray">
                    {pkg.description}
                  </p>

                  <ul className="flex-1 space-y-2.5 border-t border-border-light pt-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-gray">
                        <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-2">
                    <Link
                      href="/contact?service=web-development"
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-all hover:scale-105 ${
                        pkg.popular
                          ? "bg-gradient-primary shadow-glow"
                          : "bg-green hover:bg-green-light"
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
        className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/5 to-teal/10 p-8 text-center sm:mt-20 sm:p-12"
      >
        <h3 className="font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
          Ready to grow your brand?
        </h3>
        <p className="mt-3 text-text-gray sm:mt-4">
          Let's discuss which services fit your goals. No obligation, just strategy.
        </p>
        <Link 
          href="/contact" 
          className="mt-6 inline-block rounded-full bg-gradient-primary px-8 py-4 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 sm:mt-8"
        >
          Book your free strategy call →
        </Link>
      </motion.div>
    </div>
  );
}