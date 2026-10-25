/**
 * Signal Ledger home page — Clean, minimalist, and professional design.
 * Neutral white & black palette, crisp typography, and uncropped high-fidelity project evidence.
 */
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Pause,
  Play,
  Send,
  Sparkles,
  Sun,
  Moon,
  UsersRound,
  X,
  Maximize2,
} from "lucide-react";
import {
  assetUrls,
  awards,
  certifications,
  experience,
  facts,
  featuredProjects,
  focusAreas,
  links,
  otherProjects,
  person,
  skillGroups,
  techStackCategories,
} from "@/data/portfolio";
import { documentationItems, type DocumentationItem } from "@/data/documentation";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { TechIcon } from "@/components/TechIcon";
import { CertificateCoverflow } from "@/components/CertificateCoverflow";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

type FormFields = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

function MediumIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function useCountUp(end: number, enabled: boolean, reducedMotion: boolean) {
  const [value, setValue] = useState(reducedMotion ? end : 0);

  useEffect(() => {
    if (reducedMotion || !enabled) {
      setValue(reducedMotion ? end : 0);
      return;
    }
    let frameId = 0;
    const duration = 880;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(end * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [enabled, end, reducedMotion]);

  return value;
}

function FormattedText({ text, className = "" }: { text?: string; className?: string }) {
  if (!text) return null;
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={index} className="not-italic italic font-medium text-neutral-950 dark:text-white">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      })}
    </span>
  );
}

function SectionHeading({
  index,
  kicker,
  title,
  copy,
}: {
  index: string;
  kicker: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="section-heading grid gap-6 border-t border-neutral-300 pt-6 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-10">
      <div className="dossier-rail mono-type text-xs font-semibold tracking-[0.15em] text-neutral-900">
        <div className="flex items-center gap-2">
          <span>{index}</span>
          <span className="h-px w-5 bg-neutral-900" />
        </div>
        <div className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-md border border-neutral-300 bg-white shadow-xs">
          <img src={assetUrls.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" width={40} height={40} className="h-10 w-10 object-contain" />
          <i className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-neutral-900" />
        </div>
        <span className="dossier-node mt-2 block h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
      </div>
      <div className="section-heading-copy">
        <p className="section-kicker">{kicker}</p>
        <h2 className="display-type mt-4 max-w-3xl text-2xl font-bold leading-[1.12] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {copy ? <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">{copy}</p> : null}
      </div>
    </div>
  );
}

function PendingAction({
  label,
  onPending,
  className = "",
}: {
  label: string;
  onPending: (message: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onPending(`${label} is ready to link when the URL is added in client/src/data/portfolio.ts.`)}
      className={className}
    >
      {label}
      <span className="ml-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] opacity-60">pending</span>
    </button>
  );
}

