const VALUES = [
  {
    icon: "🧭",
    title: "Depth over breadth",
    desc: "We never design itineraries that try to see everything. Three perfect days in a place beats five frantic ones. We design for memory, not mileage.",
  },
  {
    icon: "🤝",
    title: "Local first, always",
    desc: "Every restaurant, guide, and stay we recommend puts money directly into the hands of the communities that make destinations worth visiting.",
  },
  {
    icon: "🌿",
    title: "Travel with conscience",
    desc: "We commit 2% of every booking to local conservation and community initiatives. The places we love must be protected for the next traveller.",
  },
];

export default function AboutValues() {
  return (
    <>
      <style>{`
        .ab-values {
          background: var(--ab-bg2);
          padding: 100px 64px;
          border-bottom: 1px solid var(--ab-border);
        }
        .ab-values__inner { max-width: 1100px; margin: 0 auto; }
        .ab-values__header { margin-bottom: 52px; }
        .ab-values__grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          border: 1px solid var(--ab-border);
          border-radius: 20px; overflow: hidden;
        }
        .ab-value {
          padding: 44px 36px;
          background: var(--ab-bg3);
          border-right: 1px solid var(--ab-border);
          position: relative; overflow: hidden; cursor: default;
          transition: background 0.3s;
        }
        .ab-value:last-child { border-right: none; }
        .ab-value::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--ab-gold), var(--ab-coral));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-value:hover { background: rgba(201,169,110,0.03); }
        .ab-value:hover::after { transform: scaleX(1); }
        .ab-value__icon { font-size: 34px; display: block; margin-bottom: 20px; }
        .ab-value__title {
          font-family: var(--ab-display);
          font-size: 22px; font-weight: 700;
          color: var(--ab-white); margin-bottom: 12px;
          transition: color 0.3s;
        }
        .ab-value:hover .ab-value__title { color: var(--ab-gold2); }
        .ab-value__desc {
          font-size: 13.5px; color: var(--ab-muted);
          line-height: 1.8; font-family: var(--ab-body);
        }
        @media (max-width: 768px) {
          .ab-values { padding: 72px 24px; }
          .ab-values__grid { grid-template-columns: 1fr; border-radius: 16px; }
          .ab-value { border-right: none; border-bottom: 1px solid var(--ab-border); }
          .ab-value:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="ab-values">
        <div className="ab-values__inner">
          <div className="ab-values__header">
            <p className="ab-eyebrow">What We Stand For</p>
            <h2 className="ab-section-title">Three principles. Zero compromise.</h2>
          </div>
          <div className="ab-values__grid">
            {VALUES.map((v) => (
              <div className="ab-value" key={v.title}>
                <span className="ab-value__icon">{v.icon}</span>
                <h3 className="ab-value__title">{v.title}</h3>
                <p className="ab-value__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}