import { useState } from "react";
import { Trophy, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export interface AwardItem {
  id: string;
  tier: "National" | "University";
  placement: string;
  title: string;
  organizer: string;
  date: string;
  tags: string[];
  bullets: string[];
}

export const awardsData: AwardItem[] = [
  {
    id: "ddc-2026",
    tier: "National",
    placement: "1st Winner",
    title: "1st Place Winner — Life After DDC Challenge",
    organizer: "Dicoding Developer Conference (DDC 2026)",
    date: "May 2026",
    tags: ["AI DevOps", "Cloud Infrastructure", "FastAPI", "Docker", "MLOps"],
    bullets: [
      "Secured 1st Place nationally in the AI for Cloud Infrastructure & DevOps track at Dicoding Developer Conference 2026.",
      "Architected automated AI deployment workflows and cloud-native model serving pipelines with containerized runtime guarantees.",
      "Commended by national evaluators for production engineering resilience, low-latency API serving, and system observability.",
    ],
  },
  {
    id: "bdd-2025",
    tier: "National",
    placement: "1st Winner",
    title: "1st Place Winner — #MyBDDInsight Challenge",
    organizer: "Badan Ekonomi Kreatif (Kemenparekraf RI) × Dicoding",
    date: "Nov 2025",
    tags: ["Data Analytics", "Kemenparekraf", "Business Intelligence", "Policy Insight"],
    bullets: [
      "Ranked 1st in nationwide data insight competition co-hosted by the Ministry of Tourism & Creative Economy (Kemenparekraf) and Dicoding.",
      "Formulated quantitative analytics models and data-driven strategic roadmaps evaluating national creative economy datasets.",
      "Delivered structured executive reporting dashboards translating complex economic distributions into actionable strategic policies.",
    ],
  },
  {
    id: "kspi-2024",
    tier: "National",
    placement: "Gold Medal (A+)",
    title: "Gold Medalist (Predikat A+) — Mathematics",
    organizer: "Pusat Kejuaraan Sains Nasional (Puskanas) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Mathematics", "Quantitative Analysis", "Puskanas", "National Olympiad"],
    bullets: [
      "Awarded Gold Medal with highest academic distinction (Predikat A+) in the university-level category at Kompetisi Sains Pelajar Se-Indonesia (KSPI 2024).",
      "Tested in advanced computational mathematics, multivariable calculus, linear algebra, and applied statistical probability.",
      "Represented Universitas Siliwangi on national competition stage among student delegates from universities across Indonesia.",
    ],
  },
  {
    id: "issc-2024",
    tier: "National",
    placement: "Gold Medal (A+)",
    title: "Gold Medalist (Predikat A+) — Accounting",
    organizer: "Prestasi Maju Indonesia (PRESMANESIA) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Accounting", "Financial Analysis", "PRESMANESIA", "Corporate Metrics"],
    bullets: [
      "Awarded Gold Medal with Predikat A+ in university-level accounting at the Indonesian Student Science Competition (ISSC 2024).",
      "Demonstrated analytical excellence in corporate financial accounting, managerial cost evaluation, and balance sheet auditing.",
      "Proves cross-disciplinary analytical depth connecting software data engineering with enterprise financial business logic.",
    ],
  },
  {
    id: "olimnus-2024",
    tier: "National",
    placement: "Gold Medal (A+)",
    title: "Gold Medalist (Predikat A+) — Mathematics",
    organizer: "Generasi Maju Indonesia (GEMANESIA) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Mathematics", "Applied Logic", "GEMANESIA", "Problem Solving"],
    bullets: [
      "Achieved Gold Medal with Predikat A+ at Olimpiade Sains Nusantara (OLIMNUS 2024) in the higher education student division.",
      "Excelled in algorithmic problem decomposition, mathematical proof structures, and combinatorial logic.",
      "Strengthened formal quantitative reasoning foundational to deep neural network modeling and predictive analytics.",
    ],
  },
  {
    id: "bi-2025",
    tier: "National",
    placement: "2nd Place",
    title: "2nd Place Winner — Bookstagram Review Challenge",
    organizer: "Kantor Perwakilan Bank Indonesia Tasikmalaya",
    date: "May 2025",
    tags: ["Bank Indonesia", "Economic Literacy", "Digital Media", "Public Communication"],
    bullets: [
      "Awarded 2nd Place by Bank Indonesia for the national World Book Day literacy challenge.",
      "Crafted structured analytical multimedia review breaking down modern digital transformation and financial technology literature.",
      "Recognized by central bank evaluators for narrative depth, visual aesthetics, and public audience impact.",
    ],
  },
  {
    id: "m3c-2025",
    tier: "University",
    placement: "Case Finalist",
    title: "Case Competitor — MTI Consulting Case Competition",
    organizer: "Institut Teknologi Bandung (ITB)",
    date: "Jan 2025",
    tags: ["ITB", "Management Consulting", "Circular Economy", "Business Strategy"],
    bullets: [
      "Competed in high-level management consulting case competition organized by MTI Institut Teknologi Bandung (ITB).",
      "Engineered strategic operational framework on 'Transforming Industries through Circular Economy' with ROI feasibility modeling.",
      "Formulated implementation roadmaps and risk mitigation strategies for industrial supply chain decarbonization.",
    ],
  },
  {
    id: "lkti-2023",
    tier: "National",
    placement: "National Finalist",
    title: "National Finalist — LKTI SMEFU XIV (HARMONY)",
    organizer: "Fakultas Teknik Universitas Siliwangi",
    date: "Oct 2023",
    tags: ["Scientific Paper", "Applied Tech", "Informatics", "Research"],
    bullets: [
      "Selected as National Finalist in scientific paper competition among university informatics students nationwide.",
      "Authored research paper proposing innovative technology solutions for public sector community workflow optimization.",
      "Defended research methodology and technical system architecture before an academic expert jury board.",
    ],
  },
  {
    id: "libsos-2023",
    tier: "University",
    placement: "Grant Winner",
    title: "Selected Grant Winner — Social Business League (LIBSOS)",
    organizer: "UPT Kewirausahaan Mahasiswa Universitas Siliwangi",
    date: "Feb 2023",
    tags: ["Social Enterprise", "Grant Funding", "Full-Stack Web", "Community Platform"],
    bullets: [
      "Won competitive university incubation grant funding to build and deploy digital social community platform.",
      "Engineered end-to-end full-stack web application for community volunteer registration and real-time operational updates in Ciamis.",
      "Maintained 99.9% uptime during peak event traffic with zero duplicate registration transactions.",
    ],
  },
];

