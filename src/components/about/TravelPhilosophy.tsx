"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

const philosophy: PhilosophyItem[] = [
  {
    number: "01",
    title: "Travel Should Feel Personal",
    description: "Every journey should reflect the interests, preferences, and aspirations of the traveler experiencing it.",
  },
  {
    number: "02",
    title: "Travel Should Feel Effortless",
    description: "From planning and logistics to on-ground support, every detail should be handled seamlessly.",
  },
  {
    number: "03",
    title: "Travel Should Create Memories",
    description: "The most meaningful trips are not measured by destinations visited but by experiences remembered.",
  },
];

export default function TravelPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest < 0.33) {
      if (activeStage !== 0) setActiveStage(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      if (activeStage !== 1) setActiveStage(1);
    } else {
      if (activeStage !== 2) setActiveStage(2);
    }
  });
  
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "50%", "80%"]);
  const glowY = useTransform(scrollYProgress, [0, 0.5, 1], ["30%", "60%", "40%"]);

  // Fix 1: Explicit string type added here
  const splitWords = (text: string): string[] => text.split(" ");

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#050816] text-white">
      {/* Editorial Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay z-50">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Dynamic Luxury Glow */}
      <motion.div 
        style={{ left: glowX, top: glowY }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.07)_0%,_transparent_70%)] blur-3xl pointer-events-none transition-all duration-1000 ease-[0.16,1,0.3,1] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Ambient Fine Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Editorial Scroll Progress Bar */}
        <div className="absolute left-8 md:left-16 top-1/4 h-1/2 w-[1px] bg-white/10 hidden sm:block z-40">
          <motion.div 
            style={{ scaleY }}
            className="w-full h-full bg-gradient-to-b from-[#B8962E] via-[#F5E27D] to-[#D4AF37] origin-top"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* LEFT: Title Block */}
          <div className="lg:col-span-5 self-start lg:self-center">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs font-semibold mb-4"
            >
              Our Philosophy
            </motion.p>
            
            <h2 className="text-4xl md:text-6xl font-normal leading-[1.15] font-serif tracking-tight max-w-sm">
              {/* Fix 2: Explicit types for 'word' (string) and 'i' (number) */}
              {splitWords("What We Believe").map((word: string, i: number) => (
                <span key={i} className="inline-block overflow-hidden mr-3 pb-1">
                  <motion.span
                    className="inline-block origin-bottom font-serif"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>

          {/* RIGHT: Interchanging Canvas */}
          <div className="lg:col-span-7 relative h-[320px] md:h-[400px] w-full flex items-center">
            
            {/* Massive Background Numerals */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
              {philosophy.map((item, idx) => (
                <motion.div
                  key={`num-${item.number}`}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] md:text-[32rem] font-bold font-sans font-black tracking-tighter leading-none"
                  // Fix 3: Standardize the custom Webkit CSS properties inside the inline style block instead of the framer animate engine
                  style={{
                    WebkitTextStroke: activeStage === idx ? "1px rgba(212, 175, 55, 0.15)" : "1px rgba(255, 255, 255, 0.04)",
                    transition: "webkit-text-stroke 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  animate={
                    activeStage === idx 
                      ? { opacity: 1, scale: 1, color: "rgba(212, 175, 55, 0.08)" }
                      : { opacity: 0, scale: 0.85, color: "rgba(255, 255, 255, 0)" }
                  }
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.number}
                </motion.div>
              ))}
            </div>

            {/* Alternating Text Content Scenes */}
            <div className="w-full relative z-10">
              {philosophy.map((item, idx) => (
                <motion.div
                  key={`content-${item.number}`}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 space-y-6"
                  initial={{ opacity: 0, x: 80, y: "-50%" }}
                  animate={
                    activeStage === idx
                      ? { opacity: 1, x: 0, y: "-50%", pointerEvents: "auto" }
                      : activeStage > idx
                      ? { opacity: 0, x: -80, y: "-50%", pointerEvents: "none" }
                      : { opacity: 0, x: 80, y: "-50%", pointerEvents: "none" }
                  }
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl md:text-4xl font-serif font-light text-white leading-snug tracking-wide max-w-xl">
                    {item.title}
                  </h3>
                  
                  <div className="h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent w-24" />

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg font-light tracking-wide">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}