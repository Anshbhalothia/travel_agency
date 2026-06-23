"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function FooterCTA() {
  return (
    <footer className="relative bg-[#050816] overflow-hidden">
      {/* GOLD GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 pt-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-10 md:p-16
            text-center
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />

          <div className="relative">
            <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
              Plan Your Next Escape
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-semibold
                text-white
                mt-6
                leading-tight
              "
            >
              Let&apos;s Plan Something
              <br />
              Extraordinary
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-8">
              Luxury getaways, curated journeys and unforgettable
              travel experiences crafted around your style.
            </p>

            

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                  mt-8
                  px-8
                  py-4
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  font-semibold
                  hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]
                  transition-all
                  duration-500
                "
              >
                Start Planning
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-10">

          {/* BRAND */}

          <div>
            <h3 className="text-3xl font-bold tracking-[5px] text-white">
              COUNTYWIDE
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              Curated travel experiences, destination management
              and personalized journeys across the world’s most
              inspiring destinations.
            </p>

            <div className="flex gap-3 mt-8">
              {[FaInstagram, FaFacebookF, FaXTwitter].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    className="
                      w-11
                      h-11
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.03]
                      border
                      border-white/10
                      text-white
                      hover:border-[#D4AF37]
                      hover:text-[#D4AF37]
                      transition-all
                      duration-500
                    "
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* DESTINATIONS */}

          <div>
            <h4 className="text-white text-xl font-semibold mb-6">
              Destinations
            </h4>

            <ul className="space-y-4 text-gray-400">
              {[
                "Dubai",
                "Bali",
                "Thailand",
                "Singapore",
                "Maldives",
                "Mauritius",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      hover:text-[#D4AF37]
                      hover:translate-x-2
                      transition-all
                      duration-500
                      inline-block
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}

          <div>
            <h4 className="text-white text-xl font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-gray-400">
              {[
                "About Us",
                "Experiences",
                "Testimonials",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      hover:text-[#D4AF37]
                      hover:translate-x-2
                      transition-all
                      duration-500
                      inline-block
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4 className="text-white text-xl font-semibold mb-6">
              Get In Touch
            </h4>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <FaPhone className="text-[#D4AF37] mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#D4AF37] mt-1" />
                <span>hello@countywide.com</span>
              </div>

              <div className="flex gap-3">
                <FaLocationDot className="text-[#D4AF37] mt-1" />
                <span>
                  New Delhi, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2026 CountyWide Travel. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-[#D4AF37] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-[#D4AF37] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}