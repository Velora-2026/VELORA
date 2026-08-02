// VELORA Beauty — central configuration & product catalogue.
// 🔧 Replace image URLs, prices, and contact details here to update the whole site.

export const BRAND = {
  name: "VELORA",
  tagline: "Beauty",
  whatsappNumber: "15551234567", // WhatsApp Business number (digits only, country code). Replace with your own.
  email: "hello@velorabeauty.ca",
  phone: "+1 (555) 123-4567",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  facebook: "https://facebook.com",
  whatsapp: "https://wa.me/15551234567",
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

export const HERO_IMAGE = "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/8f7ad192e_generated_644a1812.png";
export const PACKAGING_IMAGE = "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/4ca41c2cb_generated_76cbc6a8.png";
export const PRIVILEGE_IMAGE = "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/a4e4d1853_generated_987eb8f7.png";

// Gallery reuses product + packaging imagery for a cohesive Instagram-style feed.
export const GALLERY_IMAGES = [
  PRODUCTS[0].image,
  PRODUCTS[3].image,
  PACKAGING_IMAGE,
  PRODUCTS[1].image,
  PRODUCTS[2].image,
  HERO_IMAGE,
];