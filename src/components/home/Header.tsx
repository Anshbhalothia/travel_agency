"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Destinations",
    dropdown: [
      { name: "Dubai", link: "/destinations/dubai" },
      { name: "Bali", link: "/destinations/bali" },
      { name: "Thailand", link: "/destinations/thailand" },
      { name: "Singapore", link: "/destinations/singapore" },
      { name: "Maldives", link: "/destinations/maldives" },
      { name: "Mauritius", link: "/destinations/mauritius" },
      { name: "Malaysia", link: "/destinations/malaysia" },
      { name: "Sri Lanka", link: "/destinations/srilanka" },
      { name: "Baku", link: "/destinations/baku" },
      { name: "Europe", link: "/destinations/europe" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
        : ""
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      
      {/* Logo */}

      <motion.h1
        whileHover={{
          scale: 1.05,
        }}
        className="text-2xl font-bold tracking-[4px]"
      >
        COUNTYWIDE
      </motion.h1>

      {/* Desktop Nav */}

      <nav className="hidden lg:flex gap-10">
  {navItems.map((item) =>
    item.dropdown ? (
      <div key={item.name} className="relative group">
        <motion.div
          className="relative text-sm uppercase tracking-[2px] cursor-pointer"
          whileHover="hover"
        >
          <motion.span
            variants={{
              hover: {
                color: "#D4AF37",
              },
            }}
            className="flex items-center gap-2"
          >
            {item.name}
          </motion.span>

          <motion.div
            className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37]"
            initial={{ width: 0 }}
            variants={{
              hover: {
                width: "100%",
              },
            }}
          />
        </motion.div>

        {/* Mega Menu */}

        <div
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            pt-8
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-300
            z-50
          "
        >
          <div
            className="
              bg-black/50
              backdrop-blur-2xl
              border
              border-white/10
              rounded-[30px]
              p-8
              min-w-[700px]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >
            <div className="grid grid-cols-3 gap-x-12 gap-y-5">
              {item.dropdown.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.link}
                  className="
                    text-sm
                    uppercase
                    tracking-[2px]
                    text-white/80
                    hover:text-[#D4AF37]
                    transition-all
                    duration-300
                    hover:translate-x-2
                  "
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Link key={item.name} href={item.link}>
        <motion.div
          className="relative text-sm uppercase tracking-[2px] cursor-pointer"
          whileHover="hover"
        >
          <motion.span
            variants={{
              hover: {
                color: "#D4AF37",
              },
            }}
          >
            {item.name}
          </motion.span>

          <motion.div
            className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37]"
            initial={{ width: 0 }}
            variants={{
              hover: {
                width: "100%",
              },
            }}
          />
        </motion.div>
      </Link>
    )
  )}
</nav>

      {/* Desktop Socials */}

      <div className="hidden lg:flex items-center gap-4">
        <motion.a
          href="#"
          whileHover={{
            y: -4,
            scale: 1.2,
            color: "#D4AF37",
          }}
        >
          <FaInstagram size={18} />
        </motion.a>

        <motion.a
          href="#"
          whileHover={{
            y: -4,
            scale: 1.2,
            color: "#D4AF37",
          }}
        >
          <FaFacebookF size={18} />
        </motion.a>

        <motion.a
          href="#"
          whileHover={{
            y: -4,
            scale: 1.2,
            color: "#D4AF37",
          }}
        >
          <FaXTwitter size={18} />
        </motion.a>
      </div>

      {/* Mobile Menu Button */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden"
      >
        {menuOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>
    </div>

    {/* Mobile Menu */}

    {menuOpen && (
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          lg:hidden
          bg-black/80
          backdrop-blur-2xl
          border-t
          border-white/10
        "
      >
        <div className="px-6 py-8 flex flex-col gap-6">
  {navItems.map((item) =>
    item.dropdown ? (
      <div key={item.name}>
        <button
          onClick={() => setDestinationsOpen(!destinationsOpen)}
          className="
            w-full
            flex
            items-center
            justify-between
            text-lg
            uppercase
            tracking-[2px]
            hover:text-[#D4AF37]
            transition
          "
        >
          <span>{item.name}</span>

          <span
            className={`transition-transform duration-300 ${
              destinationsOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            destinationsOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-4 pl-4 border-l border-white/10 flex flex-col gap-4">
            {item.dropdown.map((destination) => (
              <Link
                key={destination.name}
                href={destination.link}
                onClick={() => {
                  setMenuOpen(false);
                  setDestinationsOpen(false);
                }}
                className="
                  text-sm
                  uppercase
                  tracking-[2px]
                  text-white/70
                  hover:text-[#D4AF37]
                  transition
                "
              >
                {destination.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <Link
        key={item.name}
        href={item.link}
        onClick={() => setMenuOpen(false)}
        className="
          text-lg
          uppercase
          tracking-[2px]
          hover:text-[#D4AF37]
          transition
        "
      >
        {item.name}
      </Link>
    )
  )}

  <div className="flex gap-5 pt-4 border-t border-white/10">
    <FaInstagram />
    <FaFacebookF />
    <FaXTwitter />
  </div>
</div>
      </motion.div>
    )}
  </motion.header>
);
}