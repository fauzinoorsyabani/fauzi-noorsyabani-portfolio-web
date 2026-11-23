/**
 * Creator & Tech Storytelling Portfolio Data (/creator)
 * Powered by verified campaign performance data from:
 * - Videotto.com (Singapore AI Video SaaS — 10 Multi-Platform Reels Campaign, 5.46M+ Total Views)
 * - Impact Innovator's League (IIL 2026) — Indonesia Organizations Chamber × Magna Partners (Official KOL LoA)
 * - Indosat Ooredoo Hutchison × Dicoding Developer Conference (1st Place National Winner)
 * - Google Indonesia (Google Student Ambassador Campus Lead — Top 1% of 12,000+ applicants)
 * - Kemenparekraf / Badan Ekraf × Dicoding (1st Place #MyBDDInsight Challenge)
 * - Bank Indonesia (2nd Place Winner Bookstagram Review Challenge)
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
  secondaryImage?: string;
  url: string;
  accent: string;
  deliverables?: readonly string[];
}

export interface CreatorReelItem {
  id: string;
  number: string;
  title: string;
  hook: string;
  partner: string;
  category: "Videotto AI Campaign" | "High-Retention (>500K)" | "Multi-Platform Viral";
  date: string;
  durationOrFormat: string;
  totalViews: string;
  igViews: string;
  tiktokViews: string;
  fbViews: string;
  igInteractions: string;
  nonFollowerReach: string;
  igUrl: string;
  tiktokUrl: string;
  fbUrl?: string;
  igProofImage: string;
  tiktokProofImage: string;
  fbProofImage: string;
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
  handle: "@fauzi.noorsyabani",
  role: "Tech Content Creator, KOL & AI Engineer · Indonesia",
  status: "Available for Part-Time & Remote Content Creator Roles",
  email: "fauzinoorsyabani05@gmail.com",
  whatsapp: "https://wa.me/6281310641534",
  linkedin: "https://linkedin.com/in/fauzinoorsyabani",
  instagram: "https://www.instagram.com/fauzi.noorsyabani/",
  tiktok: "https://www.tiktok.com/@fauzi.noorsyabani",
  facebook: "https://www.facebook.com/share/r/1EfiHf5MAB/",
  github: "https://github.com/fauzinoorsyabani",
  medium: "https://medium.com/@fnoorsyabani",
  avatar: "/fauzi-hero-google.webp",
  totalCampaignViews: "5,463,000+",
  videottoIgViews: "5,443,039",
  videottoTotalViews: "5,459,233",
  totalPublishedVideos: "30+ Cross-Platform Reels",
};

export const creatorBrands: readonly CreatorBrand[] = [
  {
    id: "videotto-singapore",
    name: "Videotto.com (Singapore AI Video SaaS)",
    badge: "5.46M+ Verified Views · 10 Reels Campaign",
    role: "UGC Tech Creator & AI Product Storyteller",
    period: "May — Jul 2026",
    metric: "5,459,233 Total Views (IG · TikTok · FB)",
    summary:
      "Partnered with Singapore-based AI video clipping startup Videotto.com (reported directly to Sujay) to script, shoot, edit, and distribute 10 short-form POV & demo Reels across Instagram, TikTok, and Facebook—driving 5.44M+ Instagram views (up to 98.8% non-follower reach) and 22,500+ organic interactions.",
    image: "/creator/image10.webp",
    secondaryImage: "/creator/image4.webp",
    url: "https://www.instagram.com/reel/DZRLDx-zzTO/",
    accent: "#FF6308",
    deliverables: [
      "10 Original Short-Form AI Product Reels (30 cross-platform uploads across IG, TikTok & Facebook)",
      "5,443,039 Instagram Views · 6,419 TikTok Studio Views · 9,775 Facebook Views",
      "Peak single Reel performance: 796,846 views & 9,631 interactions (1,639 comments) on Reel #4",
      "Comprehensive 19-page Campaign Performance Report with raw Meta & TikTok Studio analytics",
    ],
  },
  {
    id: "iil-magna-partners",
    name: "Impact Innovator’s League (IIL 2026)",
    badge: "Official Signed KOL · Magna Partners",
    role: "Key Opinion Leader (KOL) · @fauzi.noorsyabani",
    period: "Jun — Aug 2026",
    metric: "LoA No. 116/IOC/LOA/NTW/VI/2026",
    summary:
      "Contracted as an Official Key Opinion Leader (KOL) by Indonesia Organizations Chamber (part of Magna Partners alliance, signed with Growth Marketing Manager Gracella) to lead youth innovation awareness, custom Reels production, Story amplification, and referral lead conversion.",
    image: "/creator/iil_image3.webp",
    secondaryImage: "/creator/image13.webp",
    url: "https://www.instagram.com/fauzi.noorsyabani/",
    accent: "#B91C1C",
    deliverables: [
      "Signed Letter of Agreement (No. 116/IOC/LOA/NTW/VI/2026) as Official KOL",
      "Dedicated Instagram Reels production + personal branding copywriting adaptation",
      "Instagram Story campaign reposts & direct community broadcast to 2+ tech/student networks",
      "Performance analytics reporting within 3×24 hours & tracked referral conversion funnel",
    ],
  },
  {
    id: "indosat-ddc",
    name: "Indosat Ooredoo Hutchison × Dicoding DDC",
    badge: "1st Place National Winner · 20K+ Reach",
    role: "Featured Technical Case Study Creator",
    period: "Apr 2026",
    metric: "1st Place AI Track · 20,000+ Tech Readers",
    summary:
      "Won 1st Place Nationwide at Life After DDC Challenge 2026 (supported by Indosat Ooredoo Hutchison, DBS Foundation, IBM SkillsBuild & Kemenparekraf) by turning complex AI retail forecasting architecture into an easy-to-digest visual case study.",
    image: "/polastok-web.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#E11D48",
    deliverables: [
      "1st Place National Winner (AI for Cloud Infrastructure & DevOps category)",
      "Translated 913,000+ retail transaction LSTM + Gemini AI pipeline into public case study content",
      "Reached 20,000+ developers, engineers, and tech decision-makers across Indonesia",
    ],
  },
  {
    id: "google-gsa",
    name: "Google Indonesia — Student Ambassador",
    badge: "100K+ Impressions · Top 1% Cohort",
    role: "Campus Lead & Tech Content Creator",
    period: "Sep 2025 — Feb 2026",
    metric: "100,000+ Reach · 1,000+ Students Trained",
    summary:
      "Selected from 12,000+ applicants nationwide (Top 1%). Directed a 10-person student creative & event team producing educational Reels, carousels, and hands-on Gemini AI & Vertex AI workshops.",
    image: "/documentation/collab-gsa-summit-01.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#4285F4",
    deliverables: [
      "Led 8 technical workshops & hands-on Generative AI demoruns for 1,000+ university students",
      "Managed a 10-person campus media team generating 100,000+ digital publication impressions",
      "Official campus liaison to Google Indonesia Developer Relations",
    ],
  },
  {
    id: "ekraf-bdd",
    name: "Kemenparekraf / Badan Ekraf × Dicoding",
    badge: "1st Place #MyBDDInsight · 44.7K+ Reach",
    role: "National Tech Insight Winner",
    period: "Nov 2025",
    metric: "44,700+ Organic Views · 1st Place",
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
    metric: "2nd Place Central Bank Literacy Award",
    summary:
      "Awarded 2nd Place in Bank Indonesia's World Book Day Challenge for designing structured visual carousels and compelling copywriting that translated macroeconomic literacy into engaging public social media content.",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#1D4ED8",
  },
] as const;

/**
 * The 10 Real Published Videos from Videotto UGC Creator Campaign Report
 * Complete with exact Instagram, TikTok, and Facebook links + verified screenshot analytics
 */
