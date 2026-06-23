"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* Background */}

      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 12,
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact-hero.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Gold Glow */}

      {/* <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      /> */}

      {/* Content */}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              uppercase
              tracking-[6px]
              text-[#D4AF37]
            "
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-semibold
              mt-6
              max-w-5xl
              leading-tight
            "
          >
            Let's Plan Your
            <br />
            Next Journey
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              max-w-2xl
              text-gray-300
              mt-8
              text-lg
              leading-8
            "
          >
            Whether you're planning a luxury getaway,
            honeymoon, family vacation or corporate
            trip, our travel specialists are ready
            to help create your perfect experience.
          </motion.p>
        </div>
      </div>

      {/* Bottom Curve */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#050816] rounded-t-[100px]" />
    </section>
  );
}