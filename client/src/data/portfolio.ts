/**
 * Signal Ledger content system — every factual portfolio detail and replacement
 * placeholder lives here so Fauzi can update the site without touching the layout.
 */

export const assetUrls = {
  logo: "/logo-thumb.webp",
  heroData: "https://placehold.co/800x600?text=Project+1",
  polastok: "/polastok-web.webp",
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
  airQuality: "/air-quality-intelligence.webp",
  wisataJelajah: "/wisata-jelajah-indonesia.webp",
  pulseai: "/pulseai-digital-wellness.webp",
  lokaTravel: "/loka-travel-recommender.webp",
  foodPrice: "/food-price-intelligence.webp",
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
  shortDescription: string;
  description: string;
  highlights?: readonly string[];
  technologies: readonly string[];
  result?: string;
  category: string;
  art?: string;
  featured?: boolean;
  links?: { caseStudy?: string; demo?: string; source?: string };
};

export const featuredProjects: readonly Project[] = [
  {
    title: "Loka Travel — AI Recommender System & Group Allocation Platform",
    date: "2026",
    shortDescription:
      "Enterprise travel package and hotel recommendation platform featuring User-Based Collaborative Filtering (Cosine Similarity), Content-Based demographic allocation, and 5-Fold Cross Validation achieving 80.63% accuracy and 0.9689 MAE.",
    description:
      "**Architected and deployed a production-grade travel package and hotel recommendation system** powered by hybrid **User-Based Collaborative Filtering (UBCF)** and **Content-Based demographic allocation** across a curated catalog of **797 hotels in 11 Indonesian cities**.\n\nEngineered **dynamic room allocation algorithms** factoring in traveler demographics (adults, children, seniors), budget limits, and weighted amenity vectors. Integrated **Cosine Similarity user-neighborhood modeling** benchmarked through rigorous **5-Fold Cross Validation** (achieving **80.63% mean accuracy, 0.9689 MAE**, reproducing published research benchmarks).\n\nBuilt with a responsive **React 18 + Tailwind CSS** frontend, dedicated **Super Admin & Admin operational dashboard** with role-based access control (RBAC), multi-channel **Google Gemini AI travel assistant**, and a sub-60ms **Python Flask** API engine deployed serverlessly on **Vercel** at **lokatravel.my.id**.",
    highlights: [
      "Engineered a **hybrid recommendation engine** combining **User-Based Collaborative Filtering (Cosine Similarity)** for tour packages with **Content-Based demographic filtering** for hotel room allocation.",
      "Benchmarked algorithm performance across **5-Fold Cross Validation** achieving **80.63% accuracy** and **0.9689 MAE** with full empirical audit telemetry.",
      "Designed an intelligent **Group-Based Room Allocation matrix** balancing adults, children, seniors, and multi-room configurations under budget constraints.",
      "Built a dedicated **Full-Page Operational Dashboard (RBAC)** for Admins and Super Admins featuring live metrics, user role management, and collaborative filtering matrix inspection.",
      "Integrated **Google Gemini AI Assistant (LokaBot)** for conversational travel itinerary planning and group vacation tips.",
      "Deployed to production on **Vercel serverless edge infrastructure** with custom domain routing at **lokatravel.my.id**.",
    ],
    result:
      "Delivered production recommender platform with **797 curated hotels across 11 cities**, **80.63% 5-Fold CV accuracy (0.9689 MAE)**, sub-60ms response latency, and dedicated operational dashboard live on **lokatravel.my.id**.",
    technologies: ["Python", "Flask", "React 18", "TypeScript", "Tailwind CSS", "Collaborative Filtering", "Cosine Similarity", "Google Gemini AI", "Vercel"],
    category: "Applied AI · Recommendation Systems & Full-Stack",
    art: assetUrls.lokaTravel,
    featured: true,
    links: {
      demo: "https://lokatravel.my.id",
      source: "https://github.com/fauzinoorsyabani/Loka-Travel",
    },
  },
  {
    title: "Indonesian Food Commodity Price Intelligence Platform",
    date: "2026",
    shortDescription:
      "End-to-end food price intelligence platform and interactive Streamlit analytics cockpit tracking 11 staple commodities across 2023–2025 with K-Means clustering (Silhouette 0.6038) and 2026 regression price forecasts.",
    description:
      "**Architected and deployed an end-to-end Indonesian food commodity price intelligence platform** analyzing national average retail prices across **11 core staple commodities** (Beras IR I/III, Cabai Rawit Merah, Cabai Merah Keriting, Bawang Merah/Putih, Daging Ayam/Sapi, Telur Ayam, Gula Pasir, Minyak Goreng) from BPS and Ministry of Trade monitoring data (2023–2025).\\n\\nEngineered automated HTML-table parsing, **Indonesian currency comma normalization**, and multi-dimensional feature formulation (**mean price, coefficient of variation, 2-year CAGR**). Mapped market structure via **K-Means Clustering** with **Silhouette Analysis (optimal K=3, score 0.6038)** and 2D PCA projection to isolate volatile horticultural items from stable livestock proteins.\\n\\nBuilt time series regression forecasting models achieving **average R² = 0.7744 and low MAPE = 2.07%** to project 2026 price trajectories, accompanied by an interactive **Streamlit + Plotly multi-filter analytics dashboard** and **8 publication-grade (300 DPI) visual diagnostic artifacts**.",
    highlights: [
      "Engineered automated **HTML table ingestion & cleaning** handling Indonesian comma currency formats and deterministic commodity entity normalization.",
      "Computed **Year-over-Year (YoY) inflation** and **2-Year CAGR** identifying high-inflation pressure on Bawang Merah (+12.43% CAGR) and Minyak Goreng (+11.61% CAGR).",
      "Applied **K-Means clustering with Silhouette Score optimization (K=3, score 0.6038)** and **PCA 2D projection** segmenting commodities into Affordable Volatile, Stable Controlled, and Premium Livestock tiers.",
      "Trained **time series predictive regression models** achieving **0.7744 mean R² and 2.07% MAPE**, projecting 2026 price levels across all 11 commodities.",
      "Delivered an interactive **Streamlit analytics dashboard** featuring dynamic filtering, Plotly charts, and KPI metric cards alongside **8 publication-grade (300 DPI) visual artifacts**.",
    ],
    result:
      "Delivered complete intelligence pipeline with **100% unit test coverage**, **K=3 K-Means clustering (Silhouette 0.6038)**, **2.07% forecasting MAPE**, interactive Streamlit dashboard, and **Google Colab-compatible executable notebooks**.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Plotly", "Matplotlib", "Seaborn", "BeautifulSoup", "Jupyter"],
    category: "Data Science · Food Price Intelligence",
    art: assetUrls.foodPrice,
    featured: true,
    links: {
      demo: "https://harga-pangan.streamlit.app",
      source: "https://github.com/fauzinoorsyabani/harga-pangan",
    },
  },
  {
    title: "Air Quality Forensic Analytics & Multi-Objective ML Pipeline",
    date: "2026",
    shortDescription:
      "End-to-end environmental machine learning pipeline evaluating urban air pollutant interactions and meteorological dynamics across 500 monitoring observations with anti-leakage multi-objective modeling.",
    description:
      "**Architected and deployed an end-to-end environmental machine learning pipeline** evaluating urban air pollutant interactions (**PM2.5, PM10, NOx, NO2, SO2, CO, CO2, VOCs, CH4**) and meteorological dynamics across **500 monitoring observations**.\n\nEngineered **physical non-negative clipping** for sensor baseline zero-drift, domain feature formulations (**Combustion Index, Nitrogen Oxidation Ratio, and PM2.5/PM10 fine fraction indices**), and an **anti-leakage multi-objective modeling architecture**.\n\nBenchmarked regularized linear baselines (**Ridge, Multinomial Logistic**) against tree ensembles (**Random Forest, XGBoost**) using **Stratified 5-Fold Cross Validation**—achieving **high predictive R² with normally distributed zero-mean residuals** for PM2.5 concentration estimation and **robust Macro F1-scores** for multi-class health severity categorization, accompanied by **XAI feature importance rankings**.",
    highlights: [
      "**Architected a dual-objective ML pipeline** evaluating **9 urban air pollutants** and meteorological parameters across **500 observations**.",
      "Engineered **physical non-negative clipping** to correct sensor zero-drift alongside domain-specific atmospheric indices (**Combustion Index, Nitrogen Oxidation Ratio, PM2.5/PM10 fine fraction**).",
      "Designed a strict **anti-leakage preprocessing** and **Stratified 5-Fold Cross-Validation** pipeline benchmarking **Ridge** and **Multinomial Logistic** against **Random Forest** and **XGBoost**.",
      "Achieved **high predictive R² with zero-mean normally distributed residuals** for PM2.5 regression and **robust Macro F1-scores** for multi-class health risk categorization.",
      "Generated **8 publication-grade (300 DPI) diagnostic visual artifacts** and **XAI feature importance rankings** to explain key pollution drivers.",
    ],
    result:
      "Engineered automated hybrid ingestion, **8 high-DPI (300 DPI) publication-grade diagnostic artifacts**, **zero-leakage health risk categorization**, and validated XGBoost feature drivers with **zero-mean residual error**.",
    technologies: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    category: "Machine Learning · Environmental Intelligence",
    art: assetUrls.airQuality,
    links: {
      source: "https://github.com/fauzinoorsyabani/air-quality",
    },
  },
  {
    title: "PulseAI — Student Digital Habits & Academic Impact Platform",
    date: "2026",
    shortDescription:
      "Predictive machine learning platform and real-time React simulation cockpit analyzing digital screen exposure, sleep displacement, and academic GPA impact across 4,500 student records.",
    description:
      "**Architected and deployed an end-to-end predictive machine learning platform** and interactive simulation cockpit analyzing digital screen exposure, bedtime phone habits, and sleep displacement across a benchmark dataset of **4,500 student records (16 multidimensional features)**.\n\nEngineered a **leak-free stratified 80/10/10 split**, behavioral interaction features (**Screen-to-Sleep Ratio, Sleep Deficit Index**), and **cost-weighted loss optimization** to resolve heavy class imbalance (**81.8% Beneficial vs 3.7% Negative**).\n\nBenchmarked candidate architectures—selecting **cost-weighted XGBoost achieving 96.22% test accuracy and 0.9225 holdout Macro F1** (with only **1.03% validation-to-test drop**) alongside **L2-regularized Ridge regressors (R² = 0.82, ±0.27 GPA RMSE)** and **K-Means behavioral clustering (4 distinct archetypes)**. Shipped with a **sub-50ms Starlette ASGI backend**, local-first **SQLite persistence**, and an interactive **React simulation cockpit**.",
    highlights: [
      "Engineered a **leak-free 80/10/10 stratified data pipeline** across **4,500 student records** and 16 behavioral features, formulating custom **Screen-to-Sleep Ratio** and **Sleep Deficit Index** metrics.",
      "Resolved severe class imbalance (81.8% Beneficial vs 3.7% Negative) via **cost-weighted XGBoost optimization**, achieving **96.22% test accuracy** and **0.9225 holdout Macro F1**.",
      "Built multi-task predictive models combining **L2-regularized Ridge Regression** for academic GPA estimation (**R² = 0.82, ±0.27 GPA RMSE**) and **K-Means clustering** across 4 student archetypes.",
      "Developed a **sub-50ms Starlette ASGI inference backend** with local-first **SQLite persistence** and an interactive **React + TypeScript real-time habit simulator**.",
    ],
    result:
      "Engineered leak-free 80/10/10 modeling across 4,500 records; champion **XGBoost achieved 96.22% test accuracy** and **0.9225 holdout Macro F1**; delivered **sub-50ms multi-task inference** and real-time habit simulation.",
    technologies: ["Python", "XGBoost", "Scikit-Learn", "Starlette", "React", "TypeScript", "Tailwind CSS", "Chart.js", "SQLite"],
    category: "Applied AI · Machine Learning & Behavioral Intelligence",
    art: assetUrls.pulseai,
    links: {
      demo: "https://pulseai.my.id",
      source: "https://github.com/fauzinoorsyabani/effect-of-social-media",
    },
  },
  {
    title: "IDX Market Intelligence — Automated Star-Schema Warehouse & Pipeline",
    date: "2026",
    shortDescription:
      "Automated end-to-end ELT data pipeline and Kimball Star-Schema warehouse tracking 30 core IDX30 equities, USD/IDR rates, and IHSG benchmark across 27,150+ historical records.",
    description:
      "**Architected and deployed an automated end-to-end ELT data pipeline** and **Kimball dimensional warehouse (Star Schema)** tracking **30 core IDX30 equities**, USD/IDR currency rates, and IHSG benchmark across **27,150+ historical records**.\n\nEngineered fault-tolerant ingestion with **idempotent upserts (INSERT ... ON CONFLICT DO UPDATE)** ensuring **0% duplicate records**, paired with a circuit-breaker **Data Quality Gate executing 8 automated deterministic integrity rules** (validating positive price bounds, foreign key constraints, and **35% ARA/ARB regulatory anomaly thresholds**).\n\nSynchronized daily at 17:00 WIB via **automated GitHub Actions CI/CD cron jobs with 0 server operational costs**, and delivered via an interactive **Streamlit & Plotly analytics dashboard** alongside decoupled CSV data marts for **Microsoft Power BI**.",
    highlights: [
      "Designed a **Kimball dimensional Star-Schema warehouse** in PostgreSQL tracking 30 IDX30 equities, USD/IDR exchange rates, and IHSG index across **27,150+ historical rows**.",
      "Implemented **idempotent SQL upserts (INSERT ... ON CONFLICT DO UPDATE)** guaranteeing **0% duplicate records** across incremental daily runs.",
      "Built a circuit-breaker **Data Quality Gate enforcing 8 deterministic rules**, including positive price bounds, schema integrity, and **35% IDX ARA/ARB anomaly thresholds**.",
      "Automated daily ingestion at 17:00 WIB after market close using **GitHub Actions cron workflows** with **100% pytest suite coverage** and **zero server cost**.",
      "Delivered an interactive **Streamlit + Plotly market cockpit** and decoupled analytical CSV marts for **Power BI reporting**.",
    ],
    result:
      "Processed **27,150+ historical records** across 30 IDX30 tickers with **0% duplication**, **8 automated data quality gates**, **100% pytest test suite pass rate**, and automated daily synchronization at 17:00 WIB.",
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
    shortDescription:
      "Production-grade modular PHP digital commerce platform and AI SaaS storefront with OWASP-hardened architecture, automated catalog management, and Cloudflare Tunnel edge routing.",
    description:
      "**Architected and deployed a production-grade modular PHP digital commerce platform** and AI SaaS foundation for curated digital products and AI tooling licenses. Built with a **modular monolith architecture** following **OWASP security standards**, featuring an interactive violet animated UI, automated catalog and inventory management, **WhatsApp order negotiation & checkout flows**, and self-hosted **Cloudflare Tunnel reverse-proxy routing** for the custom domain (**ziulabs.biz.id**).",
    highlights: [
      "Architected a **modular monolith commerce platform** in **PHP 8.3+ and MySQL 8** adhering to **OWASP security best practices**.",
      "Built dynamic SKU catalog filtering, real-time stock status tracking, and automated **WhatsApp checkout & negotiation flows**.",
      "Engineered a responsive, interactive UI with **Tailwind CSS** and custom micro-interactions achieving **sub-second page loads**.",
      "Configured **zero-trust Cloudflare Tunnel reverse-proxy routing** and edge caching for production deployment on **ziulabs.biz.id**.",
    ],
    result: "Live production commerce ecosystem with **sub-second page performance**, **zero frontend build overhead**, and automated **Cloudflare edge tunneling**.",
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
    shortDescription:
      "Production editorial publishing system and rich-text authoring studio featuring client-side WebP optimization, Clerk multi-role auth, tRPC APIs, and TiDB Cloud Serverless.",
    description:
      "**Architected and deployed a production editorial publishing system** and authoring studio featuring automated **client-side WebP image optimization**, **Clerk authentication with multi-tier role authorization (Super Admin vs Author)**, and **TiDB Cloud Serverless database**.\n\nDesigned an immersive, tactile typography system with a **TipTap rich-text canvas**, debounced **LocalStorage draft recovery**, custom domain integration (**fauzijournal.web.id**), and serverless **Vercel deployment**.",
    highlights: [
      "Built a full-stack editorial CMS and reading platform using **React, TypeScript, tRPC**, and **TiDB Cloud Serverless (MySQL-compatible)**.",
      "Integrated **Clerk authentication with multi-tier RBAC (Super Admin vs Author)** and protected studio publishing routes.",
      "Engineered client-side **HTML5 Canvas WebP image compression** and a **TipTap rich-text editor** with debounced **LocalStorage draft auto-recovery**.",
      "Deployed on **Vercel serverless edge infrastructure** with custom domain routing at **fauzijournal.web.id**.",
    ],
    result: "Live publication system handling **automated WebP asset pipelines**, **sub-second edge response times**, and **100% free serverless architecture**.",
    technologies: ["React", "TypeScript", "tRPC", "MySQL", "Tailwind CSS", "Vercel"],
    category: "Product Engineering · Full-Stack",
    art: assetUrls.fauziJournal,
    links: {
      demo: "https://fauzijournal.web.id",
      source: "https://github.com/fauzinoorsyabani/fauzi-journal",
    },
  },
  {
    title: "Wisata Jelajah Indonesia — Enterprise Travel E-Commerce & Ticketing Platform",
    date: "2026",
    shortDescription:
      "Full-stack tourism e-commerce and digital ticketing platform integrated with Midtrans Snap payments (QRIS, GoPay, VA), automated QR e-tickets, and multi-role partner analytics.",
    description:
      "**Architected and deployed a production-grade tourism and ticketing e-commerce platform** for Tasikmalaya and national tourist destinations.\n\nEngineered end-to-end booking workflows with **Midtrans Snap payment gateway integration (Virtual Accounts, GoPay, QRIS)**, automated digital booking code generation with **client-side SVG QR code rendering**, and **paperless print-isolated PDF ticket generation**.\n\nBuilt with a responsive **React frontend**, modular **Express.js backend**, **multi-role authorization (User, Partner/Vendor, Admin)**, real-time revenue analytics dashboard, and automated serverless deployment on **Vercel**.",
    highlights: [
      "Engineered end-to-end travel booking and checkout flows integrated with **Midtrans Snap payment gateway (Virtual Accounts, GoPay, QRIS)**.",
      "Built automated booking verification with **client-side SVG QR code generation** and **print-isolated paperless PDF e-tickets**.",
      "Implemented **multi-role access control (Traveler, Venue Partner/Vendor, System Admin)** with real-time revenue and ticket telemetry dashboards.",
      "Architected a modular **Express.js + TiDB Cloud backend** paired with a **React 18 + TypeScript frontend** deployed serverlessly on **Vercel**.",
    ],
    result:
      "Full-stack travel booking & ticketing platform with **multi-channel payment gateway (Midtrans Snap)**, **print-ready isolated e-tickets**, **vendor revenue telemetry**, and **100% serverless Vercel multi-service architecture**.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Express.js", "Midtrans Snap", "TiDB Cloud", "Vercel"],
    category: "Product Engineering · Full-Stack & Payment Systems",
    art: assetUrls.wisataJelajah,
    links: {
      demo: "https://wisata-jelajah-indonesia.vercel.app",
      source: "https://github.com/fauzinoorsyabani/wisata-jelajah-indonesia",
    },
  },
  {
    title: "Academic Capacity Data Warehouse",
    date: "2025 — 2026",
    shortDescription:
      "Star-schema data warehouse and Decision Support System (DSS) for Universitas Siliwangi monitoring academic capacity and accreditation ratios across 35 study programs.",
    description:
      "**Star-schema data warehouse and Decision Support System (DSS)** developed for **Universitas Siliwangi** to monitor academic capacity, student-to-lecturer ratios, and accreditation compliance across **35 study programs** using longitudinal PDDikti aggregate data. Built with robust **ETL pipelines** and interactive **Google Looker Studio executive dashboards** for institutional strategic decision-making.",
    highlights: [
      "Designed a **Kimball Star-Schema Data Warehouse** modeling longitudinal PDDikti academic data across **35 study programs and 7 faculties**.",
      "Built **automated ETL pipelines** to standardize multi-period student enrollment and lecturer capacity metrics over **5 reporting semesters**.",
      "Developed a **3-layer interactive Google Looker Studio Decision Support System** (Executive Overview, Study Program Detail, Longitudinal Trend).",
      "Enabled automated national accreditation compliance tracking for **Student-to-Lecturer ratios (RASDO)**.",
    ],
    result: "Centralized ratio monitoring across **35 academic programs over 5 reporting periods** with **automated compliance threshold tracking**.",
    technologies: ["Google Looker Studio", "Data Warehouse", "Star Schema", "ETL", "SQL", "Decision Support System"],
    category: "Business Intelligence · Data Warehouse",
    art: assetUrls.tuitionArt,
    links: {},
  },
  {
    title: "Higher Education Tuition & Policy Analytics",
    date: "Feb 2025 — Jun 2025",
    shortDescription:
      "Multi-university regression modeling and BI analytics across 97 academic programs and 11 Indonesian universities to guide institutional tuition and capacity policy.",
    description:
      "**End-to-end data analytics and regression modeling** for **VINIX Seven Aurum (MSIB)**, analyzing higher education tuition cost structures, enrollment capacity, and student-to-lecturer distributions across **97 academic programs and 11 Indonesian universities**. Delivered interactive dashboards and strategic policy recommendations to university leadership.",
    highlights: [
      "Conducted cross-institutional data analysis and **multivariate regression modeling across 97 study programs from 11 Indonesian universities**.",
      "Evaluated single-tuition (UKT) cost tiers against enrollment capacity and accreditation tiers using **Python and Pandas**.",
      "Built interactive **Power BI and Google Looker Studio executive dashboards** to surface actionable tuition policy benchmarks.",
    ],
    result: "Modeled **97 academic programs across 11 universities** with a **35% improvement in policy insight accuracy**.",
    technologies: ["Python", "Pandas", "Power BI", "Google Looker Studio", "Regression Models", "Data Analytics"],
    category: "Data Science · MSIB Program",
    art: assetUrls.dashboardTrend,
    links: {},
  },
  {
    title: "PolaStok — AI Inventory Forecasting Platform",
    date: "Feb 2026 — Jul 2026",
    shortDescription:
      "AI-powered SME inventory forecasting platform combining Random Forest & LSTM time-series models (SMAPE ~18%) with Google Gemini AI reorder recommendations across 913,000+ transactions.",
    description:
      "**Led a five-member cross-functional team (PJK-GM041) through a 900+ hour capstone** to design, build, and deploy an **AI-powered inventory forecasting platform for Indonesian SMEs**.\n\nOwned delivery end-to-end: data preparation, model integration, and MVP deployment; applied **LLM orchestration and prompt engineering** for stock prediction and reorder recommendations.",
    highlights: [
      "Led a 5-person engineering team across a **900+ hour Pijak × IBM SkillsBuild AI capstone** from problem framing to production MVP.",
      "Processed **913,000+ historical retail transactions** across 50 SME products to train hybrid **Random Forest and TensorFlow LSTM forecasting models (achieving ~18% SMAPE)**.",
      "Integrated **Google Gemini AI via structured prompt engineering** to synthesize actionable restock quantities and cash-flow-aware purchasing advice.",
      "Shipped an interactive **Streamlit + Plotly analytics web application** tailored for non-technical SME owners.",
    ],
    result: "**913.000+ data transaksi historis dari 50 produk UMKM teranalisis**, model **Random Forest & LSTM (SMAPE ~18%)**, terintegrasi **Google Gemini AI** untuk rekomendasi kulakan cerdas.",
    technologies: ["Python 3.11", "Streamlit", "Scikit-Learn", "TensorFlow (LSTM)", "Google Gemini AI", "Plotly", "Pandas"],
    category: "Applied AI · Team Lead",
    art: assetUrls.polastok,
    links: {
      demo: "https://polastok.streamlit.app",
      source: "https://github.com/PolaStok/polastok-web",
    },
  },
  {
    title: "ClinicalNote AI — Clinical Documentation Platform",
    date: "2025",
    shortDescription:
      "Real-time clinical documentation system integrating FastAPI, OpenAI Whisper, and GPT-4 LangChain pipelines for sub-two-second medical transcription and ICD-10 coding.",
    description:
      "Built a clinical documentation system with a **FastAPI backend integrating OpenAI Whisper and GPT-4 for sub-two-second transcription latency**. Designed reusable **AI Skills** for automated summarization, ICD-10 code suggestion, and medication extraction as modular **LangChain chains**; containerized and deployed on **AWS EC2**.",
    highlights: [
      "Architected a low-latency **FastAPI backend integrating OpenAI Whisper** for medical speech-to-text transcription in **under 2 seconds**.",
      "Built modular **LangChain AI Skills** for SOAP clinical note generation, automated **ICD-10 diagnostic code suggestion**, and prescription extraction.",
      "Containerized the full-stack React + FastAPI application with **Docker and deployed on AWS EC2**.",
    ],
    result: "Designed for **sub-two-second OpenAI-backed transcription latency** with **automated ICD-10 diagnostic coding**.",
    technologies: ["FastAPI", "OpenAI API", "LangChain", "React", "Docker", "AWS EC2"],
    category: "Applied AI · Solo Development",
    links: {},
  },
  {
    title: "NusaLadang — Smart Farming Platform",
    date: "Aug 2024 — Dec 2024",
    shortDescription:
      "Full-stack smart farming investment and digital land-leasing platform featuring dynamic crop pricing calculators, yield projection logic, and role-based digital contracts.",
    description:
      "Engineered an end-to-end **smart farming investment platform connecting landowners with agricultural investors**. Implemented digital land leasing, **dynamic crop pricing calculators**, yield projection logic, and **transparent digital contracts with role-based access**.",
    highlights: [
      "Built an end-to-end agricultural investment and land-leasing platform using **PHP, Laravel, and MySQL**.",
      "Engineered **dynamic crop pricing calculators**, **harvest yield projection algorithms**, and transparent digital contract workflows.",
      "Implemented **role-based dashboards** for landowners, investors, and platform administrators.",
    ],
    result: "Full-stack contract and investment workflow with **dynamic pricing and land management for agricultural partners**.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3"],
    category: "Product Engineering · Full-Stack",
    art: assetUrls.productSystemsArt,
    links: {},
  },
  {
    title: "AI Study Assistant — RAG Knowledge Q&A",
    date: "2025",
    shortDescription:
      "Retrieval-Augmented Generation (RAG) academic assistant enabling semantic search with exact page citations over 500+ pages of lecture notes using ChromaDB and FastAPI.",
    description:
      "Engineered a **Retrieval-Augmented Generation (RAG) knowledge assistant enabling semantic search over 500+ pages of academic lecture notes**. Implemented vector indexing with **ChromaDB**, source citation, and a streaming **FastAPI microservice** paired with a **Streamlit chat UI and conversational memory**.",
    highlights: [
      "Built an end-to-end **RAG ingestion and semantic retrieval pipeline** over **500+ pages of PDF lecture notes** using **LangChain and ChromaDB**.",
      "Engineered grounded answer synthesis with **exact document and page-level source citations** to prevent hallucination.",
      "Delivered a streaming **FastAPI backend** paired with a multi-turn conversational **Streamlit interface**.",
    ],
    result: "Accurate contextual retrieval with **exact page citations** and **multi-turn conversational context**.",
    technologies: ["LangChain", "ChromaDB", "FastAPI", "Streamlit", "Python", "RAG"],
    category: "Applied AI · Solo Development",
    links: {},
  },
  {
    title: "HR Analytics Capstone — LLM Data Pipeline",
    date: "2025",
    shortDescription:
      "Enterprise NLP and LLM classification pipeline processing 838,566 employee reviews using IBM Granite for automated sentiment synthesis and executive HR recommendations.",
    description:
      "Developed an **enterprise NLP and data pipeline for IBM SkillsBuild × Hacktiv8 that processed 838,566 employee reviews**. Orchestrated multi-step processing: cleaning, **LLM classification using IBM Granite**, automatic sentiment summarization, and executive recommendation synthesis.",
    highlights: [
      "Engineered a large-scale data cleaning and text normalization pipeline processing **838,566 raw employee review records**.",
      "Orchestrated **IBM Granite LLM classification and sentiment summarization** to identify systemic organizational retention drivers.",
      "Synthesized **data-backed executive HR recommendations** for workplace satisfaction and attrition reduction.",
    ],
    result: "Scaled data transformation and sentiment synthesis across **838,566 employee records**.",
    technologies: ["IBM Granite", "Data Pipeline", "Python", "Pandas", "Analytics", "NLP"],
    category: "Data Science · AI Pipeline",
    links: {},
  },
  {
    title: "RA Al-Fathunnisa — Academic Portal & PPDB",
    date: "Feb 2024 — Jun 2024",
    shortDescription:
      "Production full-stack student admission (PPDB) and academic administration portal automating registration, document verification, and institutional reporting.",
    description:
      "Built a **production full-stack student admission (PPDB) and academic administration management system** for an educational institution. Automated registration workflows, student records, document verification, and administrative reporting.",
    highlights: [
      "Developed a full-stack online student admission (PPDB) and academic record portal using **Laravel, MySQL, and Bootstrap**.",
      "Automated applicant document verification, student roster management, and administrative reporting workflows.",
      "Reduced manual school administrative processing time by **50% with automated CI/CD deployment via GitHub Actions**.",
    ],
    result: "Reduced manual administrative processing time by **50% through workflow automation**.",
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL", "Git", "GitHub Actions"],
    category: "Client Work · Full-Stack",
    links: {},
  },
  {
    title: "CV. Putra AR — CRM & Loyalty Platform",
    date: "Mar 2024 — Jun 2024",
    shortDescription:
      "Customer Relationship Management (CRM) and loyalty web platform for an F&B and retail client featuring automated customer feedback, catalog management, and CI/CD delivery.",
    description:
      "Developed and shipped a **CRM-focused web platform for an F&B and retail client**. Features customer loyalty tracking, automated feedback collection, service catalog management, and automated CI/CD deployment pipelines.",
    highlights: [
      "Built a custom CRM and customer loyalty tracking web application tailored for retail and F&B operations.",
      "Implemented automated customer feedback collection, digital service catalog management, and admin analytics.",
      "Configured **zero-downtime CI/CD deployment pipelines**, delivering the production system **two weeks ahead of schedule**.",
    ],
    result: "Delivered production system **two weeks ahead of schedule with zero-downtime deployment**.",
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
    name: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026",
    tag: "AI / ML",
    description:
      "Practical machine learning certification covering data preparation, supervised/unsupervised algorithms, evaluation metrics, and model deployment (RVZK0812OZD5).",
    credential: "/certificates/cert-dicoding-ml-pemula.webp",
    verifyUrl: "https://dicoding.com/certificates/RVZK0812OZD5",
  },
  {
    name: "Belajar Dasar AI (AI Fundamentals)",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    tag: "AI / ML",
    description:
      "Official Dicoding certificate of competence in artificial intelligence fundamentals, machine learning principles, and modern AI algorithms (L4PQ94VMOPO1).",
    credential: "/certificates/cert-dicoding-belajar-dasar-ai.webp",
    verifyUrl: "https://dicoding.com/certificates/L4PQ94VMOPO1",
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
    name: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    tag: "Programming / Python",
    description:
      "Core Python programming certification covering data types, control flow, object-oriented programming, data structures, and standard libraries (MEPJMKKRJP3V).",
    credential: "/certificates/cert-dicoding-python.webp",
    verifyUrl: "https://dicoding.com/certificates/MEPJMKKRJP3V",
  },
  {
    name: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    tag: "DevOps / Git",
    description:
      "Professional version control certification covering Git repository workflows, branch management, merge conflict resolution, and GitHub collaboration (ERZRL9GYQZYV).",
    credential: "/certificates/cert-dicoding-git.webp",
    verifyUrl: "https://dicoding.com/certificates/ERZRL9GYQZYV",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Apr 2024",
    tag: "Frontend / Web",
    description:
      "Modern frontend development certification covering semantic HTML5, responsive CSS3 layouts, web storage API, and DOM manipulation (2VX3RWDQJZYQ).",
    credential: "/certificates/cert-dicoding-frontend-pemula.webp",
    verifyUrl: "https://dicoding.com/certificates/2VX3RWDQJZYQ",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Oct 2024",
    tag: "Programming / JS",
    description:
      "ECMAScript fundamentals certification covering data structures, asynchronous programming (Promises & async/await), OOP, and modular code architecture (EYX4JY175ZDL).",
    credential: "/certificates/cert-dicoding-javascript.webp",
    verifyUrl: "https://dicoding.com/certificates/EYX4JY175ZDL",
  },
  {
    name: "Pengenalan ke Logika Pemrograman (Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    tag: "Computer Science",
    description:
      "Foundational computational thinking, algorithmic flowcharts, pseudocode decomposition, sorting/searching algorithms, and logical problem solving (N9ZO0443YXG5).",
    credential: "/certificates/cert-dicoding-logic-101.webp",
    verifyUrl: "https://dicoding.com/certificates/N9ZO0443YXG5",
  },
  {
    name: "Memulai Dasar Pemrograman Software Developer",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    tag: "Software Engineering",
    description:
      "Software engineering fundamentals covering developer career paths, software engineering ethics, development methodologies (Agile/Scrum), and SDLC (L4PQW66R7PO1).",
    credential: "/certificates/cert-dicoding-software-dev-starter.webp",
    verifyUrl: "https://dicoding.com/certificates/L4PQW66R7PO1",
  },
  {
    name: "Financial Literacy 101",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    tag: "Finance / Literacy",
    description:
      "Personal and corporate financial literacy certification covering financial planning, investment fundamentals, cash-flow management, and risk diversification (6RPNO6635X2M).",
    credential: "/certificates/cert-dicoding-financial-literacy.webp",
    verifyUrl: "https://dicoding.com/certificates/6RPNO6635X2M",
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
