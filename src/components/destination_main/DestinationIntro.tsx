"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DestinationIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#050816] px-6 py-16 text-center border-b border-white/5 relative z-0 -mt-24 pt-40">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-white mb-6"
        >
          Discover Unforgettable <span className="italic text-[#D4AF37]">Destinations</span>
        </motion.h2>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-400 leading-relaxed font-light text-base md:text-lg space-y-4">
          <p>
            Journey beyond the ordinary. We specialize in curating highly personalized, luxury travel experiences across the globe's most sought-after locations. From the pristine beaches of the Maldives to the architectural marvels of Europe, every itinerary is crafted with uncompromising attention to detail.
          </p>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pt-4">
                  Our dedicated artisans of travel utilize an expansive global network to secure exclusive access, private charters, and unparalleled accommodations. We don't just book trips; we architect memories that redefine your understanding of luxury exploration.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-[#D4AF37] uppercase tracking-widest text-xs font-semibold hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}