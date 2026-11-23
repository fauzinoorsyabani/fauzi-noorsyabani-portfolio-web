/**
 * Creator & Tech Storytelling Portfolio Data (/creator and /creator/:slug)
 * Architecture:
 * - Main /creator page stays clean, minimalist, and editorial (like faizintifada.com),
 *   showcasing Brand Collaboration Cards + a curated 6-item highlight preview.
 * - Clicking any Brand Collaboration opens its dedicated case study page (/creator/:slug)
 *   containing all videos, multi-platform links, analytics proof screenshots, and summary tables
 *   for that specific partnership.
 */

export interface CreatorContentVideo {
  id: string;
  number: string;
  title: string;
  hook: string;
  partner: string;
  brandSlug: string;
  category: string;
  date: string;
  durationOrFormat: string;
  totalViews: string;
  igViews: string;
  tiktokViews?: string;
  fbViews?: string;
  igInteractions: string;
  nonFollowerReach: string;
  igUrl: string;
  tiktokUrl?: string;
  fbUrl?: string;
  igProofImage: string;
  tiktokProofImage?: string;
  fbProofImage?: string;
}

export interface CreatorBrand {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  clientLocation: string;
  badge: string;
  role: string;
  period: string;
  metric: string;
  totalViewsSummary: string;
  contentCountLabel: string;
  summary: string;
  overview: string;
  challenge: string;
  execution: string;
  image: string;
  secondaryImage?: string;
  url: string;
  accent: string;
  deliverables: readonly string[];
  keyMetrics: readonly { label: string; value: string; sub: string }[];
  contents: readonly CreatorContentVideo[];
  hasPlatformSummaryTable?: boolean;
}

export interface CreatorSpeakingPrint {
  id: number;
  title: string;
  organizer: string;
  date: string;
  audience: string;
  caption: string;
  image: string;
  brandSlug: string;
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
  totalCampaignViews: "5,620,000+",
  videottoIgViews: "5,443,039",
  videottoTotalViews: "5,459,233",
  totalPublishedVideos: "30+ Cross-Platform Reels & Case Studies",
};

/**
 * The 10 Real Published Videos for Videotto.com (Singapore AI Video SaaS)
 * Displayed inside the dedicated `/creator/videotto` collaboration page.
 */
