"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Brand One", image: "/images/c1.jpeg" },
  { name: "Brand Two", image: "/images/c2.jpeg" },
  { name: "Brand Three", image: "/images/c3.png" },
  { name: "Brand Four", image: "/images/c4.jpeg" },
  { name: "Brand Five", image: "/images/c5.png" },
  { name: "Brand Six", image: "/images/c6.jpeg" },
  { name: "Brand Seven", image: "/images/c7.jpeg" },
  { name: "Brand Eight", image: "/images/c8.png" },
  { name: "Brand Nine", image: "/images/c9.jpeg" },
  { name: "Brand Ten", image: "/images/c10.png" },
  { name: "Brand Eleven", image: "/images/c11.jpeg" },
  { name: "Brand Twelve", image: "/images/c12.jpeg" },
];

export const BrandsSlider = () => {
  return (
    <section className="py-12 sm:py-14 lg:py-18">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted by Growing Brands
          </span>
          <h2 className="mt-2 font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
            Brands we've helped scale
          </h2>
        </motion.div>
      </div>

      {/* Full Width Slider with Padding */}
      <div className="relative w-full overflow-hidden border-y border-border-light bg-white/60 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Gradient Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white/90 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white/90 to-transparent sm:w-16" />
        
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-3 sm:gap-4 md:gap-6"
        >
          {/* First Set */}
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex h-28 w-44 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white p-3 shadow-sm transition-all hover:shadow-md sm:h-32 sm:w-52 md:h-36 md:w-60 lg:h-40 lg:w-64"
            >
              <img 
                src={brand.image} 
                alt={brand.name}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.textContent = brand.name;
                  e.currentTarget.parentElement.classList.add('text-xs', 'text-text-gray', 'font-medium');
                }}
              />
            </div>
          ))}
          
          {/* Duplicate Set for Infinite Scroll */}
          {brands.map((brand, i) => (
            <div
              key={`dup-${i}`}
              className="flex h-28 w-44 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white p-3 shadow-sm transition-all hover:shadow-md sm:h-32 sm:w-52 md:h-36 md:w-60 lg:h-40 lg:w-64"
            >
              <img 
                src={brand.image} 
                alt={brand.name}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.textContent = brand.name;
                  e.currentTarget.parentElement.classList.add('text-xs', 'text-text-gray', 'font-medium');
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};