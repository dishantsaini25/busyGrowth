"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import { Chip } from "../components/sections/common";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", message: "", interest: "growth-plan" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (data.success) { setStatus({ loading: false, success: true, error: null }); setFormData({ name: "", email: "", phone: "", businessType: "", message: "", interest: "growth-plan" }); }
      else { setStatus({ loading: false, success: false, error: data.message }); }
    } catch { setStatus({ loading: false, success: false, error: 'Network error.' }); }
  };

  if (status.success) return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-2xl text-center">
        <div className="rounded-3xl border border-gold/30 bg-white p-12 shadow-card-soft">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold text-3xl">✓</div>
          <h2 className="mb-4 text-3xl font-bold text-text-dark">Thanks, {formData.name?.split(' ')[0] || 'friend'}! 🎉</h2>
          <p className="mb-8 text-text-gray">We'll get back within 24h. Check your email!</p>
          <Link href="/" className="rounded-full bg-gold px-6 py-2 text-sm font-medium text-white">Back to Home</Link>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Chip variant="gold" className="mb-6">Let's Talk Growth</Chip>
          <h1 className="mb-4 font-manrope text-4xl font-bold text-text-dark lg:text-5xl">Book your free <span className="text-gradient-gold">strategy call</span></h1>
          <p className="mb-8 text-lg text-text-gray">No pressure. Just a conversation about where you want to go.</p>
          <div className="space-y-6 rounded-2xl border border-border-light bg-white p-6 shadow-card-soft">
            <h3 className="text-lg font-semibold text-text-dark">What happens next?</h3>
            <ul className="space-y-4">
              {["Fill form (60 sec)", "We reach out within 24h", "30-45 min strategy call"].map((s, i) => (<li key={i} className="flex gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">{i+1}</span><span className="text-text-gray">{s}</span></li>))}
            </ul>
            <div className="border-t border-border-light pt-6">
              <p className="text-sm text-text-light">Prefer direct?</p>
              <div className="mt-3 flex gap-4">
                <a href="mailto:hello@busygrowth.studio" className="text-sm text-cyan-accent">📧 hello@busygrowth.studio</a>
                <a href="https://wa.me/919352757834" className="text-sm text-emerald-accent">📱 +91 93527 57834</a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="rounded-3xl border border-border-light bg-white p-8 shadow-card-soft">
            <h2 className="mb-6 text-2xl font-semibold text-text-dark">Tell us about your project</h2>
            {status.error && <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{status.error}</div>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label className="mb-2 block text-sm font-medium text-text-dark">Full name *</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50" placeholder="Aarav Sharma" /></div>
              <div><label className="mb-2 block text-sm font-medium text-text-dark">Email *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50" placeholder="aarav@brand.com" /></div>
              <div><label className="mb-2 block text-sm font-medium text-text-dark">WhatsApp *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50" placeholder="+91 98765 43210" /></div>
              <div><label className="mb-2 block text-sm font-medium text-text-dark">Business type *</label><select name="businessType" required value={formData.businessType} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark"><option value="">Select</option><option>D2C</option><option>Service</option><option>Creator</option><option>Local</option><option>SaaS</option></select></div>
              <div><label className="mb-2 block text-sm font-medium text-text-dark">Interested in *</label><select name="interest" required value={formData.interest} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark"><option value="growth-plan">Free Growth Plan</option><option value="ads">Ads Management</option><option value="content">Reels & Content</option><option value="automation">Automation</option><option value="course">Full DM Course</option><option value="performance-course">Performance Marketing Course</option></select></div>
              <div><label className="mb-2 block text-sm font-medium text-text-dark">Message</label><textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-text-dark" placeholder="Tell us about your goals..." /></div>
              <button type="submit" disabled={status.loading} className="w-full rounded-full bg-linear-to-r from-gold to-gold-dim py-4 text-sm font-bold text-white shadow-glow-gold hover:scale-105 disabled:opacity-50">{status.loading ? 'Sending...' : 'Submit & book free call →'}</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}