import { ShieldCheck, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safe Environment",
    description: "Fully secured campus with CCTV, trained staff, and child-safe facilities.",
    bgClass: "bg-mint",
    textClass: "text-mint-foreground",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Experienced Teachers",
    description: "Dedicated educators with years of experience in early childhood development.",
    bgClass: "bg-peach",
    textClass: "text-peach-foreground",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Fun Learning",
    description: "Play-based curriculum that sparks imagination and builds foundational skills.",
    bgClass: "bg-sunny",
    textClass: "text-sunny-foreground",
  },
];

const HighlightsSection = () => (
  <section className="section-padding -mt-8 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {highlights.map((item, i) => (
        <div
          key={i}
          className={`${item.bgClass} rounded-3xl p-8 text-center hover-lift`}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 ${item.textClass} mb-4`}>
            {item.icon}
          </div>
          <h3 className={`font-heading font-bold text-xl mb-2 ${item.textClass}`}>
            {item.title}
          </h3>
          <p className={`font-body ${item.textClass} opacity-80`}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HighlightsSection;
