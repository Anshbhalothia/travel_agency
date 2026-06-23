
import Image from "next/image";
import Link from "next/link";

export default function AboutStory() {
  return (
    <>
      <style>{`
        .ab-story {
          background: var(--ab-bg3);
          padding: 100px 64px;
          border-bottom: 1px solid var(--ab-border);
        }
        .ab-story__inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .ab-story__media { position: relative; height: 540px; }
        .ab-story__img-main {
          position: absolute; inset: 0; border-radius: 20px; overflow: hidden;
          background: linear-gradient(135deg, #1a3a5c, #2d6a4f);
        }
        .ab-story__img { object-fit: cover; }
        .ab-story__badge {
          position: absolute; bottom: -20px; right: -20px;
          background: var(--ab-bg2); border: 1px solid var(--ab-border2);
          border-radius: 14px; padding: 16px 22px; text-align: center;
        }
        .ab-story__badge-num {
          display: block; font-family: var(--ab-display);
          font-size: 34px; font-weight: 700; color: var(--ab-gold); line-height: 1;
        }
        .ab-story__badge-label {
          display: block; font-size: 10px; color: var(--ab-muted);
          text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px;
          font-family: var(--ab-body);
        }
        .ab-story__pill {
          position: absolute; top: -14px; left: -14px;
          background: var(--ab-bg2); border: 1px solid var(--ab-border);
          border-radius: 50px; padding: 8px 16px; font-size: 13px;
          color: rgba(250,250,248,0.7);
          display: flex; align-items: center; gap: 6px;
          font-family: var(--ab-body);
        }
        .ab-story__body { display: flex; flex-direction: column; }
        .ab-story__pull {
          font-family: var(--ab-display);
          font-size: 18px; font-style: italic; color: var(--ab-gold2);
          border-left: 2px solid var(--ab-gold);
          padding: 14px 20px; margin: 8px 0 28px;
          background: rgba(201,169,110,0.05);
          border-radius: 0 10px 10px 0; line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .ab-story__inner { grid-template-columns: 1fr; gap: 60px; }
          .ab-story__media { height: 380px; }
        }
        @media (max-width: 768px) { .ab-story { padding: 72px 24px; } }
      `}</style>

      <section className="ab-story">
        <div className="ab-story__inner">

          {/* Image side */}
          <div className="ab-story__media">
            <div className="ab-story__img-main">
              <Image
                src="/images/about/story.jpg"
                alt="Our team exploring a destination"
                fill
                className="ab-story__img"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="ab-story__badge">
              <span className="ab-story__badge-num">2009</span>
              <span className="ab-story__badge-label">Founded in Delhi</span>
            </div>
            <div className="ab-story__pill">
              <span>🧭</span> Where every journey begins
            </div>
          </div>

          {/* Text side */}
          <div className="ab-story__body">
            <p className="ab-eyebrow">Our Philosophy</p>
            <h2 className="ab-section-title">Born from one unforgettable journey</h2>
            <p className="ab-body-text">
              Founded in the heart of Delhi, we opened our doors with one belief
              — that travel should <strong>transform you, not just transport
              you</strong>. What began as a small team with a big vision has
              grown into one of India&apos;s most trusted names in bespoke travel.
            </p>
            <p className="ab-body-text">
              Every itinerary we craft begins with a conversation about{" "}
              <strong>who you are, not just where you want to go</strong>. The
              temples you&apos;ll remember aren&apos;t always on the map. The
              meals that stay with you are eaten at tables with no menu.
            </p>
            <div className="ab-story__pull">
              Three perfect days in Kyoto beats five frantic ones.
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}