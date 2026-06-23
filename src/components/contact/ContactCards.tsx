"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Mon-Sat from 9am to 6pm.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@countywide.com",
    description: "Our team responds within 2 hours.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "New Delhi, India",
    description: "Come say hello at our HQ.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 } as const
  },
};

export default function ContactCards() {
  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">
      {/* Premium background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[8px] text-[#D4AF37] text-xs font-semibold bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mt-6">
            We'd Love to Hear <span className="text-[#D4AF37] font-serif italic">From You</span>
          </h2>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.15)"
                }}
                className="
                  group
                  relative
                  rounded-[28px]
                  border
                  border-white/5
                  bg-gradient-to-b
                  from-white/[0.04]
                  to-white/[0.01]
                  backdrop-blur-xl
                  p-8
                  transition-colors
                  duration-500
                "
              >
                {/* Subtle internal card glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[28px]" />

                <div className="flex flex-col h-full relative z-10">
                  {/* Animated Icon Box */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-white
                      group-hover:text-black
                      group-hover:bg-[#D4AF37]
                      group-hover:border-[#D4AF37]
                      transition-all
                      duration-500
                      ease-out
                      mb-6
                    "
                  >
                    <Icon size={24} className="transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-[#D4AF37] font-medium text-base mb-2 tracking-wide">
                    {item.value}
                  </p>

                  <p className="text-gray-400 text-sm mt-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}