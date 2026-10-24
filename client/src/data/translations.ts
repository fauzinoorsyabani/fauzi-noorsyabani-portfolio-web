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
        "I build end-to-end AI-powered products, from data and models through backend systems, full-stack experiences, and measurable delivery.",
      exploreBtn: "Explore Evidence",
      contactBtn: "Direct Line",
      hoursLabel: "Hours in capstone",
      programsLabel: "Programs analyzed",
      studentsLabel: "Students reached",
    },
    about: {
      kicker: "Professional position",
      title: "Building useful systems from complex signals.",
      fieldPortrait: "FIELD PORTRAIT / 01",
      badge: "FN-26 / FULL STACK AI",
      aboutText:
        "Fauzi is an innovation-driven Full Stack AI Engineer with a strong foundation in applied AI, data science, backend development, and product delivery. He builds end-to-end digital systems with Python, React, Laravel, and modern LLM tooling—then pairs the technical work with clear communication, product thinking, and community leadership.",
      shortBio:
        "From analysis and forecasting to deployed AI products, Fauzi connects the technical work to decisions people can actually use.",
      focus: {
        build: {
          label: "Build",
          detail: "Full-stack products and responsive digital experiences.",
        },
        analyze: {
          label: "Analyze",
          detail: "Data dashboards, forecasting, and decision-support insights.",
        },
        lead: {
          label: "Lead",
          detail: "AI advocacy, student communities, events, and technology adoption.",
        },
      },
      facts: [
        ["Based in", "Tasikmalaya, Indonesia"],
        ["Education", "Information Systems, Universitas Siliwangi"],
        ["Current focus", "End-to-end AI systems, data products, full-stack delivery"],
        ["Availability", "Open to work"],
      ] as const,
    },
    techStack: {
      kicker: "WHAT I WORK WITH",
      title: "Tech Stacks & Tools",
      copy: "Curated tools, frameworks, and agentic workflows used to carry ideas from data through production-ready software solutions.",
      filters: {
        all: "All Technologies",
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases & Data Store",
        "ai-ml": "AI & ML",
        "ai-tools": "AI Developer Tools",
        devops: "DevOps & Cloud",
        tools: "Tools",
      } as Record<string, string>,
      categories: {
        languages: {
          title: "Programming Languages",
          description: "Languages I've mastered for building robust and efficient software solutions.",
        },
        frontend: {
          title: "Frontend Technologies",
          description: "Tools and frameworks I use to create responsive, interactive user interfaces.",
        },
        backend: {
          title: "Backend Technologies",
          description: "Technologies I leverage to build scalable server-side applications and APIs.",
        },
        "ai-ml": {
          title: "AI & ML",
          description: "Machine learning, statistical modeling, and data intelligence frameworks.",
        },
        "ai-tools": {
          title: "AI Developer Tools",
          description: "AI coding assistants and agentic tools I use to enhance productivity and problem-solving.",
        },
        databases: {
          title: "Databases & Data Store",
          description: "Database systems I'm proficient in for managing and optimizing data storage.",
        },
        devops: {
          title: "DevOps & Cloud",
          description: "Cloud platforms and tools I use for deployment, CI/CD, and infrastructure management.",
        },
        tools: {
          title: "Development Tools",
          description: "Utilities and platforms that enhance my development workflow and productivity.",
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      kicker: "Selected work",
      title: "Projects built to clarify, predict, and improve.",
      copy: "A selected index of data work, applied AI, and product engineering. Real decision-support systems and analytics dashboards.",
      caseStudy: "Case Study",
      viewOriginal: "View Original Resolution",
      otherKicker: "Other projects",
      otherTitle: "A compact working index.",
      otherCount: "05 selected entries",
      views: {
        executive: {
          title: "Executive Overview",
          desc: "Academic Capacity & Student-Lecturer Ratio (Universitas Siliwangi)",
        },
        detail: {
          title: "Detail Per Study Program",
          desc: "Ratio Distribution & Inter-Departmental Department Matrices",
        },
        trend: {
          title: "Longitudinal Trends",
          desc: "Multi-Semester Longitudinal Ratio Monitoring (Odd 2023 - Odd 2025)",
        },
      },
    },
    experience: {
      kicker: "Experience & leadership",
      title: "A record of applied work and people-first momentum.",
      copy: "A developing career shaped by product delivery, data analysis, responsible AI advocacy, and local community work.",
      editorialNote: "Editorial note",
    },
    awards: {
      kicker: "Recognition",
      title: "Evidence of analytical excellence and initiative.",
    },
    credentials: {
      kicker: "Credentials",
      title: "Certifications that support delivery.",
      copy: "Credential destinations are intentionally kept as editable placeholders until verified public URLs are supplied.",
      viewBtn: "View Credential",
    },
    contact: {
      kicker: "Contact & collaboration",
      title: "Start with the outcome.",
      copy: "Share the product context, the decision it needs to support, and the delivery constraints. I’ll respond with a focused next step.",
      directChannels: "Direct channels",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      preferredTitle: "Preferred starting point",
      preferredCopy: "Share your context, the outcome you are working toward, and the constraints that matter. A useful first conversation starts with a real problem.",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formSubjectPlaceholder: "What would you like to discuss?",
      formMessage: "Message",
      formMessagePlaceholder: "A little context goes a long way.",
      formNotice: "This static portfolio uses a safe mailto fallback. No information is stored on the website.",
      btnSubmit: "Start a Conversation",
      formSuccess: "Your message has been prepared in your email client.",
    },
    footer: {
      tagline: "Building digital experiences and AI products with passion and purpose.",
      quickLinks: "Quick links",
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
      ["Penghargaan", "awards"],
      ["Kontak", "contact"],
    ] as const,
    header: {
      contactBtn: "Kontak",
      switchLanguageLabel: "Switch to English",
    },
    hero: {
      availability: "TERBUKA UNTUK KERJA",
      greeting: "Halo, Saya",
      role: "Full Stack AI Engineer",
      roleSub: "Produk AI Terapan & Sains Data",
      headline:
        "Saya membangun produk bertenaga AI dari hulu ke hilir—mulai dari data dan model, arsitektur backend, pengalaman full-stack, hingga implementasi terukur.",
      exploreBtn: "Lihat Portofolio",
      contactBtn: "Hubungi Langsung",
      hoursLabel: "Jam capstone intensif",
      programsLabel: "Program studi dianalisis",
      studentsLabel: "Peserta terjangkau",
    },
    about: {
      kicker: "Profil Profesional",
      title: "Membangun sistem berdaya guna dari sinyal yang kompleks.",
      fieldPortrait: "PORTRET BIDANG / 01",
      badge: "FN-26 / FULL STACK AI",
      aboutText:
        "Fauzi adalah Full Stack AI Engineer yang berfokus pada inovasi terapan, dengan fondasi kuat dalam rekayasa AI, sains data, pengembangan backend, dan pengiriman produk digital. Membangun sistem terintegrasi menggunakan Python, React, Laravel, dan ekosistem LLM modern—yang dipadukan dengan pemikiran produk dan kepemimpinan komunitas.",
      shortBio:
        "Dari analisis data dan peramalan prediktif hingga produk AI siap pakai, Fauzi menghubungkan kemampuan teknis dengan keputusan nyata yang berdampak.",
      focus: {
        build: {
          label: "Bangun",
          detail: "Pengembangan produk full-stack dan pengalaman digital yang responsif.",
        },
        analyze: {
          label: "Analisis",
          detail: "Dashboard analitik, peramalan tren data, dan wawasan penunjang keputusan.",
        },
        lead: {
          label: "Pimpin",
          detail: "Advokasi AI, komunitas pengembang, kepemimpinan acara, dan adopsi teknologi.",
        },
      },
      facts: [
        ["Lokasi", "Tasikmalaya, Indonesia"],
        ["Pendidikan", "Sistem Informasi, Universitas Siliwangi"],
        ["Fokus Utama", "Sistem AI hulu ke hilir, produk data, rekayasa full-stack"],
        ["Ketersediaan", "Terbuka untuk Peluang Kerja"],
      ] as const,
    },
    techStack: {
      kicker: "KEAHLIAN & PERANGKAT",
      title: "Tech Stacks & Tools",
      copy: "Kumpulan perangkat, framework, dan alur kerja agen AI untuk mewujudkan ide data menjadi solusi perangkat lunak siap produksi.",
      filters: {
        all: "Semua Teknologi",
        languages: "Bahasa",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Basis Data",
        "ai-ml": "AI & ML",
        "ai-tools": "AI Developer Tools",
        devops: "DevOps & Cloud",
        tools: "Tools",
      } as Record<string, string>,
      categories: {
        languages: {
          title: "Programming Languages",
          description: "Bahasa pemrograman untuk membangun arsitektur perangkat lunak yang tangguh dan efisien.",
        },
        frontend: {
          title: "Frontend Technologies",
          description: "Perangkat dan framework modern untuk menciptakan antarmuka interaktif dan responsif.",
        },
        backend: {
          title: "Backend Technologies",
          description: "Teknologi server-side dan API berskala tinggi untuk mendukung keandalan sistem.",
        },
        "ai-ml": {
          title: "AI & ML",
          description: "Framework machine learning, pemodelan statistik, dan kecerdasan data prediktif.",
        },
        "ai-tools": {
          title: "AI Developer Tools",
          description: "Asisten kecerdasan buatan dan alur agen AI untuk meningkatkan produktivitas serta pemecahan masalah.",
        },
        databases: {
          title: "Databases & Data Store",
          description: "Sistem basis data teruji untuk pengelolaan, integritas, dan optimalisasi penyimpanan data.",
        },
        devops: {
          title: "DevOps & Cloud",
          description: "Platform cloud dan infrastruktur otomatisasi untuk orkestrasi deployment dan CI/CD.",
        },
        tools: {
          title: "Development Tools",
          description: "Platform dan utilitas kerja untuk mempercepat workflow dan kolaborasi pengembangan.",
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      kicker: "Karya Terpilih",
      title: "Proyek yang dirancang untuk memperjelas, memprediksi, dan meningkatkan.",
      copy: "Koleksi karya terpilih dalam sains data, rekayasa AI terapan, dan pengembangan produk nyata.",
      caseStudy: "Studi Kasus",
      viewOriginal: "Lihat Resolusi Asli",
      otherKicker: "Proyek lainnya",
      otherTitle: "Indeks kerja ringkas.",
      otherCount: "05 entri terpilih",
      views: {
        executive: {
          title: "Ringkasan Eksekutif",
          desc: "Kapasitas Akademik & Rasio Mahasiswa-Dosen Institusi (Universitas Siliwangi)",
        },
        detail: {
          title: "Detail Per Program Studi",
          desc: "Distribusi Rasio Dosen-Mahasiswa & Matriks Antar Program Studi",
        },
        trend: {
          title: "Tren Longitudinal",
          desc: "Monitoring Rasio Longitudinal Multi-Semester (Ganjil 2023 - Ganjil 2025)",
        },
      },
    },
    experience: {
      kicker: "Pengalaman & Kepemimpinan",
      title: "Rekam jejak kerja terapan dan kolaborasi tim.",
      copy: "Perjalanan profesional yang dibangun melalui pengiriman produk, analisis data, edukasi AI, dan kontribusi komunitas.",
      editorialNote: "Catatan redaksi",
    },
    awards: {
      kicker: "Penghargaan",
      title: "Bukti nyata keunggulan analitis, inisiatif, dan dedikasi.",
    },
    credentials: {
      kicker: "Sertifikasi",
      title: "Sertifikasi profesional penunjang kompetensi.",
      copy: "Tautan kredensial diverifikasi secara berkala untuk memastikan keaslian sertifikasi.",
      viewBtn: "Lihat Sertifikat",
    },
    contact: {
      kicker: "Kontak & Kolaborasi",
      title: "Mulai dari dampak yang ingin dicapai.",
      copy: "Ceritakan kebutuhan sistem Anda, konteks produk, atau peluang kolaborasi. Saya akan merespons dengan langkah konkret.",
      directChannels: "Saluran Langsung",
      emailLabel: "Email",
      phoneLabel: "Telepon",
      locationLabel: "Lokasi",
      preferredTitle: "Pendekatan Kolaborasi",
      preferredCopy: "Diskusikan tantangan teknis Anda dan sasaran yang dituju. Pembicaraan terbaik selalu berakar dari solusi masalah nyata.",
      formName: "Nama",
      formEmail: "Email",
      formSubject: "Subjek",
      formSubjectPlaceholder: "Apa yang ingin didiskusikan?",
      formMessage: "Pesan",
      formMessagePlaceholder: "Tuliskan detail atau konteks pesan Anda di sini.",
      formNotice: "Portofolio statis ini menggunakan fallback mailto yang aman tanpa menyimpan data di server.",
      btnSubmit: "Kirim Pesan",
      formSuccess: "Pesan Anda telah disiapkan di aplikasi email Anda.",
    },
    footer: {
      tagline: "Membangun produk AI dan pengalaman digital dengan inovasi serta dedikasi nyata.",
      quickLinks: "Tautan Cepat",
      connect: "Terhubung",
      rights: "Dibuat di Indonesia.",
    },
  },
} as const;
