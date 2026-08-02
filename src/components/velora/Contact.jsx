import React from "react";
import { motion } from "framer-motion";
import { Camera, Music2, MessageCircle, Mail, Phone } from "lucide-react";
import { BRAND } from "@/lib/veloraData";

const CONTACTS = [
  { icon: Camera, label: "Instagram", value: "@velorabeauty", href: BRAND.instagram },
  { icon: Music2, label: "TikTok", value: "@velorabeauty", href: BRAND.tiktok },
  { icon: Camera, label: "Facebook", value: "VELORA Beauty", href: BRAND.facebook },
  { icon: MessageCircle, label: "WhatsApp", value: BRAND.phone, href: BRAND.whatsapp },
  { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Phone, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phone.replace(/[^+\d]/g, "")}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#D4AF37]/40" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            Connect With <span className="text-gold-gradient">VELORA</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Questions, custom orders, or simply want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-14">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center gap-3 p-6 glass rounded-sm hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:gold-glow transition-all duration-500">
                <c.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[0.65rem] tracking-luxe uppercase text-muted-foreground">
                  {c.label}
                </p>
                <p className="text-sm text-white mt-1 break-all">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}