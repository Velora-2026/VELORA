import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Reviews() {
  return (
    <section className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center"
      >
        <Quote className="w-10 h-10 text-[#D4AF37]/40 mx-auto mb-8" strokeWidth={1} />

        <p className="font-heading text-2xl sm:text-4xl text-white italic leading-[1.4]">
          "Our story is just beginning. Be among our first Canadian customers. Your review could
          become part of the{" "}
          <span className="text-gold-gradient not-italic font-display">VELORA journey</span>."
        </p>

        <div className="gold-divider w-24 mx-auto mt-10" />

        <div className="flex items-center justify-center gap-1 mt-8">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#D4AF37] text-lg">
              ✦
            </span>
          ))}
        </div>
        <p className="text-xs tracking-luxe uppercase text-muted-foreground mt-4">
          VELORA Beauty · Canada
        </p>
      </motion.div>
    </section>
  );
}