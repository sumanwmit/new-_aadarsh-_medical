import { ServiceCategory, CustomerReview, GalleryItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: "New aadarsh Medical Hall",
  shortName: "New Aadarsh Pharmacy",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Healthcare Centre",
  phone: "8651804316",
  phoneFormatted: "+91 86518 04316",
  whatsappNumber: "8651804316",
  email: "contact@newaadarshmedicalhall.com",
  address: {
    line1: "Manish House Sakurabad",
    line2: "O1 Road, Near Middle School",
    city: "Pinjor, Sakurabad, Jehanabad",
    state: "Bihar",
    pincode: "804429",
    full: "Manish House Sakurabad, O1, Road, near Middle School, Pinjor, Jehanabad, Bihar 804429",
    landmarks: "Near Government Middle School, Sakurabad O1 Road"
  },
  workingHours: [
    { days: "Monday - Saturday", hours: "07:00 AM - 09:30 PM" },
    { days: "Sunday", hours: "08:00 AM - 08:00 PM" },
    { days: "Emergency Support", hours: "Available 24x7 via Phone / WhatsApp" }
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.1234567!2d85.0!3d25.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d123456789%3A0x123456789!2sSakurabad%2C%20Jehanabad%2C%20Bihar%20804429!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Manish+House+Sakurabad+O1+Road+near+Middle+School+Pinjor+Jehanabad+Bihar+804429",
  socialLinks: {
    facebook: "https://facebook.com/newaadarshmedicalhall",
    instagram: "https://instagram.com/newaadarshmedical",
    whatsapp: "https://wa.me/918651804316",
    justdial: "https://www.justdial.com/Jehanabad/New-Aadarsh-Medical-Hall",
    googleBusiness: "https://maps.google.com/?q=New+aadarsh+Medical+Hall+Sakurabad"
  }
};

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    tagline: "100% Genuine Allopathic & Specialty Drugs",
    description: "Authentic medicines sourced directly from authorized pharmaceutical distributors. We verify prescriptions meticulously and maintain cold-chain storage for sensitive medications.",
    iconName: "Pill",
    popularItems: ["Antibiotics & Antivirals", "Cardiovascular & BP Care", "Diabetic & Endocrine Care", "Neuro & Psychiatric Medicines", "Pediatric Formulations"],
    features: ["100% Bill & Batch Authenticity", "Cold-chain Temperature Preserved", "Pharmacist Verification On Every Dispensation"],
    bgGradient: "from-blue-500/10 to-teal-500/10"
  },
  {
    id: "otc-medicines",
    title: "OTC & Daily Health Care",
    tagline: "Over-the-Counter Quick Relief Solutions",
    description: "Complete range of over-the-counter remedies for cough, cold, fever, digestive health, acidity, pain relief, and skin care for immediate family needs.",
    iconName: "Stethoscope",
    popularItems: ["Pain Killers & Anti-Inflammatory", "Antacids & Digestive Syrups", "Cough & Cold Syrups", "Anti-Allergic Tablets", "Ointments & Creams"],
    features: ["Top National Brands", "Doctor Recommended Formulations", "Instant Guidance on Dosage"],
    bgGradient: "from-emerald-500/10 to-green-500/10"
  },
  {
    id: "health-devices",
    title: "Medical Equipment & Devices",
    tagline: "Diagnostic Monitors & Home Care Hardware",
    description: "Reliable home health monitoring devices including digital BP apparatus, glucometers, nebulizers, pulse oximeters, digital thermometers, and steam inhalers.",
    iconName: "Activity",
    popularItems: ["Digital BP Monitors", "Glucometers & Test Strips", "Compressor Nebulizers", "Pulse Oximeters", "Infrared Thermometers"],
    features: ["Brand Warranty Support", "Free In-Store Demo & Setup", "Replacement Test Strips Always Available"],
    bgGradient: "from-teal-500/10 to-cyan-500/10"
  },
  {
    id: "surgical-supplies",
    title: "Surgical & Wound Care",
    tagline: "Hospital-Grade Surgical & Bandage Essentials",
    description: "High-grade sterile bandages, gauze rolls, surgical cotton, antiseptic lotions, surgical gloves, syringes, and wound dressing supplies for home and clinic care.",
    iconName: "ShieldCheck",
    popularItems: ["Sterile Gauze & Cotton", "Micropore Tape & Bandages", "Antiseptic Solutions (Betadine/Dettol)", "Surgical Gloves & Masks", "IV Sets & Syringes"],
    features: ["Sterile Sealed Packaging", "Bulk Supply for Clinics", "First Aid Kit Assembly"],
    bgGradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    id: "baby-care",
    title: "Baby Care & Mother Essentials",
    tagline: "Nourishing Care for Newborns & Mothers",
    description: "Dermatologically tested baby food, infant milk formulas, baby diapers, gentle wipes, baby soaps, lotions, and maternal healthcare supplements.",
    iconName: "HeartHandshake",
    popularItems: ["Infant Formula & Cerelac", "Baby Diapers & Wipes", "Gentle Baby Washes & Oils", "Maternal Supplements", "Feeding Bottles & Sterilizers"],
    features: ["100% Safe & Tested Formulas", "Fresh Stock Expiries", "Trusted Brands (Sebamed, Himalaya, Pampers)"],
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    id: "supplements-wellness",
    title: "Supplements & Ayurvedic Care",
    tagline: "Immunity Boosters, Vitamins & Herbal Care",
    description: "Comprehensive nutritional supplements, multivitamin capsules, calcium D3 tablets, protein powders, immunity boosters, and trusted herbal Ayurvedic remedies.",
    iconName: "Leaf",
    popularItems: ["Multivitamins & Minerals", "Calcium & Joint Health", "Protein Powders & Energy Drinks", "Ayurvedic Tonics (Liv.52, Chyawanprash)", "Immunity Boosters"],
    features: ["Natural & FSSAI Approved", "Authentic Herbal Preparations", "Guidance on Health Wellness"],
    bgGradient: "from-amber-500/10 to-yellow-500/10"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Medicines",
    description: "Every medicine is procured directly from licensed pharma companies with batch-level invoice traceability.",
    iconName: "CheckCircle2"
  },
  {
    title: "Affordable & Fair Pricing",
    description: "We offer flat discounts on prescription medicines and healthcare products to support community health in Jehanabad.",
    iconName: "Tag"
  },
  {
    title: "Qualified Pharmacist On-Site",
    description: "Our knowledgeable pharmacists review every prescription for safe dosage, interactions, and usage instructions.",
    iconName: "UserCheck"
  },
  {
    title: "Easy WhatsApp Prescription Ordering",
    description: "Simply upload your prescription via WhatsApp to get medicines packed or delivered conveniently to your doorstep.",
    iconName: "MessageSquare"
  },
  {
    title: "Cold Chain Storage System",
    description: "Insulin, vaccines, and biopharmaceuticals are preserved in strictly monitored refrigeration units.",
    iconName: "Thermometer"
  },
  {
    title: "Deep Inventory & Special Requests",
    description: "Huge stock of chronic care medicines (Diabetes, Cardiac, Asthma). Rare medicines arranged within 24 hours.",
    iconName: "PackageCheck"
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Ramesh Kumar Sharma",
    location: "Sakurabad, Jehanabad",
    rating: 5,
    date: "10 July 2026",
    comment: "New aadarsh Medical Hall is the most trustworthy pharmacy in Sakurabad. They always have genuine medicines for my father's diabetes and BP. Their staff is super polite and helpful!",
    verified: true,
    source: "Google Review"
  },
  {
    id: "rev-2",
    author: "Dr. Anish Chandra",
    location: "Pinjor, Bihar",
    rating: 5,
    date: "28 June 2026",
    comment: "As a local medical practitioner, I always recommend New aadarsh Medical Hall to my patients. Their commitment to authentic batch-tested medicines and cold storage maintenance is commendable.",
    verified: true,
    source: "Verified Customer"
  },
  {
    id: "rev-3",
    author: "Pooja Verma",
    location: "O1 Road Sakurabad",
    rating: 5,
    date: "14 May 2026",
    comment: "The WhatsApp order feature is very convenient! I sent a photo of my baby's prescription and received all medicines and baby care items quickly. Great discounts too.",
    verified: true,
    source: "Google Review"
  },
  {
    id: "rev-4",
    author: "Vikash Singh",
    location: "Makhdumpur, Jehanabad",
    rating: 5,
    date: "02 April 2026",
    comment: "Very clean store with digital BP devices and nebulizers. The owner explains medicine dosages clearly and never sells expired goods. Highly recommended medical store in Sakurabad.",
    verified: true,
    source: "Verified Customer"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Store Exterior & Front View",
    category: "Storefront",
    imageUrl: "/src/assets/images/pharmacy_hero_banner_1785397846872.jpg",
    description: "Front view of New aadarsh Medical Hall at Sakurabad O1 Road near Middle School."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Shelves",
    category: "Medicine Shelves",
    imageUrl: "/src/assets/images/pharmacy_interior_storefront_1785397861924.jpg",
    description: "Systematically categorized shelves for rapid dispensing and prescription accuracy."
  },
  {
    id: "gal-3",
    title: "Health Devices & Monitoring Gear",
    category: "Medical Devices",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "Blood pressure monitors, glucometers, nebulizers, and pulse oximeters available."
  },
  {
    id: "gal-4",
    title: "Mother & Baby Care Rack",
    category: "Health Products",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
    description: "Full range of baby care lotions, diapers, wipes, and pediatric nutritional formulas."
  },
  {
    id: "gal-5",
    title: "Cold Chain Storage Unit",
    category: "Storefront",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
    description: "Temperature-monitored refrigeration unit preserving insulin and biopharmaceutical integrity."
  },
  {
    id: "gal-6",
    title: "First Aid & Surgical Section",
    category: "Medical Devices",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    description: "Sterile gauze, surgical cotton, bandages, antiseptic dressings, and surgical instruments."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines via WhatsApp?",
    answer: "Simply click on the WhatsApp Order button on our website, upload or attach a clear picture of your doctor's prescription, enter your delivery address in Sakurabad/Jehanabad, and send the message. Our team will verify the prescription and confirm your order promptly.",
    category: "Orders"
  },
  {
    id: "faq-2",
    question: "Do I need a doctor's prescription for all medicines?",
    answer: "Prescription-only medicines (Schedule H, H1, and Controlled Antibiotics) require a valid prescription from a registered medical practitioner. Over-the-counter (OTC) items, vitamins, health monitors, and baby care products can be purchased directly without a prescription.",
    category: "Medicines"
  },
  {
    id: "faq-3",
    question: "Where is New aadarsh Medical Hall located?",
    answer: "We are located at Manish House Sakurabad, O1 Road, near Government Middle School, Pinjor, Sakurabad, Jehanabad, Bihar - 804429.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "What are your store operational hours?",
    answer: "Our store is open Monday through Saturday from 07:00 AM to 09:30 PM, and Sundays from 08:00 AM to 08:00 PM. Emergency medical assistance is accessible 24x7 over phone call.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "How do I check if a specific medicine is in stock?",
    answer: "You can use the 'Medicine Stock Checker' feature on our website under the Services tab, or call/WhatsApp us directly at 8651804316 with the medicine name. If an item is out of stock, we can arrange it within 24 hours.",
    category: "Medicines"
  },
  {
    id: "faq-6",
    question: "Do you offer home delivery in Sakurabad and nearby areas?",
    answer: "Yes! We offer local delivery for prescription medicines and healthcare products across Sakurabad, Pinjor, and nearby villages in Jehanabad district.",
    category: "Delivery"
  }
];

