/**
 * Creator & Tech Storytelling Portfolio Data (/creator)
 * All brand collaborations, 10 featured contents, speaking/polaroids,
 * testimonials, and tools live here for easy editing.
 */

export interface CreatorBrand {
  id: string;
  name: string;
  badge: string;
  role: string;
  period: string;
  metric: string;
  summary: string;
  image: string;
  url: string;
  accent: string;
}

export interface CreatorContentItem {
  id: string;
  number: string;
  title: string;
  platform: "LinkedIn" | "Instagram" | "Medium" | "YouTube / Reels";
  category: "Case Study" | "Brand Collab" | "Tech Carousel" | "Video / Reels";
  partner: string;
  views: string;
  engagement: string;
  date: string;
  durationOrFormat: string;
  hook: string;
  image: string;
  url: string;
}

export interface CreatorSpeakingPrint {
  id: number;
  title: string;
  organizer: string;
  date: string;
  audience: string;
  caption: string;
  image: string;
  desktopPos: {
    left: string;
    top: string;
    width: string;
    rotate: string;
    zIndex: number;
  };
  mobileRotate: string;
  aspect?: "3/2" | "3/4";
}

export interface CreatorTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CreatorTool {
  name: string;
  category: string;
  description: string;
  previewImage: string;
  color: string;
}

export const creatorProfile = {
  name: "Fauzi Noorsyabani",
  role: "Tech Content Creator & AI Engineer · Indonesia",
  status: "Available for Part-Time & Remote Content Roles",
  email: "fauzinoorsyabani05@gmail.com",
  whatsapp: "https://wa.me/6281310641534",
  linkedin: "https://linkedin.com/in/fauzinoorsyabani",
  instagram: "https://instagram.com/fauzinoorsyabani",
  github: "https://github.com/fauzinoorsyabani",
  medium: "https://medium.com/@fnoorsyabani",
  avatar: "/fauzi-hero-google.webp",
  totalImpressions: "250,000+",
  totalContents: "65+",
  totalStudentsTrained: "1,000+",
};

export const creatorBrands: readonly CreatorBrand[] = [
  {
    id: "google-gsa",
    name: "Google Indonesia — Student Ambassador",
    badge: "100K+ Impressions · Top 1% Cohort",
    role: "Campus Lead & Tech Content Creator",
    period: "Sep 2025 — Feb 2026",
    metric: "100,000+ Organic Reach",
    summary:
      "Selected from 12,000+ applicants nationwide. Led a 10-person media & event team producing educational reels, carousels, and hands-on Gemini AI & Vertex AI workshop content for 1,000+ students.",
    image: "/documentation/collab-gsa-summit-01.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#4285F4",
  },
  {
    id: "singapore-b2b-startup",
    name: "Singapore Tech & B2B SaaS Ecosystem",
    badge: "Cross-Border Tech Content & Growth",
    role: "B2B Tech Copywriter & Digital Growth Collaborator",
    period: "2025 — 2026",
    metric: "SEA Market Reach (SG · ID)",
    summary:
      "Crafted high-converting B2B SaaS narratives, AI product positioning, and technical case study breakdowns tailored for Southeast Asian enterprise decision-makers across LinkedIn and organic search.",
    image: "/loka-travel-recommender.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#FF6308",
  },
  {
    id: "indosat-ddc",
    name: "Indosat Ooredoo Hutchison × Dicoding DDC",
    badge: "1st Place National Winner · 20K+ Reach",
    role: "Featured Technical Case Study Creator",
    period: "Apr 2026",
    metric: "20,000+ Tech Audience",
    summary:
      "Won 1st Place Nationwide at Life After DDC Challenge 2026 (supported by Indosat, DBS Foundation, IBM & Ekraf) by turning complex AI retail forecasting architecture into a viral, easy-to-digest visual breakdown.",
    image: "/polastok-web.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#E11D48",
  },
  {
    id: "ekraf-bdd",
    name: "Kemenparekraf / Badan Ekraf × Dicoding",
    badge: "1st Place #MyBDDInsight · 44.7K+ Reach",
    role: "National Tech Insight Winner",
    period: "Nov 2025",
    metric: "44,700+ Organic Views",
    summary:
      "Ranked 1st Nationally at Badan Ekraf Developer Day 2025 for synthesizing executive AI panels (Augmentation vs Automation & Human-in-the-Loop) into high-retention LinkedIn & Instagram editorial content.",
    image: "/certificates/cert-bdd-ekraf-2025.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#0D9488",
  },
  {
    id: "bank-indonesia",
    name: "Bank Indonesia (KPw Tasikmalaya)",
    badge: "2nd Place Winner · Bookstagram Challenge",
    role: "Digital Literacy Content Creator",
    period: "May 2025",
    metric: "National Central Bank Award",
    summary:
      "Awarded 2nd Place in Bank Indonesia's World Book Day Challenge for designing structured visual carousels and compelling copywriting that translated macroeconomic literacy into engaging public social media content.",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#1D4ED8",
  },
  {
    id: "ibm-pijak",
    name: "IBM SkillsBuild × Pijak Capstone",
    badge: "900+ Hrs · Product Storytelling",
    role: "AI Team Lead & Product Evangelist",
    period: "Feb 2026 — Jul 2026",
    metric: "913K+ Rows Case Study",
    summary:
      "Translated a 913,000-transaction Deep LSTM + Gemini AI inventory engine into crisp product demos, stakeholder pitch decks, and founder-friendly case study narratives.",
    image: "/documentation/pulseai-model-architecture.webp",
    url: "https://polastok.streamlit.app",
    accent: "#2563EB",
  },
] as const;

