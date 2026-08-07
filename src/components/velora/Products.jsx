import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useCart } from "@/lib/cartContext";
import { PRODUCTS } from "@/lib/veloraData";

function ProductCard({ product, index }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card border border-[#D4AF37]/15 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/50 hover:gold-glow"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.shade}`}
          fittingType="fill"
          className="w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 text-[0.6rem] tracking-luxe uppercase text-[#D4AF37] glass px-3 py-1.5">
          {product.shade}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-xl text-white tracking-wide">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3 min-h-[3.9rem]">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="font-heading text-2xl text-gold-gradient">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[0.6rem] tracking-luxe uppercase text-muted-foreground">CAD</span>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center border border-[#D4AF37]/30 rounded-sm">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="p-2.5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              aria-label={`Decrease quantity of ${product.name}`}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center text-sm text-white tabular-nums">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="p-2.5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              aria-label={`Increase quantity of ${product.name}`}
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Add to bag */}
        <button
          onClick={() => {
            addItem(product, qty);
            setQty(1);
          }}
          className="btn-gold w-full mt-5 py-3.5 text-xs tracking-luxe uppercase font-medium rounded-sm"
        >
          Add to Luxury Bag
        </button>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <section id="collection" className="relative bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-luxe text-[#D4AF37] uppercase mb-4">The Collection</p>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            Signature <span className="text-gold-gradient">Shine</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 leading-relaxed">
            One signature creation, handcrafted in small batches with premium ingredients for luminous shine and a smooth, luxurious feel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}