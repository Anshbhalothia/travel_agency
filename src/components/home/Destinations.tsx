"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Top Destinations"
          title="Explore Iconic Places"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((item) => (
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -10,

              }}
              key={item.title}
              className="relative h-[450px] rounded-3xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                
              />
              

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  Premium travel experiences
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}