import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import { Brain, Users, ShieldCheck, Palette } from "lucide-react";

const teachers = [
  { name: "Mrs. Lakshmi", role: "Kindergarten Lead Teacher", img: teacher1 },
  { name: "Mr. Ramesh", role: "Music & Rhymes Teacher", img: teacher2 },
  { name: "Ms. Anitha", role: "Playgroup Teacher", img: teacher3 },
];
const features = [
  {
    icon: Brain,
    title: "Play-Based Learning",
    desc: "Learning through fun activities that boost creativity and curiosity.",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    desc: "Caring and qualified staff who nurture every child.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "Secure campus with child-friendly infrastructure.",
  },
  {
    icon: Palette,
    title: "Creative Activities",
    desc: "Art, music, and play to develop overall skills.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title text-foreground">
        About <span className="text-primary">Us</span> 🏫
      </h2>
      <p className="section-subtitle">
        Sanskriti Kindergarten has been nurturing young minds since 2010, creating a vibrant community where children love to learn.
      </p>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-card rounded-3xl p-8 shadow-sm hover-lift">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Our Vision</h3>
          <p className="font-body text-muted-foreground">
            To be the most trusted and beloved kindergarten, empowering children to become confident, compassionate, and creative learners for life.
          </p>
        </div>
        <div className="bg-card rounded-3xl p-8 shadow-sm hover-lift">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Our Mission</h3>
          <p className="font-body text-muted-foreground">
            We provide a warm, inclusive environment with a play-based curriculum that respects each child's unique pace of growth, fostering intellectual, social, and emotional development.
          </p>
        </div>
      </div>

      {/* Teachers */}
      <h3 className="font-heading font-bold text-2xl md:text-3xl text-center mb-8 text-foreground">
        Why Choose Sanskriti? 🌈
      </h3>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: "🧠", title: "Play-Based Learning", desc: "Learning through fun activities that boost creativity and curiosity." },
          { icon: "👩‍🏫", title: "Experienced Teachers", desc: "Caring and qualified staff who nurture every child." },
          { icon: "🛡️", title: "Safe Environment", desc: "Secure campus with child-friendly infrastructure." },
          { icon: "🎨", title: "Creative Activities", desc: "Art, music, and play to develop overall skills." },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-3xl p-6 text-center shadow-sm hover-lift">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="font-heading font-bold text-lg text-foreground">{item.title}</h4>
            <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-card rounded-3xl p-6 text-center shadow-sm hover-lift"
            >
              <div className="flex justify-center mb-3">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
