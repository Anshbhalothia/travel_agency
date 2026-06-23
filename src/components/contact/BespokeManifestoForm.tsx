"use client";

import { motion } from "framer-motion";

export default function BespokeManifestoForm() {
  return (
    <section className="relative py-28 bg-[#03050d] text-white overflow-hidden">
      {/* Background Ambience Spots */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-xl mb-16">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-xs font-semibold mb-3">
            TAILOR-MADE REQUEST
          </p>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">
            Initiate Your <span className="font-serif italic text-[#D4AF37]">Briefing</span>
          </h3>
          <p className="text-gray-400 text-sm mt-3 font-light">
            Fill out your parameters below. Our travel artisans will design a sample itinerary based on this structural foundation.
          </p>
        </div>

        {/* The Clean Grid Form Framework */}
        <form className="space-y-12">
          
          {/* Phase 1: Identity */}
          <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="text-xs tracking-widest font-mono text-gray-500 uppercase">// 01. IDENTITY</span>
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-wide text-gray-400 font-light">Your Full Designation</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-wide text-gray-400 font-light">Secure Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@vance.com"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
            </div>
          </div>

          {/* Phase 2: Logistics */}
          <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="text-xs tracking-widest font-mono text-gray-500 uppercase">// 02. PARAMETERS</span>
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-wide text-gray-400 font-light">Target Destination</label>
                <input
                  type="text"
                  placeholder="e.g. Bali, Thailand"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-wide text-gray-400 font-light">Expedition Genre</label>
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#D4AF37] appearance-none transition-colors duration-300 font-light text-base cursor-pointer"
                  >
                    <option className="bg-[#03050d]">Luxury Escape</option>
                    <option className="bg-[#03050d]">Honeymoon Expedition</option>
                    <option className="bg-[#03050d]">Uncharted Exploration</option>
                    <option className="bg-[#03050d]">Private Jet Corporate</option>
                  </select>
                  <span className="absolute right-2 top-4 text-[10px] text-gray-500 pointer-events-none">▼</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-wide text-gray-400 font-light">Departure Date</label>
                <input
                  type="date"
                  style={{ colorScheme: "dark" }}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
            </div>
          </div>

          {/* Phase 3: Manifest Narrative */}
          <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="text-xs tracking-widest font-mono text-gray-500 uppercase">// 03. THE NARRATIVE</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <label className="text-xs tracking-wide text-gray-400 font-light">Envisioned Experience Details</label>
              <textarea
                rows={3}
                placeholder="Describe pacing, architectural preferences, specific micro-climates or milestones..."
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base resize-none"
              />
            </div>
          </div>

          {/* Premium Submission Trigger */}
          <div className="border-t border-white/10 pt-10 flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative
                overflow-hidden
                group
                bg-transparent
                border
                border-[#D4AF37]
                text-[#D4AF37]
                px-10
                py-4
                rounded-full
                font-medium
                tracking-widest
                text-xs
                uppercase
                transition-all
                duration-300
                hover:text-black
              "
            >
              {/* Sliding gold solid layer on hover */}
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10">Transmit Curation Manifest</span>
            </motion.button>
          </div>

        </form>
      </div>
    </section>
  );
}