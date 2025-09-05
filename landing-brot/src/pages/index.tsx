import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import LocationsSection from "@/components/LocationsSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="productos">
        <ProductsSection />
      </div>
      <div id="sucursales">
        <LocationsSection />
      </div>
      <SocialSection />
      <div id="contacto">
        <ContactSection />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;