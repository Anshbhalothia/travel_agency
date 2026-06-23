import { Destination } from "@/types/destination";

interface Props {
  tips: Destination["tips"];
}

export default function DestinationTips({ tips }: Props) {
  return (
    <section className="dest-section">
      <div className="dest-section__header">
        <p className="dest-label">Smart Travel</p>
        <h2 className="dest-title">Insider Tips</h2>
        <p className="dest-subtitle">
          Local knowledge that makes the difference between a good trip and a great one.
        </p>
      </div>

      <div className="dest-tips-grid">
        {tips.map((tip) => (
          <div key={tip.number} className="dest-tip">
            <span className="dest-tip__num" aria-hidden="true">
              {tip.number}
            </span>
            <div>
              <h3 className="dest-tip__title">{tip.title}</h3>
              <p className="dest-tip__text">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}