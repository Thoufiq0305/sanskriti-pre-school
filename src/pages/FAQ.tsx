import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const FAQ = () => (
  <div className="min-h-screen">
    <SEO
      title="FAQ | Sanskriti Kindergarten Chennai — Common Questions"
      description="Answers to common questions about Sanskriti Kindergarten in Chennai — school hours, age groups, meals, transport, and more."
      canonical="/faq"
      keywords="kindergarten FAQ Chennai, preschool questions Chennai, playschool near me hours"
    />
    <Navbar />
    <div className="pt-24">
      <h1 className="sr-only">Frequently Asked Questions — Sanskriti Kindergarten Chennai</h1>
      <FAQSection />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default FAQ;
