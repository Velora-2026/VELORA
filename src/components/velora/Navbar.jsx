import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { BRAND } from "@/lib/veloraData";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Privilege", href: "#privilege" },
  { label: "Packaging", href: "#packaging" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { count, openBag } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group" aria-label="VELORA Beauty home">
          <span className="block font-display text-xl sm:text-2xl tracking-luxe text-gold-gradient leading-none">
            {BRAND.name}
          </span>
          <span className="block text-[0.6rem] tracking-luxe text-muted-foreground mt-0.5">
            {BRAND.tagline.toUpperCase()}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-wide-luxe uppercase text-foreground/80 hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Bag */}
          <button
            onClick={openBag}
            className="relative p-2 text-foreground hover:text-[#D4AF37] transition-colors duration-300"
            aria-label="Open shopping bag"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full btn-gold text-[0.6rem] font-medium flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass-strong px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-wide-luxe uppercase text-foreground/80 hover:text-[#D4AF37] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}