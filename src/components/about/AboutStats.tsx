"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps { target: number; suffix?: string; label: string; }

function StatItem({ target, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1800, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="ab-stat-item">
      <span className="ab-stat-num">
        {count >= 1000 ? count.toLocaleString() : count}{suffix}
      </span>
      <span className="ab-stat-label">{label}</span>
    </div>
  );
}

const STATS = [
  { target: 5000, suffix: "+", label: "Journeys Crafted" },
  { target: 25,    suffix: "+", label: "Countries Covered" },
  { target: 98,    suffix: "%", label: "Traveller Satisfaction" },
  { target: 15,    suffix: "",  label: "Years of Excellence" },
];

export default function AboutStats() {
  return (
    <>
      <style>{`
        .ab-stats {
          background: var(--ab-bg);
          padding: 72px 64px;
          border-bottom: 1px solid var(--ab-border);
        }
        .ab-stats__grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4,1fr); gap: 0;
        }
        .ab-stat-item {
          text-align: center; padding: 0 24px;
          border-right: 1px solid var(--ab-border);
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
        }
        .ab-stat-item:last-child { border-right: none; }
        .ab-stat-num {
          font-family: var(--ab-display);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700; color: var(--ab-gold); line-height: 1;
        }
        .ab-stat-label {
          font-size: 11px; text-transform: uppercase;
          letter-spacing: 2px; color: var(--ab-muted);
          font-family: var(--ab-body);
        }
        @media (max-width: 768px) {
          .ab-stats { padding: 56px 24px; }
          .ab-stats__grid { grid-template-columns: repeat(2,1fr); gap: 32px; }
          .ab-stat-item { border-right: none; border-bottom: 1px solid var(--ab-border); padding-bottom: 24px; }
          .ab-stat-item:nth-child(2n) { border-right: none; }
          .ab-stat-item:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="ab-stats">
        <div className="ab-stats__grid">
          {STATS.map((s) => (
            <StatItem key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>
    </>
  );
}