export const creatorTenContents: readonly CreatorReelItem[] = [
  {
    id: "reel-01",
    number: "01",
    title: "POV: Lu Jadi Clipper & Cuan Ratusan Juta pakai AI ini",
    hook: "POV: lu jadi clipper viral dan cuan ratusan juta pakai AI ini — turning long videos into viral clips automatically.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "Multi-Platform Viral",
    date: "May 28, 2026",
    durationOrFormat: "497.7K IG · 3.6K FB",
    totalViews: "501,869 views",
    igViews: "497,743",
    tiktokViews: "516",
    fbViews: "3,610",
    igInteractions: "1,352 interactions (1,215 likes · 46 comments)",
    nonFollowerReach: "98.8% non-followers (57h 31m TikTok watch time)",
    igUrl: "https://www.instagram.com/reel/DY3y-1PNzbs/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7644876119614688520?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1EfiHf5MAB/",
    igProofImage: "/creator/image1.webp",
    tiktokProofImage: "/creator/image2.webp",
    fbProofImage: "/creator/image3.webp",
  },
  {
    id: "reel-02",
    number: "02",
    title: "1 Podcast Sekarang Bisa Jadi Puluhan Konten Otomatis (28 Clips Instant)",
    hook: "Kenapa mereka bersatu sih?! 1 podcast panjang sekarang bisa langsung dipotong jadi 28 klip vertikal otomatis pakai AI.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "High-Retention (>500K)",
    date: "May 31, 2026",
    durationOrFormat: "559.3K IG · 2.1K FB",
    totalViews: "561,875 views",
    igViews: "559,391",
    tiktokViews: "392",
    fbViews: "2,092",
    igInteractions: "1,197 interactions (1,166 likes · 17 comments)",
    nonFollowerReach: "99.0% non-followers (120h 16m TikTok watch time)",
    igUrl: "https://www.instagram.com/reel/DY_ynYxz-Fz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7645981679596604690?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1C9uDZtA2N/?mibextid=wwXIfr",
    igProofImage: "/creator/image4.webp",
    tiktokProofImage: "/creator/image5.webp",
    fbProofImage: "/creator/image6.webp",
  },
  {
    id: "reel-03",
    number: "03",
    title: "POV: Lu Jadi Clipper dan Mulai Dapet Cuan Gara-Gara AI Ini",
    hook: "Kalau lo lagi nyari AI buat nge-cut video panjang jadi video pendek tanpa watermark, ini salah satu tool yang wajib dicoba.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "Videotto AI Campaign",
    date: "Jun 4, 2026",
    durationOrFormat: "462.2K IG · 80h Watch",
    totalViews: "463,310 views",
    igViews: "462,280",
    tiktokViews: "425",
    fbViews: "605",
    igInteractions: "1,053 interactions (981 likes · 33 comments)",
    nonFollowerReach: "98.6% non-followers (80h 40m TikTok watch time)",
    igUrl: "https://www.instagram.com/reel/DZJkddJz1T9/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7647389720468638984?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    igProofImage: "/creator/image7.webp",
    tiktokProofImage: "/creator/image8.webp",
    fbProofImage: "/creator/image9.webp",
  },
  {
    id: "reel-04",
    number: "04",
    title: "Udah Lama Jadi Clipper Video Pendek, Tapi Malah Baru Tau AI Ini",
    hook: "POV: lu telat sadar kalau sekarang banyak clipper pakai AI buat bikin konten lebih cepat — 796K+ views & 1,639 comments!",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "High-Retention (>500K)",
    date: "Jun 7, 2026",
    durationOrFormat: "796.8K IG · 9.6K Eng",
    totalViews: "797,287 views",
    igViews: "796,846",
    tiktokViews: "140",
    fbViews: "301",
    igInteractions: "9,631 interactions (2,197 likes · 1,639 comments)",
    nonFollowerReach: "98.5% non-followers · 61,378 accounts reached",
    igUrl: "https://www.instagram.com/reel/DZRLDx-zzTO/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7648484954799639816?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1JJt39Wgwf/",
    igProofImage: "/creator/image10.webp",
    tiktokProofImage: "/creator/image11.webp",
    fbProofImage: "/creator/image12.webp",
  },
  {
    id: "reel-05",
    number: "05",
    title: "POV: Kamu Jadi Clipper Cuan Tapi Nggak Mau Edit Video Berjam-Jam",
    hook: "Gue dulu kira bikin short clip harus ngedit manual berjam-jam. Ternyata pakai AI workflow ini bisa hemat waktu drastis.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "High-Retention (>500K)",
    date: "Jun 11, 2026",
    durationOrFormat: "656.9K IG · 1.1K TT",
    totalViews: "658,500 views",
    igViews: "656,979",
    tiktokViews: "1,080",
    fbViews: "441",
    igInteractions: "5,193 interactions (1,638 likes · 297 comments)",
    nonFollowerReach: "97.6% non-followers (346h 58m TikTok watch time)",
    igUrl: "https://www.instagram.com/reel/DZbzBAdTw-U/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7650012916506266898?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/18qhw7Rdu9/",
    igProofImage: "/creator/image13.webp",
    tiktokProofImage: "/creator/image14.webp",
    fbProofImage: "/creator/image15.webp",
  },
  {
    id: "reel-06",
    number: "06",
    title: "POV: Kamu Pake AI Ini, Jam Kerja Berkurang, Tapi Cuan Terus Bertambah",
    hook: "POV: kamu baru sadar kalau 1 video panjang bisa jadi stok konten seminggu penuh tanpa lembur edit.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "High-Retention (>500K)",
    date: "Jun 14, 2026",
    durationOrFormat: "608.6K IG · 195h TT",
    totalViews: "609,702 views",
    igViews: "608,662",
    tiktokViews: "740",
    fbViews: "300",
    igInteractions: "707 interactions (443 likes · 112 comments)",
    nonFollowerReach: "92.4% For You traffic on TikTok (195h 50m play time)",
    igUrl: "https://www.instagram.com/reel/DZjS-bizufV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7651099828788808978?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1Cry3yaVKf/",
    igProofImage: "/creator/image16.webp",
    tiktokProofImage: "/creator/image17.webp",
    fbProofImage: "/creator/image18.webp",
  },
  {
    id: "reel-07",
    number: "07",
    title: "POV: Kamu Heran Kok Creator Lain Nggak Pernah Kehabisan Konten",
    hook: "Gue baru sadar kenapa banyak creator nggak pernah kehabisan konten harian—mereka repurpose long-form video pakai AI.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "Videotto AI Campaign",
    date: "Jun 18, 2026",
    durationOrFormat: "459.2K IG · 17.2% Full",
    totalViews: "460,283 views",
    igViews: "459,280",
    tiktokViews: "718",
    fbViews: "285",
    igInteractions: "1,201 interactions (1,172 likes · 16 comments)",
    nonFollowerReach: "90.7% For You traffic · 17.2% watched full video on TikTok",
    igUrl: "https://www.instagram.com/reel/DZtwVEHzgof/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/photo/7652604550792219911?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1BH1L3bAuy/",
    igProofImage: "/creator/image19.webp",
    tiktokProofImage: "/creator/image20.webp",
    fbProofImage: "/creator/image21.webp",
  },
  {
    id: "reel-08",
    number: "08",
    title: "POV: Kamu Masih Ngedit Short Satu-Satu Di Tahun 2026",
    hook: "POV: kamu masih ngedit shorts satu-satu di tahun 2026. Dulu gue juga ngira bikin puluhan klip harus potong timeline manual.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "Multi-Platform Viral",
    date: "Jun 22, 2026",
    durationOrFormat: "453.6K IG · 1.4K FB",
    totalViews: "455,987 views",
    igViews: "453,699",
    tiktokViews: "816",
    fbViews: "1,472",
    igInteractions: "991 interactions (276 likes · 176 comments)",
    nonFollowerReach: "90.3% non-followers on IG · 92.3% For You on TikTok",
    igUrl: "https://www.instagram.com/reel/DZ21inczHee/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7653908027916995858?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/17RYceaHfd/",
    igProofImage: "/creator/image22.webp",
    tiktokProofImage: "/creator/image23.webp",
    fbProofImage: "/creator/image24.webp",
  },
  {
    id: "reel-09",
    number: "09",
    title: "POV: Kamu Creator Yang Akan Capai 100 Juta Pertama Lewat Sistem Konten",
    hook: "Dulu gue kira creator yang sering viral itu cuma beruntung. Tapi semakin gue bedah, kuncinya ada di volume & kecepatan produksi.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "Videotto AI Campaign",
    date: "Jun 25, 2026",
    durationOrFormat: "390.3K IG · 772 TT",
    totalViews: "391,527 views",
    igViews: "390,389",
    tiktokViews: "772",
    fbViews: "366",
    igInteractions: "528 interactions (429 likes · 44 comments)",
    nonFollowerReach: "70.4% non-followers on IG · +2 new followers on TikTok",
    igUrl: "https://www.instagram.com/reel/DaAJUQvTo1I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7655252211529862421?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1D1N6hJwrY/",
    igProofImage: "/creator/image25.webp",
    tiktokProofImage: "/creator/image26.webp",
    fbProofImage: "/creator/image27.webp",
  },
  {
    id: "reel-10",
    number: "10",
    title: "POV: Malas Nonton Video Panjang, Tapi Pengen 42 Clips Otomatis Dalam Hitungan Menit",
    hook: "42 Clips total langsung jadi otomatis dalam hitungan menit! Solusi buat clipper yang pengen scale up output harian.",
    partner: "Videotto.com (Singapore AI Startup)",
    category: "High-Retention (>500K)",
    date: "Jun 28, 2026",
    durationOrFormat: "584K IG · 1.3K TT",
    totalViews: "585,601 views",
    igViews: "584,042",
    tiktokViews: "1,306",
    fbViews: "253",
    igInteractions: "707 interactions (200 likes · 93 comments)",
    nonFollowerReach: "87.1% non-followers · 6,623 accounts reached",
    igUrl: "https://www.instagram.com/reel/DaHUrfWTDzE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tiktokUrl: "https://www.tiktok.com/@fauzi.noorsyabani/video/7656274735201881365?is_from_webapp=1&sender_device=pc&web_id=7574054478735803922",
    fbUrl: "https://www.facebook.com/share/r/1F6wgxFUQj/",
    igProofImage: "/creator/image28.webp",
    tiktokProofImage: "/creator/image29.webp",
    fbProofImage: "/creator/image30.webp",
  },
] as const;

