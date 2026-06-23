import { notFound } from "next/navigation";
import { Metadata } from "next";

import {
  DestinationHero,
  DestinationFacts,
  DestinationGallery,
  DestinationExperiences,
  DestinationBestTime,
  DestinationTips,
  DestinationCTA,
  StickyBookButton,
} from "@/components/destination";

import {
  getDestinationBySlug,
  getAllDestinationSlugs,
} from "@/data/destinations";
import Header from "@/components/home/Header";
import FooterCTA from "@/components/home/Footer";

// ─── Static Params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.name}, ${destination.country} | Your Travel Agency`,
    description: destination.heroDescription,
    openGraph: {
      title: `${destination.name} – Discover ${destination.country}`,
      description: destination.heroDescription,
      images: [{ url: destination.heroImage }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="dest-page">
        <Header/>
      <DestinationHero destination={destination} />
      <DestinationFacts facts={destination.facts} />
      <DestinationGallery
        items={destination.galleryItems}
        destinationName={destination.name}
      />
      <DestinationExperiences experiences={destination.experiences} />
      <DestinationBestTime months={destination.months} />
      <DestinationTips tips={destination.tips} />
      <FooterCTA/>
      {/* <DestinationCTA destination={destination} /> */}
      <StickyBookButton />
    </main>
  );
}