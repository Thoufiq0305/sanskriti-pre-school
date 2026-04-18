import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import AdmissionSection from "@/components/AdmissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import SEO from "@/components/SEO";

const Index = () => (
  <div className="min-h-screen">
    <SEO
      title="Sanskriti Kindergarten | Best Preschool in Chennai"
      description="Sanskriti Kindergarten offers play-based learning, a safe environment, and experienced teachers in Chennai. Admissions open for ages 2-6."
      canonical="/"
      keywords="kindergarten in Chennai, preschool Chennai, playschool near me, Sanskriti Kindergarten, best preschool Chennai"
    />
    <Navbar />
    <AnnouncementPopup />
    <HeroSection />
    <HighlightsSection />
    <AboutSection />
    <GallerySection />
    <AdmissionSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
