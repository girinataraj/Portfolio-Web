"use client";
import { useEffect, useRef, useState } from "react";
import {
  boundedAttention,
  approachAttention,
  type Attention,
} from "@/lib/lumen-model";
import { MotionToggle } from "./experience-motion";

const modes = {
  interface: {
    name: "Interface",
    key: "React · TypeScript",
    description:
      "Input becomes visible feedback. Lumen opens its interface plane.",
  },
  services: {
    name: "Services",
    key: "Node.js · Python",
    description:
      "One request, connected services. Follow the branching signal paths.",
  },
  intelligence: {
    name: "Intelligence",
    key: "Retrieval · MCP",
    description:
      "Sources become context. Explore a conceptual retrieval constellation.",
  },
} as const;
type Mode = keyof typeof modes;
const cues: Record<string, string> = {
  work: "Work in focus",
  about: "A closer introduction",
  lab: "Experiment detected",
  contact: "Connection ready",
  resume: "Background in focus",
};
export function Lumen() {
  const ref = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<Mode>("interface");
  const [awake, setAwake] = useState(false);
  const [cue, setCue] = useState("");
  useEffect(() => {
    const el = ref.current!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover:hover) and (pointer:fine)");
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let visible = true,
      frame = 0,
      current: Attention = { x: 0, y: 0 },
      target: Attention = { x: 0, y: 0 };
    const permitted = () =>
      visible &&
      !document.hidden &&
      !reduced.matches &&
      document.documentElement.dataset.motion !== "reduced";
    const paint = () => {
      el.style.setProperty("--look-x", `${current.x * 13}px`);
      el.style.setProperty("--look-y", `${current.y * 9}px`);
      el.style.setProperty("--yaw", `${current.x * 9}deg`);
      el.style.setProperty("--pitch", `${-current.y * 7}deg`);
      el.style.setProperty("--lean", `${current.x * 2}deg`);
    };
    const settle = () => {
      frame = 0;
      if (!permitted()) return;
      current = approachAttention(current, target);
      paint();
      if (current.x !== target.x || current.y !== target.y)
        frame = requestAnimationFrame(settle);
    };
    const start = () => {
      if (!frame && permitted()) frame = requestAnimationFrame(settle);
    };
    const reset = () => {
      clearTimeout(idleTimer);
      cancelAnimationFrame(frame);
      frame = 0;
      current = { x: 0, y: 0 };
      target = { x: 0, y: 0 };
      paint();
      el.dataset.attention = "rest";
    };
    const move = (e: PointerEvent) => {
      if (!fine.matches || !permitted()) return;
      const r = el.getBoundingClientRect();
      target = boundedAttention(
        (e.clientX - r.left - r.width / 2) / (r.width * 0.65),
        (e.clientY - r.top - r.height * 0.4) / (r.height * 0.6),
      );
      el.dataset.attention = "curious";
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        target = { x: 0, y: 0 };
        el.dataset.attention = "rest";
        start();
      }, 1800);
      start();
    };
    const cueIn = (e: Event) => {
      const node = (e.target as Element)?.closest("[data-lumen-cue]");
      const key = node?.getAttribute("data-lumen-cue");
      setCue(key && cues[key] ? key : "");
    };
    const cueOut = (e: FocusEvent | PointerEvent) => {
      if (!(e.relatedTarget as Element)?.closest?.("[data-lumen-cue]"))
        setCue("");
    };
    const visibility = () => {
      el.dataset.hidden = String(document.hidden);
      if (document.hidden) reset();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        el.dataset.visible = String(visible);
        if (!visible) reset();
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", cueIn);
    document.addEventListener("focusin", cueIn);
    document.addEventListener("pointerout", cueOut);
    document.addEventListener("focusout", cueOut);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("portfolio:motion", reset);
    reduced.addEventListener("change", reset);
    fine.addEventListener("change", reset);
    return () => {
      reset();
      observer.disconnect();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", cueIn);
      document.removeEventListener("focusin", cueIn);
      document.removeEventListener("pointerout", cueOut);
      document.removeEventListener("focusout", cueOut);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("portfolio:motion", reset);
      reduced.removeEventListener("change", reset);
      fine.removeEventListener("change", reset);
    };
  }, []);
  return (
    <figure
      ref={ref}
      className="lumen"
      data-mode={mode}
      data-awake={awake || !!cue}
      data-cue={cue}
      data-attention="rest"
      aria-labelledby="lumen-title"
    >
      <div className="lumen-environment" aria-hidden="true">
        <div className="lumen-halo" />
        <div className="lumen-object">
          <svg viewBox="0 0 700 620" fill="none" className="lumen-svg">
            <defs>
              <linearGradient
                id="metal"
                x1="230"
                y1="170"
                x2="470"
                y2="450"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#627588" />
                <stop offset=".22" stopColor="#223346" />
                <stop offset=".5" stopColor="#101c29" />
                <stop offset=".8" stopColor="#34465b" />
                <stop offset="1" stopColor="#0a1019" />
              </linearGradient>
              <linearGradient
                id="wing"
                x1="130"
                y1="230"
                x2="290"
                y2="460"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#41536a" />
                <stop offset=".4" stopColor="#172436" />
                <stop offset="1" stopColor="#0b1321" />
              </linearGradient>
              <radialGradient id="optic">
                <stop stopColor="#98eaff" />
                <stop offset=".14" stopColor="#38738c" />
                <stop offset=".42" stopColor="#0d273c" />
                <stop offset=".8" stopColor="#07121f" />
                <stop offset="1" stopColor="#264355" />
              </radialGradient>
              <radialGradient id="glass">
                <stop stopColor="#71d7f9" stopOpacity=".15" />
                <stop offset=".7" stopColor="#112536" />
                <stop offset="1" stopColor="#040b13" />
              </radialGradient>
              <linearGradient id="edge">
                <stop stopColor="#345266" />
                <stop offset=".45" stopColor="#b6efff" />
                <stop offset="1" stopColor="#304965" />
              </linearGradient>
              <clipPath id="lens-clip">
                <circle cx="354" cy="309" r="65" />
              </clipPath>
            </defs>
            <ellipse
              className="lumen-shadow"
              cx="354"
              cy="536"
              rx="133"
              ry="18"
              fill="#52b9ee"
              fillOpacity=".08"
            />
            <g className="lumen-orbits" stroke="#467591" strokeWidth=".7">
              <ellipse
                cx="354"
                cy="324"
                rx="252"
                ry="93"
                transform="rotate(-26 354 324)"
              />
              <ellipse
                cx="354"
                cy="324"
                rx="221"
                ry="89"
                transform="rotate(36 354 324)"
              />
            </g>
            <g className="lumen-float">
              <g className="lumen-wing wing-left">
                <path
                  d="m251 218-98 61 27 149 100-32 19-118Z"
                  fill="url(#wing)"
                  stroke="#7890a9"
                  strokeWidth=".8"
                />
                <path
                  d="m165 285 67-37-18 143-24 20Z"
                  fill="#30495f"
                  fillOpacity=".35"
                />
                <path
                  className="wing-light"
                  d="m163 291 21 122 61-20"
                  stroke="#87dfff"
                  strokeWidth="1.5"
                />
                <path d="m209 270 44-27M216 292l31-16" stroke="#536c84" />
              </g>
              <g className="lumen-wing wing-right">
                <path
                  d="m444 220 108 52-30 149-102-32-14-119Z"
                  fill="url(#wing)"
                  stroke="#718ba6"
                  strokeWidth=".8"
                />
                <path
                  d="m540 281-69-33 15 137 26 21Z"
                  fill="#39526c"
                  fillOpacity=".3"
                />
                <path
                  className="wing-light"
                  d="m541 287-25 121-56-20"
                  stroke="#87dfff"
                  strokeWidth="1.5"
                />
                <path d="m502 266-40-23M496 291l-29-18" stroke="#536c84" />
              </g>
              <path
                d="m285 189 120-14 69 66 14 111-61 94-101 18-74-72-15-105Z"
                fill="url(#metal)"
                stroke="url(#edge)"
                strokeWidth="1.4"
              />
              <path
                d="m285 189 50 56 70-70M335 245l-98 42m98-42 139-4M252 392l58-20 16 92m101-18-25-62 86-32"
                stroke="#839ab3"
                strokeOpacity=".45"
                strokeWidth=".8"
              />
              <path
                d="m287 200 43 43-78 34 24-57Z"
                fill="#bacbda"
                fillOpacity=".11"
              />
              <path
                className="lumen-brow"
                d="m300 241 50-14 58 7"
                stroke="#b3e8fb"
                strokeWidth="2"
              />
              <circle
                cx="354"
                cy="309"
                r="83"
                fill="#0a1521"
                stroke="#657e97"
                strokeWidth="1"
              />
              <circle
                cx="354"
                cy="309"
                r="76"
                fill="url(#glass)"
                stroke="#a4deef"
                strokeWidth="1.6"
              />
              <circle
                className="optic-ring"
                cx="354"
                cy="309"
                r="69"
                stroke="#76d7f8"
                strokeOpacity=".6"
                strokeDasharray="3 11"
              />
              <g clipPath="url(#lens-clip)">
                <g className="lumen-gaze">
                  <circle cx="354" cy="309" r="57" fill="url(#optic)" />
                  <circle
                    className="lumen-iris"
                    cx="354"
                    cy="309"
                    r="29"
                    fill="#0a1728"
                    stroke="#88deff"
                    strokeWidth="1.2"
                  />
                  <circle cx="354" cy="309" r="12" fill="#baf3ff" />
                  <circle cx="347" cy="300" r="4" fill="white" />
                  <path
                    d="M318 309h12m48 0h12M354 273v12m0 48v12"
                    stroke="#93dbed"
                    strokeWidth=".8"
                  />
                </g>
                <path
                  className="lumen-shutter"
                  d="M285 241h138v136H285Z"
                  fill="#0b1727"
                />
              </g>
              <path d="M316 414h76" stroke="#617c96" />
              <path
                className="lumen-mouth"
                d="M337 415h31"
                stroke="#a5e8ff"
                strokeWidth="2"
              />
              <g className="state-interface lumen-state">
                <path
                  d="m147 395 108-20 17 90-108 20Z"
                  fill="#0b2031"
                  fillOpacity=".92"
                  stroke="#8cd3ed"
                />
                <path
                  d="m160 409 76-14m-71 37 25-4 4 25-25 5Zm38-5 34-6m-31 19 35-7"
                  stroke="#73a6c1"
                />
                <circle cx="246" cy="387" r="3" fill="#c0f3ff" />
                <path
                  className="lumen-signal"
                  d="m271 418 42-34"
                  stroke="#a2e9ff"
                />
              </g>
              <g className="state-services lumen-state">
                <path
                  className="lumen-signal"
                  d="m430 309 70-54m-70 54 91 26m-91-26 60 111"
                  stroke="#9beaff"
                />
                <g fill="#102739" stroke="#a0dff5">
                  <rect x="490" y="231" width="53" height="35" rx="4" />
                  <rect x="511" y="321" width="53" height="35" rx="4" />
                  <rect x="480" y="406" width="53" height="35" rx="4" />
                </g>
                <path
                  d="M501 243h27m-27 10h17M521 334h30m-30 10h20M491 419h28m-28 10h18"
                  stroke="#6a9ebc"
                />
              </g>
              <g className="state-intelligence lumen-state">
                <path
                  className="lumen-signal"
                  d="m295 253-60-88m119 69 14-106m52 126 77-79"
                  stroke="#9beaff"
                />
                <g fill="#102739" stroke="#98d5ec">
                  <path d="M209 135h35l13 13v51h-48Zm13 16h21m-21 12h21m-21 12h14M348 83h35l13 13v51h-48Zm13 16h21m-21 12h21m-21 12h14M472 143h35l13 13v51h-48Zm13 16h21m-21 12h21m-21 12h14" />
                </g>
              </g>
            </g>
            <g stroke="#49637d" strokeWidth=".7">
              <path d="M119 455v35h78M557 172h29v40M268 119v-20h25" />
              <circle cx="119" cy="450" r="3" />
              <circle cx="589" cy="217" r="3" />
            </g>
          </svg>
        </div>
        <span className="lumen-coordinate">
          L / 01 <span>OPTICAL COMPANION</span>
        </span>
      </div>
      <figcaption className="lumen-console">
        <div className="lumen-console-top">
          <div>
            <p className="eyebrow" id="lumen-title">
              LUMEN / SIGNAL COMPANION
            </p>
            <p className="lumen-status" aria-live="polite">
              {cue
                ? cues[cue]
                : awake
                  ? "Signal acknowledged. Explore a layer."
                  : "Awaiting a signal. Choose a layer."}
            </p>
          </div>
          <MotionToggle />
        </div>
        <div
          className="lumen-mode-controls"
          role="group"
          aria-label="Engineering layers"
        >
          {(Object.keys(modes) as Mode[]).map((key) => (
            <button
              key={key}
              aria-pressed={mode === key}
              onClick={() => {
                setMode(key);
                setAwake(true);
              }}
            >
              {modes[key].name}
            </button>
          ))}
        </div>
        <p className="lumen-description" aria-live="polite" aria-atomic="true">
          <strong>{modes[mode].key}</strong>
          {modes[mode].description}
        </p>
        <button
          className="lumen-wake text-link"
          aria-pressed={awake}
          onClick={() => setAwake(!awake)}
        >
          {awake ? "Let Lumen rest" : "Wake Lumen"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <noscript>
          <p>
            Static optical companion. Interface, services and retrieval
            illustrations; no live systems or pointer data collection.
          </p>
        </noscript>
      </figcaption>
    </figure>
  );
}
