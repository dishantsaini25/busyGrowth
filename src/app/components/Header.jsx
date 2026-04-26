"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  { category: "Social Media", href: "/services#social-media" },
  { category: "Meta Ads", href: "/services#meta-ads" },
  { category: "AI & Automation", href: "/services#ai-automation" },
  { category: "Video Editing", href: "/services#video-editing" },
  { category: "Web Development", href: "/services#web-development" },
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
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setCoursesOpen(false);
    setActiveMobileCategory(null);
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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo1.png" 
              alt="Logo" 
              className="h-12 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
              style={{ backgroundColor: 'transparent' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.querySelector('.fallback-logo')?.classList.remove('hidden');
              }}
            />
            <span className="fallback-logo hidden bg-gradient-primary bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl lg:text-2xl">
              BusyGrowth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-text-gray lg:flex">
            
            {/* Services Dropdown - Clean */}
            <div className="relative">
              <button 
                onClick={() => { setServicesOpen(!servicesOpen); setCoursesOpen(false); }} 
                className="flex items-center gap-1 transition hover:text-primary"
              >
                Services 
                <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }} 
                    className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border-light bg-white p-3 shadow-xl"
                  >
                    <div className="flex flex-col gap-1">
                      {servicesMenu.map((cat) => (
                        <Link
                          key={cat.category}
                          href={cat.href}
                          onClick={() => setServicesOpen(false)}
                          className="rounded-lg px-4 py-2.5 text-sm font-medium text-text-gray transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          {cat.category}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-border-light pt-2">
                      <Link 
                        href="/services" 
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
                      >
                        View All Services →
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
                className="flex items-center gap-1 transition hover:text-primary"
              >
                Courses 
                <svg className={`h-3 w-3 transition-transform ${coursesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }} 
                    className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border-light bg-white p-3 shadow-xl"
                  >
                    {courseLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setCoursesOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-text-gray transition-all hover:bg-primary/5 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="transition hover:text-primary">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <Link 
            href="/contact" 
            className="hidden rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-glow lg:inline-block"
          >
            Book strategy call
          </Link>

          {/* Mobile CTA & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link 
              href="/contact" 
              className="rounded-full bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-white shadow-md"
            >
              Call
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-full border border-primary/30 bg-white shadow-sm"
            >
              <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="h-0.5 w-4 bg-text-dark" />
              <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-4 bg-text-dark" />
              <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="h-0.5 w-4 bg-text-dark" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex min-h-full flex-col px-6 py-16">
              <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-1">

                {/* Services */}
                <div className="border-b border-border-light py-2">
                  <button 
                    onClick={() => setActiveMobileCategory(activeMobileCategory === 'services' ? null : 'services')} 
                    className="flex w-full items-center justify-between py-3 text-xl font-medium text-text-dark"
                  >
                    Services
                    <svg className={`h-5 w-5 text-primary transition-transform ${activeMobileCategory === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeMobileCategory === 'services' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pb-4 pt-2">
                          {servicesMenu.map((cat) => (
                            <Link 
                              key={cat.category} 
                              href={cat.href} 
                              onClick={handleLinkClick} 
                              className="block rounded-lg px-4 py-3 text-base text-text-gray transition-all hover:bg-primary/5 hover:text-primary"
                            >
                              {cat.category}
                            </Link>
                          ))}
                        </div>
                        <Link 
                          href="/services" 
                          onClick={handleLinkClick} 
                          className="inline-block pb-3 text-base font-semibold text-primary hover:underline"
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Courses */}
                <div className="border-b border-border-light py-2">
                  <button 
                    onClick={() => setActiveMobileCategory(activeMobileCategory === 'courses' ? null : 'courses')} 
                    className="flex w-full items-center justify-between py-3 text-xl font-medium text-text-dark"
                  >
                    Courses
                    <svg className={`h-5 w-5 text-primary transition-transform ${activeMobileCategory === 'courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeMobileCategory === 'courses' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        className="overflow-hidden pb-4"
                      >
                        {courseLinks.map((c) => (
                          <Link 
                            key={c.href} 
                            href={c.href} 
                            onClick={handleLinkClick} 
                            className="block rounded-lg px-4 py-3 text-base text-text-gray transition-all hover:bg-primary/5 hover:text-primary"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/contact" 
                  onClick={handleLinkClick} 
                  className="block py-4 text-xl font-medium text-text-dark"
                >
                  Contact
                </Link>

                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    onClick={handleLinkClick} 
                    className="block w-full rounded-full bg-gradient-primary py-3 text-center text-base font-semibold text-white shadow-glow"
                  >
                    Book strategy call
                  </Link>
                </div>

                <div className="mt-6 space-y-2 text-center">
                  <a href="mailto:hello@busygrowth.studio" className="block text-sm text-text-light hover:text-primary">
                    📧 hello@busygrowth.studio
                  </a>
                  <a href="https://wa.me/919352757834" className="block text-sm font-medium text-green">
                    📱 +91 93527 57834
                  </a>
                </div>
              </motion.nav>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-white px-6 py-2 text-sm font-medium text-text-dark shadow-md"
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};