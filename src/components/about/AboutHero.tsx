"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WORDS = ["Baku", "Bali", "Dubai", "Maldives", "Malaysia", "Europe","Singapore","Thailand"];

function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length)
          setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 55 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function AboutHero() {
  const typed = useTypewriter(WORDS);

  return (
    <>
      <style>{`
        .ab-hero {
          position: relative;
          height: 100vh;
          min-height: 620px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .ab-hero__img-wrap { position: absolute; inset: 0; }
        .ab-hero__img { object-fit: cover; object-position: center; }
        .ab-hero__overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to right, rgba(5,8,22,0.92) 0%, rgba(5,8,22,0.6) 55%, rgba(5,8,22,0.15) 100%),
            linear-gradient(to top, rgba(5,8,22,0.7) 0%, transparent 50%);
        }
        .ab-hero__content {
          position: relative; z-index: 2;
          padding: 0 64px; max-width: 680px;
          animation: abFadeUp 0.9s 0.2s both;
        }
        .ab-hero__title {
          font-family: var(--ab-display);
          font-size: clamp(46px, 7vw, 84px);
          font-weight: 700; line-height: 0.95;
          color: var(--ab-white); letter-spacing: -1.5px;
          margin: 14px 0 18px;
        }
        .ab-hero__title em {
          display: block; font-style: italic;
          color: var(--ab-gold); margin-top: 6px; font-size: 0.82em;
        }
        .ab-hero__typed {
          font-size: 15px; color: var(--ab-muted);
          margin-bottom: 16px; min-height: 26px;
          font-family: var(--ab-body);
        }
        .ab-hero__word {
          font-family: var(--ab-display);
          font-style: italic; color: var(--ab-gold2); font-size: 17px;
        }
        .ab-cursor { animation: abBlink 1s infinite; color: var(--ab-coral); font-style: normal; }
        .ab-hero__desc {
          font-size: 15px; color: rgba(250,250,248,0.58);
          max-width: 420px; line-height: 1.8;
          font-weight: 300; margin-bottom: 32px;
          font-family: var(--ab-body);
        }
        .ab-hero__btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .ab-hero__scroll {
          position: absolute; bottom: 36px; left: 64px; z-index: 2;
          display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
        }
        .ab-hero__scroll span {
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(250,250,248,0.35); font-family: var(--ab-body);
        }
        .ab-hero__scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--ab-gold), transparent);
          animation: abScrollPulse 2.2s ease-in-out infinite;
        }
          .ab-hero__video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        @media (max-width: 768px) {
          .ab-hero__content { padding: 0 24px; }
          .ab-hero__scroll  { left: 24px; }
        }
      `}</style>

      <section className="ab-hero">
        {/* Background image */}
        {/* <div className="ab-hero__img-wrap">
          <Image
            src="/images/about/hero.jpg"
            alt="Scenic travel destination at golden hour"
            fill priority
            className="ab-hero__img"
            sizes="100vw"
          />
          <div className="ab-hero__overlay" />
        </div> */}

        <div className="ab-hero__img-wrap">
  <video
    className="ab-hero__video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/about.mp4" type="video/mp4" />
  </video>

  <div className="ab-hero__overlay" />
</div>

        {/* Content */}
        <div className="ab-hero__content">
          <p className="ab-eyebrow">Est. 2009 · Our Story</p>
          <h1 className="ab-hero__title">
            We Don&apos;t Book Trips.
            <em>We Craft Lives.</em>
          </h1>
          <p className="ab-hero__typed">
            Currently in love with&nbsp;
            <span className="ab-hero__word">
              {typed}<span className="ab-cursor">|</span>
            </span>
          </p>
          <p className="ab-hero__desc">
            For fifteen years, we&apos;ve believed the right journey changes
            you — not your feed, but you. We build those journeys, one
            extraordinary detail at a time.
          </p>
          <div className="ab-hero__btns">
            <Link href="/" className="ab-btn ab-btn--primary">Explore Destinations</Link>
            <Link href="/contact"      className="ab-btn ab-btn--ghost">Talk to Us</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="ab-hero__scroll">
          <span>Scroll to discover</span>
          <div className="ab-hero__scroll-line" />
        </div>
      </section>
    </>
  );
}