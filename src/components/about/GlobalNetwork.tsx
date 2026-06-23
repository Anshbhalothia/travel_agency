"use client";

import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
} from "lucide-react";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    top: "18%",
    left: "18%",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    top: "38%",
    left: "42%",
  },
  {
    name: "Singapore",
    country: "Southeast Asia",
    top: "55%",
    left: "62%",
  },
  {
    name: "Bali",
    country: "Indonesia",
    top: "75%",
    left: "82%",
  },
  {
    name: "Switzerland",
    country: "Europe",
    top: "65%",
    left: "25%",
  },
];

export default function GlobalNetwork() {
  return (
    <section className="relative py-26 bg-[#050816] overflow-hidden">
      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Global Network
          </p>

          <h2 className="text-5xl md:text-6xl mt-5">
            Connecting The World's
            Most Loved Destinations
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Our expertise spans iconic cities,
            tropical islands and luxury escapes
            across the globe.
          </p>
        </div>

        {/* Network Area */}

        <div className="relative h-[700px] hidden lg:block">
          {/* Main SVG Routes */}

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 700"
          >
            {/* Glow Path */}

            <motion.path
              d="
                M220 130
                C350 180,420 250,500 280
                C620 320,700 380,760 420
                C850 480,950 550,1020 600

                M500 280
                C420 360,350 450,300 520
              "
              stroke="rgba(212,175,55,0.15)"
              strokeWidth="10"
              fill="none"
            />

            {/* Main Line */}

            <motion.path
              d="
                M220 130
                C350 180,420 250,500 280
                C620 320,700 380,760 420
                C850 480,950 550,1020 600

                M500 280
                C420 360,350 450,300 520
              "
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 4,
              }}
            />
          </svg>

          {/* Moving Plane */}

          <motion.div
            animate={{
              x: [220, 500, 760, 1020],
              y: [130, 280, 420, 600],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="absolute text-[#D4AF37]"
          >
            <Plane size={28} />
          </motion.div>

          {/* Destination Nodes */}

          {destinations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="absolute"
              style={{
                top: item.top,
                left: item.left,
              }}
            >
              {/* Pulse */}

              <div
                className="
                  absolute
                  w-5
                  h-5
                  rounded-full
                  bg-[#D4AF37]
                  animate-ping
                  opacity-40
                "
              />

              {/* Dot */}

              <div
                className="
                  relative
                  w-5
                  h-5
                  rounded-full
                  bg-[#D4AF37]
                  shadow-[0_0_30px_rgba(212,175,55,0.8)]
                "
              />

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
                  absolute
                  top-8
                  left-1/2
                  -translate-x-1/2

                  min-w-[220px]

                  rounded-[24px]

                  border
                  border-white/10

                  bg-white/[0.03]
                  backdrop-blur-xl

                  p-5

                  hover:border-[#D4AF37]/50
                  hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]

                  transition-all
                "
              >
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <MapPin size={16} />
                  <span className="text-sm">
                    {item.country}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mt-3">
                  {item.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}

        <div className="lg:hidden space-y-6">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}