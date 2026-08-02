import React from "react";
import { motion } from "framer-motion";
import { Box, Crown, Layers, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PACKAGING_IMAGE } from "@/lib/veloraData";

const DETAILS = [
  { icon: Box, title: "Black Luxury Box", text: "Each gloss is nestled in a sleek matte black box." },
  { icon: Crown, title: "Gold Logo", text: "Embossed gold branding for an opulent first impression." },
  { icon: Layers, title: "Premium Tissue Paper", text: "Layered soft tissue to cradle every detail." },
  { icon: ShieldCheck, title: "Secure Protective Packaging", text: "Shipped safe, arriving flawless — every time." },
];

export default function Packaging() {
  return (
    <section id="packaging" className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-3 bg-[#D4AF37]/10 blur-2xl rounded-lg" />
            <div className="relative luxury-shadow rounded-lg overflow-hidden border border-[#D4AF37]/20">
              <Image
                src={PACKAGING_IMAGE}
                alt="VELORA luxury black packaging with gold accents"
                fittingType="fill"
                className="w-full aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">The Unboxing</p>
            <h2 className="font-display text-3xl sm:text-5xl text-white">
              A Memorable <span className="text-gold-gradient">Luxury Experience</span>
            </h2>
            <div className="gold-divider w-24 mt-6" />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Every VELORA order is presented like a gift — because it is one. From the moment your
              package arrives, the unboxing is designed to feel as indulgent as the gloss itself.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {DETAILS.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-5 border border-[#D4AF37]/15 rounded-sm hover:border-[#D4AF37]/40 transition-colors duration-400"
                >
                  <d.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                  <h3 className="font-display text-base text-white">{d.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}