"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  "/images/qatar.png",
  "/images/marriott.png",
  "/images/hilton.png",
  "/images/singapore-air.png",
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-medium">
            Global Partnerships
          </p>

          <h2 className="text-5xl md:text-6xl mt-5 text-white font-light">
            Preferred Travel Partners
          </h2>

          <p className="text-gray-300 mt-6 leading-8 text-lg">
            Partnering with leading airlines, luxury resorts,
            and hospitality brands to deliver exceptional
            journeys across the globe.
          </p>
        </div>

        {/* Logo Slider */}

        <div
  className="
    relative
    mt-20
    overflow-hidden
    rounded-[40px]

    border border-[#D4AF37]/0

    bg-gradient-to-b
    from-white/[0.03]
    to-white/[0.01]

    py-16

    shadow-[0_0_60px_rgba(212,175,55,0.08)]
  "
>
          {/* Left Fade */}

          <div
  className="
    absolute
    left-0
    top-0
    z-10
    h-full
    w-48
    bg-gradient-to-r
    from-[#0A0F1A]
    via-[#0A0F1A]/60
    to-transparent
  "
/>

          {/* Right Fade */}

          <div
  className="
    absolute
    right-0
    top-0
    z-10
    h-full
    w-48
    bg-gradient-to-l
    from-[#0A0F1A]
    via-[#0A0F1A]/60
    to-transparent
  "
/>

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex items-center gap-10 w-max"
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center

                  min-w-[240px]
                  h-[130px]

                  rounded-3xl

                  bg-white
                  border
                  border-[#D4AF37]/20

                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]

                  transition-all
                  duration-500
                "
              >
                <Image
                  src={logo}
                  alt="partner logo"
                  width={180}
                  height={90}
                  className="
                    object-contain
                    transition-all
                    duration-500
                    hover:scale-110
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}