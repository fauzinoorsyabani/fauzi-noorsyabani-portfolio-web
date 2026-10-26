/**
 * Signal Ledger content system — every factual portfolio detail and replacement
 * placeholder lives here so Fauzi can update the site without touching the layout.
 */

export const assetUrls = {
  logo: "/logo-thumb.webp",
  heroData: "https://placehold.co/800x600?text=Project+1",
  fauziJournal: "/fauzi-journal.webp",
  geoBooster: "/geobooster.webp",
  idxMarket: "/idx-market-dashboard.webp",
  tuitionArt: "/dashboard-kapasitas-akademik.webp",
  dashboardExecutive: "/dashboard-kapasitas-akademik.webp",
  dashboardDetail: "/dashboard-detail-prodi.webp",
  dashboardTrend: "/dashboard-tren-longitudinal.webp",
  productSystemsArt: "https://placehold.co/800x600?text=Project+3",
  heroPhoto: "/fauzi-about-white.webp",
  aboutPhoto: "/fauzi-hero-google.webp",
  profilePhotoDark: "/fauzi-portrait-dark.webp",
  profilePhotoWhite: "/fauzi-about-white.webp",
  profilePhotoGoogle: "/fauzi-hero-google.webp",
  profilePhoto: "/fauzi-about-white.webp",
} as const;


export const links = {
  resume: "/Fauzi_Noorsyabani_CV.pdf",
  github: "https://github.com/fauzinoorsyabani",
  linkedin: "https://linkedin.com/in/fauzinoorsyabani",
  medium: "https://medium.com/@fnoorsyabani",
  email: "mailto:fauzinoorsyabani05@gmail.com",
} as const;

export const person = {
  name: "Fauzi Noorsyabani",
  role: "Full Stack AI Engineer",
  headline:
    "I engineer production-grade AI systems and full-stack software—connecting model integration, data pipelines, and responsive web architecture into reliable tools that solve real problems.",
  education: "Information Systems @ Universitas Siliwangi",
  location: "Tasikmalaya, Indonesia",
  email: "fauzinoorsyabani05@gmail.com",
  availability: "Open to Work",
  about:
    "Fauzi is a Full Stack AI Engineer and Information Systems graduate from Universitas Siliwangi (GPA 3.89/4.00, Cum Laude) specializing in AI/LLM engineering and data systems. He led a 5-member engineering team through a 900+ hour AI product capstone with Pijak × IBM SkillsBuild shipping PolaStok, and was selected as Google Student Ambassador Campus Lead from 12,000+ applicants nationwide. His technical practice spans production RAG pipelines (FastAPI, LangChain), dimensional data warehousing with Looker Studio dashboards, and scalable full-stack web applications (React, TypeScript, Laravel).",
  shortBio:
    "Connecting machine learning, LLM orchestration, and modern web architecture into practical software that drives informed decisions.",
} as const;

export const focusAreas = [
  {
    label: "Full-Stack Web Engineering",
    detail: "Building fast, modular, and responsive web applications with React, TypeScript, Laravel, and FastAPI that scale smoothly under load.",
    index: "01",
  },
  {
    label: "Data Warehousing & BI",
    detail: "Architecting dimensional star-schema warehouses, automated ETL pipelines, and Looker Studio dashboards for institutional decision-making.",
    index: "02",
  },
  {
    label: "Technical Leadership & Outreach",
    detail: "Advancing responsible AI adoption as Campus Lead for the Google Student Ambassador Program and mentoring student developer communities.",
    index: "03",
  },
] as const;

