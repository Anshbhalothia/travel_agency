"use client";
import { motion } from "framer-motion";

export default function DestinationMap() {
  return (
    <section className="bg-[#050816] py-20 relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold mb-4">
          Global Presence
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl text-white">
          Our Operational <span className="italic text-[#D4AF37]">Hubs</span>
        </motion.h2>
      </div>

      <div className="w-full h-[500px] border-y border-white/10 relative">
        {/* CSS-filtered Map to match Dark/Gold theme */}
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubai+(Luxury%20Travel)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="opacity-70 grayscale-[80%] invert-[90%] hue-rotate-[180deg] contrast-[1.2]"
        />
        {/* Overlay gradient to blend edges */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_#050816]" />
      </div>
    </section>
  );
}