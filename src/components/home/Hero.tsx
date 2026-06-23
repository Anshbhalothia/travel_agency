
"use client";

import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {/* <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 12,
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero.jpg')",
        }}
      /> */}

      {/* Background Video */}
<motion.video
  initial={{ scale: 1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 12 }}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/home.mp4" type="video/mp4" />
</motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      
       

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 0,
            y: 0,
          }}
          className="uppercase tracking-[6px] text-[#D4AF37]"
        >
          Luxury Travel Experiences
        </motion.p>

        <motion.h3
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="font-heading text-6xl md:text-7xl max-w-5xl leading-tight mt-6"
        >
          Discover The World
          <br />
          Through Carefully
          <br />
          Crafted Journeys
        </motion.h3>

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
          className="max-w-xl mt-8 text-lg font-bold text-gray-900"
        >
          Tailor-made vacations,
          destination management services
          and unforgettable travel experiences.
        </motion.p>

        <div className="flex gap-5 mt-10">
          <a
            href="#destinations"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Explore Destinations
          </a>

          <a
            href="#experiences"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            View Experiences
          </a>
        </div>

        <HeroStats />

        <div className="mt-26">
          <BookingWidget />
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#050816] rounded-t-[100px]" />
    </section>
  );
}