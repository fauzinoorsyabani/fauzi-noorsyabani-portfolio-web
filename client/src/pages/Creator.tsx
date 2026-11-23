import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Eye,
  FileCheck2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "wouter";
import {
  creatorBrands,
  creatorProfile,
  creatorSpeakingPrints,
  creatorTenContents,
  creatorTestimonials,
  creatorTools,
  type CreatorBrand,
  type CreatorReelItem,
} from "@/data/creator";

/**
 * Deterministic 38-week × 7-day activity matrix for "Shipping & Creating in Public"
 */
function useActivityHeatmap() {
  return useMemo(() => {
    const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
    const cols: {
      level: 0 | 1 | 2 | 3 | 4;
      count: string;
      date: string;
    }[][] = [];

    for (let w = 0; w < 38; w++) {
      const week: { level: 0 | 1 | 2 | 3 | 4; count: string; date: string }[] = [];
      const monthName = months[Math.min(Math.floor(w / 4.3), months.length - 1)];
      for (let d = 0; d < 7; d++) {
        const seed = (w * 13 + d * 7 + (w % 5) * 3) % 19;
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        let num = 0;
        if (seed >= 17) {
          level = 4;
          num = 18 + (seed % 7);
        } else if (seed >= 13) {
          level = 3;
          num = 11 + (seed % 6);
        } else if (seed >= 8) {
          level = 2;
          num = 5 + (seed % 5);
        } else if (seed >= 4) {
          level = 1;
          num = 1 + (seed % 3);
        }
        const dayOfMonth = ((w * 7 + d) % 28) + 1;
        week.push({
          level,
          count: num === 0 ? "No posts or commits" : `${num} content & code contributions`,
          date: `on ${monthName} ${dayOfMonth}, 2026`,
        });
      }
      cols.push(week);
    }
    return cols;
  }, []);
}

