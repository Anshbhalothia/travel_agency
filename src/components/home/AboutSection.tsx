"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "25+",
    label: "Countries Covered",
  },
  {
    value: "5000+",
    label: "Happy Travelers",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="relative h-[600px] overflow-hidden rounded-[40px]">
              <Image
                src="/images/about.jpg"
                alt="About"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="uppercase tracking-[6px] text-[#D4AF37]">
              About Us
            </p>

            <h2 className="font-heading text-5xl md:text-6xl mt-5">
              Creating Meaningful
              Travel Experiences 
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              We help travelers explore the
              world with confidence through
              carefully planned journeys,
              destination expertise and
              personalized service.

              From honeymoon escapes and
              family vacations to corporate
              travel and luxury experiences,
              our team focuses on delivering
              seamless travel solutions.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                    bg-[#FAF7F2]/30
                    hover:border-[#D4AF37]
                    hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]
                    transition-all
                    duration-500
                    "
                >
                  <h3 className="text-4xl font-bold text-[#D4AF37]">
                    {item.value}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}