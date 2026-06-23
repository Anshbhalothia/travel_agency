"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Mehta",
    review:
      "Everything was planned perfectly. the entire trip was seamless.",
  },
  {
    name: "Sneha Kapoor",
    review:
      "Our Bali honeymoon exceeded expectations. Every recommendation felt personalized and thoughtful.",
  },
  {
    name: "Arjun Sharma",
    review:
      "Professional team, excellent communication and great attention to detail throughout the trip.",
  },
  {
    name: "Priya Verma",
    review:
      "The Maldives itinerary was well planned and completely stress-free.",
  },
  {
    name: "Vikram Singh",
    review:
      "Excellent service, quick responses and a memorable Europe vacation.",
  },
  {
    name: "Ananya Gupta",
    review:
      "One of the most organized travel experiences we have ever had.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#07101f] overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          
          {/* Left Content */}

          <div className="max-w-md shrink-0">
            <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
              Testimonials
            </p>

            <h2 className="font-heading text-4xl mt-4">
              Trusted By Travelers Worldwide
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Experiences shared by travelers who trusted us
              with their journeys across the world.
            </p>
          </div>

          {/* Sliding Testimonials */}

          <div className="flex-1 min-w-0 overflow-visible">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                }}
                speed={6000}
              loop={true}
              
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2.5,
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow:
                        "0px 20px 60px rgba(212,175,55,0.15)",
                    }}
                    className="
                      border
                      border-white/10
                      rounded-2xl
                      bg-white/5
                      p-6
                      h-full
                      hover:border-[#D4AF37]
                      transition-all
                      duration-500
                    "
                  >
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <p className="text-sm text-gray-300 mt-4 leading-7">
                      "{item.review}"
                    </p>

                    <div className="mt-5">
                      <p className="font-medium text-white">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}