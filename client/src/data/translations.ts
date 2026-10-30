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
      role: "Full Stack AI Engineer | Data Analyst",
      roleSub: "Applied AI, Data Analytics & Business Intelligence",
      headline:
        "**Full Stack AI Engineer | Data Analyst** bridging *decision-driven analytics*, *data warehousing*, and *production AI systems*. Backed by **2+ years of project engineering experience** proven across **913,000+** modelled retail transactions, BI analytics spanning **113 International Undergraduate Programs (IUP)** across 11 State Universities, and predictive dashboards tracking **30 IDX30 tickers** — selected as Google Student Ambassador Campus Lead from **12,000+** applicants.",
      exploreBtn: "Explore Projects",
      contactBtn: "Direct Contact",
    },
    about: {
      kicker: "PROFILE & FOCUS",
      title: "Turning raw data into clear, reliable decisions.",
      fieldPortrait: "FIELD PORTRAIT / 01",
      badge: "FN-26 / AI & DATA",
      aboutText:
        "Fauzi is a fresh Information Systems graduate from Universitas Siliwangi (GPA 3.89/4.00, Cum Laude) with 2+ years of project experience in Data Analytics, Business Intelligence, and Full Stack AI Engineering. He led a 5-member team through a 900+ hour AI capstone with Pijak × IBM SkillsBuild, shipped PolaStok (913,000+ retail transactions modelled, SMAPE ~17.6%), and served as Google Student Ambassador Campus Lead (selected from 12,000+ nationwide). His practice spans end-to-end data pipelines — EDA, dimensional data warehousing, executive BI dashboards, predictive forecasting, and production web deployment.",
      shortBio:
        "Turning raw data into *clear business decisions* — through analytics engineering, *BI dashboards*, and *production AI systems* grounded in real problems.",
      paragraphs: [
        "Fresh graduate in Information Systems from Universitas Siliwangi (GPA 3.89/4.00, Cum Laude) with **2+ years** of hands-on project engineering experience spanning **Data Analytics**, **Business Intelligence**, and **Applied AI** — built progressively across academic research, industry internships, and intensive engineering programs since 2023. Proven across **913,000+** modelled retail transactions, BI analytics spanning **113 International Undergraduate Programs (IUP)** across 11 State Universities, and predictive dashboards covering **30 IDX30 tickers** — delivering insights that directly support business decisions.",
        "My core practice bridges **Data Analytics & Full Stack AI**: designing Kimball *star-schema* data warehouses, building fault-tolerant *ETL* pipelines, and delivering executive dashboards in *Looker Studio* and *Power BI* that translate complex datasets into actionable strategy. I also engineer production applications and *machine learning* pipelines — time-series forecasting, regression, and LLM orchestration — that deliver measurable utility under real-world constraints.",
        "Beyond individual contribution, I led a 5-engineer team shipping *PolaStok* through *Pijak × IBM SkillsBuild* and was selected as *Google Student Ambassador Campus Lead* from 12,000+ applicants. I bring structured analytical thinking, clear data storytelling, and a habit of connecting every metric back to the business question it answers.",
      ],
      focus: {
        build: {
          label: "Data Analytics & BI",
          detail: "Building *star-schema* data warehouses, automated *ETL* pipelines, and executive dashboards (*Looker Studio*, *Power BI*) for institutional decision-making.",
        },
        analyze: {
          label: "Applied ML & Predictive Modelling",
          detail: "Designing time-series forecasting, regression, and *LLM* classification pipelines that translate historical data into forward-looking business intelligence.",
        },
        lead: {
          label: "AI Adoption & Tech Outreach",
          detail: "Advancing responsible AI adoption as Campus Lead for the *Google Student Ambassador Program* and mentoring 1,000+ student developers.",
        },
      },
      facts: [
        ["Location", "Tasikmalaya, Indonesia"],
        ["Education", "Information Systems, Universitas Siliwangi (GPA 3.89, Cum Laude)"],
        ["Core Specialisation", "*Data Analytics*, *Business Intelligence*, *Applied ML*, *ETL Pipelines*"],
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
      copy: "Certificates from BNSP, AWS, Google, Microsoft, IBM, Dicoding, and Anthropic, plus program and event participation. Use the arrows or swipe to browse.",
      viewBtn: "View Certificate",
    },
    contact: {
      kicker: "START A CONVERSATION",
      title: "Let’s Discuss Engineering Solutions or Collaborations",
      connectTitle: "Let's connect",
      connectSubtitle:
        "Building something, hiring, or just want to talk shop? I'm always happy to meet other builders. Reach out and say hi.",
      emailBtn: "Send me an email",
      linkedinBtn: "Connect on LinkedIn",
      orFormBtn: "Or send a message via form →",
      copy: "Whether you have an applied AI challenge, full-stack product opening, or a collaborative venture, I’m ready to connect.",
      directChannels: "Direct Channels",
      emailLabel: "Email",
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
      footerTag: "I'm Fauzi — Let's build together",
      backToTop: "Back to Top",
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
      role: "Full Stack AI Engineer | Data Analyst",
      roleSub: "Rekayasa AI Terapan, Analitik Data & Business Intelligence",
      headline:
        "**Full Stack AI Engineer | Data Analyst** yang menjembatani *analitik data berbasis keputusan*, *data warehousing*, dan *rekayasa sistem AI produksi*. Berpengalaman **2+ tahun** menangani pemodelan **913.000+** transaksi ritel, analitik BI di **113 program studi IUP** di 11 perguruan tinggi negeri, dan dashboard prediktif **30 saham IDX30** — terpilih sebagai Google Student Ambassador Campus Lead dari **12.000+** pendaftar nasional.",
      exploreBtn: "Jelajahi Proyek",
      contactBtn: "Hubungi Langsung",
    },
    about: {
      kicker: "TENTANG & FOKUS REKAYASA",
      title: "Mengubah data mentah menjadi keputusan yang jelas dan berdampak.",
      fieldPortrait: "DOKUMENTASI REKAYASA / 01",
      badge: "FN-26 / AI & DATA",
      aboutText:
        "Fauzi adalah fresh graduate S1 Sistem Informasi dari Universitas Siliwangi (IPK 3.89/4.00, Cum Laude) dengan 2+ tahun pengalaman proyek di bidang Data Analytics, Business Intelligence, dan Full Stack AI Engineering. Memimpin tim 5 engineer dalam capstone AI intensif 900+ jam bersama Pijak × IBM SkillsBuild, merilis PolaStok (pemodelan 913.000+ transaksi ritel, SMAPE ~17.6%), serta terpilih sebagai Google Student Ambassador Campus Lead dari 12.000+ pendaftar nasional. Praktik rekayasanya mencakup pipeline end-to-end dari data warehousing hingga dashboard BI eksekutif, pemodelan prediktif, dan deployment web produksi.",
      shortBio:
        "Mengubah data mentah menjadi *keputusan bisnis yang nyata* — melalui rekayasa analitik, *dashboard BI*, dan *sistem AI produksi* yang berakar pada permasalahan nyata.",
      paragraphs: [
        "Fresh graduate S1 Sistem Informasi dari Universitas Siliwangi (IPK 3.89/4.00, Cum Laude) dengan **2+ tahun** pengalaman proyek nyata di bidang **Data Analytics**, **Business Intelligence**, dan **Applied AI** — dibangun secara progresif sejak 2023 melalui riset akademik, magang industri, dan program rekayasa intensif. Terbukti melalui pemodelan **913.000+** transaksi ritel, analitik kebijakan di **113 program studi IUP** di 11 perguruan tinggi negeri, serta dashboard prediktif yang mencakup **30 saham IDX30** — menghasilkan insight yang langsung menopang pengambilan keputusan bisnis.",
        "Fokus utama saya memadukan **Data Analytics & Full Stack AI**: merancang *data warehouse* berbasis *Kimball star-schema*, membangun pipeline *ETL* yang andal, serta menghadirkan dashboard eksekutif di *Looker Studio* dan *Power BI* yang mengubah dataset kompleks menjadi strategi yang dapat ditindaklanjuti. Saya juga mengembangkan aplikasi produksi dan pipeline *machine learning* — peramalan runtun waktu, regresi, dan orkestrasi LLM — untuk menghasilkan utilitas nyata di lingkungan produksi.",
        "Di luar kontribusi individu, saya memimpin tim 5 engineer merilis *PolaStok* melalui *Pijak × IBM SkillsBuild*, dan terpilih sebagai Campus Lead *Google Student Ambassador* dari 12.000+ mahasiswa nasional. Saya membawa pemikiran analitik terstruktur, kemampuan *data storytelling*, dan kebiasaan menghubungkan setiap metrik kembali ke pertanyaan bisnis yang relevan.",
      ],
      focus: {
        build: {
          label: "Data Analytics & Kecerdasan Bisnis",
          detail: "Merancang *star-schema data warehouse*, pipeline *ETL* otomatis, dan dashboard eksekutif (*Looker Studio*, *Power BI*) untuk pengambilan keputusan strategis.",
        },
        analyze: {
          label: "Applied ML & Pemodelan Prediktif",
          detail: "Membangun pipeline peramalan runtun waktu, regresi, dan klasifikasi *LLM* yang mengubah data historis menjadi kecerdasan bisnis yang berorientasi masa depan.",
        },
        lead: {
          label: "Edukasi AI & Kepemimpinan Komunitas",
          detail: "Mendorong pemanfaatan AI yang bertanggung jawab sebagai Campus Lead *Google Student Ambassador* dan menginisiasi program mentoring bagi 1.000+ mahasiswa teknologi.",
        },
      },
      facts: [
        ["Domisili", "Tasikmalaya, Indonesia"],
        ["Pendidikan", "S1 Sistem Informasi, Universitas Siliwangi (IPK 3.89, Cum Laude)"],
        ["Spesialisasi", "*Data Analytics*, *Business Intelligence*, *Applied ML*, *ETL Pipeline*"],
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
      copy: "Sertifikat dari BNSP, AWS, Google, Microsoft, IBM, Dicoding, dan Anthropic, plus partisipasi program dan acara. Gunakan panah atau geser untuk menjelajah.",
      viewBtn: "Lihat Sertifikat",
    },
    contact: {
      kicker: "HUBUNGI SAYA",
      title: "Mari Berkolaborasi dan Bangun Solusi Bersama",
      connectTitle: "Mari terhubung",
      connectSubtitle:
        "Sedang membangun sesuatu, membuka peluang kerja, atau sekadar ingin berdiskusi? Saya selalu senang bertemu dan bertukar ide. Jangan ragu untuk menyapa.",
      emailBtn: "Kirim saya email",
      linkedinBtn: "Terhubung di LinkedIn",
      orFormBtn: "Atau kirim pesan via formulir →",
      copy: "Apakah Anda memiliki kebutuhan rekayasa sistem AI, peluang posisi profesional, atau proyek strategis yang ingin didiskusikan? Saya siap terhubung.",
      directChannels: "Kontak Langsung",
      emailLabel: "Email",
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
      footerTag: "Saya Fauzi — Mari bangun bersama",
      backToTop: "Kembali ke Atas",
      quickLinks: "Navigasi",
      connect: "Koneksi",
      rights: "Dibuat di Indonesia.",
    },
  },
} as const;
