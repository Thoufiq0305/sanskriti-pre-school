import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "No.20B,Cart Track Road, Gopalakrishnan Street, opposite to kala flats, Chennai, Tamil Nadu 600032" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 78455 19020" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "sanskritivelachery@gmail.com" },
  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon–Fri: 8:30 AM – 4:00 PM" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-mint/15">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title text-foreground">
        Get in <span className="text-primary">Touch</span> 📍
      </h2>
      <p className="section-subtitle">
        We'd love to hear from you! Visit us or reach out anytime.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-4">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card rounded-2xl p-5 shadow-sm hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{item.label}</p>
                <p className="font-body text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-sm h-80 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25876.79050860487!2d80.17135620117189!3d12.997867309754252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675d7c6b66d1%3A0x5e37c1b79c8e3610!2sSanskriti%20kindergarten%20guindy!5e1!3m2!1sen!2sin!4v1774688817452!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School location on Google Maps"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
