"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  { category: "Social Media", href: "/services#social-media", items: ["Strategy", "Content Creation", "Management", "Influencer", "Analytics"] },
  { category: "Meta Ads", href: "/services#meta-ads", items: ["Campaign Setup", "Audience", "Creative", "A/B Testing", "Retargeting"] },
  { category: "AI & Automation", href: "/services#ai-automation", items: ["Chatbots", "Lead Gen", "Email/WhatsApp", "AI Content", "Workflows"] },
  { category: "Video Editing", href: "/services#video-editing", items: ["Reels/Shorts", "YouTube", "Ad Videos", "Color Grading", "Subtitles"] },
];

const courseLinks = [
  { href: "/course", label: "Full DM (20 Weeks)" },
  { href: "/performance-course", label: "Performance (12 Weeks)" },
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
        className={`sticky left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-2 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-transparent"
          }`}
      >
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-gold via-gold-bright to-gold-dim bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-2xl">
            BusyGrowth
          </span>
          <span className="ml-1.5 text-xs font-medium text-text-light sm:text-sm">Studio</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-text-gray lg:flex lg:gap-8">
          <div className="relative">
            <button onClick={() => { setServicesOpen(!servicesOpen); setCoursesOpen(false); }} className="flex items-center gap-1 transition hover:text-gold">
              Services <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full mt-2 w-[560px] rounded-2xl border border-border-light bg-white p-6 shadow-xl lg:w-[640px]">
                  <div className="grid grid-cols-2 gap-6">
                    {servicesMenu.map((cat) => (
                      <div key={cat.category}>
                        <Link href={cat.href} className="mb-3 block font-semibold text-text-dark hover:text-gold" onClick={() => setServicesOpen(false)}>{cat.category}</Link>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item}><Link href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-text-gray hover:text-gold" onClick={() => setServicesOpen(false)}>{item}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-border-light pt-4">
                    <Link href="/services" className="text-sm font-medium text-gold hover:underline" onClick={() => setServicesOpen(false)}>View all 35+ services →</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button onClick={() => { setCoursesOpen(!coursesOpen); setServicesOpen(false); }} className="flex items-center gap-1 transition hover:text-gold">
              Courses <svg className={`h-3 w-3 transition-transform ${coursesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <AnimatePresence>
              {coursesOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border-light bg-white p-2 shadow-xl">
                  {courseLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-xl px-4 py-3 text-sm text-text-gray hover:bg-bg-gray hover:text-gold" onClick={() => setCoursesOpen(false)}>{link.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="transition hover:text-gold">Contact</Link>
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-gradient-to-r from-gold to-gold-dim px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-glow-gold lg:inline-block">
          Book strategy call
        </Link>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-dim px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:px-4 sm:py-2 sm:text-sm">Call</Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-gold/30 bg-white shadow-md sm:h-10 sm:w-10">
            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-text-dark" />
            <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-5 bg-text-dark" />
            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-text-dark" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-xl lg:hidden">
            <div className="flex min-h-full flex-col px-6 py-20">
              <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
                <details className="group">
                  <summary className="list-none py-3 text-2xl font-medium text-text-dark marker:hidden">Services</summary>
                  <div className="ml-4 mt-2 space-y-4">
                    {servicesMenu.map((cat) => (
                      <div key={cat.category}>
                        <p className="font-semibold text-text-dark">{cat.category}</p>
                        {cat.items.map((item) => (
                          <Link key={item} href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={handleLinkClick} className="block py-1 text-base text-text-gray">{item}</Link>
                        ))}
                      </div>
                    ))}
                    <Link href="/services" onClick={handleLinkClick} className="block pt-2 text-base font-medium text-gold">View all services →</Link>
                  </div>
                </details>

                <details className="group">
                  <summary className="list-none py-3 text-2xl font-medium text-text-dark marker:hidden">Courses</summary>
                  <div className="ml-4 mt-2 space-y-2">
                    {courseLinks.map((c) => (
                      <Link key={c.href} href={c.href} onClick={handleLinkClick} className="block py-1 text-base text-text-gray">{c.label}</Link>
                    ))}
                  </div>
                </details>

                <Link href="/contact" onClick={handleLinkClick} className="block py-3 text-2xl font-medium text-text-dark">Contact</Link>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8">
                  <Link href="/contact" onClick={handleLinkClick} className="inline-block w-full rounded-full bg-gradient-to-r from-gold to-gold-dim py-4 text-center text-lg font-semibold text-white shadow-glow-gold">Book strategy call</Link>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex flex-col items-center gap-3 text-base">
                  <a href="mailto:hello@busygrowth.studio" className="text-text-light hover:text-gold">📧 hello@busygrowth.studio</a>
                  <a href="https://wa.me/919352757834" className="text-emerald-accent hover:underline">📱 +91 93527 57834</a>
                </motion.div>
              </motion.nav>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border-2 border-gold/40 bg-white px-8 py-3 text-base font-medium text-text-dark shadow-md hover:bg-gold/5">Close Menu ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};