import Image from "next/image";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import DestinationCarousel from "@/components/home/DestinationCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TravelExperiences from "@/components/home/TravelExperiences";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DestinationCarousel />
      <WhyChooseUs />
      <TravelExperiences />
      <AboutSection />
      <Testimonials/>
      <Footer/>
    </>
  );
}
