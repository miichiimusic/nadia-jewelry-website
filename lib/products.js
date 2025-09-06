// Shared product data - single source of truth for all products
export const products = [
  {
    id: 1,
    slug: "dual-wave-stackable-ring",
    name: "Dual Wave Stackable Ring",
    fullName: "Dual Wave Stackable Ring in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g001.jpg",
    height: "tall",
    price: 2800,
    description: "Two fluid gold bands embrace a brilliant round lab-grown diamond in a modern, minimalist design. Perfect for stacking or wearing alone.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F"
    },
    features: ["Stackable Design", "Lab-Grown Diamond", "Adjustable Size", "Modern Minimalist"]
  },
  {
    id: 2,
    slug: "rose-gold-pendant-necklace",
    name: "Rose Gold Pendant Necklace",
    fullName: "Rose Gold Pendant Necklace in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g002.jpg",
    height: "medium",
    price: 3200,
    description: "A delicate rose gold pendant featuring a stunning lab-grown diamond, suspended from an elegant chain.",
    specs: {
      material: "14K Rose Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      chainLength: "18 inches"
    },
    features: ["Rose Gold Finish", "Lab-Grown Diamond", "Adjustable Chain", "Elegant Design"]
  },
  {
    id: 3,
    slug: "minimalist-gold-chain",
    name: "Minimalist Gold Chain",
    fullName: "Minimalist Gold Chain in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g003.jpg",
    height: "short",
    price: 1800,
    description: "A sleek and modern gold chain with a subtle diamond accent, perfect for everyday wear.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      chainLength: "16 inches"
    },
    features: ["Minimalist Design", "Lab-Grown Diamond", "Everyday Wear", "Modern Style"]
  },
  {
    id: 4,
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    fullName: "Diamond Stud Earrings in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g004.jpg",
    height: "tall",
    price: 2400,
    description: "Classic diamond stud earrings with a contemporary twist, featuring lab-grown diamonds in elegant gold settings.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond (1 carat each)",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      backing: "Push Back"
    },
    features: ["Classic Design", "Lab-Grown Diamond", "Secure Setting", "Timeless Style"]
  },
  {
    id: 5,
    slug: "gold-hoop-earrings",
    name: "Gold Hoop Earrings",
    fullName: "Gold Hoop Earrings in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g005.jpg",
    height: "medium",
    price: 2200,
    description: "Elegant gold hoops with diamond accents, combining classic hoop style with modern diamond technology.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      diameter: "1.5 inches"
    },
    features: ["Hoop Design", "Lab-Grown Diamond", "Classic Style", "Versatile Wear"]
  },
  {
    id: 6,
    slug: "pearl-drop-necklace",
    name: "Pearl Drop Necklace",
    fullName: "Pearl Drop Necklace in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g006.jpg",
    height: "short",
    price: 2600,
    description: "A sophisticated pearl and diamond combination, featuring a natural pearl with diamond accents.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond + Natural Pearl",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      chainLength: "18 inches"
    },
    features: ["Pearl & Diamond", "Natural Pearl", "Elegant Design", "Sophisticated Style"]
  },
  {
    id: 7,
    slug: "stackable-gold-bands",
    name: "Stackable Gold Bands",
    fullName: "Stackable Gold Bands in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g007.jpg",
    height: "tall",
    price: 3000,
    description: "Multiple thin gold bands designed to be worn together, each featuring small diamond accents.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond (distributed across bands)",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      size: "Adjustable (6-8)"
    },
    features: ["Stackable Design", "Multiple Bands", "Lab-Grown Diamond", "Versatile Styling"]
  },
  {
    id: 8,
    slug: "gold-chain-bracelet",
    name: "Gold Chain Bracelet",
    fullName: "Gold Chain Bracelet in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g008.jpg",
    height: "medium",
    price: 2000,
    description: "A delicate gold chain bracelet with a diamond charm, perfect for layering or wearing alone.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      length: "7.5 inches"
    },
    features: ["Chain Design", "Lab-Grown Diamond", "Adjustable Length", "Layering Friendly"]
  },
  {
    id: 9,
    slug: "minimalist-gold-ring",
    name: "Minimalist Gold Ring",
    fullName: "Minimalist Gold Ring in 14K Gold with a 2 Carat Lab-Grown Diamond",
    image: "/g009.jpg",
    height: "short",
    price: 3400,
    description: "A clean, modern ring design featuring a prominent lab-grown diamond in a minimalist setting.",
    specs: {
      material: "14K Gold",
      stone: "2 Carat Lab-Grown Diamond",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      size: "Adjustable (6-8)"
    },
    features: ["Minimalist Setting", "Lab-Grown Diamond", "Modern Design", "Statement Piece"]
  },
  {
    id: 10,
    slug: "eternity-diamond-ring",
    name: "Eternity Diamond Ring",
    fullName: "Eternity Diamond Ring in 14K White Gold with 3 Carat Lab-Grown Diamonds",
    image: "/g001.jpg", // Using existing image for now
    height: "tall",
    price: 4200,
    description: "A stunning eternity ring featuring a continuous band of brilliant lab-grown diamonds, symbolizing everlasting love and commitment.",
    specs: {
      material: "14K White Gold",
      stone: "3 Carat Lab-Grown Diamonds",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      size: "Adjustable (6-8)"
    },
    features: ["Eternity Design", "Lab-Grown Diamonds", "White Gold Setting", "Symbolic Meaning"]
  },
  {
    id: 11,
    slug: "eternity-diamond-ring-2",
    name: "Eternity Diamond Ring 2",
    fullName: "Eternity Diamond Ring 2 in 14K White Gold with 3 Carat Lab-Grown Diamonds",
    image: "/g002.jpg", // Using existing image for now
    height: "tall",
    price: 4200,
    description: "A stunning eternity ring featuring a continuous band of brilliant lab-grown diamonds, symbolizing everlasting love and commitment.",
    specs: {
      material: "14K White Gold",
      stone: "3 Carat Lab-Grown Diamonds",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      size: "Adjustable (6-8)"
    },
    features: ["Eternity Design", "Lab-Grown Diamonds", "White Gold Setting", "Symbolic Meaning"]
  },
  {
    id: 12,
    slug: "eternity-diamond-ring-3",
    name: "Eternity Diamond Ring 3",
    fullName: "Eternity Diamond Ring 2 in 14K White Gold with 3 Carat Lab-Grown Diamonds",
    image: "/g010.jpg", // Using existing image for now
    height: "tall",
    price: 4200,
    description: "A stunning eternity ring featuring a continuous band of brilliant lab-grown diamonds, symbolizing everlasting love and commitment.",
    specs: {
      material: "14K White Gold",
      stone: "3 Carat Lab-Grown Diamonds",
      cut: "Round Brilliant",
      clarity: "VS1",
      color: "F",
      size: "Adjustable (6-8)"
    },
    features: ["Eternity Design", "Lab-Grown Diamonds", "White Gold Setting", "Symbolic Meaning"]
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}

// Helper function to get all products
export function getAllProducts() {
  return products;
}