function SignalStream({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const signals = [
    "DATA WAREHOUSE & STAR SCHEMA ARCHITECTURE",
    "BNSP CERTIFIED DATA SCIENTIST",
    "MACHINE LEARNING & SEISMIC RISK PREDICTION",
    "LLM INTEGRATION & RAG PIPELINE ORCHESTRATION",
    "BUSINESS INTELLIGENCE & LOOKER STUDIO",
    "BNSP CERTIFIED ICT PROJECT MANAGER",
    "FULL STACK AI & DATA ENGINEERING",
    "ETL / ELT PIPELINES & DECISION SUPPORT SYSTEMS",
  ];
  const track = [...signals, ...signals];
  return (
    <div aria-hidden="true" className={`signal-stream signal-stream--${tone} ${className}`}>
      <div className="signal-stream-track">
        {track.map((signal, index) => (
          <span key={`${signal}-${index}`} className="signal-stream-token">
            <i className="signal-stream-node" />
            {signal}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function SignalOrbit({ className = "", reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <div aria-hidden="true" className={`signal-orbit ${reverse ? "signal-orbit--reverse" : ""} ${className}`}>
      <span className="signal-orbit-ring signal-orbit-ring--outer" />
      <span className="signal-orbit-ring signal-orbit-ring--inner" />
      <span className="signal-orbit-rotation">
        <i className="signal-orbit-node" />
        <i className="signal-orbit-marker" />
      </span>
      <span className="signal-orbit-core">
        <img src={assetUrls.logo} alt="" className="h-8 w-8 opacity-70" />
      </span>
    </div>
  );
}

function ProjectEvidence({ index, category }: { index: number; category: string }) {
  const evidenceMode = (["forecast", "clinical", "route", "field"] as const)[index % 4] ?? "forecast";
  const evidenceLabels = {
    forecast: "cost / trend trace",
    clinical: "transcription workflow",
    route: "route / interaction map",
    field: "field / projection grid",
  } as const;
  const signalHeights = [36, 54, 30, 65, 48, 76, 60, 92];
  return (
    <figure
      className="project-evidence relative h-48 overflow-hidden border-b border-neutral-200 bg-neutral-50 data-grid"
      data-evidence={evidenceMode}
      aria-label={`Analytical evidence panel for ${category}`}
    >
      <div className="absolute left-5 top-4 flex items-center gap-2 mono-type text-[0.57rem] font-semibold uppercase tracking-[0.12em] text-neutral-600">
        <span className="project-evidence-mark flex h-5 w-5 items-center justify-center rounded border border-neutral-300 bg-white">
          <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-4 w-4" />
        </span>
        {category} / {evidenceLabels[evidenceMode]} / 0{index + 1}
      </div>
      <span className="evidence-scan" aria-hidden="true" />
      {evidenceMode === "forecast" ? (
        <>
          <div className="absolute bottom-5 left-6 right-6 flex h-24 items-end gap-2 border-b border-neutral-300" aria-hidden="true">
            {signalHeights.map((height, barIndex) => (
              <span
                key={barIndex}
                style={{ height: `${height}%` }}
                className={`evidence-bar w-full ${barIndex === 5 ? "bg-neutral-950" : "bg-neutral-400"}`}
              />
            ))}
          </div>
          <span className="evidence-line absolute bottom-[2.6rem] left-7 right-7 h-px origin-left rotate-[-18deg] bg-neutral-900" aria-hidden="true" />
          <span className="evidence-node absolute bottom-[5.2rem] right-[24%] h-2.5 w-2.5 rounded-full border-2 border-neutral-50 bg-neutral-950" aria-hidden="true" />
        </>
      ) : null}
      {evidenceMode === "clinical" ? (
        <div className="absolute inset-x-7 bottom-7 top-12 border border-neutral-300 bg-white/70 p-4" aria-hidden="true">
          <div className="h-2 w-20 bg-neutral-900" />
          <div className="mt-3 grid grid-cols-[1fr_3rem_1fr] items-center gap-2">
            <div className="border border-neutral-300 p-2">
              <span className="block h-1.5 w-3/4 bg-neutral-300" />
              <span className="mt-2 block h-1.5 w-full bg-neutral-200" />
              <span className="mt-1 block h-1.5 w-2/3 bg-neutral-200" />
            </div>
            <div className="relative h-px bg-neutral-600">
              <i className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-white bg-neutral-950" />
            </div>
            <div className="border border-neutral-400 p-2">
              <span className="block h-1.5 w-full bg-neutral-800" />
              <span className="mt-2 block h-1.5 w-4/5 bg-neutral-300" />
              <span className="mt-1 block h-1.5 w-2/5 bg-neutral-200" />
            </div>
          </div>
          <p className="mt-3 mono-type text-[0.52rem] font-semibold tracking-[0.09em] text-neutral-600">
            INPUT → AI SKILL → CLINICAL NOTE
          </p>
        </div>
      ) : null}
      {evidenceMode === "route" ? (
        <div className="absolute inset-x-7 bottom-7 top-12 overflow-hidden border border-neutral-300 bg-neutral-100" aria-hidden="true">
          <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M18 93 C77 99 88 27 145 55 S206 100 294 20" stroke="#0a0a0a" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="18" cy="93" r="5" fill="#0a0a0a" />
            <circle cx="294" cy="20" r="7" fill="#0a0a0a" stroke="white" strokeWidth="3" />
          </svg>
          <p className="absolute bottom-3 left-4 mono-type text-[0.52rem] font-semibold tracking-[0.09em] text-neutral-700">
            INTERACTION PATH / BOOKING FLOW
          </p>
        </div>
      ) : null}
      {evidenceMode === "field" ? (
        <div className="absolute inset-x-7 bottom-7 top-12 overflow-hidden border border-neutral-300 bg-neutral-100" aria-hidden="true">
          <div className="absolute inset-x-0 bottom-0 top-8 grid grid-cols-5 gap-px">
            <span className="bg-neutral-300" />
            <span className="bg-neutral-400" />
            <span className="bg-neutral-500" />
            <span className="bg-neutral-400" />
            <span className="bg-neutral-300" />
          </div>
          <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M14 98 L78 88 L132 76 L182 80 L234 48 L306 22" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="234" cy="48" r="7" fill="#0a0a0a" stroke="white" strokeWidth="3" />
          </svg>
          <div className="absolute left-4 top-4 border-l border-neutral-500 pl-2 mono-type text-[0.52rem] font-semibold tracking-[0.09em] text-neutral-700">
            CROP / PRICE / PROJECTION
          </div>
        </div>
      ) : null}
    </figure>
  );
}

function UKFlagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <defs>
        <clipPath id="uk-flag-circle">
          <circle cx="30" cy="30" r="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-flag-circle)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0 0L60 60M60 0L0 60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M0 0L60 60M60 0L0 60" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v60M0 30h60" stroke="#FFFFFF" strokeWidth="16" />
        <path d="M30 0v60M0 30h60" stroke="#C8102E" strokeWidth="10" />
      </g>
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IndonesiaFlagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <defs>
        <clipPath id="id-flag-circle">
          <circle cx="30" cy="30" r="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#id-flag-circle)">
        <rect y="0" width="60" height="30" fill="#E70011" />
        <rect y="30" width="60" height="30" fill="#FFFFFF" />
      </g>
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function DocumentationShowcase({
  language,
  prefersReducedMotion,
}: {
  language: "en" | "id";
  prefersReducedMotion: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<DocumentationItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const t = translations[language];

  // Duplicate items for infinite seamless scroll
  const streamItems = useMemo(() => [...documentationItems, ...documentationItems], []);

  // Drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
      trackRef.current.style.cursor = "grabbing";
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "";
      trackRef.current.style.cursor = "grab";
    }
  };

  // Touch drag support
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].pageX;
    touchScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const dx = touchStartX.current - e.touches[0].pageX;
    trackRef.current.scrollLeft = touchScrollLeft.current + dx;
  };

  const onTouchEnd = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "";
  };

  return (
    <section
      id="documentation"
      className="scroll-mt-28 bg-neutral-50/60 border-b border-neutral-300 py-16 sm:py-20 text-neutral-950 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl lg:max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-8 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-300 pb-6">
          <div>
            <SectionHeading
              index="03.5"
              kicker={t.documentation.kicker}
              title={t.documentation.title}
              copy={t.documentation.copy}
            />
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (trackRef.current) {
                  trackRef.current.scrollBy({ left: -300, behavior: "smooth" });
                }
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-800 shadow-xs hover:bg-neutral-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (trackRef.current) {
                  trackRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-800 shadow-xs hover:bg-neutral-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2.5 mono-type text-[0.6rem] text-neutral-500 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          {t.documentation.autoSlideHint}
        </p>
      </div>

      {/* Auto-sliding track — drag to scroll, no pause on hover */}
      <div
        ref={trackRef}
        className={`doc-stream-container doc-stream-track py-3 cursor-grab select-none overflow-x-auto scrollbar-none ${prefersReducedMotion ? "is-paused" : ""}`}
        tabIndex={0}
        aria-label="Auto-sliding documentation cards carousel"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {streamItems.map((item, idx) => (
          <article
            key={`${item.id}-${idx}`}
            onClick={() => !isDragging.current && setSelectedItem(item)}
            className="group relative flex w-[240px] sm:w-[290px] flex-col overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xs hover:shadow-xl hover:border-neutral-950 transition-all duration-300 shrink-0 cursor-pointer text-left"
          >
            {/* Image Preview Box */}
            <div className="relative h-36 sm:h-40 w-full overflow-hidden border-b border-neutral-300 bg-neutral-100 flex items-center justify-center p-2">
              <img
                src={item.image}
                alt={item.title[language]}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="max-h-full max-w-full object-contain rounded transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute top-2 left-2">
                <span className="mono-type rounded border border-neutral-300 bg-white/95 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-neutral-900 shadow-2xs backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 bg-white/95 text-neutral-950 shadow-xs">
                  <Maximize2 className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-3.5 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="mono-type text-[0.55rem] font-bold uppercase tracking-[0.12em] text-neutral-500">
                  {item.category[language]}
                </span>
                <span className="mono-type text-[0.55rem] font-medium text-neutral-400">
                  {item.date}
                </span>
              </div>
              <h4 className="display-type mt-1.5 text-sm font-bold text-neutral-950 leading-snug line-clamp-2 group-hover:text-black">
                {item.title[language]}
              </h4>
              <p className="mt-1.5 text-[0.72rem] leading-relaxed text-neutral-600 line-clamp-2 flex-1">
                {item.description[language]}
              </p>
              <div className="mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between">
                <span className="mono-type text-[0.57rem] font-bold text-neutral-900 group-hover:underline inline-flex items-center gap-1">
                  {t.documentation.inspectBtn} <ExternalLink className="h-2.5 w-2.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Dialog Modal */}
      {selectedItem ? (
        <Dialog open={Boolean(selectedItem)} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-4xl border border-neutral-400 bg-white p-6 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="mono-type rounded border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  {selectedItem.tag}
                </span>
                <span className="mono-type text-[0.62rem] font-semibold text-neutral-500">
                  {selectedItem.category[language]} · {selectedItem.date}
                </span>
              </div>
              <DialogTitle className="display-type text-2xl font-bold text-neutral-950 dark:text-white leading-tight">
                {selectedItem.title[language]}
              </DialogTitle>
              <DialogDescription className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
                {selectedItem.description[language]}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex max-h-[65vh] w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-300 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950">
              <img
                src={selectedItem.image}
                alt={selectedItem.title[language]}
                className="max-h-[60vh] w-auto max-w-full rounded object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-3 dark:border-neutral-800">
              <a
                href={selectedItem.image}
                target="_blank"
                rel="noreferrer"
                className="mono-type inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:underline dark:text-neutral-100"
              >
                {language === "en" ? "Open Full File" : "Buka Berkas Asli"} <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-lg border border-neutral-300 bg-white px-4 py-1.5 text-xs font-bold text-neutral-900 shadow-xs hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {language === "en" ? "Close" : "Tutup"}
              </button>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </section>
  );
}

const heroRoles = [
  {
    title: "Full Stack AI Engineer",
    sub: {
      en: "Applied AI & Data Products",
      id: "Produk AI Terapan & Sistem Data",
    },
  },
  {
    title: "Data Analyst",
    sub: {
      en: "BI & Institutional Analytics",
      id: "Kecerdasan Bisnis & Analitik Data",
    },
  },
  {
    title: "Business Analyst",
    sub: {
      en: "System Strategy & Decision Support",
      id: "Strategi Sistem & Solusi Bisnis",
    },
  },
  {
    title: "IT Project Manager",
    sub: {
      en: "BNSP Certified & Agile Delivery",
      id: "Tersertifikasi BNSP & Tata Kelola Proyek",
    },
  },
] as const;

function HeroRoleTicker({
  language,
  prefersReducedMotion,
}: {
  language: "en" | "id";
  prefersReducedMotion: boolean;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string>(heroRoles[0].title);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = heroRoles[roleIndex];
  const fullTitle = currentRole.title;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(fullTitle);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < fullTitle.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullTitle.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === fullTitle.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2300);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullTitle.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullTitle, prefersReducedMotion]);

  return (
    <div className="hero-sequence hero-sequence--4 mt-7 flex h-10 items-center gap-2.5 sm:gap-3 text-neutral-900 dark:text-neutral-100 overflow-hidden whitespace-nowrap">
      <span className="h-px w-6 sm:w-10 bg-neutral-900 dark:bg-white shrink-0" aria-hidden="true" />
      <div className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-3.5 sm:px-4 py-1.5 text-white shadow-sm dark:bg-white dark:text-neutral-950 border border-neutral-800 dark:border-white/20 shrink-0">
        <Sparkles className="h-3.5 w-3.5 text-blue-400 dark:text-blue-600 shrink-0" />
        <span className="mono-type text-[0.78rem] sm:text-[0.88rem] md:text-[0.95rem] font-bold uppercase tracking-[0.08em] sm:tracking-[0.1em] inline-flex items-center">
          {displayedText}
          <span
            className="inline-block w-0.5 h-3.5 sm:h-4 ml-1 bg-blue-500 dark:bg-blue-600 animate-pulse shrink-0"
            aria-hidden="true"
          />
        </span>
      </div>
      <div className="hidden md:inline-flex items-center gap-2 min-w-0 overflow-hidden">
        <span className="text-neutral-400 dark:text-neutral-600 font-normal select-none shrink-0 text-xs">/</span>
        <span className="mono-type text-[0.72rem] md:text-[0.76rem] font-medium italic text-neutral-600 dark:text-neutral-400 tracking-[0.03em] truncate max-w-[260px] transition-opacity duration-300">
          {currentRole.sub[language]}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navItems = t.nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>("all");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [form, setForm] = useState<FormFields>({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [heroReady, setHeroReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // Looker Studio Dashboard views selector for the featured project
  const [dashboardView, setDashboardView] = useState<"executive" | "detail" | "trend">("executive");

  const dashboardViews = {
    executive: {
      src: assetUrls.dashboardExecutive,
      title: t.projects.views.executive.title,
      desc: t.projects.views.executive.desc,
    },
    detail: {
      src: assetUrls.dashboardDetail,
      title: t.projects.views.detail.title,
      desc: t.projects.views.detail.desc,
    },
    trend: {
      src: assetUrls.dashboardTrend,
      title: t.projects.views.trend.title,
      desc: t.projects.views.trend.desc,
    },
  } as const;

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroReady(true), 60);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(([, id]) => id);
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          setScrolled(sy > 24);
          setShowTop(sy > 700);

          // Detect active section on scroll
          const isBottom =
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

          if (isBottom) {
            setActiveSection(sectionIds[sectionIds.length - 1] || "contact");
          } else {
            const threshold = Math.min(window.innerHeight * 0.35, 260);
            let current = sectionIds[0] || "about";
            for (const id of sectionIds) {
              const el = document.getElementById(id);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= threshold) {
                  current = id;
                }
              }
            }
            setActiveSection(current);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const closeMenu = () => setMenuOpen(false);
  const handleThemeToggle = () => {
    if (!toggleTheme) return;
    if (prefersReducedMotion) {
      toggleTheme();
      return;
    }
    document.documentElement.classList.remove("theme-transitioning");
    void document.documentElement.offsetWidth;
    document.documentElement.classList.add("theme-transitioning");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), 720);
    toggleTheme();
  };
  const notifyPending = (message: string) => {
    setAnnouncement(message);
    window.setTimeout(() => setAnnouncement(""), 5200);
  };
  const scrollTo = (id: string) => {
    setActiveSection(id);
    setHoveredNav(null);
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    closeMenu();
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: FormErrors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
    if (!form.subject.trim()) errors.subject = "Please add a subject.";
    if (!form.message.trim()) errors.message = "Please add a message.";
    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setFormState("success");
    setAnnouncement("Your email client will open with the message prepared for Fauzi.");
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="theme-root min-h-screen overflow-x-hidden bg-white text-neutral-950">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-neutral-950 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {/* Floating Pill Top Navigation — Apple Liquid Glass */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`nav-surface apple-glass-pill pointer-events-auto flex w-full max-w-4xl lg:max-w-[1000px] items-center justify-between rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 ${
            scrolled ? "is-scrolled" : ""
          }`}
        >
          {/* Logo & Identity */}
          <button
            onClick={() => scrollTo("top")}
            type="button"
            aria-label="Go to top of Fauzi Noorsyabani portfolio"
            className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white pr-2"
          >
            <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/50 shadow-xs dark:border-white/10 dark:bg-white/10 backdrop-blur-md">
              <img
                src={assetUrls.logo}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                width={28}
                height={28}
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <i className="absolute bottom-0.5 right-0.5 h-2 w-2 rounded-full border border-white bg-emerald-500 shadow-[0_0_6px_#10b981]" />
            </span>
            <span className="mono-type grid text-left text-[0.6rem] sm:text-[0.62rem] font-bold leading-[1.15] tracking-[0.14em] text-neutral-950 dark:text-white">
              <span>FAUZI</span>
              <span className="text-[0.52rem] text-neutral-500 dark:text-neutral-400">NOORSYABANI</span>
            </span>
          </button>

          {/* Desktop Nav Links in pill container with dynamic gliding active background pill */}
          <nav
            aria-label="Primary"
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden items-center gap-1 rounded-full bg-neutral-900/[0.04] p-1 dark:bg-white/[0.08] lg:flex border border-neutral-900/[0.05] dark:border-white/10 backdrop-blur-md"
          >
            {navItems.map(([label, id]) => {
              const isHighlighted = (hoveredNav ?? activeSection) === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setHoveredNav(id)}
                  type="button"
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                    isHighlighted
                      ? "text-white dark:text-neutral-950"
                      : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 z-0 rounded-full bg-neutral-950 shadow-xs dark:bg-white"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Switcher: ICON ONLY (UK 🇬🇧 / Indonesia 🇮🇩) */}
            <button
              onClick={toggleLanguage}
              type="button"
              aria-label={language === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
              title={language === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
              className="apple-glass-subtle group relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-neutral-700 transition hover:scale-105 active:scale-95 dark:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              {language === "en" ? (
                <UKFlagIcon className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-200 group-hover:scale-110" />
              ) : (
                <IndonesiaFlagIcon className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-200 group-hover:scale-110" />
              )}
            </button>

            <button
              onClick={handleThemeToggle}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="apple-glass-subtle theme-toggle group relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <Sun
                className={`absolute h-4 w-4 transition duration-300 ${
                  theme === "dark" ? "translate-y-2 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
                }`}
              />
              <Moon
                className={`absolute h-4 w-4 transition duration-300 ${
                  theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-2 -rotate-90 opacity-0"
                }`}
              />
            </button>
            <button
              onClick={() => setContactOpen(true)}
              type="button"
              className="hidden sm:flex items-center gap-1.5 rounded-full bg-neutral-950 px-3.5 sm:px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-neutral-800 active:scale-[0.97] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              {t.header.contactBtn} <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              type="button"
              className="apple-glass-subtle rounded-full p-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 lg:hidden"
            >
              <span className="sr-only">{menuOpen ? "Close" : "Open"} navigation menu</span>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Floating Mobile Navigation Dropdown */}
        <div
          id="mobile-navigation"
          className={`apple-glass-pill pointer-events-auto mt-2 w-full max-w-4xl lg:max-w-[1000px] overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[85vh] opacity-100 p-4" : "max-h-0 opacity-0 p-0 border-transparent pointer-events-none"
          }`}
        >
          <nav aria-label="Mobile" className="mx-auto px-1 py-1">
            <div className="mb-4 grid grid-cols-2 gap-2">
              <button
                onClick={handleThemeToggle}
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="flex items-center justify-between rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs font-bold text-neutral-900 shadow-xs dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              >
                <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
              <button
                onClick={toggleLanguage}
                type="button"
                aria-label={language === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
                className="flex items-center justify-between rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs font-bold text-neutral-900 shadow-xs dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              >
                <span>{language === "en" ? "English" : "Indonesia"}</span>
                {language === "en" ? <UKFlagIcon className="h-4.5 w-4.5" /> : <IndonesiaFlagIcon className="h-4.5 w-4.5" />}
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  type="button"
                  className={`mobile-nav-link flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    activeSection === id
                      ? "border-neutral-900 bg-neutral-950 text-white font-bold shadow-xs dark:border-white dark:bg-white dark:text-neutral-950"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-200"
                  }`}
                >
                  {label}
                  <ChevronRight className={`h-4 w-4 ${activeSection === id ? "text-white dark:text-neutral-950" : "text-neutral-400"}`} />
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setContactOpen(true);
                closeMenu();
              }}
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-3.5 text-xs font-bold text-white shadow-xs transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950"
            >
              {t.header.contactBtn} Fauzi <ArrowUpRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section — Clean, Rich Atmospheric Gradient & Editorial Typography */}
        <section
          id="top"
          className={`hero-stage relative isolate overflow-hidden bg-white border-b border-neutral-300 pt-24 sm:pt-32 text-neutral-950 ${
            heroReady && !prefersReducedMotion ? "motion-ready" : ""
          }`}
        >
          <div className="absolute inset-0 data-grid opacity-50 pointer-events-none" aria-hidden="true" />
          {/* Luminous dynamic ambient gradients — visible depth in both light and dark modes */}
          <div className="hero-ambient-glow pointer-events-none absolute -right-20 top-16 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-80" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-28 top-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-sky-200/35 via-indigo-100/30 to-transparent blur-3xl opacity-60 hero-aura" aria-hidden="true" />
          <img
            src={assetUrls.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={288}
            height={288}
            className="hero-identity-stamp pointer-events-none absolute right-[8%] top-[12%] z-0 hidden h-72 w-72 object-contain opacity-[0.05] lg:block"
          />

          <div className="relative mx-auto grid max-w-4xl lg:max-w-[1000px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:px-8 lg:py-16">
            <div className="flex flex-col justify-center pt-4 lg:pt-0">
              <div className="hero-sequence hero-sequence--1 open-to-work-glow relative flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/60 px-3.5 py-1.5 mono-type text-[0.64rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] text-emerald-950 dark:text-emerald-200">
                <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </span>
                <span className="relative z-10 font-bold">{t.hero.availability}</span>
              </div>
              <p className="hero-sequence hero-sequence--2 mt-8 display-type text-xl font-medium tracking-[-0.035em] text-neutral-600 sm:text-2xl">
                {t.hero.greeting}
              </p>
              <h1 className="hero-sequence hero-sequence--3 display-type mt-1 max-w-3xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold leading-[1.0] tracking-[-0.05em] text-neutral-950">
                Fauzi<br />
                <span className="text-neutral-950">Noorsyabani.</span>
              </h1>
              <HeroRoleTicker language={language} prefersReducedMotion={prefersReducedMotion} />
              <p className="hero-sequence hero-sequence--5 mt-7 max-w-xl text-base leading-8 text-neutral-700 sm:text-lg">
                <FormattedText text={t.hero.headline} />
              </p>
              <p className="hero-sequence hero-sequence--5 mt-5 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <Sparkles className="h-4 w-4 text-neutral-950" /> {person.education}
              </p>
              <div className="hero-sequence hero-sequence--6 mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
                {links.resume ? (
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white shadow-xs transition hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                  >
                    {language === "en" ? "View CV" : "Lihat CV"} <FileText className="h-4 w-4" />
                  </a>
                ) : (
                  <PendingAction
                    label={language === "en" ? "View CV" : "Lihat CV"}
                    onPending={notifyPending}
                    className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800 active:scale-[0.97]"
                  />
                )}
                <button
                  onClick={() => scrollTo("projects")}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-900 shadow-xs transition hover:border-neutral-900 hover:bg-neutral-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  {t.hero.exploreBtn} <ArrowDown className="h-4 w-4" />
                </button>
              </div>
              {/* Social Channels — Placed in close proximity to CTA buttons */}
              <div className="hero-sequence hero-sequence--7 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-medium text-neutral-700">
                {links.linkedin ? (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <Linkedin className="h-4 w-4 text-neutral-900" /> LinkedIn
                  </a>
                ) : null}
                {links.github ? (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <Github className="h-4 w-4 text-neutral-900" /> GitHub
                  </a>
                ) : (
                  <PendingAction
                    label="GitHub"
                    onPending={notifyPending}
                    className="inline-flex items-center gap-1.5 text-neutral-700 transition hover:text-black"
                  />
                )}
                <a
                  href={links.email}
                  className="inline-flex items-center gap-1.5 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <Mail className="h-4 w-4 text-neutral-900" /> Email
                </a>
                <a
                  href={links.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <MediumIcon className="h-4 w-4 text-neutral-900" /> Medium
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-4 lg:py-0">
              {!prefersReducedMotion ? (
                <SignalOrbit className="hero-orbit absolute -right-6 top-1/2 z-0 hidden h-[26rem] w-[26rem] -translate-y-1/2 lg:block opacity-40" />
              ) : null}
              <div className="relative">
                <div
                  className="hero-frame absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 h-full w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100/70 dark:bg-neutral-800/50"
                  aria-hidden="true"
                />
                <img
                  src={assetUrls.heroPhoto}
                  alt="Portrait of Fauzi Noorsyabani"
                  fetchPriority="high"
                  decoding="async"
                  className="hero-portrait relative z-10 h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] lg:h-[370px] lg:w-[370px] rounded-2xl border border-neutral-300 dark:border-neutral-700 object-cover object-center shadow-lg shadow-neutral-900/10"
                />
                <div className="hero-artifact absolute right-2.5 top-2.5 z-20 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 px-2.5 py-1 mono-type text-[0.58rem] font-bold uppercase tracking-[0.12em] text-neutral-900 dark:text-neutral-100 shadow-sm backdrop-blur-md">
                  Data & AI · 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Marquee Strip — Enclosed Box with Crisp Top & Bottom Borders */}
        {!prefersReducedMotion ? (
          <aside
            aria-label="Core Data & AI Capabilities Ticker"
            className="w-full border-y border-neutral-400 bg-neutral-100/90 py-3.5 shadow-2xs backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/90"
          >
            <SignalStream tone="dark" className="w-full" />
          </aside>
        ) : null}

        {/* Section 01: About */}
        <section id="about" className="scroll-mt-28 bg-neutral-50/50 border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="01"
              kicker={t.about.kicker}
              title={t.about.title}
            />
            <div className="mt-14 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
              <div className="portrait-dossier relative overflow-hidden rounded-[1.4rem] border border-neutral-300 bg-white p-6 signal-shadow sm:p-9">
                <div className="absolute right-5 top-5 z-10 mono-type text-[0.58rem] font-semibold tracking-[0.13em] text-neutral-500">
                  {t.about.fieldPortrait}
                </div>
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 mono-type text-[0.54rem] font-bold tracking-[0.12em] text-neutral-950">
                  <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-6 w-6" /> FN / IDENTITY PLATE
                </div>
                <img
                  src={assetUrls.aboutPhoto}
                  alt="Portrait of Fauzi Noorsyabani"
                  loading="lazy"
                  decoding="async"
                  className="relative z-[1] aspect-[4/5] w-full rounded-xl border border-neutral-300 object-cover object-[50%_20%]"
                />
                <div className="absolute bottom-10 left-10 z-10 flex items-center gap-3 rounded-md border border-neutral-300 bg-white/95 px-3 py-2 mono-type text-[0.54rem] font-bold uppercase tracking-[0.11em] text-neutral-950 shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                  {t.about.badge}
                </div>
                <span className="portrait-dossier-rule absolute bottom-0 left-[17%] h-20 w-px bg-neutral-400" aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="max-w-xl text-base leading-8 text-neutral-700 sm:text-lg">
                  <FormattedText text={t.about.shortBio} />
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { ...t.about.focus.build, index: "01", icon: Code2 },
                    { ...t.about.focus.analyze, index: "02", icon: BarChart3 },
                    { ...t.about.focus.lead, index: "03", icon: UsersRound },
                  ].map((focus) => {
                    const Icon = focus.icon;
                    return (
                      <div
                        key={focus.label}
                        className="motion-card group rounded-xl border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-950 transition group-hover:border-neutral-900 group-hover:bg-neutral-950 group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="mono-type rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[0.62rem] font-bold text-neutral-600">{focus.index}</span>
                        </div>
                        <h3 className="display-type mt-6 text-xl font-bold tracking-[-0.04em] text-neutral-950">
                          {focus.label}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-neutral-700">
                          <FormattedText text={focus.detail} />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-neutral-300 bg-neutral-300 sm:grid-cols-2 lg:grid-cols-4 shadow-xs">
              {t.about.facts.map(([term, detail]) => (
                <div key={term} className="min-h-28 bg-white p-5 sm:p-6 transition hover:bg-neutral-50">
                  <dt className="mono-type text-[0.6rem] font-bold uppercase tracking-[0.13em] text-neutral-500">
                    {term}
                  </dt>
                  <dd className="mt-3 text-sm font-semibold leading-6 text-neutral-950">
                    <FormattedText text={detail} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Section 02: Tech Stacks & Tools (Categorized with Interactive Filters & Hover Tooltips) */}
        <section id="stack" className="scroll-mt-28 bg-white border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 dark:bg-neutral-950 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="02"
              kicker={t.techStack.kicker}
              title={t.techStack.title}
              copy={t.techStack.copy}
            />

            {/* Interactive Category Filter Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-1.5 rounded-2xl border border-neutral-300/80 bg-neutral-100/70 p-1.5 shadow-2xs backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
              {Object.entries(t.techStack.filters).map(([key, label]) => {
                const isActive = selectedTechCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedTechCategory(key)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                      isActive
                        ? "bg-neutral-950 text-white shadow-xs dark:bg-white dark:text-neutral-950 scale-[1.02]"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-white/80 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/70"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Categorized Groups & Prominent Logo Tiles Grid */}
            <div className="mt-12 space-y-12">
              {techStackCategories
                .filter((cat) => selectedTechCategory === "all" || cat.filterKey === selectedTechCategory)
                .map((cat) => {
                  const catMeta = t.techStack.categories[cat.filterKey] ?? {
                    title: cat.title,
                    description: cat.description,
                  };
                  return (
                    <div key={cat.id} className="tech-group-block">
                      {/* Category Title with Accent Indicator */}
                      <div className="flex items-center gap-3">
                        <span className="h-0.5 w-6 rounded-full bg-red-500 dark:bg-red-400" aria-hidden="true" />
                        <h3 className="display-type text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
                          {catMeta.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                        {catMeta.description}
                      </p>

                      {/* Prominent Square Logo Cards with Enlarged Icons */}
                      <div className="mt-5 grid grid-cols-3 gap-3 min-[480px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 sm:gap-4">
                        {cat.skills.map((skill) => (
                          <div
                            key={skill}
                            tabIndex={0}
                            role="img"
                            aria-label={skill}
                            className="group relative flex aspect-square items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100/90 p-2 sm:p-2.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-neutral-950 hover:bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/90 dark:hover:border-neutral-400 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer"
                          >
                            {/* Standardized SVG filling 60% of square tile */}
                            <TechIcon
                              name={skill}
                              className="h-[60%] w-[60%] shrink-0 transition-transform duration-200 group-hover:scale-110 text-neutral-950 dark:text-white"
                            />

                            {/* Smooth Tooltip showing name when cursor hovers over card */}
                            <div
                              role="tooltip"
                              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-30 opacity-0 translate-y-1 transition-all duration-150 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
                            >
                              <div className="relative rounded-md bg-neutral-950 px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-white shadow-lg whitespace-nowrap dark:bg-white dark:text-neutral-950">
                                {skill}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-950 dark:border-t-white" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Section 03: Projects with Dashboard Screenshot Showcase */}
        <section
          id="projects"
          className="relative scroll-mt-28 overflow-hidden bg-neutral-50/50 border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
        >
          {/* Ambient backdrop gradient */}
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-100/40 via-sky-100/25 to-transparent blur-3xl opacity-75" aria-hidden="true" />
          {!prefersReducedMotion ? (
            <SignalOrbit reverse className="project-orbit absolute -right-24 top-24 z-0 hidden h-80 w-80 opacity-60 lg:block" />
          ) : null}
          <div className="relative z-10 mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="03"
              kicker={t.projects.kicker}
              title={t.projects.title}
              copy={t.projects.copy}
            />

            {/* Unified 2-Column Projects Showcase */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => {
                const isAcademicDW = project.title.includes("Academic Capacity");
                const currentArt = isAcademicDW ? dashboardViews[dashboardView].src : project.art;

                return (
                  <article
                    key={project.title}
                    className="motion-card group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-900/5"
                  >
                    {/* Visual Media Header — Compact & Fitted */}
                    <div className="relative border-b border-neutral-200 bg-neutral-100 overflow-hidden">
                      {isAcademicDW ? (
                        <div className="flex flex-col">
                          {/* Mini Titlebar with View Switcher */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 bg-neutral-100/90 px-3.5 py-2">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-red-400" />
                              <span className="h-2 w-2 rounded-full bg-amber-400" />
                              <span className="h-2 w-2 rounded-full bg-emerald-400" />
                              <span className="mono-type ml-1 text-[0.58rem] font-bold text-neutral-700">
                                Looker Studio
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {(["executive", "detail", "trend"] as const).map((key) => (
                                <button
                                  key={key}
                                  type="button"
                                  onClick={() => setDashboardView(key)}
                                  className={`rounded px-2 py-0.5 mono-type text-[0.55rem] font-bold transition ${
                                    dashboardView === key
                                      ? "bg-neutral-950 text-white shadow-xs"
                                      : "bg-white text-neutral-600 hover:bg-neutral-200/80 border border-neutral-300"
                                  }`}
                                >
                                  {key === "executive" ? "Executive" : key === "detail" ? "Detail" : "Trend"}
                                </button>
                              ))}
                              <a
                                href={currentArt}
                                target="_blank"
                                rel="noreferrer"
                                title={t.projects.viewOriginal}
                                className="ml-1 inline-flex p-1 rounded hover:bg-neutral-200 text-neutral-600 hover:text-black transition"
                              >
                                <Maximize2 className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                          {/* Screenshot Container */}
                          <div className="flex h-44 sm:h-48 items-center justify-center p-2.5 bg-neutral-50/50">
                            <img
                              src={currentArt}
                              alt={dashboardViews[dashboardView].desc}
                              className="block h-full w-auto max-w-full rounded border border-neutral-200/90 object-contain shadow-xs bg-white"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                      ) : project.art ? (
                        <div className="relative flex h-44 sm:h-48 w-full items-center justify-center bg-neutral-50/50 p-2.5">
                          <img
                            src={project.art}
                            alt={project.title}
                            className="block h-full w-auto max-w-full rounded border border-neutral-200/90 object-contain shadow-xs bg-white"
                            loading="lazy"
                            decoding="async"
                          />
                          <a
                            href={project.art}
                            target="_blank"
                            rel="noreferrer"
                            title={t.projects.viewOriginal}
                            className="absolute right-2.5 top-2.5 rounded-md border border-neutral-200 bg-white/90 p-1 text-neutral-600 shadow-xs hover:bg-white hover:text-neutral-950 transition backdrop-blur-xs"
                          >
                            <Maximize2 className="h-3 w-3" />
                          </a>
                        </div>
                      ) : (
                        <ProjectEvidence index={index} category={project.category} />
                      )}
                    </div>

                    {/* Card Content & Narrative */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="mono-type rounded-md border border-neutral-300 bg-neutral-100/90 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-neutral-900 shadow-2xs">
                          {project.category}
                        </span>
                        <span className="mono-type text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                          {project.date}
                        </span>
                      </div>

                      <h3 className="display-type mt-3.5 text-xl sm:text-2xl font-bold tracking-[-0.045em] text-neutral-950 leading-tight group-hover:text-black transition">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-neutral-700 flex-1">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-1 mono-type text-[0.58rem] font-semibold text-neutral-900 shadow-2xs dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                          >
                            <TechIcon name={tech} className="h-3 w-3 shrink-0" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.links?.caseStudy ? (
                            <a
                              href={project.links.caseStudy}
                              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-900 shadow-xs transition hover:border-neutral-900 hover:bg-neutral-50"
                            >
                              {t.projects.caseStudy} <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            <PendingAction
                              label={t.projects.caseStudy}
                              onPending={notifyPending}
                              className="rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-bold text-neutral-600"
                            />
                          )}
                        </div>
                        {currentArt && (
                          <a
                            href={currentArt}
                            target="_blank"
                            rel="noreferrer"
                            className="mono-type inline-flex items-center gap-1.5 text-[0.62rem] font-bold text-neutral-900 hover:text-black hover:underline"
                          >
                            {t.projects.viewOriginal} <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Other Projects Index Table (when otherProjects has entries) */}
            {otherProjects.length > 0 ? (
              <div className="mt-16 border-t border-neutral-300 pt-7">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="section-kicker">{t.projects.otherKicker}</p>
                    <h3 className="display-type mt-3 text-2xl font-bold tracking-[-0.05em] text-neutral-950">
                      {t.projects.otherTitle}
                    </h3>
                  </div>
                  <span className="mono-type hidden text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 sm:block">
                    {t.projects.otherCount}
                  </span>
                </div>
                <div className="mt-7 border-y border-neutral-300">
                  {otherProjects.map((project, index) => (
                    <article
                      key={project.title}
                      className={`motion-index-row grid gap-4 py-6 transition hover:bg-neutral-100/70 md:grid-cols-[3.4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-7 ${
                        index !== otherProjects.length - 1 ? "border-b border-neutral-300" : ""
                      }`}
                    >
                      <p className="mono-type text-[0.58rem] font-bold tracking-[0.12em] text-neutral-950">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <p className="mono-type text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                          {project.date}
                        </p>
                        <h4 className="display-type mt-2 text-xl font-bold tracking-[-0.045em] text-neutral-950">
                          {project.title}
                        </h4>
                        <p className="mt-2 mono-type text-[0.57rem] uppercase tracking-[0.08em] text-neutral-500">
                          {project.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm leading-6 text-neutral-700">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-[0.65rem] font-medium text-neutral-800 shadow-2xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Section 03.5: Field Evidence, Documentation & Collaboration Stream */}
        <DocumentationShowcase language={language} prefersReducedMotion={prefersReducedMotion} />

        {/* Section 04: Experience & Leadership */}
        <section
          id="experience"
          className="scroll-mt-28 bg-white border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 text-neutral-950"
        >
          <div className="mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="04"
              kicker={t.experience.kicker}
              title={t.experience.title}
              copy={t.experience.copy}
            />
            <div className="mt-16 space-y-0 border-l-2 border-neutral-300 pl-6 sm:pl-10 lg:ml-[7.4rem]">
              {experience.map((item, index) => (
                <article key={`${item.organization}-${item.role}`} className="motion-timeline relative pb-12 last:pb-0">
                  <span className="timeline-node absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-neutral-950 bg-white sm:-left-[49px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                  </span>
                  <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
                    <div>
                      <span className="inline-block rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-1 mono-type text-[0.61rem] font-bold uppercase tracking-[0.14em] text-neutral-900 shadow-2xs">
                        {String(index + 1).padStart(2, "0")} / {item.type}
                      </span>
                      <p className="mt-3 mono-type text-[0.61rem] leading-5 tracking-[0.07em] text-neutral-600 font-semibold">
                        {item.date}
                        <br />
                        {item.location}
                      </p>
                    </div>
                    <div className="max-w-2xl">
                      <h3 className="display-type text-2xl font-bold tracking-[-0.045em] text-neutral-950">{item.role}</h3>
                      <p className="mt-1 text-base font-semibold text-neutral-800">{item.organization}</p>
                      <ul className="mt-5 space-y-3">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-7 text-neutral-700">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-neutral-950" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Awards & Recognition */}
        <section id="awards" className="scroll-mt-28 bg-neutral-50/50 border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="05"
              kicker={t.awards.kicker}
              title={t.awards.title}
            />
            <div className="mt-14 border-y border-neutral-300 lg:ml-[7.5rem]">
              {awards.map(([placement, title, organization, date, description], index) => (
                <article
                  key={`${title}-${organization}`}
                  className={`motion-award grid gap-5 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_8rem] sm:items-start lg:grid-cols-[6.25rem_minmax(0,1fr)_8rem] ${
                    index !== awards.length - 1 ? "border-b border-neutral-300" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:block">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                        index === 0
                          ? "border-neutral-950 bg-neutral-950 text-white shadow-xs"
                          : "border-neutral-300 bg-white text-neutral-800 shadow-xs"
                      }`}
                    >
                      <Award className="h-4 w-4" />
                    </span>
                    <p className="mono-type mt-0 text-[0.61rem] font-bold uppercase tracking-[0.13em] text-neutral-950 sm:mt-4">
                      {placement}
                    </p>
                  </div>
                  <div>
                    <h3 className="display-type text-2xl font-bold leading-tight tracking-[-0.05em] text-neutral-950">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-700 font-medium">{organization}</p>
                    {description ? (
                      <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-600">{description}</p>
                    ) : null}
                  </div>
                  <p className="mono-type text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-neutral-500 sm:pt-1">
                    {date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 06: Credentials */}
        <section id="credentials" className="scroll-mt-28 overflow-hidden bg-white border-b border-neutral-300 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl lg:max-w-[1000px] reveal">
            <SectionHeading
              index="06"
              kicker={t.credentials.kicker}
              title={t.credentials.title}
              copy={t.credentials.copy}
            />
          </div>
          <div className="mt-8 sm:mt-12 -mx-4 sm:mx-0 reveal">
            <CertificateCoverflow items={certifications} viewLabel={t.credentials.viewBtn} />
          </div>
        </section>

        {/* Section 07: Contact / Let's Connect — Gede Arya watermark inspired */}
        <section
          id="contact"
          className="scroll-mt-28 relative overflow-hidden bg-white dark:bg-neutral-950 px-4 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 text-neutral-950 dark:text-neutral-50 border-t border-neutral-200 dark:border-neutral-800"
        >
          {/* Giant watermark typography in background — Gede Arya inspired */}
          <div
            className="pointer-events-none absolute inset-0 flex flex-col justify-between items-center select-none overflow-hidden z-0 py-4 sm:py-6 lg:py-8"
            aria-hidden="true"
          >
            <span className="display-type text-[18vw] sm:text-[17vw] lg:text-[15.5vw] font-normal tracking-tight text-neutral-950/[0.038] dark:text-white/[0.045] leading-none whitespace-nowrap">
              Fauzi
            </span>
            <span className="display-type text-[16vw] sm:text-[15vw] lg:text-[14.2vw] font-normal tracking-tight text-neutral-950/[0.038] dark:text-white/[0.045] leading-none whitespace-nowrap">
              Noorsyabani
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl px-4 text-center reveal">
            {/* Centered circular avatar with waving hand emoji */}
            <div className="relative mx-auto mb-6 inline-block">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-4 ring-white dark:ring-neutral-900 shadow-lg shadow-neutral-900/10 dark:shadow-black/40">
                <img
                  src={assetUrls.aboutPhoto}
                  alt="Fauzi Noorsyabani"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <motion.span
                className="absolute -bottom-1 -left-2 text-2xl select-none"
                role="img"
                aria-label="waving hand"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </div>

            {/* Title: Let's connect */}
            <h2 className="display-type text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.contact.connectTitle}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t.contact.connectSubtitle}
            </p>

            {/* Pill CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={links.email}
                className="inline-flex items-center gap-2.5 rounded-full bg-neutral-950 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-neutral-950 shadow-sm transition hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
                <span>{t.contact.emailBtn}</span>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white shadow-xs transition hover:border-neutral-950 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>{t.contact.linkedinBtn}</span>
              </a>
            </div>

            {/* Optional form modal trigger */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white underline underline-offset-4 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950"
              >
                {t.contact.orFormBtn}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — Gede Arya inspired minimalist bar */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-8 text-neutral-700 dark:text-neutral-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left: I'm Fauzi — Let's build together */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {language === "en" ? "I'm Fauzi" : "Saya Fauzi"}
            </span>
            <span className="h-px w-6 sm:w-8 bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {language === "en" ? "Let's build together" : "Mari bangun bersama"}
            </span>
          </div>

          {/* Center: Social links (Medium, Email, LinkedIn, GitHub) */}
          <div className="flex items-center gap-5 text-neutral-700 dark:text-neutral-300">
            <a
              href={links.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="transition hover:text-neutral-950 dark:hover:text-white hover:scale-110 active:scale-95"
            >
              <MediumIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </a>
            <a
              href={links.email}
              aria-label="Email"
              className="transition hover:text-neutral-950 dark:hover:text-white hover:scale-110 active:scale-95"
            >
              <Mail className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-neutral-950 dark:hover:text-white hover:scale-110 active:scale-95"
            >
              <Linkedin className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-neutral-950 dark:hover:text-white hover:scale-110 active:scale-95"
            >
              <Github className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </a>
          </div>

          {/* Right: Back to Top */}
          <button
            type="button"
            onClick={() => scrollTo("top")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition hover:text-neutral-950 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Subtle sub-footer rights */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-neutral-100 dark:border-neutral-900 pt-4 text-[0.68rem] text-neutral-400 dark:text-neutral-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Fauzi Noorsyabani. {t.footer.rights}</p>
          <p className="mono-type text-[0.58rem] uppercase tracking-[0.1em]">Signal Ledger / portfolio v1.0</p>
        </div>
      </footer>

      {/* Contact & Networking Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[420px] rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-0 text-neutral-950 dark:text-white shadow-2xl">
          <div className="relative overflow-hidden p-4 sm:p-5">
            <div className="relative z-10">
              <DialogHeader>
                <p className="mono-type text-[0.58rem] font-bold uppercase tracking-[0.14em] text-neutral-500">
                  {language === "en" ? "FN / Networking channel" : "FN / Kanal Jaringan"}
                </p>
                <DialogTitle className="display-type mt-1 text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
                  {language === "en" ? "Open a conversation." : "Buka percakapan."}
                </DialogTitle>
                <DialogDescription className="mt-1 text-[0.72rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {language === "en"
                    ? "Leave a note or inquiry below, or connect directly via email or LinkedIn."
                    : "Tuliskan pesan atau pertanyaan Anda di bawah, atau hubungi langsung via email atau LinkedIn."}
                </DialogDescription>
              </DialogHeader>

              {/* Direct channels in dialog */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={links.email}
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 px-3 py-1.5 text-xs font-semibold text-neutral-900 dark:text-white transition hover:border-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Email</span>
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 px-3 py-1.5 text-xs font-semibold text-neutral-900 dark:text-white transition hover:border-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Linkedin className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </a>
              </div>

              {/* Form inside dialog */}
              <form onSubmit={handleForm} noValidate className="mt-3 space-y-2.5">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <label className="block text-[0.68rem] font-bold text-neutral-950 dark:text-neutral-200 mb-0.5">
                      {t.contact.formName}
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-neutral-950"
                      placeholder={language === "en" ? "Your name" : "Nama Anda"}
                    />
                    {formErrors.name && <span className="mt-0.5 block text-[0.65rem] text-red-600">{formErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-[0.68rem] font-bold text-neutral-950 dark:text-neutral-200 mb-0.5">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-neutral-950"
                      placeholder="you@example.com"
                    />
                    {formErrors.email && <span className="mt-0.5 block text-[0.65rem] text-red-600">{formErrors.email}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-[0.68rem] font-bold text-neutral-950 dark:text-neutral-200 mb-0.5">
                    {t.contact.formSubject}
                  </label>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-neutral-950"
                    placeholder={t.contact.formSubjectPlaceholder}
                  />
                  {formErrors.subject && <span className="mt-0.5 block text-[0.65rem] text-red-600">{formErrors.subject}</span>}
                </div>
                <div>
                  <label className="block text-[0.68rem] font-bold text-neutral-950 dark:text-neutral-200 mb-0.5">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                    rows={2.5}
                    className="w-full resize-y rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-neutral-950"
                    placeholder={t.contact.formMessagePlaceholder}
                  />
                  {formErrors.message && <span className="mt-0.5 block text-[0.65rem] text-red-600">{formErrors.message}</span>}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-[0.62rem] text-neutral-500 max-w-[210px] leading-tight">
                    {t.contact.formNotice}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 dark:bg-white px-3.5 py-1.5 text-xs font-bold text-white dark:text-neutral-950 transition hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 cursor-pointer"
                  >
                    <span>{t.contact.btnSubmit}</span>
                    <Send className="h-3 w-3" />
                  </button>
                </div>
                {formState === "success" && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" /> {t.contact.formSuccess}
                  </p>
                )}
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Back to top floating button */}
      <button
        onClick={() => scrollTo("top")}
        type="button"
        aria-label="Scroll back to top"
        className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg shadow-neutral-900/20 transition duration-200 hover:bg-neutral-800 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
