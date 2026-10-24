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
