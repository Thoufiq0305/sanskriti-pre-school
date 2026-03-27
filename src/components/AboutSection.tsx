import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";

const teachers = [
  { name: "Ms. Sarah", role: "Lead Teacher", img: teacher1 },
  { name: "Mr. David", role: "Arts & Music", img: teacher2 },
  { name: "Ms. Emily", role: "Early Learning", img: teacher3 },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title text-foreground">
        About <span className="text-primary">Us</span> 🏫
      </h2>
      <p className="section-subtitle">
        Little Stars Kindergarten has been nurturing young minds since 2010, creating a vibrant community where children love to learn.
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
        Meet Our Teachers 👩‍🏫
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {teachers.map((t, i) => (
          <div key={i} className="bg-card rounded-3xl overflow-hidden shadow-sm hover-lift text-center">
            <img
              src={t.img}
              alt={t.name}
              loading="lazy"
              width={512}
              height={512}
              className="w-full aspect-square object-cover"
            />
            <div className="p-5">
              <h4 className="font-heading font-bold text-lg text-foreground">{t.name}</h4>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
