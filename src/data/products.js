export const HERO_IMAGE = "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/583d35f41_generated_39c00082.jpg";

export const CATEGORIES = [
  "All",
  "Audio",
  "Wearables",
  "Computing",
  "Photography",
  "Accessories",
  "Footwear",
];

const IMG = {
  headphones: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/50028d610_generated_31027cc9.jpg",
  smartwatch: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/27917d1bf_generated_c7adcfbf.jpg",
  speaker: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/4887a7e20_generated_cc593be8.jpg",
  keyboard: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/9ec5f38fa_generated_dd0c54d4.jpg",
  mouse: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/6e82f9680_generated_83ce0f84.jpg",
  camera: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/277f55c6d_generated_3dd98eb5.jpg",
  smartphone: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/554c9e102_generated_42964dc6.jpg",
  laptop: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/d1dd3040b_generated_0f67be39.jpg",
  sunglasses: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/cd89fc6ad_generated_a4b8ed48.jpg",
  sneakers: "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/ad46853f8_generated_d2cec843.jpg",
};

export const PRODUCTS = [
  {
    id: "aurora-headphones",
    name: "Aurora Wireless Headphones",
    category: "Audio",
    price: 289,
    rating: 4.8,
    reviews: 1284,
    stock: 12,
    image: IMG.headphones,
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
    image: IMG.smartwatch,
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
    image: IMG.speaker,
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
    image: IMG.keyboard,
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
    image: IMG.mouse,
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
    image: IMG.camera,
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
    image: IMG.smartphone,
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
    image: IMG.laptop,
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
    image: IMG.sunglasses,
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
    image: IMG.sneakers,
    featured: true,
    description:
      "Responsive foam cushioning and a breathable knit upper make every stride effortless, from the track to the street.",
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);