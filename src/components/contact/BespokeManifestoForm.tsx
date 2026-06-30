"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BespokeManifestoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelType: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", destination: "", travelType: "", date: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

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

        {/* Success Message */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
          >
            ✅ Your curation manifest has been transmitted! We will be in touch shortly.
          </motion.div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 px-6 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
          >
            ❌ Something went wrong. Please try again.
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">

          {/* Phase 1: Identity */}
          <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              {/* Updated Section Title: Bigger, bold, and bright gold */}
              <span className="text-sm tracking-widest font-mono text-[#D4AF37] font-bold uppercase">// 01. IDENTITY</span>
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                {/* Updated Label: Brighter (gray-100) and slightly larger (text-base) */}
                <label className="text-base tracking-wide text-gray-100 font-bold">Your Full Designation</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base tracking-wide text-gray-100 font-bold">Secure Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@vance.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base tracking-wide text-gray-100 font-bold">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
            </div>
          </div>

          {/* Phase 2: Parameters */}
          <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="text-sm tracking-widest font-mono text-[#D4AF37] font-bold uppercase">// 02. PARAMETERS</span>
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-base tracking-wide text-gray-100 font-bold">Target Destination</label>
                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. Bali, Thailand"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base tracking-wide text-gray-100 font-bold">Expedition Genre</label>
                <div className="relative">
                  <select
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#D4AF37] appearance-none transition-colors duration-300 font-light text-base cursor-pointer"
                  >
                    <option value="" className="bg-[#03050d]">Select Type</option>
                    <option value="Luxury Escape" className="bg-[#03050d]">Luxury Escape</option>
                    <option value="Honeymoon Expedition" className="bg-[#03050d]">Honeymoon Expedition</option>
                    <option value="Uncharted Exploration" className="bg-[#03050d]">Uncharted Exploration</option>
                    <option value="Private Jet Corporate" className="bg-[#03050d]">Private Jet Corporate</option>
                  </select>
                  <span className="absolute right-2 top-4 text-[10px] text-gray-500 pointer-events-none">▼</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-base tracking-wide text-gray-100 font-bold">Departure Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{ colorScheme: "dark" }}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base"
                />
              </div>
            </div>
          </div>

          {/* Phase 3: Narrative */}
          {/* <div className="border-t border-white/10 pt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="text-sm tracking-widest font-mono text-[#D4AF37] font-bold uppercase">// 03. THE NARRATIVE</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <label className="text-base tracking-wide text-gray-100 font-bold">Envisioned Experience Details</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Describe pacing, architectural preferences, specific micro-climates or milestones..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 outline-none focus:border-[#D4AF37] transition-colors duration-300 font-light text-base resize-none"
              />
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="border-t border-white/10 pt-10 flex justify-end">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              className="relative overflow-hidden group bg-transparent border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full font-medium tracking-widest text-xs uppercase transition-all duration-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10">
                {status === "loading" ? "Transmitting..." : "Transmit Curation Manifest"}
              </span>
            </motion.button>
          </div>

        </form>
      </div>
    </section>
  );
}