import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { HERO_IMAGE } from "@/lib/veloraData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="VELORA luxury handmade lip gloss"
          fittingType="fill"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 right-12 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-[#D4AF37]/5 blur-3xl animate-float hidden md:block" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xs sm:text-sm tracking-luxe text-[#D4AF37] uppercase mb-6"
        >
          Handmade in Canada
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] max-w-3xl text-white"
        >
          Luxury Shine.
          <br />
          <span className="text-gold-gradient">Handmade With Love.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-heading text-xl sm:text-2xl text-white/70 mt-7 max-w-xl leading-relaxed"
        >
          Premium handmade lip glosses crafted in small batches in Canada.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#collection"
            className="btn-gold px-9 py-4 text-xs tracking-luxe uppercase font-medium rounded-sm text-center"
          >
            Discover Collection
          </a>
          <a
            href="#about"
            className="btn-outline-gold px-9 py-4 text-xs tracking-luxe uppercase font-medium rounded-sm text-center"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[0.6rem] tracking-luxe text-white/50 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
}