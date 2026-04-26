"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Brand One", image: "/images/c1.jpeg" },
  { name: "Brand Two", image: "/images/c2.jpeg" },
  { name: "Brand Three", image: "/images/c3.png" },
  { name: "Brand Four", image: "/images/c4.jpeg" },
  { name: "Brand Five", image: "/images/c5.png" },
  { name: "Brand Six", image: "/images/c6.jpeg" },
  { name: "Brand Eight", image: "/images/c8.png" },
  { name: "Brand Nine", image: "/images/c9.jpeg" },
  { name: "Brand Ten", image: "/images/c10.png" },
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
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted by Growing Brands
          </span>
          <h2 className="mt-2 font-manrope text-2xl font-bold text-text-dark sm:text-3xl">
            Brands we've helped scale
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Fade Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-bg-light to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-bg-light to-transparent sm:w-12" />
          
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {/* First Set */}
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex h-24 w-40 shrink-0 items-center justify-center border-r border-border-light bg-white px-6 backdrop-blur-sm transition-all hover:bg-gray-50 sm:h-28 sm:w-48 lg:h-32 lg:w-56"
              >
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="h-12 w-auto object-fill transition-all hover:scale-110 sm:h-auto lg:h-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.textContent = brand.name;
                  }}
                />
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {brands.map((brand, i) => (
              <div
                key={`dup-${i}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center border-r border-border-light bg-white px-6 backdrop-blur-sm transition-all hover:bg-gray-50 sm:h-28 sm:w-48 lg:h-32 lg:w-56"
              >
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="h-12 w-auto object-contain transition-all hover:scale-110 sm:h-auto lg:h-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.textContent = brand.name;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};