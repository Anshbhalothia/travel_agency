import Link from "next/link";
import { Destination } from "@/types/destination";

interface Props {
  destination: Destination;
}

export default function DestinationCTA({ destination }: Props) {
  return (
    <section className="dest-cta">
      {/* Ghost text background */}
      <span className="dest-cta__ghost" aria-hidden="true">
        {destination.name.toUpperCase()}
      </span>

      <div className="dest-cta__content">
        <h2 className="dest-cta__title">{destination.ctaTitle}</h2>
        <p className="dest-cta__sub">{destination.ctaSubtitle}</p>
        <div className="dest-cta__btns">
          <Link href="/contact" className="dest-btn dest-btn--primary">
            Book This Destination
          </Link>
          <Link href="/destinations" className="dest-btn dest-btn--secondary">
            Explore More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}