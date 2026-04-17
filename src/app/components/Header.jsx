"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  { 
    category: "Social Media", 
    href: "/services#social-media", 
    items: ["Strategy", "Content Creation", "Management", "Influencer", "Analytics"],
    color: "pink"
  },
  { 
    category: "Meta Ads", 
    href: "/services#meta-ads", 
    items: ["Campaign Setup", "Audience", "Creative", "A/B Testing", "Retargeting"],
    color: "orange"
  },
  { 
    category: "AI & Automation", 
    href: "/services#ai-automation", 
    items: ["Chatbots", "Lead Gen", "Email/WhatsApp", "AI Content", "Workflows"],
    color: "purple"
  },
  { 
    category: "Video Editing", 
    href: "/services#video-editing", 
    items: ["Reels/Shorts", "YouTube", "Ad Videos", "Color Grading", "Subtitles"],
    color: "cyan"
  },
];

const courseLinks = [
  { href: "/course", label: "Full DM (20 Weeks)", color: "purple" },
  { href: "/performance-course", label: "Performance (12 Weeks)", color: "cyan" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setCoursesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "bg-white/85 backdrop-blur-xl border-b border-border-light shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo - Colorful with Reem Kufi */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber via-orange to-pink shadow-glow-amber">
            <span className="font-display text-base font-bold text-white">B</span>
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-text-primary">
            BusyGrowth
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {/* Services Mega Menu */}
          <div className="relative">
            <button 
              onClick={() => { setServicesOpen(!servicesOpen); setCoursesOpen(false); }} 
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 transition-all hover:bg-gradient-to-r hover:from-amber/10 hover:to-pink/10 hover:text-orange"
            >
              Services 
              <svg className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }} 
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-[580px] rounded-2xl border border-border-light bg-white p-6 shadow-xl lg:w-[660px]"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {servicesMenu.map((cat) => (
                      <div key={cat.category}>
                        <Link 
                          href={cat.href} 
                          className={`mb-3 block font-display text-base font-semibold text-${cat.color} hover:underline`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {cat.category}
                        </Link>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link 
                                href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                className="text-sm text-text-secondary transition-colors hover:text-orange" 
                                onClick={() => setServicesOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border-light pt-4">
                    <Link 
                      href="/services" 
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:underline" 
                      onClick={() => setServicesOpen(false)}
                    >
                      View all 35+ services
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Courses Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setCoursesOpen(!coursesOpen); setServicesOpen(false); }} 
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 transition-all hover:bg-gradient-to-r hover:from-purple/10 hover:to-cyan/10 hover:text-purple"
            >
              Courses 
              <svg className={`h-3.5 w-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {coursesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }} 
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border-light bg-white p-2 shadow-xl"
                >
                  {courseLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className={`block rounded-xl px-4 py-2.5 text-sm transition-all hover:bg-gradient-to-r hover:from-${link.color}/10 hover:to-${link.color}/5 hover:text-${link.color}`}
                      onClick={() => setCoursesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/contact" 
            className="rounded-xl px-3 py-2 transition-all hover:bg-gradient-to-r hover:from-amber/10 hover:to-pink/10 hover:text-orange"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA - Rainbow Gradient */}
        <Link 
          href="/contact" 
          className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber via-orange to-pink px-5 py-2.5 font-display text-sm font-semibold text-white shadow-glow-amber transition-all hover:scale-105 hover:shadow-glow-pink lg:inline-flex"
        >
          Book strategy call
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile CTA & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link 
            href="/contact" 
            className="rounded-xl bg-gradient-to-r from-amber to-orange px-3 py-1.5 text-xs font-medium text-white shadow-md sm:px-4 sm:py-2 sm:text-sm"
          >
            Call
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-orange/30 bg-white shadow-sm sm:h-10 sm:w-10"
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }} 
              className="h-0.5 w-5 bg-gradient-to-r from-amber to-orange"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="h-0.5 w-5 bg-gradient-to-r from-orange to-pink"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }} 
              className="h-0.5 w-5 bg-gradient-to-r from-pink to-purple"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex min-h-full flex-col px-6 py-20">
              <motion.nav 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="flex flex-col"
              >
                {/* Services Accordion */}
                <details className="group border-b border-border-light py-2">
                  <summary className="flex list-none items-center justify-between py-3 font-display text-2xl font-medium text-text-primary marker:hidden">
                    <span className="bg-gradient-to-r from-amber to-orange bg-clip-text text-transparent">Services</span>
                    <svg className="h-5 w-5 text-orange transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="ml-2 space-y-4 pb-4">
                    {servicesMenu.map((cat) => (
                      <div key={cat.category}>
                        <p className={`mb-2 font-display font-semibold text-${cat.color}`}>{cat.category}</p>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link 
                                href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                onClick={handleLinkClick} 
                                className="block py-1 text-base text-text-secondary transition-colors hover:text-orange"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link 
                      href="/services" 
                      onClick={handleLinkClick} 
                      className="inline-block pt-2 text-base font-medium text-orange hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </details>
                
                {/* Courses Accordion */}
                <details className="group border-b border-border-light py-2">
                  <summary className="flex list-none items-center justify-between py-3 font-display text-2xl font-medium text-text-primary marker:hidden">
                    <span className="bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Courses</span>
                    <svg className="h-5 w-5 text-purple transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="ml-2 space-y-2 pb-4">
                    {courseLinks.map((c) => (
                      <Link 
                        key={c.href} 
                        href={c.href} 
                        onClick={handleLinkClick} 
                        className={`block py-2 text-base transition-colors hover:text-${c.color}`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
                
                {/* Contact Link */}
                <Link 
                  href="/contact" 
                  onClick={handleLinkClick} 
                  className="border-b border-border-light py-4 font-display text-2xl font-medium text-text-primary transition-colors hover:text-orange"
                >
                  Contact
                </Link>
                
                {/* Mobile CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 }} 
                  className="mt-8"
                >
                  <Link 
                    href="/contact" 
                    onClick={handleLinkClick} 
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber via-orange to-pink py-4 text-center font-display text-lg font-semibold text-white shadow-glow-amber"
                  >
                    Book strategy call
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.15 }} 
                  className="mt-8 space-y-3 text-center"
                >
                  <a 
                    href="mailto:hello@busygrowth.studio" 
                    className="block text-base text-text-secondary transition-colors hover:text-cyan"
                  >
                    📧 hello@busygrowth.studio
                  </a>
                  <a 
                    href="https://wa.me/919352757834" 
                    className="block text-base font-medium text-emerald transition-colors hover:text-emerald/80"
                  >
                    📱 +91 93527 57834
                  </a>
                </motion.div>
              </motion.nav>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl border-2 border-orange/30 bg-white px-8 py-3 text-sm font-medium text-text-primary shadow-md transition-all hover:bg-gradient-to-r hover:from-amber/10 hover:to-pink/10"
            >
              Close Menu ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};