import React from "react";
import { Camera, Music2, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/veloraData";

const SOCIALS = [
  { icon: Camera, href: BRAND.instagram, label: "Instagram" },
  { icon: Music2, href: BRAND.tiktok, label: "TikTok" },
  { icon: Camera, href: BRAND.facebook, label: "Facebook" },
  { icon: MessageCircle, href: BRAND.whatsapp, label: "WhatsApp" },
];

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Privilege Card", href: "#privilege" },
  { label: "Packaging", href: "#packaging" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="md:text-left">
              <span className="block font-display text-2xl tracking-luxe text-gold-gradient leading-none">
                {BRAND.name}
              </span>
              <span className="block text-[0.6rem] tracking-luxe text-muted-foreground mt-1">
                {BRAND.tagline.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed max-w-xs md:mx-0 mx-auto">
              Premium handmade lip glosses crafted in small batches in Canada. Luxury shine,
              handmade with love.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h3 className="text-[0.65rem] tracking-luxe uppercase text-[#D4AF37] mb-5">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/70 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="text-center md:text-right">
            <h3 className="text-[0.65rem] tracking-luxe uppercase text-[#D4AF37] mb-5">
              Connect
            </h3>

            <p className="text-sm text-foreground/70">
              <a
                href={`mailto:${BRAND.email}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {BRAND.email}
              </a>
            </p>

            <div className="flex md:justify-end justify-center gap-3 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-400"
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-[0.7rem] text-muted-foreground tracking-wide-luxe">
            © {new Date().getFullYear()} {BRAND.name} {BRAND.tagline}. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-muted-foreground tracking-wide-luxe">
            Handmade in Canada · Crafted with love
          </p>
        </div>
      </div>
    </footer>
  );
}