import Navbar from "@/components/Navbar";
import AdmissionSection from "@/components/AdmissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Admissions = () => (
  <div className="min-h-screen">
    <SEO
      title="Admissions Open | Sanskriti Kindergarten Chennai"
      description="Apply for preschool admission at Sanskriti Kindergarten in Chennai. Limited seats for ages 2-6. Submit your application online today."
      canonical="/admissions"
      keywords="kindergarten admission Chennai, preschool admission Chennai, playschool near me admission"
    />
    <Navbar />
    <div className="pt-24">
      <h1 className="sr-only">Admissions Open at Sanskriti Kindergarten Chennai</h1>
      <AdmissionSection />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Admissions;
