import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import brandLogo from "@/assets/brandLogo.png";

//  Base links (static)
const baseLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user, loading } = useAuth();
  if (loading) return null;
  //  Logged in or not
  const isAdmin = !!user;

  //  Dynamic nav links
  const navLinks = isAdmin
    ? [...baseLinks, { label: "Applications", href: "/applications" }]
    : baseLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          {/* <span className="text-2xl">🌈</span>
          <span className="font-heading font-extrabold text-xl md:text-2xl text-foreground">
            Sanskriti Kindergarten
          </span> */}
          <img
            src={brandLogo}
            alt="Sanskriti Kindergarten Logo"
            className="h-[75px] object-cover w-[190px]"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 px-4 py-3 md:py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Apply Button */}
          <a
            href="#admissions"
            className="ml-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-muted"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-muted-foreground border-b last:border-0"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#admissions"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-bold"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;