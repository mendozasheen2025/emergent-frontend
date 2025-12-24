// Mock data for The Website Maker by GoKalakal

export const companyInfo = {
  name: "The Website Maker",
  tagline: "by GoKalakal",
  description: "Professional web development services for your personal and business needs",
  contact: {
    phone: "09393802148",
    facebook: "https://www.facebook.com/profile.php?id=61585386821595",
    email: "support@gokalakal.com",
    email2: "mendozasheen2019@gmail.com"
  },
  logoUrl: "https://customer-assets.emergentagent.com/job_digital-craft-17/artifacts/1doxkxfe_Group%201171275150%20%282%29.png",
  location: {
    name: "Subic Bay Freeport Zone",
    address: "Subic Bay Freeport Zone, Zambales, Philippines",
    coordinates: {
      lat: 14.7942,
      lng: 120.2833
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123024.76384199258!2d120.19789065!3d14.794295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b8d85f65b%3A0x4c2a0f13e58a1a5b!2sSubic%20Bay%20Freeport%20Zone!5e0!3m2!1sen!2sph!4v1703318400000!5m2!1sen!2sph"
  },
  businessHours: "24/7",
  poweredBy: [
    {
      name: "Hostinger",
      logo: "https://assets.hostinger.com/images/logo-horizontal-purple.svg",
      url: "https://www.hostinger.ph"
    },
    {
      name: "Dragonpay",
      logo: "https://www.dragonpay.ph/wp-content/uploads/2020/06/dragonpay-logo.png",
      url: "https://www.dragonpay.ph"
    }
  ]
};

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "15,000",
    currency: "₱",
    description: "Single Page Website",
    popular: false,
    features: [
      "Free Domain for 1 Year (Choose Your Own)",
      "Free Hosting for 1 Year",
      "3 Months Basic Maintenance",
      "Sleek Landing Page Design",
      "Personal & Business Profile Ready",
      "Mobile Responsive Design",
      "Basic SEO Setup"
    ]
  },
  {
    id: "advance",
    name: "Advance",
    price: "30,000",
    currency: "₱",
    description: "Multiple Pages with Customization",
    popular: true,
    features: [
      "Free Domain for 1 Year (Choose Your Own)",
      "Free Hosting for 1 Year",
      "3 Months Basic Maintenance",
      "Multiple Pages Design",
      "Custom Design Elements",
      "Contact Form Integration",
      "Social Media Integration",
      "Enhanced SEO Optimization",
      "Google Analytics Setup"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: "50,000",
    currency: "₱",
    description: "Multiple Pages with Admin Portal",
    popular: false,
    features: [
      "Free Domain for 1 Year (Choose Your Own)",
      "Free Hosting for 1 Year",
      "3 Months Basic Maintenance",
      "Admin Portal for Easy Updates",
      "Content Management System",
      "Unlimited Page Creation",
      "E-commerce Ready Features",
      "Advanced SEO & Analytics",
      "Priority Support",
      "Custom Functionality"
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Custom Web Design",
    description: "Unique, tailored designs that reflect your brand identity and engage your visitors.",
    icon: "Palette"
  },
  {
    id: 2,
    title: "Responsive Development",
    description: "Websites that look perfect on all devices - desktop, tablet, and mobile.",
    icon: "Monitor"
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Built-in search engine optimization to help your website rank higher.",
    icon: "Search"
  },
  {
    id: 4,
    title: "Fast Loading Speed",
    description: "Optimized performance for lightning-fast page loads and better user experience.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Secure & Reliable",
    description: "SSL certificates and secure hosting to protect your website and visitors.",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Easy Maintenance",
    description: "User-friendly admin panels and ongoing support to keep your site updated.",
    icon: "Settings"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    business: "Santos Bakery",
    comment: "The Website Maker created an amazing website for my bakery. My online orders have increased by 200%!",
    rating: 5
  },
  {
    id: 2,
    name: "Juan dela Cruz",
    business: "JDC Law Office",
    comment: "Professional, responsive, and delivered on time. Highly recommended for any business!",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Reyes",
    business: "Reyes Photography",
    comment: "My portfolio website looks stunning! The team understood exactly what I needed.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, a basic single-page website takes 3-5 business days. Multi-page websites take 1-2 weeks, and professional websites with admin portals take 2-4 weeks depending on complexity."
  },
  {
    question: "Do I need to provide content for my website?",
    answer: "Yes, you'll need to provide your business information, images, and text content. We can help guide you on what content works best for your website."
  },
  {
    question: "What happens after the first year of free domain and hosting?",
    answer: "After the first year, domain renewal costs approximately ₱1,000-2,000/year and hosting costs around ₱3,000-5,000/year depending on your plan."
  },
  {
    question: "Can I update the website myself?",
    answer: "With our Professional package, you'll have access to an admin portal where you can easily update content, images, and pages yourself without any coding knowledge."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment terms. You can pay 50% upfront and 50% upon completion, or discuss other arrangements based on your needs."
  }
];

export const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your vision, goals, and requirements for your website."
  },
  {
    step: 2,
    title: "Design",
    description: "Our team creates a custom design tailored to your brand."
  },
  {
    step: 3,
    title: "Development",
    description: "We build your website with clean code and modern technologies."
  },
  {
    step: 4,
    title: "Launch",
    description: "Your website goes live with full support and maintenance."
  }
];