export const facts = [
  ["Location", "Tasikmalaya, Indonesia"],
  ["Education", "Information Systems, Universitas Siliwangi (GPA 3.89, Cum Laude)"],
  ["Core Specialization", "Applied AI, LLM Integration, Data Warehousing, Full-Stack Web"],
  ["Status", "Open to full-time roles & high-impact projects"],
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
    title: "IDX Market Intelligence — Automated Star-Schema Warehouse & Pipeline",
    date: "2026",
    description:
      "Architected and deployed an automated end-to-end ELT data pipeline and Kimball dimensional warehouse (Star Schema) tracking 30 core IDX30 equities, USD/IDR currency rates, and IHSG benchmark across 27,150+ historical records. Engineered fault-tolerant ingestion with idempotent upserts (INSERT ... ON CONFLICT DO UPDATE) ensuring 0% duplicate records, paired with a circuit-breaker Data Quality Gate executing 8 automated deterministic integrity rules (validating positive price bounds, foreign key constraints, and 35% ARA/ARB regulatory anomaly thresholds). Synchronized daily at 17:00 WIB via automated GitHub Actions CI/CD cron jobs with 0 server operational costs, and delivered via an interactive Streamlit & Plotly analytics dashboard alongside decoupled CSV data marts for Microsoft Power BI.",
    result:
      "Processed 27,150+ historical records across 30 IDX30 tickers with 0% duplication, 8 automated data quality gates, 100% pytest test suite pass rate, and automated daily synchronization at 17:00 WIB.",
    technologies: ["Python", "PostgreSQL", "Star Schema", "ETL", "Streamlit", "Plotly", "GitHub Actions", "Power BI"],
    category: "Data Engineering · Financial Intelligence",
    art: assetUrls.idxMarket,
    links: {
      source: "https://github.com/fauzinoorsyabani/idx-market-dashboard",
    },
  },
  {
    title: "Geo Booster (ZiuLabs) — Digital Commerce & AI SaaS Platform",
    date: "2026",
    description:
      "Architected and deployed a production-grade modular PHP digital commerce platform and AI SaaS foundation for curated digital products and AI tooling licenses. Built with a modular monolith architecture following OWASP security standards, featuring an interactive violet animated UI, automated catalog and inventory management, WhatsApp order negotiation & checkout flows, and self-hosted Cloudflare Tunnel reverse-proxy routing for the custom domain (ziulabs.biz.id).",
    result: "Live production commerce ecosystem with sub-second page performance, zero frontend build overhead, and automated Cloudflare edge tunneling.",
    technologies: ["PHP 8.3+", "MySQL 8", "Cloudflare Tunnel", "Modular Monolith", "JavaScript", "Tailwind CSS"],
    category: "Product Engineering · Full-Stack",
    art: assetUrls.geoBooster,
    links: {
      demo: "https://www.ziulabs.biz.id",
      source: "https://github.com/fauzinoorsyabani/geobooster",
    },
  },
  {
    title: "Fauzi / Journal — Editorial Web Publishing & Studio Platform",
    date: "2026",
    description:
      "Architected and deployed a production editorial publishing system and authoring studio featuring automated client-side WebP image optimization, Clerk authentication with multi-tier role authorization (Super Admin vs Author), and TiDB Cloud Serverless database. Designed an immersive, tactile typography system with a TipTap rich-text canvas, debounced LocalStorage draft recovery, custom domain integration (fauzijournal.web.id), and serverless Vercel deployment.",
    result: "Live publication system handling automated WebP asset pipelines, sub-second edge response times, and 100% free serverless architecture.",
    technologies: ["React", "TypeScript", "tRPC", "MySQL", "Tailwind CSS", "Vercel"],
    category: "Product Engineering · Full-Stack",
    art: assetUrls.fauziJournal,
    links: {
      demo: "https://fauzijournal.web.id",
      source: "https://github.com/fauzinoorsyabani/fauzi-journal",
    },
  },
  {
    title: "Academic Capacity Data Warehouse",

    date: "2025 — 2026",
    description:
      "Star-schema data warehouse and Decision Support System (DSS) developed for Universitas Siliwangi to monitor academic capacity, student-to-lecturer ratios, and accreditation compliance across 35 study programs using longitudinal PDDikti aggregate data. Built with robust ETL pipelines and interactive Google Looker Studio executive dashboards for institutional strategic decision-making.",
    result: "Centralized ratio monitoring across 35 academic programs over 5 reporting periods with automated compliance threshold tracking.",
    technologies: ["Google Looker Studio", "Data Warehouse", "Star Schema", "ETL", "SQL", "Decision Support System"],
    category: "Business Intelligence · Data Warehouse",
    art: assetUrls.tuitionArt,
    links: {},
  },
  {
    title: "Higher Education Tuition & Policy Analytics",
    date: "Feb 2025 — Jun 2025",
    description:
      "End-to-end data analytics and regression modeling for VINIX Seven Aurum (MSIB), analyzing higher education tuition cost structures, enrollment capacity, and student-to-lecturer distributions across 97 academic programs and 11 Indonesian universities. Delivered interactive dashboards and strategic policy recommendations to university leadership.",
    result: "Modeled 97 academic programs across 11 universities with a 35% improvement in policy insight accuracy.",
    technologies: ["Python", "Pandas", "Power BI", "Google Looker Studio", "Regression Models", "Data Analytics"],
    category: "Data Science · MSIB Program",
    art: assetUrls.dashboardTrend,
    links: {},
  },
  {
    title: "PolaStok — AI Inventory Forecasting Platform",
    date: "Feb 2026 — Jul 2026",
    description:
      "Led a five-member cross-functional team (PJK-GM041) through a 900+ hour capstone to design, build, and deploy an AI-powered inventory forecasting platform for Indonesian SMEs. Owned delivery end-to-end: data preparation, model integration, and MVP deployment; applied LLM orchestration and prompt engineering for stock prediction and reorder recommendations.",
    result: "Demand prediction, stock anomaly detection, and AI-generated reorder recommendations for Indonesian SMEs.",
    technologies: ["Python", "Machine Learning", "Generative AI", "Full-Stack", "FastAPI", "React"],
    category: "Applied AI · Team Lead",
    art: assetUrls.heroData,
    links: {},
  },
  {
    title: "ClinicalNote AI — Clinical Documentation Platform",
    date: "2025",
    description:
      "Built a clinical documentation system with a FastAPI backend integrating OpenAI Whisper and GPT-4 for sub-two-second transcription latency. Designed reusable AI Skills for automated summarization, ICD-10 code suggestion, and medication extraction as modular LangChain chains; containerized and deployed on AWS EC2.",
    result: "Designed for sub-two-second OpenAI-backed transcription latency with automated ICD-10 diagnostic coding.",
    technologies: ["FastAPI", "OpenAI API", "LangChain", "React", "Docker", "AWS EC2"],
    category: "Applied AI · Solo Development",
    links: {},
  },
  {
    title: "Wisata Indonesia — Tourism Booking Interface",
    date: "Mar 2025 — May 2025",
    description:
      "Designed and engineered a modern, responsive React tourism booking interface. Integrated dynamic booking workflows, user behavioral adaptation, and real-time destination availability data with fluid micro-interactions and accessible UI patterns.",
    result: "High-performance, mobile-first booking experience with zero layout shift and sub-100ms interaction feedback.",
    technologies: ["React", "JavaScript", "CSS3", "REST API", "Responsive Design"],
    category: "Product Engineering · Frontend",
    art: assetUrls.productSystemsArt,
    links: {},
  },
  {
    title: "NusaLadang — Smart Farming Platform",
    date: "Aug 2024 — Dec 2024",
    description:
      "Engineered an end-to-end smart farming investment platform connecting landowners with agricultural investors. Implemented digital land leasing, dynamic crop pricing calculators, yield projection logic, and transparent digital contracts with role-based access.",
    result: "Full-stack contract and investment workflow with dynamic pricing and land management for agricultural partners.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3"],
    category: "Product Engineering · Full-Stack",
    art: assetUrls.productSystemsArt,
    links: {},
  },
  {
    title: "AI Study Assistant — RAG Knowledge Q&A",
    date: "2025",
    description:
      "Engineered a Retrieval-Augmented Generation (RAG) knowledge assistant enabling semantic search over 500+ pages of academic lecture notes. Implemented vector indexing with ChromaDB, source citation, and a streaming FastAPI microservice paired with a Streamlit chat UI and conversational memory.",
    result: "Accurate contextual retrieval with exact page citations and multi-turn conversational context.",
    technologies: ["LangChain", "ChromaDB", "FastAPI", "Streamlit", "Python", "RAG"],
    category: "Applied AI · Solo Development",
    links: {},
  },
  {
    title: "HR Analytics Capstone — LLM Data Pipeline",
    date: "2025",
    description:
      "Developed an enterprise NLP and data pipeline for IBM SkillsBuild × Hacktiv8 that processed 838,566 employee reviews. Orchestrated multi-step processing: cleaning, LLM classification using IBM Granite, automatic sentiment summarization, and executive recommendation synthesis.",
    result: "Scaled data transformation and sentiment synthesis across 838,566 employee records.",
    technologies: ["IBM Granite", "Data Pipeline", "Python", "Pandas", "Analytics", "NLP"],
    category: "Data Science · AI Pipeline",
    links: {},
  },
  {
    title: "RA Al-Fathunnisa — Academic Portal & PPDB",
    date: "Feb 2024 — Jun 2024",
    description:
      "Built a production full-stack student admission (PPDB) and academic administration management system for an educational institution. Automated registration workflows, student records, document verification, and administrative reporting.",
    result: "Reduced manual administrative processing time by 50% through workflow automation.",
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL", "Git", "GitHub Actions"],
    category: "Client Work · Full-Stack",
    links: {},
  },
  {
    title: "CV. Putra AR — CRM & Loyalty Platform",
    date: "Mar 2024 — Jun 2024",
    description:
      "Developed and shipped a CRM-focused web platform for an F&B and retail client. Features customer loyalty tracking, automated feedback collection, service catalog management, and automated CI/CD deployment pipelines.",
    result: "Delivered production system two weeks ahead of schedule with zero-downtime deployment.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "CI/CD"],
    category: "Client Work · Full-Stack",
    links: {},
  },
];

