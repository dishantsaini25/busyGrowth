"use client";
import { motion } from "framer-motion";

export const FounderSection = () => {
  const founders = [
    {
      name: "Ankit",
      role: "Founder",
      image: "/images/ankit.png",
      phone: "+91 9079315929",
      email: "ankitsinghthakur7773@gmail.com",
    },
    {
      name: "Kanhiya",
      role: "Co-Founder",
      image: "/images/kanhiya.webp",
      phone: "+91 93527 57834",
      email: "kanhiyakumawat139@gmail.com",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            Meet the Team
          </span>
          <h2 className="mt-3 font-manrope text-2xl font-bold text-text-dark sm:text-3xl lg:text-4xl">
            The minds behind{" "}
            <span className="text-gradient-gold">BusyGrowth</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-gray sm:text-base">
            Hands-on experts who personally manage your growth — no account managers, no fluff
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border-light bg-white shadow-card-soft transition-all hover:shadow-card-hover"
            >
              {/* Full Width Image Section */}
              <div className="relative h-72 w-full overflow-hidden sm:h-80 lg:h-96">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600";
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Name & Role Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-manrope text-2xl font-bold text-white sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold sm:text-base">
                    {founder.role}
                  </p>
                </div>

              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6">
                {/* Contact Details */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Phone Card */}
                  <a
                    href={`tel:${founder.phone.replace(/\s/g, '')}`}
                    className="group/card flex flex-col items-center rounded-xl border border-border-light bg-linear-to-br from-emerald-accent/5 to-emerald-accent/10 p-3 text-center transition-all hover:border-emerald-accent/30 hover:shadow-md sm:p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-accent/20 text-emerald-accent transition-all group-hover/card:bg-emerald-accent group-hover/card:text-white sm:h-12 sm:w-12">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.499 2 2.006 6.493 2.006 12c0 1.76.46 3.483 1.333 5l-1.333 4.86 5.013-1.313c1.452.793 3.087 1.207 4.78 1.207h.004c5.507 0 10-4.493 10-10 0-2.677-1.041-5.185-2.926-7.072z" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs font-medium text-text-dark sm:text-sm">
                      {founder.phone}
                    </span>
                    <span className="text-xs text-text-light">Call / WhatsApp</span>
                  </a>

                  {/* Email Card */}
                  <a
                    href={`mailto:${founder.email}`}
                    className="group/card flex flex-col items-center rounded-xl border border-border-light bg-linear-to-br from-cyan-accent/5 to-cyan-accent/10 p-3 text-center transition-all hover:border-cyan-accent/30 hover:shadow-md sm:p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-accent/20 text-cyan-accent transition-all group-hover/card:bg-cyan-accent group-hover/card:text-white sm:h-12 sm:w-12">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs font-medium text-text-dark sm:text-sm">
                      {founder.email}
                    </span>
                    <span className="text-xs text-text-light">Email</span>
                  </a>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <a
                    href={`https://wa.me/${founder.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-emerald-accent px-3 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-emerald-accent/90 hover:shadow-glow-gold sm:px-4 sm:py-3 sm:text-sm"
                  >
                    WhatsApp →
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex-1 rounded-full bg-cyan-accent px-3 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-cyan-accent/90 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Send Email →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center sm:mt-10"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-gold/30 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-sm sm:px-8 sm:py-3">
            <span className="text-gold">✨</span>
            <span className="text-xs font-medium text-text-dark sm:text-sm">
              Direct access to founders — no account managers
            </span>
            <span className="text-gold">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};