export const portfolioSamples = [
  {
    id: 1,
    title: "Modern Business Website",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    description: "Clean, professional design for corporate clients"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Online Store",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    description: "Feature-rich online shopping experience"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    description: "Stunning portfolio showcase for creatives"
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Food & Dining",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    description: "Appetizing design with online reservations"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Property",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800",
    description: "Property listings with virtual tours"
  },
  {
    id: 6,
    title: "Healthcare Website",
    category: "Medical",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=800",
    description: "Professional medical practice website"
  }
];

export const seoData = {
  title: "The Website Maker by GoKalakal | Professional Web Development Philippines",
  description: "Professional web development services starting at ₱15,000. Custom websites, responsive design, SEO optimization. Free domain & hosting for 1 year. Based in Subic Bay Freeport Zone.",
  keywords: "web development philippines, website maker, custom website, responsive design, SEO optimization, Subic Bay web developer, affordable website, business website, e-commerce website, GoKalakal",
  author: "The Website Maker by GoKalakal",
  url: "https://dev.gokalakal.com",
  image: "https://customer-assets.emergentagent.com/job_digital-craft-17/artifacts/1doxkxfe_Group%201171275150%20%282%29.png",
  type: "website",
  locale: "en_PH",
  twitterHandle: "@gokalakal",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebDesignCompany",
    "name": "The Website Maker by GoKalakal",
    "description": "Professional web development services for personal and business needs",
    "url": "https://dev.gokalakal.com",
    "logo": "https://customer-assets.emergentagent.com/job_digital-craft-17/artifacts/1doxkxfe_Group%201171275150%20%282%29.png",
    "telephone": "+63-939-380-2148",
    "email": "support@gokalakal.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Subic Bay Freeport Zone",
      "addressRegion": "Zambales",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.7942",
      "longitude": "120.2833"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₱15,000 - ₱50,000",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585386821595"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Website Package",
        "price": "15000",
        "priceCurrency": "PHP",
        "description": "Single page website with free domain and hosting"
      },
      {
        "@type": "Offer",
        "name": "Advance Website Package",
        "price": "30000",
        "priceCurrency": "PHP",
        "description": "Multiple pages with customization"
      },
      {
        "@type": "Offer",
        "name": "Professional Website Package",
        "price": "50000",
        "priceCurrency": "PHP",
        "description": "Multiple pages with admin portal"
      }
    ]
  }
};