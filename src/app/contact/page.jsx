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
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(formData) 
      });
      const data = await res.json();
      if (data.success) { 
        setStatus({ loading: false, success: true, error: null }); 
        setFormData({ name: "", email: "", phone: "", businessType: "", message: "", interest: "growth-plan" });
        // Scroll to top on success
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else { 
        setStatus({ loading: false, success: false, error: data.message }); 
      }
    } catch { 
      setStatus({ loading: false, success: false, error: 'Network error. Please try again.' }); 
    }
  };

  // Success Page
  if (status.success) return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-20 sm:pt-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="mx-auto max-w-md text-center"
      >
        <div className="rounded-3xl border border-primary/30 bg-white p-8 shadow-card-soft sm:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green/10 sm:h-20 sm:w-20">
            <svg className="h-8 w-8 text-green sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-3 font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
            Thanks, {formData.name?.split(' ')[0] || 'friend'}! 🎉
          </h2>
          <p className="mb-6 text-sm text-text-gray sm:text-base">
            We'll get back within 24 hours. Check your email for confirmation.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-glow"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );

  // Main Contact Form
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <Chip variant="gold" className="mb-4 sm:mb-6">Let's Talk Growth</Chip>
            <h1 className="mb-4 font-manrope text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
              Book your free{" "}
              <span className="text-gradient-primary">strategy call</span>
            </h1>
            <p className="mb-6 text-base text-text-gray sm:mb-8 sm:text-lg">
              No pressure. Just a conversation about where you want to go.
            </p>
            
            {/* What Happens Next */}
            <div className="space-y-4 rounded-2xl border border-border-light bg-white p-5 shadow-card-soft sm:p-6">
              <h3 className="text-lg font-semibold text-text-dark">What happens next?</h3>
              <ul className="space-y-3">
                {[
                  { step: 1, text: "Fill the form — takes less than 60 seconds" },
                  { step: 2, text: "We'll reach out on WhatsApp/Email within 24h" },
                  { step: 3, text: "30-45 min strategy call to map your growth" },
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {s.step}
                    </span>
                    <span className="text-sm text-text-gray">{s.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* Direct Contact */}
              <div className="border-t border-border-light pt-4">
                <p className="text-sm text-text-light">Prefer to reach out directly?</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a 
                    href="mailto:busygrowth@busygrowth.in" 
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    📧 busygrowth@busygrowth.in
                  </a>
                  <a 
                    href="https://wa.me/919352757834" 
                    className="text-sm font-medium text-green hover:underline"
                  >
                    📱 +91 93527 57834
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl border border-border-light bg-white p-6 shadow-card-soft sm:rounded-3xl sm:p-8">
              <h2 className="mb-5 text-xl font-semibold text-text-dark sm:mb-6 sm:text-2xl">
                Tell us about your project
              </h2>
              
              {/* Error Message */}
              {status.error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                  {status.error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    Full name *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3" 
                    placeholder="Enter your full name" 
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3" 
                    placeholder="Enter your email address" 
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    WhatsApp number *
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3" 
                    placeholder="+91 98765 43210" 
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    Business type *
                  </label>
                  <select 
                    name="businessType" 
                    required 
                    value={formData.businessType} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3"
                  >
                    <option value="">Select business type</option>
                    <option value="d2c">D2C Brand</option>
                    <option value="service">Service Business</option>
                    <option value="creator">Content Creator / Influencer</option>
                    <option value="local">Local Business</option>
                    <option value="saas">SaaS / Tech</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Interest */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    Interested in *
                  </label>
                  <select 
                    name="interest" 
                    required 
                    value={formData.interest} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3"
                  >
                    <option value="growth-plan">Free Growth Plan (Strategy Call)</option>
                    <option value="ads">Meta / Google Ads Management</option>
                    <option value="content">Reels & Content Studio</option>
                    <option value="automation">WhatsApp / Email Automation</option>
                    <option value="course">Full DM Course</option>
                    <option value="performance-course">Performance Marketing Course</option>
                    <option value="web-development">Web Development</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">
                    Message (optional)
                  </label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full rounded-xl border border-border-gray bg-white px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10" 
                    placeholder="Tell us about your goals or any questions..." 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status.loading} 
                  className="w-full rounded-xl bg-gradient-primary py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5"
                >
                  {status.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit & book free call
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}