export const creatorSpeakingPrints: readonly CreatorSpeakingPrint[] = [
  {
    id: 0,
    title: "Videotto.com Singapore UGC Creator Campaign (10 Reels)",
    organizer: "Videotto AI · Reported to Sujay",
    date: "May — Jul 2026",
    audience: "5.46M+ views",
    caption: "Videotto 5.46M+ Views",
    image: "/creator/image10.webp",
    desktopPos: { left: "10px", top: "26px", width: "325px", rotate: "-6deg", zIndex: 1 },
    mobileRotate: "-2deg",
    aspect: "3/2",
  },
  {
    id: 1,
    title: "Impact Innovator’s League 2026 — Official Signed KOL",
    organizer: "Indonesia Organizations Chamber × Magna Partners",
    date: "Jun 2026",
    audience: "LoA No. 116/IOC",
    caption: "Official KOL IIL 2026",
    image: "/creator/iil_image3.webp",
    desktopPos: { left: "600px", top: "10px", width: "325px", rotate: "5deg", zIndex: 2 },
    mobileRotate: "1.5deg",
    aspect: "3/2",
  },
  {
    id: 2,
    title: "Life After DDC Challenge — 1st Place National Winner",
    organizer: "Dicoding × Indosat Ooredoo Hutchison × IBM",
    date: "Apr 2026",
    audience: "20,000+ reach",
    caption: "1st Place Indosat × DDC",
    image: "/polastok-web.webp",
    desktopPos: { left: "65px", top: "265px", width: "330px", rotate: "4deg", zIndex: 2 },
    mobileRotate: "-1deg",
    aspect: "3/2",
  },
  {
    id: 3,
    title: "Google Student Ambassador Campus Lead & National Summit",
    organizer: "Google Indonesia · Developer Relations",
    date: "Sep 2025 — Feb 2026",
    audience: "100,000+ reach",
    caption: "Google GSA Lead",
    image: "/documentation/collab-gsa-summit-01.webp",
    desktopPos: { left: "630px", top: "230px", width: "295px", rotate: "6deg", zIndex: 3 },
    mobileRotate: "2deg",
    aspect: "3/2",
  },
  {
    id: 4,
    title: "#MyBDDInsight 1st Place & Bank Indonesia 2nd Place Winner",
    organizer: "Kemenparekraf / Badan Ekraf & Bank Indonesia",
    date: "2025",
    audience: "44,700+ reach",
    caption: "BDD & BI Content Winner",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    desktopPos: { left: "295px", top: "75px", width: "375px", rotate: "-2deg", zIndex: 4 },
    mobileRotate: "-1.5deg",
    aspect: "3/2",
  },
] as const;

