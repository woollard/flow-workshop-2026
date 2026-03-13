import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Abstract", href: "#abstract" },
  { label: "Speakers", href: "#speakers" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Challenge", href: "#challenge" },
  { label: "Dates", href: "#dates" },
  { label: "Organizers", href: "#organizers" },
];

const WorkshopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className={`font-display font-bold text-lg tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          FLOW Workshop
        </a>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default WorkshopNav;