export const creatorTenContents: readonly CreatorContentItem[] = [
  {
    id: "content-01",
    number: "01",
    title: "Augmentation vs Automation: Key AI Takeaways from Badan Ekraf Developer Day",
    platform: "LinkedIn",
    category: "Case Study",
    partner: "Kemenparekraf × Dicoding",
    views: "44.7K views",
    engagement: "1st Place Winner",
    date: "Nov 2025",
    durationOrFormat: "8-Slide Carousel",
    hook: "How do enterprise engineering teams deploy AI without losing human judgment? Here is the exact Human-in-the-Loop framework...",
    image: "/certificates/cert-bdd-ekraf-2025.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-02",
    number: "02",
    title: "How We Built PolaStok: Forecasting 913,000+ Retail Transactions with Hybrid LSTM & Gemini AI",
    platform: "LinkedIn",
    category: "Case Study",
    partner: "Dicoding DDC × Indosat × IBM",
    views: "20.4K views",
    engagement: "1st Place National",
    date: "Apr 2026",
    durationOrFormat: "Architecture Breakdown",
    hook: "Indonesian SMEs lose millions to dead stock every month. We turned 913K raw transactions into a 530ms AI restocking assistant...",
    image: "/polastok-web.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-03",
    number: "03",
    title: "Inside Google Student Ambassador: Bringing Gemini AI & Vertex AI to 1,000+ University Students",
    platform: "Instagram",
    category: "Brand Collab",
    partner: "Google Indonesia",
    views: "100K+ reach",
    engagement: "Top 1% Cohort",
    date: "Feb 2026",
    durationOrFormat: "Reels · 01:24",
    hook: "Out of 12,000+ applicants across Indonesia, here is how our 10-person campus team designed hands-on AI literacy campaigns...",
    image: "/documentation/collab-gsa-summit-01.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-04",
    number: "04",
    title: "Why Regional B2B Teams Are Moving from Legacy Software to AI-Native Workflows",
    platform: "LinkedIn",
    category: "Brand Collab",
    partner: "Singapore B2B Tech Campaign",
    views: "15.2K views",
    engagement: "4.8% CTR",
    date: "2026",
    durationOrFormat: "B2B Thought Leadership",
    hook: "Most B2B software content is boring because it lists features instead of quantifying operational savings. Here is how to fix it...",
    image: "/idx-market-dashboard.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-05",
    number: "05",
    title: "Visual Book Review: Decoding Digital Economy & Central Banking Literacy",
    platform: "Instagram",
    category: "Tech Carousel",
    partner: "Bank Indonesia",
    views: "12.8K reach",
    engagement: "2nd Place Winner",
    date: "May 2025",
    durationOrFormat: "Carousel · 7 Slides",
    hook: "Complex economic policy doesn't have to read like a textbook. Breaking down monetary sustainability into visual bite-sized slides...",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-06",
    number: "06",
    title: "Case Study Breakdown: Designing Loka Travel's AI Recommender for 797 Hotels",
    platform: "LinkedIn",
    category: "Case Study",
    partner: "Loka Travel Product Launch",
    views: "11.5K views",
    engagement: "80.63% Model Acc",
    date: "2026",
    durationOrFormat: "Product Case Study",
    hook: "How do you allocate hotel rooms for a family of adults, kids, and seniors under a strict budget in under 60ms? A visual guide...",
    image: "/loka-travel-recommender.webp",
    url: "https://lokatravel.my.id",
  },
  {
    id: "content-07",
    number: "07",
    title: "Automating Daily IDX30 Stock Market Intelligence with Zero Server Cost",
    platform: "LinkedIn",
    category: "Tech Carousel",
    partner: "Financial Data Engineering",
    views: "14.1K views",
    engagement: "320+ Saves",
    date: "2026",
    durationOrFormat: "Carousel · 6 Slides",
    hook: "You don't need expensive cloud clusters to run a daily financial data warehouse. Here is how GitHub Actions + Star Schema does it for $0...",
    image: "/documentation/bi-looker-executive-dashboard.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
  {
    id: "content-08",
    number: "08",
    title: "Screen Time vs GPA: What 4,500 Student Records Reveal About Digital Habits",
    platform: "Instagram",
    category: "Video / Reels",
    partner: "PulseAI Behavioral Study",
    views: "18.9K views",
    engagement: "540+ Shares",
    date: "2026",
    durationOrFormat: "Reels · 01:45",
    hook: "Does late-night scrolling actually hurt your GPA? We trained an XGBoost model on 4,500 students to visualize the exact tipping point...",
    image: "/pulseai-digital-wellness.webp",
    url: "https://pulseai.my.id",
  },
  {
    id: "content-09",
    number: "09",
    title: "Mapping Indonesian Staple Food Inflation (2023–2026) into Easy-to-Read Visuals",
    platform: "LinkedIn",
    category: "Case Study",
    partner: "Public Data Storytelling",
    views: "9.8K views",
    engagement: "210+ Reposts",
    date: "2026",
    durationOrFormat: "Data Infographic",
    hook: "Why did Bawang Merah and Minyak Goreng spike while other commodities stayed flat? Turning government price tables into clear visual stories...",
    image: "/food-price-intelligence.webp",
    url: "https://hargapangan.my.id",
  },
  {
    id: "content-10",
    number: "10",
    title: "Prompt Engineering & Local AI Workflows for Non-Technical Creators",
    platform: "Instagram",
    category: "Video / Reels",
    partner: "GSA Campus Demorun",
    views: "16.4K views",
    engagement: "150+ Live Attendees",
    date: "2025",
    durationOrFormat: "Workshop Recap · 01:12",
    hook: "3 structured prompt templates that cut content research and technical summarization time by 70% using Gemini and Claude...",
    image: "/documentation/collab-gsa-workshop.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
  },
] as const;

export const creatorSpeakingPrints: readonly CreatorSpeakingPrint[] = [
  {
    id: 0,
    title: "Google Student Ambassador National Summit",
    organizer: "Google Indonesia · Developer Relations",
    date: "Sep 2025",
    audience: "Top 1% Cohort",
    caption: "GSA National Summit",
    image: "/documentation/collab-gsa-summit-01.webp",
    desktopPos: { left: "10px", top: "26px", width: "320px", rotate: "-6deg", zIndex: 1 },
    mobileRotate: "-2deg",
    aspect: "3/2",
  },
  {
    id: 1,
    title: "Hands-on Generative AI Demorun Workshop",
    organizer: "Google Student Ambassador · Campus Lead",
    date: "Nov 2025",
    audience: "150+ students",
    caption: "GenAI Demorun Workshop",
    image: "/documentation/collab-gsa-workshop.webp",
    desktopPos: { left: "600px", top: "10px", width: "320px", rotate: "5deg", zIndex: 2 },
    mobileRotate: "1.5deg",
    aspect: "3/2",
  },
  {
    id: 2,
    title: "Life After DDC Challenge — 1st Place National",
    organizer: "Dicoding × Indosat × IBM SkillsBuild",
    date: "Apr 2026",
    audience: "20,000+ reach",
    caption: "1st Place DDC 2026",
    image: "/polastok-web.webp",
    desktopPos: { left: "65px", top: "265px", width: "330px", rotate: "4deg", zIndex: 2 },
    mobileRotate: "-1deg",
    aspect: "3/2",
  },
  {
    id: 3,
    title: "2nd Place Bookstagram Literacy Challenge",
    organizer: "Bank Indonesia KPw Tasikmalaya",
    date: "May 2025",
    audience: "12.8K+ reach",
    caption: "Bank Indonesia Award",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    desktopPos: { left: "635px", top: "225px", width: "225px", rotate: "7deg", zIndex: 3 },
    mobileRotate: "2deg",
    aspect: "3/4",
  },
  {
    id: 4,
    title: "#MyBDDInsight 1st Place National Winner",
    organizer: "Kemenparekraf / Badan Ekraf × Dicoding",
    date: "Nov 2025",
    audience: "44,700+ reach",
    caption: "Badan Ekraf Developer Day",
    image: "/certificates/cert-bdd-ekraf-2025.webp",
    desktopPos: { left: "295px", top: "75px", width: "375px", rotate: "-2deg", zIndex: 4 },
    mobileRotate: "-1.5deg",
    aspect: "3/2",
  },
] as const;

export const creatorTestimonials: readonly CreatorTestimonial[] = [
  {
    quote:
      "Fauzi has a rare superpower: he can read a complex AI or full-stack codebase in the morning and turn it into an engaging, easy-to-digest LinkedIn carousel or Instagram Reel by the afternoon.",
    author: "Pijak × IBM SkillsBuild Cohort",
    role: "Cross-Functional Engineering Team (PJK-GM041)",
    avatar: "/logo-thumb.webp",
  },
  {
    quote:
      "As a Google Student Ambassador Campus Lead, Fauzi didn't just run technical workshops—he built a content engine that generated over 100,000 impressions and brought 1,000+ students into AI literacy.",
    author: "Campus Developer Community",
    role: "Universitas Siliwangi Tech Ecosystem",
    avatar: "/fauzi-about-white.webp",
  },
  {
    quote:
      "Winning 1st Place at both Badan Ekraf Developer Day (#MyBDDInsight) and Dicoding Developer Conference proves that Fauzi knows how to hook an audience while keeping technical substance 100% accurate.",
    author: "National Tech Community Peers",
    role: "BDD 2025 & DDC 2026 Highlights",
    avatar: "/logo-thumb.webp",
  },
  {
    quote:
      "Unlike traditional content creators who guess what works, Fauzi tracks content performance like a Data Scientist—optimizing hooks, retention, and conversion metrics systematically.",
    author: "Digital Growth & B2B Collaborators",
    role: "Regional SaaS & Brand Campaigns",
    avatar: "/fauzi-hero-google.webp",
  },
] as const;

export const creatorTools: readonly CreatorTool[] = [
  {
    name: "Figma",
    category: "Carousel & Visual Systems",
    description: "Designing crisp LinkedIn carousels, UI mockups, and brand-consistent social templates.",
    previewImage: "/loka-travel-recommender.webp",
    color: "#F24E1E",
  },
  {
    name: "Canva Pro",
    category: "Rapid Social Production",
    description: "Fast turnaround for Instagram stories, infographics, and monthly content calendar assets.",
    previewImage: "/documentation/achievement-bi-bookgram-juara2.webp",
    color: "#00C4CC",
  },
  {
    name: "CapCut",
    category: "Short-Form Video Editing",
    description: "Dynamic captions, b-roll pacing, and product demo cuts for Instagram Reels & TikTok.",
    previewImage: "/documentation/collab-gsa-workshop.webp",
    color: "#0A0A0A",
  },
  {
    name: "Claude & Gemini",
    category: "AI Copywriting & Research",
    description: "Structured prompt engineering to turn raw technical docs into compelling hooks and scripts.",
    previewImage: "/certificates/claude-on-google-cloud.webp",
    color: "#D97757",
  },
  {
    name: "Looker Studio",
    category: "Content Performance Analytics",
    description: "Tracking impressions, CTR, saves, and follower conversion velocity with data precision.",
    previewImage: "/documentation/bi-looker-executive-dashboard.webp",
    color: "#4285F4",
  },
  {
    name: "Notion",
    category: "Monthly Content Planning",
    description: "End-to-end editorial calendars, content pillars, and copywriting approval pipelines.",
    previewImage: "/fauzi-journal.webp",
    color: "#18181B",
  },
  {
    name: "Google Analytics 4",
    category: "Traffic & Attribution",
    description: "Measuring how social content drives real landing-page visits and inbound client leads.",
    previewImage: "/idx-market-dashboard.webp",
    color: "#E37400",
  },
  {
    name: "React & Tailwind",
    category: "Interactive Web Demos",
    description: "Building live interactive visuals and product sandboxes that make tech case studies shine.",
    previewImage: "/polastok-web.webp",
    color: "#06B6D4",
  },
] as const;
