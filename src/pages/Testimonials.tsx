import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Testimonials = () => (
  <div className="min-h-screen">
    <SEO
      title="Parent Testimonials | Sanskriti Kindergarten Chennai"
      description="Read what parents say about Sanskriti Kindergarten in Chennai — trusted preschool with caring teachers and a joyful play-based curriculum."
      canonical="/testimonials"
      keywords="kindergarten reviews Chennai, preschool testimonials Chennai, playschool near me reviews"
    />
    <Navbar />
    <div className="pt-24">
      <h1 className="sr-only">Parent Testimonials — Sanskriti Kindergarten Chennai</h1>
      <TestimonialsSection />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Testimonials;
