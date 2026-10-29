export interface DocumentationItem {
  id: string;
  category: {
    en: string;
    id: string;
  };
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  image: string;
  date: string;
  tag: string;
}

export const documentationItems: readonly DocumentationItem[] = [
  {
    id: "loka-travel-recsys",
    category: {
      en: "Applied AI & Recommendation Systems",
      id: "Applied AI & Sistem Rekomendasi",
    },
    title: {
      en: "Loka Travel Collaborative Filtering & 5-Fold Cross Validation",
      id: "Collaborative Filtering & 5-Fold Cross Validation Loka Travel",
    },
    description: {
      en: "User-Based Collaborative Filtering (Cosine Similarity) & group demographic room allocation achieving 80.63% accuracy and 0.9689 MAE across 797 curated hotels in 11 Indonesian cities.",
      id: "User-Based Collaborative Filtering (Cosine Similarity) & alokasi kamar rombongan meraih akurasi 80,63% dan MAE 0,9689 dari 797 hotel terkurasi di 11 kota.",
    },
    image: "/documentation/loka-travel-recsys.webp",
    date: "2026",
    tag: "Recommender Systems",
  },
  {
    id: "pulseai-model-architecture",
    category: {
      en: "Applied AI & Behavioral Machine Learning",
      id: "Applied AI & Machine Learning Perilaku",
    },
    title: {
      en: "PulseAI Multi-Task Architecture & Holdout Benchmarks",
      id: "Arsitektur Multi-Task & Benchmark Holdout PulseAI",
    },
    description: {
      en: "Multi-class XGBoost classifier achieving 96.22% test accuracy & 0.9225 holdout Macro F1 across 4,500 benchmark student records with zero data leakage.",
      id: "Klasifikasi XGBoost multi-kelas meraih akurasi uji 96,22% & Macro F1 holdout 0,9225 dari 4.500 data benchmark tanpa kebocoran data.",
    },
    image: "/documentation/pulseai-model-architecture.webp",
    date: "2026",
    tag: "Predictive AI",
  },
  {
    id: "air-quality-ml-pipeline",
    category: {
      en: "Machine Learning & Environmental Intelligence",
      id: "Machine Learning & Analisis Kualitas Udara",
    },
    title: {
      en: "Air Quality Forensic Analytics & Multi-Objective ML Pipeline",
      id: "Forensik Kualitas Udara & Pipeline Machine Learning Multi-Objektif",
    },
    description: {
      en: "End-to-end data science pipeline benchmarking Ridge, Random Forest, and XGBoost with Stratified 5-Fold CV for PM2.5 forecasting and health risk categorization.",
      id: "Pipeline data science end-to-end membandingkan Ridge, Random Forest, dan XGBoost dengan Stratified 5-Fold CV untuk estimasi PM2.5 dan klasifikasi risiko kesehatan.",
    },
    image: "/documentation/air-quality-diagnostics.webp",
    date: "2026",
    tag: "Predictive AI",
  },
  {
    id: "idx-market-intelligence",
    category: {
      en: "Financial Intelligence & Data Warehouse",
      id: "Kecerdasan Finansial & Data Warehouse",
    },
    title: {
      en: "IDX Market Intelligence & Dimensional Warehouse Dashboard",
      id: "Dashboard Kecerdasan Pasar Modal IDX & Star Schema Data Warehouse",
    },
    description: {
      en: "Automated end-to-end data pipeline & Kimball star-schema warehouse tracking 27,150+ records across 30 IDX equities with 8 automated data quality checks.",
      id: "Pipeline data otomatis & warehouse star-schema Kimball memproses 27.150+ data dari 30 saham IDX30 dengan 8 aturan validasi kualitas data.",
    },
    image: "/idx-market-dashboard.webp",
    date: "2026",
    tag: "Data Warehouse",
  },
  {
    id: "bi-executive",
    category: {
      en: "Business Intelligence",
      id: "Kecerdasan Bisnis",
    },
    title: {
      en: "Looker Studio Executive Analytics Dashboard",
      id: "Dashboard Eksekutif Analisis Kapasitas Akademik",
    },
    description: {
      en: "Undergraduate thesis artifact: Kimball star-schema dimensional model deployed on Looker Studio for institutional capacity decision support.",
      id: "Artifak skripsi: Pemodelan dimensional star-schema Kimball diimplementasikan pada Looker Studio untuk pendukung keputusan daya tampung institusi.",
    },
    image: "/documentation/bi-looker-executive-dashboard.webp",
    date: "2026",
    tag: "Data Warehouse",
  },
  {
    id: "ml-earthquake-map",
    category: {
      en: "Machine Learning & Seismology",
      id: "Machine Learning & Seismologi",
    },
    title: {
      en: "Indonesian Earthquake Seismic Risk Spatial Map",
      id: "Peta Spasial Prediksi Risiko Gempa Bumi Indonesia",
    },
    description: {
      en: "BNSP Data Science Project: Machine learning pipeline analyzing historical seismological catalogs to classify hazard vulnerability across provinces.",
      id: "Proyek Sertifikasi Data Science BNSP: Pipeline ML menganalisis katalog kegempaan historis untuk mengklasifikasikan tingkat kerentanan risiko per provinsi.",
    },
    image: "/documentation/ml-earthquake-risk-map.webp",
    date: "2026",
    tag: "Predictive AI",
  },
  {
    id: "ml-benchmark",
    category: {
      en: "Data Science Benchmark",
      id: "Benchmark Data Science",
    },
    title: {
      en: "Multi-Model ML Performance Comparison Matrix",
      id: "Matriks Komparasi & Evaluasi Model Machine Learning",
    },
    description: {
      en: "Benchmarking Random Forest, XGBoost, Decision Tree, and SVM with cross-validated ROC-AUC, Precision, Recall, and Confusion Matrices.",
      id: "Evaluasi terukur performa Random Forest, XGBoost, Decision Tree, dan SVM dengan validasi silang skor ROC-AUC, presisi, recall, dan confusion matrix.",
    },
    image: "/documentation/ml-model-performance-comparison.webp",
    date: "2026",
    tag: "Model Evaluation",
  },
  {
    id: "collab-gsa-summit",
    category: {
      en: "Community Leadership",
      id: "Kepemimpinan Komunitas",
    },
    title: {
      en: "Google Student Ambassador National Summit",
      id: "Google Student Ambassador Indonesia National Summit",
    },
    description: {
      en: "Representing campus as Lead, collaborating with national student leaders on responsible generative AI adoption and student developer outreach.",
      id: "Mewakili kampus sebagai Lead, berkolaborasi dengan pemimpin mahasiswa nasional dalam adopsi AI generatif yang bertanggung jawab dan edukasi developer.",
    },
    image: "/documentation/collab-gsa-summit-01.webp",
    date: "2025 — 2026",
    tag: "Google Ecosystem",
  },
  {
    id: "award-bi-bookgram",
    category: {
      en: "Competition Achievement",
      id: "Prestasi Kompetisi",
    },
    title: {
      en: "2nd Place · Bank Indonesia National Challenge",
      id: "Juara 2 · Bank Indonesia Bookstagram Challenge",
    },
    description: {
      en: "Recognized by Bank Indonesia for strategic economic policy analysis, monetary sustainability review, and central banking literacy advocacy.",
      id: "Meraih Juara 2 nasional atas analisis kebijakan moneter, telaah keberlanjutan ekonomi, dan advokasi literasi kebanksentralan Bank Indonesia.",
    },
    image: "/documentation/achievement-bi-bookgram-juara2.webp",
    date: "2025",
    tag: "Bank Indonesia",
  },
  {
    id: "bi-detail-prodi",
    category: {
      en: "Business Intelligence",
      id: "Kecerdasan Bisnis",
    },
    title: {
      en: "Study Program Capacity & Quota Analytics Drilldown",
      id: "Dashboard Analitik Detail Kapasitas & Kuota Prodi",
    },
    description: {
      en: "Granular multi-department capacity dashboard analyzing applicant competition ratios, faculty workload balance, and accreditation thresholds.",
      id: "Dashboard granular multi-departemen menganalisis rasio keketatan peminat, beban dosen, dan ambang batas rasio akreditasi institusi.",
    },
    image: "/documentation/bi-looker-study-program-detail.webp",
    date: "2026",
    tag: "Decision Support",
  },
  {
    id: "collab-gsa-workshop",
    category: {
      en: "Community & Mentorship",
      id: "Komunitas & Mentoring",
    },
    title: {
      en: "Hands-on Generative AI Demorun Workshop",
      id: "Workshop Praktis Demorun Generative AI Kampus",
    },
    description: {
      en: "Live interactive demorun training 150+ university students on prompt engineering, local agent setups, and applied AI tools for academic workflows.",
      id: "Demorun interaktif membimbing 150+ mahasiswa seputar prompt engineering, otomasi agent, dan pemanfaatan AI untuk riset akademik.",
    },
    image: "/documentation/collab-gsa-workshop.webp",
    date: "2025",
    tag: "Community Lead",
  },
] as const;
