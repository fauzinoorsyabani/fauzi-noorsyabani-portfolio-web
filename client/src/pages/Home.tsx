/**
 * Signal Ledger home page: an asymmetric research-dossier portfolio using
 * warm paper, midnight authority, cobalt signals, and editorial metadata rails.
 */
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import {
  assetUrls,
  awards,
  certifications,
  editableItems,
  experience,
  facts,
  featuredProjects,
  focusAreas,
  links,
  otherProjects,
  person,
  skillGroups,
} from "@/data/portfolio";

const navItems = [
  ["About", "about"],
  ["Tech Stack", "stack"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Awards", "awards"],
  ["Contact", "contact"],
] as const;

type FormFields = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

function SectionHeading({ index, kicker, title, copy, dark = false }: { index: string; kicker: string; title: string; copy?: string; dark?: boolean }) {
  return (
    <div className="grid gap-6 border-t border-current/15 pt-5 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-10">
      <div className={dark ? "mono-type text-xs font-medium tracking-[0.15em] text-blue-200" : "mono-type text-xs font-medium tracking-[0.15em] text-primary"}>
        <div className="flex items-center gap-2"><span>{index}</span><span className={`h-px w-5 ${dark ? "bg-blue-200/70" : "bg-primary"}`} /></div>
        <div className={`mt-5 flex h-9 w-9 items-center justify-center border ${dark ? "border-blue-200/30 bg-white/5" : "border-blue-200 bg-white"}`}><img src={assetUrls.logo} alt="" aria-hidden="true" className="h-7 w-7" /></div>
        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      </div>
      <div>
        <p className={dark ? "section-kicker text-blue-200" : "section-kicker"}>{kicker}</p>
        <h2 className={dark ? "display-type mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl" : "display-type mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.065em] text-[#101c3d] sm:text-5xl lg:text-6xl"}>
          {title}
        </h2>
        {copy ? <p className={dark ? "mt-5 max-w-2xl text-base leading-8 text-slate-300" : "mt-5 max-w-2xl text-base leading-8 text-slate-600"}>{copy}</p> : null}
      </div>
    </div>
  );
}

function PendingAction({ label, onPending, className = "" }: { label: string; onPending: (message: string) => void; className?: string }) {
  return (
    <button type="button" onClick={() => onPending(`${label} is ready to link when the URL is added in client/src/data/portfolio.ts.`)} className={className}>
      {label}<span className="ml-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] opacity-60">pending</span>
    </button>
  );
}

function ProjectEvidence({ index, category }: { index: number; category: string }) {
  const signalHeights = [36, 54, 30, 65, 48, 76, 60, 92];
  return (
    <figure className="relative h-48 overflow-hidden border-b border-slate-200 bg-[#f5f7fb] data-grid" aria-label={`Analytical evidence panel for ${category}`}>
      <div className="absolute left-5 top-4 flex items-center gap-2 mono-type text-[0.57rem] font-semibold uppercase tracking-[0.12em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{category} / evidence 0{index + 1}</div>
      <div className="absolute bottom-5 left-6 right-6 flex h-24 items-end gap-2 border-b border-slate-300/80" aria-hidden="true">
        {signalHeights.map((height, barIndex) => <span key={barIndex} style={{ height: `${height}%` }} className={`w-full ${barIndex === 5 ? "bg-primary" : "bg-[#182650]/70"}`} />)}
      </div>
      <span className="absolute bottom-[2.6rem] left-7 right-7 h-px origin-left rotate-[-18deg] bg-primary/80" aria-hidden="true" />
      <span className="absolute bottom-[5.2rem] right-[24%] h-2.5 w-2.5 rounded-full border-2 border-[#f5f7fb] bg-primary" aria-hidden="true" />
    </figure>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [form, setForm] = useState<FormFields>({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const heroProjects = useMemo(() => featuredProjects.filter((project) => project.featured), []);

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0.08, 0.2, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const notifyPending = (message: string) => {
    setAnnouncement(message);
    window.setTimeout(() => setAnnouncement(""), 5200);
  };
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: FormErrors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
    if (!form.subject.trim()) errors.subject = "Please add a subject.";
    if (!form.message.trim()) errors.message = "Please add a message.";
    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setFormState("success");
    setAnnouncement("Your email client will open with the message prepared for Fauzi.");
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf9f5] text-[#101c3d]">
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-primary px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <p aria-live="polite" className="sr-only">{announcement}</p>

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-200/80 bg-[#faf9f5]/94 shadow-[0_12px_36px_-25px_rgba(12,27,62,0.42)] backdrop-blur-lg" : "bg-[#0b1735]/92 backdrop-blur-md"}`}>
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => scrollTo("top")} type="button" aria-label="Go to the top of Fauzi Noorsyabani’s portfolio" className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <span className={`relative flex h-10 w-10 items-center justify-center overflow-hidden border ${scrolled ? "border-[#101c3d]/20 bg-white" : "border-white/20 bg-white/5"}`}><img src={assetUrls.logo} alt="" aria-hidden="true" className="h-9 w-9 object-contain transition-transform duration-200 group-hover:-translate-y-0.5" /><i className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" /></span>
            <span className={`mono-type grid text-left text-[0.55rem] font-semibold leading-[1.1] tracking-[0.14em] ${scrolled ? "text-[#101c3d]" : "text-white"}`}>
              <span>FAUZI</span><span className="mt-1 text-primary">NOORSYABANI</span>
            </span>
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} type="button" aria-current={activeSection === id ? "page" : undefined} className={`rounded-md px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.11em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeSection === id ? "text-primary" : scrolled ? "text-slate-500 hover:text-[#101c3d]" : "text-slate-300 hover:text-white"}`}>
                {label}
              </button>
            ))}
          </nav>

          <button onClick={() => scrollTo("contact")} type="button" className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-[0_8px_20px_-10px_rgba(36,107,253,0.85)] transition hover:bg-[#175bdd] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex">
            Contact <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-navigation" type="button" className={`rounded-md p-2.5 lg:hidden ${scrolled ? "text-[#101c3d]" : "text-white"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}>
            <span className="sr-only">{menuOpen ? "Close" : "Open"} navigation menu</span>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div id="mobile-navigation" className={`overflow-hidden border-t border-white/10 bg-[#0b1735] transition-[max-height,opacity] duration-300 lg:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav aria-label="Mobile" className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
            <div className="grid gap-1">
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} type="button" className={`flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold ${activeSection === id ? "bg-white/10 text-blue-200" : "text-white"}`}>
                  {label}<ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="relative isolate overflow-hidden bg-[#0b1735] pt-[72px] text-white">
          <div className="absolute inset-0 data-grid opacity-30" aria-hidden="true" />
          <div className="absolute -right-36 top-28 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[790px] max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-20 lg:px-12 lg:py-24 xl:min-h-[820px]">
            <div className="flex flex-col justify-center pt-8 lg:pt-0">
              <div className="flex w-fit items-center gap-2 border border-blue-300/25 bg-blue-400/10 px-3 py-1.5 mono-type text-[0.62rem] font-medium tracking-[0.14em] text-blue-100">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" /> OPEN TO WORK
              </div>
              <p className="mt-9 display-type text-xl font-medium tracking-[-0.035em] text-slate-300 sm:text-2xl">Hello, I’m</p>
              <h1 className="display-type mt-1 max-w-3xl text-[3.8rem] font-semibold leading-[0.88] tracking-[-0.085em] sm:text-8xl xl:text-[6.1rem]">Fauzi<br /><span className="text-blue-300">Noorsyabani.</span></h1>
              <div className="mt-8 flex items-center gap-3 text-blue-100">
                <span className="h-px w-10 bg-blue-300" />
                <p className="mono-type text-[0.66rem] font-medium uppercase tracking-[0.16em]">Data Scientist &amp; Software Engineer</p>
              </div>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{person.headline}</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-300"><Sparkles className="h-4 w-4 text-blue-300" /> {person.education}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                {links.resume ? (
                  <a href={links.resume} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#175bdd] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1735]">View Resume <Download className="h-4 w-4" /></a>
                ) : (
                  <PendingAction label="View Resume" onPending={notifyPending} className="rounded-md bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#175bdd] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1735]" />
                )}
                <button onClick={() => scrollTo("projects")} type="button" className="inline-flex items-center gap-2 rounded-md border border-slate-500/70 px-5 py-3.5 text-sm font-bold text-white transition hover:border-blue-300 hover:bg-white/5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1735]">Explore My Work <ArrowDown className="h-4 w-4" /></button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/15 py-4">
                {[['900+', 'capstone hours'], ['97', 'programs analyzed'], ['1,000+', 'students reached']].map(([value, label], index) => <div key={label} className={`px-3 first:pl-0 ${index !== 2 ? "border-r border-white/15" : ""}`}><p className="display-type text-xl font-semibold tracking-[-0.05em] text-white">{value}</p><p className="mt-1 mono-type text-[0.55rem] leading-4 uppercase tracking-[0.09em] text-slate-400">{label}</p></div>)}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                {links.linkedin ? <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"><Linkedin className="h-4 w-4 text-blue-300" /> LinkedIn</a> : null}
                {links.github ? <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"><Github className="h-4 w-4 text-blue-300" /> GitHub</a> : <PendingAction label="GitHub" onPending={notifyPending} className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-white" />}
                <a href={links.email} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"><Mail className="h-4 w-4 text-blue-300" /> Email</a>
                <a href={links.phone} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"><Phone className="h-4 w-4 text-blue-300" /> Phone</a>
              </div>
            </div>

            <div className="relative flex items-center justify-center pb-5 lg:pb-0">
              <div className="absolute right-0 top-8 h-[88%] w-[92%] rounded-[2rem] border border-white/10 bg-white/[0.035]" aria-hidden="true" />
              <img src={assetUrls.profilePhoto} alt="Portrait of Fauzi Noorsyabani" className="relative z-10 h-[440px] w-full max-w-[570px] border border-white/10 object-cover object-[50%_28%] shadow-2xl shadow-black/30 sm:h-[530px]" />
              <div className="absolute bottom-0 left-0 z-20 w-[244px] border border-white/10 bg-[#10224b]/95 p-4 shadow-2xl backdrop-blur-sm sm:-left-4 sm:bottom-5">
                <div className="flex items-center gap-2"><img src={assetUrls.logo} alt="" aria-hidden="true" className="h-8 w-8" /><p className="mono-type text-[0.58rem] uppercase tracking-[0.14em] text-blue-200">FN / Evidence field</p></div>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-3 mono-type text-[0.58rem] leading-5 tracking-[0.08em] text-slate-300"><p><span className="mr-2 text-blue-300">F-01</span>DATA PRODUCTS</p><p><span className="mr-2 text-blue-300">F-02</span>AI SYSTEMS</p><p><span className="mr-2 text-blue-300">F-03</span>DELIVERY</p></div>
              </div>
              <div className="absolute right-2 top-0 z-20 border border-blue-200/20 bg-[#10224b]/90 px-3 py-2 mono-type text-[0.6rem] uppercase tracking-[0.13em] text-blue-100 backdrop-blur-sm">Research artifact / 001</div>
              <div className="absolute -right-3 bottom-20 z-20 hidden border border-blue-200/25 bg-[#0d1e46]/95 p-3 text-center sm:block">
                <span className="mono-type text-[0.58rem] leading-4 tracking-[0.1em] text-blue-100">FROM<br />SIGNAL<br />TO USE</span>
              </div>
            </div>
          </div>
          <div className="technical-rule relative z-10 h-px opacity-70" />
        </section>

        <section id="about" className="paper-grain scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="01" kicker="Professional position" title="Building useful systems from complex signals." />
            <div className="mt-14 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
              <div className="relative rounded-[1.4rem] border border-blue-100 bg-[#f1f5ff] p-7 signal-shadow sm:p-9">
                <div className="absolute right-5 top-5 mono-type text-[0.58rem] font-medium tracking-[0.13em] text-blue-400">PORTRAIT / 01</div>
                <img src={assetUrls.profilePhoto} alt="Portrait of Fauzi Noorsyabani" loading="lazy" className="aspect-[4/5] w-full rounded-xl border border-blue-200/80 object-cover object-[50%_20%]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="display-type max-w-2xl text-2xl font-medium leading-[1.23] tracking-[-0.045em] text-[#182650] sm:text-3xl">{person.about}</p>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">{person.shortBio}</p>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {focusAreas.map((focus) => {
                    const Icon = focus.label === "Build" ? Code2 : focus.label === "Analyze" ? BarChart3 : UsersRound;
                    return <div key={focus.label} className="group rounded-xl border border-slate-200 bg-white/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                      <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-primary" /><span className="mono-type text-[0.62rem] text-slate-400">{focus.index}</span></div>
                      <h3 className="display-type mt-7 text-xl font-semibold tracking-[-0.04em] text-[#101c3d]">{focus.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{focus.detail}</p>
                    </div>;
                  })}
                </div>
              </div>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map(([term, detail]) => <div key={term} className="min-h-28 bg-[#faf9f5] p-5"><dt className="mono-type text-[0.6rem] font-medium uppercase tracking-[0.13em] text-primary">{term}</dt><dd className="mt-3 text-sm font-semibold leading-6 text-[#182650]">{detail}</dd></div>)}
            </dl>
          </div>
        </section>

        <section id="stack" className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="02" kicker="Technical landscape" title="A broad toolkit, ordered around practical delivery." copy="The emphasis is on the tools that carry an idea from data and model through product, deployment, and decision-making." />
            <div className="mt-14 border-y border-slate-300">
              {skillGroups.map((group, index) => <div key={group.title} className={`grid gap-7 py-8 sm:py-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 ${index !== skillGroups.length - 1 ? "border-b border-slate-300" : ""}`}>
                <div className="border-l-2 border-primary pl-4"><p className="mono-type text-[0.62rem] font-semibold tracking-[0.14em] text-primary">{group.code}</p><h3 className="display-type mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#101c3d]">{group.title}</h3></div>
                <div>
                  <div className="flex flex-wrap gap-x-5 gap-y-3">{group.featured.map((skill) => <span key={skill} className="border-b-2 border-primary pb-1 text-sm font-bold text-[#182650]">{skill}</span>)}</div>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-500">{group.skills.map((skill) => <span key={skill} className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-slate-300" />{skill}</span>)}</div>
                </div>
              </div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 bg-[#f1f4fb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="03" kicker="Selected work" title="Projects built to clarify, predict, and improve." copy="A selected index of data work, applied AI, and product engineering. Project links are deliberately surfaced only where a final URL has been provided." />
            {heroProjects.map((project) => <article key={project.title} className="mt-14 overflow-hidden border-y border-slate-300 bg-white lg:grid lg:grid-cols-[1.02fr_.98fr]">
              <img src={project.art} alt="Abstract visualization of forecasting trends and connected data points" className="h-64 w-full object-cover lg:order-2 lg:h-full" />
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3"><span className="mono-type text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-primary">{project.category}</span><span className="h-1 w-1 rounded-full bg-slate-300" /><span className="mono-type text-[0.62rem] uppercase tracking-[0.12em] text-slate-500">{project.date}</span></div>
                <h3 className="display-type mt-5 max-w-md text-4xl font-semibold leading-[.98] tracking-[-0.07em] text-[#101c3d] sm:text-5xl">{project.title}</h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">{project.description}</p>
                {project.result ? <div className="mt-6 border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-[#1b367e]">{project.result}</div> : null}
                <div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-slate-200 px-3 py-1.5 mono-type text-[0.62rem] tracking-wide text-slate-600">{tech}</span>)}</div>
                <div className="mt-9 flex flex-wrap gap-3">
                  {project.links?.caseStudy ? <a href={project.links.caseStudy} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">View Case Study <ArrowUpRight className="h-4 w-4" /></a> : <PendingAction label="Case Study" onPending={notifyPending} className="text-sm font-bold text-primary hover:underline" />}
                  {project.links?.demo ? <a href={project.links.demo} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">Live Demo <ArrowUpRight className="h-4 w-4" /></a> : null}
                </div>
              </div>
            </article>)}

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {featuredProjects.filter((project) => !project.featured).map((project, index) => <article key={project.title} className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <ProjectEvidence index={index} category={project.category} />
                <div className="p-6 sm:p-7"><p className="mono-type text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-primary">{project.category}</p><h3 className="display-type mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#101c3d]">{project.title}</h3><p className="mt-2 mono-type text-[0.61rem] uppercase tracking-[0.1em] text-slate-500">{project.date}</p><p className="mt-5 text-sm leading-7 text-slate-600">{project.description}</p>{project.result ? <p className="mt-4 text-sm font-semibold leading-6 text-[#254493]">{project.result}</p> : null}<div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 mono-type text-[0.58rem] text-slate-600">{tech}</span>)}</div></div>
              </article>)}
            </div>

            <div className="mt-16 border-t border-slate-300 pt-7"><div className="flex items-end justify-between gap-5"><div><p className="section-kicker">Other projects</p><h3 className="display-type mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#101c3d]">A compact working index.</h3></div><span className="mono-type hidden text-[0.62rem] uppercase tracking-[0.12em] text-slate-400 sm:block">05 selected entries</span></div>
              <div className="mt-7 border-y border-slate-300">{otherProjects.map((project, index) => <article key={project.title} className={`grid gap-4 py-6 transition hover:bg-white md:grid-cols-[3.4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-7 ${index !== otherProjects.length - 1 ? "border-b border-slate-200" : ""}`}><p className="mono-type text-[0.58rem] font-semibold tracking-[0.12em] text-primary">{String(index + 1).padStart(2, "0")}</p><div><p className="mono-type text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-slate-500">{project.date}</p><h4 className="display-type mt-2 text-xl font-semibold tracking-[-0.045em] text-[#101c3d]">{project.title}</h4><p className="mt-2 mono-type text-[0.57rem] uppercase tracking-[0.08em] text-slate-500">{project.category}</p></div><div><p className="text-sm leading-6 text-slate-600">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.technologies.map((tech) => <span key={tech} className="text-[0.68rem] text-slate-500">{tech}{tech !== project.technologies[project.technologies.length - 1] ? " ·" : ""}</span>)}</div></div></article>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 bg-[#0b1735] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="04" kicker="Experience & leadership" title="A record of applied work and people-first momentum." copy="A developing career shaped by product delivery, data analysis, responsible AI advocacy, and local community work." dark />
            <div className="mt-16 space-y-0 border-l border-white/15 pl-7 sm:pl-10 lg:ml-[7.4rem]">
              {experience.map((item, index) => <article key={`${item.organization}-${item.role}`} className="relative pb-12 last:pb-0"><span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-blue-200/40 bg-[#0b1735] sm:-left-[47px]"><span className="h-1.5 w-1.5 rounded-full bg-blue-300" /></span><div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10"><div><p className="mono-type text-[0.61rem] font-semibold uppercase tracking-[0.14em] text-blue-200">{String(index + 1).padStart(2, "0")} / {item.type}</p><p className="mt-3 mono-type text-[0.61rem] leading-5 tracking-[0.07em] text-slate-400">{item.date}<br />{item.location}</p></div><div className="max-w-2xl"><h3 className="display-type text-2xl font-semibold tracking-[-0.045em] text-white">{item.role}</h3><p className="mt-1 text-base font-semibold text-blue-200">{item.organization}</p><ul className="mt-5 space-y-3">{item.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-300" />{detail}</li>)}</ul>{"note" in item && item.note ? <p className="mt-5 rounded-md border border-amber-300/25 bg-amber-200/10 px-4 py-3 text-xs leading-5 text-amber-100"><strong className="font-semibold">Editorial note:</strong> {item.note}</p> : null}</div></div></article>)}
            </div>
          </div>
        </section>

        <section id="awards" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="05" kicker="Recognition" title="Evidence of analytical excellence and initiative." />
            <div className="mt-14 border-y border-slate-300">
              {awards.map(([placement, title, organization, date], index) => <article key={`${title}-${organization}`} className={`grid gap-5 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_8rem] sm:items-start ${index !== awards.length - 1 ? "border-b border-slate-200" : ""}`}><div className="flex items-center gap-2 sm:block"><span className={`flex h-9 w-9 items-center justify-center border ${index === 0 ? "border-primary bg-primary text-white" : "border-slate-300 text-slate-400"}`}><Award className="h-4 w-4" /></span><p className="mono-type mt-0 text-[0.61rem] font-semibold uppercase tracking-[0.13em] text-primary sm:mt-4">{placement}</p></div><div><h3 className="display-type text-2xl font-semibold leading-tight tracking-[-0.05em] text-[#101c3d]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{organization}</p></div><p className="mono-type text-[0.62rem] font-medium uppercase tracking-[0.1em] text-slate-500 sm:pt-1">{date}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#eff3fb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px] reveal">
            <SectionHeading index="06" kicker="Credentials" title="Certifications that support delivery." copy="Credential destinations are intentionally kept as editable placeholders until verified public URLs are supplied." />
            <div className="mt-14 grid gap-px border-y border-slate-300 bg-slate-300 lg:grid-cols-3">
              {certifications.map((cert, index) => <article key={cert.name} className="flex min-h-[290px] flex-col bg-[#eff3fb] p-7"><div className="flex items-center justify-between"><span className="mono-type text-[0.62rem] font-semibold tracking-[0.13em] text-primary">0{index + 1}</span><BriefcaseBusiness className="h-5 w-5 text-slate-400" /></div><h3 className="display-type mt-7 text-2xl font-semibold leading-tight tracking-[-0.05em] text-[#101c3d]">{cert.name}</h3><p className="mt-2 text-sm font-semibold text-[#182650]">{cert.issuer}</p><p className="mt-4 text-sm leading-7 text-slate-600">{cert.description}</p><div className="mt-auto border-t border-slate-300 pt-5"><p className="mono-type text-[0.6rem] uppercase tracking-[0.1em] text-slate-500">{cert.date}</p>{cert.credential ? <a href={cert.credential} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">View Credential <ExternalLink className="h-3.5 w-3.5" /></a> : <PendingAction label="View Credential" onPending={notifyPending} className="mt-4 text-sm font-bold text-primary hover:underline" />}</div></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 relative overflow-hidden bg-[#0b1735] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute inset-0 data-grid opacity-25" aria-hidden="true" /><div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1320px] reveal">
            <SectionHeading index="07" kicker="Contact & collaboration" title="Let’s Work Together" copy="Have a project in mind or just want to chat? I’m always open to new opportunities and collaborations. Feel free to reach out!" dark />
            <div className="mt-14 grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
              <aside className="space-y-8"><div><p className="mono-type text-[0.61rem] font-semibold uppercase tracking-[0.13em] text-blue-200">Direct channels</p><div className="mt-5 space-y-4"><a href={links.email} className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-300/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"><Mail className="mt-0.5 h-5 w-5 text-blue-300" /><span><span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-slate-400">Email</span><span className="mt-1 block text-sm font-semibold text-white group-hover:text-blue-100">{person.email}</span></span></a><a href={links.phone} className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-300/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"><Phone className="mt-0.5 h-5 w-5 text-blue-300" /><span><span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-slate-400">Phone</span><span className="mt-1 block text-sm font-semibold text-white group-hover:text-blue-100">{person.phone}</span></span></a><div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4"><MapPin className="mt-0.5 h-5 w-5 text-blue-300" /><span><span className="block mono-type text-[0.6rem] uppercase tracking-[0.1em] text-slate-400">Location</span><span className="mt-1 block text-sm font-semibold text-white">{person.location}</span></span></div></div></div>
                <div className="rounded-lg border border-blue-200/15 bg-blue-400/10 p-5"><p className="mono-type text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-blue-200">Preferred starting point</p><p className="mt-3 text-sm leading-7 text-slate-200">Share your context, the outcome you are working toward, and the constraints that matter. A useful first conversation starts with a real problem.</p></div>
              </aside>
              <form onSubmit={handleForm} noValidate className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold text-white">Name<input value={form.name} onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))} aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "name-error" : undefined} className="mt-2 w-full rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="Your name" />{formErrors.name ? <span id="name-error" className="mt-1.5 block text-xs text-amber-200">{formErrors.name}</span> : null}</label><label className="block text-sm font-semibold text-white">Email<input type="email" value={form.email} onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))} aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "email-error" : undefined} className="mt-2 w-full rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="you@example.com" />{formErrors.email ? <span id="email-error" className="mt-1.5 block text-xs text-amber-200">{formErrors.email}</span> : null}</label></div><label className="mt-5 block text-sm font-semibold text-white">Subject<input value={form.subject} onChange={(event) => setForm((value) => ({ ...value, subject: event.target.value }))} aria-invalid={Boolean(formErrors.subject)} aria-describedby={formErrors.subject ? "subject-error" : undefined} className="mt-2 w-full rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="What would you like to discuss?" />{formErrors.subject ? <span id="subject-error" className="mt-1.5 block text-xs text-amber-200">{formErrors.subject}</span> : null}</label><label className="mt-5 block text-sm font-semibold text-white">Message<textarea value={form.message} onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))} aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? "message-error" : undefined} rows={5} className="mt-2 w-full resize-y rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="A little context goes a long way." />{formErrors.message ? <span id="message-error" className="mt-1.5 block text-xs text-amber-200">{formErrors.message}</span> : null}</label><div className="mt-6 flex flex-wrap items-center justify-between gap-4"><p className="max-w-xs text-xs leading-5 text-slate-400">This static portfolio uses a safe mailto fallback. No information is stored on the website.</p><button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#175bdd] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1735]">Start a Conversation <Send className="h-4 w-4" /></button></div>{formState === "success" ? <p className="mt-5 flex items-center gap-2 text-sm text-blue-100"><Check className="h-4 w-4 text-blue-300" />Your message has been prepared in your email client.</p> : null}</form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#08132d] px-5 py-10 text-slate-300 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1320px] gap-9 border-t border-white/10 pt-9 md:grid-cols-[1.2fr_.7fr_.7fr] md:gap-12"><div><div className="flex items-center gap-3"><span className="relative flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5"><img src={assetUrls.logo} alt="" aria-hidden="true" className="h-9 w-9" /><i className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" /></span><span className="mono-type grid text-left text-[0.6rem] font-semibold leading-[1.1] tracking-[0.16em] text-white"><span>FAUZI</span><span className="mt-1 text-blue-300">NOORSYABANI</span></span></div><p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">Building digital experiences with passion and purpose.</p></div><div><p className="mono-type text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-blue-200">Quick links</p><div className="mt-4 grid gap-2">{[["About", "about"], ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="w-fit text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">{label}</button>)}</div></div><div><p className="mono-type text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-blue-200">Connect</p><div className="mt-4 grid gap-2"><a href={links.email} className="w-fit text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">Email</a>{links.linkedin ? <a href={links.linkedin} target="_blank" rel="noreferrer" className="w-fit text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">LinkedIn</a> : null}{links.github ? <a href={links.github} target="_blank" rel="noreferrer" className="w-fit text-sm text-slate-300 transition hover:text-white">GitHub</a> : <PendingAction label="GitHub" onPending={notifyPending} className="w-fit text-left text-sm text-slate-300 transition hover:text-white" />}</div></div></div><div className="mx-auto mt-8 flex max-w-[1320px] flex-col gap-2 border-t border-white/10 pt-5 text-[0.68rem] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Fauzi Noorsyabani. Made in Indonesia.</p><p className="mono-type text-[0.58rem] uppercase tracking-[0.1em]">Signal Ledger / portfolio v1.0</p></div></footer>

      <button onClick={() => scrollTo("top")} type="button" aria-label="Scroll back to top" className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-900/30 transition duration-200 hover:bg-[#175bdd] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}><ArrowUp className="h-5 w-5" /></button>
    </div>
  );
}
