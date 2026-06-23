"use client";

import { motion } from "framer-motion";

const journey = [
  {
    title: "Dubai",
    description:
      "Luxury shopping, iconic architecture and unforgettable desert experiences.",
  },
  {
    title: "Bali",
    description:
      "Private villas, tropical escapes and wellness retreats crafted for relaxation.",
  },
  {
    title: "Maldives",
    description:
      "Crystal-clear waters, overwater villas and world-class hospitality.",
  },
  {
    title: "Switzerland",
    description:
      "Alpine landscapes, scenic rail journeys and premium mountain experiences.",
  },
  {
    title: "Singapore",
    description:
      "A blend of innovation, luxury and vibrant cultural experiences.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-28">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Our Global Journey
          </p>

          <h2 className="text-5xl md:text-6xl mt-5">
            Destinations That
            <br />
            Inspire Experiences
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Discover some of the extraordinary destinations
            that inspire the journeys we curate for travelers
            around the world.
          </p>
        </div>

        <div className="relative">
          {/* Curved Route */}

          <svg
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              h-full
              w-[300px]
              hidden lg:block
              pointer-events-none
            "
            viewBox="0 0 300 2200"
            preserveAspectRatio="none"
          >
            {/* Glow Path */}

            <motion.path
              d="
                M150 0
                C260 120,260 260,150 380
                C40 500,40 640,150 760
                C260 880,260 1020,150 1140
                C40 1260,40 1400,150 1520
                C260 1640,260 1780,150 1900
                C40 2020,40 2140,150 2200
              "
              stroke="rgba(212,175,55,0.2)"
              strokeWidth="8"
              fill="none"
            />

            {/* Main Path */}

            <motion.path
              d="
                M150 0
                C260 120,260 260,150 380
                C40 500,40 640,150 760
                C260 880,260 1020,150 1140
                C40 1260,40 1400,150 1520
                C260 1640,260 1780,150 1900
                C40 2020,40 2140,150 2200
              "
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
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
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Timeline Cards */}

          <div className="space-y-28">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`
                  relative
                  flex

                  ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }
                `}
              >
                {/* Node */}

                <div
                  className="
                    hidden
                    lg:flex

                    absolute
                    left-1/2
                    top-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    z-20
                  "
                >
                  <motion.div
                    whileInView={{
                      scale: [0.8, 1.3, 1],
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="
                      relative
                      w-7
                      h-7
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#D4AF37]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#D4AF37]
                        animate-ping
                        opacity-50
                      "
                    />
                  </motion.div>
                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    w-full
                    lg:w-[42%]

                    rounded-[32px]

                    border
                    border-white/10

                    bg-white/[0.03]
                    backdrop-blur-xl

                    p-8 md:p-10

                    hover:border-[#D4AF37]/50

                    hover:shadow-[0_25px_80px_rgba(212,175,55,0.15)]

                    transition-all
                    duration-700
                  "
                >
                  <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
                    Destination
                  </p>

                  <h3 className="text-4xl font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-5 leading-8">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}