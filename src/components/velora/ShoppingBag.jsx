import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { Image } from "@/components/ui/image";
import { BRAND } from "@/lib/veloraData";

export default function ShoppingBag() {
  const { items, isOpen, closeBag, updateQty, removeItem, subtotal, clear } = useCart();

  const completeOrder = () => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (i) =>
          `• ${i.name} ×${i.qty} — $${(i.price * i.qty).toFixed(2)} CAD`
      )
      .join("\n");
    const message =
      `Hello ${BRAND.name} ${BRAND.tagline}! ✨\nI'd like to place an order:\n\n` +
      `${lines}\n\n` +
      `Total: $${subtotal.toFixed(2)} CAD\n\nThank you!`;
    const url = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeBag}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] glass-strong flex flex-col"
            role="dialog"
            aria-label="Shopping bag"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-[#D4AF37]/15">
              <div>
                <h2 className="font-display text-xl text-white tracking-wide">Luxury Bag</h2>
                <p className="text-[0.65rem] tracking-luxe uppercase text-[#D4AF37] mt-1">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={closeBag}
                className="p-2 text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="Close shopping bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <p className="font-heading text-2xl text-white">Your bag awaits</p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Discover our handcrafted shades and add a touch of luxury to your collection.
                  </p>
                  <button
                    onClick={closeBag}
                    className="btn-outline-gold px-7 py-3 text-xs tracking-luxe uppercase rounded-sm mt-2"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4 pb-5 border-b border-white/5">
                      <div className="w-20 h-24 flex-shrink-0 bg-black rounded-sm overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fittingType="fill"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h3 className="font-display text-base text-white truncate">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-white/40 hover:text-[#D4AF37] transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[0.65rem] tracking-luxe uppercase text-muted-foreground mt-0.5">
                          {item.shade}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#D4AF37]/30 rounded-sm">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="p-1.5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                              aria-label={`Decrease ${item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm text-white tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="p-1.5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-heading text-lg text-gold-gradient">
                            ${(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-[#D4AF37]/15 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-luxe uppercase text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-gold-gradient">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[0.65rem] text-muted-foreground leading-relaxed">
                  Orders are completed via WhatsApp. No online payment — pay on your terms.
                </p>
                <button
                  onClick={completeOrder}
                  className="btn-gold w-full py-4 text-xs tracking-luxe uppercase font-medium rounded-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  Complete Order
                </button>
                <button
                  onClick={clear}
                  className="w-full text-[0.65rem] tracking-luxe uppercase text-white/40 hover:text-[#D4AF37] transition-colors py-1"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}