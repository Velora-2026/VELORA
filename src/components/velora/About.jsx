import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#D4AF37]/40" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-6"
        >
          Our Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.2] italic"
        >
          Crafted by hand.
          <br />
          <span className="text-gold-gradient not-italic font-display">Defined by detail.</span>
        </motion.h2>

        <div className="gold-divider w-24 mx-auto mt-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
        >
          <p>
            VELORA Beauty was born from a simple belief: that luxury lives in the details. Every lip
            gloss is handmade in Canada, in small batches, with an obsession for quality, comfort,
            and elegance that machine-made cosmetics simply cannot replicate.
          </p>
          <p>
            From the first pour to the final gold-embossed box, each step is intentional. We select
            premium ingredients, refine every shade by hand, and package each piece as a gift —
            because the ritual of beauty should feel as luxurious as the result.
          </p>
          <p className="font-heading text-xl text-white/90 italic">
            This is not mass beauty. This is VELORA — handmade with love, for those who appreciate
            the difference.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#collection"
          className="btn-gold inline-block px-9 py-4 text-xs tracking-luxe uppercase font-medium rounded-sm mt-10"
        >
          Discover the Collection
        </motion.a>
      </div>
    </section>
  );
}