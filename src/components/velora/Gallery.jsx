import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { GALLERY_IMAGES } from "@/lib/veloraData";
import { Camera } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">@velorabeauty</p>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            The <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-14">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm bg-black ${
                i === 0 ? "md:row-span-2 md:col-span-1 aspect-square md:aspect-auto" : "aspect-square"
              }`}
              aria-label="View on Instagram"
            >
              <Image
                src={src}
                alt={`VELORA Beauty gallery image ${i + 1}`}
                fittingType="fill"
                className="w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <Camera className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}