export const otherProjects: readonly Project[] = [];

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
    date: "January 2025",
    location: "Creative Center Tasikmalaya",
    details: [
      "Supported a 48-hour collaborative game-creation event for developers, artists, and storytellers.",
      "Helped strengthen inclusive access to game development and the local technology ecosystem.",
    ],
  },
] as const;

export const awards = [
  [
    "1st Place",
    "Life After DDC Challenge",
    "Dicoding Developer Conference · AI for Cloud Infra & DevOps track",
    "2026",
    "Won among competing teams from across Indonesia in the AI for Cloud Infrastructure & DevOps track, demonstrating applied AI system design and cloud-native deployment architecture.",
  ],
  [
    "1st Place",
    "MyBDDInsight Challenge",
    "Badan Ekraf Developer Day · Dicoding & Kemenparekraf",
    "Nov 2025",
    "Ranked first in a nationally-scoped data insight challenge co-hosted by Indonesia's Creative Economy Agency and Dicoding, delivering data-driven recommendations backed by structured analysis.",
  ],
  [
    "2nd Place",
    "Bookstagram Challenge",
    "Bank Indonesia",
    "Apr 2025",
    "Recognized by Bank Indonesia for outstanding creative and informational content, competing among participants from multiple Indonesian universities and institutions.",
  ],
  [
    "Gold Medal",
    "Mathematics",
    "Kompetisi Sains Mahasiswa Nasional Indonesia (KSPI)",
    "Jul 2024",
    "Awarded gold in the national student science olympiad for Mathematics, competing against participants from universities across Indonesia.",
  ],
  [
    "Gold Medal",
    "Accounting",
    "Indonesian Student Science Competition (ISSC)",
    "Jul 2024",
    "Achieved gold medal in the International Student Science Competition, excelling in quantitative and analytical disciplines among multi-university competitors.",
  ],
  [
    "Gold Medal",
    "Mathematics",
    "Olimpiade Sains Nusantara (OLIMNUS)",
    "Jul 2024",
    "Gold medal in OLIMNUS Mathematics Olympiad, a national-level competition testing advanced mathematical reasoning and problem-solving skills.",
  ],
  [
    "Finalist",
    "SMEFU PART XIV",
    "Informatics Competition · Universitas Siliwangi",
    "2023",
    "Selected as finalist in an informatics and programming competition at the regional university level, demonstrating strong computational and software engineering foundations.",
  ],
] as const;

