import React from "react";
import { motion } from "framer-motion";
import { Gift, Star, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PRIVILEGE_IMAGE } from "@/lib/veloraData";

const STEPS = [
  { icon: Gift, label: "One sticker", note: "Earned with every lip gloss purchased" },
  { icon: Star, label: "Collect 6 stickers", note: "Fill your card one shine at a time" },
  { icon: Sparkles, label: "1 free lip gloss", note: "Your reward, on us — our gift to you" },
];

export default function PrivilegeCard() {
  return (
    <section id="privilege" className="relative bg-gradient-to-b from-black to-[#0A0A0A] py-24 sm:py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">A Gift With Every First Order</p>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            The VELORA <span className="text-gold-gradient">Privilege Card</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Every customer automatically receives a complimentary VELORA Privilege Card with their
            first order. This is not a membership — simply our way of saying thank you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          {/* Card illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-2xl rounded-lg" />
              <div className="relative luxury-shadow rounded-lg overflow-hidden border border-[#D4AF37]/40 animate-pulse-gold">
                <Image
                  src={PRIVILEGE_IMAGE}
                  alt="VELORA Privilege Card with gold ornament design"
                  fittingType="fill"
                  className="w-full aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-5 p-6 glass rounded-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[#D4AF37] text-sm">{`0${i + 1}`}</span>
                    <h3 className="font-display text-lg text-white tracking-wide">{s.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{s.note}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center pt-2"
            >
              <a
                href="#collection"
                className="btn-outline-gold inline-block px-9 py-3.5 text-xs tracking-luxe uppercase font-medium rounded-sm"
              >
                Start Your Collection
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}