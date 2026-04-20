import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sathya B.",
    text: "Really it's a good ,safe and friendly place for our kids. My daughter loves Sanskriti very much. She likes all food in daycare also. All teachers and other staff also so kind to my daughter. We missed Sanskriti so much due to my transfer!",
    stars: 5,
  },
  {
    name: "Chan Drika.",
    text: "I would highly recommend Sanskriti school as it is run by an excellent team. They do a great job of making learning fun for kids and thereby making it easy for the parents too. They ensure overall development and not just academics. This will definitely be a great place to start your child's education.",
    stars: 5,
  },
  {
    name: "Ashwini Shiva.",
    text: "Good activity centre near by this area. Daycare also well maintained by the management.",
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
