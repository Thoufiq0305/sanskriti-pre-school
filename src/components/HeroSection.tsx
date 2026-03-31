import { useState, useEffect, useCallback } from "react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";

const slides = [
  {
    image: heroBg1,
    emoji: "🌟",
    title: (
      <>
        Welcome to <span className="text-accent">Sanskriti</span> Kindergarten
      </>
    ),
    subtitle:
      "Where every child shines bright! A nurturing space for curiosity, creativity, and joyful learning.",
  },
  {
    image: heroBg2,
    emoji: "🎨",
    title: (
      <>
        Learn, Play & <span className="text-accent">Grow</span> Together
      </>
    ),
    subtitle:
      "Hands-on activities that spark imagination and build confidence in every little learner.",
  },
  {
    image: heroBg3,
    emoji: "📚",
    title: (
      <>
        A Place Where <span className="text-accent">Dreams</span> Begin
      </>
    ),
    subtitle:
      "Experienced teachers, a safe environment, and a curriculum designed to inspire young minds.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={`Slide ${i + 1}`}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/80 pointer-events-none" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <span
          key={`emoji-${current}`}
          className="inline-block animate-bounce-gentle text-5xl md:text-6xl mb-4"
        >
          {slides[current].emoji}
        </span>

        <h1
          key={`title-${current}`}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 drop-shadow-lg animate-fade-in"
        >
          {slides[current].title}
        </h1>

        <p
          key={`sub-${current}`}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 font-body drop-shadow animate-fade-in"
        >
          {slides[current].subtitle}
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

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary scale-125 w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
            />
          ))}
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