import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  ExternalLink,
  Eye,
  Mail,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { Link, useRoute } from "wouter";
import {
  creatorBrands,
  creatorProfile,
  type CreatorBrand,
  type CreatorContentVideo,
} from "@/data/creator";

export default function CreatorDetail() {
  const [, paramsCreator] = useRoute("/creator/:slug");
  const [, paramsContent] = useRoute("/content/:slug");
  const slug = paramsCreator?.slug ?? paramsContent?.slug ?? "videotto";

  const brand: CreatorBrand =
    creatorBrands.find((b) => b.slug === slug) ?? creatorBrands[0];

  const [activeReelModal, setActiveReelModal] = useState<CreatorContentVideo | null>(null);
  const [activeProofTab, setActiveProofTab] = useState<"ig" | "tiktok" | "fb">("ig");
  const [contentFilter, setContentFilter] = useState<string>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = `${brand.shortName} — Campaign Case Study | Fauzi Noorsyabani`;
    setContentFilter("All");
  }, [brand.shortName, slug]);

  const categories = [
    "All",
    ...Array.from(new Set(brand.contents.map((c) => c.category))),
  ];

  const filteredContents =
    contentFilter === "All"
      ? brand.contents
      : brand.contents.filter((c) => c.category === contentFilter);

  const otherBrands = creatorBrands.filter((b) => b.slug !== brand.slug);

  return (
    <div className="min-h-dvh bg-[#FFFFFF] text-[#0A0A0A] antialiased selection:bg-[#ff6308]/15 selection:text-[#0A0A0A]">
      {/* Top Breadcrumb Navigation */}
      <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-between gap-2 px-5 pt-5 text-[13px] text-[#0A0A0A]/65 sm:px-6">
        <div className="flex items-center gap-2">
          <Link
            href="/creator"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#f2f1ef] px-3 py-1.5 font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
          >
            <ArrowLeft className="size-3.5" />
            Back to Creator Portfolio
          </Link>
          <span className="hidden text-[#0A0A0A]/30 sm:inline">/</span>
          <span className="hidden font-medium text-[#0A0A0A] sm:inline">
            {brand.shortName}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f9f8f6] px-2.5 py-1 text-[12px] font-medium text-[#0A0A0A] ring-1 ring-black/8">
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: brand.accent }}
          />
          {brand.badge}
        </span>
      </div>

      <main className="pt-8 pb-32 sm:pt-14 sm:pb-40">
        {/* 1. CASE STUDY HEADER (600px Editorial Column) */}
        <div className="mx-auto max-w-[600px] px-5 sm:px-0">
          <p className="text-[13px] font-medium text-[#0A0A0A]/60">
            {brand.role} · {brand.period} · {brand.clientLocation}
          </p>
          <h1 className="mt-2 text-[24px]/[1.2] font-semibold tracking-[-0.02em] text-balance text-[#0A0A0A] sm:text-[28px]/[1.18]">
            {brand.name}
          </h1>
          <p className="mt-4 text-[16px]/[1.65] text-pretty text-[#0A0A0A]/70">
            {brand.summary}
          </p>

          {/* Key Campaign Metrics Strip */}
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-[#f9f8f6] p-4 ring-1 ring-[#0a0a0a]/8 sm:grid-cols-4">
            {brand.keyMetrics.map((m, i) => (
              <div key={i}>
                <p className="text-[17px] font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                  {m.value}
                </p>
                <p className="text-[12px] font-medium text-[#0A0A0A]/80">{m.label}</p>
                <p className="text-[11px] text-[#0A0A0A]/50">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. HERO BANNER SHOWCASE (960px Breakout) */}
        <div className="mx-auto mt-8 max-w-[960px] px-5 sm:px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-[#f2f1ef] shadow-sm ring-1 ring-black/10">
            <img
              src={brand.image}
              alt={brand.name}
              className="size-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute right-5 bottom-4 left-5 flex flex-wrap items-center justify-between gap-2 text-white">
              <div>
                <p className="text-[12px] font-medium text-white/75 uppercase">
                  Verified Collaboration Proof
                </p>
                <p className="text-[16px] font-semibold">{brand.metric}</p>
              </div>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-[#0A0A0A] shadow-sm transition-transform hover:scale-105"
              >
                Open External Proof
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. CASE STUDY NARRATIVE: OVERVIEW, CHALLENGE, EXECUTION & DELIVERABLES (600px Column) */}
        <div className="mx-auto mt-10 max-w-[600px] space-y-6 px-5 text-[15.5px]/[1.65] text-[#0A0A0A]/70 sm:px-0">
          <div>
            <h2 className="text-[14px] font-medium text-[#0A0A0A]/60">
              Campaign overview
            </h2>
            <p className="mt-2 text-pretty">{brand.overview}</p>
          </div>

          <div>
            <h2 className="text-[14px] font-medium text-[#0A0A0A]/60">
              The challenge &amp; strategy
            </h2>
            <p className="mt-2 text-pretty">{brand.challenge}</p>
            <p className="mt-3 text-pretty">{brand.execution}</p>
          </div>

          <div className="rounded-2xl bg-[#f9f8f6] p-5 ring-1 ring-[#0a0a0a]/8">
            <h3 className="text-[14px] font-semibold text-[#0A0A0A]">
              Key deliverables &amp; verified outcomes
            </h3>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-[#0A0A0A]/75">
              {brand.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: brand.accent }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. ALL PUBLISHED CONTENTS FOR THIS COLLABORATION (960px Breakout Grid) */}
        <section id="campaign-contents" className="mt-16 scroll-mt-6 sm:mt-20">
          <div className="mx-auto max-w-[600px] px-5 sm:px-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-[14px] text-[#0A0A0A]/65">
                Published content &amp; platform analytics ({brand.contents.length}{" "}
                {brand.contents.length === 1 ? "item" : "videos"})
              </h2>
              <span className="text-[13px] font-medium text-[#1a7f2b] tabular-nums">
                {brand.totalViewsSummary}
              </span>
            </div>

            {categories.length > 2 ? (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {categories.map((tab) => {
                  const active = contentFilter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setContentFilter(tab)}
                      className={`cursor-pointer rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-[#0A0A0A] text-white"
                          : "bg-[#f2f1ef] text-[#0A0A0A]/70 hover:bg-[#e5e4e0] hover:text-[#0A0A0A]"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="mx-auto mt-6 max-w-[960px] px-5 sm:px-6">
            <ul
              className={`grid grid-cols-1 gap-y-9 sm:gap-x-6 sm:gap-y-11 ${
                filteredContents.length === 1
                  ? "max-w-[600px] mx-auto"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {filteredContents.map((item) => (
                <li key={item.id} className="flex flex-col">
                  <div className="group flex flex-col gap-3">
                    {/* Thumbnail Card */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProofTab("ig");
                        setActiveReelModal(item);
                      }}
                      className="relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-[#f2f1ef] text-left"
                    >
                      <img
                        src={item.igProofImage}
                        alt={item.title}
                        loading="lazy"
                        className="size-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />

                      <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-[#0A0A0A] shadow-xs backdrop-blur-xs">
                        <span className="font-mono text-[#ff6308]">#{item.number}</span>
                        <span>·</span>
                        <span className="text-[#1a7f2b]">{item.igViews}</span>
                      </span>

                      <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[12px] font-medium text-white tabular-nums backdrop-blur-xs">
                        <Eye className="size-3 text-[#28c840]" />
                        {item.totalViews}
                      </span>
                    </button>

                    {/* Meta & Direct Platform Watch Buttons */}
                    <div className="flex items-start gap-3">
                      <img
                        src={creatorProfile.avatar}
                        alt=""
                        className="size-9 shrink-0 rounded-full bg-[#f2f1ef] object-cover ring-1 ring-black/10"
                      />
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveProofTab("ig");
                            setActiveReelModal(item);
                          }}
                          className="cursor-pointer text-left line-clamp-2 text-[14.5px] leading-[1.38] font-medium text-[#0A0A0A] decoration-[#0A0A0A]/30 decoration-1 underline-offset-[3px] group-hover:underline"
                        >
                          {item.title}
                        </button>
                        <p className="line-clamp-2 text-[12.5px] leading-snug text-[#0A0A0A]/60">
                          {item.igInteractions} · {item.nonFollowerReach}
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                          <a
                            href={item.igUrl}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                          >
                            <Play className="size-2.5 fill-current" />
                            {item.tiktokUrl ? "IG Reel" : "Open Link"}
                          </a>
                          {item.tiktokUrl ? (
                            <a
                              href={item.tiktokUrl}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                            >
                              <Play className="size-2.5 fill-current" />
                              TikTok
                            </a>
                          ) : null}
                          {item.fbUrl ? (
                            <a
                              href={item.fbUrl}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex items-center gap-1 rounded-md bg-[#f2f1ef] px-2 py-0.5 text-[11.5px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
                            >
                              <Play className="size-2.5 fill-current" />
                              FB Reel
                            </a>
                          ) : null}
                          <button
                            type="button"
                            onClick={() => {
                              setActiveProofTab("ig");
                              setActiveReelModal(item);
                            }}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-md bg-[#ff6308]/10 px-2 py-0.5 text-[11.5px] font-medium text-[#ff6308] transition-colors hover:bg-[#ff6308] hover:text-white"
                          >
                            <BarChart3 className="size-2.5" />
                            Insights
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. PLATFORM SUMMARY TABLE (Only on multi-video campaigns like Videotto.com) */}
        {brand.hasPlatformSummaryTable ? (
          <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-20 sm:px-0">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] text-[#0A0A0A]/65">
                Campaign summary table — all 10 videos
              </h2>
              <span className="text-[12.5px] font-medium text-[#1a7f2b] tabular-nums">
                5,459,233 Total Views
              </span>
            </div>

            <div className="mt-3 overflow-hidden rounded-2xl border border-[#0a0a0a]/10 bg-[#f9f8f6]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px] tabular-nums">
                  <thead>
                    <tr className="border-b border-[#0a0a0a]/8 bg-[#f2f1ef]/70 text-[12px] text-[#0A0A0A]/65">
                      <th className="py-2.5 pr-2 pl-4 font-medium">Video</th>
                      <th className="px-2 py-2.5 font-medium">Instagram</th>
                      <th className="px-2 py-2.5 font-medium">TikTok</th>
                      <th className="px-2 py-2.5 font-medium">Facebook</th>
                      <th className="py-2.5 pr-4 pl-2 text-right font-medium">Watch Links</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0a0a0a]/6">
                    {brand.contents.map((reel) => (
                      <tr
                        key={reel.id}
                        onClick={() => {
                          setActiveProofTab("ig");
                          setActiveReelModal(reel);
                        }}
                        className="cursor-pointer transition-colors hover:bg-black/[0.03]"
                      >
                        <td className="py-2.5 pr-2 pl-4 font-medium text-[#0A0A0A]">
                          Reel #{reel.number}
                        </td>
                        <td className="px-2 py-2.5 font-medium text-[#1a7f2b]">{reel.igViews}</td>
                        <td className="px-2 py-2.5 text-[#0A0A0A]/75">{reel.tiktokViews}</td>
                        <td className="px-2 py-2.5 text-[#0A0A0A]/75">{reel.fbViews}</td>
                        <td
                          className="py-2.5 pr-4 pl-2 text-right"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="inline-flex items-center gap-2 text-[12px]">
                            <a
                              href={reel.igUrl}
                              target="_blank"
                              rel="noopener"
                              className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                            >
                              IG
                            </a>
                            {reel.tiktokUrl ? (
                              <a
                                href={reel.tiktokUrl}
                                target="_blank"
                                rel="noopener"
                                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                              >
                                TT
                              </a>
                            ) : null}
                            {reel.fbUrl ? (
                              <a
                                href={reel.fbUrl}
                                target="_blank"
                                rel="noopener"
                                className="font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2 hover:decoration-[#0A0A0A]"
                              >
                                FB
                              </a>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-[#0a0a0a]/12 bg-[#f2f1ef] font-semibold text-[#0A0A0A]">
                      <td className="py-3 pr-2 pl-4">Total (10 Reels)</td>
                      <td className="px-2 py-3 text-[#1a7f2b]">5,443,039</td>
                      <td className="px-2 py-3">6,419</td>
                      <td className="px-2 py-3">9,775</td>
                      <td className="py-3 pr-4 pl-2 text-right text-[#ff6308]">5,459,233</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        {/* 6. EXPLORE OTHER BRAND COLLABORATIONS */}
        <section className="mx-auto mt-16 max-w-[600px] px-5 sm:mt-24 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] text-[#0A0A0A]/65">
              Other brand collaborations &amp; case studies
            </h2>
            <Link
              href="/creator"
              className="text-[13px] font-medium text-[#0A0A0A] underline decoration-[#0A0A0A]/30 underline-offset-2"
            >
              View all
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-[#0a0a0a]/6 border-t border-[#0a0a0a]/6">
            {otherBrands.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/creator/${b.slug}`}
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-[#ff6308]"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-[#0A0A0A] group-hover:text-[#ff6308]">
                      {b.name}
                    </p>
                    <p className="truncate text-[13px] text-[#0A0A0A]/60">
                      {b.role} · {b.contentCountLabel}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-[13px] text-[#0A0A0A]/65 tabular-nums">
                    <span>{b.totalViewsSummary}</span>
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mx-auto mt-20 max-w-[600px] border-t border-[#0a0a0a]/6 px-5 pt-6 text-[13px] text-[#0A0A0A]/65 tabular-nums sm:px-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>© 2026 Fauzi Noorsyabani · @fauzi.noorsyabani</span>
            <Link
              href="/creator"
              className="underline decoration-[#0A0A0A]/30 underline-offset-[3px] hover:text-[#0A0A0A]"
            >
              Back to /creator
            </Link>
          </div>
        </footer>
      </main>

      {/* INSIGHTS PROOF MODAL */}
      {activeReelModal ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveReelModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 p-4 backdrop-blur-xs sm:p-6"
        >
          <button
            type="button"
            onClick={() => setActiveReelModal(null)}
            className="absolute top-4 right-4 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white/25"
          >
            Close
            <X className="size-4" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90dvh] w-full max-w-[760px] overflow-y-auto rounded-[24px] bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/8 bg-[#f9f8f6] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[#ff6308] px-2 py-0.5 font-mono text-[12px] font-semibold text-white">
                  #{activeReelModal.number}
                </span>
                <span className="text-[13px] font-medium text-[#0A0A0A]/70">
                  {activeReelModal.partner} · {activeReelModal.date}
                </span>
              </div>

              {activeReelModal.tiktokProofImage || activeReelModal.fbProofImage ? (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveProofTab("ig")}
                    className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                      activeProofTab === "ig"
                        ? "bg-[#0A0A0A] text-white"
                        : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                    }`}
                  >
                    Primary Proof ({activeReelModal.igViews})
                  </button>
                  {activeReelModal.tiktokProofImage ? (
                    <button
                      type="button"
                      onClick={() => setActiveProofTab("tiktok")}
                      className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                        activeProofTab === "tiktok"
                          ? "bg-[#0A0A0A] text-white"
                          : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                      }`}
                    >
                      Secondary / TikTok ({activeReelModal.tiktokViews ?? "Certificate"})
                    </button>
                  ) : null}
                  {activeReelModal.fbProofImage ? (
                    <button
                      type="button"
                      onClick={() => setActiveProofTab("fb")}
                      className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                        activeProofTab === "fb"
                          ? "bg-[#0A0A0A] text-white"
                          : "bg-white text-[#0A0A0A]/70 ring-1 ring-black/10 hover:text-[#0A0A0A]"
                      }`}
                    >
                      Facebook ({activeReelModal.fbViews})
                    </button>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="relative aspect-[16/9] w-full bg-[#18181b]">
              <img
                src={
                  activeProofTab === "ig"
                    ? activeReelModal.igProofImage
                    : activeProofTab === "tiktok" && activeReelModal.tiktokProofImage
                      ? activeReelModal.tiktokProofImage
                      : activeReelModal.fbProofImage ?? activeReelModal.igProofImage
                }
                alt={activeReelModal.title}
                className="size-full object-contain"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-[#1a7f2b]">
                <span>{activeReelModal.totalViews}</span>
                <span>·</span>
                <span>{activeReelModal.igInteractions}</span>
                <span>·</span>
                <span>{activeReelModal.nonFollowerReach}</span>
              </div>
              <h3 className="mt-1.5 text-[20px] font-semibold tracking-tight text-[#0A0A0A]">
                {activeReelModal.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#0A0A0A]/75">
                {activeReelModal.hook}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/8 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={activeReelModal.igUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-4 text-[13px] font-medium text-white transition-transform active:scale-[0.97]"
                  >
                    Open Live Post / Video
                    <ArrowUpRight className="size-4" />
                  </a>
                  {activeReelModal.tiktokUrl ? (
                    <a
                      href={activeReelModal.tiktokUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-[#f2f1ef] px-4 text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
                    >
                      Watch on TikTok
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                  {activeReelModal.fbUrl ? (
                    <a
                      href={activeReelModal.fbUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-[#f2f1ef] px-4 text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-[#e5e4e0]"
                    >
                      Watch on Facebook
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReelModal(null)}
                  className="cursor-pointer text-[13.5px] font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
