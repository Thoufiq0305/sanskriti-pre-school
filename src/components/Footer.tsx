const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl">🌈</span>
        <span className="font-heading font-extrabold text-xl">Little Stars Kindergarten</span>
      </div>
      <p className="font-body text-primary-foreground/70 text-sm mb-6 max-w-md mx-auto">
        Nurturing young minds with love, care, and joyful learning since 2010.
      </p>
      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        {["Home", "About", "Gallery", "Admissions", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Little Stars Kindergarten. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
