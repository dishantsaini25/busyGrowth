"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "What makes BusyGrowth different?", a: "We're operators, not account managers. We actually run the ads and edit the reels." },
  { q: "Do you only work in Jaipur?", a: "No, we work across India and globally. Remote-first workflow." },
  { q: "Minimum ad budget?", a: "₹50,000/month recommended. We evaluate each business individually." },
  { q: "Which course is right for me?", a: "Full DM Course covers everything (20 weeks). Performance Marketing focuses on Ads (12 weeks)." },
];

export const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="pt-18 pb-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-sm font-semibold uppercase text-gold">Got Questions?</span>
          <h2 className="mt-4 font-manrope text-4xl font-bold text-text-dark">Straight answers.<br /><span className="mt-4 font-manrope text-4xl font-bold text-text-dark">Zero fluff.</span></h2>
          <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <h3 className="text-lg font-semibold text-text-dark">Still have questions?</h3>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg"
            >
              Book strategy call →
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-2xl border bg-white ${open === i ? "border-gold/30 shadow-card-soft" : "border-border-light"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                <span className={`text-base font-medium ${open === i ? "text-gold" : "text-text-dark"}`}>{f.q}</span>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${open === i ? "border-gold/50 bg-gold/10 text-gold" : "border-border-gray bg-gray-50 text-text-light"}`}>
                  <svg className={`h-3 w-3 transition-transform ${open === i ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}><p className="px-6 text-sm text-text-gray">{f.a}</p></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};