export const videottoTenReels: readonly CreatorContentVideo[] = [
  {
    id: "reel-01",
    number: "01",
    title: "POV: Lu Jadi Clipper & Cuan Ratusan Juta pakai AI ini",
    hook: "POV: lu jadi clipper viral dan cuan ratusan juta pakai AI ini — turning long videos into viral clips automatically.",
    partner: "Videotto.com (Singapore AI Startup)",
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
    brandSlug: "videotto",
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
];

/**
 * Brand Collaborations — Each has its own dedicated page at `/creator/:slug`
 */
export const creatorBrands: readonly CreatorBrand[] = [
  {
    id: "videotto-singapore",
    slug: "videotto",
    name: "Videotto.com — Singapore AI Video SaaS Campaign",
    shortName: "Videotto.com (Singapore)",
    clientLocation: "Singapore · Remote UGC Campaign",
    badge: "5.46M+ Verified Views · 10 Reels",
    role: "UGC Tech Creator & AI Product Storyteller",
    period: "May — Jul 2026",
    metric: "5,459,233 Total Views (IG · TikTok · FB)",
    totalViewsSummary: "5,459,233 Views",
    contentCountLabel: "10 Multi-Platform Reels (30 Uploads)",
    summary:
      "Partnered with Singapore-based AI video clipping startup Videotto.com (reported directly to Sujay) to script, shoot, edit, and distribute 10 short-form POV & demo Reels across Instagram, TikTok, and Facebook—driving 5.44M+ Instagram views and 22,500+ organic interactions.",
    overview:
      "Videotto.com is a Singapore-based AI video clipping SaaS platform that automatically turns long-form podcasts, streams, and videos into dozens of viral short-form vertical clips. I was brought on as a UGC Tech Creator to produce a 10-video multi-platform campaign targeting Indonesian content creators, clippers, and digital marketers.",
    challenge:
      "Short-form viewers scroll past traditional software ads in under 2 seconds. The challenge was to demonstrate Videotto’s real AI workflow (generating 28–42 clips from a single podcast without watermarks) using relatable POV hooks that felt native to Instagram Reels, TikTok, and Facebook Reels.",
    execution:
      "I engineered 10 distinct POV hooks, filmed live laptop screen demonstrations of Videotto’s AI clipping dashboard, edited fast-paced vertical videos, and cross-published all 10 Reels across Instagram, TikTok, and Facebook (30 total uploads)—delivering a comprehensive 19-page performance report with raw Meta Insights & TikTok Studio telemetry.",
    image: "/creator/image10.webp",
    secondaryImage: "/creator/image4.webp",
    url: "https://www.instagram.com/reel/DZRLDx-zzTO/",
    accent: "#FF6308",
    hasPlatformSummaryTable: true,
    deliverables: [
      "10 Original Short-Form AI Product Reels (30 cross-platform uploads across IG, TikTok & Facebook)",
      "5,443,039 Instagram Views · 6,419 TikTok Studio Views · 9,775 Facebook Views",
      "Peak single Reel performance: 796,846 views & 9,631 interactions (1,639 comments) on Reel #4",
      "800+ cumulative hours of TikTok watch time with up to 92.4% For You Page (FYP) traffic distribution",
      "Comprehensive 19-page Campaign Performance Report submitted directly to Sujay for bonus calculation",
    ],
    keyMetrics: [
      { label: "Total Campaign Views", value: "5,459,233", sub: "Across IG, TikTok & FB" },
      { label: "Peak Single Reel", value: "796,846", sub: "Reel #04 · 9,631 interactions" },
      { label: "Non-Follower Discovery", value: "98.8%", sub: "Algorithmic organic reach" },
      { label: "Published Deliverables", value: "10 Reels", sub: "30 cross-platform links" },
    ],
    contents: videottoTenReels,
  },
  {
    id: "iil-magna-partners",
    slug: "iil-2026",
    name: "Impact Innovator’s League (IIL 2026) — Magna Partners",
    shortName: "Impact Innovator’s League",
    clientLocation: "Jakarta, Indonesia · Official KOL LoA",
    badge: "Official Signed KOL · Magna Partners",
    role: "Key Opinion Leader (KOL) · @fauzi.noorsyabani",
    period: "Jun — Aug 2026",
    metric: "LoA No. 116/IOC/LOA/NTW/VI/2026",
    totalViewsSummary: "Official KOL Contract",
    contentCountLabel: "Reels · IG Story · Community Broadcast",
    summary:
      "Contracted as an Official Key Opinion Leader (KOL) by Indonesia Organizations Chamber (part of Magna Partners alliance, signed with Growth Marketing Manager Gracella) to lead youth innovation awareness, custom Reels production, Story amplification, and referral lead conversion.",
    overview:
      "Impact Innovator’s League 2026 is a flagship national youth innovation and leadership program organized by Indonesia Organizations Chamber under the Magna Partners strategic alliance. I was officially contracted under Letter of Agreement No. 116/IOC/LOA/NTW/VI/2026 as an individual Key Opinion Leader (KOL).",
    challenge:
      "Reaching ambitious university students, student organizations, and young tech innovators across Indonesia while driving measurable participant registrations tracked via dedicated KOL referral codes.",
    execution:
      "Adapted official campaign briefs into my personal tech-creator voice on @fauzi.noorsyabani, produced dedicated Instagram Reels, amplified announcements via Instagram Story reposts, broadcasted directly to campus & developer communities, and delivered 3×24h post-publication analytics reports.",
    image: "/creator/iil_image3.webp",
    secondaryImage: "/creator/image13.webp",
    url: "https://www.instagram.com/fauzi.noorsyabani/",
    accent: "#B91C1C",
    deliverables: [
      "Signed Letter of Agreement (No. 116/IOC/LOA/NTW/VI/2026) on June 29, 2026 with Gracella (Growth Marketing Manager)",
      "Dedicated Instagram Reels production with custom copywriting tailored to @fauzi.noorsyabani audience",
      "Instagram Story campaign reposts & direct community broadcast to 2+ tech/student networks",
      "Tracked referral code & link conversion funnel + 3×24-hour analytics insight reporting",
    ],
    keyMetrics: [
      { label: "Contract Status", value: "Signed LoA", sub: "No. 116/IOC/LOA/NTW/VI/2026" },
      { label: "Partner Alliance", value: "Magna Partners", sub: "Indonesia Organizations Chamber" },
      { label: "Campaign Duration", value: "2 Months", sub: "Onboarding to final reporting" },
      { label: "Channels", value: "IG Reels + Communities", sub: "@fauzi.noorsyabani" },
    ],
    contents: [
      {
        id: "iil-content-01",
        number: "01",
        title: "Official Letter of Agreement — Key Opinion Leader (KOL) Impact Innovator’s League 2026",
        hook: "Contracted by Indonesia Organizations Chamber (Magna Partners) to lead digital branding, Reels storytelling, and participant acquisition for Impact Innovator’s League 2026.",
        partner: "Indonesia Organizations Chamber × Magna Partners",
        brandSlug: "iil-2026",
        category: "Official KOL Contract",
        date: "Jun 29, 2026",
        durationOrFormat: "LoA No. 116/IOC · 11 Pages",
        totalViews: "Official KOL Campaign",
        igViews: "Reels + Story + Broadcast",
        igInteractions: "Signed with Gracella (Growth Marketing Manager)",
        nonFollowerReach: "Referral conversion & youth community amplification",
        igUrl: "https://www.instagram.com/fauzi.noorsyabani/",
        igProofImage: "/creator/iil_image3.webp",
      },
    ],
  },
  {
    id: "indosat-ddc",
    slug: "indosat-ddc",
    name: "Indosat Ooredoo Hutchison × Dicoding Developer Conference",
    shortName: "Indosat × Dicoding DDC",
    clientLocation: "Bandung, Indonesia · National Tech Conference",
    badge: "1st Place National Winner · 20K+ Reach",
    role: "Featured Technical Case Study Creator",
    period: "Apr 2026",
    metric: "1st Place AI Track · 20,000+ Tech Readers",
    totalViewsSummary: "20,000+ Tech Reach",
    contentCountLabel: "1st Place Case Study Breakdown",
    summary:
      "Won 1st Place Nationwide at Life After DDC Challenge 2026 (supported by Indosat Ooredoo Hutchison, DBS Foundation, IBM SkillsBuild & Kemenparekraf) by turning complex AI retail forecasting architecture into an easy-to-digest visual case study.",
    overview:
      "At Dicoding Developer Conference (DDC) 2026—supported by Indosat Ooredoo Hutchison, DBS Foundation, IBM SkillsBuild, Lintasarta, and Kemenparekraf—I competed in the nationwide 'Life After DDC Challenge' (AI for Cloud Infrastructure & DevOps track).",
    challenge:
      "Translating a deeply technical 900+ hour AI capstone project (PolaStok: hybrid Random Forest + Deep LSTM trained on 913,000+ retail transactions with Google Gemini API integration) into a clear, engaging narrative that resonated with both engineers and non-technical business owners.",
    execution:
      "Designed an architectural storytelling post and visual breakdown demonstrating how our ~530ms in-memory inference pipeline prevents SME dead-stock waste—winning 1st Place Nationwide and reaching 20,000+ technology professionals.",
    image: "/polastok-web.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#E11D48",
    deliverables: [
      "1st Place National Winner — Life After DDC Challenge 2026 (AI for Cloud Infrastructure & DevOps)",
      "Translated 913,000+ retail transaction LSTM + Gemini AI pipeline into public case study content",
      "Reached 20,000+ developers, engineers, and tech decision-makers across Indonesia",
    ],
    keyMetrics: [
      { label: "National Ranking", value: "1st Place", sub: "AI for Cloud Infra & DevOps" },
      { label: "Organic Tech Reach", value: "20,000+", sub: "Developers & engineers" },
      { label: "Dataset Explained", value: "913,000+ Rows", sub: "SMAPE ~17.6% · 530ms latency" },
      { label: "Ecosystem Sponsors", value: "Indosat · IBM · DBS", sub: "Dicoding & Kemenparekraf" },
    ],
    contents: [
      {
        id: "ddc-content-01",
        number: "01",
        title: "How We Built PolaStok: Forecasting 913,000+ Retail Transactions with Hybrid LSTM & Gemini AI",
        hook: "Indonesian SMEs lose millions to dead stock every month. Here is how we turned 913K raw transactions into a 530ms AI restocking assistant—winning 1st Place at DDC 2026.",
        partner: "Dicoding DDC 2026 × Indosat Ooredoo Hutchison",
        brandSlug: "indosat-ddc",
        category: "1st Place Case Study",
        date: "Apr 25, 2026",
        durationOrFormat: "Case Study · 20K+ Reach",
        totalViews: "20,000+ views",
        igViews: "20,000+ impressions",
        igInteractions: "1st Place National Winner",
        nonFollowerReach: "AI for Cloud Infrastructure & DevOps Track",
        igUrl: "https://linkedin.com/in/fauzinoorsyabani",
        igProofImage: "/polastok-web.webp",
        tiktokProofImage: "/certificates/cert-ddc-2026.webp",
      },
    ],
  },
  {
    id: "google-gsa",
    slug: "google-gsa",
    name: "Google Indonesia — Google Student Ambassador Program",
    shortName: "Google Indonesia (GSA)",
    clientLocation: "Indonesia · Developer Relations & Edu",
    badge: "100K+ Impressions · Top 1% Cohort",
    role: "Campus Lead & Tech Content Creator",
    period: "Sep 2025 — Feb 2026",
    metric: "100,000+ Reach · 1,000+ Students Trained",
    totalViewsSummary: "100,000+ Impressions",
    contentCountLabel: "8 Workshops & Digital Media Campaigns",
    summary:
      "Selected from 12,000+ applicants nationwide (Top 1%). Directed a 10-person student creative & event team producing educational Reels, carousels, and hands-on Gemini AI & Vertex AI workshops.",
    overview:
      "Represented Universitas Siliwangi as Campus Lead for the Google Student Ambassador Program (Class of 2025), selected from a competitive nationwide pool of over 12,000 university applicants.",
    challenge:
      "Driving widespread, responsible adoption of Google Gemini AI, Vertex AI, and Google Cloud across non-technical and technical student faculties alike.",
    execution:
      "Built and managed a 10-person campus core team across event operations, curriculum design, and digital media publication—running 8 hands-on technical workshops that trained 1,000+ students and generated 100,000+ social media impressions.",
    image: "/documentation/collab-gsa-summit-01.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#4285F4",
    deliverables: [
      "Selected in the Top 1% nationwide out of 12,000+ student applicants across Indonesia",
      "Led 8 technical workshops & hands-on Generative AI demoruns for 1,000+ university students",
      "Managed a 10-person campus media team generating 100,000+ digital publication impressions",
    ],
    keyMetrics: [
      { label: "Selection Cohort", value: "Top 1%", sub: "Out of 12,000+ applicants" },
      { label: "Digital Impressions", value: "100,000+", sub: "Campus media & Reels" },
      { label: "Students Trained", value: "1,000+", sub: "Across 8 live workshops" },
      { label: "Core Team Led", value: "10 Members", sub: "Creative, ops & curriculum" },
    ],
    contents: [
      {
        id: "gsa-content-01",
        number: "01",
        title: "Google Student Ambassador National Summit & Campus AI Literacy Campaign",
        hook: "Bringing Google Gemini AI and Vertex AI workflows to 1,000+ students through interactive demoruns and short-form educational reels.",
        partner: "Google Indonesia",
        brandSlug: "google-gsa",
        category: "Community & Brand Campaign",
        date: "Sep 2025 — Feb 2026",
        durationOrFormat: "100K+ Impressions",
        totalViews: "100,000+ reach",
        igViews: "100,000+ campaign reach",
        igInteractions: "1,000+ students educated",
        nonFollowerReach: "Top 1% National Cohort",
        igUrl: "https://linkedin.com/in/fauzinoorsyabani",
        igProofImage: "/documentation/collab-gsa-summit-01.webp",
        tiktokProofImage: "/documentation/collab-gsa-workshop.webp",
      },
    ],
  },
  {
    id: "ekraf-bdd",
    slug: "ekraf-bdd",
    name: "Kemenparekraf / Badan Ekraf × Dicoding (#MyBDDInsight)",
    shortName: "Kemenparekraf × Dicoding",
    clientLocation: "Bandung, Indonesia · National Developer Day",
    badge: "1st Place #MyBDDInsight · 44.7K+ Reach",
    role: "National Tech Insight Creator",
    period: "Nov 2025",
    metric: "44,700+ Organic Views · 1st Place",
    totalViewsSummary: "44,700+ Views",
    contentCountLabel: "1st Place Executive AI Synthesis",
    summary:
      "Ranked 1st Nationally at Badan Ekraf Developer Day 2025 for synthesizing executive AI panels (Augmentation vs Automation & Human-in-the-Loop) into high-retention LinkedIn & Instagram editorial content.",
    overview:
      "Badan Ekraf Developer Day (BDD) 2025 in Bandung brought together Indonesia’s Ministry of Creative Economy (Kemenparekraf / Baparekraf), Dicoding Indonesia, and industry CTOs to discuss applied AI in production.",
    challenge:
      "Distilling hours of high-level executive panels on 'Augmentation vs Automation' and 'Human-in-the-Loop AI governance' into a single, scroll-stopping post that educated tens of thousands of developers.",
    execution:
      "Published a structured analytical insight breakdown that won 1st Place Nationwide in the #MyBDDInsight Challenge and organically reached over 44,700 digital talents.",
    image: "/certificates/cert-bdd-ekraf-2025.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#0D9488",
    deliverables: [
      "1st Place National Winner — #MyBDDInsight Challenge (Badan Ekraf Developer Day 2025)",
      "Synthesized executive AI frameworks (Augmentation vs Automation & Human-in-the-Loop)",
      "Generated 44,700+ organic views across Indonesia’s developer ecosystem",
    ],
    keyMetrics: [
      { label: "National Award", value: "1st Place", sub: "#MyBDDInsight Challenge" },
      { label: "Organic Reach", value: "44,700+", sub: "Digital talents & engineers" },
      { label: "Organizers", value: "Kemenparekraf", sub: "Badan Ekraf × Dicoding" },
      { label: "Format", value: "Tech Editorial", sub: "High-retention synthesis" },
    ],
    contents: [
      {
        id: "bdd-content-01",
        number: "01",
        title: "Augmentation vs Automation: Key AI Takeaways from Badan Ekraf Developer Day 2025",
        hook: "How do enterprise engineering teams deploy AI without losing human judgment? Here is the exact Human-in-the-Loop framework that won 1st Place at BDD 2025.",
        partner: "Kemenparekraf / Badan Ekraf × Dicoding",
        brandSlug: "ekraf-bdd",
        category: "1st Place Case Study",
        date: "Nov 22, 2025",
        durationOrFormat: "44.7K+ Views · 1st Place",
        totalViews: "44,700+ views",
        igViews: "44,700+ organic reach",
        igInteractions: "1st Place National Winner",
        nonFollowerReach: "National Developer Ecosystem",
        igUrl: "https://linkedin.com/in/fauzinoorsyabani",
        igProofImage: "/certificates/cert-bdd-ekraf-2025.webp",
      },
    ],
  },
  {
    id: "bank-indonesia",
    slug: "bank-indonesia",
    name: "Bank Indonesia — Bookstagram Digital Literacy Challenge",
    shortName: "Bank Indonesia",
    clientLocation: "Tasikmalaya, Indonesia · Central Bank Literacy",
    badge: "2nd Place Winner · Bookstagram Challenge",
    role: "Digital Literacy Content Creator",
    period: "May 2025",
    metric: "2nd Place Central Bank Literacy Award",
    totalViewsSummary: "2nd Place National/Regional",
    contentCountLabel: "Visual Carousel & Economic Copywriting",
    summary:
      "Awarded 2nd Place in Bank Indonesia's World Book Day Challenge for designing structured visual carousels and compelling copywriting that translated macroeconomic literacy into engaging public social media content.",
    overview:
      "Organized by Kantor Perwakilan Bank Indonesia Tasikmalaya for World Book Day 2025, challenging creators to transform dense economic and literary works into accessible digital media content.",
    challenge:
      "Making macroeconomic policy, central banking literacy, and analytical book reviews visually magnetic for Gen-Z and millennial Instagram audiences.",
    execution:
      "Designed a cohesive visual carousel in Figma/Canva paired with structured analytical copywriting—winning 2nd Place Winner from Bank Indonesia.",
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    url: "https://linkedin.com/in/fauzinoorsyabani",
    accent: "#1D4ED8",
    deliverables: [
      "2nd Place Winner — Bank Indonesia Bookstagram Review Challenge (World Book Day 2025)",
      "End-to-end visual carousel design (Figma/Canva) and structured analytical copywriting",
      "Translated complex economic & digital literacy themes into easy-to-digest social slides",
    ],
    keyMetrics: [
      { label: "Official Rank", value: "2nd Place", sub: "Bank Indonesia Award" },
      { label: "Organizer", value: "Bank Indonesia", sub: "KPw BI Tasikmalaya" },
      { label: "Deliverable", value: "IG Carousel", sub: "Visual design + copywriting" },
      { label: "Theme", value: "Digital Literacy", sub: "World Book Day 2025" },
    ],
    contents: [
      {
        id: "bi-content-01",
        number: "01",
        title: "Visual Book Review: Decoding Digital Economy & Public Literacy for Instagram",
        hook: "Complex economic and analytical books don't have to feel dry. Breaking down key insights into visual bite-sized Instagram slides.",
        partner: "Bank Indonesia (KPw Tasikmalaya)",
        brandSlug: "bank-indonesia",
        category: "2nd Place Visual Carousel",
        date: "May 2025",
        durationOrFormat: "IG Carousel · 2nd Place",
        totalViews: "2nd Place Winner",
        igViews: "Official Bank Indonesia Award",
        igInteractions: "Recognized for analytical copy & design",
        nonFollowerReach: "Public Digital Literacy Campaign",
        igUrl: "https://linkedin.com/in/fauzinoorsyabani",
        igProofImage: "/documentation/achievement-bi-bookgram-juara2.webp",
        tiktokProofImage: "/certificates/cert-bi-bookstagram.webp",
      },
    ],
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
    brandSlug: "videotto",
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
    brandSlug: "iil-2026",
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
    brandSlug: "indosat-ddc",
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
    brandSlug: "google-gsa",
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
    brandSlug: "ekraf-bdd",
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
