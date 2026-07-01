import DestinationHero from "@/components/destination_main/DestinationHero";
import DestinationIntro from "@/components/destination_main/DestinationIntro";
import DestinationGrid from "@/components/destination_main/DestinationGrid";
import DestinationMap from "@/components/destination_main/DestinationMap";
import Header from "@/components/home/Header";
import FooterCTA from "@/components/home/Footer";
import { Suspense } from "react";


// import Footer from "@/components/Footer"; 

export const metadata = {
  title: "Destinations | Luxury Travel",
  description: "Explore our curated list of luxury hotels, yachts, tours, and experiences.",
};

export default function DestinationPage() {
  return (
    <main className="bg-[#050816] min-h-screen text-white">
      {/* 1. Multi-Tab Hero Search Widget */}

      <Header/>
      <DestinationHero />

      {/* 2. Philosophy Text Block */}
      <DestinationIntro />

     <Suspense fallback={
        <div className="min-h-screen bg-[#050816] flex items-center justify-center">
          <div className="animate-pulse text-[#D4AF37] tracking-widest uppercase text-sm">Loading curated experiences...</div>
        </div>
      }>
        <DestinationGrid />
      </Suspense>

      {/* 4. Interactive Map Section */}
      <DestinationMap />

      <FooterCTA/>

      {/* 5. Footer */}
      {/* <Footer /> */}
    </main>
  );
}




