"use client";

import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <>
      <style>{`
        /* --- TYPOGRAPHY & COLORS MATCHING ABOUT/CONTACT PAGES --- */
        .hm-eyebrow {
          font-family: var(--ab-body, sans-serif);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 6px;
          color: var(--ab-gold, #D4AF37);
          font-weight: 600;
        }

        .hm-hero__title {
          font-family: var(--ab-display, sans-serif);
          font-size: clamp(42px, 6.5vw, 84px);
          font-weight: 700;
          color: var(--ab-white, #ffffff);
          letter-spacing: -1.5px;
        }

        .hm-hero__desc {
          font-family: var(--ab-body, sans-serif);
          font-size: clamp(16px, 1.5vw, 18px);
          /* Swapped from text-gray-900 to light gray so it is readable on the dark background */
          color: rgba(250, 250, 248, 0.7); 
          font-weight: 300;
        }

        .hm-hero__overlay {
          position: absolute; 
          inset: 0;
          background:
            linear-gradient(to right, rgba(5,8,22,0.92) 0%, rgba(5,8,22,0.5) 55%, rgba(5,8,22,0.15) 100%),
            linear-gradient(to top, rgba(5,8,22,0.7) 0%, transparent 50%);
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
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

        {/* Updated Overlay */}
        <div className="hm-hero__overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1, /* Fixed this from 0 to 1 so it actually appears */
              y: 0,
            }}
            className="hm-eyebrow"
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
            className="hm-hero__title max-w-5xl leading-tight mt-6"
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
            className="hm-hero__desc max-w-xl mt-8"
          >
            Tailor-made vacations,
            destination management services
            and unforgettable travel experiences.
          </motion.p>

          <div className="flex gap-5 mt-10">
            <a
              href="#destinations"
              style={{
                backgroundColor: "var(--ab-gold, #D4AF37)",
                fontFamily: "var(--ab-body, sans-serif)"
              }}
              className="text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Destinations
            </a>

            <a
              href="#experiences"
              style={{
                borderColor: "var(--ab-white, #ffffff)",
                color: "var(--ab-white, #ffffff)",
                fontFamily: "var(--ab-body, sans-serif)"
              }}
              className="border px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
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
    </>
  );
}