/**
 * Signal Ledger content system — every factual portfolio detail and replacement
 * placeholder lives here so Fauzi can update the site without touching the layout.
 */

export const assetUrls = {
  logo: "/logo-thumb.webp",
  heroData: "https://placehold.co/800x600?text=Project+1",
  tuitionArt: "/dashboard-kapasitas-akademik.png",
  dashboardExecutive: "/dashboard-kapasitas-akademik.png",
  dashboardDetail: "/dashboard-detail-prodi.png",
  dashboardTrend: "/dashboard-tren-longitudinal.png",
  productSystemsArt: "https://placehold.co/800x600?text=Project+3",
  profilePhoto: "/fauzinoorsyabani-foto.jpeg",
} as const;

export const links = {
  resume: "/Fauzi_Noorsyabani_CV.pdf",
  github: "https://github.com/fauzinoorsyabani",
  linkedin: "https://linkedin.com/in/fauzinoorsyabani",
  email: "mailto:fauzinoorsyabani05@gmail.com",
  phone: "tel:+6281310641534",
} as const;

export const person = {
  name: "Fauzi Noorsyabani",
  role: "Full Stack AI Engineer",
  headline:
    "I build end-to-end AI-powered products, from data and models through backend systems, full-stack experiences, and measurable delivery.",
  education: "Information Systems @ Universitas Siliwangi",
  location: "Tasikmalaya, Indonesia",
  email: "fauzinoorsyabani05@gmail.com",
  phone: "+62 813-1064-1534",
  availability: "Open to Work",
  about:
    "Fauzi is an innovation-driven Full Stack AI Engineer with a strong foundation in applied AI, data science, backend development, and product delivery. He builds end-to-end digital systems with Python, React, Laravel, and modern LLM tooling—then pairs the technical work with clear communication, product thinking, and community leadership.",
  shortBio:
    "From analysis and forecasting to deployed AI products, Fauzi connects the technical work to decisions people can actually use.",
} as const;

export const focusAreas = [
  {
    label: "Build",
    detail: "Full-stack products and responsive digital experiences.",
    index: "01",
  },
  {
    label: "Analyze",
    detail: "Data dashboards, forecasting, and decision-support insights.",
    index: "02",
  },
  {
    label: "Lead",
    detail: "AI advocacy, student communities, events, and technology adoption.",
    index: "03",
  },
] as const;

export const facts = [
  ["Based in", "Tasikmalaya, Indonesia"],
  ["Education", "Information Systems, Universitas Siliwangi"],
  ["Current focus", "End-to-end AI systems, data products, full-stack delivery"],
  ["Availability", "Open to work"],
] as const;

export type TechCategory = {
  id: string;
  filterKey: string;
  title: string;
  code: string;
  description: string;
  skills: readonly string[];
};

export const techStackCategories: readonly TechCategory[] = [
  {
    id: "languages",
    filterKey: "languages",
    title: "Programming Languages",
    code: "01",
    description: "Languages I've mastered for building robust and efficient software solutions.",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C", "C++", "C#", "Go", "Dart", "SQL"],
  },
  {
    id: "frontend",
    filterKey: "frontend",
    title: "Frontend Technologies",
    code: "02",
    description: "Tools and frameworks I use to create responsive, interactive user interfaces.",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Bootstrap", "Flutter"],
  },
  {
    id: "backend",
    filterKey: "backend",
    title: "Backend Technologies",
    code: "03",
    description: "Technologies I leverage to build scalable server-side applications and APIs.",
    skills: ["Python", "FastAPI", "Laravel", "Node.js", "Express", "Flask", "PHP", "Go", "Supabase", "REST API"],
  },
  {
    id: "ai-ml",
    filterKey: "ai-ml",
    title: "AI & ML",
    code: "04",
    description: "Machine learning, statistical modeling, and data intelligence frameworks.",
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras", "PyTorch", "Jupyter", "Streamlit", "Power BI", "Google Looker", "Tableau", "OpenCV"],
  },
  {
    id: "ai-tools",
    filterKey: "ai-tools",
    title: "AI Developer Tools",
    code: "05",
    description: "AI coding assistants and agentic tools I use to enhance productivity and problem-solving.",
    skills: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Manus AI",
      "DeepSeek",
      "Cursor",
      "GitHub Copilot",
      "Antigravity",
      "OpenAI Codex",
      "LangChain",
      "LangGraph",
      "Google Colab",
    ],
  },
  {
    id: "databases",
    filterKey: "databases",
    title: "Databases & Data Store",
    code: "06",
    description: "Database systems I'm proficient in for managing and optimizing data storage.",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Supabase", "Firebase", "ChromaDB"],
  },
  {
    id: "devops",
    filterKey: "devops",
    title: "DevOps & Cloud",
    code: "07",
    description: "Cloud platforms and tools I use for deployment, CI/CD, and infrastructure management.",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "Cloudflare", "Vercel"],
  },
  {
    id: "tools",
    filterKey: "tools",
    title: "Development Tools",
    code: "08",
    description: "Utilities and platforms that enhance my development workflow and productivity.",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Atlassian", "VS Code", "Postman", "Figma", "Slack"],
  },
] as const;

