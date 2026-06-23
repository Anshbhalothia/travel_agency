"use client";

import Image from "next/image";
import { Destination } from "@/types/destination";

interface Props {
  destination: Destination;
}

export default function DestinationHero({ destination }: Props) {
  return (
    <section className="dest-hero">
      {/* Background Image */}
      {/* <div className="dest-hero__bg">
        <Image
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.country}`}
          fill
          priority
          className="dest-hero__img"
          sizes="100vw"
        />
        <div className="dest-hero__overlay" />
      </div> */}

      <div className="dest-hero__bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="dest-hero__vid"
        >
          <source src={destination.heroVideo} type="video/mp4" />
        </video>
        <div className="dest-hero__overlay" />
      </div>

      {/* Rating Badge */}
      <div className="dest-hero__badge">
        <div className="dest-hero__badge-num">{destination.rating}</div>
        <div className="dest-hero__badge-label">Rating</div>
      </div>

      {/* Content */}
      <div className="dest-hero__content">
        <p className="dest-hero__eyebrow">{destination.tagline}</p>
        <h1 className="dest-hero__title">
          {destination.name}
          <span className="dest-hero__country">{destination.country}</span>
        </h1>
        <p className="dest-hero__desc">{destination.heroDescription}</p>
        <a href="#contact" className="dest-hero__cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Plan My Trip
        </a>
      </div>
    </section>
  );
}