export const HEALTH_TIPS = [
  {
    id: "tip-1",
    title: "Understanding Antibiotic Misuse & Safety",
    date: "July 2026",
    category: "Prescription Safety",
    snippet: "Always complete the full prescribed course of antibiotics. Stopping early can lead to bacterial resistance.",
    content: "Antibiotics are powerful lifesaving medicines designed strictly for bacterial infections. Taking them for viral illnesses like standard common cold or flu renders them ineffective and builds antibiotic resistance. Always consult your doctor before starting or stopping any antibiotic dose."
  },
  {
    id: "tip-2",
    title: "Proper Medicine Storage in Bihar Summer Heat",
    date: "June 2026",
    category: "Medicine Care",
    snippet: "High temperatures and humidity can degrade insulin, syrups, and tablets. Here is how to keep them safe.",
    content: "Store your medicines in a cool, dry place away from direct sunlight and moisture. In Bihar's humid summer months, do not leave medicines near kitchen stoves or windows. Insulin, vaccines, and probiotics must strictly be kept inside refrigerator door compartments."
  },
  {
    id: "tip-3",
    title: "Daily Blood Sugar & BP Monitoring at Home",
    date: "May 2026",
    category: "Health Devices",
    snippet: "Learn the ideal timings and techniques for measuring home blood glucose and blood pressure accurately.",
    content: "For accurate BP readings, sit quietly for 5 minutes before measurement with back supported. For blood sugar tests, track fasting (8 hours after last meal) and 2 hours post-prandial (after meal). Keep a log notebook or app to share with your physician."
  }
];

