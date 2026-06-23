"use client";

import { motion } from "framer-motion";

export default function ConsultationForm() {
  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden">
      {/* Decorative ambient background assets */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div
              className="
                group
                relative
                h-[650px]
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                shadow-2xl
              "
            >
              <img
                src="/images/contact-form.jpg"
                alt="Travel Consultation"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-[1.5s]
                  group-hover:scale-105
                "
              />

              {/* Multi-layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/50 to-transparent" />

              <div className="absolute bottom-12 left-10 right-10 z-20">
                <span className="uppercase tracking-[4px] text-[#D4AF37] text-xs font-semibold bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  CountyWide Travel
                </span>

                <h3 className="text-4xl font-light tracking-tight text-white mt-4 leading-tight">
                  Experiences <br />
                  Crafted Around <span className="text-[#D4AF37] font-serif italic">You</span>
                </h3>

                <p className="text-gray-300/90 mt-4 text-sm font-light leading-relaxed max-w-sm">
                  Luxury escapes, curated journeys, and unforgettable moments orchestrated seamlessly across the globe.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="
              lg:col-span-7
              relative
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-b
              from-white/[0.03]
              to-white/[0.01]
              backdrop-blur-3xl
              p-8 md:p-12
              shadow-2xl
            "
          >
            <div className="mb-8">
              <p className="uppercase tracking-[6px] text-[#D4AF37] text-xs font-semibold mb-2">
                Plan Your Journey
              </p>
              <h4 className="text-2xl font-light text-white">
                Share your travel aspirations
              </h4>
            </div>

            <form className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <select
                    className="
                      w-full
                      bg-[#0a0d1a]
                      border
                      border-white/10
                      rounded-xl
                      px-5
                      py-4
                      text-white
                      outline-none
                      focus:border-[#D4AF37]
                      appearance-none
                      transition-all
                      duration-300
                    "
                  >
                    <option className="bg-[#050816]">Travel Type</option>
                    <option className="bg-[#050816]">Luxury Escape</option>
                    <option className="bg-[#050816]">Honeymoon</option>
                    <option className="bg-[#050816]">Family Vacation</option>
                    <option className="bg-[#050816]">Corporate Travel</option>
                  </select>
                  <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▼</div>
                </div>

                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300"
                    style={{ colorScheme: 'dark' }} 
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(212,175,55,0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full
                  bg-gradient-to-r
                  from-[#D4AF37]
                  to-[#F3E5AB]
                  text-black
                  py-4
                  rounded-xl
                  font-semibold
                  tracking-wider
                  uppercase
                  text-sm
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                Send Inquiry
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