export const skillGroups = techStackCategories;

export type Project = {
  title: string;
  date: string;
  description: string;
  technologies: readonly string[];
  result?: string;
  category: string;
  art?: string;
  featured?: boolean;
  links?: { caseStudy?: string; demo?: string; source?: string };
};

export const featuredProjects: readonly Project[] = [
  {
    title: "Tuition Cost & Academic Capacity Dashboard",
    date: "Feb 2025 — Jun 2025",
    description:
      "Interactive Decision Support System (DSS) and Business Intelligence data warehouse analyzing higher education capacity, tuition trends, and student-to-lecturer ratios across academic programs. Developed using ETL pipelines and interactive Google Looker Studio dashboards for institutional policy and trend monitoring.",
    result: "Automated institutional capacity monitoring across 35 academic programs with longitudinal multi-period forecasting.",
    technologies: ["Google Looker Studio", "Business Intelligence", "Data Warehouse", "ETL", "Python", "SQL"],
    category: "Business Intelligence · Decision Support",
    art: assetUrls.tuitionArt,
    featured: true,
    links: {}, // TODO: add case study, live demo, and source URLs.
  },
  {
    title: "PolaStok",
    date: "Feb 2026 — Jul 2026",
    description:
      "Led a five-member team through a 900+ hour capstone to design and ship an AI-powered inventory forecasting platform for Indonesian SMEs.",
    result: "Demand prediction, anomaly detection, and AI-generated reorder recommendations.",
    technologies: ["Python", "ML", "Generative AI", "Full-Stack"],
    category: "Applied AI · Team Lead",
    art: assetUrls.heroData,
    links: {}, // TODO: add case study, live demo, and source URLs.
  },
  {
    title: "ClinicalNote AI",
    date: "2025",
    description:
      "Built a clinical documentation prototype with real-time transcription and modular LLM skills for summary, ICD-10 suggestion, and medication extraction.",
    result: "Designed for sub-two-second OpenAI-backed transcription latency.",
    technologies: ["FastAPI", "OpenAI API", "React", "Docker"],
    category: "Applied AI · Solo Development",
    links: {}, // TODO: add case study, live demo, and source URLs.
  },
  {
    title: "Wisata Indonesia",
    date: "Mar 2025 — May 2025",
    description:
      "Designed a responsive React tourism booking interface, adapting the UI and booking logic to user behavior and real-time tourism data.",
    technologies: ["React", "JavaScript", "CSS3", "REST API"],
    category: "Product Engineering",
    art: assetUrls.productSystemsArt,
    links: {}, // TODO: add case study, live demo, and source URLs.
  },
  {
    title: "NusaLadang",
    date: "Aug 2024 — Dec 2024",
    description:
      "Developed a smart farming investment platform with land leasing, dynamic pricing, crop projection logic, and transparent digital contracts.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Product Engineering",
    art: assetUrls.productSystemsArt,
    links: {}, // TODO: add case study, live demo, and source URLs.
  },
];

export const otherProjects: readonly Project[] = [
  {
    title: "AI Study Assistant",
    date: "2025",
    description:
      "Created a RAG-based knowledge Q&A experience with semantic search over 500+ pages of lecture notes, source citation, and conversation memory.",
    technologies: ["LangChain", "ChromaDB", "FastAPI", "Streamlit"],
    category: "Applied AI · Solo Development",
  },
  {
    title: "HR Analytics Capstone",
    date: "2025",
    description:
      "Processed 838,566 employee reviews using an LLM-powered pipeline for classification, summarization, and executive recommendations.",
    technologies: ["IBM Granite", "Data Pipeline", "Analytics"],
    category: "Data Science",
  },
  {
    title: "Business Intelligence Data Warehouse",
    date: "2025 — 2026",
    description:
      "Designed a star-schema warehouse around national higher-education data and translated findings into a peer-reviewed JITET manuscript.",
    technologies: ["Star Schema", "SQL", "Looker Studio"],
    category: "Research · Business Intelligence",
  },
  {
    title: "CV. Putra AR",
    date: "Mar 2024 — Jun 2024",
    description:
      "Led a CRM-focused website build with customer loyalty and feedback modules, delivered two weeks ahead of schedule.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Client Work",
  },
  {
    title: "RA Al-Fathunnisa",
    date: "Feb 2024 — Jun 2024",
    description:
      "Built a full-stack registration and internship submission system that improved administrative efficiency by 50% through automation.",
    technologies: ["PHP", "Bootstrap", "MySQL", "Git"],
    category: "Client Work",
  },
];

