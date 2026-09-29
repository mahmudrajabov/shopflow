export const HERO_IMAGE = "/__generating__/e6af5ba2-8114-42ec-ba9d-60f403857e5c.png";

export const CATEGORIES = [
  "All",
  "Audio",
  "Wearables",
  "Computing",
  "Photography",
  "Accessories",
  "Footwear",
];

export const PRODUCTS = [
  {
    id: "aurora-headphones",
    name: "Aurora Wireless Headphones",
    category: "Audio",
    price: 289,
    rating: 4.8,
    reviews: 1284,
    stock: 12,
    image: "/__generating__/c2259c03-b01d-43b3-9a26-588888e6e235.png",
    featured: true,
    description:
      "Immerse yourself in studio-grade sound with adaptive noise cancellation, 40-hour battery life, and memory-foam ear cushions engineered for all-day comfort.",
  },
  {
    id: "pulse-smartwatch",
    name: "Pulse Smartwatch",
    category: "Wearables",
    price: 199,
    rating: 4.6,
    reviews: 842,
    stock: 8,
    image: "/__generating__/148bd34e-ac0d-4e84-bbb8-fd0ffd671b3a.png",
    featured: true,
    description:
      "A precision health companion with AMOLED display, GPS tracking, and 7-day battery life wrapped in a featherlight aerospace aluminum body.",
  },
  {
    id: "echo-speaker",
    name: "Echo Bluetooth Speaker",
    category: "Audio",
    price: 129,
    rating: 4.4,
    reviews: 521,
    stock: 3,
    image: "/__generating__/ca544bea-8d89-4864-ae2c-f46e0dd70f5a.png",
    featured: false,
    description:
      "Room-filling 360° sound with deep bass radiators, waterproof design, and 24 hours of playback on a single charge.",
  },
  {
    id: "tactile-keyboard",
    name: "Tactile Mechanical Keyboard",
    category: "Computing",
    price: 149,
    rating: 4.7,
    reviews: 967,
    stock: 0,
    image: "/__generating__/d8bdd953-1a9d-4835-a8af-68a5e3fbdcbe.png",
    featured: true,
    description:
      "Hot-swappable switches, per-key RGB, and a CNC-milled aluminum frame deliver a satisfying, durable typing experience.",
  },
  {
    id: "glide-mouse",
    name: "Glide Wireless Mouse",
    category: "Computing",
    price: 59,
    rating: 4.5,
    reviews: 433,
    stock: 25,
    image: "/__generating__/af28a07e-fa2f-4ee6-9324-a2c014864be0.png",
    featured: false,
    description:
      "Featherlight ergonomic design with a 26,000 DPI sensor, 70-hour battery, and silent clicks for distraction-free work.",
  },
  {
    id: "lumen-camera",
    name: "Lumen Mirrorless Camera",
    category: "Photography",
    price: 1299,
    rating: 4.9,
    reviews: 318,
    stock: 5,
    image: "/__generating__/801093c4-e4bc-4f66-96d2-f2a4ca3265b4.png",
    featured: true,
    description:
      "A 33MP full-frame sensor, 8K video, and in-body stabilization capture every detail with breathtaking clarity and dynamic range.",
  },
  {
    id: "nova-smartphone",
    name: "Nova Smartphone",
    category: "Wearables",
    price: 899,
    rating: 4.7,
    reviews: 1502,
    stock: 15,
    image: "/__generating__/1d539206-e14c-4955-8bef-3e6b830de64e.png",
    featured: false,
    description:
      "A 6.7-inch LTPO display, triple-camera system, and a pro-grade chip redefine what a pocket-sized device can do.",
  },
  {
    id: "zenith-ultrabook",
    name: "Zenith Ultrabook",
    category: "Computing",
    price: 1499,
    rating: 4.8,
    reviews: 276,
    stock: 4,
    image: "/__generating__/b0761ba5-2b5c-4f4b-b9b1-07d4f7c4ad3e.png",
    featured: true,
    description:
      "A 14-inch OLED display, 18-hour battery, and a fanless design make this the ultimate ultraportable for creators on the move.",
  },
  {
    id: "halo-sunglasses",
    name: "Halo Sunglasses",
    category: "Accessories",
    price: 89,
    rating: 4.3,
    reviews: 189,
    stock: 0,
    image: "/__generating__/b75b189d-839a-46cd-9596-c77d8b8bce93.png",
    featured: false,
    description:
      "Polarized cobalt lenses with a featherweight frame deliver UV400 protection and a look that turns heads.",
  },
  {
    id: "drift-sneakers",
    name: "Drift Sneakers",
    category: "Footwear",
    price: 119,
    rating: 4.5,
    reviews: 644,
    stock: 18,
    image: "/__generating__/338ea289-dd90-4d9a-be1b-3c39fef91052.png",
    featured: true,
    description:
      "Responsive foam cushioning and a breathable knit upper make every stride effortless, from the track to the street.",
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);