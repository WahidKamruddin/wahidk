"use client";

import { useScroll, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "../lib/projects";
import { clamp, ease, lerp, seg } from "../lib/motion";
import { useChrome } from "./chrome-provider";
import { ProjectPanelContent } from "./project-panel";

const GAL_A = 0.63;
const GAL_B = 0.99;
const LAST = PROJECTS.length - 1;

/** Match a CSS clamp(minPx, prefPx, maxPx). */
const cssClamp = (min: number, pref: number, max: number) =>
  Math.max(min, Math.min(pref, max));

type Layout = { showList: boolean; listPad: number; wrap: boolean };

export default function Work() {
  const reduced = useReducedMotion();
  const { setInside } = useChrome();

  if (reduced) return <WorkStatic setInside={setInside} />;
  return <WorkStory setInside={setInside} />;
}

/* ------------------------------------------------------------------ */
/* Reduced-motion fallback: a plain stacked list, no brew story.       */
/* ------------------------------------------------------------------ */
function WorkStatic({ setInside }: { setInside: (v: boolean) => void }) {
  useEffect(() => {
    setInside(true);
    return () => setInside(false);
  }, [setInside]);

  return (
    <section
      id="work"
      className="scroll-mt-[56px] bg-espresso px-[clamp(20px,6vw,96px)] py-[clamp(88px,16vh,190px)]"
    >
      <div className="mx-auto w-full max-w-[1340px]">
        <h2 className="text-[clamp(40px,8.4vw,132px)] font-light leading-[1.05] tracking-[-0.02em]">
          <span className="font-extralight text-mocha-400">Take a sip </span>
          <span className="text-inv-100">of my best work.</span>
        </h2>
        <div className="mt-[clamp(48px,10vh,120px)] flex flex-col gap-[clamp(56px,12vh,140px)]">
          {PROJECTS.map((project) => (
            <article
              key={project.num}
              className="flex flex-wrap items-center gap-[clamp(18px,3vw,56px)]"
            >
              <ProjectPanelContent project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Full scroll story.                                                  */
/* ------------------------------------------------------------------ */
function WorkStory({ setInside }: { setInside: (v: boolean) => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const brewRef = useRef<HTMLDivElement>(null);
  const beanARef = useRef<HTMLDivElement>(null);
  const beanBRef = useRef<HTMLDivElement>(null);
  const vesselRef = useRef<HTMLDivElement>(null);
  const liquidRef = useRef<HTMLDivElement>(null);
  const rimRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const railLabelRef = useRef<HTMLSpanElement>(null);

  const gx = useRef(0);
  const snapFrom = useRef(0);
  const snapAt = useRef(0);
  const targetRef = useRef(0);

  const [target, setTarget] = useState(0);
  const [layout, setLayout] = useState<Layout>({
    showList: true,
    listPad: 0,
    wrap: false,
  });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  const measure = useCallback(() => {
    const iw = window.innerWidth;
    const sidePad = 2 * cssClamp(24, 0.05 * iw, 72);
    const narrow = iw < 900;

    let showList = !narrow;
    let listPad = 0;
    if (showList) {
      const listLeft = cssClamp(20, 0.04 * iw, 64);
      const listWidth = cssClamp(180, 0.16 * iw, 240);
      listPad = listLeft + listWidth + 36;
      if (iw - listPad - sidePad < 530) {
        listPad = 0;
        showList = false;
      }
    }
    const wrap = iw - listPad - sidePad < 530;
    setLayout({ showList, listPad, wrap });
  }, []);

  const panelScroll = useCallback((i: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const top =
      rect.top +
      window.scrollY +
      (GAL_A + (i / LAST) * (GAL_B - GAL_A)) *
        (stage.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    let frame = 0;

    const raf = () => {
      const p = scrollYProgress.get();
      const iw = window.innerWidth;
      const ih = window.innerHeight;
      const vmin = Math.min(iw, ih);

      // Beat 1 — headline collapses into itself (hard cut, no fade).
      const t1 = seg(p, 0, 0.06);
      if (brewRef.current) {
        brewRef.current.style.letterSpacing = `${lerp(-0.02, -0.5, ease(t1))}em`;
        brewRef.current.style.visibility = t1 >= 1 ? "hidden" : "visible";
      }

      // Beat 2 — two beans fall together.
      const beansVisible = p >= 0.06 && p < 0.175;
      const t2 = seg(p, 0.06, 0.17);
      if (beanARef.current) {
        beanARef.current.style.transform = `translateY(${lerp(-13, -3.1, ease(t2))}vmin)`;
        beanARef.current.style.visibility = beansVisible ? "visible" : "hidden";
      }
      if (beanBRef.current) {
        beanBRef.current.style.transform = `translateY(${lerp(13, 3.1, ease(t2))}vmin)`;
        beanBRef.current.style.visibility = beansVisible ? "visible" : "hidden";
      }

      // Beat 3 — merged bean grows into the coffee disc.
      const vesselVisible = p >= 0.175;
      const t4 = seg(p, 0.175, 0.32);
      if (liquidRef.current) {
        liquidRef.current.style.transform = `translate(-50%,-50%) scale(${lerp(0.44, 1, ease(t4))})`;
      }

      // Beat 4 — cup rim + handle resolve, then fall away as the dive starts.
      const t5 = seg(p, 0.32, 0.45);
      const cupFade = seg(p, 0.3, 0.44) * (1 - seg(p, 0.5, 0.58));
      if (rimRef.current) rimRef.current.style.opacity = String(cupFade);
      if (handleRef.current) {
        handleRef.current.style.opacity = String(cupFade);
        handleRef.current.style.transform = `translateY(-50%) scaleX(${lerp(0, 1, ease(seg(p, 0.32, 0.45)))})`;
      }

      // Beat 5 — the dive.
      const t6 = seg(p, 0.46, 0.6);
      const diveScale = (Math.hypot(iw, ih) * 1.15) / (0.3 * vmin);
      const base = lerp(1, 1.85, ease(t4 * 0.55 + t5 * 0.45));
      if (vesselRef.current) {
        vesselRef.current.style.transform = `scale(${lerp(base, diveScale, ease(t6))})`;
        vesselRef.current.style.visibility = vesselVisible ? "visible" : "hidden";
      }

      // Beat 6 — the world inside fades up; nav inverts past 0.6.
      const t7 = seg(p, 0.55, 0.63);
      if (worldRef.current) {
        worldRef.current.style.opacity = String(t7);
        worldRef.current.style.pointerEvents = t7 > 0.9 ? "auto" : "none";
      }
      setInside(t7 > 0.6);

      // Beat 7 — the horizontal gallery, with 620ms eased snapping.
      const t8 = seg(p, GAL_A, GAL_B);
      const next = clamp(Math.round(t8 * LAST), 0, LAST);
      if (next !== targetRef.current) {
        targetRef.current = next;
        snapFrom.current = gx.current;
        snapAt.current = performance.now();
        setTarget(next);
      }
      if (gx.current !== targetRef.current) {
        const st = clamp((performance.now() - snapAt.current) / 620, 0, 1);
        gx.current = lerp(snapFrom.current, targetRef.current, ease(st));
        if (st >= 1) gx.current = targetRef.current;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-gx.current * 25}%,0,0)`;
      }
      if (railFillRef.current) {
        railFillRef.current.style.width = `${((targetRef.current + 1) / 4) * 100}%`;
      }
      if (railLabelRef.current) {
        railLabelRef.current.textContent = `0${targetRef.current + 1} / 04`;
      }

      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      setInside(false);
    };
  }, [scrollYProgress, setInside]);

  const onGalleryKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      panelScroll(Math.min(target + 1, LAST));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      panelScroll(Math.max(target - 1, 0));
    }
  };

  return (
    <section id="work" className="scroll-mt-[56px]">
      <div ref={stageRef} className="relative h-[900vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-cream-50">
          {/* Beat 1 — brew headline */}
          <div
            ref={brewRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-[clamp(40px,8.4vw,132px)] leading-none"
          >
            <span className="font-extralight text-mocha-400">Take a sip</span>
            <span className="mt-[0.1em] font-light text-mocha-800">
              of my best work.
            </span>
          </div>

          {/* Beats 2–5 — beans, coffee, cup */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              ref={beanARef}
              className="absolute h-[13vmin] w-[13vmin] rounded-full bg-mocha-300"
              style={{ visibility: "hidden" }}
            />
            <div
              ref={beanBRef}
              className="absolute h-[13vmin] w-[13vmin] rounded-full bg-mocha-700"
              style={{ visibility: "hidden" }}
            />
            <div
              ref={vesselRef}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ visibility: "hidden" }}
            >
              {/* handle — left edge just outside the disc, draws outward on scaleX */}
              <div
                ref={handleRef}
                className="absolute left-[17vmin] top-0 box-border h-[13vmin] w-[9vmin] origin-left rounded-[0_6.5vmin_6.5vmin_0] border-[4vmin] border-l-0 border-ceramic"
                style={{ opacity: 0, transform: "translateY(-50%) scaleX(0)" }}
              />
              {/* ceramic rim — a ring around the coffee */}
              <div
                ref={rimRef}
                className="absolute left-0 top-0 box-border h-[38vmin] w-[38vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4vmin] border-ceramic"
                style={{ opacity: 0 }}
              />
              {/* coffee disc — scales 0.44 → 1 */}
              <div
                ref={liquidRef}
                className="absolute left-0 top-0 h-[30vmin] w-[30vmin] rounded-full bg-coffee"
                style={{ transform: "translate(-50%,-50%) scale(0.44)" }}
              />
            </div>
          </div>

          {/* Beat 6/7 — the world inside the cup */}
          <div
            ref={worldRef}
            className="absolute inset-0 bg-espresso"
            style={{ opacity: 0, pointerEvents: "none" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(90% 70% at 18% 0%, rgba(165,118,74,0.26) 0%, rgba(36,22,12,0) 62%)",
              }}
            />

            {layout.showList && (
              <aside className="absolute left-[clamp(20px,4vw,64px)] top-1/2 z-[6] w-[clamp(180px,16vw,240px)] -translate-y-1/2">
                <p className="mb-3 pl-3 text-[9px] uppercase tracking-[0.3em] text-inv-400">
                  Projects
                </p>
                <div className="flex flex-col gap-0.5">
                  {PROJECTS.map((project, i) => {
                    const isActive = target === i;
                    return (
                      <button
                        key={project.num}
                        type="button"
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => panelScroll(i)}
                        className={`flex items-baseline gap-3 rounded-[0_10px_10px_0] border-l px-3 py-[11px] text-left transition-colors ${
                          isActive
                            ? "border-inv-200 bg-[rgba(246,239,230,0.08)]"
                            : "border-[rgba(246,239,230,0.14)]"
                        }`}
                      >
                        <span
                          className={`text-[10px] tracking-[0.2em] ${
                            isActive ? "text-mocha-400" : "text-inv-400"
                          }`}
                        >
                          {project.num}
                        </span>
                        <span
                          className={`text-[14px] font-light ${
                            isActive ? "text-inv-100" : "text-inv-400"
                          }`}
                        >
                          {project.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>
            )}

            {/* gallery track */}
            <div
              role="group"
              aria-label="Project gallery"
              tabIndex={0}
              onKeyDown={onGalleryKey}
              className="h-full outline-none"
            >
              <div ref={trackRef} className="flex h-full w-[400%]">
                {PROJECTS.map((project) => (
                  <article
                    key={project.num}
                    style={{
                      paddingLeft: layout.listPad || undefined,
                      flexWrap: layout.wrap ? "wrap" : "nowrap",
                    }}
                    className="box-border flex h-full w-1/4 items-center justify-center gap-[clamp(18px,3vw,56px)] overflow-hidden px-[clamp(24px,5vw,72px)] pb-[clamp(88px,13vh,118px)] pt-[clamp(72px,10vh,130px)]"
                  >
                    <ProjectPanelContent project={project} />
                  </article>
                ))}
              </div>
            </div>

            {/* progress rail */}
            <div className="absolute inset-x-[clamp(24px,6vw,100px)] bottom-[clamp(28px,5vh,56px)] z-[5] flex items-center gap-[18px]">
              <span
                ref={railLabelRef}
                className="text-[10px] uppercase tracking-[0.26em] text-mocha-400"
              >
                01 / 04
              </span>
              <span className="relative h-px flex-1 bg-[rgba(246,239,230,0.18)]">
                <span
                  ref={railFillRef}
                  className="absolute inset-y-0 left-0 bg-inv-200 transition-[width] duration-[400ms] ease-out"
                  style={{ width: "25%" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
