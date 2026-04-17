"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CourseChip } from "./common";

export const CourseTeaser = () => (
  <section className="py-10">
    <div className="grid gap-12 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <span className="text-sm font-semibold uppercase text-cyan-accent">20+ Week Mentorship</span>
        <h2 className="mt-4 font-manrope text-4xl font-bold text-text-dark md:text-5xl">Learn the same playbooks we run on client accounts.</h2>
        <p className="mt-6 text-lg text-text-gray">BusyGrowth Digital Marketing Course. Live sessions, real projects.</p>
        <ul className="mt-8 space-y-3 text-sm text-text-gray">
          <li>✓ 47+ live sessions</li><li>✓ 20+ real projects</li><li>✓ AI tools & automation</li><li>✓ Lifetime access</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/course" className="rounded-full bg-cyan-accent/10 px-8 py-3 text-sm font-bold text-cyan-accent border border-cyan-accent/30 hover:bg-cyan-accent hover:text-white">See full curriculum →</Link>
          <Link href="/performance-course" className="rounded-full border border-border-gray bg-white px-8 py-3 text-sm font-medium text-text-gray shadow-sm hover:border-gold/50">Performance Marketing (12 Weeks) →</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
        <CourseChip title="M1: Foundation" subtitle="Websites & AI" color="cyan" />
        <CourseChip title="M2: SEO & AEO" subtitle="Search dominance" color="emerald" />
        <CourseChip title="M3: Social" subtitle="Platform growth" color="purple" />
        <CourseChip title="M4: Ads" subtitle="Meta & Google" color="gold" />
        <CourseChip title="M5: Automation" subtitle="n8n & AI" color="pink" />
        <div className="col-span-2 rounded-xl border border-gold/30 bg-gold/5 p-4 text-center"><p className="text-sm font-medium text-gold">Next batch soon. Limited seats.</p></div>
      </motion.div>
    </div>
  </section>
);