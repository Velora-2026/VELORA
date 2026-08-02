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
    id: "the-first-bite",
    name: "The First Bite",
    shade: "Deep Berry Red",
    description:
      "A bold, irresistible berry-red gloss that delivers decadent colour and a mirror-like shine. Crafted in small batches for a comfortable, non-sticky finish.",
    price: 28.0,
    image: "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/36742e97e_generated_5dc03399.png",
  },
  {
    id: "bees-bless",
    name: "Bee's Bless",
    shade: "Warm Honey Gold",
    description:
      "Liquid gold in a tube. A warm honey-tinted gloss that catches the light with every smile — the everyday luxury your lips deserve.",
    price: 28.0,
    image: "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/b37f97959_generated_c219663a.png",
  },
  {
    id: "pearl-coconut",
    name: "Pearl Coconut",
    shade: "Pearl White Shimmer",
    description:
      "A luminous pearl shimmer with a whisper of coconut. Soft, ethereal, and effortlessly elegant for a radiant lit-from-within glow.",
    price: 28.0,
    image: "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/163caf23b_generated_1678c2e2.png",
  },
  {
    id: "toffee-apple",
    name: "Toffee Apple",
    shade: "Rich Toffee Caramel",
    description:
      "A rich toffee-caramel gloss with a glossy, cushiony finish. Warm, indulgent, and impossibly wearable from day to night.",
    price: 28.0,
    image: "https://media.base44.com/images/public/6a6eb0bb46509b7ba7336f44/9d0f5302b_generated_db628bec.png",
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