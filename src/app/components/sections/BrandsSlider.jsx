"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "BrandOne", logo: "🏷️" },
  { name: "ClinicX", logo: "🏥" },
  { name: "D2C Cart", logo: "🛒" },
  { name: "EduTech", logo: "📚" },
  { name: "FashionHub", logo: "👗" },
  { name: "HealthPlus", logo: "💊" },
  { name: "TechStart", logo: "🚀" },
  { name: "LocalBites", logo: "🍔" },
];

export const BrandsSlider = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center sm:mb-8"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Trusted by Growing Brands
          </span>
          <h2 className="mt-2 font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
            Brands we've helped scale
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8 sm:gap-12 lg:gap-16"
          >
            {/* First Set */}
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:h-24 sm:w-44 lg:h-28 lg:w-52"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl">{brand.logo}</span>
                <span className="ml-2 text-sm font-medium text-text-gray sm:text-base lg:text-lg">
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {brands.map((brand, i) => (
              <div
                key={`dup-${i}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:h-24 sm:w-44 lg:h-28 lg:w-52"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl">{brand.logo}</span>
                <span className="ml-2 text-sm font-medium text-text-gray sm:text-base lg:text-lg">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};