import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Rainbow Lane, Sunshine City, 400001" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@littlestars.edu" },
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.877655!3d19.075983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
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
