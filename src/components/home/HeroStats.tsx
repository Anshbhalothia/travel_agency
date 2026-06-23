"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "25+",
    label: "Countries",
  },
  {
    value: "5000+",
    label: "Travelers",
  },
  {
    value: "15+",
    label: "Years",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 mt-12">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-bold text-[#D4AF37]">
            {item.value}
          </h3>

          <p className="text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}