export const creatorTestimonials: readonly CreatorTestimonial[] = [
  {
    quote:
      "Across 10 consecutive AI product Reels for Singapore-based Videotto.com, Fauzi generated over 5.46 million verified views across Instagram, TikTok, and Facebook—with up to 99% non-follower discovery and 9,600+ interactions on a single video.",
    author: "Videotto.com Campaign Report",
    role: "10-Video Multi-Platform UGC Campaign (Singapore)",
    avatar: "/creator/image10.webp",
  },
  {
    quote:
      "Signed under official Letter of Agreement (No. 116/IOC/LOA/NTW/VI/2026) as Key Opinion Leader (KOL) for Impact Innovator’s League 2026, driving youth innovation awareness, custom copywriting, and tracked referral conversions.",
    author: "Indonesia Organizations Chamber (Magna Partners)",
    role: "Gracella · Growth Marketing Manager",
    avatar: "/creator/iil_image3.webp",
  },
  {
    quote:
      "As a Google Student Ambassador Campus Lead and 2× National 1st Place Tech Challenge Winner (Indosat × Dicoding DDC & Kemenparekraf BDD), Fauzi translates complex software case studies into easy-to-digest content.",
    author: "Tech Evangelism & Developer Relations",
    role: "Google GSA · Dicoding · Kemenparekraf",
    avatar: "/fauzi-hero-google.webp",
  },
  {
    quote:
      "Unlike traditional creators who only guess what goes viral, Fauzi tracks retention curves, For You traffic sources, watch-time hours, and platform insights with Data Scientist precision.",
    author: "Data-Driven Content Analytics",
    role: "Meta Insights · TikTok Studio · Looker Studio",
    avatar: "/logo-thumb.webp",
  },
] as const;