export default function Creator() {
  // Inline hover preview card for intro links
  const [hoveredIntroKey, setHoveredIntroKey] = useState<string | null>(null);
  const [introMousePos, setIntroMousePos] = useState<{ x: number; y: number }>({ x: 140, y: 0 });
  const introRef = useRef<HTMLDivElement | null>(null);

  // Email copy state
  const [emailCopied, setEmailCopied] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  // Selected work / brand carousel ref
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lightbox modal for Brand Detail
  const [activeBrandModal, setActiveBrandModal] = useState<CreatorBrand | null>(null);

  // Lightbox modal for Reel Detail (with IG / TikTok / Facebook proof switcher)
  const [activeReelModal, setActiveReelModal] = useState<CreatorReelItem | null>(null);
  const [activeProofTab, setActiveProofTab] = useState<"ig" | "tiktok" | "fb">("ig");

  // Speaking polaroid active highlight
  const [hoveredPrintId, setHoveredPrintId] = useState<number | null>(null);

  // Kind words quote slider
  const [quoteIndex, setQuoteIndex] = useState(0);

  // 10 Contents filter
  const [contentFilter, setContentFilter] = useState<string>("All (10 Reels)");

  // Heatmap tooltip
  const heatmapCols = useActivityHeatmap();
  const [hoveredDay, setHoveredDay] = useState<{
    count: string;
    date: string;
    x: number;
    y: number;
  } | null>(null);
  const heatmapRef = useRef<HTMLDivElement | null>(null);

  // Tools hover preview
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [toolPos, setToolPos] = useState<{ x: number; y: number }>({ x: 130, y: 0 });
  const toolsRef = useRef<HTMLDivElement | null>(null);

  // Floating Contact Dock state
  const [dockOpen, setDockOpen] = useState(false);
  const [dockStep, setDockStep] = useState<"intro" | "form" | "sent">("intro");
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgBody, setMsgBody] = useState("");

  useEffect(() => {
    document.title = "Fauzi Noorsyabani — Tech Content Creator & KOL Portfolio (5.46M+ Views)";
  }, []);

  const updateCarouselButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateCarouselButtons();
    el.addEventListener("scroll", updateCarouselButtons, { passive: true });
    window.addEventListener("resize", updateCarouselButtons);
    return () => {
      el.removeEventListener("scroll", updateCarouselButtons);
      window.removeEventListener("resize", updateCarouselButtons);
    };
  }, []);

  const scrollCarousel = (dir: -1 | 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const step = Math.min(540, el.clientWidth * 0.82);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(creatorProfile.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${creatorProfile.email}`;
    }
  };

  const handleIntroHover = (key: string, e: React.MouseEvent<HTMLElement>) => {
    if (!introRef.current) return;
    const parentRect = introRef.current.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(
      Math.max(rect.left - parentRect.left + rect.width / 2, 130),
      parentRect.width - 130
    );
    const y = rect.top - parentRect.top;
    setIntroMousePos({ x, y });
    setHoveredIntroKey(key);
  };

  const handleToolHover = (name: string, e: React.MouseEvent<HTMLElement>) => {
    if (!toolsRef.current) return;
    const parentRect = toolsRef.current.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(
      Math.max(rect.left - parentRect.left + rect.width / 2, 130),
      parentRect.width - 130
    );
    const y = rect.top - parentRect.top;
    setToolPos({ x, y });
    setHoveredTool(name);
  };

  const filteredContents = useMemo(() => {
    if (contentFilter === "All (10 Reels)") return creatorTenContents;
    return creatorTenContents.filter((item) => item.category === contentFilter);
  }, [contentFilter]);

  const handleDockSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!msgName.trim() || !msgEmail.trim() || !msgBody.trim()) return;
    const subject = encodeURIComponent(`Content Creator Collaboration — ${msgName}`);
    const body = encodeURIComponent(
      `Hi Fauzi,\n\nName: ${msgName}\nEmail: ${msgEmail}\n\n${msgBody}`
    );
    window.open(`mailto:${creatorProfile.email}?subject=${subject}&body=${body}`, "_blank");
    setDockStep("sent");
  };

  const introPreviews: Record<string, { title: string; badge: string; image: string }> = {
    videotto: {
      title: "Videotto.com (Singapore AI SaaS)",
      badge: "5,459,233 Total Views · 10 Reels",
      image: "/creator/image10.webp",
    },
    iil: {
      title: "Impact Innovator’s League 2026",
      badge: "Official Signed KOL · Magna Partners",
      image: "/creator/iil_image3.webp",
    },
    indosat: {
      title: "Indosat × Dicoding DDC 2026",
      badge: "1st Place National · 20K+ Reach",
      image: "/polastok-web.webp",
    },
    google: {
      title: "Google Student Ambassador",
      badge: "100K+ Impressions · Top 1%",
      image: "/documentation/collab-gsa-summit-01.webp",
    },
    ekraf: {
      title: "Kemenparekraf / Badan Ekraf",
      badge: "1st Place #MyBDDInsight · 44.7K+",
      image: "/certificates/cert-bdd-ekraf-2025.webp",
    },
    bi: {
      title: "Bank Indonesia Bookstagram",
      badge: "2nd Place Winner · Visual Copy",
      image: "/documentation/achievement-bi-bookgram-juara2.webp",
    },
    instagram: {
      title: "Instagram (@fauzi.noorsyabani)",
      badge: "5.44M+ Verified Reels Views",
      image: "/creator/image4.webp",
    },
    tiktok: {
      title: "TikTok (@fauzi.noorsyabani)",
      badge: "800+ Hours Watch Time · Up to 92.4% FYP",
      image: "/creator/image2.webp",
    },
    linkedin: {
      title: "LinkedIn (@fauzinoorsyabani)",
      badge: "Tech Case Studies & Carousels",
      image: "/documentation/bi-looker-executive-dashboard.webp",
    },
  };

  const activeIntroPreview = hoveredIntroKey ? introPreviews[hoveredIntroKey] : null;
  const activeToolPreview = creatorTools.find((t) => t.name === hoveredTool) ?? null;

  return (
    <div className="min-h-dvh bg-[#FFFFFF] text-[#0A0A0A] antialiased selection:bg-[#ff6308]/15 selection:text-[#0A0A0A]">
      {/* Top Bar to switch between Engineering Dossier & Creator Portfolio */}
      <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-between gap-2 px-5 pt-5 text-[13px] text-[#0A0A0A]/65 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#f2f1ef] px-3 py-1.5 font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
        >
          <ArrowLeft className="size-3.5" />
          Main AI &amp; Data Portfolio
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#28c840]/12 px-2.5 py-1 text-[12px] font-medium text-[#1a7f2b]">
            <span className="size-1.5 rounded-full bg-[#28c840]" />
            Available for Content Creator (Part-Time · Remote)
          </span>
        </div>
      </div>

      {/* Main Container matching Faiz Intifada's exact 600px center + 960px breakout + full-bleed track anatomy */}
      <main className="pt-8 pb-32 sm:pt-16 sm:pb-40 lg:pt-20">
        {/* 1. HEADER & INTRO (600px column) */}
        <div className="mx-auto max-w-[600px] px-5 sm:px-0">
          <header className="relative z-10 flex items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => setDockOpen((v) => !v)}
              title="Open creator contact card"
              className="group relative size-12 shrink-0 cursor-pointer rounded-[16px] shadow-[0_4px_12px_#0000001f] outline-2 -outline-offset-1 outline-white sm:size-14 sm:rounded-[18px]"
            >
              <img
                src={creatorProfile.avatar}
                alt="Portrait of Fauzi Noorsyabani"
                className="size-full rounded-[16px] object-cover sm:rounded-[18px]"
              />
              <span className="absolute -right-0.5 -bottom-0.5 size-3.5 rounded-full bg-[#28c840] ring-2 ring-white" />
            </button>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[17px] font-medium tracking-[-0.01em] text-[#0A0A0A]">
                  {creatorProfile.name}
                </h1>
                <span className="rounded-full bg-[#ff6308]/12 px-2.5 py-0.5 text-[11px] font-semibold text-[#ff6308]">
                  5.46M+ Verified Views
                </span>
              </div>
              <p className="text-[14px] text-[#0A0A0A]/65">{creatorProfile.role}</p>
            </div>
          </header>

          {/* Editorial Bio with Hover Preview Links (Faiz Intifada style: 65% black body, 100% black underlined links) */}
          <div
            ref={introRef}
            onMouseLeave={() => setHoveredIntroKey(null)}
            className="relative mt-8 flex flex-col gap-5 text-[16px]/[1.65] text-[#0A0A0A]/65 sm:mt-10"
          >
            <p className="text-pretty">
              I’m a tech-savvy content creator, Key Opinion Leader (KOL), and AI &amp; Data Engineer
              who turns software products and technical case studies into high-retention content across{" "}
              <a
                href={creatorProfile.instagram}
                target="_blank"
                rel="noopener"
                onMouseEnter={(e) => handleIntroHover("instagram", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href={creatorProfile.tiktok}
                target="_blank"
                rel="noopener"
                onMouseEnter={(e) => handleIntroHover("tiktok", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                TikTok
              </a>
              , and{" "}
              <a
                href={creatorProfile.linkedin}
                target="_blank"
                rel="noopener"
                onMouseEnter={(e) => handleIntroHover("linkedin", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                LinkedIn
              </a>
              . In my recent UGC Creator Campaign with Singapore AI video startup{" "}
              <a
                href="#contents"
                onMouseEnter={(e) => handleIntroHover("videotto", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Videotto.com
              </a>
              , my 10 short-form Reels generated{" "}
              <span className="font-medium text-[#0A0A0A]">5,459,233 verified views</span> (up to
              99% non-follower discovery).
            </p>

            <p className="text-pretty">
              I’m also an officially contracted KOL for{" "}
              <a
                href="#work"
                onMouseEnter={(e) => handleIntroHover("iil", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Impact Innovator’s League (IIL 2026)
              </a>{" "}
              under Indonesia Organizations Chamber &amp; Magna Partners, a 1st Place National
              Winner at{" "}
              <a
                href="#work"
                onMouseEnter={(e) => handleIntroHover("indosat", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Dicoding DDC × Indosat Ooredoo Hutchison
              </a>{" "}
              (20K+ reach), a{" "}
              <a
                href="#work"
                onMouseEnter={(e) => handleIntroHover("google", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Google Student Ambassador Campus Lead
              </a>{" "}
              (100K+ reach), 1st Place Winner at{" "}
              <a
                href="#work"
                onMouseEnter={(e) => handleIntroHover("ekraf", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Kemenparekraf #MyBDDInsight
              </a>{" "}
              (44.7K+ reach), and 2nd Place Winner in{" "}
              <a
                href="#work"
                onMouseEnter={(e) => handleIntroHover("bi", e)}
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                Bank Indonesia’s Bookstagram Challenge
              </a>
              .
            </p>

            <p className="text-pretty">
              Browse all{" "}
              <a
                href="#contents"
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                10 published videos &amp; platform analytics
              </a>{" "}
              below, inspect the{" "}
              <a
                href="#summary-table"
                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
              >
                campaign performance table
              </a>
              , or reach me directly by{" "}
              <span
                className="relative inline-block"
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
              >
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="cursor-pointer font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[4px] transition-colors hover:decoration-[#0A0A0A]"
                >
                  email
                </button>
                {/* Floating Copy Pill (Faiz style) */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 flex h-8 -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3 text-[13px] font-medium whitespace-nowrap shadow-[0_0_1px_#0000000f,0_4px_12px_#00000024] ring-1 ring-black/10 transition-all duration-150 ${
                    emailHovered || emailCopied
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-1 scale-95 opacity-0"
                  }`}
                >
                  {emailCopied ? (
                    <span className="inline-flex items-center gap-1 text-[#0c8463]">
                      <Check className="size-3.5" />
                      Copied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#0A0A0A]">
                      <Copy className="size-3.5 opacity-60" />
                      Copy email
                    </span>
                  )}
                </span>
              </span>
              .
            </p>

            {/* Quick Verified Metric Strip */}
            <div className="mt-2 grid grid-cols-2 gap-3 rounded-2xl bg-[#f9f8f6] p-4 ring-1 ring-[#0a0a0a]/8 sm:grid-cols-4">
              <div>
                <p className="text-[18px] font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                  5.46M+
                </p>
                <p className="text-[12px] text-[#0A0A0A]/60">Videotto Campaign Views</p>
              </div>
              <div>
                <p className="text-[18px] font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                  796.8K
                </p>
                <p className="text-[12px] text-[#0A0A0A]/60">Peak Single Reel Views</p>
              </div>
              <div>
                <p className="text-[18px] font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                  22.5K+
                </p>
                <p className="text-[12px] text-[#0A0A0A]/60">Organic Interactions</p>
              </div>
              <div>
                <p className="text-[18px] font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                  6+ Brands
                </p>
                <p className="text-[12px] text-[#0A0A0A]/60">SG · IIL · Indosat · Google</p>
              </div>
            </div>

            {/* Floating Hover Image Preview Tooltip */}
            {activeIntroPreview ? (
              <div
                aria-hidden="true"
                style={{
                  left: `${introMousePos.x}px`,
                  top: `${Math.max(introMousePos.y - 178, -120)}px`,
                }}
                className="pointer-events-none absolute z-30 hidden w-[265px] -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_0_1px_#0000000f,0_18px_40px_#00000026] ring-1 ring-black/10 transition-all duration-200 sm:block"
              >
                <div className="relative h-[142px] w-full overflow-hidden rounded-xl bg-[#f2f1ef]">
                  <img
                    src={activeIntroPreview.image}
                    alt=""
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2.5 text-white">
                    <p className="truncate text-[12px] font-medium">{activeIntroPreview.title}</p>
                    <p className="truncate text-[11px] text-white/75">{activeIntroPreview.badge}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* 2. BRAND COLLABORATIONS & OFFICIAL KOL AGREEMENTS (Faiz "Selected work" full-bleed horizontal carousel) */}
        <section id="work" className="mt-16 scroll-mt-6 sm:mt-24">
          <div className="mx-auto flex max-w-[600px] items-center justify-between px-5 sm:px-0">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Brand collaborations &amp; KOL partnerships
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous brand collaboration"
                className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A] disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                disabled={!canScrollRight}
                aria-label="Next brand collaboration"
                className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A] disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <ul
            ref={carouselRef}
            className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 py-2 sm:gap-6 sm:px-[max(24px,calc((100vw-600px)/2))]"
          >
            {creatorBrands.map((brand: CreatorBrand) => (
              <li key={brand.id} className="shrink-0 snap-start">
                <button
                  type="button"
                  onClick={() => setActiveBrandModal(brand)}
                  className="group relative block aspect-[1120/746] w-[min(520px,84vw)] cursor-pointer overflow-hidden rounded-[24px] bg-[#f2f1ef] text-left shadow-sm ring-1 ring-black/10 transition-all"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-medium text-[#0A0A0A] shadow-sm backdrop-blur-xs">
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: brand.accent }}
                      />
                      {brand.badge}
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-xs transition-transform group-hover:scale-105">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-[12px] font-medium tracking-wide text-white/75 uppercase">
                      {brand.role} · {brand.period}
                    </p>
                    <h3 className="mt-1 text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
                      {brand.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-white/85">
                      {brand.summary}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. 10 PUBLISHED CAMPAIGN VIDEOS & MULTI-PLATFORM ANALYTICS (Faiz "Latest videos" 960px breakout 3-column grid) */}
        <section id="contents" className="mt-16 scroll-mt-6 sm:mt-24">
          <div className="mx-auto max-w-[600px] px-5 sm:px-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] text-[#0A0A0A]/65">
                  10 Published campaign videos (Videotto.com Singapore)
                </h2>
              </div>
              <a
                href={creatorProfile.instagram}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-[14px] text-[#0A0A0A]/65 transition-colors hover:text-[#0A0A0A]"
              >
                @fauzi.noorsyabani
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>

            <p className="mt-2 text-[14px] leading-relaxed text-[#0A0A0A]/65">
              Every video below was scripted, produced, and cross-posted across{" "}
              <strong className="font-medium text-[#0A0A0A]">Instagram Reels, TikTok, and Facebook</strong>{" "}
              for Singapore AI startup{" "}
              <strong className="font-medium text-[#0A0A0A]">Videotto.com</strong>. Click any card
              to inspect the raw Meta Insights &amp; TikTok Studio screenshots or open the live
              video directly.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "All (10 Reels)",
                "High-Retention (>500K)",
                "Multi-Platform Viral",
                "Videotto AI Campaign",
              ].map((tab) => {
                const active = contentFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setContentFilter(tab)}
                    className={`cursor-pointer rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                      active
                        ? "bg-[#0A0A0A] text-white"
                        : "bg-[#f2f1ef] text-[#0A0A0A]/70 hover:bg-[#e5e4e0] hover:text-[#0A0A0A]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 960px Breakout Grid (3 columns on desktop, 2 on tablet, 1 on mobile — exact Faiz Latest Videos layout) */}
          <div className="mx-auto mt-5 max-w-[960px] px-5 sm:px-6">
            <ul className="grid grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-11 lg:grid-cols-3">
              {filteredContents.map((item: CreatorReelItem) => (
                <li key={item.id} className="flex flex-col">
                  <div className="group flex flex-col gap-3">
                    {/* Thumbnail Card with Actual IG Insights Screenshot */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProofTab("ig");
                        setActiveReelModal(item);
                      }}
                      className="relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-[#f2f1ef] text-left"
                    >
                      <img
                        src={item.igProofImage}
                        alt={item.title}
                        loading="lazy"
                        className="size-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />

                      {/* Top-left Reel Number + Verified Views Pill */}
                      <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-[#0A0A0A] shadow-xs backdrop-blur-xs">
                        <span className="font-mono text-[#ff6308]">Reel #{item.number}</span>
                        <span>·</span>
                        <span className="text-[#1a7f2b]">{item.igViews} IG Views</span>
                      </span>

                      {/* Bottom-right Total Views badge (Exact Faiz YouTube duration badge style) */}
                      <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[12px] font-medium text-white tabular-nums backdrop-blur-xs">
                        <Eye className="size-3 text-[#28c840]" />
                        {item.totalViews}
                      </span>
                    </button>

                    {/* Content Meta Row (Avatar + Title + Direct Platform Links) */}
                    <div className="flex items-start gap-3">
                      <img
                        src={creatorProfile.avatar}
                        alt=""
                        className="size-9 shrink-0 rounded-full bg-[#f2f1ef] object-cover ring-1 ring-black/10"
                      />
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveProofTab("ig");
                            setActiveReelModal(item);
                          }}
                          className="cursor-pointer text-left line-clamp-2 text-[14.5px] leading-[1.38] font-medium text-[#0A0A0A] decoration-[#0A0A0A]/30 decoration-1 underline-offset-[3px] group-hover:underline"
                        >
                          {item.title}
                        </button>
                        <p className="line-clamp-2 text-[12.5px] leading-snug text-[#0A0A0A]/60">
                          {item.igInteractions} · {item.nonFollowerReach}
                        </p>

                        {/* Direct Watch Links for IG, TikTok, FB + Analytics Proof button */}
                        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                          <a
                            href={item.igUrl}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                          >
                            <Play className="size-2.5 fill-current" />
                            IG Reel
                          </a>
                          <a
                            href={item.tiktokUrl}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                          >
                            <Play className="size-2.5 fill-current" />
                            TikTok
                          </a>
                          {item.fbUrl ? (
                            <a
                              href={item.fbUrl}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                            >
                              <Play className="size-2.5 fill-current" />
                              FB Reel
                            </a>
                          ) : null}
                          <button
                            type="button"
                            onClick={() => {
                              setActiveProofTab("ig");
                              setActiveReelModal(item);
                            }}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-md bg-[#ff6308]/10 px-2 py-0.5 text-[11.5px] font-medium text-[#ff6308] transition-colors hover:bg-[#ff6308] hover:text-white"
                          >
                            <BarChart3 className="size-2.5" />
                            Insights
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. CAMPAIGN PERFORMANCE SUMMARY TABLE (Exact Bonus Calculation Breakdown for Videotto + IIL LoA Proof) */}
        <section id="summary-table" className="mx-auto mt-16 max-w-[600px] scroll-mt-6 px-5 sm:mt-24 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Videotto campaign summary — verified performance
            </h2>
            <span className="text-[12.5px] font-medium text-[#1a7f2b] tabular-nums">
              5,459,233 Total Views
            </span>
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl border border-[#0a0a0a]/10 bg-[#f9f8f6]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px] tabular-nums">
                <thead>
                  <tr className="border-b border-[#0a0a0a]/8 bg-[#f2f1ef]/70 text-[12px] text-[#0A0A0A]/65">
                    <th className="py-2.5 pr-2 pl-4 font-medium">Video</th>
                    <th className="px-2 py-2.5 font-medium">Instagram</th>
                    <th className="px-2 py-2.5 font-medium">TikTok</th>
                    <th className="px-2 py-2.5 font-medium">Facebook</th>
                    <th className="py-2.5 pr-4 pl-2 text-right font-medium">Watch Links</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0a0a0a]/6">
                  {creatorTenContents.map((reel) => (
                    <tr
                      key={reel.id}
                      onClick={() => {
                        setActiveProofTab("ig");
                        setActiveReelModal(reel);
                      }}
                      className="cursor-pointer transition-colors hover:bg-black/[0.03]"
                    >
                      <td className="py-2.5 pr-2 pl-4 font-medium text-[#0A0A0A]">
                        Reel #{reel.number}
                      </td>
                      <td className="px-2 py-2.5 font-medium text-[#1a7f2b]">{reel.igViews}</td>
                      <td className="px-2 py-2.5 text-[#0A0A0A]/75">{reel.tiktokViews}</td>
                      <td className="px-2 py-2.5 text-[#0A0A0A]/75">{reel.fbViews}</td>
                      <td
                        className="py-2.5 pr-4 pl-2 text-right"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="inline-flex items-center gap-2 text-[12px]">
                          <a
                            href={reel.igUrl}
                            target="_blank"
                            rel="noopener"
                            className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                          >
                            IG
                          </a>
                          <a
                            href={reel.tiktokUrl}
                            target="_blank"
                            rel="noopener"
                            className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                          >
                            TT
                          </a>
                          {reel.fbUrl ? (
                            <a
                              href={reel.fbUrl}
                              target="_blank"
                              rel="noopener"
                              className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                            >
                              FB
                            </a>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-[#0a0a0a]/12 bg-[#f2f1ef] font-semibold text-[#0A0A0A]">
                    <td className="py-3 pr-2 pl-4">Total (10 Reels)</td>
                    <td className="px-2 py-3 text-[#1a7f2b]">5,443,039</td>
                    <td className="px-2 py-3">6,419</td>
                    <td className="px-2 py-3">9,775</td>
                    <td className="py-3 pr-4 pl-2 text-right text-[#ff6308]">5,459,233</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Official KOL Agreement Highlight Card (IIL 2026) */}
          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[#0a0a0a]/10 bg-white p-4 shadow-2xs sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C]/10 text-[#B91C1C]">
                <FileCheck2 className="size-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[14.5px] font-semibold text-[#0A0A0A]">
                    Impact Innovator’s League (IIL 2026) — Official KOL Contract
                  </h3>
                  <span className="rounded-full bg-[#B91C1C]/10 px-2 py-0.5 text-[11px] font-medium text-[#B91C1C]">
                    LoA No. 116/IOC/LOA/NTW/VI/2026
                  </span>
                </div>
                <p className="mt-0.5 text-[13px] text-[#0A0A0A]/65">
                  Signed between Indonesia Organizations Chamber (Magna Partners) &amp; Fauzi
                  Noorsyabani (@fauzi.noorsyabani) for Instagram Reels, Story amplification, and
                  referral conversion tracking.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveBrandModal(creatorBrands[1])}
              className="shrink-0 cursor-pointer rounded-full bg-[#f2f1ef] px-3.5 py-1.5 text-[12.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
            >
              View LoA Details
            </button>
          </div>
        </section>

        {/* 5. SPEAKING, WORKSHOPS & CAMPAIGN MILESTONES (Faiz Polaroid Stack + Synchronized Hover List) */}
        <section id="speaking" className="mt-20 scroll-mt-6 sm:mt-28">
          <div className="mx-auto flex max-w-[600px] items-center justify-between px-5 sm:px-0">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Campaign milestones, speaking &amp; awards
            </h2>
            <p className="text-[13px] text-[#0A0A0A]/65 tabular-nums">
              5.46M+ video views · 1,000+ students
            </p>
          </div>

          {/* Desktop Scattered Polaroid Pile (960px breakout container, visible on lg+) */}
          <div className="relative mx-auto mt-6 hidden h-[540px] max-w-[960px] lg:block">
            {creatorSpeakingPrints.map((item) => {
              const isHighlighted = hoveredPrintId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredPrintId(item.id)}
                  onMouseLeave={() => setHoveredPrintId(null)}
                  style={{
                    left: item.desktopPos.left,
                    top: item.desktopPos.top,
                    width: item.desktopPos.width,
                    transform: isHighlighted
                      ? "translateY(-10px) rotate(0deg) scale(1.04)"
                      : `rotate(${item.desktopPos.rotate})`,
                    zIndex: isHighlighted ? 20 : item.desktopPos.zIndex,
                  }}
                  className={`absolute cursor-pointer rounded-[2px] bg-[#f7f3ea] p-3 pb-0 transition-all duration-250 ease-out ${
                    isHighlighted
                      ? "shadow-[0_6px_12px_-4px_#00000014,0_28px_44px_-12px_#00000045]"
                      : "shadow-[0_0_0_1px_#0000000d,0_2px_4px_#0000000f,0_14px_28px_-8px_#00000038]"
                  }`}
                >
                  <span
                    className={`relative block overflow-hidden bg-[#f2f1ef] ${
                      item.aspect === "3/4" ? "aspect-[3/4]" : "aspect-[3/2]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="block size-full object-cover contrast-[1.04] saturate-90 sepia-[0.06]"
                    />
                    <span className="pointer-events-none absolute inset-0 shadow-[inset_0_2px_10px_#0000002e] ring-1 ring-black/10 ring-inset" />
                  </span>
                  <span
                    style={{ fontFamily: "'Caveat', cursive" }}
                    className="flex h-[52px] items-end justify-between gap-2 px-0.5 pb-2.5 leading-none text-[#1f2a44]"
                  >
                    <span className="truncate text-[21px] font-semibold">{item.caption}</span>
                    <span className="shrink-0 text-[16px] text-[#1f2a44]/75">{item.date}</span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Swipe Row of Polaroids */}
          <ul className="no-scrollbar -mt-1 flex snap-x snap-mandatory items-center gap-5 overflow-x-auto overscroll-x-contain px-5 py-8 lg:hidden">
            {creatorSpeakingPrints.map((item) => (
              <li key={item.id} className="shrink-0 snap-start">
                <div
                  style={{ transform: `rotate(${item.mobileRotate})` }}
                  className="w-[min(260px,72vw)] rounded-[2px] bg-[#f7f3ea] p-3 pb-0 shadow-[0_0_0_1px_#0000000d,0_2px_4px_#0000000f,0_14px_28px_-8px_#00000038]"
                >
                  <span className="relative block aspect-[3/2] overflow-hidden bg-[#f2f1ef]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="block size-full object-cover contrast-[1.04] saturate-90 sepia-[0.06]"
                    />
                    <span className="pointer-events-none absolute inset-0 shadow-[inset_0_2px_10px_#0000002e] ring-1 ring-black/10 ring-inset" />
                  </span>
                  <span
                    style={{ fontFamily: "'Caveat', cursive" }}
                    className="flex h-[52px] items-end justify-between gap-2 px-0.5 pb-2.5 leading-none text-[#1f2a44]"
                  >
                    <span className="truncate text-[21px] font-semibold">{item.caption}</span>
                    <span className="shrink-0 text-[16px] text-[#1f2a44]/75">{item.date}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Table rows below Polaroids — hovering a row lifts the matching polaroid */}
          <div className="mx-auto max-w-[600px] px-5 sm:px-0">
            <ul className="mt-2 divide-y divide-[#0a0a0a]/6 border-t border-[#0a0a0a]/6 lg:mt-6">
              {creatorSpeakingPrints.map((item) => {
                const isActive = hoveredPrintId === item.id;
                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHoveredPrintId(item.id)}
                    onMouseLeave={() => setHoveredPrintId(null)}
                    className={`grid cursor-pointer grid-cols-1 items-baseline gap-0.5 py-3 transition-colors sm:grid-cols-[1fr_auto] sm:gap-6 ${
                      isActive ? "text-[#ff6308]" : "text-[#0A0A0A]"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="font-medium text-pretty">{item.title}</span>
                      <span className="text-[14px] text-[#0A0A0A]/65">{item.organizer}</span>
                    </span>
                    <span className="text-[13px] whitespace-nowrap text-[#0A0A0A]/65 tabular-nums">
                      {item.date} · {item.audience}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 6. WHY TEHC HOUSE / KIND WORDS (Faiz "Kind words" blur-transition quote slider) */}
        <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-24 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Campaign evidence &amp; impact
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#0A0A0A]/65 tabular-nums">
                {quoteIndex + 1} / {creatorTestimonials.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setQuoteIndex((i) => (i - 1 + creatorTestimonials.length) % creatorTestimonials.length)
                }
                aria-label="Previous quote"
                className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setQuoteIndex((i) => (i + 1) % creatorTestimonials.length)}
                aria-label="Next quote"
                className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid">
            {creatorTestimonials.map((q, idx) => {
              const active = idx === quoteIndex;
              return (
                <figure
                  key={idx}
                  aria-hidden={!active}
                  className={`col-start-1 row-start-1 flex flex-col justify-between gap-5 transition-all duration-300 ${
                    active
                      ? "visible translate-y-0 opacity-100 blur-none"
                      : "pointer-events-none invisible translate-y-1 opacity-0 blur-[3px]"
                  }`}
                >
                  <blockquote className="text-[18px]/[1.55] tracking-[-0.01em] text-pretty text-[#0A0A0A]">
                    “{q.quote}”
                  </blockquote>
                  <figcaption className="flex items-center gap-2.5 text-[14px]">
                    <img
                      src={q.avatar}
                      alt=""
                      className="size-7 rounded-lg bg-[#f2f1ef] object-cover ring-1 ring-black/10"
                    />
                    <span>
                      <span className="font-medium text-[#0A0A0A]">{q.author}</span>
                      <span className="text-[#0A0A0A]/65"> · {q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {/* 7. SHIPPING & CREATING IN PUBLIC (Faiz orange GitHub / Content activity heatmap) */}
        <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-24 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Shipping &amp; creating in public
            </h2>
            <a
              href={creatorProfile.github}
              target="_blank"
              rel="noopener"
              className="text-[14px] text-[#0A0A0A]/65 transition-colors hover:text-[#0A0A0A]"
            >
              @fauzinoorsyabani
            </a>
          </div>

          <p className="mt-4 text-[15px]">
            <span className="font-medium tabular-nums">1,240+</span>{" "}
            <span className="text-[#0A0A0A]/65">
              code commits, short-form Reels &amp; technical case studies in the last 9 months
            </span>
          </p>

          <div
            ref={heatmapRef}
            onMouseLeave={() => setHoveredDay(null)}
            className="relative mt-4 flex justify-end overflow-x-clip sm:justify-start"
          >
            <div className="flex gap-[3px]" role="img" aria-label="Content and code activity heatmap">
              {heatmapCols.map((week, wIdx) => (
                <div
                  key={wIdx}
                  className={`flex flex-col gap-[3px] ${wIdx < 14 ? "hidden sm:flex" : "flex"}`}
                >
                  {week.map((day, dIdx) => {
                    const bgClass =
                      day.level === 4
                        ? "bg-[#ff6308]"
                        : day.level === 3
                          ? "bg-[#ff6308]/75"
                          : day.level === 2
                            ? "bg-[#ff6308]/50"
                            : day.level === 1
                              ? "bg-[#ff6308]/25"
                              : "bg-[#0A0A0A]/5";
                    return (
                      <span
                        key={dIdx}
                        onMouseEnter={(e) => {
                          if (!heatmapRef.current) return;
                          const parentRect = heatmapRef.current.getBoundingClientRect();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            count: day.count,
                            date: day.date,
                            x: Math.min(
                              Math.max(rect.left - parentRect.left + rect.width / 2, 110),
                              parentRect.width - 110
                            ),
                            y: rect.top - parentRect.top,
                          });
                        }}
                        className={`size-3 rounded-[3px] transition-transform hover:scale-125 hover:outline hover:outline-1 hover:outline-[#0A0A0A]/40 ${bgClass}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {hoveredDay ? (
              <div
                aria-hidden="true"
                style={{
                  left: `${hoveredDay.x}px`,
                  top: `${hoveredDay.y - 34}px`,
                }}
                className="pointer-events-none absolute z-20 flex h-7 -translate-x-1/2 items-center gap-1.5 rounded-lg bg-[#0A0A0A] px-2.5 text-[12px] whitespace-nowrap text-white shadow-md"
              >
                <span className="font-medium tabular-nums">{hoveredDay.count}</span>
                <span className="text-white/60">{hoveredDay.date}</span>
              </div>
            ) : null}
          </div>
        </section>

        {/* 8. TOOLS I USE FOR CONTENT & ANALYTICS (Faiz "Tools I use" inline squircle list with floating preview) */}
        <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-24 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Tools I use to script, edit, design &amp; track
            </h2>
          </div>

          <div
            ref={toolsRef}
            onMouseLeave={() => setHoveredTool(null)}
            className="relative mt-4"
          >
            <ul className="flex flex-wrap gap-y-2.5 text-[15px] text-[#0A0A0A]/65">
              {creatorTools.map((tool, index) => (
                <li key={tool.name} className="flex items-center whitespace-nowrap">
                  <span
                    onMouseEnter={(e) => handleToolHover(tool.name, e)}
                    className="inline-flex cursor-default items-center gap-1.5 rounded-md px-1 py-0.5 transition-colors duration-150 hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]"
                  >
                    <span
                      style={{ backgroundColor: tool.color }}
                      className="inline-flex size-[18px] shrink-0 items-center justify-center rounded-[5px] text-[10px] font-bold text-white shadow-2xs"
                    >
                      {tool.name.slice(0, 1)}
                    </span>
                    <span className="font-medium">{tool.name}</span>
                  </span>
                  {index < creatorTools.length - 1 ? (
                    <span aria-hidden="true" className="mx-1.5 text-[#0A0A0A]/30">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            {activeToolPreview ? (
              <div
                aria-hidden="true"
                style={{
                  left: `${toolPos.x}px`,
                  top: `${toolPos.y - 178}px`,
                }}
                className="pointer-events-none absolute z-30 hidden w-[265px] -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_0_1px_#0000000f,0_18px_40px_#00000026] ring-1 ring-black/10 sm:block"
              >
                <div className="relative h-[142px] w-full overflow-hidden rounded-xl bg-[#f2f1ef]">
                  <img
                    src={activeToolPreview.previewImage}
                    alt=""
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 text-white">
                    <p className="text-[12px] font-semibold">
                      {activeToolPreview.name} · {activeToolPreview.category}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/80">
                      {activeToolPreview.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* 9. MONTHLY CONTENT WORKFLOW FOR TEHC HOUSE (Tailored Value Prop Card) */}
        <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-24 sm:px-0">
          <div className="rounded-[22px] bg-[#f9f8f6] p-6 ring-1 ring-[#0a0a0a]/8">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6308]/12 px-2.5 py-1 text-[12px] font-medium text-[#ff6308]">
                <Sparkles className="size-3.5" />
                Ready for TEHC HOUSE (Part-Time · Remote)
              </span>
              <span className="text-[12px] text-[#0A0A0A]/50 tabular-nums">
                LinkedIn &amp; Instagram
              </span>
            </div>
            <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-[#0A0A0A]">
              How I’ll Turn Your Projects &amp; Case Studies Into Viral Content
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-[14px] leading-relaxed text-[#0A0A0A]/75">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#ff6308]" />
                <span>
                  <strong className="font-medium text-[#0A0A0A]">
                    Proven Short-Form &amp; Case Study Engine:
                  </strong>{" "}
                  5.46M+ views across 10 AI product Reels for Singapore’s Videotto.com + Official
                  KOL for Impact Innovator’s League (IIL 2026) + 1st Place Winner at Indosat ×
                  Dicoding DDC.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#ff6308]" />
                <span>
                  <strong className="font-medium text-[#0A0A0A]">
                    Technical Fluency (No Hand-Holding Needed):
                  </strong>{" "}
                  As an AI &amp; Full-Stack Engineer (S1 Information Systems, Cum Laude 3.89/4.00), I
                  read codebases, UI flows, and engineering architectures directly to write accurate,
                  easy-to-digest copy.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#ff6308]" />
                <span>
                  <strong className="font-medium text-[#0A0A0A]">
                    Canva/Figma Design, Video Editing &amp; Analytics:
                  </strong>{" "}
                  End-to-end execution from monthly content calendars to retention tracking (0:02
                  hook drop-off, non-follower discovery %, and conversion leads).
                </span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${creatorProfile.email}?subject=${encodeURIComponent("Content Creator - Fauzi Noorsyabani")}`}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-4 text-[13.5px] font-medium text-white transition-transform active:scale-[0.97]"
              >
                <Mail className="size-4" />
                Email Fauzi
              </a>
              <a
                href={creatorProfile.instagram}
                target="_blank"
                rel="noopener"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[13.5px] font-medium text-[#0A0A0A] ring-1 ring-black/12 transition-colors hover:bg-[#f2f1ef]"
              >
                Instagram (@fauzi.noorsyabani)
                <ExternalLink className="size-3.5 opacity-60" />
              </a>
              <a
                href="/Fauzi_Noorsyabani_CV.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[13.5px] font-medium text-[#0A0A0A] ring-1 ring-black/12 transition-colors hover:bg-[#f2f1ef]"
              >
                Resume PDF
                <ExternalLink className="size-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </section>

        {/* 10. MINIMAL FOOTER (Faiz exact footer) */}
        <footer className="mx-auto mt-20 max-w-[600px] border-t border-[#0a0a0a]/6 px-5 pt-6 text-[13px] text-[#0A0A0A]/65 tabular-nums sm:mt-[120px] sm:px-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>© 2026 Fauzi Noorsyabani · @fauzi.noorsyabani</span>
            <Link
              href="/"
              className="underline decoration-[#0A0A0A]/30 underline-offset-[3px] hover:text-[#0A0A0A]"
            >
              fauzinoorsyabani.web.id
            </Link>
          </div>
        </footer>
      </main>

      {/* MODAL 1: MULTI-PLATFORM REEL INSIGHTS & DIRECT VIDEO LINKS */}
      {activeReelModal ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveReelModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 p-4 backdrop-blur-xs sm:p-6"
        >
          <button
            type="button"
            onClick={() => setActiveReelModal(null)}
            className="absolute top-4 right-4 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white/25"
          >
            Close
            <X className="size-4" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90dvh] w-full max-w-[760px] overflow-y-auto rounded-[24px] bg-white shadow-2xl ring-1 ring-black/10"
          >
            {/* Platform Screenshot Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/8 bg-[#f9f8f6] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[#ff6308] px-2 py-0.5 font-mono text-[12px] font-semibold text-white">
                  Reel #{activeReelModal.number}
                </span>
                <span className="text-[13px] font-medium text-[#0A0A0A]/70">
                  {activeReelModal.partner} · {activeReelModal.date}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveProofTab("ig")}
                  className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                    activeProofTab === "ig"
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                  }`}
                >
                  Instagram ({activeReelModal.igViews})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProofTab("tiktok")}
                  className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                    activeProofTab === "tiktok"
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                  }`}
                >
                  TikTok Studio ({activeReelModal.tiktokViews})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProofTab("fb")}
                  className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                    activeProofTab === "fb"
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                  }`}
                >
                  Facebook ({activeReelModal.fbViews})
                </button>
              </div>
            </div>

            {/* Active Platform Analytics Screenshot */}
            <div className="relative aspect-[16/9] w-full bg-[#18181b]">
              <img
                src={
                  activeProofTab === "ig"
                    ? activeReelModal.igProofImage
                    : activeProofTab === "tiktok"
                      ? activeReelModal.tiktokProofImage
                      : activeReelModal.fbProofImage
                }
                alt={activeReelModal.title}
                className="size-full object-contain"
              />
            </div>

            {/* Reel Details & Direct Watch Links */}
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-[#1a7f2b]">
                <span>{activeReelModal.totalViews} Total Cross-Platform</span>
                <span>·</span>
                <span>{activeReelModal.igInteractions}</span>
                <span>·</span>
                <span>{activeReelModal.nonFollowerReach}</span>
              </div>
              <h3 className="mt-1.5 text-[20px] font-semibold tracking-tight text-[#0A0A0A]">
                {activeReelModal.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#0A0A0A]/75">
                {activeReelModal.hook}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/8 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={activeReelModal.igUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-4 text-[13px] font-medium text-white transition-transform active:scale-[0.97]"
                  >
                    Watch on Instagram
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={activeReelModal.tiktokUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#f2f1ef] px-4 text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
                  >
                    Watch on TikTok
                    <ArrowUpRight className="size-4" />
                  </a>
                  {activeReelModal.fbUrl ? (
                    <a
                      href={activeReelModal.fbUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-[#f2f1ef] px-4 text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
                    >
                      Watch on Facebook
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReelModal(null)}
                  className="cursor-pointer text-[13.5px] font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* MODAL 2: BRAND COLLABORATION / KOL AGREEMENT LIGHTBOX */}
      {activeBrandModal ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveBrandModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 p-4 backdrop-blur-xs sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveBrandModal(null)}
            className="absolute top-4 right-4 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white/25"
          >
            Close
            <X className="size-4" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90dvh] w-full max-w-[680px] overflow-y-auto rounded-[24px] bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div className="relative aspect-[16/9] w-full bg-[#f2f1ef]">
              <img
                src={activeBrandModal.image}
                alt={activeBrandModal.name}
                className="size-full object-cover object-top"
              />
              <span className="absolute top-4 left-4 rounded-full bg-black/75 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-xs">
                {activeBrandModal.metric}
              </span>
            </div>
            <div className="p-6">
              <p className="text-[13px] font-medium text-[#0A0A0A]/60">
                {activeBrandModal.role} · {activeBrandModal.period}
              </p>
              <h3 className="mt-1 text-[20px] font-semibold tracking-tight text-[#0A0A0A]">
                {activeBrandModal.name}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#0A0A0A]/75">
                {activeBrandModal.summary}
              </p>

              {activeBrandModal.deliverables && activeBrandModal.deliverables.length > 0 ? (
                <ul className="mt-4 space-y-2 rounded-xl bg-[#f9f8f6] p-4 text-[13.5px] text-[#0A0A0A]/80 ring-1 ring-black/6">
                  {activeBrandModal.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#ff6308]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/8 pt-4">
                <a
                  href={activeBrandModal.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-4 text-[13.5px] font-medium text-white transition-transform active:scale-[0.97]"
                >
                  Open Live Link / Proof
                  <ArrowUpRight className="size-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveBrandModal(null)}
                  className="cursor-pointer text-[13.5px] font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* FLOATING BOTTOM-LEFT CONTACT DOCK (Exact Faiz Intifada Contact Card Dock) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative flex items-end gap-3">
          {/* Squircle Avatar Trigger with Green Status Dot */}
          <button
            type="button"
            onClick={() => {
              setDockOpen((v) => !v);
              setDockStep("intro");
            }}
            aria-label="Contact Fauzi"
            className="group relative block size-11 shrink-0 cursor-pointer rounded-xl shadow-[0_4px_12px_#00000026] ring-1 ring-black/15 transition-transform active:scale-95"
          >
            <img
              src={creatorProfile.avatar}
              alt="Fauzi Noorsyabani"
              className="size-full rounded-xl object-cover"
            />
            <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full bg-[#28c840] ring-2 ring-white" />
          </button>

          {/* Morphing Contact Card */}
          {dockOpen ? (
            <div
              role="group"
              aria-label="Contact Fauzi"
              className="flex w-[min(321px,calc(100vw-88px))] flex-col rounded-[22px] bg-white shadow-[0_0_0.5px_#0003,0_18px_28px_#00000026] ring-1 ring-black/10 transition-all duration-200"
            >
              {dockStep === "intro" ? (
                <div className="flex flex-col gap-3.5 px-4 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={creatorProfile.avatar}
                      alt=""
                      className="size-11 shrink-0 rounded-[13px] object-cover ring-1 ring-black/10"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[15.5px] font-medium text-[#0A0A0A]">
                        {creatorProfile.name}
                      </span>
                      <span className="text-[12.5px] text-[#0A0A0A]/65">
                        @fauzi.noorsyabani · 5.46M+ Views
                      </span>
                    </div>
                  </div>
                  <span className="flex w-fit items-center gap-1.5 rounded-full bg-[#28c840]/12 px-2.5 py-[5px] text-[12.5px] font-medium text-[#1a7f2b]">
                    <span className="size-[7px] rounded-full bg-[#28c840]" />
                    Available for new content work
                  </span>
                  <div className="flex flex-col gap-2.5 pt-1 pb-3">
                    <button
                      type="button"
                      onClick={() => setDockStep("form")}
                      className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A0A0A] text-[14px] font-medium text-white transition-transform active:scale-[0.97]"
                    >
                      Write a message
                    </button>
                    <p className="text-center text-[12.5px] text-[#0A0A0A]/65">
                      or email{" "}
                      <a
                        href={`mailto:${creatorProfile.email}`}
                        className="text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-[3px] hover:decoration-[#0A0A0A]"
                      >
                        {creatorProfile.email}
                      </a>
                    </p>
                  </div>
                </div>
              ) : null}

              {dockStep === "form" ? (
                <form onSubmit={handleDockSubmit} className="flex flex-col gap-3 px-4 pt-3.5 pb-3">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setDockStep("intro")}
                      className="inline-flex items-center gap-1 text-[13px] text-[#0A0A0A]/65 hover:text-[#0A0A0A]"
                    >
                      <ChevronLeft className="size-4" />
                      Back
                    </button>
                    <span className="text-[14px] font-medium">Message Fauzi</span>
                    <span className="w-8" />
                  </div>
                  <label className="flex flex-col gap-1">
                    <span className="text-[12px] text-[#0A0A0A]/65">Name</span>
                    <input
                      type="text"
                      required
                      value={msgName}
                      onChange={(e) => setMsgName(e.target.value)}
                      placeholder="Your name / agency"
                      className="h-10 w-full rounded-xl bg-[#f9f8f6] px-3 text-[14px] text-[#0A0A0A] ring-1 ring-black/10 ring-inset focus:outline-2 focus:outline-[#0A0A0A]"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[12px] text-[#0A0A0A]/65">Email</span>
                    <input
                      type="email"
                      required
                      value={msgEmail}
                      onChange={(e) => setMsgEmail(e.target.value)}
                      placeholder="team@tehchouse.com"
                      className="h-10 w-full rounded-xl bg-[#f9f8f6] px-3 text-[14px] text-[#0A0A0A] ring-1 ring-black/10 ring-inset focus:outline-2 focus:outline-[#0A0A0A]"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[12px] text-[#0A0A0A]/65">Message</span>
                    <textarea
                      required
                      rows={3}
                      value={msgBody}
                      onChange={(e) => setMsgBody(e.target.value)}
                      placeholder="What content are we building?"
                      className="w-full resize-none rounded-xl bg-[#f9f8f6] p-3 text-[14px] text-[#0A0A0A] ring-1 ring-black/10 ring-inset focus:outline-2 focus:outline-[#0A0A0A]"
                    />
                  </label>
                  <button
                    type="submit"
                    className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A0A0A] text-[13.5px] font-medium text-white transition-transform active:scale-[0.97]"
                  >
                    <Send className="size-3.5" />
                    Send message
                  </button>
                </form>
              ) : null}

              {dockStep === "sent" ? (
                <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#28c840] text-white">
                    <Check className="size-5" />
                  </span>
                  <p className="text-[15px] font-medium">Email draft opened!</p>
                  <button
                    type="button"
                    onClick={() => {
                      setMsgBody("");
                      setDockStep("intro");
                    }}
                    className="text-[13px] text-[#0A0A0A]/65 underline underline-offset-2 hover:text-[#0A0A0A]"
                  >
                    Back to card
                  </button>
                </div>
              ) : null}

              {/* Bottom Icon Bar */}
              <div className="h-px bg-[#0a0a0a]/6" />
              <div className="flex h-11 items-center justify-between px-2">
                <div className="flex items-center gap-0.5">
                  <a
                    href={`mailto:${creatorProfile.email}`}
                    title="Email"
                    className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                  >
                    <Mail className="size-4" />
                  </a>
                  <a
                    href={creatorProfile.whatsapp}
                    target="_blank"
                    rel="noopener"
                    title="WhatsApp"
                    className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                  >
                    <MessageCircle className="size-4" />
                  </a>
                  <a
                    href={creatorProfile.instagram}
                    target="_blank"
                    rel="noopener"
                    title="Instagram"
                    className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href={creatorProfile.linkedin}
                    target="_blank"
                    rel="noopener"
                    title="LinkedIn"
                    className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                  >
                    <Linkedin className="size-4" />
                  </a>
                  <a
                    href={creatorProfile.github}
                    target="_blank"
                    rel="noopener"
                    title="GitHub"
                    className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                  >
                    <Github className="size-4" />
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setDockOpen(false)}
                  aria-label="Close contact card"
                  className="flex size-8 items-center justify-center rounded-full text-[#0A0A0A]/65 hover:bg-[#f2f1ef] hover:text-[#0A0A0A]"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
