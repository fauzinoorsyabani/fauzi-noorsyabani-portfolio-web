import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "h-4 w-4 shrink-0" }: TechIconProps) {
  const n = name.trim().toLowerCase();

  // Python
  if (n === "python") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M63.54 2c-32.5 0-30.47 14.09-30.47 14.09l.04 14.6h31.01v4.38H20.79S0 32.71 0 65.5s18.15 31.62 18.15 31.62h10.83V81.91s-.58-18.15 17.86-18.15h30.75s17.28.28 17.28-16.7V20.79S97.5 2 63.54 2zM46.44 11.82a5.57 5.57 0 110 11.16 5.57 5.57 0 010-11.16z"
          fill="url(#py-a)"
        />
        <path
          d="M64.46 126c32.5 0 30.47-14.09 30.47-14.09l-.04-14.6H63.88v-4.38h43.33S128 95.29 128 62.5s-18.15-31.62-18.15-31.62h-10.83v15.21s.58 18.15-17.86 18.15H50.41s-17.28-.28-17.28 16.7v26.28S30.5 126 64.46 126zm17.1-9.82a5.57 5.57 0 110-11.16 5.57 5.57 0 010 11.16z"
          fill="url(#py-b)"
        />
        <defs>
          <linearGradient id="py-a" x1="12" y1="12" x2="70" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387eb8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-b" x1="56" y1="56" x2="114" y2="114" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe052" />
            <stop offset="1" stopColor="#ffc331" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Pandas
  if (n === "pandas") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="22" y="16" width="16" height="42" rx="4" fill="#130754" />
        <rect x="46" y="38" width="16" height="52" rx="4" fill="#FFD43B" />
        <rect x="70" y="24" width="16" height="66" rx="4" fill="#E70488" />
        <rect x="94" y="58" width="16" height="42" rx="4" fill="#00A3E0" />
      </svg>
    );
  }

  // Scikit-learn
  if (n.includes("scikit")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="54" fill="#F89939" opacity="0.15" />
        <path d="M42 36l30 28-30 28V36z" fill="#3499CD" />
        <path d="M86 36L56 64l30 28V36z" fill="#F89939" />
        <circle cx="64" cy="64" r="14" fill="#fff" />
        <circle cx="64" cy="64" r="8" fill="#18567F" />
      </svg>
    );
  }

  // NumPy
  if (n === "numpy") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l48 28v48L64 116 16 88V40L64 12z" fill="#4DABCF" />
        <path d="M64 12l48 28-48 28-48-28 48-28z" fill="#013243" opacity="0.3" />
        <path d="M16 40l48 28v48L16 88V40z" fill="#459DB5" />
        <path d="M64 68l48-28v48L64 116V68z" fill="#4DABCF" />
        <path d="M42 48v32l22-18v-28L42 48z" fill="#fff" />
        <path d="M64 62l22 18V48L64 34v28z" fill="#fff" opacity="0.8" />
      </svg>
    );
  }

  // Streamlit
  if (n === "streamlit") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 22l48 76H16L64 22z" fill="#FF4B4B" />
        <path d="M64 22l24 76H16L64 22z" fill="#FF2B2B" opacity="0.3" />
        <path d="M64 54l20 44H44L64 54z" fill="#fff" opacity="0.25" />
      </svg>
    );
  }

  // Power BI
  if (n.includes("power bi")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="74" y="20" width="28" height="88" rx="6" fill="#F2C811" />
        <rect x="50" y="44" width="28" height="64" rx="6" fill="#E6AD10" />
        <rect x="26" y="68" width="28" height="40" rx="6" fill="#D3960E" />
      </svg>
    );
  }

  // SQL / Generic database
  if (n === "sql") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="32" rx="44" ry="16" fill="#336791" />
        <path d="M20 32v64c0 8.8 19.7 16 44 16s44-7.2 44-16V32" stroke="#336791" strokeWidth="12" fill="none" />
        <path d="M20 64c0 8.8 19.7 16 44 16s44-7.2 44-16" stroke="#336791" strokeWidth="12" fill="none" />
      </svg>
    );
  }

  // OpenAI / ChatGPT
  if (n.includes("openai") || n.includes("chatgpt")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="currentColor">
        <path d="M115.5 53.6a33.4 33.4 0 00-2.8-26.6 34.6 34.6 0 00-34-17.4A33.7 33.7 0 0055.6 4a34.3 34.3 0 00-32.8 23.8 33.8 33.8 0 00-19.6 14.3 34.3 34.3 0 001.2 38.1 33.4 33.4 0 002.8 26.6 34.6 34.6 0 0034 17.4 33.7 33.7 0 0023.1 5.6A34.3 34.3 0 0097.1 106a33.8 33.8 0 0019.6-14.3 34.3 34.3 0 00-1.2-38.1zM64 74a10 10 0 1110-10 10 10 0 01-10 10zm-35-14a24 24 0 0113.6-13.6 24.3 24.3 0 0122.8 1.4l-11.6 6.7a13.3 13.3 0 00-11.4 7.5L29 58zm6.4 33.4a24.3 24.3 0 01-1.4-22.8l11.6 6.7a13.3 13.3 0 004.2 13.1l-14.4 3zm43.4 12.2a24 24 0 01-22.8-1.4l11.6-6.7a13.3 13.3 0 0011.4-7.5l14.2 8.2a24.3 24.3 0 01-14.4 7.4zm19.8-25.6a24.3 24.3 0 01-4.2 17.6l-14.2-8.2a13.3 13.3 0 00-4.2-13.1l14.4-8.3a24.3 24.3 0 018.2 12zm-8.8-31.2a24.3 24.3 0 011.4 22.8l-11.6-6.7a13.3 13.3 0 00-4.2-13.1l14.4-8.3zM64 45.3a18.7 18.7 0 00-9.4 2.6l-14.4-8.3a24.3 24.3 0 0133.2-1.7l-14.2 8.2a13.3 13.3 0 004.8-.8z" />
      </svg>
    );
  }

  // Gemini API
  if (n.includes("gemini")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M64 8C64 38.9 38.9 64 8 64c30.9 0 56 25.1 56 56 0-30.9 25.1-56 56-56-30.9 0-56-25.1-56-56z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="8" y1="8" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#5B7FE8" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // LangChain / LangGraph
  if (n.includes("langchain") || n.includes("langgraph")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#1C3C3C" />
        <path d="M42 44h22v40H42z" fill="#00A67E" />
        <circle cx="78" cy="52" r="12" fill="#F4B400" />
        <path d="M64 84l26-20" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // Google Looker / Looker Studio
  if (n.includes("looker")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="36" cy="64" r="20" fill="#4285F4" />
        <circle cx="64" cy="36" r="20" fill="#EA4335" />
        <circle cx="92" cy="64" r="20" fill="#FBBC04" />
        <circle cx="64" cy="92" r="20" fill="#34A853" />
      </svg>
    );
  }

  // Tableau
  if (n === "tableau") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12v104M12 64h104" stroke="#E97627" strokeWidth="12" strokeLinecap="round" />
        <path d="M40 32v64M88 32v64" stroke="#2B5B84" strokeWidth="10" strokeLinecap="round" />
        <path d="M32 40h64M32 88h64" stroke="#D32F2F" strokeWidth="10" strokeLinecap="round" />
      </svg>
    );
  }

  // Google Colab
  if (n.includes("colab")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M42 64c0-14 10-24 22-24s22 10 22 24-10 24-22 24-22-10-22-24z" stroke="#F9AB00" strokeWidth="14" />
        <path d="M86 64c0-14 10-24 22-24s20 10 20 24-10 24-20 24-22-10-22-24z" stroke="#E37400" strokeWidth="14" />
      </svg>
    );
  }

  // React / React Native
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="8" transform="rotate(0 64 64)" />
        <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="8" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="8" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="10" fill="#61DAFB" />
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M30 46h38v14H56v46H42V60H30V46zm44 32c3 4 8 7 14 7 5 0 9-3 9-6 0-5-6-7-12-10-10-4-15-9-15-18 0-10 8-17 21-17 9 0 16 3 21 8l-6 11c-4-4-9-6-15-6s-8 2-8 6c0 4 5 6 12 9 10 4 15 10 15 19 0 11-9 18-23 18-11 0-19-4-25-11l9-10z" fill="#fff" />
      </svg>
    );
  }

  // JavaScript
  if (n.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M36 84c2 3 5 5 9 5 5 0 8-3 8-10V46h13v34c0 14-8 21-21 21-8 0-14-4-17-10l8-7zm39-1c3 4 7 7 14 7 6 0 10-3 10-7 0-5-5-7-12-10-10-4-16-9-16-18 0-11 9-18 22-18 9 0 15 3 20 8l-7 9c-3-3-7-5-13-5s-9 3-9 6c0 4 4 6 11 9 11 4 17 9 17 19 0 12-9 19-24 19-11 0-18-4-23-11l8-9z" fill="#000" />
      </svg>
    );
  }

  // PHP
  if (n === "php") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
        <path d="M38 52h14c6 0 10 2 10 7s-4 8-10 8h-8l-3 12H31l7-27zm9 9h5c3 0 5-1 5-3s-2-3-5-3h-4l-1 6zm20-9h10l-6 27H61l6-27zm18 0h14c6 0 10 2 10 7s-4 8-10 8h-8l-3 12H76l7-27zm9 9h5c3 0 5-1 5-3s-2-3-5-3h-4l-1 6z" fill="#fff" />
      </svg>
    );
  }

  // Laravel
  if (n === "laravel") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l48 28v48L64 116 16 88V40l48-28z" fill="#FF2D20" opacity="0.1" />
        <path d="M112 36L64 8 16 36v56l48 28 48-28V36z" stroke="#FF2D20" strokeWidth="8" fill="none" />
        <path d="M64 8v112M16 36l48 28 48-28M16 92l48-28 48 28" stroke="#FF2D20" strokeWidth="6" fill="none" />
      </svg>
    );
  }

  // FastAPI
  if (n === "fastapi") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="56" fill="#05998B" />
        <path d="M68 28L40 68h24l-4 32 32-44H68l4-28z" fill="#fff" />
      </svg>
    );
  }

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="currentColor">
        <circle cx="64" cy="64" r="56" fill="currentColor" fillOpacity="0.1" />
        <path d="M42 42h14v44H42V42zm44 0H72l-22 36V42H38v44h14l24-38v38h10V42z" />
      </svg>
    );
  }

  // Vue.js
  if (n.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M14 20h24l26 44 26-44h24L64 108 14 20z" fill="#42B883" />
        <path d="M38 20h22l4 8 4-8h22L64 74 38 20z" fill="#35495E" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M34 46c5-10 14-14 24-11 7 2 12 7 18 12 9 8 18 15 38 15 5 0 9-1 14-4-5 10-14 14-24 11-7-2-12-7-18-12-9-8-18-15-38-15-5 0-9 1-14 4zm-20 36c5-10 14-14 24-11 7 2 12 7 18 12 9 8 18 15 38 15 5 0 9-1 14-4-5 10-14 14-24 11-7-2-12-7-18-12-9-8-18-15-38-15-5 0-9 1-14 4z" fill="#38BDF8" />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l46 26v52L64 116 18 90V38L64 12z" fill="#5FA04E" />
        <path d="M64 36v56M42 50l22 14 22-14" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // Docker
  if (n === "docker") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="22" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="38" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="54" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="38" y="38" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="54" y="38" width="14" height="12" rx="2" fill="#2496ED" />
        <rect x="70" y="52" width="14" height="12" rx="2" fill="#2496ED" />
        <path d="M112 66c-3-12-16-16-16-16s-2 6-6 8h-4v12c0 8-6 16-16 16H20c4 14 18 24 44 24 38 0 54-18 54-34 0-3-.5-7-2-10h6z" fill="#2496ED" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="54" fill="#336791" opacity="0.12" />
        <path d="M64 24c-22 0-38 16-38 38 0 14 7 26 18 32l-2 14 18-8c1.3.3 2.6.4 4 .4 22 0 38-16 38-38s-16-38-38-38z" fill="#336791" />
        <path d="M52 50a4 4 0 110 8 4 4 0 010-8zm24 0a4 4 0 110 8 4 4 0 010-8z" fill="#fff" />
      </svg>
    );
  }

  // MySQL
  if (n.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M24 74c12-24 34-36 60-32-6 8-10 18-8 28-8-8-18-12-28-10-8 2-14 8-18 14H24z" fill="#00758F" />
        <path d="M84 42c8-4 18-2 24 4-6 6-12 10-20 10-2-6-3-10-4-14z" fill="#F29111" />
        <circle cx="94" cy="46" r="3" fill="#fff" />
      </svg>
    );
  }

  // Supabase
  if (n.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M72 16L24 74h36l-8 38 52-60H68l4-36z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Redis
  if (n.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16l48 24v48L64 112 16 88V40l48-24z" fill="#DC382D" />
        <path d="M64 16l48 24-48 24-48-24 48-24z" fill="#fff" opacity="0.2" />
        <path d="M16 40l48 24v48L16 88V40z" fill="#A8251D" />
      </svg>
    );
  }

  // AWS
  if (n.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M38 52l-10 24h9l2-6h12l2 6h9L52 52H38zm6 12l3-9 3 9h-6zm32-12l-7 24h9l4-15 4 15h9l-7-24H76zm28 20c-2 2-6 4-10 4-8 0-12-5-12-12s5-12 12-12c4 0 8 2 10 4l6-6c-4-4-10-6-16-6-14 0-23 10-23 20s9 20 23 20c6 0 12-2 16-6l-6-6z" fill="#FF9900" />
        <path d="M26 94c26 14 56 12 76-4" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // Git / GitHub
  if (n === "git") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="18" y="18" width="92" height="92" rx="18" fill="#F05032" transform="rotate(45 64 64)" />
        <circle cx="48" cy="64" r="8" fill="#fff" />
        <circle cx="80" cy="48" r="8" fill="#fff" />
        <circle cx="80" cy="80" r="8" fill="#fff" />
        <path d="M48 64h24l8-16M72 64l8 16" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }
  if (n.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 8C32.9 8 8 33.1 8 64.3c0 25 16.1 46.1 38.4 53.6 2.8.5 3.8-1.2 3.8-2.7v-9.7c-15.6 3.4-18.9-7.6-18.9-7.6-2.5-6.5-6.2-8.3-6.2-8.3-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.6-7.5-12.4-1.4-25.5-6.3-25.5-27.9 0-6.2 2.2-11.2 5.8-15.1-.6-1.4-2.5-7.2.6-14.9 0 0 4.7-1.5 15.4 5.8 4.5-1.3 9.3-1.9 14.1-1.9 4.8 0 9.6.6 14.1 1.9 10.7-7.3 15.4-5.8 15.4-5.8 3.1 7.7 1.2 13.5.6 14.9 3.6 3.9 5.8 8.9 5.8 15.1 0 21.7-13.1 26.5-25.6 27.8 2 1.8 3.9 5.2 3.9 10.6v15.7c0 1.5 1 3.3 3.9 2.7 22.3-7.5 38.3-28.6 38.3-53.6C120 33.1 95.1 8 64 8z" />
      </svg>
    );
  }

  // Figma
  if (n === "figma") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="34" y="16" width="30" height="30" rx="15" fill="#F24E1E" />
        <rect x="64" y="16" width="30" height="30" rx="15" fill="#FF7262" />
        <rect x="34" y="46" width="30" height="30" rx="15" fill="#A259FF" />
        <circle cx="79" cy="61" r="15" fill="#1ABCFE" />
        <path d="M34 91c0 8.3 6.7 15 15 15s15-6.7 15-15V76H34v15z" fill="#0ACF83" />
      </svg>
    );
  }

  // VS Code
  if (n.includes("vs code") || n === "vscode") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M96 12L24 64l72 52 24-12V24L96 12z" fill="#007ACC" />
        <path d="M96 12L52 50l44 38V12z" fill="#1F9CF0" />
        <path d="M24 64l72-52v104L24 64z" fill="#0065A9" opacity="0.3" />
      </svg>
    );
  }

  // Nginx
  if (n === "nginx") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l48 26v52L64 116 16 90V38L64 12z" fill="#009639" />
        <path d="M44 40v48l40-48v48" stroke="#fff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Cloudflare
  if (n.includes("cloudflare")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M96 52c-2-14-14-24-28-24-11 0-21 6-25 16-2 0-3-.3-5-.3-14 0-26 11-26 25 0 2 .2 4 .6 6H104c10 0 18-8 18-18 0-9-7-17-16-17-.6 0-1.3 0-2 .2l-8-7.9z" fill="#F38020" />
        <path d="M96 75H38c-1 0-2-.8-2-1.8 0-1 .8-1.8 1.8-1.8H96c1 0 2 .8 2 1.8 0 1-.8 1.8-2 1.8z" fill="#FAAE40" />
      </svg>
    );
  }

  // Default fallback smart icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