export const creatorTools: readonly CreatorTool[] = [
  {
    name: "Videotto AI",
    category: "AI Video Clipping & Repurposing",
    description: "Turning long-form podcasts and product demos into high-retention vertical clips.",
    previewImage: "/creator/image4.webp",
    color: "#FF6308",
  },
  {
    name: "CapCut",
    category: "Short-Form Video Editing",
    description: "Dynamic hook pacing, kinetic captions, and retention-optimized cuts for Reels & TikTok.",
    previewImage: "/creator/image10.webp",
    color: "#0A0A0A",
  },
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
    name: "Meta & TikTok Studio",
    category: "Retention & Traffic Analytics",
    description: "Auditing 0:02 drop-off hooks, For You % distribution, watch time hours, and non-follower reach.",
    previewImage: "/creator/image2.webp",
    color: "#E11D48",
  },
  {
    name: "Claude & Gemini",
    category: "AI Copywriting & Script Hooks",
    description: "Structured prompt engineering to turn raw technical case studies into viral POV scripts.",
    previewImage: "/certificates/claude-on-google-cloud.webp",
    color: "#D97757",
  },
  {
    name: "Looker Studio",
    category: "Campaign Performance Reporting",
    description: "Compiling multi-platform campaign performance reports for bonus & ROI calculation.",
    previewImage: "/documentation/bi-looker-executive-dashboard.webp",
    color: "#4285F4",
  },
  {
    name: "Notion",
    category: "Monthly Content Planning",
    description: "End-to-end editorial calendars, KOL deliverables tracking, and copywriting pipelines.",
    previewImage: "/fauzi-journal.webp",
    color: "#18181B",
  },
] as const;
