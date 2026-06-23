"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, Globe } from "lucide-react";

const contactChannels = [
  {
    icon: Phone,
    tag: "VOICE",
    title: "Direct Concierge",
    value: "+91 98765 43210",
    timing: "Available 24/7 for VIP clients",
  },
  {
    icon: Mail,
    tag: "DIGITAL",
    title: "Curated Inquiries",
    value: "hello@countywide.com",
    timing: "Response within 120 minutes",
  },
  {
    icon: MapPin,
    tag: "HQ COORDINATES",
    title: "The Design Studio",
    value: "New Delhi, India",
    timing: "By appointment only",
  },
];

export default function BespokeContactPanel() {
  return (
    <section className="relative py-28 bg-[#03050d] text-white overflow-hidden border-b border-white/5">
      {/* Editorial Watermark Background */}
      <div className="absolute right-[-5%] top-[10%] text-[14vw] font-serif font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
        EXPLORE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Sticky Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <p className="uppercase tracking-[6px] text-[#D4AF37] text-xs font-semibold">
                COMMUNICATION HUB
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
              Let’s Architect <br />
              Your Next <span className="text-[#D4AF37] font-serif italic font-normal">Escape</span>
            </h2>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Whether it’s an unmapped archipelago or a private estate in the Alps, our specialists map out your vision down to the millisecond.
            </p>

            <div className="pt-6 hidden lg:block">
              <div className="inline-flex items-center gap-4 text-xs tracking-widest text-[#D4AF37]/60 uppercase border-t border-white/10 pt-6 w-full">
                <Globe size={14} className="animate-spin-slow" />
                <span>Global Curations Established 2026</span>
              </div>
            </div>
          </div>

          {/* Right Floating Grid Channels */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {contactChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  href={channel.tag === "DIGITAL" ? `mailto:${channel.value}` : channel.tag === "VOICE" ? `tel:${channel.value}` : "#"}
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className={`
                    group relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500
                    ${i === 2 ? "sm:col-span-2 bg-gradient-to-r from-white/[0.03] to-transparent" : "bg-white/[0.02]"}
                    border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/[0.04]
                  `}
                >
                  {/* Subtle top light bar */}
                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] tracking-[3px] text-gray-500 font-mono group-hover:text-[#D4AF37] transition-colors duration-300">
                      // {channel.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon size={16} className="text-[#D4AF37]/70" />
                      <h3 className="text-lg font-light tracking-wide text-white/90">
                        {channel.title}
                      </h3>
                    </div>
                    <p className="text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tight pt-1">
                      {channel.value}
                    </p>
                    <p className="text-xs text-gray-500 font-light pt-2">
                      {channel.timing}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}