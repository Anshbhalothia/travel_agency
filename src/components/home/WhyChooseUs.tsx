"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Headphones,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Destination Expertise",
    image: "/images/features/expertise.jpg",
    description:
      "Our specialists have extensive knowledge of the destinations we offer, ensuring authentic and well-planned travel experiences.",
  },
  {
    icon: MapPinned,
    title: "Personalized Itineraries",
    image: "/images/features/itinerary.jpg",
    description:
      "Every trip is tailored around your interests, travel style, and expectations rather than one-size-fits-all packages.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    image: "/images/features/support.jpg",
    description:
      "From your first inquiry to your return journey, our team remains available whenever you need assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Travel Partners",
    image: "/images/features/partners.jpg",
    description:
      "We work with carefully selected hotels, guides and transportation providers to ensure reliability and comfort.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Why Choose Us
          </p>

          <h2 className="font-heading text-5xl md:text-6xl mt-4">
            Travel Planning Without
            The Guesswork
          </h2>

          <p className="text-gray-400 mt-6">
            We combine destination expertise,
            personalized service and trusted
            partnerships to create journeys that
            are smooth, memorable and genuinely
            enjoyable.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20 ">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
  key={item.title}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
  whileHover={{ y: -12 }}
  className="group relative h-[420px] overflow-hidden rounded-[32px] cursor-pointer"
>
  {/* Background */}

  <img
    src={item.image}
    alt={item.title}
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover

      transition-all
      duration-700

      group-hover:scale-110
    "
  />

  {/* Dark Overlay */}

  <div
    className="
      absolute
      inset-0

      bg-gradient-to-t
      from-black
      via-black/70
      to-black/20
    "
  />

  {/* Gold Glow */}

  <div
    className="
      absolute
      inset-0

      opacity-0

      group-hover:opacity-100

      transition

      duration-700

      bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.25),transparent_55%)]
    "
  />

  {/* Border */}

  <div
    className="
      absolute
      inset-0

      rounded-[32px]

      border

      border-white/10

      group-hover:border-[#D4AF37]/60

      transition-all
      duration-500
    "
  />

  {/* Content */}

  <div className="relative z-20 flex h-full flex-col justify-end p-8">

    <div
      className="
        w-16
        h-16

        rounded-2xl

        backdrop-blur-xl

        bg-white/10

        border

        border-white/20

        flex

        items-center

        justify-center
      "
    >
      <Icon
        size={30}
        className="text-[#D4AF37]"
      />
    </div>

    <div className="w-14 h-[2px] bg-[#D4AF37] mt-6 group-hover:w-28 transition-all duration-500" />

    <h3 className="text-3xl font-semibold mt-6 text-white">
      {item.title}
    </h3>

    <p className="text-gray-200 mt-4 leading-7">
      {item.description}
    </p>
  </div>
</motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}