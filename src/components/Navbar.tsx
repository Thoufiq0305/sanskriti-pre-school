import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import brandLogo from "@/assets/brandLogo.png";

// Smart nav: each link has an anchor (used on home) and a route (used elsewhere)
const baseLinks = [
  { label: "Home", anchor: "#home", route: "/" },
  { label: "About", anchor: "#about", route: "/about" },
  { label: "Gallery", anchor: "#gallery", route: "/gallery" },
  { label: "Admissions", anchor: "#admissions", route: "/admissions" },
  { label: "Testimonials", anchor: "#testimonials", route: "/testimonials" },
  { label: "FAQ", anchor: "#faq", route: "/faq" },
  { label: "Contact", anchor: "#contact", route: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const { user, loading } = useAuth();
  if (loading) return null;
  const isAdmin = !!user;

  const navLinks = isAdmin
    ? [...baseLinks, { label: "Applications", anchor: "/applications", route: "/applications" }]
    : baseLinks;

  const hrefFor = (link: { anchor: string; route: string }) =>
    isHome ? link.anchor : link.route;

  const handleApplyClick = (e: React.MouseEvent) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/admissions");
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Sanskriti Kindergarten home">
          <img
            src={brandLogo}
            alt="Sanskriti Kindergarten Chennai logo"
            className="h-[75px] object-cover w-[190px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 px-4 py-3 md:py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={hrefFor(link)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href={isHome ? "#admissions" : "/admissions"}
            onClick={handleApplyClick}
            className="ml-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={hrefFor(link)}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-muted-foreground border-b last:border-0"
            >
              {link.label}
            </a>
          ))}

          <a
            href={isHome ? "#admissions" : "/admissions"}
            onClick={handleApplyClick}
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
