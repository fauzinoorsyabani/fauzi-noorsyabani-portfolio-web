import { useState } from "react";
import { Trophy, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export interface AwardItem {
  id: string;
  tier: "National" | "University" | "Global";
  placement: { en: string; id: string };
  title: { en: string; id: string };
  organizer: string;
  date: string;
  tags: string[];
  bullets: { en: string[]; id: string[] };
}

export const awardsData: AwardItem[] = [
  {
    id: "gsa-2025",
    tier: "National",
    placement: {
      en: "Selected (Top 1% Nationwide)",
      id: "Terpilih (Top 1% Nasional)",
    },
    title: {
      en: "Selected Google Student Ambassador (Class of 2025)",
      id: "Terpilih Google Student Ambassador (Class of 2025)",
    },
    organizer: "Google · Google for Education & Developer Relations",
    date: "2024 – 2025",
    tags: ["Google AI", "Gemini", "Developer Community", "Tech Leadership", "Generative AI"],
    bullets: {
      en: [
        "**Selected from a competitive pool of 12,000 students nationwide** to serve as an official **Google Student Ambassador (Class of 2025)** representing Universitas Siliwangi.",
        "Spearheaded hands-on campus workshops and technical enablement sessions championing the adoption of **Google AI & Gemini technologies** across university faculties.",
        "Recognized by the **Google Developer Relations & Education team** for **exceptional tech leadership**, student community empowerment, and developer ecosystem advocacy.",
      ],
      id: [
        "**Terpilih dari 12.000+ pendaftar mahasiswa se-Indonesia** sebagai Google Student Ambassador resmi (Class of 2025) mewakili Universitas Siliwangi.",
        "Memimpin workshop teknis dan sesi pelatihan adopsi terapan **Google AI & Gemini technologies** bagi sivitas akademika kampus.",
        "Mendapat apresiasi langsung dari tim **Google Developer Relations & Education** atas **kepemimpinan teknologi**, pembangunan komunitas, dan literasi AI.",
      ],
    },
  },
  {
    id: "ddc-2026",
    tier: "National",
    placement: {
      en: "1st Winner",
      id: "Juara 1 Nasional",
    },
    title: {
      en: "1st Place Winner — Life After DDC Challenge",
      id: "Juara 1 Nasional — Life After DDC Challenge",
    },
    organizer: "Dicoding Developer Conference (DDC 2026)",
    date: "May 2026",
    tags: ["AI DevOps", "Cloud Infrastructure", "FastAPI", "Docker", "MLOps"],
    bullets: {
      en: [
        "**Secured 1st Place nationally** in the AI for Cloud Infrastructure & DevOps track at Dicoding Developer Conference 2026.",
        "Architected **automated AI deployment workflows** and **cloud-native model serving pipelines** with containerized runtime guarantees.",
        "Commended by national evaluators for **production engineering resilience, low-latency API serving**, and system observability.",
      ],
      id: [
        "**Meraih Juara 1 Tingkat Nasional** pada track AI for Cloud Infrastructure & DevOps di Dicoding Developer Conference 2026.",
        "Merancang **alur deployment AI otomatis** dan **pipeline model serving cloud-native** dengan jaminan runtime ter-kontainerisasi.",
        "Diakui dewan juri nasional atas **keandalan rekayasa produksi, latensi API rendah**, serta observabilitas sistem yang kokoh.",
      ],
    },
  },
  {
    id: "bdd-2025",
    tier: "National",
    placement: {
      en: "1st Winner",
      id: "Juara 1 Nasional",
    },
    title: {
      en: "1st Place Winner — #MyBDDInsight Challenge",
      id: "Juara 1 Nasional — #MyBDDInsight Challenge",
    },
    organizer: "Badan Ekonomi Kreatif (Kemenparekraf RI) × Dicoding",
    date: "Nov 2025",
    tags: ["Data Analytics", "Kemenparekraf", "Business Intelligence", "Policy Insight"],
    bullets: {
      en: [
        "**Ranked 1st in nationwide data insight competition** co-hosted by the **Ministry of Tourism & Creative Economy (Kemenparekraf RI)** and Dicoding.",
        "Formulated **quantitative analytics models** evaluating national creative economy datasets to identify high-growth subsectors.",
        "Delivered **interactive executive dashboards** translating complex economic distributions into **actionable strategic policy recommendations**.",
      ],
      id: [
        "**Peringkat 1 Nasional pada kompetisi analitik data** kolaborasi **Kemenparekraf RI** dan Dicoding.",
        "Merumuskan **model analisis kuantitatif** pada dataset ekonomi kreatif nasional untuk memetakan subsektor dengan pertumbuhan tertinggi.",
        "Menyajikan **dasbor eksekutif interaktif** yang mentransformasi data makroekonomi menjadi **rekomendasi kebijakan strategis terukur**.",
      ],
    },
  },
  {
    id: "kspi-2024",
    tier: "National",
    placement: {
      en: "Gold Medal (A+)",
      id: "Medali Emas (A+)",
    },
    title: {
      en: "Gold Medalist (Predikat A+) — Mathematics",
      id: "Medali Emas (Predikat A+) — Matematika",
    },
    organizer: "Pusat Kejuaraan Sains Nasional (Puskanas) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Mathematics", "Quantitative Analysis", "Puskanas", "National Olympiad"],
    bullets: {
      en: [
        "**Awarded Gold Medal with highest academic distinction (Predikat A+)** in the university-level category at **KSPI 2024**.",
        "Demonstrated mastery in **computational mathematics, multivariable calculus, linear algebra**, and applied statistical probability.",
        "Represented Universitas Siliwangi on national competition stage among student delegates from top universities across Indonesia.",
      ],
      id: [
        "**Meraih Medali Emas dengan predikat tertinggi (A+)** kategori mahasiswa pada **Kompetisi Sains Pelajar Se-Indonesia (KSPI 2024)**.",
        "Menguasai materi **matematika komputasional, kalkulus multivariabel, aljabar linear**, serta teori probabilitas terapan.",
        "Mewakili Universitas Siliwangi di panggung kompetisi nasional bersaing dengan delegasi mahasiswa berbagai perguruan tinggi se-Indonesia.",
      ],
    },
  },
  {
    id: "issc-2024",
    tier: "National",
    placement: {
      en: "Gold Medal (A+)",
      id: "Medali Emas (A+)",
    },
    title: {
      en: "Gold Medalist (Predikat A+) — Accounting",
      id: "Medali Emas (Predikat A+) — Akuntansi",
    },
    organizer: "Prestasi Maju Indonesia (PRESMANESIA) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Accounting", "Financial Analysis", "PRESMANESIA", "Corporate Metrics"],
    bullets: {
      en: [
        "**Awarded Gold Medal with Predikat A+** in university-level accounting at the **Indonesian Student Science Competition (ISSC 2024)**.",
        "Demonstrated analytical excellence in **corporate financial accounting, managerial cost evaluation**, and financial statement auditing.",
        "Proves **cross-disciplinary analytical depth** connecting software data engineering with **enterprise financial business logic**.",
      ],
      id: [
        "**Meraih Medali Emas dengan Predikat A+** kategori mahasiswa pada **Indonesian Student Science Competition (ISSC 2024)**.",
        "Membuktikan keunggulan analitis pada **akuntansi keuangan korporat, evaluasi biaya manajerial**, dan audit neraca keuangan.",
        "Membuktikan **kemampuan lintas disiplin** yang menghubungkan rekayasa data software dengan **logika bisnis finansial perusahaan**.",
      ],
    },
  },
  {
    id: "olimnus-2024",
    tier: "National",
    placement: {
      en: "Gold Medal (A+)",
      id: "Medali Emas (A+)",
    },
    title: {
      en: "Gold Medalist (Predikat A+) — Mathematics",
      id: "Medali Emas (Predikat A+) — Matematika",
    },
    organizer: "Generasi Maju Indonesia (GEMANESIA) · Yogyakarta",
    date: "Jul 2024",
    tags: ["Mathematics", "Applied Logic", "GEMANESIA", "Problem Solving"],
    bullets: {
      en: [
        "**Achieved Gold Medal with Predikat A+** at **Olimpiade Sains Nusantara (OLIMNUS 2024)** in the higher education student division.",
        "Excelled in **algorithmic problem decomposition, mathematical proof structures**, and combinatorial logic under strict time limits.",
        "Strengthened formal quantitative reasoning foundational to **deep neural network modeling, statistical inference**, and predictive analytics.",
      ],
      id: [
        "**Meraih Medali Emas dengan Predikat A+** pada **Olimpiade Sains Nusantara (OLIMNUS 2024)** tingkat mahasiswa perguruan tinggi.",
        "Unggul dalam **dekomposisi algoritma, pembuktian matematis**, dan penalaran logika kombinatorial di bawah batasan waktu ketat.",
        "Memperkokoh landasan kuantitatif formal untuk **optimasi model machine learning, pemodelan statistik**, dan arsitektur analitik.",
      ],
    },
  },
  {
    id: "gemini-cert-2025",
    tier: "Global",
    placement: {
      en: "Google Certified",
      id: "Tersertifikasi Google",
    },
    title: {
      en: "Gemini Certified Student — University Level",
      id: "Gemini Certified Student — Kualifikasi Universitas",
    },
    organizer: "Google for Education · Google LLC",
    date: "Sep 2025 – Sep 2028",
    tags: ["Google Gemini", "Generative AI", "Prompt Engineering", "Google Cloud"],
    bullets: {
      en: [
        "**Certified directly by Google for Education** for demonstrating verified technical mastery in deploying **Google Gemini GenAI models**.",
        "Validated competence in **system prompt design, multimodal AI reasoning**, and building automated productivity workflows.",
        "Official credential issued by Google with **3-year validity through 2028**, verifying enterprise-grade generative AI literacy.",
      ],
      id: [
        "**Tersertifikasi resmi oleh Google for Education** atas penguasaan teknis dalam menerapkan **model Generative AI Google Gemini**.",
        "Tervalidasi kompeten dalam **desain prompt tingkat lanjut, penalaran multimodal**, serta otomasi alur kerja cerdas berbasis AI.",
        "Kredensial resmi terverifikasi dari Google dengan **masa berlaku aktif 3 tahun hingga 2028**.",
      ],
    },
  },
  {
    id: "bi-2025",
    tier: "National",
    placement: {
      en: "2nd Place",
      id: "Juara 2 Nasional",
    },
    title: {
      en: "2nd Place Winner — Bookstagram Review Challenge",
      id: "Juara 2 — Tantangan Ulasan Literasi Bookstagram",
    },
    organizer: "Kantor Perwakilan Bank Indonesia Tasikmalaya",
    date: "May 2025",
    tags: ["Bank Indonesia", "Economic Literacy", "Digital Media", "Public Communication"],
    bullets: {
      en: [
        "**Awarded 2nd Place nationally by Bank Indonesia** in the official World Book Day literacy challenge.",
        "Crafted **structured analytical multimedia review** deconstructing modern digital transformation and financial technology literature.",
        "Recognized by **central bank evaluators** for narrative depth, analytical rigor, and impactful public audience communication.",
      ],
      id: [
        "**Dianugerahi Juara 2 Tingkat Nasional oleh Bank Indonesia** dalam rangka kompetisi literasi Hari Buku Sedunia.",
        "Menyusun **analisis multimedia terstruktur** membedah transformasi ekonomi digital dan literatur teknologi keuangan modern.",
        "Mendapat apresiasi dewan juri **Bank Indonesia** atas kedalaman analisis, estetika penyajian, dan dampak komunikasi publik.",
      ],
    },
  },
  {
    id: "m3c-2025",
    tier: "University",
    placement: {
      en: "Case Finalist",
      id: "Finalis Kasus",
    },
    title: {
      en: "Case Competitor — MTI Consulting Case Competition (M3C)",
      id: "Kompetitor Kasus — MTI Consulting Case Competition (M3C)",
    },
    organizer: "Institut Teknologi Bandung (ITB)",
    date: "Jan 2025",
    tags: ["ITB", "Management Consulting", "Circular Economy", "Business Strategy"],
    bullets: {
      en: [
        "Competed in high-level management consulting case competition organized by **MTI Institut Teknologi Bandung (ITB)**.",
        "Engineered strategic operational framework on **'Transforming Industries through Circular Economy'** with ROI feasibility modeling.",
        "Formulated **implementation roadmaps and risk mitigation strategies** for industrial supply chain decarbonization.",
      ],
      id: [
        "Berkompetisi pada ajang studi kasus konsultasi bisnis bergengsi dari **MTI Institut Teknologi Bandung (ITB)**.",
        "Merancang kerangka strategi **'Transforming Industries through Circular Economy'** disertai kalkulasi kelayakan investasi & ROI.",
        "Menyusun **roadmap mitigasi risiko operasional** dan dekarbonisasi rantai pasok industri korporasi.",
      ],
    },
  },
  {
    id: "lkti-2023",
    tier: "National",
    placement: {
      en: "National Finalist",
      id: "Finalis Nasional",
    },
    title: {
      en: "National Finalist — LKTI SMEFU XIV (HARMONY)",
      id: "Finalis Nasional — LKTI SMEFU XIV (HARMONY)",
    },
    organizer: "Fakultas Teknik Universitas Siliwangi",
    date: "Oct 2023",
    tags: ["Scientific Paper", "Applied Tech", "Informatics", "Research"],
    bullets: {
      en: [
        "**Selected as National Finalist** in scientific paper competition among university informatics students nationwide.",
        "Authored research paper proposing **innovative technology solutions** for public sector community workflow optimization.",
        "**Defended research methodology and technical system architecture** before an academic expert jury board.",
      ],
      id: [
        "**Terpilih sebagai Finalis Tingkat Nasional** pada Lomba Karya Tulis Ilmiah mahasiswa informatika se-Indonesia.",
        "Menulis karya tulis ilmiah merancang **arsitektur sistem data terpadu** untuk efisiensi operasional layanan publik.",
        "**Berhasil mempertahankan metodologi penelitian dan arsitektur teknis** di hadapan dewan juri akademisi.",
      ],
    },
  },
  {
    id: "libsos-2023",
    tier: "University",
    placement: {
      en: "Grant Winner",
      id: "Pemenang Hibah",
    },
    title: {
      en: "Selected Grant Winner — Social Business League (LIBSOS)",
      id: "Pemenang Hibah Inkubasi — Social Business League (LIBSOS)",
    },
    organizer: "UPT Kewirausahaan Mahasiswa Universitas Siliwangi",
    date: "Feb 2023",
    tags: ["Social Enterprise", "Grant Funding", "Full-Stack Web", "Community Platform"],
    bullets: {
      en: [
        "**Won competitive university incubation grant funding** to build and deploy digital social community platform.",
        "Engineered **end-to-end full-stack web application** for community volunteer registration and real-time operational updates in Ciamis.",
        "Maintained **99.9% uptime during peak event traffic** with zero duplicate registration transactions.",
      ],
      id: [
        "**Memenangkan pendanaan hibah inkubasi kompetitif** untuk merancang dan meluncurkan platform digital komunitas.",
        "Mengembangkan **aplikasi web full-stack end-to-end** untuk pendaftaran relawan dan koordinasi logistik lapangan di Ciamis.",
        "Mempertahankan **99.9% uptime selama lonjakan trafik acara** dengan zero duplicate transaction dan integritas basis data terjamin.",
      ],
    },
  },
];

