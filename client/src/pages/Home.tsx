/**
 * Signal Ledger home page — Clean, minimalist, and professional design.
 * Neutral white & black palette, crisp typography, and uncropped high-fidelity project evidence.
 */
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
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
} from "@/data/portfolio";
import { useTheme } from "@/contexts/ThemeContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const navItems = [
  ["About", "about"],
  ["Tech Stack", "stack"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Awards", "awards"],
  ["Contact", "contact"],
] as const;

type FormFields = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

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
    <div className="section-heading grid gap-6 border-t border-neutral-200 pt-6 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-10">
      <div className="dossier-rail mono-type text-xs font-semibold tracking-[0.15em] text-neutral-900">
        <div className="flex items-center gap-2">
          <span>{index}</span>
          <span className="h-px w-5 bg-neutral-900" />
        </div>
        <div className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white shadow-xs">
          <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
          <i className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-neutral-900" />
        </div>
        <span className="dossier-node mt-2 block h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
      </div>
      <div className="section-heading-copy">
        <p className="section-kicker">{kicker}</p>
        <h2 className="display-type mt-4 max-w-3xl text-4xl font-bold tracking-[-0.065em] text-neutral-950 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {copy ? <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">{copy}</p> : null}
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
    "FULL STACK AI ENGINEER",
    "DATA → MODEL → PRODUCT → DEPLOY",
    "FN / SIGNAL LEDGER",
    "SYSTEMS / 001",
    "APPLIED AI / DELIVERY",
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
  const evidenceMode = (["forecast", "clinical", "route", "field"] as const)[index] ?? "forecast";
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

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
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
      title: "Executive Overview",
      desc: "Kapasitas Akademik & Rasio Mahasiswa-Dosen Institusi (Universitas Siliwangi)",
    },
    detail: {
      src: assetUrls.dashboardDetail,
      title: "Detail Per Program Studi",
      desc: "Distribusi Rasio Dosen-Mahasiswa & Matriks Antar Program Studi",
    },
    trend: {
      src: assetUrls.dashboardTrend,
      title: "Tren Longitudinal",
      desc: "Monitoring Rasio Longitudinal Multi-Semester (Ganjil 2023 - Ganjil 2025)",
    },
  } as const;

  const heroProjects = useMemo(() => featuredProjects.filter((project) => project.featured), []);
  const capstoneHours = useCountUp(900, heroReady, prefersReducedMotion);
  const programsAnalyzed = useCountUp(97, heroReady, prefersReducedMotion);
  const studentsReached = useCountUp(1000, heroReady, prefersReducedMotion);

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
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0.08, 0.2, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* Sticky Top Navigation */}
      <header
        className={`nav-surface fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "border-neutral-200 bg-white/95 shadow-xs backdrop-blur-md"
            : "border-neutral-200/80 bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            onClick={() => scrollTo("top")}
            type="button"
            aria-label="Go to top of Fauzi Noorsyabani portfolio"
            className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
              <img
                src={assetUrls.logo}
                alt=""
                aria-hidden="true"
                className="h-8 w-8 object-contain transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <i className="absolute bottom-1 right-1 h-2 w-2 rounded-full border border-white bg-neutral-900" />
            </span>
            <span className="mono-type grid text-left text-[0.62rem] font-bold leading-[1.15] tracking-[0.16em] text-neutral-950">
              <span>FAUZI</span>
              <span className="mt-0.5 text-neutral-500">NOORSYABANI</span>
            </span>
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                type="button"
                aria-current={activeSection === id ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.11em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeSection === id ? "text-neutral-950 font-bold" : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {label}
                {activeSection === id ? (
                  <span aria-hidden="true" className="nav-active-signal absolute bottom-0 left-3 right-3 h-0.5 bg-neutral-950" />
                ) : null}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleThemeToggle}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="theme-toggle group relative hidden h-9 w-8 items-center justify-center text-neutral-700 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 lg:flex"
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
              className="hidden items-center gap-2 rounded-md bg-neutral-950 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 sm:flex"
            >
              Contact <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              type="button"
              className="rounded-md p-2.5 text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 lg:hidden"
            >
              <span className="sr-only">{menuOpen ? "Close" : "Open"} navigation menu</span>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-neutral-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
            menuOpen ? "motion-menu-open max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
            <button
              onClick={handleThemeToggle}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="mb-3 flex w-full items-center justify-between rounded-md border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-800"
            >
              <span>Appearance: {theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <div className="grid gap-1">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  type="button"
                  className={`mobile-nav-link flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold ${
                    activeSection === id ? "bg-neutral-100 text-neutral-950 font-bold" : "text-neutral-700"
                  }`}
                >
                  {label}
                  <ChevronRight className="h-4 w-4 text-neutral-400" />
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section — Minimal, Clean, Professional White */}
        <section
          id="top"
          className={`hero-stage relative isolate overflow-hidden bg-white border-b border-neutral-200 pt-[72px] text-neutral-950 ${
            heroReady && !prefersReducedMotion ? "motion-ready" : ""
          }`}
        >
          <div className="absolute inset-0 data-grid opacity-60" aria-hidden="true" />
          <div className="absolute -right-36 top-28 h-[34rem] w-[34rem] rounded-full bg-neutral-100 blur-3xl pointer-events-none" aria-hidden="true" />
          <img
            src={assetUrls.logo}
            alt=""
            aria-hidden="true"
            className="hero-identity-stamp pointer-events-none absolute right-[8%] top-[12%] z-0 hidden h-72 w-72 object-contain opacity-[0.05] lg:block"
          />

          <div className="relative mx-auto grid min-h-[780px] max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-20 lg:px-12 lg:py-24 xl:min-h-[820px]">
            <div className="flex flex-col justify-center pt-8 lg:pt-0">
              <div className="hero-sequence hero-sequence--1 flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1.5 mono-type text-[0.62rem] font-semibold tracking-[0.14em] text-neutral-900 shadow-xs">
                <span className="availability-node h-1.5 w-1.5 rounded-full bg-emerald-600" /> OPEN TO WORK
              </div>
              <p className="hero-sequence hero-sequence--2 mt-9 display-type text-xl font-medium tracking-[-0.035em] text-neutral-600 sm:text-2xl">
                Hello, I’m
              </p>
              <h1 className="hero-sequence hero-sequence--3 display-type mt-1 max-w-3xl text-[3.8rem] font-bold leading-[0.88] tracking-[-0.085em] text-neutral-950 sm:text-8xl xl:text-[6.1rem]">
                Fauzi<br />
                <span className="text-neutral-950">Noorsyabani.</span>
              </h1>
              <div className="hero-sequence hero-sequence--4 mt-8 flex items-center gap-3 text-neutral-900">
                <span className="h-px w-10 bg-neutral-900" />
                <p className="mono-type text-[0.66rem] font-bold uppercase tracking-[0.16em] text-neutral-900">
                  {person.role} <span className="mx-1 text-neutral-400">/</span> Applied AI &amp; Data Products
                </p>
              </div>
              <p className="hero-sequence hero-sequence--5 mt-7 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
                {person.headline}
              </p>
              <p className="hero-sequence hero-sequence--5 mt-5 flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <Sparkles className="h-4 w-4 text-neutral-950" /> {person.education}
              </p>
              <div className="hero-sequence hero-sequence--6 mt-9 flex flex-wrap gap-3">
                {links.resume ? (
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                  >
                    View CV <FileText className="h-4 w-4" />
                  </a>
                ) : (
                  <PendingAction
                    label="View CV"
                    onPending={notifyPending}
                    className="rounded-md bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800 active:scale-[0.97]"
                  />
                )}
                <button
                  onClick={() => scrollTo("projects")}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  Review Project Evidence <ArrowDown className="h-4 w-4" />
                </button>
              </div>
              <div className="hero-sequence hero-sequence--7 hero-metrics mt-10 grid max-w-xl grid-cols-3 border-y border-neutral-200 py-4">
                {[
                  { value: capstoneHours, suffix: "+", label: "capstone hours" },
                  { value: programsAnalyzed, suffix: "", label: "programs analyzed" },
                  { value: studentsReached, suffix: "+", label: "students reached" },
                ].map(({ value, suffix, label }, index) => (
                  <div key={label} className={`px-3 first:pl-0 ${index !== 2 ? "border-r border-neutral-200" : ""}`}>
                    <p className="display-type text-xl font-bold tracking-[-0.05em] text-neutral-950">
                      {value.toLocaleString()}
                      {suffix}
                    </p>
                    <p className="mt-1 mono-type text-[0.55rem] leading-4 uppercase tracking-[0.09em] text-neutral-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="hero-sequence hero-sequence--8 mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                {links.linkedin ? (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <Linkedin className="h-4 w-4 text-neutral-900" /> LinkedIn
                  </a>
                ) : null}
                {links.github ? (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 transition hover:text-black"
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
                  className="inline-flex items-center gap-2 text-neutral-700 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <Mail className="h-4 w-4 text-neutral-900" /> Email
                </a>
                <a
                  href={links.phone}
                  className="inline-flex items-center gap-2 text-neutral-700 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <Phone className="h-4 w-4 text-neutral-900" /> Phone
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center pb-5 lg:pb-0">
              {!prefersReducedMotion ? (
                <SignalOrbit className="hero-orbit absolute -right-12 top-1/2 z-0 hidden h-[35rem] w-[35rem] -translate-y-1/2 lg:block" />
              ) : null}
              <div
                className="hero-frame absolute right-0 top-8 h-[88%] w-[92%] rounded-[2rem] border border-neutral-200 bg-neutral-50/50"
                aria-hidden="true"
              />
              <img
                src={assetUrls.profilePhoto}
                alt="Portrait of Fauzi Noorsyabani"
                className="hero-portrait relative z-10 h-[440px] w-full max-w-[570px] rounded-2xl border border-neutral-200 object-cover object-[50%_28%] shadow-xl shadow-neutral-900/10 sm:h-[530px]"
              />
              <div className="hero-evidence absolute bottom-0 left-0 z-20 w-[244px] rounded-lg border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:-left-4 sm:bottom-5">
                <div className="flex items-center gap-2">
                  <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-8 w-8" />
                  <p className="mono-type text-[0.58rem] font-bold uppercase tracking-[0.14em] text-neutral-950">
                    FN / Evidence field
                  </p>
                </div>
                <div className="mt-4 space-y-2 border-t border-neutral-200 pt-3 mono-type text-[0.58rem] leading-5 tracking-[0.08em] text-neutral-700">
                  <p>
                    <span className="mr-2 font-bold text-neutral-950">F-01</span>DATA PRODUCTS
                  </p>
                  <p>
                    <span className="mr-2 font-bold text-neutral-950">F-02</span>AI SYSTEMS
                  </p>
                  <p>
                    <span className="mr-2 font-bold text-neutral-950">F-03</span>DELIVERY
                  </p>
                </div>
              </div>
              <div className="hero-artifact absolute right-2 top-0 z-20 rounded-md border border-neutral-200 bg-white/90 px-3 py-2 mono-type text-[0.6rem] font-bold uppercase tracking-[0.13em] text-neutral-900 shadow-sm backdrop-blur-sm">
                Research artifact / 001
              </div>
              <div className="hero-signal-tag absolute -right-3 bottom-20 z-20 hidden rounded-md border border-neutral-200 bg-white/95 p-3 text-center shadow-sm sm:block">
                <span className="mono-type text-[0.58rem] font-bold leading-4 tracking-[0.1em] text-neutral-900">
                  FROM<br />
                  SIGNAL<br />
                  TO USE
                </span>
              </div>
            </div>
          </div>
          {!prefersReducedMotion ? (
            <SignalStream tone="dark" className="absolute inset-x-0 bottom-4 z-10 hidden lg:block" />
          ) : null}
        </section>

        {/* Section 01: About */}
        <section id="about" className="scroll-mt-20 bg-white border-b border-neutral-200 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="01"
              kicker="Professional position"
              title="Building useful systems from complex signals."
            />
            <div className="mt-14 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
              <div className="portrait-dossier relative overflow-hidden rounded-[1.4rem] border border-neutral-200 bg-neutral-50 p-7 signal-shadow sm:p-9">
                <div className="absolute right-5 top-5 z-10 mono-type text-[0.58rem] font-semibold tracking-[0.13em] text-neutral-500">
                  FIELD PORTRAIT / 01
                </div>
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 mono-type text-[0.54rem] font-bold tracking-[0.12em] text-neutral-950">
                  <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-6 w-6" /> FN / IDENTITY PLATE
                </div>
                <img
                  src={assetUrls.profilePhoto}
                  alt="Portrait of Fauzi Noorsyabani"
                  loading="lazy"
                  className="relative z-[1] aspect-[4/5] w-full rounded-xl border border-neutral-200 object-cover object-[50%_20%]"
                />
                <div className="absolute bottom-10 left-10 z-10 flex items-center gap-3 rounded-md border border-neutral-200 bg-white/95 px-3 py-2 mono-type text-[0.54rem] font-bold uppercase tracking-[0.11em] text-neutral-950 shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                  FN-26 / FULL STACK AI
                </div>
                <span className="portrait-dossier-rule absolute bottom-0 left-[17%] h-20 w-px bg-neutral-400" aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="display-type max-w-2xl text-2xl font-bold leading-[1.23] tracking-[-0.045em] text-neutral-950 sm:text-3xl">
                  {person.about}
                </p>
                <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">{person.shortBio}</p>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {focusAreas.map((focus) => {
                    const Icon = focus.label === "Build" ? Code2 : focus.label === "Analyze" ? BarChart3 : UsersRound;
                    return (
                      <div
                        key={focus.label}
                        className="motion-card group rounded-xl border border-neutral-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <Icon className="h-5 w-5 text-neutral-950" />
                          <span className="mono-type text-[0.62rem] font-bold text-neutral-400">{focus.index}</span>
                        </div>
                        <h3 className="display-type mt-7 text-xl font-bold tracking-[-0.04em] text-neutral-950">
                          {focus.label}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-neutral-600">{focus.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map(([term, detail]) => (
                <div key={term} className="min-h-28 bg-white p-5">
                  <dt className="mono-type text-[0.6rem] font-bold uppercase tracking-[0.13em] text-neutral-500">
                    {term}
                  </dt>
                  <dd className="mt-3 text-sm font-semibold leading-6 text-neutral-950">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Section 02: Tech Stack */}
        <section id="stack" className="scroll-mt-20 bg-white border-b border-neutral-200 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="02"
              kicker="Technical landscape"
              title="A broad toolkit, ordered around practical delivery."
              copy="The emphasis is on the tools that carry an idea from data and model through product, deployment, and decision-making."
            />
            <div className="mt-14 border-y border-neutral-200">
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={`motion-row grid gap-7 py-8 sm:py-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 ${
                    index !== skillGroups.length - 1 ? "border-b border-neutral-200" : ""
                  }`}
                >
                  <div className="border-l-2 border-neutral-900 pl-4">
                    <p className="mono-type text-[0.62rem] font-bold tracking-[0.14em] text-neutral-500">{group.code}</p>
                    <h3 className="display-type mt-3 text-2xl font-bold tracking-[-0.05em] text-neutral-950">
                      {group.title}
                    </h3>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {group.featured.map((skill) => (
                        <span key={skill} className="border-b-2 border-neutral-900 pb-1 text-sm font-bold text-neutral-950">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-600">
                      {group.skills.map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-neutral-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: Projects with Dashboard Screenshot Showcase */}
        <section
          id="projects"
          className="relative scroll-mt-20 overflow-hidden bg-neutral-50/70 border-b border-neutral-200 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          {!prefersReducedMotion ? (
            <SignalOrbit reverse className="project-orbit absolute -right-24 top-24 z-0 hidden h-80 w-80 opacity-60 lg:block" />
          ) : null}
          <div className="relative z-10 mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="03"
              kicker="Selected work"
              title="Projects built to clarify, predict, and improve."
              copy="A selected index of data work, applied AI, and product engineering. Real decision-support systems and analytics dashboards."
            />

            {/* Featured Project Showcase: 100% UN-CROPPED, FITTED DASHBOARD SHOWCASE */}
            {heroProjects.map((project) => {
              const isDashboardProject = project.art === assetUrls.tuitionArt;
              const currentArt = isDashboardProject ? dashboardViews[dashboardView].src : project.art;

              return (
                <article
                  key={project.title}
                  className="motion-feature mt-14 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                >
                  {/* Top Header: Project Context and Narrative */}
                  <div className="border-b border-neutral-200 p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="mono-type rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-neutral-900">
                          {project.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                        <span className="mono-type text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                          {project.date}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.links?.caseStudy ? (
                          <a
                            href={project.links.caseStudy}
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-50"
                          >
                            Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <PendingAction
                            label="Case Study"
                            onPending={notifyPending}
                            className="rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-bold text-neutral-700"
                          />
                        )}
                        {currentArt && (
                          <a
                            href={currentArt}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-950 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-neutral-800"
                          >
                            View Original Resolution <Maximize2 className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="display-type mt-5 text-3xl font-bold leading-[1.05] tracking-[-0.05em] text-neutral-950 sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
                      {project.description}
                    </p>

                    {project.result ? (
                      <div className="mt-5 border-l-2 border-neutral-900 bg-neutral-50 p-4 text-sm font-semibold leading-6 text-neutral-900 rounded-r-md">
                        {project.result}
                      </div>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 mono-type text-[0.62rem] font-semibold tracking-wide text-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: 100% UN-CROPPED FITTED DASHBOARD WINDOW */}
                  <div className="bg-neutral-100 p-4 sm:p-6 lg:p-8">
                    {/* Browser Mockup Window Frame */}
                    <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-lg">
                      {/* Window Titlebar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-100/90 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-amber-400" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400" />
                          <span className="mono-type ml-3 text-[0.62rem] font-bold text-neutral-600">
                            Google Looker Studio — {isDashboardProject ? dashboardViews[dashboardView].title : project.title}
                          </span>
                        </div>

                        {/* Interactive View Switcher Tabs */}
                        {isDashboardProject && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            {(["executive", "detail", "trend"] as const).map((key) => (
                              <button
                                key={key}
                                type="button"
                                onClick={() => setDashboardView(key)}
                                className={`rounded-md px-3 py-1.5 mono-type text-[0.62rem] font-bold transition ${
                                  dashboardView === key
                                    ? "bg-neutral-950 text-white shadow-xs"
                                    : "bg-white text-neutral-700 hover:text-black hover:bg-neutral-200/80 border border-neutral-200"
                                }`}
                              >
                                {dashboardViews[key].title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Image Canvas — STRICTLY UN-CROPPED, FULLY FITTED */}
                      <div className="flex items-center justify-center bg-white p-2 sm:p-4 md:p-6">
                        <img
                          src={currentArt}
                          alt={isDashboardProject ? dashboardViews[dashboardView].desc : project.title}
                          className="block h-auto w-full max-w-full rounded border border-neutral-200 object-contain shadow-xs"
                          loading="lazy"
                        />
                      </div>

                      {/* Caption & Explanatory Footer */}
                      {isDashboardProject && (
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-neutral-200 bg-neutral-50 px-5 py-3 text-xs">
                          <span className="mono-type text-[0.64rem] font-semibold text-neutral-700">
                            <strong>Keterangan:</strong> {dashboardViews[dashboardView].desc}
                          </span>
                          <a
                            href={currentArt}
                            target="_blank"
                            rel="noreferrer"
                            className="mono-type inline-flex items-center gap-1 text-[0.64rem] font-bold text-neutral-950 hover:underline"
                          >
                            Buka Gambar Resolusi Penuh <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Other Featured Cards */}
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {featuredProjects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <article
                    key={project.title}
                    className="motion-card group overflow-hidden rounded-xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-900/5"
                  >
                    <ProjectEvidence index={index} category={project.category} />
                    <div className="p-6 sm:p-7">
                      <p className="mono-type text-[0.61rem] font-bold uppercase tracking-[0.12em] text-neutral-500">
                        {project.category}
                      </p>
                      <h3 className="display-type mt-3 text-2xl font-bold tracking-[-0.05em] text-neutral-950">
                        {project.title}
                      </h3>
                      <p className="mt-2 mono-type text-[0.61rem] uppercase tracking-[0.1em] text-neutral-500">
                        {project.date}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-neutral-600">{project.description}</p>
                      {project.result ? (
                        <p className="mt-4 text-sm font-semibold leading-6 text-neutral-900">{project.result}</p>
                      ) : null}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 mono-type text-[0.58rem] font-semibold text-neutral-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {/* Other Projects Index Table */}
            <div className="mt-16 border-t border-neutral-200 pt-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="section-kicker">Other projects</p>
                  <h3 className="display-type mt-3 text-2xl font-bold tracking-[-0.05em] text-neutral-950">
                    A compact working index.
                  </h3>
                </div>
                <span className="mono-type hidden text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 sm:block">
                  05 selected entries
                </span>
              </div>
              <div className="mt-7 border-y border-neutral-200">
                {otherProjects.map((project, index) => (
                  <article
                    key={project.title}
                    className={`motion-index-row grid gap-4 py-6 transition hover:bg-neutral-100/50 md:grid-cols-[3.4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-7 ${
                      index !== otherProjects.length - 1 ? "border-b border-neutral-200" : ""
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
                      <p className="text-sm leading-6 text-neutral-600">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-[0.68rem] text-neutral-600">
                            {tech}
                            {tech !== project.technologies[project.technologies.length - 1] ? " ·" : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Experience & Leadership */}
        <section
          id="experience"
          className="scroll-mt-20 bg-white border-b border-neutral-200 px-5 py-24 text-neutral-950 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="04"
              kicker="Experience & leadership"
              title="A record of applied work and people-first momentum."
              copy="A developing career shaped by product delivery, data analysis, responsible AI advocacy, and local community work."
            />
            <div className="mt-16 space-y-0 border-l border-neutral-200 pl-7 sm:pl-10 lg:ml-[7.4rem]">
              {experience.map((item, index) => (
                <article key={`${item.organization}-${item.role}`} className="motion-timeline relative pb-12 last:pb-0">
                  <span className="timeline-node absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-300 bg-white sm:-left-[47px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                  </span>
                  <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
                    <div>
                      <p className="mono-type text-[0.61rem] font-bold uppercase tracking-[0.14em] text-neutral-900">
                        {String(index + 1).padStart(2, "0")} / {item.type}
                      </p>
                      <p className="mt-3 mono-type text-[0.61rem] leading-5 tracking-[0.07em] text-neutral-500">
                        {item.date}
                        <br />
                        {item.location}
                      </p>
                    </div>
                    <div className="max-w-2xl">
                      <h3 className="display-type text-2xl font-bold tracking-[-0.045em] text-neutral-950">{item.role}</h3>
                      <p className="mt-1 text-base font-semibold text-neutral-700">{item.organization}</p>
                      <ul className="mt-5 space-y-3">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-7 text-neutral-600">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-neutral-950" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      {"note" in item && item.note ? (
                        <p className="mt-5 rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs leading-5 text-neutral-700">
                          <strong className="font-semibold text-neutral-900">Editorial note:</strong> {item.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Awards & Recognition */}
        <section id="awards" className="scroll-mt-20 bg-white border-b border-neutral-200 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="05"
              kicker="Recognition"
              title="Evidence of analytical excellence and initiative."
            />
            <div className="mt-14 border-y border-neutral-200 lg:ml-[7.5rem]">
              {awards.map(([placement, title, organization, date], index) => (
                <article
                  key={`${title}-${organization}`}
                  className={`motion-award grid gap-5 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_8rem] sm:items-start lg:grid-cols-[6.25rem_minmax(0,1fr)_8rem] ${
                    index !== awards.length - 1 ? "border-b border-neutral-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:block">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded border ${
                        index === 0
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-neutral-300 bg-neutral-50 text-neutral-700"
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
                    <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">{organization}</p>
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
        <section className="bg-neutral-50/70 border-b border-neutral-200 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="06"
              kicker="Credentials"
              title="Certifications that support delivery."
              copy="Credential destinations are intentionally kept as editable placeholders until verified public URLs are supplied."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:ml-[7.5rem] lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <article
                  key={cert.name}
                  className="motion-cert flex min-h-[290px] flex-col rounded-xl border border-neutral-200 bg-white p-7 shadow-xs hover:border-neutral-400 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-type text-[0.62rem] font-bold tracking-[0.13em] text-neutral-950">
                      0{index + 1}
                    </span>
                    <BriefcaseBusiness className="h-5 w-5 text-neutral-400" />
                  </div>
                  <h3 className="display-type mt-7 text-2xl font-bold leading-tight tracking-[-0.05em] text-neutral-950">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-neutral-700">{cert.issuer}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{cert.description}</p>
                  <div className="mt-auto border-t border-neutral-200 pt-5">
                    <p className="mono-type text-[0.6rem] uppercase tracking-[0.1em] text-neutral-500">{cert.date}</p>
                    {cert.credential ? (
                      <a
                        href={cert.credential}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-neutral-950 hover:underline"
                      >
                        View Credential <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <PendingAction
                        label="View Credential"
                        onPending={notifyPending}
                        className="mt-4 text-sm font-bold text-neutral-950 hover:underline"
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 07: Contact */}
        <section id="contact" className="scroll-mt-20 relative overflow-hidden bg-white px-5 py-24 text-neutral-950 sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute inset-0 data-grid opacity-30 pointer-events-none" aria-hidden="true" />
          {!prefersReducedMotion ? (
            <SignalOrbit reverse className="contact-orbit absolute -right-20 top-10 z-0 hidden h-[25rem] w-[25rem] opacity-50 lg:block" />
          ) : null}
          <div className="relative mx-auto max-w-[1320px] reveal">
            <SectionHeading
              index="07"
              kicker="Contact & collaboration"
              title="Start with the outcome."
              copy="Share the product context, the decision it needs to support, and the delivery constraints. I’ll respond with a focused next step."
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
              <aside className="motion-contact space-y-8">
                <div>
                  <p className="mono-type text-[0.61rem] font-bold uppercase tracking-[0.13em] text-neutral-950">
                    Direct channels
                  </p>
                  <div className="mt-5 space-y-4">
                    <a
                      href={links.email}
                      className="group flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 transition hover:border-neutral-900 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    >
                      <Mail className="mt-0.5 h-5 w-5 text-neutral-900" />
                      <span>
                        <span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-neutral-500">
                          Email
                        </span>
                        <span className="mt-1 block text-sm font-bold text-neutral-950 group-hover:underline">
                          {person.email}
                        </span>
                      </span>
                    </a>
                    <a
                      href={links.phone}
                      className="group flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 transition hover:border-neutral-900 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    >
                      <Phone className="mt-0.5 h-5 w-5 text-neutral-900" />
                      <span>
                        <span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-neutral-500">
                          Phone
                        </span>
                        <span className="mt-1 block text-sm font-bold text-neutral-950 group-hover:underline">
                          {person.phone}
                        </span>
                      </span>
                    </a>
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                      <MapPin className="mt-0.5 h-5 w-5 text-neutral-900" />
                      <span>
                        <span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-neutral-500">
                          Location
                        </span>
                        <span className="mt-1 block text-sm font-bold text-neutral-950">{person.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
                  <p className="mono-type text-[0.61rem] font-bold uppercase tracking-[0.12em] text-neutral-950">
                    Preferred starting point
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    Share your context, the outcome you are working toward, and the constraints that matter. A useful first conversation starts with a real problem.
                  </p>
                </div>
              </aside>

              <form
                onSubmit={handleForm}
                noValidate
                className="motion-contact rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-bold text-neutral-950">
                    Name
                    <input
                      value={form.name}
                      onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                      className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20"
                      placeholder="Your name"
                    />
                    {formErrors.name ? (
                      <span id="name-error" className="mt-1.5 block text-xs text-red-600">
                        {formErrors.name}
                      </span>
                    ) : null}
                  </label>
                  <label className="block text-sm font-bold text-neutral-950">
                    Email
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20"
                      placeholder="you@example.com"
                    />
                    {formErrors.email ? (
                      <span id="email-error" className="mt-1.5 block text-xs text-red-600">
                        {formErrors.email}
                      </span>
                    ) : null}
                  </label>
                </div>
                <label className="mt-5 block text-sm font-bold text-neutral-950">
                  Subject
                  <input
                    value={form.subject}
                    onChange={(event) => setForm((value) => ({ ...value, subject: event.target.value }))}
                    aria-invalid={Boolean(formErrors.subject)}
                    aria-describedby={formErrors.subject ? "subject-error" : undefined}
                    className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20"
                    placeholder="What would you like to discuss?"
                  />
                  {formErrors.subject ? (
                    <span id="subject-error" className="mt-1.5 block text-xs text-red-600">
                      {formErrors.subject}
                    </span>
                  ) : null}
                </label>
                <label className="mt-5 block text-sm font-bold text-neutral-950">
                  Message
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
                    aria-invalid={Boolean(formErrors.message)}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                    rows={5}
                    className="mt-2 w-full resize-y rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20"
                    placeholder="A little context goes a long way."
                  />
                  {formErrors.message ? (
                    <span id="message-error" className="mt-1.5 block text-xs text-red-600">
                      {formErrors.message}
                    </span>
                  ) : null}
                </label>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="max-w-xs text-xs leading-5 text-neutral-500">
                    This static portfolio uses a safe mailto fallback. No information is stored on the website.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  >
                    Start a Conversation <Send className="h-4 w-4" />
                  </button>
                </div>
                {formState === "success" ? (
                  <p className="mt-5 flex items-center gap-2 text-sm text-neutral-800">
                    <Check className="h-4 w-4 text-emerald-600" />
                    Your message has been prepared in your email client.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — Clean Minimalist Light */}
      <footer className="bg-neutral-100 border-t border-neutral-200 px-5 py-12 text-neutral-600 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-9 border-t border-neutral-200 pt-9 md:grid-cols-[1.2fr_.7fr_.7fr] md:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-md border border-neutral-300 bg-white">
                <img src={assetUrls.logo} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
                <i className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-neutral-950" />
              </span>
              <span className="mono-type grid text-left text-[0.66rem] font-bold leading-[1.1] tracking-[0.18em] text-neutral-950">
                <span>FAUZI</span>
                <span className="mt-1 text-neutral-500">NOORSYABANI</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-600">
              Building digital experiences and AI products with passion and purpose.
            </p>
          </div>
          <div>
            <p className="mono-type text-[0.6rem] font-bold uppercase tracking-[0.14em] text-neutral-950">
              Quick links
            </p>
            <div className="mt-4 grid gap-2">
              {[
                ["About", "about"],
                ["Projects", "projects"],
                ["Experience", "experience"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-fit text-sm text-neutral-600 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mono-type text-[0.6rem] font-bold uppercase tracking-[0.14em] text-neutral-950">Connect</p>
            <div className="mt-4 grid gap-2">
              <a
                href={links.email}
                className="w-fit text-sm text-neutral-600 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Email
              </a>
              {links.linkedin ? (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-neutral-600 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  LinkedIn
                </a>
              ) : null}
              {links.github ? (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-neutral-600 transition hover:text-neutral-950"
                >
                  GitHub
                </a>
              ) : (
                <PendingAction
                  label="GitHub"
                  onPending={notifyPending}
                  className="w-fit text-left text-sm text-neutral-600 transition hover:text-neutral-950"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1320px] flex-col gap-2 border-t border-neutral-200 pt-5 text-[0.68rem] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fauzi Noorsyabani. Made in Indonesia.</p>
          <p className="mono-type text-[0.58rem] uppercase tracking-[0.1em]">Signal Ledger / portfolio v1.0</p>
        </div>
      </footer>

      {/* Contact & Networking Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="network-dialog rounded-xl border border-neutral-200 bg-white p-0 text-neutral-950 shadow-2xl shadow-neutral-900/15 sm:max-w-md">
          <div className="relative overflow-hidden p-7 sm:p-9">
            <div className="relative z-10">
              <DialogHeader>
                <p className="mono-type text-[0.6rem] font-bold uppercase tracking-[0.16em] text-neutral-500">
                  FN / Networking channel
                </p>
                <DialogTitle className="display-type mt-4 text-3xl font-bold tracking-[-0.06em] text-neutral-950">
                  Open a conversation.
                </DialogTitle>
                <DialogDescription className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
                  For collaboration, product work, or applied-AI conversations, use the channel that fits your context.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-7 grid gap-3">
                <a
                  href={links.email}
                  className="group flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-4 py-4 transition hover:border-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-neutral-900" />
                    <span>
                      <span className="block mono-type text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                        Email
                      </span>
                      <span className="mt-1 block text-sm font-bold text-neutral-950">{person.email}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-950" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-4 py-4 transition hover:border-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-neutral-900" />
                    <span>
                      <span className="block mono-type text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                        LinkedIn
                      </span>
                      <span className="mt-1 block text-sm font-bold text-neutral-950">
                        linkedin.com/in/fauzinoorsyabani
                      </span>
                    </span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-neutral-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-950" />
                </a>
              </div>
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
