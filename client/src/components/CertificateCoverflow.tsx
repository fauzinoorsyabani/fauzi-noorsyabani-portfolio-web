import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface CoverflowCertificate {
  readonly name: string;
  readonly issuer: string;
  readonly date: string;
  readonly description: string;
  readonly tag: string;
  readonly credential: string;
  readonly verifyUrl?: string;
}

interface CertificateCoverflowProps {
  items: readonly CoverflowCertificate[];
  viewLabel: string;
  previousLabel?: string;
  nextLabel?: string;
}

const PANEL_GRADIENTS = [
  "from-sky-500 via-indigo-500 to-violet-600",
  "from-emerald-500 via-teal-500 to-cyan-600",
  "from-amber-400 via-orange-500 to-rose-500",
  "from-fuchsia-500 via-purple-500 to-indigo-600",
];

function circularOffset(index: number, active: number, total: number) {
  let offset = index - active;
  const half = total / 2;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

export function CertificateCoverflow({
  items,
  viewLabel,
  previousLabel = "Previous certificate",
  nextLabel = "Next certificate",
}: CertificateCoverflowProps) {
  const total = items.length;
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const go = useCallback((step: number) => setActive((current) => (current + step + total) % total), [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    const node = document.getElementById("certificate-coverflow");
    node?.addEventListener("keydown", onKey);
    return () => node?.removeEventListener("keydown", onKey);
  }, [go]);

  const onPointerDown = (event: React.PointerEvent) => {
    drag.current = { x: event.clientX, moved: false };
  };
  const onPointerUp = (event: React.PointerEvent) => {
    if (!drag.current) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 45) {
      go(delta < 0 ? 1 : -1);
      drag.current.moved = true;
    }
    window.setTimeout(() => {
      drag.current = null;
    }, 0);
  };

  // Responsive geometry: On mobile, cards are smaller and closer so adjacent left & right cards peek out with blur
  const offsetMultiplier = isMobile ? 46 : 62;
  const depthZ = isMobile ? 75 : 140;
  const rotateDeg = isMobile ? 14 : 16;
  const scaleStep = isMobile ? 0.12 : 0.08;

  return (
    <div
      id="certificate-coverflow"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Certificates"
      className="relative mx-auto w-full max-w-[1280px] outline-none"
    >
      <div
        className="relative h-[450px] min-[380px]:h-[475px] w-full select-none overflow-hidden sm:h-[600px] touch-pan-y"
        style={{ perspective: "1600px" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
      >
        {items.map((item, index) => {
          const offset = circularOffset(index, active, total);
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const hidden = distance > 2;
          const gradient = PANEL_GRADIENTS[index % PANEL_GRADIENTS.length];
          const hasImage = item.credential && /\.(webp|png|jpe?g)$/i.test(item.credential);
          const showImage = hasImage && distance <= 1;
          const blurAmount = isActive ? 0 : Math.min(distance * 2.2, 4.5);

          return (
            <article
              key={item.name}
              aria-hidden={!isActive}
              onClick={() => {
                if (drag.current?.moved) return;
                if (!isActive) setActive(index);
              }}
              className={`absolute left-1/2 top-3 sm:top-4 flex h-[405px] min-[380px]:h-[430px] w-[235px] min-[380px]:w-[265px] sm:h-[560px] sm:w-[380px] flex-col rounded-[22px] sm:rounded-[28px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2.5 sm:p-3 shadow-xl transition-[transform,opacity,filter] duration-500 ease-out motion-reduce:transition-none ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                transform: `translateX(calc(-50% + ${offset * offsetMultiplier}%)) translateZ(${-distance * depthZ}px) rotateY(${
                  offset * -rotateDeg
                }deg) scale(${1 - distance * scaleStep})`,
                opacity: hidden ? 0 : isActive ? 1 : Math.max(0.4, 0.82 - distance * 0.22),
                filter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
                zIndex: 10 - distance,
                pointerEvents: hidden ? "none" : "auto",
                visibility: hidden ? "hidden" : "visible",
                willChange: hidden ? "auto" : "transform, opacity, filter",
              }}
            >
              <div className="relative h-[160px] min-[380px]:h-[175px] w-full shrink-0 overflow-hidden rounded-[16px] sm:rounded-[20px] bg-neutral-100 sm:h-[250px]">
                {showImage ? (
                  <img
                    src={item.credential}
                    alt={`${item.name} certificate`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-top"
                  />
                ) : hasImage ? null : (
                  <div className={`flex h-full w-full flex-col justify-between bg-gradient-to-br ${gradient} p-4 sm:p-5 text-white`}>
                    <span className="mono-type text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-80">
                      {item.tag}
                    </span>
                    <div>
                      <p className="display-type text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.04em]">
                        {item.issuer.split(",")[0]}
                      </p>
                      <p className="mt-1 text-[0.68rem] sm:text-xs font-medium opacity-80">{item.date}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-2 sm:px-3 pb-1 sm:pb-2 pt-3 sm:pt-5">
                <span className="mono-type w-fit rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.14em] text-neutral-700 dark:text-neutral-300">
                  {item.tag}
                </span>
                <h3 className="display-type mt-2 sm:mt-4 line-clamp-2 sm:line-clamp-3 text-base sm:text-[1.45rem] font-bold leading-tight sm:leading-[1.15] tracking-[-0.03em] sm:tracking-[-0.04em] text-neutral-950 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-1.5 sm:mt-3 line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm leading-snug sm:leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>

                <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-2.5 sm:pt-4">
                  <div className="min-w-0">
                    <p className="truncate text-[0.72rem] sm:text-xs font-semibold text-neutral-900 dark:text-neutral-100">{item.issuer}</p>
                    <p className="mono-type mt-0.5 text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                      {item.date}
                    </p>
                  </div>
                  {(hasImage || item.verifyUrl) && isActive && (
                    <a
                      href={item.verifyUrl || item.credential}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-950 dark:bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[0.68rem] sm:text-xs font-bold text-white dark:text-neutral-950 transition hover:bg-neutral-700 dark:hover:bg-neutral-200"
                    >
                      {item.verifyUrl
                        ? item.verifyUrl.includes("credly.com")
                          ? "Verify on Credly"
                          : item.verifyUrl.includes("dicoding.com")
                          ? "Verify on Dicoding"
                          : "Verify Credential"
                        : viewLabel}{" "}
                      <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-32 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-32 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={previousLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-sm transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Select certificate">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={item.name}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-6 bg-neutral-950" : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-sm transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
