import Image from "next/image";
import { Destination } from "@/types/destination";

interface Props {
  items: Destination["galleryItems"];
  destinationName: string;
}

export default function DestinationGallery({ items, destinationName }: Props) {
  // Expects exactly 5 items: [0] = large left, [1-4] = 2x2 grid right
  const [main, ...rest] = items;

  return (
    <section className="dest-section dest-section--flush">
      <div className="dest-section__header">
        <p className="dest-label">Visual Journey</p>
        <h2 className="dest-title">Iconic Highlights</h2>
        <p className="dest-subtitle">
          Five landscapes that define the {destinationName} experience.
        </p>
      </div>

      <div className="dest-gallery">
        {/* Large main image */}
        <div className="dest-gallery__main">
          <Image
            src={main.image}
            alt={main.alt}
            fill
            className="dest-gallery__img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="dest-gallery__overlay" />
          <span className="dest-gallery__label">{main.label}</span>
        </div>

        {/* 2x2 grid */}
        <div className="dest-gallery__grid">
          {rest.map((item) => (
            <div key={item.label} className="dest-gallery__item">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="dest-gallery__img"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="dest-gallery__overlay" />
              <span className="dest-gallery__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
