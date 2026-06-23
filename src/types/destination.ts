export type MonthRating = "peak" | "good" | "avoid";

export interface DestinationFact {
  icon: string; // lucide icon name
  label: string;
  value: string;
}

export interface DestinationExperience {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  tagColor: "coral" | "gold" | "green" | "purple" | "blue" | "amber";
}

export interface DestinationMonth {
  name: string;
  rating: MonthRating;
}

export interface DestinationTip {
  number: string;
  title: string;
  text: string;
}

export interface GalleryItem {
  label: string;
  image: string; // path or URL — use /images/destinations/[slug]/[name].jpg
  alt: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
   // /images/destinations/[slug]/hero.jpg
  heroVideo: string;
   // /videos/destinations/[slug]/hero.mp4
  heroDescription: string;
  rating: number;
  facts: DestinationFact[];
  galleryItems: GalleryItem[];
  experiences: DestinationExperience[];
  months: DestinationMonth[];
  tips: DestinationTip[];
  ctaTitle: string;
  ctaSubtitle: string;
  accentColor?: string; // optional per-destination accent override (hex)
}