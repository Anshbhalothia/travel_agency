import { Destination } from "@/types/destination";

// Simple inline SVG icons keyed by name
const icons: Record<string, JSX.Element> = {
  Clock: (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Coins: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
      <path d="M7 6h1v4"/><line x1="16.71" y1="13.88" x2="13.91" y2="16.67"/>
    </svg>
  ),
  Thermometer: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  ),
  Languages: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/>
      <path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
    </svg>
  ),
  Plane: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2a.2.2 0 0 0-.1.3l1.5 1.5L8 9l-2 3H4l-1 1 3 2 2 3 1-1v-2l3-2 .8 4.7a.2.2 0 0 0 .3.1z"/>
    </svg>
  ),
};

interface Props {
  facts: Destination["facts"];
}

export default function DestinationFacts({ facts }: Props) {
  return (
    <div className="dest-facts">
      <div className="dest-facts__inner">
        {facts.map((fact) => (
          <div key={fact.label} className="dest-fact">
            <div className="dest-fact__icon">
              {icons[fact.icon] ?? icons["Clock"]}
            </div>
            <div>
              <p className="dest-fact__label">{fact.label}</p>
              <p className="dest-fact__value">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}