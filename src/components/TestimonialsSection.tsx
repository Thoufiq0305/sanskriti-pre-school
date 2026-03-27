import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    text: "My daughter absolutely loves going to school every morning. The teachers are incredibly warm and caring. Best decision we made!",
    stars: 5,
  },
  {
    name: "Amit K.",
    text: "The play-based learning approach has done wonders for our son's confidence and creativity. Highly recommended!",
    stars: 5,
  },
  {
    name: "Sara T.",
    text: "Safe, clean, and full of joy. The regular updates and parent involvement make us feel truly connected.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-peach/20">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title text-foreground">
        What Parents <span className="text-primary">Say</span> 💬
      </h2>
      <p className="section-subtitle">
        Hear from the families who trust us with their little ones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-3xl p-8 shadow-sm hover-lift"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-sunny text-sunny" />
              ))}
            </div>
            <p className="font-body text-muted-foreground mb-6 italic">
              "{t.text}"
            </p>
            <p className="font-heading font-bold text-foreground">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
