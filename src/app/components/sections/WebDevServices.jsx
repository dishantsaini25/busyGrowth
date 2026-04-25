"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    tag: "Landing Page",
    price: "₹9,999",
    originalPrice: "₹14,999",
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
    color: "emerald",
    popular: false,
  },
  {
    name: "Business Pro",
    tag: "Professional Website",
    price: "₹22,999",
    originalPrice: "₹34,999",
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
    color: "gold",
    popular: true,
  },
  {
    name: "E-Commerce",
    tag: "Online Store",
    price: "₹49,999",
    originalPrice: "₹69,999",
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
    color: "purple",
    popular: false,
  },
];

export const WebDevServices = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="inline-block rounded-full bg-cyan-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Web Development
          </span>
          <h2 className="mt-3 font-manrope text-2xl font-bold text-text-dark sm:text-3xl lg:text-4xl">
            Need a website?{" "}
            <span className="text-gradient-gold">We build that too.</span>
          </h2>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card-soft transition-all hover:shadow-card-hover ${
                pkg.popular
                  ? "border-gold/40 ring-2 ring-gold/20"
                  : "border-border-light"
              }`}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-0 z-10">
                  <div className="rounded-bl-xl bg-gradient-to-r from-gold to-gold-dim px-4 py-1.5 text-xs font-bold text-white shadow-md">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              {/* Content - Flex grow to push button down */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Price Header */}
                <div className="mb-4 text-center">
                  <span className="inline-block rounded-full bg-bg-gray px-3 py-1 text-xs font-medium text-text-light">
                    {pkg.tag}
                  </span>
                  <h3 className="mt-3 font-manrope text-2xl font-bold text-text-dark">
                    {pkg.name}
                  </h3>
                  
                  {/* Price with discount */}
                  <div className="mt-3">
                    <span className="text-xs text-text-muted line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="mx-2 inline-block rounded-full bg-emerald-accent/10 px-2 py-0.5 text-[10px] font-bold text-emerald-accent">
                      SAVE {Math.round(((parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, ''))) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </span>
                  </div>
                  
                  <div className="mt-1">
                    <span className="text-4xl font-extrabold text-text-dark">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-text-light">/project</span>
                  </div>
                  
                  <p className="mt-1 text-xs font-medium text-amber-600">
                    ⏱️ Delivery: {pkg.timeline}
                  </p>
                </div>

                <p className="mb-4 text-center text-sm text-text-gray">
                  {pkg.description}
                </p>

                {/* Features - Flex grow to fill space */}
                <ul className="flex-1 space-y-2.5 border-t border-border-light pt-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-gray">
                      <span className={`mt-0.5 shrink-0 text-${pkg.color}-accent font-bold`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - Always at bottom */}
                <div className="mt-6 space-y-2">
                  <Link
                    href="/contact?service=web-development"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-all hover:scale-105 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-gold to-gold-dim shadow-glow-gold"
                        : "bg-gradient-to-r from-emerald-accent to-emerald-600"
                    }`}
                  >
                    Get Started
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
      </div>
    </section>
  );
};