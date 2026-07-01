"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

// ─── Slot-machine cycling word ────────────────────────────────────────
const WORDS = ["Extraordinary", "Unforgettable", "Legendary", "Boundless", "Timeless"];

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: "1.05em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="block italic text-[#D4AF37] font-serif"
        >
          {WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── 3D Magnetic tilt wrapper ──────────────────────────────────────────
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 22 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 22 });
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: "1400px" }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      {children}
    </motion.div>
  );
}

// ─── Barcode ornament ─────────────────────────────────────────────────
function Barcode() {
  const widths = [1, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1, 1, 2, 3];
  return (
    <div className="flex items-end gap-[2px] h-10 opacity-40">
      {widths.map((w, i) => (
        <div
          key={i}
          className="bg-[#D4AF37]"
          style={{ width: w * 2.5, height: `${45 + Math.abs(Math.sin(i * 0.9)) * 50}%` }}
        />
      ))}
    </div>
  );
}

// ─── Kinetic brand (each letter reacts on hover) ──────────────────────
function KineticBrand() {
  return (
    <Link href="/">
      <div className="flex items-center" style={{ letterSpacing: "0.25em" }}>
        {"COUNTYWIDE".split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-xl font-bold text-white inline-block select-none"
            whileHover={{ y: -5, color: "#D4AF37", transition: { duration: 0.15 } }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </Link>
  );
}

// ─── Sliding-rule footer link ─────────────────────────────────────────
function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-0 text-gray-600 hover:text-white transition-colors duration-200 text-sm"
      >
        <span
          className="inline-block w-0 group-hover:w-3 overflow-hidden transition-all duration-300"
          aria-hidden
        >
          <span className="text-[#D4AF37] text-xs">—</span>
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}

// ─── Destination ticker marquee ───────────────────────────────────────
const PLACES = [
  "Dubai", "Bali", "Maldives", "Singapore", "Thailand",
  "Mauritius", "Istanbul", "Malaysia", "Europe", "Baku", "Sri Lanka", "Switzerland",
];

function Marquee() {
  return (
    <div className="border-t border-white/[0.05] overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="flex items-center py-4 w-max"
      >
        {[...PLACES, ...PLACES].map((place, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="text-[10px] uppercase tracking-[5px] text-gray-700 hover:text-[#D4AF37]/60 transition-colors duration-300 cursor-default">
              {place}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#D4AF37]/25 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────
export default function Footer() {
  const boardingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const boardingVisible = useInView(boardingRef, { once: true, margin: "-80px" });
  const gridVisible = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <footer className="relative bg-[#050816] overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#D4AF37]/[0.035] blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.02] blur-[140px]" />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#D4AF37]/50"
            style={{ top: `${18 + i * 18}%`, left: `${12 + i * 22}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 5 + i * 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          BOARDING PASS CTA
      ══════════════════════════════════════════ */}
      <section ref={boardingRef} className="max-w-7xl mx-auto px-6 pt-24 pb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={boardingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <TiltCard>
            {/* Card shell */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/[0.07] bg-[#07091A]">

              {/* Animated top hairline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={boardingVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
              />

              {/* FIRST CLASS ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="bg-[#D4AF37] text-[#050816] text-[9px] font-bold tracking-[4px] uppercase px-7 py-[5px] rounded-b-xl">
                  ✦ First Class Experience
                </div>
              </div>

              {/* Punch-hole semicircles where stub meets body */}
              <div className="absolute hidden md:block left-[224px] top-0 w-5 h-5 rounded-full bg-[#050816] -translate-x-1/2 -translate-y-1/2 border border-white/[0.07]" />
              <div className="absolute hidden md:block left-[224px] bottom-0 w-5 h-5 rounded-full bg-[#050816] -translate-x-1/2 translate-y-1/2 border border-white/[0.07]" />

              <div className="flex min-h-[320px]">

                {/* ── LEFT STUB ── */}
                <div className="hidden md:flex flex-col justify-between p-8 pt-16 w-56 shrink-0 border-r border-dashed border-white/[0.09]">
                  <div className="space-y-6">
                    {[
                      { label: "From",  value: "Your Imagination" },
                      { label: "To",    value: "Anywhere" },
                      { label: "Class", value: "Bespoke" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[8px] uppercase tracking-[3px] text-[#D4AF37]/50 mb-1">{label}</p>
                        <p className="text-white text-sm font-semibold tracking-wide">{value}</p>
                      </div>
                    ))}
                    <div>
                      <p className="text-[8px] uppercase tracking-[3px] text-[#D4AF37]/50 mb-1">Gate</p>
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ opacity: [1, 0.25, 1] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                          className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]"
                        />
                        <span className="text-white text-sm font-semibold">Open</span>
                      </div>
                    </div>
                  </div>
                  <Barcode />
                </div>

                {/* ── RIGHT BODY ── */}
                <div className="flex-1 flex flex-col justify-center p-8 md:p-12 md:pl-14 pt-16">
                  <p className="text-[9px] uppercase tracking-[5px] text-[#D4AF37]/60 mb-4">
                    Plan Your Next Escape
                  </p>
                  <h2 className="font-serif text-4xl md:text-[3.5rem] font-normal text-white leading-[1.08] mb-6">
                    Let&apos;s Plan<br />
                    Something{" "}
                    <CyclingWord />
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                    Luxury getaways, curated journeys and unforgettable travel experiences crafted around your style.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact">
                      <motion.span
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#050816] text-sm font-semibold px-7 py-3.5 rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-shadow duration-500 cursor-pointer"
                      >
                        Start Planning <ArrowUpRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                    <Link href="/destination">
                      <motion.span
                        whileHover={{ scale: 1.04 }}
                        className="inline-flex items-center gap-2 border border-white/12 text-gray-400 text-sm px-7 py-3.5 rounded-full hover:border-[#D4AF37]/40 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        Browse Destinations
                      </motion.span>
                    </Link>
                  </div>
                </div>

              </div>

              {/* Animated bottom hairline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={boardingVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-px origin-right bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
              />
            </div>
          </TiltCard>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER GRID
      ══════════════════════════════════════════ */}
      <section ref={gridRef} className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="h-px mb-16 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <KineticBrand />
            <p className="text-gray-600 text-sm leading-[1.9] mt-5 mb-7">
              Your trusted destination management company, offering tailored travel solutions and seamless experiences worldwide.
            </p>
            <div className="flex gap-2">
              {[FaInstagram, FaFacebookF, FaXTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-600 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300 text-xs"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[9px] uppercase tracking-[3px] text-white font-semibold mb-2">Destinations</p>
            <div className="w-6 h-px bg-[#D4AF37] mb-7" />
            <ul className="space-y-3">
              {["Dubai", "Bali", "Thailand", "Singapore", "Maldives", "Mauritius"].map(d => (
                <FLink key={d} href={`/destinations/${d.toLowerCase()}`}>{d}</FLink>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[9px] uppercase tracking-[3px] text-white font-semibold mb-2">Company</p>
            <div className="w-6 h-px bg-[#D4AF37] mb-7" />
            <ul className="space-y-3">
              {[
                { l: "About Us",          h: "/about" },
                { l: "Experiences",       h: "/destination" },
                { l: "Testimonials",      h: "/#testimonials" },
                { l: "Contact Us",        h: "/contact" },
                { l: "Become an Expert",  h: "/become-expert" },
              ].map(({ l, h }) => (
                <FLink key={l} href={h}>{l}</FLink>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[9px] uppercase tracking-[3px] text-white font-semibold mb-2">Get In Touch</p>
            <div className="w-6 h-px bg-[#D4AF37] mb-7" />
            <div className="space-y-4">
              {[
                { Icon: Phone,  text: "+91 982-111-5963" },
                { Icon: Mail,   text: "info@countywidedmc.com" },
                { Icon: MapPin, text: "B-4, Sector 63, Noida\nUttar Pradesh – 201301" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 group">
                  <div className="mt-0.5 p-1.5 rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] group-hover:bg-[#D4AF37]/[0.12] transition-colors duration-300 shrink-0">
                    <Icon className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 whitespace-pre-line">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs tracking-wide">
            © 2026 CountyWide DMC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-700">
            {[
              ["Privacy Policy",      "/privacy-policy"],
              ["Terms & Conditions",  "/terms-and-conditions"],
              ["Disclaimer",          "/disclaimer"],
            ].map(([l, h]) => (
              <Link key={l} href={h} className="hover:text-[#D4AF37] transition-colors duration-300">
                {l}
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════
          DESTINATION TICKER
      ══════════════════════════════════════════ */}
      <Marquee />

    </footer>
  );
}