interface AwardsGridProps {
  language: "en" | "id";
}

export function AwardsGrid({ language }: AwardsGridProps) {
  const [activeTab, setActiveTab] = useState<"ALL" | "National" | "University">("ALL");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "ddc-2026": true, // First card initially expanded as in reference
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredAwards =
    activeTab === "ALL"
      ? awardsData
      : awardsData.filter((item) => item.tier === activeTab);

  const tabs: Array<"ALL" | "National" | "University"> = ["ALL", "National", "University"];

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-xs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-950 dark:bg-red-950/80 text-white dark:text-red-300 border border-neutral-800 dark:border-red-700/60 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {tab === "ALL"
                  ? language === "en"
                    ? "ALL"
                    : "SEMUA"
                  : tab === "National"
                  ? language === "en"
                    ? "National"
                    : "Nasional"
                  : language === "en"
                  ? "University"
                  : "Universitas"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Awards 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAwards.map((item) => {
          const isExpanded = !!expandedCards[item.id];
          const displayBullets = isExpanded ? item.bullets : item.bullets.slice(0, 2);

          return (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-300 dark:border-red-950/40 bg-white dark:bg-neutral-950/90 hover:border-neutral-950 dark:hover:border-red-600/60 p-6 transition-all duration-300 shadow-xs hover:shadow-lg dark:hover:shadow-red-950/30 group"
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="mono-type text-[0.62rem] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/80">
                    {item.tier}
                  </span>
                  <span className="mono-type text-[0.62rem] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded border border-red-300 dark:border-red-900/60 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40">
                    {item.placement}
                  </span>
                </div>

                {/* Trophy & Title */}
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <Trophy className="h-4 w-4" />
                  </span>
                  <h3 className="display-type text-lg font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Organizer */}
                <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 ml-11 mb-3">
                  {item.organizer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs mono-type text-neutral-500 dark:text-neutral-400 ml-11 mb-4 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
                  <span>{item.date}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-neutral-200 dark:border-neutral-800/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono-type text-[0.6rem] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {displayBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-red-500 dark:text-red-400 text-[10px] mt-0.5 shrink-0">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Expand/Collapse Toggle */}
              <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-900/80">
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-center gap-1 text-xs mono-type font-semibold text-neutral-500 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors py-1 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <span>{language === "en" ? "Collapse" : "Tutup"}</span>
                      <ChevronUp className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      <span>{language === "en" ? "View full details" : "Lihat detail"}</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
