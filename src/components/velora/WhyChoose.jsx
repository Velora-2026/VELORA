import React from "react";
import { motion } from "framer-motion";
import {
  HandHeart,
  Leaf,
  Sparkles,
  Feather,
  Flame,
  PackageCheck,
  Truck,
} from "lucide-react";

const REASONS = [
  { icon: HandHeart, title: "Handmade in Canada", text: "Every gloss crafted by hand, locally." },
  { icon: Leaf, title: "Premium Ingredients", text: "Only the finest, carefully selected formulas." },
  { icon: Sparkles, title: "High Shine", text: "A mirror-like finish that catches every light." },
  { icon: Feather, title: "Comfortable Wear", text: "Lightweight, non-sticky, all-day comfort." },
  { icon: Flame, title: "Small Batch Production", text: "Made in limited batches for unmatched quality." },
  { icon: PackageCheck, title: "Luxury Packaging", text: "An unboxing experience worth remembering." },
  { icon: Truck, title: "Fast Canadian Shipping", text: "Delivered swiftly across Canada." },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">The VELORA Difference</p>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            Why Choose <span className="text-gold-gradient">VELORA</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 bg-card border border-[#D4AF37]/12 rounded-sm text-center hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mx-auto w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:gold-glow group-hover:border-[#D4AF37] transition-all duration-500">
                <r.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base text-white tracking-wide">{r.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}