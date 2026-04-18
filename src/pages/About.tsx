import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const About = () => (
  <div className="min-h-screen">
    <SEO
      title="About Sanskriti Kindergarten Chennai | Vision, Mission & Teachers"
      description="Learn about Sanskriti Kindergarten in Chennai — our vision, mission, experienced teachers, and play-based learning approach for preschool children."
      canonical="/about"
      keywords="about kindergarten Chennai, preschool Chennai, Sanskriti Kindergarten teachers, playschool near me"
    />
    <Navbar />
    <div className="pt-24">
      <h1 className="sr-only">About Sanskriti Kindergarten — Preschool in Chennai</h1>
      <AboutSection />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default About;
