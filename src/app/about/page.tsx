import AboutHero from "@/components/about/AboutHero";

import PartnersSection from "@/components/about/PartnersSection";

import FooterCTA from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Testimonials from "@/components/home/Testimonials";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import TravelPhilosophy from "@/components/about/TravelPhilosophy";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutIntro/>
      <AboutStats/>
      <AboutStory/>
      <AboutValues/>
     
      <PartnersSection/>
      <TravelPhilosophy/>
      
      <Testimonials/>
      <FooterCTA />
    </>
  );
}



