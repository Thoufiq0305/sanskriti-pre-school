import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Gallery = () => (
  <div className="min-h-screen">
    <SEO
      title="Gallery | Sanskriti Kindergarten Chennai — Photos & Videos"
      description="Explore photos and videos of classroom activities, art, music, and play at Sanskriti Kindergarten, a leading preschool in Chennai."
      canonical="/gallery"
      keywords="kindergarten gallery Chennai, preschool photos Chennai, playschool near me activities"
    />
    <Navbar />
    <div className="pt-24">
      <GallerySection />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Gallery;
