/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║               AYURPURE — WEBSITE CONFIG FILE                ║
 * ║  Edit anything here and it will reflect on the website.     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const SITE_CONFIG = {

  /* ─────────────────────────────────────────
     1. BRAND & IDENTITY
  ───────────────────────────────────────── */
  brand: {
    name: "Ayush",            // Main brand name (first part)
    nameAccent: "Yadav",          // The accented part of the name (colored differently)
    tagline: "Ancient Wellness, Modern Living",   // Browser tab subtitle
    description: "Curated Ayurvedic wellness — recommended by a certified practitioner, rooted in ancient science.", // Footer description
    affiliateDisclosure: "* This website contains affiliate links. When you purchase through our links, we may earn a small commission at no extra cost to you. All products are independently selected and recommended based on genuine belief in their quality and effectiveness. This does not constitute medical advice — please consult a healthcare professional before starting any supplement.",
    copyrightYear: new Date().getFullYear().toString(),
  },

  /* ─────────────────────────────────────────
     2. THEME & COLORS
     Change hex values to restyle the whole site
  ───────────────────────────────────────── */
  theme: {
    white:      "#FAFAF8",
    offWhite:   "#F3F1EC",
    cream:      "#EDE9E0",
    sage:       "#7A9E7E",
    sageLight:  "#A8C5AB",
    sageDark:   "#4E7253",   // Primary brand color (buttons, accents)
    bark:       "#5C4A3A",   // Hover/secondary color
    barkLight:  "#8A7060",
    text:       "#1C1C1A",
    textMuted:  "#6B6560",
    gold:       "#B89A5E",
    goldLight:  "#D4B98A",
    border:     "#E2DDD5",
  },

  /* ─────────────────────────────────────────
     3. NAVIGATION
  ───────────────────────────────────────── */
  nav: {
    links: [
      { label: "Products",     href: "#products" },
      { label: "About",        href: "#about" },
      { label: "FAQ",          href: "#faq" },
      { label: "Dr. Vaidya",   href: "#practitioner" },
      { label: "Contact",      href: "#contact" },
    ],
    ctaLabel: "Shop Now",
    ctaHref:  "#products",
  },

  /* ─────────────────────────────────────────
     4. HERO SECTION
  ───────────────────────────────────────── */
  hero: {
    eyebrow:     "Rooted in 5,000 Years of Wisdom",
    titleLine1:  "Healing You",
    titleLine2:  "Can Feel,",    // This line is italicised & accented
    titleLine3:  "Naturally.",
    description: "Curated Ayurvedic formulations by Dr. Ananya Vaidya — blending ancient herbal science with modern wellness for your mind, body, and skin.",
    primaryBtn:  { label: "Explore Products", href: "#products" },
    secondaryBtn:{ label: "Meet the Practitioner", href: "#practitioner" },
    stats: [
      { number: "40+",  label: "Curated Products" },
      { number: "5K+",  label: "Happy Clients"    },
      { number: "100%", label: "Natural Ingredients" },
    ],
    // Mini preview cards shown in the hero illustration
    previewCards: [
      { icon: "🌿", image: "", label: "Featured Pick",  name: "Ashwagandha Gold Complex", featured: true },
      { icon: "🫚", image: "", label: "Oils & Serums",  name: "Brahmi Hair Oil" },
      { icon: "🍵", image: "", label: "Teas & Kadha",   name: "Tulsi Kadha" },
    ],
  },

  /* ─────────────────────────────────────────
     5. MARQUEE (scrolling ingredient strip)
  ───────────────────────────────────────── */
  marquee: {
    items: [
      "Ashwagandha", "Triphala", "Turmeric", "Brahmi",
      "Shatavari", "Neem", "Amla", "Guduchi",
      "Tulsi", "Moringa", "Shankhpushpi", "Haritaki",
    ],
  },

  /* ─────────────────────────────────────────
     6. ABOUT / WHY US SECTION
  ───────────────────────────────────────── */
  about: {
    tag:        "Why AyurPure",
    titleLine1: "Wellness Backed by",
    titleLine2: "Ancient Science",   // Italicised & accented
    body:       "Every product recommended on this platform is personally vetted by Dr. Ananya Vaidya — an BAMS-certified Ayurvedic physician with over 12 years of clinical practice. We believe that the best healing comes from nature, formulated with precision and care.",
    features: [
      {
        icon:  "🌱",
        title: "100% Natural",
        desc:  "Zero synthetic additives. Pure herbs, cold-pressed oils, and traditional formulations.",
      },
      {
        icon:  "🏥",
        title: "Doctor Vetted",
        desc:  "Each recommendation is reviewed by a certified Ayurvedic practitioner.",
      },
      {
        icon:  "🧪",
        title: "Lab Tested",
        desc:  "Third-party tested for purity, potency, and safety before we recommend it.",
      },
      {
        icon:  "🤝",
        title: "Trusted Brands",
        desc:  "Partnered only with brands that maintain the highest Ayurvedic standards.",
      },
    ],
  },

  /* ─────────────────────────────────────────
     7. PRODUCTS SECTION
     badge options: "popular" | "new" | "organic" | ""
     category options: "herbs" | "oils" | "teas" | "skin"
     bgClass options: "bg-herbs" | "bg-oils" | "bg-teas" | "bg-skin"
  ───────────────────────────────────────── */
  productsSection: {
    tag:      "Our Recommendations",
    title:    "Curated",
    titleAccent: "Ayurvedic",
    titleEnd: "Products",
    subtitle: "Explore our personally curated selection of the finest Ayurvedic formulations — each linked to a trusted seller for your convenience.",
    filters: [
      { label: "All Products",        value: "all"   },
      { label: "Herbal Supplements",  value: "herbs" },
      { label: "Oils & Serums",       value: "oils"  },
      { label: "Teas & Kadha",        value: "teas"  },
      { label: "Skincare & Beauty",   value: "skin"  },
    ],
  },

  /* ─────────────────────────────────────────
      8. PRODUCTS LIST
      Add, remove, or edit products here.
      Replace affiliateLink with your real URL.
      Add image path for product images (leave empty to use icon emoji)
   ───────────────────────────────────────── */
  products: [
    {
      category:     "herbs",
      bgClass:      "bg-herbs",
      icon:         "🌿",
      image:        "",
      badge:        "popular",
      name:         "Ashwagandha Gold",
      shortDesc:    "KSM-66 extract for stress & energy",
      description:  "A potent KSM-66® Ashwagandha extract standardised to 5% withanolides. Supports stress relief, energy levels, and hormonal balance. Made with premium root extract for maximum potency.",
      benefits:     ["Stress Relief", "Energy", "Hormonal Balance"],
      price:        "₹699",
      unit:         "60 caps",
      affiliateLink:"#",
    },
    {
      category:     "herbs",
      bgClass:      "bg-herbs",
      icon:         "🌿",
      image:        "",
      badge:        "popular",
      name:         "KJ Complex",
      shortDesc:    "Stress relief & energy support",
      description:  "A powerful blend that Supports stress relief, energy, and hormonal balance. Formulated with premium herbs for optimal results.",
      benefits:     ["Stress Relief", "Energy", "Hormonal Balance"],
      price:        "₹400",
      unit:         "10 caps",
      affiliateLink:"#",
    },
    {
      category:     "herbs",
      bgClass:      "bg-herbs",
      icon:         "🍃",
      image:        "",
      badge:        "",
      name:         "Triphala",
      shortDesc:    "Gentle daily detox & digestion",
      description:  "The classic tridoshic formula — a balanced blend of Amalaki, Bibhitaki, and Haritaki for gentle daily detox and digestive health.",
      benefits:     ["Digestion", "Detox", "Immunity"],
      price:        "₹449",
      unit:         "90 caps",
      affiliateLink:"#",
    },
    {
      category:     "herbs",
      bgClass:      "bg-herbs",
      icon:         "💊",
      image:        "",
      badge:        "new",
      name:         "Shatavari",
      shortDesc:    "Women's hormonal wellness",
      description:  "A revered Ayurvedic rasayana for women. Balances hormones, supports fertility, and nourishes the reproductive system naturally.",
      benefits:     ["Women's Health", "Hormones", "Vitality"],
      price:        "₹599",
      unit:         "60 caps",
      affiliateLink:"#",
    },
    {
      category:     "herbs",
      bgClass:      "bg-herbs",
      icon:         "🌾",
      image:        "",
      badge:        "",
      name:         "Guduchi",
      shortDesc:    "Immunity & blood purifier",
      description:  "Tinospora cordifolia extract — one of Ayurveda's most powerful immunomodulators. Builds resilience and detoxifies the blood.",
      benefits:     ["Immunity", "Blood Purifier", "Anti-inflammatory"],
      price:        "₹399",
      unit:         "60 caps",
      affiliateLink:"#",
    },
    {
      category:     "oils",
      bgClass:      "bg-oils",
      icon:         "🫚",
      image:        "",
      badge:        "popular",
      name:         "Brahmi Hair Oil",
      shortDesc:    "Hair growth & scalp health",
      description:  "A deeply nourishing herbal oil infused with Brahmi and Bhringraj. Promotes hair growth, reduces scalp inflammation, and prevents premature greying.",
      benefits:     ["Hair Growth", "Scalp Health", "Anti-Grey"],
      price:        "₹549",
      unit:         "200ml",
      affiliateLink:"#",
    },
    {
      category:     "oils",
      bgClass:      "bg-oils",
      icon:         "✨",
      image:        "",
      badge:        "",
      name:         "Kumkumadi Serum",
      shortDesc:    "Brightening & anti-aging",
      description:  "The legendary Kumkumadi tailam — a saffron-infused Ayurvedic face serum that brightens, reduces dark spots, and restores skin's natural glow.",
      benefits:     ["Brightening", "Anti-Ageing", "Dark Spots"],
      price:        "₹849",
      unit:         "15ml",
      affiliateLink:"#",
    },
    {
      category:     "oils",
      bgClass:      "bg-oils",
      icon:         "💆",
      image:        "",
      badge:        "organic",
      name:         "Dhanvantaram Oil",
      shortDesc:    "Joint pain & relaxation",
      description:  "A classical Ayurvedic massage oil for Vata pacification. Relieves joint pain, muscle stiffness, and promotes deep relaxation when used in Abhyanga.",
      benefits:     ["Joint Pain", "Relaxation", "Vata Balance"],
      price:        "₹699",
      unit:         "200ml",
      affiliateLink:"#",
    },
    {
      category:     "teas",
      bgClass:      "bg-teas",
      icon:         "🍵",
      image:        "",
      badge:        "popular",
      name:         "Immunity Kadha",
      shortDesc:    "Traditional immunity boost",
      description:  "A traditional decoction of Tulsi, Ginger, Black Pepper, Cinnamon, and Mulethi. Strengthens immunity, soothes the throat, and improves digestion.",
      benefits:     ["Immunity", "Digestion", "Throat Soothe"],
      price:        "₹299",
      unit:         "100g",
      affiliateLink:"#",
    },
    {
      category:     "teas",
      bgClass:      "bg-teas",
      icon:         "🌸",
      image:        "",
      badge:        "",
      name:         "Brahmi Tea",
      shortDesc:    "Sleep & mental clarity",
      description:  "A gentle nervine blend of Brahmi, Ashwagandha, and Rose petals. Promotes mental clarity, reduces anxiety, and supports restful sleep.",
      benefits:     ["Sleep", "Anxiety Relief", "Mental Clarity"],
      price:        "₹349",
      unit:         "80g",
      affiliateLink:"#",
    },
    {
      category:     "teas",
      bgClass:      "bg-teas",
      icon:         "☕",
      image:        "",
      badge:        "new",
      name:         "Ajwain Kadha",
      shortDesc:    "Digestion & gut health",
      description:  "A warming post-meal kadha with Ajwain, Saunf, and Jeera. Rapidly relieves bloating, acidity, and improves overall gut health naturally.",
      benefits:     ["Bloating", "Acidity", "Gut Health"],
      price:        "₹249",
      unit:         "100g",
      affiliateLink:"#",
    },
    {
      category:     "skin",
      bgClass:      "bg-skin",
      icon:         "🌺",
      image:        "",
      badge:        "popular",
      name:         "Neem Face Wash",
      shortDesc:    "Acne control & cleansing",
      description:  "A pH-balanced daily face cleanser infused with Neem, Turmeric, and Aloe Vera. Controls acne, removes impurities, and leaves skin balanced.",
      benefits:     ["Acne Control", "Cleansing", "Oil Balance"],
      price:        "₹399",
      unit:         "150ml",
      affiliateLink:"#",
    },
    {
      category:     "skin",
      bgClass:      "bg-skin",
      icon:         "🧴",
      image:        "",
      badge:        "",
      name:         "Chandan Cream",
      shortDesc:    "Deep hydration & glow",
      description:  "A luxurious Sandalwood and Saffron day cream that hydrates deeply, evens skin tone, and protects against environmental damage.",
      benefits:     ["Deep Hydration", "Even Tone", "Glow"],
      price:        "₹649",
      unit:         "50g",
      affiliateLink:"#",
    },
    {
      category:     "skin",
      bgClass:      "bg-skin",
      icon:         "✨",
      image:        "",
      badge:        "organic",
      name:         "Ubtan Scrub",
      shortDesc:    "Exfoliation & brightening",
      description:  "A traditional bridal ubtan with Chickpea flour, Rose, Turmeric, and Sandalwood. Gently exfoliates, brightens, and gives skin a natural radiant glow.",
      benefits:     ["Exfoliation", "Brightening", "Natural Glow"],
      price:        "₹449",
      unit:         "100g",
      affiliateLink:"#",
    },
    {
      category:     "skin",
      bgClass:      "bg-skin",
      icon:         "🌷",
      image:        "",
      badge:        "new",
      name:         "Rose Toner",
      shortDesc:    "Pore care & hydration",
      description:  "An alcohol-free facial toner with Rose hydrosol, Vetiver, and Glycerine. Tightens pores, refreshes skin, and preps it for the next skincare step.",
      benefits:     ["Pore Care", "Hydrating", "Refreshing"],
      price:        "₹329",
      unit:         "100ml",
      affiliateLink:"#",
    },
  ],

  /* ─────────────────────────────────────────
     9. TESTIMONIALS
  ───────────────────────────────────────── */
  testimonialsSection: {
    tag:   "Real Experiences",
    title: "What Our",
    titleAccent: "Clients",
    titleEnd: "Say",
  },
  testimonials: [
    {
      stars:  5,
      text:   "The Ashwagandha capsules completely transformed my energy levels. Within 3 weeks I noticed a huge difference in my stress and sleep quality.",
      avatar: "🙋‍♀️",
      image:  "",  // Add image path like "/images/testimonial-1.jpg" - leave empty to use avatar emoji
      name:   "Priya Sharma",
      location: "Mumbai, Maharashtra",
    },
    {
      stars:  5,
      text:   "I was skeptical but the Kumkumadi serum is genuinely magical. My skin tone has never looked this even and bright. Completely worth it.",
      avatar: "🙋‍♂️",
      image:  "",
      name:   "Rahul Mehta",
      location: "Bangalore, Karnataka",
    },
    {
      stars:  5,
      text:   "Dr. Vaidya's recommendations are always spot on. The Immunity Kadha is now a daily ritual in our home. The whole family loves it.",
      avatar: "🙋‍♀️",
      image:  "",
      name:   "Anita Gupta",
      location: "Delhi, NCR",
    },
  ],

  /* ─────────────────────────────────────────
      10. PRACTITIONER / DOCTOR BIO
   ───────────────────────────────────────── */
  practitioner: {
    tag:    "The Practitioner",
    name:   "Dr. Ananya Vaidya",
    icon:   "👩‍⚕️",
    image:  "/images/img.jpeg",  // Add image path like "/images/doctor.jpg" - leave empty to use icon
    credentials: ["BAMS", "12+ Years Practice", "Panchakarma Expert", "Clinical Nutrition"],
    bio: [
      "Dr. Ananya Vaidya is a certified Ayurvedic physician (BAMS) with over 12 years of clinical experience. Trained at a prestigious Ayurvedic institution, she blends classical knowledge with contemporary wellness research to help her patients achieve lasting health.",
      "Every product on this platform is one she personally uses, prescribes, or deeply trusts. Her mission is simple — make authentic Ayurveda accessible, trustworthy, and effective for modern lives.",
    ],
    quote: "Ayurveda is not just medicine — it is a way of living in harmony with your true nature.",
  },

  /* ─────────────────────────────────────────
      11. NEWSLETTER SECTION
   ───────────────────────────────────────── */
  newsletter: {
    title:       "Get Wellness Tips & Exclusive Picks",
    subtitle:    "Join 5,000+ subscribers who receive Ayurvedic health tips and early access to new product recommendations.",
    placeholder: "Enter your email address",
    btnLabel:    "Subscribe",
  },

  /* ─────────────────────────────────────────
      12. FAQ SECTION
   ───────────────────────────────────────── */
  faq: {
    tag:        "Common Questions",
    title:      "Frequently Asked",
    titleAccent:"Questions",
    questions: [
      {
        question: "Are these products safe to use?",
        answer:   "Yes, all products recommended on our platform are personally vetted by Dr. Ananya Vaidya, a certified Ayurvedic practitioner. They are sourced from trusted brands and undergo quality checks. However, we recommend consulting your healthcare provider before starting any new supplement, especially if you are pregnant, nursing, or on medication."
      },
      {
        question: "How do you ensure product quality?",
        answer:   "We only recommend products from established brands that follow good manufacturing practices (GMP). Each product is personally tested or prescribed in clinical practice by Dr. Vaidya before being added to our curated list."
      },
      {
        question: "What is your return policy?",
        answer:   "Since we provide affiliate recommendations, return policies vary by each seller. We recommend checking the specific seller's return policy before making a purchase. We only recommend trusted sellers with customer-friendly policies."
      },
      {
        question: "How long does shipping take?",
        answer:   "Shipping times vary by seller and location. Typically, domestic orders within India take 5-7 business days. International shipping may take 2-3 weeks. You will receive tracking information once your order is dispatched."
      },
      {
        question: "Do you provide medical advice?",
        answer:   "While Dr. Vaidya is a certified Ayurvedic practitioner, this website provides product recommendations for wellness purposes only. It does not constitute medical advice. Please consult a qualified healthcare professional for specific health concerns."
      },
    ],
  },

  /* ─────────────────────────────────────────
     12. FOOTER LINKS
  ───────────────────────────────────────── */
  footer: {
    columns: [
      {
        title: "Products",
        links: [
          { label: "Herbal Supplements", href: "#" },
          { label: "Oils & Serums",      href: "#" },
          { label: "Teas & Kadha",       href: "#" },
          { label: "Skincare & Beauty",  href: "#" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "About",        href: "#" },
          { label: "Meet Dr. Vaidya", href: "#" },
          { label: "Wellness Blog", href: "#" },
          { label: "Contact",      href: "#" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Instagram", href: "#" },
          { label: "YouTube",   href: "#" },
          { label: "WhatsApp",  href: "#" },
          { label: "Email Us",  href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use",   href: "#" },
    ],
  },

};