import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "h-11 w-11 shrink-0" }: TechIconProps) {
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

  // ChatGPT / OpenAI — Official Rosette in High Contrast Black & White
  if (n.includes("chatgpt") || (n.includes("openai") && !n.includes("codex"))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.737a4.485 4.485 0 0 1 2.366-1.973V12.4a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.169a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.737zm16.599 3.93-5.839-3.37 2.019-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.405-.68zm2.01-4.423-.14-.085-4.773-2.782a.776.776 0 0 0-.785 0L9.409 8.75V6.417a.08.08 0 0 1 .033-.061l4.838-2.793a4.5 4.5 0 0 1 6.67 4.683zM8.096 13.856l2.365-1.365 2.365 1.365v2.729l-2.365 1.365-2.365-1.365zm6.541-4.29-2.02-1.169v-2.33a.076.076 0 0 1 .038-.066l4.835-2.791a4.494 4.494 0 0 1 4.502 4.498 4.485 4.485 0 0 1-2.367 1.973V12.4a.766.766 0 0 0-.388-.677zm-4.73 1.365 2.02 1.169v2.73l-2.02 1.169-2.02-1.169v-2.73z" />
      </svg>
    );
  }

  // Claude / Anthropic
  if (n.includes("claude") || n.includes("anthropic")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16v96M16 64h96M30 30l68 68M30 98l68-68" stroke="#D97757" strokeWidth="16" strokeLinecap="round" />
      </svg>
    );
  }

  // Gemini (Google DeepMind)
  if (n.includes("gemini")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M64 12C64 40.7 40.7 64 12 64c28.7 0 52 23.3 52 52 0-28.7 23.3-52 52-52-28.7 0-52-23.3-52-52z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="12" y1="12" x2="116" y2="116" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.5" stopColor="#818CF8" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Manus AI
  if (n.includes("manus")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M34 84c-8-20 2-44 22-54 18-9 38-3 46 14 4 9 3 19-3 28L76 100l-18-8 15-18c-15 13-30 20-39 10z"
          fill="url(#manus-grad1)"
        />
        <path
          d="M94 84c8-20-2-44-22-54-18-9-38-3-46 14-4 9-3 19 3 28L52 100l18-8-15-18c15 13 30 20 39 10z"
          fill="url(#manus-grad2)"
          opacity="0.85"
        />
        <defs>
          <linearGradient id="manus-grad1" x1="34" y1="30" x2="86" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="manus-grad2" x1="94" y1="30" x2="42" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // DeepSeek
  if (n.includes("deepseek")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M22 80c12-26 38-40 66-40 22 0 38 10 48 24-16-12-34-15-50-10-16 5-28 17-42 32-7 7-14 7-22-6z" fill="#1E40AF" />
        <path d="M38 78c10-20 32-32 54-32 18 0 30 8 38 18-12-9-26-11-40-7-12 4-22 14-32 26-6 6-12 6-20-5z" fill="#3B82F6" />
        <circle cx="52" cy="56" r="7" fill="#fff" />
      </svg>
    );
  }

  // Cursor (Official Isometric 3D Cube)
  if (n === "cursor") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 16 112 44 64 72 16 44" fill="currentColor" opacity="0.95" />
        <polygon points="16 44 64 72 64 120 16 92" fill="currentColor" opacity="0.75" />
        <polygon points="64 72 112 44 112 92 64 120" fill="currentColor" opacity="0.6" />
      </svg>
    );
  }

  // GitHub Copilot
  if (n.includes("copilot")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M24 52C24 30 42 20 64 20s40 10 40 32v28c0 22-18 32-40 32s-40-10-40-32V52z" fill="url(#copilot-grad)" />
        <circle cx="44" cy="62" r="10" fill="#fff" />
        <circle cx="84" cy="62" r="10" fill="#fff" />
        <circle cx="44" cy="62" r="5" fill="#1E1B4B" />
        <circle cx="84" cy="62" r="5" fill="#1E1B4B" />
        <path d="M44 86c10 8 30 8 40 0" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        <defs>
          <linearGradient id="copilot-grad" x1="24" y1="20" x2="104" y2="112" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6E40C9" />
            <stop offset="1" stopColor="#9E6CE6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Antigravity (Rainbow Chevron)
  if (n.includes("antigravity")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16L116 108H88L64 56L40 108H12L64 16z" fill="url(#agy-grad)" />
        <defs>
          <linearGradient id="agy-grad" x1="12" y1="16" x2="116" y2="108" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.33" stopColor="#818CF8" />
            <stop offset="0.66" stopColor="#EC4899" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // OpenAI Codex
  if (n.includes("codex")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M44 38L20 64l24 26M84 38l24 26-24 26" stroke="#10A37F" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M74 26L54 102" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      </svg>
    );
  }

  // LangChain (Official Parrot / Linked Symbol)
  if (n === "langchain") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M40 32c14-16 38-16 52 0 7 8 7 20 0 28L68 84c-7 7-18 7-25 0s-7-18 0-25l16-16" stroke="#00A67E" strokeWidth="11" strokeLinecap="round" />
        <circle cx="58" cy="40" r="8" fill="#FFE17D" />
        <circle cx="61" cy="40" r="3.5" fill="#1C3C3C" />
        <path d="M72 62l22 22c7 7 7 18 0 25s-18 7-25 0L58 98" stroke="#14B8A6" strokeWidth="11" strokeLinecap="round" />
      </svg>
    );
  }

  // LangGraph (Official Multi-Node Graph Network)
  if (n.includes("langgraph")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <line x1="36" y1="38" x2="92" y2="38" stroke="#14B8A6" strokeWidth="8" strokeLinecap="round" />
        <line x1="36" y1="38" x2="64" y2="92" stroke="#0D9488" strokeWidth="8" strokeLinecap="round" />
        <line x1="92" y1="38" x2="64" y2="92" stroke="#00A67E" strokeWidth="8" strokeLinecap="round" />
        <circle cx="36" cy="38" r="18" fill="#0A2222" stroke="#14B8A6" strokeWidth="5" />
        <circle cx="92" cy="38" r="18" fill="#0A2222" stroke="#2DD4BF" strokeWidth="5" />
        <circle cx="64" cy="92" r="20" fill="#00A67E" stroke="#5EEAD4" strokeWidth="5" />
        <circle cx="36" cy="38" r="6" fill="#2DD4BF" />
        <circle cx="92" cy="38" r="6" fill="#5EEAD4" />
        <circle cx="64" cy="92" r="7" fill="#fff" />
      </svg>
    );
  }

  // Google Colab
  if (n.includes("colab")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M42 44a20 20 0 0 0-20 20 20 20 0 0 0 20 20c14 0 20-14 24-20-4-6-10-20-24-20z" stroke="#F9AB00" strokeWidth="12" fill="none" />
        <path d="M86 44a20 20 0 0 1 20 20 20 20 0 0 1-20 20c-14 0-20-14-24-20 4-6 10-20 24-20z" stroke="#E37400" strokeWidth="12" fill="none" />
      </svg>
    );
  }

  // Git (Official Red-Orange Branching Diamond)
  if (n === "git") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M125.7 57.5L70.5 2.3c-3.1-3.1-8.1-3.1-11.2 0L47.7 13.9l14.2 14.2c3.3-1.1 7.1-.3 9.7 2.3 2.6 2.6 3.4 6.4 2.3 9.7l13.7 13.7c3.3-1.1 7.1-.3 9.7 2.3 3.7 3.7 3.7 9.7 0 13.4s-9.7 3.7-13.4 0c-2.8-2.8-3.5-6.9-2.1-10.4L68.7 46.1v34.4c1 .6 2 1.4 2.7 2.2 3.7 3.7 3.7 9.7 0 13.4s-9.7 3.7-13.4 0c-3.7-3.7-3.7-9.7 0-13.4.9-.9 2-1.7 3.2-2.3V45.8c-1.2-.6-2.3-1.4-3.2-2.3-2.8-2.8-3.5-7-2.1-10.5L42 19.3 2.3 59c-3.1 3.1-3.1 8.1 0 11.2l55.2 55.2c3.1 3.1 8.1 3.1 11.2 0l57-56.7c3.1-3.1 3.1-8.1 0-11.2z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub (Official Octocat Badge)
  if (n === "github") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="56" fill="#181717" />
        <path
          d="M64 28a36 36 0 00-11 70c2 .3 2-.8 2-1.8v-6.4c-10 2.2-12-4.8-12-4.8-1.6-4.2-4-5.3-4-5.3-3.3-2.2.2-2.2.2-2.2 3.6.3 5.5 3.7 5.5 3.7 3.2 5.5 8.5 3.9 10.6 3 0.3-2.3 1.3-3.9 2.3-4.8-8-0.9-16.4-4-16.4-17.8 0-3.9 1.4-7.1 3.7-9.6-0.4-0.9-1.6-4.6 0.3-9.5 0 0 3-1 9.9 3.7a34.4 34.4 0 0118 0c6.9-4.7 9.9-3.7 9.9-3.7 1.9 4.9.7 8.6.4 9.5 2.3 2.5 3.7 5.7 3.7 9.6 0 13.8-8.4 16.9-16.5 17.8 1.3 1.1 2.5 3.3 2.5 6.7v9.9c0 1 .1 2.1 2 1.8A36 36 0 0064 28z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Jupyter Notebook
  if (n.includes("jupyter")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#767677" strokeWidth="8" fill="none" transform="rotate(-25 64 64)" />
        <circle cx="64" cy="64" r="26" fill="#F37626" />
        <circle cx="34" cy="38" r="8" fill="#767677" />
        <circle cx="94" cy="90" r="8" fill="#767677" />
      </svg>
    );
  }

  // Jira (Atlassian Jira)
  if (n === "jira") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 20a24 24 0 00-24 24v12a24 24 0 0024 24h12V20H64z" fill="#0052CC" />
        <path d="M64 56a24 24 0 00-24 24v12a24 24 0 0024 24h12V56H64z" fill="#2684FF" />
        <path d="M92 56a24 24 0 00-24-24H56v64h12a24 24 0 0024-24v-16z" fill="#2684FF" opacity="0.6" />
      </svg>
    );
  }

  // Atlassian
  if (n.includes("atlassian")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M52 106c-20-9-26-34-26-60 0-4 1-9 3-13 6 22 20 42 41 53l-18 20z" fill="#0052CC" />
        <path d="M76 22c20 9 26 34 26 60 0 4-1 9-3 13-6-22-20-42-41-53l18-20z" fill="#2684FF" />
      </svg>
    );
  }

  // C++
  if (n === "c++" || n.includes("cpp")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 6 114 35 114 93 64 122 14 93 14 35" fill="#00599C" />
        <polygon points="64 14 107 39 107 89 64 114 21 89 21 39" fill="#004482" />
        <path d="M48 42c-12 0-20 9-20 22s8 22 20 22c8 0 14-4 17-10l-9-5c-2 4-5 6-8 6-7 0-11-5-11-13s4-13 11-13c3 0 6 2 8 6l9-5c-3-6-9-10-17-10z" fill="#fff" />
        <path d="M68 60h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4zM88 60h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4z" fill="#659AD2" />
      </svg>
    );
  }

  // C#
  if (n === "c#" || n.includes("csharp")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 6 114 35 114 93 64 122 14 93 14 35" fill="#239120" />
        <polygon points="64 14 107 39 107 89 64 114 21 89 21 39" fill="#1B7A18" />
        <path d="M48 42c-12 0-20 9-20 22s8 22 20 22c8 0 14-4 17-10l-9-5c-2 4-5 6-8 6-7 0-11-5-11-13s4-13 11-13c3 0 6 2 8 6l9-5c-3-6-9-10-17-10z" fill="#fff" />
        <path d="M74 54h14v4h-14v12h14v4h-14v8h-4v-8h-8v8h-4v-8h-6v-4h6v-12h-6v-4h6v-8h4v8h8v-8h4v8zm-4 4h-8v12h8v-12z" fill="#fff" />
      </svg>
    );
  }

  // C (plain)
  if (n === "c") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 6 114 35 114 93 64 122 14 93 14 35" fill="#A8B9CC" />
        <polygon points="64 14 107 39 107 89 64 114 21 89 21 39" fill="#283593" />
        <path d="M68 38c-15 0-26 11-26 26s11 26 26 26c11 0 19-6 23-14l-11-6c-2 5-6 8-12 8-8 0-14-6-14-14s6-14 14-14c6 0 10 3 12 8l11-6c-4-8-12-14-23-14z" fill="#fff" />
      </svg>
    );
  }

  // Java
  if (n === "java") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M46 98c18 4 36 4 54-2-5 3-17 6-27 6-12 0-21-2-27-4z" fill="#EA2D2E" />
        <path d="M38 88c24 6 52 6 74-2-9 4-25 7-38 7-18 0-29-3-36-5z" fill="#EA2D2E" />
        <path d="M74 62c6 7 4 13-10 22 18-4 28-12 18-22-3-4-5-4-8 0z" fill="#5382A1" />
        <path d="M52 38c-4 12 2 18 16 26-12-6-14-14-6-26h-10z" fill="#5382A1" />
        <path d="M84 76c12-3 18-8 18-14 0-4-3-8-8-8 2 2 3 4 1 6-4 4-11 5-18 6 3 3 5 6 7 10z" fill="#007396" />
        <path d="M32 108c32 8 68 8 96-2-32 5-66 5-96 2z" fill="#EA2D2E" />
      </svg>
    );
  }

  // Go / Golang
  if (n === "go" || n === "golang") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M12 64c0-28 22-50 50-50 20 0 38 12 46 30l-18 8c-6-13-16-20-28-20-18 0-32 14-32 32s14 32 32 32c14 0 24-8 28-20H58v-18h48v36c-10 18-26 28-44 28-28 0-50-22-50-50z" fill="#00ADD8" />
        <circle cx="106" cy="36" r="6" fill="#00ADD8" />
      </svg>
    );
  }

  // Dart
  if (n === "dart") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12L24 52l16 48 64-12 12-48L64 12z" fill="#0175C2" />
        <path d="M24 52l40 40 40-40L64 12 24 52z" fill="#02569B" opacity="0.3" />
        <path d="M24 52l16 48 48 16 28-28-40-40L24 52z" fill="#00B4AB" />
        <path d="M40 100l48 16 28-28-16-16-60 28z" fill="#29B6F6" />
      </svg>
    );
  }

  // Flutter
  if (n === "flutter") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M78 12L24 66l18 18 72-72H78z" fill="#42A5F5" />
        <path d="M78 72L50 100l18 18 46-46H78z" fill="#0D47A1" />
        <path d="M50 100l22-22 24 24-16 16L50 100z" fill="#42A5F5" />
        <path d="M72 78l12-12 18 18-12 12-18-18z" fill="#01579B" />
      </svg>
    );
  }

  // HTML5
  if (n === "html5" || n === "html") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M19 12l9 100 36 10 36-10 9-100H19z" fill="#E44D26" />
        <path d="M64 21v91l28-8 7-83H64z" fill="#F16529" />
        <path d="M64 42H44l2 18h18v-18zm0 30H48l2 20 14 4v-24z" fill="#EBEBEB" />
        <path d="M64 42h20l-2 18H64v-18zm0 30h16l-2 20-14 4v-24z" fill="#fff" />
      </svg>
    );
  }

  // CSS3
  if (n === "css3" || n === "css") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M19 12l9 100 36 10 36-10 9-100H19z" fill="#1572B6" />
        <path d="M64 21v91l28-8 7-83H64z" fill="#33A9DC" />
        <path d="M64 42H44l2 18h18v-18zm0 30H48l2 20 14 4v-24z" fill="#EBEBEB" />
        <path d="M64 42h20l-2 18H64v-18zm0 30h16l-2 20-14 4v-24z" fill="#fff" />
      </svg>
    );
  }

  // Bootstrap
  if (n === "bootstrap") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="14" y="14" width="100" height="100" rx="22" fill="#7952B3" />
        <path d="M46 38h20c10 0 16 5 16 12 0 5-3 9-8 11 7 2 10 7 10 13 0 8-7 14-18 14H46V38zm12 18h8c5 0 8-2 8-6s-3-6-8-6h-8v12zm0 20h9c5 0 9-2 9-7s-4-7-9-7h-9v14z" fill="#fff" />
      </svg>
    );
  }

  // Express
  if (n.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="14" y="14" width="100" height="100" rx="16" fill="#000" />
        <text x="64" y="78" fill="#fff" fontSize="46" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">ex</text>
      </svg>
    );
  }

  // TensorFlow
  if (n.includes("tensor")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l44 26v48L64 64V12z" fill="#FF6F00" />
        <path d="M64 12L20 38v48l44-22V12z" fill="#FFA800" />
        <path d="M64 64l44 22-44 26-44-26 44-22z" fill="#FF8F00" />
        <path d="M64 64v48l44-24V40L64 64z" fill="#E65100" opacity="0.3" />
      </svg>
    );
  }

  // Keras
  if (n === "keras") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="14" y="14" width="100" height="100" rx="16" fill="#D00000" />
        <path d="M42 34v60h14V68l22 26h18L68 62l26-28H76L56 56V34H42z" fill="#fff" />
      </svg>
    );
  }

  // PyTorch
  if (n.includes("torch")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 18c-24 0-44 20-44 44 0 18 11 34 27 40l-3-12c-10-5-16-16-16-28 0-18 16-34 36-34s34 16 34 34c0 12-6 23-16 28l-3 12c16-6 27-22 27-40 0-24-20-44-42-44z" fill="#EE4C2C" />
        <circle cx="82" cy="38" r="6" fill="#EE4C2C" />
      </svg>
    );
  }

  // OpenCV
  if (n.includes("opencv")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="40" r="24" stroke="#EA212D" strokeWidth="12" fill="none" />
        <circle cx="44" cy="84" r="24" stroke="#5C9A31" strokeWidth="12" fill="none" />
        <circle cx="84" cy="84" r="24" stroke="#255799" strokeWidth="12" fill="none" />
      </svg>
    );
  }

  // MongoDB
  if (n.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12c-2 0-24 24-24 54 0 24 16 40 24 50 8-10 24-26 24-50 0-30-22-54-24-54z" fill="#47A248" />
        <path d="M64 14c-1 4-12 28-12 50 0 18 8 32 12 40V14z" fill="#499D4A" />
        <path d="M64 104v14c2-1 4-3 5-5l-5-9z" fill="#3FA037" />
      </svg>
    );
  }

  // Firebase
  if (n.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M26 94l18-72 16 32-34 40z" fill="#FFA000" />
        <path d="M78 40L60 14 26 94l52-54z" fill="#F57C00" />
        <path d="M102 94L86 32 26 94l38 22 38-22z" fill="#FFCA28" />
      </svg>
    );
  }

  // Google Cloud / GCP
  if (n.includes("google cloud") || n === "gcp") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M88 52c-2-14-14-24-28-24-11 0-21 6-25 16-2 0-3-.3-5-.3-14 0-26 11-26 25 0 2 .2 4 .6 6H92c10 0 18-8 18-18 0-9-7-17-16-17z" fill="#4285F4" />
        <path d="M64 78l18 18 18-18H64z" fill="#34A853" />
        <path d="M46 78l18 18V60L46 78z" fill="#FBBC05" />
        <path d="M28 78l18 18 18-18H28z" fill="#EA4335" />
      </svg>
    );
  }

  // Kubernetes
  if (n.includes("kubenetes") || n === "k8s" || n.includes("kubernetes")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 12 114 41 114 99 64 128 14 99 14 41" fill="#326CE5" />
        <circle cx="64" cy="70" r="22" stroke="#fff" strokeWidth="8" fill="none" />
        <path d="M64 48v44M42 70h44M48 54l32 32M48 86l32-32" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // Vercel
  if (n === "vercel") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="14" y="14" width="100" height="100" rx="22" fill="#000" />
        <polygon points="64 30 102 96 26 96" fill="#fff" />
      </svg>
    );
  }

  // Postman
  if (n === "postman") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="52" fill="#FF6C37" />
        <path d="M46 54c0-6 5-10 10-10s10 4 10 10-5 10-10 10-10-4-10-10zM34 86l44-32-12-6-32 38z" fill="#fff" />
      </svg>
    );
  }

  // GitLab
  if (n.includes("gitlab")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 116l28-86H36l28 86z" fill="#E24329" />
        <path d="M64 116L36 30 14 74l50 42z" fill="#FCA326" />
        <path d="M14 74L36 30 22 14 14 74z" fill="#E24329" />
        <path d="M64 116l28-86 22 44-50 42z" fill="#FCA326" />
        <path d="M114 74L92 30l14-16 8 60z" fill="#E24329" />
      </svg>
    );
  }

  // Slack
  if (n === "slack") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="14" y="14" width="100" height="100" rx="22" fill="#fff" />
        <circle cx="44" cy="44" r="8" fill="#ECB22E" />
        <rect x="36" y="56" width="16" height="28" rx="8" fill="#36C5F0" />
        <rect x="56" y="36" width="28" height="16" rx="8" fill="#2EB67D" />
        <circle cx="84" cy="84" r="8" fill="#E01E5A" />
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
        <ellipse cx="64" cy="28" rx="44" ry="16" fill="#00758F" />
        <path d="M20 28v24c0 9 20 16 44 16s44-7 44-16V28" stroke="#00758F" strokeWidth="12" fill="none" />
        <path d="M20 56v24c0 9 20 16 44 16s44-7 44-16V56" stroke="#00758F" strokeWidth="12" fill="none" />
        <path d="M20 84v16c0 9 20 16 44 16s44-7 44-16V84" stroke="#00758F" strokeWidth="12" fill="none" />
      </svg>
    );
  }

  // Google Looker / Looker Studio
  if (n.includes("looker")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="42" cy="42" r="18" fill="#4285F4" />
        <circle cx="86" cy="42" r="18" fill="#EA4335" />
        <circle cx="42" cy="86" r="18" fill="#FBBC04" />
        <circle cx="86" cy="86" r="18" fill="#34A853" />
        <path d="M42 42h44v44H42z" stroke="#4285F4" strokeWidth="8" fill="none" />
      </svg>
    );
  }

  // Tableau
  if (n.includes("tableau")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16v96M16 64h96M40 40l48 48M40 88l48-48" stroke="#E97627" strokeWidth="12" strokeLinecap="round" />
        <circle cx="64" cy="64" r="12" fill="#2A5788" />
      </svg>
    );
  }

  // Google Colab
  if (n.includes("colab")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M38 40a24 24 0 000 48 24 24 0 0026-24A24 24 0 0038 40zm52 0a24 24 0 00-26 24 24 24 0 0026 24 24 24 0 000-48z" stroke="#F9AB00" strokeWidth="12" fill="none" />
      </svg>
    );
  }

  // React / React Native
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" />
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="8" fill="#61DAFB" />
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M36 50h32v12H58v42H46V62H36V50zm36 28c3-2 8-4 14-4 8 0 13 4 13 11v1c-2-1-6-2-10-2-12 0-19 6-19 14 0 8 6 13 15 13 6 0 11-3 14-7v6h11V83c0-14-9-21-23-21-7 0-13 2-17 5l2 11z" fill="#fff" />
      </svg>
    );
  }

  // JavaScript
  if (n.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M42 98c4 3 8 4 13 4 8 0 13-5 13-14V46H56v42c0 3-1 5-4 5s-5-2-7-4l-3 9zm36-2c5 4 12 6 20 6 14 0 23-8 23-20 0-11-7-16-17-21-7-3-11-6-11-10s4-7 10-7c5 0 9 2 13 5l4-9c-5-3-10-5-17-5-13 0-21 8-21 18 0 10 7 15 17 20 8 4 12 7 12 12s-4 8-11 8c-6 0-12-3-16-7l-5 9z" fill="#000" />
      </svg>
    );
  }

  // PHP
  if (n === "php") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="58" ry="34" fill="#777BB4" />
        <path d="M38 52h14c6 0 10 3 10 8s-4 8-10 8H42l-4 16H28l10-32zm8 10l-2 8h4c2 0 4-1 4-4s-2-4-4-4h-2zm32-10h14c6 0 10 3 10 8s-4 8-10 8H82l-4 16H68l10-32zm8 10l-2 8h4c2 0 4-1 4-4s-2-4-4-4h-2zm-30 0h12l-5 18h-12l5-18z" fill="#fff" />
      </svg>
    );
  }

  // Laravel
  if (n.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16L18 42v44l46 26 46-26V42L64 16z" fill="#FF2D20" />
        <path d="M64 16l46 26-46 26-46-26 46-26z" fill="#E02518" opacity="0.4" />
        <path d="M64 68l46-26v44l-46 26V68z" fill="#B31B10" opacity="0.3" />
        <path d="M38 52l26 15 26-15" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // FastAPI
  if (n.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="56" fill="#009688" />
        <path d="M68 24L38 72h24l-4 32 32-48H66l4-32z" fill="#fff" />
      </svg>
    );
  }

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="56" fill="#000" />
        <path d="M46 42h10v44H46V42zm36 0h10v44H82V42z" fill="#fff" />
        <path d="M54 42l34 44h-8L46 42h8z" fill="url(#next-grad)" />
        <defs>
          <linearGradient id="next-grad" x1="50" y1="42" x2="88" y2="86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Vue.js
  if (n.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 116 116 26 94 26 64 78 34 26 12 26" fill="#42B883" />
        <polygon points="64 78 94 26 76 26 64 47 52 26 34 26" fill="#35495E" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M64 44c-14 0-23 7-27 21 5-7 11-10 18-9 4 1 7 4 11 8 6 6 13 14 27 14 14 0 23-7 27-21-5 7-11 10-18 9-4-1-7-4-11-8-6-6-13-14-27-14zM35 68c-14 0-23 7-27 21 5-7 11-10 18-9 4 1 7 4 11 8 6 6 13 14 27 14 14 0 23-7 27-21-5 7-11 10-18 9-4-1-7-4-11-8-6-6-13-14-27-14z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <polygon points="64 14 112 42 112 98 64 126 16 98 16 42" fill="#339933" />
        <path d="M64 42v44M42 54l22 14 22-14" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Docker
  if (n === "docker") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M120 64c-3-2-8-3-12-1 1-4 0-8-3-11l-5-5-3 3c-4 4-5 9-3 14H68V52h12V40H68V28H56v24H44V40H32v12H20v12H6c-2 6 0 14 4 20 12 18 32 28 54 28 34 0 62-22 66-54 0-1 0-3-.1-4h-9.9z" fill="#2496ED" />
        <rect x="32" y="52" width="8" height="8" fill="#fff" />
        <rect x="44" y="52" width="8" height="8" fill="#fff" />
        <rect x="56" y="52" width="8" height="8" fill="#fff" />
        <rect x="44" y="40" width="8" height="8" fill="#fff" />
        <rect x="56" y="40" width="8" height="8" fill="#fff" />
        <rect x="56" y="28" width="8" height="8" fill="#fff" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="54" fill="#336791" />
        <path d="M64 24c-16 0-28 12-28 28 0 12 7 22 17 26v22l11-8v-14c12-1 22-11 22-24 0-16-10-30-22-30z" fill="#fff" />
        <circle cx="54" cy="46" r="4" fill="#336791" />
      </svg>
    );
  }

  // MySQL
  if (n.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M110 68c-14-16-36-24-60-20 6-6 14-10 22-12-18-2-36 6-48 20 10 4 20 6 30 6-12 8-20 20-22 34 16-6 32-16 44-28 12 12 24 18 34 0z" fill="#00758F" />
        <circle cx="44" cy="54" r="3" fill="#F29111" />
      </svg>
    );
  }

  // Supabase
  if (n.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M68 12L24 74h36l-8 42 44-62H60l8-42z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Redis
  if (n === "redis") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 16l48 24-48 24-48-24 48-24z" fill="#D82C20" />
        <path d="M16 40l48 24v48L16 88V40z" fill="#A41E11" />
        <path d="M64 64l48-24v48L64 112V64z" fill="#C6281E" />
      </svg>
    );
  }

  // AWS
  if (n.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#232F3E" />
        <path d="M38 78c18 10 38 10 52 0-3 3-14 8-26 8s-21-4-26-8z" fill="#FF9900" />
        <path d="M86 74l6 5-8 1 2-6z" fill="#FF9900" />
        <text x="64" y="62" fill="#fff" fontSize="28" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">AWS</text>
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
        <rect x="34" y="76" width="30" height="30" rx="15" fill="#0ACF83" />
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

  // SQLite
  if (n === "sqlite") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M30 14h50c8 0 14 6 14 14v72c0 8-6 14-14 14H30c-8 0-14-6-14-14V28c0-8 6-14 14-14z" fill="#0F80CC" />
        <path d="M30 14h50c8 0 14 6 14 14v8H16v-8c0-8 6-14 14-14z" fill="#0B6BAA" />
        <path d="M94 36c0 40-18 70-42 78h28c8 0 14-6 14-14V36z" fill="#003B57" opacity="0.55" />
        <path d="M40 58h30M40 74h24M40 90h30" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // ChromaDB
  if (n.includes("chroma")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="46" cy="50" r="30" fill="#FFDE2D" />
        <circle cx="82" cy="50" r="30" fill="#FF6446" opacity="0.92" />
        <circle cx="64" cy="82" r="30" fill="#327EFF" opacity="0.92" />
      </svg>
    );
  }

  // GitHub Actions
  if (n.includes("github actions")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect x="8" y="30" width="112" height="68" rx="34" fill="#2088FF" />
        <circle cx="38" cy="64" r="9" fill="#fff" />
        <circle cx="90" cy="64" r="9" fill="#fff" opacity="0.55" />
        <path d="M47 64h34" stroke="#fff" strokeWidth="5" />
        <path d="M60 52l16 12-16 12z" fill="#fff" />
      </svg>
    );
  }

  // IBM Granite
  if (n.includes("granite") || n === "ibm") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#0F62FE" />
        <path d="M24 40h80M24 52h80M24 76h80M24 88h80" stroke="#fff" strokeWidth="6" />
        <path d="M40 40v48M60 40v48M80 40v48M96 40v48" stroke="#fff" strokeWidth="6" opacity="0.35" />
      </svg>
    );
  }

  // Flask
  if (n === "flask") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M50 14h28M56 14v36L26 100c-5 9 1 16 10 16h56c9 0 15-7 10-16L72 50V14" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 84h48l12 20c3 6 0 8-6 8H34c-6 0-9-2-6-8l12-20z" fill="currentColor" opacity="0.8" />
      </svg>
    );
  }

  // REST API
  if (n === "rest api" || n === "rest") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#0EA5E9" />
        <path d="M46 34c-10 0-12 6-12 14v6c0 6-4 10-10 10 6 0 10 4 10 10v6c0 8 2 14 12 14M82 34c10 0 12 6 12 14v6c0 6 4 10 10 10-6 0-10 4-10 10v6c0 8-2 14-12 14" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="64" cy="64" r="5" fill="#fff" />
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
