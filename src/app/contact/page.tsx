import ContactHero from "@/components/contact/ContactHero";
import Header from "@/components/home/Header";
import ContactCards from "@/components/contact/ContactCards";
import ConsultationForm from "@/components/contact/ConsultationForm";
import FooterCTA from "@/components/home/Footer";
import BespokeContactPanel from "@/components/contact/BespokeContactPanel";
import BespokeManifestoForm from "@/components/contact/BespokeManifestoForm";
// import OfficeLocations from "@/components/contact/OfficeLocations";
// import ContactFAQ from "@/components/contact/ContactFAQ";
// import FooterCTA from "@/components/home/FooterCTA";

export default function ContactPage() {
  return (
    <>
      <Header/>
      <ContactHero />
      <BespokeContactPanel/>
      {/* <ContactCards /> */}
      {/* <ConsultationForm /> */}
      <BespokeManifestoForm/>
      {/* <OfficeLocations /> */}
      {/* <ContactFAQ /> */}
      <FooterCTA />
    </>
  );
}