interface AwardsGridProps {
  language: "en" | "id";
}

function renderHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-neutral-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function AwardsGrid({ language }: AwardsGridProps) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "gsa-2025": true, // GSA card expanded by default
    "ddc-2026": true, // DDC card expanded by default
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full">
      {/* Awards 3-Column Card Grid — Monochrome Black & White Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((item) => {
          const isExpanded = !!expandedCards[item.id];
          const bulletsList = item.bullets[language] ?? item.bullets.en;
          const displayBullets = isExpanded ? bulletsList : bulletsList.slice(0, 2);
          const placementText = item.placement[language] ?? item.placement.en;
          const titleText = item.title[language] ?? item.title.en;

          return (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-neutral-900 dark:hover:border-neutral-400 p-6 transition-all duration-300 shadow-xs hover:shadow-lg dark:hover:shadow-neutral-950/50 group"
            >
              <div>
                {/* Header Badges — Monochrome */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="mono-type text-[0.62rem] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/80">
                    {item.tier === "National"
                      ? language === "en"
                        ? "National"
                        : "Nasional"
                      : item.tier === "University"
                      ? language === "en"
                        ? "University"
                        : "Universitas"
                      : "Global"}
                  </span>
                  <span className="mono-type text-[0.62rem] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white bg-neutral-100/90 dark:bg-neutral-800/80">
                    {placementText}
                  </span>
                </div>

                {/* Trophy & Title — Monochrome Icon */}
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <Trophy className="h-4 w-4" />
                  </span>
                  <h3 className="display-type text-lg font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                    {titleText}
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
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono-type text-[0.6rem] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet Points with Bold Emphasis */}
                <ul className="space-y-2.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {displayBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-neutral-800 dark:text-neutral-300 text-[10px] mt-0.5 shrink-0" aria-hidden="true">▪</span>
                      <span>{renderHighlightedText(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Expand/Collapse Toggle */}
              <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-center gap-1 text-xs mono-type font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors py-1 cursor-pointer"
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