export const COMPANY_STORY = {
  established: "2018",
  founder: "Manish Kumar & Team",
  vision: "To be the most reliable, transparent, and compassionate healthcare pharmacy in Sakurabad and Jehanabad district, ensuring no family suffers due to lack of authentic medicines.",
  mission: "Providing 100% genuine, affordable pharmaceutical care, diagnostic instruments, and personalized advice with speed, empathy, and absolute integrity.",
  values: [
    { title: "Genuine Authenticity", text: "Zero tolerance for counterfeit, non-standard, or expired medicines." },
    { title: "Patient First", text: "Empathetic guidance on dosage, storage, and health device operations." },
    { title: "Affordable Care", text: "Fair transparent pricing and discounts on chronic medications." },
    { title: "Community Trust", text: "Building lifelong relationships with families across Sakurabad and Pinjor." }
  ],
  timeline: [
    { year: "2018", event: "Founded New aadarsh Medical Hall at Sakurabad O1 Road." },
    { year: "2020", event: "Expanded stock to include high-grade surgical supplies and cold-chain refrigeration." },
    { year: "2022", event: "Launched WhatsApp Prescription Order facility for senior citizens and local home delivery." },
    { year: "2024", event: "Introduced digital health device testing counter (BP & Glucometer checks)." },
    { year: "2026", event: "Launched Online Medicine Availability & Stock Checker portal for patients." }
  ]
};