export const certifications = [
  {
    name: "ICT Project Manager",
    issuer: "BNSP Indonesia",
    date: "Valid Sep 2024 — Sep 2027",
    tag: "Professional",
    description:
      "National competency certification covering project integration, scope, time, cost, quality, risk, procurement, and stakeholders.",
    credential: "/certificates/cert-bnsp-ict-pm.webp",
  },
  {
    name: "Google Student Ambassador — Certificate of Graduation",
    issuer: "Google Student Ambassador Program",
    date: "Class of 2025",
    tag: "Google / Leadership",
    description:
      "Certificate of graduation awarded in recognition of successful participation as Google Student Ambassador, selected from 12,000 students nationwide, championing Google AI adoption across campus.",
    credential: "/certificates/cert-google-student-ambassador.webp",
  },
  {
    name: "Microsoft Office Specialist: Excel Associate",
    issuer: "Microsoft",
    date: "Dec 2024",
    tag: "Professional",
    description: "Excel proficiency covering workbooks, data visualization, formulas, formatting, and professional data management.",
    credential: "/certificates/cert-mos-excel.webp",
  },
  {
    name: "Dicoding Pijak Full Graduate · AI Capstone",
    issuer: "Yayasan Dicoding Indonesia × IBM SkillsBuild",
    date: "2026",
    tag: "Program",
    description:
      "Completed 900+ hours of AI engineering training and led a 5-member team to ship PolaStok, an AI inventory forecasting MVP.",
    credential: "/certificates/cert-dicoding-pijak-grad.webp",
  },
  {
    name: "Internship Certificate · Data Science Division",
    issuer: "PT VINIX Seven Aurum",
    date: "Feb — May 2025",
    tag: "Internship",
    description:
      "Rated 'very good' for the MSIB Batch 2 data science internship: analytics across 97 study programs from 11 universities.",
    credential: "/certificates/Data_sains_Sertifikat_magang_Batch_2.webp",
  },
  {
    name: "Claude on Google Cloud",
    issuer: "Anthropic Claude Academy",
    date: "Oct 2026",
    tag: "Anthropic / Google Cloud",
    description:
      "Official Anthropic completion badge validating enterprise Claude deployment, Vertex AI integration, IAM governance, and production workloads on Google Cloud (66 lessons · 8.5 hr).",
    credential: "/certificates/claude-on-google-cloud.webp",
    verifyUrl: "https://academy.claude.com/verify/901962c95e866b0145edd4ebf7649307",
  },
  {
    name: "Create ML Models with BigQuery ML",
    issuer: "Google Cloud",
    date: "Feb 2026",
    tag: "Google Cloud / ML",
    description:
      "Validates competency in building, training, evaluating, and deploying SQL-based predictive machine learning models in BigQuery. Verified on Credly.",
    credential: "/certificates/google-cloud-bigquery-ml.webp",
    verifyUrl: "https://www.credly.com/badges/2dc26caa-8fc7-4b9e-9031-85df4dde45d9/public_url",
  },
  {
    name: "Build Real World AI Applications with Gemini & Imagen",
    issuer: "Google Cloud",
    date: "Jan 2026",
    tag: "Google Cloud / AI",
    description:
      "Validates hands-on proficiency deploying production multimodal generative AI applications with Gemini and Imagen on Vertex AI. Verified on Credly.",
    credential: "/certificates/google-cloud-gemini-imagen.webp",
    verifyUrl: "https://www.credly.com/badges/91ebe91c-cd6f-46a3-810e-7ad60a8d3d8d/public_url",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "Jan 2026",
    tag: "Google Cloud / AI",
    description:
      "Validates advanced prompt engineering techniques, multimodal prompt design, and system parameter tuning with Vertex AI Gemini. Verified on Credly.",
    credential: "/certificates/google-cloud-prompt-design.webp",
    verifyUrl: "https://www.credly.com/badges/6f76b8fe-85b3-4771-bc14-a91cee1d35d4/public_url",
  },
  {
    name: "Build Serverless Applications with Cloud Run",
    issuer: "Google Cloud",
    date: "Jan 2026",
    tag: "Google Cloud / Serverless",
    description:
      "Validates containerized microservices architecture, event-driven integrations, and auto-scaling serverless deployments on Cloud Run. Verified on Credly.",
    credential: "/certificates/google-cloud-cloud-run.webp",
    verifyUrl: "https://www.credly.com/badges/97690e11-79dc-48ab-8282-400556a08db0/public_url",
  },
  {
    name: "AWS Educate: Introduction to Generative AI",
    issuer: "Amazon Web Services (AWS)",
    date: "Oct 2026",
    tag: "AWS / AI",
    description:
      "Official AWS training badge validating fundamental understanding of generative AI concepts, foundation models, and enterprise use cases. Verified on Credly.",
    credential: "/certificates/aws-educate-generative-ai.webp",
    verifyUrl: "https://www.credly.com/badges/d804b257-b110-4cfd-b27c-90a4a084c420/public_url",
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic Claude Academy",
    date: "Oct 2026",
    tag: "Anthropic / MCP",
    description:
      "Official Anthropic certification covering advanced Model Context Protocol architecture, client-server transport patterns, tool orchestration, and secure prompt integration.",
    credential: "/certificates/claude-mcp-advanced.webp",
    verifyUrl: "https://academy.claude.com/verify/3164db2a716cc39608cbbd191c0425a3",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Claude Academy",
    date: "Oct 2026",
    tag: "Anthropic / MCP",
    description:
      "Foundational Model Context Protocol certification covering universal context standard, local server integration, and Claude desktop & agent extensibility.",
    credential: "/certificates/claude-mcp-intro.webp",
    verifyUrl: "https://academy.claude.com/verify/b532242cffda9ab9d5c17757b81079e9",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic Claude Academy",
    date: "Oct 2026",
    tag: "Anthropic / CLI",
    description:
      "Hands-on certification in CLI agentic coding, project-level codebase reasoning, automated refactoring, and AI-native software delivery with Claude Code.",
    credential: "/certificates/claude-code-in-action.webp",
    verifyUrl: "https://academy.claude.com/verify/818ae9c581ee8d929c9e8d55ec8b9cb8",
  },
  {
    name: "Building Effective Human-Agent Teams",
    issuer: "Anthropic Claude Academy",
    date: "Oct 2026",
    tag: "Anthropic / Agents",
    description:
      "Official certification on multi-agent orchestration, autonomous subagents, human-in-the-loop task delegation, and effective human-agent collaborative systems.",
    credential: "/certificates/claude-human-agent-teams.webp",
    verifyUrl: "https://academy.claude.com/verify/7db647a5e3e0002d47c08ff882055ad3",
  },
  {
    name: "Membangun Sistem Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    tag: "AI / ML",
    description:
      "Advanced machine learning systems certification covering end-to-end ML lifecycle, pipeline orchestration, model serving, and CI/CD for ML (0LZ0YMO5NX65).",
    credential: "/certificates/cert-dicoding-membangun-sistem-ml.webp",
    verifyUrl: "https://dicoding.com/certificates/0LZ0YMO5NX65",
  },
  {
    name: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    tag: "AI / Deep Learning",
    description:
      "Comprehensive deep learning certification covering neural networks with TensorFlow and Keras, computer vision, NLP, and time series modeling (1OP8RRY62ZQK).",
    credential: "/certificates/cert-dicoding-deep-learning.webp",
    verifyUrl: "https://dicoding.com/certificates/1OP8RRY62ZQK",
  },
  {
    name: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    date: "Aug 2026",
    tag: "AI / Engineering",
    description:
      "Certification in Spec-Driven Development (SDD) using Kiro, standardizing AI-assisted workflows from specifications and design to automated task implementation (N9ZO0EM4YXG5).",
    credential: "/certificates/cert-dicoding-spec-driven-dev.webp",
    verifyUrl: "https://dicoding.com/certificates/N9ZO0EM4YXG5",
  },
  {
    name: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    date: "Dec 2025",
    tag: "AI / Prompting",
    description:
      "Practical prompt engineering certification covering LLM reasoning patterns, few-shot prompting, and AI-assisted software engineering workflows (1OP8JMQRLPQK).",
    credential: "/certificates/cert-dicoding-prompt-eng.webp",
    verifyUrl: "https://dicoding.com/certificates/1OP8JMQRLPQK",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia",
    date: "Apr 2024",
    tag: "Cloud / AWS",
    description:
      "Foundational AWS cloud knowledge across global infrastructure, security, storage, pricing, and architecture. Certified by Dicoding Indonesia (MRZMEGO23PYQ).",
    credential: "/certificates/cert-dicoding-aws-cloud.webp",
    verifyUrl: "https://dicoding.com/certificates/MRZMEGO23PYQ",
  },
  {
    name: "Gemini Certified Student (University)",
    issuer: "Google for Education",
    date: "2025",
    tag: "Google",
    description: "Certified for the knowledge, skills, and basic competencies needed to use Google AI. Valid Oct 2025 — Oct 2028.",
    credential: "/certificates/gemini-certified-student.webp",
  },
  {
    name: "Belajar Dasar AI (AI Fundamentals)",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025",
    tag: "AI / ML",
    description:
      "Official Dicoding certificate of competence in artificial intelligence fundamentals, machine learning principles, and modern AI algorithms. Valid Oct 2025 — Oct 2028 (KEXL2YGVWZG2).",
    credential: "/certificates/cert-dicoding-belajar-dasar-ai.webp",
    verifyUrl: "https://dicoding.com/certificates/KEXL2YGVWZG2",
  },
  {
    name: "IBM Granite Learning Path",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    tag: "AI / LLM",
    description:
      "Three courses on classifying and summarizing data with IBM Granite (6.5 learning hours), the foundation for the 838K-review HR analytics pipeline.",
    credential: "/certificates/ibm-granite-learning-path.webp",
  },
  {
    name: "Finalis LKTI Nasional (SMEFU XIV)",
    issuer: "HMIF Universitas Siliwangi",
    date: "Oct 2023",
    tag: "Competition / Paper",
    description:
      "Finalist in the National Scientific Writing Competition (LKTI Nasional) at SMEFU PARTY XIV (HARMONY), organized by the Informatics Engineering Student Association of Universitas Siliwangi (No. 031/UN58.13.14/SERT/PAN.SMEFU/X/2023).",
    credential: "/certificates/cert-finalist-lkti-unsil.webp",
  },
  {
    name: "MTI Consulting ITB Case Competition (M3C)",
    issuer: "MTI Institut Teknologi Bandung (ITB)",
    date: "2025",
    tag: "Consulting / Case",
    description:
      "Certificate of appreciation for competing in MTI Consulting ITB Case Competition 2025: Transforming Industries through Circular Economy.",
    credential: "/certificates/cert-m3c-itb-2025.webp",
  },
  {
    name: "Liga Bisnis Sosial Siliwangi (LIBSOS)",
    issuer: "UPT Kewirausahaan Mahasiswa, Universitas Siliwangi",
    date: "Feb 2023",
    tag: "Social Business",
    description:
      "Participated in a 5-day social-business league (17-21 Feb 2023) run in Selamanik Village, Ciamis, with CV Cakrawala Sarwa.",
    credential: "/certificates/libsos-siliwangi.webp",
  },
  {
    name: "Badan EKRAF Developer Day 2025",
    issuer: "Kemenparekraf / Baparekraf & Dicoding",
    date: "Nov 2025",
    tag: "Event / Ecosystem",
    description:
      "Official certificate of attendance for the offline Badan EKRAF Developer Day 2025 in Bandung, organized by the Ministry of Tourism & Creative Economy / EKRAF Agency with Dicoding Indonesia.",
    credential: "/certificates/cert-bdd-ekraf-2025.webp",
  },
  {
    name: "Dicoding Developer Conference 2026",
    issuer: "Dicoding Indonesia & EKRAF",
    date: "Apr 2026",
    tag: "Conference",
    description:
      "Official certificate of attendance for DDC 2026 in Bandung, supported by Kemenparekraf, DBS Foundation, IBM SkillsBuild, Lintasarta, and Indosat.",
    credential: "/certificates/cert-ddc-2026.webp",
  },
  {
    name: "AI Prompting Skills for Professionals",
    issuer: "VINIX7 Soft-skill Training",
    date: "Feb 2025",
    tag: "Training",
    description: "Soft-skill training on practical AI prompting techniques for professional workflows, held during the MSIB program.",
    credential: "/certificates/1_Sertifikat_softskill.webp",
  },
  {
    name: "ICONIC IT Participant",
    issuer: "HMIF Universitas Siliwangi",
    date: "Sep 2024",
    tag: "Event",
    description: "Participant in the Innovative Competition and National Informatics Conference on digital transformation through technology.",
    credential: "/certificates/Sertifikat_Peserta_ICONIC_IT_Fauzi_Noorsyabani.webp",
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
