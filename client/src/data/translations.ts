export const translations = {
  en: {
    nav: [
      ["About", "about"],
      ["Tech Stack", "stack"],
      ["Projects", "projects"],
      ["Experience", "experience"],
      ["Awards", "awards"],
      ["Contact", "contact"],
    ] as const,
    header: {
      contactBtn: "Contact",
      switchLanguageLabel: "Ganti ke Bahasa Indonesia",
    },
    hero: {
      availability: "OPEN TO WORK",
      greeting: "Hello, I’m",
      role: "Full Stack AI Engineer",
      roleSub: "Applied AI & Data Products",
      headline:
        "I engineer production-grade AI systems and full-stack software—connecting model integration, data pipelines, and responsive web architecture into reliable tools that solve real problems.",
      exploreBtn: "Explore Projects",
      contactBtn: "Direct Contact",
    },
    about: {
      kicker: "PROFILE & FOCUS",
      title: "Turning complex data into clear, reliable systems.",
      fieldPortrait: "FIELD PORTRAIT / 01",
      badge: "FN-26 / FULL STACK AI",
      aboutText:
        "Fauzi is a Full Stack AI Engineer and Information Systems graduate from Universitas Siliwangi (GPA 3.89/4.00, Cum Laude) specializing in AI/LLM engineering and data systems. He led a 5-member engineering team through a 900+ hour AI product capstone with Pijak × IBM SkillsBuild shipping PolaStok, and was selected as Google Student Ambassador Campus Lead from 12,000+ applicants nationwide. His technical practice spans production RAG pipelines (FastAPI, LangChain), dimensional data warehousing with Looker Studio dashboards, and scalable full-stack web applications (React, TypeScript, Laravel).",
      shortBio:
        "Connecting machine learning, LLM orchestration, and modern web architecture into practical software that drives informed decisions.",
      focus: {
        build: {
          label: "Full-Stack Web Engineering",
          detail: "Building fast, modular, and responsive web applications with React, TypeScript, Laravel, and FastAPI that scale smoothly under load.",
        },
        analyze: {
          label: "Data Warehousing & BI",
          detail: "Architecting dimensional star-schema warehouses, automated ETL pipelines, and Looker Studio dashboards for institutional decision-making.",
        },
        lead: {
          label: "Technical Leadership & Outreach",
          detail: "Advancing responsible AI adoption as Campus Lead for the Google Student Ambassador Program and mentoring student developer communities.",
        },
      },
      facts: [
        ["Location", "Tasikmalaya, Indonesia"],
        ["Education", "Information Systems, Universitas Siliwangi (GPA 3.89, Cum Laude)"],
        ["Core Specialization", "Applied AI, LLM Integration, Data Warehousing, Full-Stack Web"],
        ["Status", "Open to full-time roles & high-impact projects"],
      ] as const,
    },
    techStack: {
      kicker: "CORE TOOLKIT",
      title: "Technologies & Engineering Ecosystem",
      copy: "The programming languages, frameworks, cloud platforms, and AI-assisted workflows I rely on daily to ship reliable software.",
      filters: {
        all: "All Technologies",
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend & APIs",
        databases: "Databases & Storage",
        "ai-ml": "AI & Machine Learning",
        "ai-tools": "AI Developer Tools",
        devops: "Cloud & DevOps",
        tools: "Tools & Collaboration",
      } as Record<string, string>,
      categories: {
        languages: {
          title: "Programming Languages",
          description: "Core languages used to engineer performant, maintainable, and type-safe systems across services.",
        },
        frontend: {
          title: "Frontend Engineering",
          description: "Component frameworks, design libraries, and modern tooling for building responsive, accessible interfaces.",
        },
        backend: {
          title: "Backend Architecture",
          description: "Server runtimes, RESTful APIs, and microservices built for performance, security, and clean separation of concerns.",
        },
        "ai-ml": {
          title: "AI & Machine Learning",
          description: "Statistical modeling, time-series forecasting, neural networks, and data transformation libraries.",
        },
        "ai-tools": {
          title: "AI Developer Tooling",
          description: "AI-assisted developer environments and agentic coding workflows that accelerate engineering velocity.",
        },
        databases: {
          title: "Databases & Storage",
          description: "Relational, document, and vector databases optimized for transactional integrity, analytical querying, and semantic retrieval.",
        },
        devops: {
          title: "Cloud Infrastructure & DevOps",
          description: "Cloud compute, container orchestration, reverse proxies, and automated CI/CD deployment pipelines.",
        },
        tools: {
          title: "Development Tools",
          description: "Version control, API testing, interface prototyping, and collaboration platforms that anchor daily workflows.",
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      kicker: "SELECTED WORK",
      title: "Projects Engineered for Clarity and Real-World Impact",
      copy: "A curated record of production systems, applied LLM applications, predictive modeling platforms, and decision-support data warehouses.",
      caseStudy: "Case Study",
      viewOriginal: "Full Resolution",
      otherKicker: "Archive",
      otherTitle: "Additional project index.",
      otherCount: "10 selected entries",
      views: {
        executive: {
          title: "Executive Overview",
          desc: "Institutional Academic Capacity & Student-to-Lecturer Ratio (Universitas Siliwangi)",
        },
        detail: {
          title: "Detail Per Study Program",
          desc: "Ratio Distribution & Inter-Departmental Capacity Matrices",
        },
        trend: {
          title: "Longitudinal Trends",
          desc: "Multi-Semester Longitudinal Ratio Monitoring (Odd 2023 - Odd 2025)",
        },
      },
    },
    documentation: {
      kicker: "FIELD EVIDENCE",
      title: "Project Evidence & Community Impact",
      copy: "Real artifacts from my work: BI dashboards, machine learning benchmarks, competition moments, and community workshops.",
      autoSlideHint: "Drag or swipe to browse · Click any card to inspect full resolution",
      pause: "Pause Stream",
      play: "Resume Stream",
      inspectBtn: "Inspect Artifact",
    },
    experience: {
      kicker: "CAREER RECORD",
      title: "Work Experience, Research, and Leadership",
      copy: "Hands-on engineering across AI capstones, client web development, academic data research, and student community leadership.",
      editorialNote: "Career Summary",
    },
    awards: {
      kicker: "RECOGNITION",
      title: "Competitions, Challenges, and Academic Honors",
    },
    credentials: {
      kicker: "CERTIFICATIONS",
      title: "Certifications, Training, and Programs",
      copy: "Certificates from BNSP, Microsoft, Google, IBM, Dicoding, and Anthropic, plus program and event participation. Use the arrows or swipe to browse.",
      viewBtn: "View Certificate",
    },
    contact: {
      kicker: "START A CONVERSATION",
      title: "Let’s Discuss Engineering Solutions or Collaborations",
      copy: "Whether you have an applied AI challenge, full-stack product opening, or a collaborative venture, I’m ready to connect.",
      directChannels: "Direct Channels",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      preferredTitle: "How to connect",
      preferredCopy: "Send a brief overview of your project, technical context, or role requirements. I will respond promptly with practical next steps.",
      formName: "Your Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formSubjectPlaceholder: "e.g., Full Stack AI Opportunity / Project Consultation",
      formMessage: "Message Details",
      formMessagePlaceholder: "Provide a brief description of your project context, timeline, or questions.",
      formNotice: "This portfolio uses a client-side mailto trigger. No personal details are stored on any server.",
      btnSubmit: "Send Message",
      formSuccess: "Your message draft has been prepared in your default email client.",
    },
    footer: {
      tagline: "Engineering intelligent products and reliable digital experiences.",
      quickLinks: "Navigation",
      connect: "Connect",
      rights: "Made in Indonesia.",
    },
  },
  id: {
    nav: [
      ["Tentang", "about"],
      ["Tech Stack", "stack"],
      ["Proyek", "projects"],
      ["Pengalaman", "experience"],
      ["Prestasi", "awards"],
      ["Kontak", "contact"],
    ] as const,
    header: {
      contactBtn: "Kontak",
      switchLanguageLabel: "Switch to English",
    },
    hero: {
      availability: "SIAP BERKOLABORASI",
      greeting: "Halo, saya",
      role: "Full Stack AI Engineer",
      roleSub: "Rekayasa AI & Pengembangan Sistem",
      headline:
        "Saya merancang dan mengembangkan solusi AI terapan serta sistem web full-stack yang tangguh—mengintegrasikan rekayasa data, orkestrasi LLM, arsitektur backend, dan antarmuka responsif menjadi produk nyata yang bernilai guna tinggi.",
      exploreBtn: "Jelajahi Proyek",
      contactBtn: "Hubungi Langsung",
    },
    about: {
      kicker: "TENTANG & FOKUS REKAYASA",
      title: "Mengubah kompleksitas data menjadi sistem cerdas yang solutif dan terukur.",
      fieldPortrait: "DOKUMENTASI REKAYASA / 01",
      badge: "FN-26 / FULL STACK AI",
      aboutText:
        "Fauzi adalah seorang Full Stack AI Engineer dan lulusan Sistem Informasi Universitas Siliwangi (IPK 3.89/4.00, Cum Laude) dengan spesialisasi pada rekayasa AI/LLM dan arsitektur data. Berpengalaman memimpin tim pengembang beranggotakan 5 orang dalam program capstone produk AI intensif 900+ jam bersama Pijak × IBM SkillsBuild merilis PolaStok, serta terpilih sebagai Google Student Ambassador Campus Lead dari 12.000+ pendaftar nasional. Portofolio teknisnya mencakup pipeline RAG tingkat produksi (FastAPI, LangChain), pemodelan data warehouse skema bintang (star-schema) dengan visualisasi Looker Studio, serta aplikasi web modern yang terukur (React, TypeScript, Laravel).",
      shortBio:
        "Fokus menjembatani rekayasa machine learning dan ekosistem AI dengan arsitektur web modern yang efisien, aman, dan mudah digunakan.",
      focus: {
        build: {
          label: "Rekayasa Web Full-Stack",
          detail: "Membangun aplikasi web modular, cepat, dan responsif menggunakan React, TypeScript, Laravel, dan FastAPI yang siap menangani beban produksi.",
        },
        analyze: {
          label: "Data Warehouse & Kecerdasan Bisnis",
          detail: "Merancang skema bintang (star-schema), pipeline ETL otomatis, dan dashboard analitik Google Looker Studio untuk pemantauan kapasitas dan pengambilan keputusan strategis.",
        },
        lead: {
          label: "Kepemimpinan Teknis & Edukasi",
          detail: "Mendorong pemanfaatan AI yang bertanggung jawab sebagai Campus Lead Google Student Ambassador serta menginisiasi bootcamp dan kompetisi teknologi bagi mahasiswa.",
        },
      },
      facts: [
        ["Domisili", "Tasikmalaya, Indonesia"],
        ["Pendidikan", "S1 Sistem Informasi, Universitas Siliwangi (IPK 3.89, Cum Laude)"],
        ["Spesialisasi", "Applied AI, Machine Learning, Data Warehouse, Full-Stack Web"],
        ["Ketersediaan", "Terbuka untuk posisi Full-Time & Proyek Kolaborasi"],
      ] as const,
    },
    techStack: {
      kicker: "KEAHLIAN & EKOSISTEM",
      title: "Tech Stack & Perangkat Pengembangan",
      copy: "Kumpulan bahasa pemrograman, framework, layanan cloud, dan perangkat AI yang saya gunakan dalam merancang dan mengembangkan perangkat lunak berkualitas tinggi.",
      filters: {
        all: "Semua Teknologi",
        languages: "Bahasa Pemrograman",
        frontend: "Frontend",
        backend: "Backend & API",
        databases: "Basis Data & Penyimpanan",
        "ai-ml": "AI & Machine Learning",
        "ai-tools": "AI Developer Tools",
        devops: "Cloud & DevOps",
        tools: "Alat & Kolaborasi",
      } as Record<string, string>,
      categories: {
        languages: {
          title: "Bahasa Pemrograman",
          description: "Bahasa inti yang dikuasai untuk membangun logika komputasi, algoritma efisien, dan arsitektur sistem yang modular.",
        },
        frontend: {
          title: "Pengembangan Frontend",
          description: "Framework dan library antarmuka modern untuk menciptakan pengalaman pengguna yang dinamis, interaktif, dan berkinerja tinggi.",
        },
        backend: {
          title: "Arsitektur Backend & API",
          description: "Teknologi server, perancangan RESTful API, dan arsitektur microservices yang andal untuk integritas data dan keamanan transaksi.",
        },
        "ai-ml": {
          title: "AI, Data Science & Machine Learning",
          description: "Framework kecerdasan buatan, pemodelan statistik, peramalan tren waktu (time-series), dan pengolahan data berskala besar.",
        },
        "ai-tools": {
          title: "AI Developer Tooling",
          description: "Perangkat lunak dan asisten berbasis AI yang diintegrasikan ke dalam alur kerja untuk mengakselerasi proses riset dan pengembangan.",
        },
        databases: {
          title: "Basis Data & Penyimpanan Terdistribusi",
          description: "Sistem basis data relasional (SQL), NoSQL, dan vector database untuk kebutuhan transaksional maupun pencarian semantik AI.",
        },
        devops: {
          title: "Infrastruktur Cloud & DevOps",
          description: "Platform komputasi awan, kontainerisasi Docker, serta otomatisasi pipeline CI/CD untuk deployment yang cepat dan stabil.",
        },
        tools: {
          title: "Perangkat Pengujian & Kolaborasi",
          description: "Perangkat pendukung manajemen versi kode, dokumentasi API, desain prototipe, dan koordinasi tim secara efisien.",
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      kicker: "REKAM KARYA",
      title: "Proyek Rekayasa yang Memberi Solusi Terukur",
      copy: "Dokumentasi proyek terapan yang mencakup sistem pendukung keputusan (DSS), integrasi model bahasa besar (LLM), pipeline data, dan aplikasi web siap pakai.",
      caseStudy: "Studi Kasus",
      viewOriginal: "Lihat Resolusi Asli",
      otherKicker: "Arsip Proyek",
      otherTitle: "Daftar proyek tambahan.",
      otherCount: "10 entri terpilih",
      views: {
        executive: {
          title: "Ringkasan Eksekutif",
          desc: "Kapasitas Akademik & Rasio Dosen-Mahasiswa Institusi (Universitas Siliwangi)",
        },
        detail: {
          title: "Detail Per Program Studi",
          desc: "Distribusi Rasio Dosen-Mahasiswa & Matriks Antar Program Studi",
        },
        trend: {
          title: "Tren Longitudinal",
          desc: "Pemantauan Rasio Longitudinal Multi-Semester (Ganjil 2023 - Ganjil 2025)",
        },
      },
    },
    documentation: {
      kicker: "BUKTI LAPANGAN",
      title: "Bukti Proyek & Dampak Komunitas",
      copy: "Artifak nyata dari pekerjaan saya: dashboard BI, benchmark machine learning, momen kompetisi, dan workshop komunitas.",
      autoSlideHint: "Geser untuk menjelajah · Klik artifak untuk memperbesar resolusi",
      pause: "Jeda Slide",
      play: "Lanjutkan Slide",
      inspectBtn: "Lihat Artifak",
    },
    experience: {
      kicker: "REKAM JEJAK PROFESIONAL",
      title: "Pengalaman Kerja, Penelitian, dan Kepemimpinan",
      copy: "Kombinasi pengalaman memimpin tim pengembangan produk AI, rekayasa web untuk klien industri, riset data akademik, hingga kontribusi aktif di komunitas teknologi.",
      editorialNote: "Ringkasan Karir",
    },
    awards: {
      kicker: "PENGHARGAAN & PRESTASI",
      title: "Pencapaian Kompetisi dan Rekognisi Akademik",
    },
    credentials: {
      kicker: "SERTIFIKASI",
      title: "Sertifikasi, Pelatihan, dan Program",
      copy: "Sertifikat dari BNSP, Microsoft, Google, IBM, Dicoding, dan Anthropic, plus partisipasi program dan acara. Gunakan panah atau geser untuk menjelajah.",
      viewBtn: "Lihat Sertifikat",
    },
    contact: {
      kicker: "HUBUNGI SAYA",
      title: "Mari Berkolaborasi dan Bangun Solusi Bersama",
      copy: "Apakah Anda memiliki kebutuhan rekayasa sistem AI, peluang posisi profesional, atau proyek strategis yang ingin didiskusikan? Saya siap terhubung.",
      directChannels: "Kontak Langsung",
      emailLabel: "Email",
      phoneLabel: "Telepon",
      locationLabel: "Domisili",
      preferredTitle: "Langkah Diskusi",
      preferredCopy: "Sampaikan garis besar kebutuhan sistem, sasaran proyek, atau peluang kerja sama yang Anda miliki. Saya akan segera merespons dengan rencana tindak lanjut yang konkret.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formSubject: "Subjek Pesan",
      formSubjectPlaceholder: "Contoh: Peluang Full-Stack AI Engineer / Konsultasi Sistem",
      formMessage: "Isi Pesan",
      formMessagePlaceholder: "Tuliskan detail kebutuhan, latar belakang proyek, atau pertanyaan Anda di sini.",
      formNotice: "Formulir ini menggunakan pemicu mailto langsung dari browser. Tidak ada data yang disimpan di server.",
      btnSubmit: "Kirim Pesan",
      formSuccess: "Draf pesan telah disiapkan di aplikasi email utama Anda.",
    },
    footer: {
      tagline: "Mengembangkan produk cerdas dan arsitektur digital dengan integritas serta keandalan tinggi.",
      quickLinks: "Navigasi",
      connect: "Koneksi",
      rights: "Dibuat di Indonesia.",
    },
  },
} as const;
