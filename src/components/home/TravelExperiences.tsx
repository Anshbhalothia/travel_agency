"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    title: "Luxury Honeymoons",
    image: "/images/honeymoon.jpg",
    description:
      "Romantic escapes designed for unforgettable moments.",
    
  },
  {
    title: "Family Holidays",
    image: "/images/family.jpg",
    description:
      "Thoughtfully planned vacations for every generation.",
  },
  {
    title: "Corporate Travel",
    image: "/images/corporate.jpg",
    description:
      "Business events and incentive travel with precision.",
  },
  {
    title: "Luxury Escapes",
    image: "/images/luxury.jpg",
    description:
      "Premium accommodations and exclusive experiences.",
    
  },
];
export default function TravelExperiences() {
  return (
    <section id="experiences" className="py-32 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Experiences
          </p>

          <h2 className="font-heading text-5xl md:text-6xl mt-4">
            Travel Designed Around You
          </h2>

          <p className="text-gray-400 mt-6">
            Every traveler is different.
            Explore experiences tailored to
            your interests, lifestyle and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                boxShadow:
                    "0px 20px 60px rgba(212,175,55,0.15)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
              }}
            
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                hover:border-[#D4AF37]
                transition-all
                duration-500
                h-[380px]
                "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                "
                />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-4 max-w-md">
                  {item.description}
                </p>

                

                  <Link
                    href="/about"
                    className="
                      mt-6
                      inline-block
                      border
                      border-white/20
                      px-5
                      py-2
                      rounded-full
                      hover:border-[#D4AF37]
                      transition
                    "
                  >
                    Learn More
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}