import { Destination } from "@/types/destination";

interface Props {
  experiences: Destination["experiences"];
}

const tagColorMap: Record<string, string> = {
  coral: "dest-tag--coral",
  gold: "dest-tag--gold",
  green: "dest-tag--green",
  purple: "dest-tag--purple",
  blue: "dest-tag--blue",
  amber: "dest-tag--amber",
};

const accentColorMap: Record<string, string> = {
  coral: "dest-exp-card--coral",
  gold: "dest-exp-card--gold",
  green: "dest-exp-card--green",
  purple: "dest-exp-card--purple",
  blue: "dest-exp-card--blue",
  amber: "dest-exp-card--amber",
};

export default function DestinationExperiences({ experiences }: Props) {
  return (
    <section className="dest-section dest-section--alt">
      <div className="dest-section__header">
        <p className="dest-label">What Awaits You</p>
        <h2 className="dest-title">Curated Experiences</h2>
        <p className="dest-subtitle">
          Hand-picked activities that go beyond the tourist trail.
        </p>
      </div>

      <div className="dest-exp-grid">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className={`dest-exp-card ${accentColorMap[exp.tagColor] ?? ""}`}
          >
            <span className="dest-exp-card__emoji" aria-hidden="true">
              {exp.emoji}
            </span>
            <h3 className="dest-exp-card__title">{exp.title}</h3>
            <p className="dest-exp-card__desc">{exp.description}</p>
            <span className={`dest-tag ${tagColorMap[exp.tagColor] ?? ""}`}>
              {exp.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
