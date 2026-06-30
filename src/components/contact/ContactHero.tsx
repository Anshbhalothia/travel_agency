"use client";

export default function ContactHero() {
  return (
    <>
      <style>{`
        .ct-hero {
          position: relative;
          /* Uses dynamic viewport height, but caps it so it never gets too tall or too short */
          height: max(60vh, 500px);
          display: flex;
          align-items: center;
          padding-top: 90px; 
          box-sizing: border-box;
          overflow: hidden;
        }

        .ct-hero__img-wrap { position: absolute; inset: 0; }
        
        .ct-hero__img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          object-position: center; 
          animation: ctZoomOut 12s ease-out forwards;
        }

        @keyframes ctZoomOut {
          from { transform: scale(1.15); }
          to { transform: scale(1); }
        }

        .ct-hero__overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to right, rgba(5,8,22,0.92) 0%, rgba(5,8,22,0.6) 45%, rgba(5,8,22,0.15) 100%),
            linear-gradient(to top, rgba(5,8,22,0.8) 0%, transparent 60%);
        }

        .ct-hero__content {
          position: relative; 
          z-index: 2;
          width: 100%;
          /* Fluid padding: smoothly scales between 24px on mobile and 64px on desktop */
          padding: 0 clamp(24px, 5vw, 64px); 
          /* The max-width now adapts to the screen width, allowing text to wrap naturally */
          max-width: min(100%, 720px);
          animation: ctFadeUp 0.9s 0.2s both; 
        }

        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ct-eyebrow {
          font-family: var(--ab-body, sans-serif);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 6px;
          color: var(--ab-gold, #D4AF37);
          margin-bottom: clamp(12px, 2vw, 16px);
          font-weight: 600;
        }

        .ct-hero__title {
          font-family: var(--ab-display, sans-serif);
          /* Smoother scaling curve: keeps it readable on mobile without just becoming tiny */
          font-size: clamp(42px, 5vw + 1rem, 84px);
          font-weight: 700; 
          /* Tighter line-height on larger screens, slightly looser on mobile for better wrapping */
          line-height: clamp(1, 4vw, 1.05);
          color: var(--ab-white, #ffffff); 
          letter-spacing: -1.5px;
          margin: 0 0 clamp(16px, 3vw, 24px);
        }

        .ct-hero__title em {
          display: block; 
          font-style: italic;
          color: var(--ab-gold, #D4AF37); 
          margin-top: 4px; 
          font-size: 0.85em;
        }

        .ct-hero__desc {
          /* Keeps the font size highly readable everywhere, never dropping below 15px */
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(250,250,248,0.7);
          /* Allows the paragraph to take up more width on tablets/mobile before wrapping */
          max-width: min(100%, 520px); 
          line-height: 1.7;
          font-weight: 300; 
          margin-bottom: 0; 
          font-family: var(--ab-body, sans-serif);
        }

        /* Extreme Short Screen Height Fix */
        @media (max-height: 600px) {
          .ct-hero { 
            align-items: flex-start; 
            padding-top: 120px; 
          }
        }
      `}</style>

      <section className="ct-hero">
        {/* Background */}
        <div className="ct-hero__img-wrap">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact Us"
            className="ct-hero__img"
          />
          <div className="ct-hero__overlay" />
        </div>

        {/* Content */}
        <div className="ct-hero__content">
          <p className="ct-eyebrow">Contact Us</p>
          <h1 className="ct-hero__title">
            Let's Plan Your
            <em>Next Journey</em>
          </h1>
          <p className="ct-hero__desc">
            Whether you're planning a luxury getaway, honeymoon, family vacation or corporate trip, our travel specialists are ready to help create your perfect experience.
          </p>
        </div>
      </section>
    </>
  );
}