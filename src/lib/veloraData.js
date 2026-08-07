// VELORA Beauty — central configuration & product catalogue.
// 🔧 Replace image URLs, prices, and contact details here to update the whole site.

export const BRAND = {
  name: "VELORA",
  tagline: "Beauty",

  // 🔐 Enter your WhatsApp number yourself.
  // Digits only, including your country code.
  whatsappNumber: "+13659969844",

  email: "velora.beauty2026@gmail.com",

  instagram: "https://instagram.com/velora.beauty.2026",
  tiktok: "https://tiktok.com/@velora_beauty_2026",
  facebook: "https://www.facebook.com/share/18ShrsHazX/?mibextid=wwXIfr",

  whatsapp: "https://wa.me/+13659969844",
};

export const PRODUCTS = [
  {
    id: "gold-flamingo",
    name: "Gold Flamingo",
    shade: "Golden Peach",
    description:
      "A luminous golden-peach gloss that melts effortlessly onto the lips, delivering a soft wash of warm colour and a glass-like shine. Lightweight, smooth, and irresistibly radiant, Gold Flamingo is your everyday touch of golden luxury.",
    price: 12.0,
    image: "/images/gold-flamingo.png",
  },
];

export const HERO_IMAGE = "/images/hero.png";
export const PACKAGING_IMAGE = "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/4ca41c2cb_generated_76cbc6a8.png";
export const PRIVILEGE_IMAGE = "/images/privilege-card.png";

// Gallery reuses product + packaging imagery for a cohesive Instagram-style feed.
export const GALLERY_IMAGES = [
  PRODUCTS[0].image,
  PACKAGING_IMAGE,
  HERO_IMAGE,
];