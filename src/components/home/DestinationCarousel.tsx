"use client";
import Link from "next/link";

import { destinations1 } from "@/data/destinations1";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function DestinationCarousel() {
  return (
    <section id="destinations" className="py-32 bg-[#050816] overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Featured Destinations"
          title="Explore Iconic Places"
        />

        <Swiper
        className="!overflow-visible"
            modules={[Autoplay]}
            autoplay={{
            delay: 0,
            disableOnInteraction: false,
            }}
            speed={6000}
            loop={true}
            spaceBetween={30}
            
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {destinations1.map((item) => (
            <SwiperSlide key={item.title}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow:
                 "0px 20px 60px rgba(212,175,55,0.15)",
                //  border: "1px solid #D4AF37"
                }}
        
                className="relative h-[520px] rounded-[30px] overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  

                  <h3 className="text-4xl font-semibold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {item.tours}
                  </p>
{/* 
                  <button className="mt-5 border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition">
                    Explore →
                  </button> */}
                  <Link
  href={`/destinations/${item.slug}`}
  className="inline-block mt-5 border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
>
  Explore →
</Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}