export const experience = [
  {
    type: "Work",
    organization: "Pijak × IBM SkillsBuild",
    role: "AI Engineer · Capstone Program",
    date: "Feb 2026 — Jul 2026",
    location: "Hybrid / Program-based",
    details: [
      "Led five cross-functional teammates to design, build, and deploy PolaStok across 900+ hours of structured product development.",
      "Owned data preparation, model integration, prompt engineering, and MVP delivery for inventory prediction and recommendation features.",
    ],
  },
  {
    type: "Work",
    organization: "VINIX Seven Aurum · MSIB Program",
    role: "Data Science Intern",
    date: "Feb 2025 — Jun 2025",
    location: "Remote",
    details: [
      "Led an end-to-end analytics project across 97 academic programs from 11 Indonesian universities.",
      "Built interactive dashboards with Python, Power BI, and Streamlit, then presented strategic recommendations to stakeholders.",
    ],
  },
  {
    type: "Leadership",
    organization: "Google Student Ambassador Program",
    role: "Campus Lead",
    date: "Sep 2025 — Feb 2026",
    location: "Indonesia",
    details: [
      "Led outreach reaching 1,000+ students through workshops, digital campaigns, and hands-on technology demos.",
      "Advanced responsible adoption of Google’s generative AI ecosystem, including Gemini, in academic productivity.",
    ],
  },
  {
    type: "Work",
    organization: "RA Al-Fathunnisa & CV. Putra AR",
    role: "Full-Stack Web Developer",
    date: "Mar 2024 — Dec 2024",
    location: "Tasikmalaya",
    details: [
      "Shipped production web applications solo for education and F&B clients using PHP/Laravel, MySQL, and React/JavaScript.",
      "Set up automated CI/CD delivery workflows and helped reduce manual administrative processes by 50%.",
    ],
  },
  {
    type: "Leadership",
    organization: "HMSI UNSIL",
    role: "Research & Development Division",
    date: "Jun 2023 — Dec 2024",
    location: "Tasikmalaya",
    details: [
      "Initiated technology bootcamps and data competitions, and organized AI, Big Data, and Business Intelligence seminars with industry experts.",
      "Coordinated cross-functional teams for events involving more than 150 participants.",
    ],
  },
  {
    type: "Work",
    organization: "Konter Pulsa",
    role: "Business Owner",
    date: "May 2022 — Present",
    location: "Tasikmalaya",
    details: [
      "Operate digital services with more than 30 daily transactions and consistent average daily revenue of IDR 300,000.",
      "Implemented data tracking for inventory and transaction flows.",
    ],
  },
  {
    type: "Volunteer",
    organization: "Global Game Jam Tasikmalaya",
    role: "Event Organizer Committee",
    date: "January 2025 · 2026 involvement to confirm",
    location: "Creative Center Tasikmalaya",
    details: [
      "Supported a 48-hour collaborative game-creation event for developers, artists, and storytellers.",
      "Helped strengthen inclusive access to game development and the local technology ecosystem.",
    ],
    note: "TODO: Confirm the final year and wording for the additional 2026 organization effort before publishing.",
  },
] as const;

export const awards = [
  ["1st Place", "Life After DDC Challenge", "Dicoding Developer Conference · AI for Cloud Infra & DevOps track", "2026"],
  ["1st Place", "MyBDDInsight Challenge", "Badan Ekraf Developer Day · Dicoding & Kemenparekraf", "Nov 2025"],
  ["2nd Place", "Bookstagram Challenge", "Bank Indonesia", "Apr 2025"],
  ["Gold Medal", "Mathematics", "Kompetisi Sains Mahasiswa Nasional Indonesia (KSPI)", "Jul 2024"],
  ["Gold Medal", "Accounting", "Indonesian Student Science Competition (ISSC)", "Jul 2024"],
  ["Gold Medal", "Mathematics", "Olimpiade Sains Nusantara (OLIMNUS)", "Jul 2024"],
  ["Finalist", "SMEFU PART XIV", "Informatics Competition · Universitas Siliwangi", "2023"],
] as const;

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational AWS cloud knowledge across infrastructure, security, storage, and reliability.",
    credential: "", // TODO: add credential URL
  },
  {
    name: "ICT Project Manager",
    issuer: "BNSP Indonesia",
    date: "Valid Sep 2024 — Sep 2027",
    description:
      "Certified across project integration, scope, time, cost, quality, risk, procurement, and stakeholder management.",
    credential: "", // TODO: add credential URL
  },
  {
    name: "Microsoft Office Specialist: Excel Associate",
    issuer: "Microsoft",
    date: "Dec 2024",
    description: "Excel proficiency covering workbooks, data visualization, formulas, formatting, and professional data management.",
    credential: "", // TODO: add credential URL
  },
] as const;

export const editableItems = [
  "Professional profile photo",
  "Resume PDF URL",
  "GitHub URL",
  "Project case study, live demo, and source URLs",
  "Credential URLs",
  "Confirmed 2026 Global Game Jam detail",
  "Production contact-form service (the site currently uses a safe mailto fallback)",
] as const;
