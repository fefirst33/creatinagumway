import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import PorQueGummies from "@/components/PorQueGummies";
import ProductShowcase from "@/components/ProductShowcase";
import OfertaSection from "@/components/OfertaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarqueeText from "@/components/MarqueeText";
import BenefitsBar from "@/components/BenefitsBar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnnouncementBar />
      <HeroSection />
      <LogoMarquee />
      <PorQueGummies />
      <ProductShowcase />
      <OfertaSection />
      <TestimonialsSection />
      <MarqueeText />
      <FooterCTA />
      <BenefitsBar />
      <Footer />
    </div>
  );
};

export default Index;
