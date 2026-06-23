import { Destination } from "@/types/destination";

interface Props {
  months: Destination["months"];
}

export default function DestinationBestTime({ months }: Props) {
  return (
    <section className="dest-best-time">
      <div className="dest-section__header">
        <p className="dest-label dest-label--gold">When to Go</p>
        <h2 className="dest-title dest-title--light">Best Time to Visit</h2>
        <p className="dest-subtitle dest-subtitle--muted">
          Plan around the season for the most rewarding experience.
        </p>
      </div>

      <div className="dest-months">
        {months.map((month) => (
          <div
            key={month.name}
            className={`dest-month dest-month--${month.rating}`}
          >
            <p className="dest-month__name">{month.name}</p>
            <div className="dest-month__bar" />
            <p className="dest-month__rating">
              {month.rating === "peak" ? "Peak" : month.rating === "good" ? "Good" : "Wet"}
            </p>
          </div>
        ))}
      </div>

      <div className="dest-months__legend">
        <div className="dest-legend-item">
          <span className="dest-legend-dot dest-legend-dot--peak" />
          <span>Peak Season</span>
        </div>
        <div className="dest-legend-item">
          <span className="dest-legend-dot dest-legend-dot--good" />
          <span>Good</span>
        </div>
        <div className="dest-legend-item">
          <span className="dest-legend-dot dest-legend-dot--avoid" />
          <span>Wet / Off-Season</span>
        </div>
      </div>
    </section>
  );
}