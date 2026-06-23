export default function AboutIntro() {
  return (
    <>
      <style>{`
        .ab-intro {
          background: var(--ab-bg2);
          border-top: 1px solid var(--ab-border);
          border-bottom: 1px solid var(--ab-border);
          padding: 56px 64px;
        }
        .ab-intro__inner {
          max-width: 820px; margin: 0 auto; text-align: center;
        }
        .ab-intro__quote {
          font-family: var(--ab-display);
          font-size: clamp(20px, 3vw, 28px);
          font-style: italic;
          color: rgba(250,250,248,0.8);
          line-height: 1.6; margin-bottom: 14px;
        }
        .ab-intro__attr {
          font-size: 12px; color: var(--ab-gold);
          text-transform: uppercase; letter-spacing: 2px;
          font-family: var(--ab-body);
        }
        @media (max-width: 768px) { .ab-intro { padding: 48px 24px; } }
      `}</style>

      <section className="ab-intro">
        <div className="ab-intro__inner">
          <p className="ab-intro__quote">
            &ldquo;The world is not a problem to be solved — it&apos;s a living
            being to which we belong.&rdquo;
          </p>
          <p className="ab-intro__attr">— Our Founding Philosophy</p>
        </div>
      </section>
    </>
  );
}