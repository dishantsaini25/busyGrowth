"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-24 border-t border-border-light bg-white">
      {/* Top Gradient Line - Fixed */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <span className="bg-linear-to-r from-gold via-gold/90 to-gold-dim bg-clip-text text-2xl font-bold text-transparent">
                BusyGrowth
              </span>
              <span className="ml-1 text-xs font-medium uppercase text-text-light">Studio</span>
            </Link>
            <p className="text-sm leading-relaxed text-text-gray">
              Jaipur-based performance studio for founders & creators. 
              We build digital experiences that print leads on autopilot.
            </p>
            
            {/* Mobile-only contact */}
            <div className="flex gap-4 pt-2 sm:hidden">
              <a href="mailto:hello@busygrowth.studio" className="text-sm text-cyan-accent">
                📧 hello@busygrowth.studio
              </a>
              <a href="https://wa.me/919352757834" className="text-sm text-emerald-accent">
                📱 WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links + More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-6 sm:col-span-2 lg:col-span-1"
          >
            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-text-gray transition hover:text-gold">Home</Link></li>
                <li><Link href="/services" className="text-sm text-text-gray transition hover:text-gold">Services</Link></li>
                <li><Link href="/course" className="text-sm text-text-gray transition hover:text-gold">Full DM Course</Link></li>
                                <li><Link href="/performance-course" className="text-sm text-text-gray transition hover:text-gold">Performance Course</Link></li>
                <li><Link href="/contact" className="text-sm text-text-gray transition hover:text-gold">Contact</Link></li>
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Services (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden space-y-3 lg:block"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
              Services
            </h3>
            <ul className="space-y-2">
              <li><Link href="/services#social-media" className="text-sm text-text-gray transition hover:text-gold">Social Media</Link></li>
              <li><Link href="/services#meta-ads" className="text-sm text-text-gray transition hover:text-gold">Meta Ads</Link></li>
              <li><Link href="/services#ai-automation" className="text-sm text-text-gray transition hover:text-gold">AI & Automation</Link></li>
              <li><Link href="/services#video-editing" className="text-sm text-text-gray transition hover:text-gold">Video Editing</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden space-y-3 lg:block"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
              Let's Connect
            </h3>
            
            <div className="space-y-3">
              {/* WhatsApp Card - Emerald Gradient */}
              <a
                href="https://wa.me/919352757834"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-emerald-accent/20 bg-linear-to-br from-emerald-accent/5 to-emerald-accent/10 p-3 transition-all hover:from-emerald-accent/10 hover:to-emerald-accent/20"
              >
                <div className="rounded-full bg-emerald-accent/20 p-2 text-emerald-accent">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.499 2 2.006 6.493 2.006 12c0 1.76.46 3.483 1.333 5l-1.333 4.86 5.013-1.313c1.452.793 3.087 1.207 4.78 1.207h.004c5.507 0 10-4.493 10-10 0-2.677-1.041-5.185-2.926-7.072z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">WhatsApp us</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-emerald-accent">
                    +91 93527 57834
                  </p>
                </div>
              </a>

              {/* Email Card - Cyan Gradient */}
              <a
                href="mailto:hello@busygrowth.studio"
                className="group flex items-center gap-3 rounded-xl border border-cyan-accent/20 bg-linear-to-br from-cyan-accent/5 to-cyan-accent/10 p-3 transition-all hover:from-cyan-accent/10 hover:to-cyan-accent/20"
              >
                <div className="rounded-full bg-cyan-accent/20 p-2 text-cyan-accent">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">Email us</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-cyan-accent">
                    hello@busygrowth.studio
                  </p>
                </div>
              </a>

              {/* Location Card - Gold Gradient */}
              <div className="flex items-start gap-3 rounded-xl border border-border-light bg-linear-to-br from-gold/5 to-amber-50/30 p-3">
                <div className="rounded-full bg-gold/20 p-2 text-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">Based in</p>
                  <p className="text-sm font-medium text-text-dark">Jaipur, Rajasthan</p>
                  <p className="text-xs text-text-light">Working worldwide 🌍</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 grid grid-cols-4 gap-2 rounded-xl border border-border-light bg-linear-to-br from-slate-50 to-gray-50 p-4 md:my-12 md:gap-4 md:p-6"
        >
          <div className="text-center">
            <p className="text-xl font-bold text-gold md:text-2xl">80+</p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Campaigns</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-cyan-accent md:text-2xl">₹1Cr+</p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Ad Spend</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-emerald-accent md:text-2xl">3.2x</p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Avg ROAS</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-purple-accent md:text-2xl">24/7</p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Automation</p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border-light pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-text-light md:text-sm">
            © {currentYear} BusyGrowth Studio. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:gap-6 md:text-sm">
            <Link href="/privacy" className="text-text-light transition hover:text-gold">Privacy</Link>
            <span className="text-border-light">|</span>
            <Link href="/terms" className="text-text-light transition hover:text-gold">Terms</Link>
            <span className="text-border-light">|</span>
            <Link href="/refund" className="text-text-light transition hover:text-gold">Refund</Link>
          </div>

          <p className="text-xs text-text-light md:text-sm">
            Made with <span className="text-red-400">❤️</span> in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
};