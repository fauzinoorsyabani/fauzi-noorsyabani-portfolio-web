import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface CoverflowCertificate {
  readonly name: string;
  readonly issuer: string;
  readonly date: string;
  readonly description: string;
  readonly tag: string;
  readonly credential: string;
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

  return (
    <div
      id="certificate-coverflow"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Certificates"
      className="relative mx-auto w-full max-w-[1280px] outline-none"
    >
      <div
        className="relative h-[560px] w-full select-none overflow-hidden sm:h-[600px] touch-pan-y"
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

          return (
            <article
              key={item.name}
              aria-hidden={!isActive}
              onClick={() => {
                if (drag.current?.moved) return;
                if (!isActive) setActive(index);
              }}
              className={`absolute left-1/2 top-4 flex h-[520px] w-[min(86vw,360px)] flex-col rounded-[28px] border border-neutral-200 bg-white p-3 shadow-xl transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none sm:h-[560px] sm:w-[380px] ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                transform: `translateX(calc(-50% + ${offset * 62}%)) translateZ(${-distance * 140}px) rotateY(${
                  offset * -16
                }deg) scale(${1 - distance * 0.08})`,
                opacity: hidden ? 0 : isActive ? 1 : Math.max(0.35, 0.8 - distance * 0.28),
                zIndex: 10 - distance,
                pointerEvents: hidden ? "none" : "auto",
                visibility: hidden ? "hidden" : "visible",
                willChange: hidden ? "auto" : "transform, opacity",
              }}
            >
              <div className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-[20px] bg-neutral-100 sm:h-[250px]">
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
                  <div className={`flex h-full w-full flex-col justify-between bg-gradient-to-br ${gradient} p-5 text-white`}>
                    <span className="mono-type text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-80">
                      {item.tag}
                    </span>
                    <div>
                      <p className="display-type text-3xl font-bold leading-tight tracking-[-0.04em]">
                        {item.issuer.split(",")[0]}
                      </p>
                      <p className="mt-1 text-xs font-medium opacity-80">{item.date}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-3 pb-2 pt-5">
                <span className="mono-type w-fit rounded-full bg-neutral-100 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-neutral-700">
                  {item.tag}
                </span>
                <h3 className="display-type mt-4 line-clamp-3 text-[1.45rem] font-bold leading-[1.15] tracking-[-0.04em] text-neutral-950">
                  {item.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">{item.description}</p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-neutral-900">{item.issuer}</p>
                    <p className="mono-type mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                      {item.date}
                    </p>
                  </div>
                  {hasImage && isActive && (
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-950 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-neutral-700"
                    >
                      {viewLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent dark:from-neutral-950 sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent dark:from-neutral-950 sm:w-32" />
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
