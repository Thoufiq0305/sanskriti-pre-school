import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Happy children learning and playing"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <span className="inline-block animate-bounce-gentle text-5xl md:text-6xl mb-4">
          🌟
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 drop-shadow-lg">
          Welcome to{" "}
          <span className="text-accent">Little Stars</span>{" "}
          Kindergarten
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 font-body drop-shadow">
          Where every child shines bright! A nurturing space for curiosity,
          creativity, and joyful learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#admissions"
            className="px-8 py-4 rounded-3xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Apply Now ✨
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-3xl bg-card/80 backdrop-blur text-foreground font-bold text-lg hover:bg-card transition-all hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
