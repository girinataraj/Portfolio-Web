"use client";
import { MotionToggle } from "./experience-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
const layers = {
  interface: [
    "Interface",
    "React · TypeScript",
    "Explore input, layout and feedback in a visible interface plane.",
  ],
  services: [
    "Services",
    "Node.js · Python",
    "Follow a request as it branches through connected service nodes.",
  ],
  intelligence: [
    "Intelligence",
    "RAG · MCP",
    "Trace source fragments through retrieval to a grounded answer.",
  ],
} as const;
export function SignalField({ children }: { children: ReactNode }) {
  const [layer, setLayer] = useState<keyof typeof layers>("interface");
  const [interacted, setInteracted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let rect: DOMRect | null = null;
    const reset = () => {
      cancelAnimationFrame(frame);
      rect = null;
      el.classList.remove("is-tracking");
      for (const p of ["--rx", "--ry", "--px", "--py"])
        el.style.removeProperty(p);
    };
    const enter = () => {
      rect = el.getBoundingClientRect();
    };
    const move = (e: PointerEvent) => {
      if (
        !fine.matches ||
        reduced.matches ||
        document.documentElement.dataset.motion === "reduced" ||
        !rect
      )
        return;
      const x = Math.max(
        -0.5,
        Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5),
      );
      const y = Math.max(
        -0.5,
        Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5),
      );
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.classList.add("is-tracking");
        el.style.setProperty("--rx", `${-y * 5}deg`);
        el.style.setProperty("--ry", `${x * 6}deg`);
        el.style.setProperty("--px", `${x * 9}px`);
        el.style.setProperty("--py", `${y * 7}px`);
      });
    };
    const visibility = () => {
      el.dataset.hidden = String(document.hidden);
      if (document.hidden) reset();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.inView = String(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("portfolio:motion", reset);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", reset);
    fine.addEventListener("change", reset);
    return () => {
      reset();
      observer.disconnect();
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("portfolio:motion", reset);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", reset);
      fine.removeEventListener("change", reset);
    };
  }, []);
  return (
    <figure
      ref={ref}
      className={`signal-system${interacted ? " has-interacted" : ""}`}
      data-layer={layer}
      aria-labelledby="system-caption"
    >
      <div className="system-scene" aria-hidden="true">
        {children}
      </div>
      <figcaption className="system-panel">
        <noscript>
          <p className="layer-description">
            Interface: input, layout and feedback. Services: request routing
            through connected nodes. Intelligence: source retrieval and
            response. Static conceptual illustrations; no live systems are
            connected.
          </p>
        </noscript>
        <div className="signal-toolbar">
          <p className="concept-label" id="system-caption">
            INTERACTIVE SIGNAL FIELD
          </p>
          <MotionToggle />
        </div>
        <p className="system-instruction" id="layer-help">
          Choose a layer to explore.
        </p>
        <div
          className="layer-controls"
          role="group"
          aria-label="Engineering layers"
          aria-describedby="layer-help"
        >
          {(Object.keys(layers) as (keyof typeof layers)[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-controls="layer-response"
              aria-pressed={key === layer}
              onClick={() => {
                setLayer(key);
                setInteracted(true);
              }}
            >
              {layers[key][0]}
            </button>
          ))}
        </div>
        <p
          className="layer-note"
          id="layer-response"
          aria-live="polite"
          aria-atomic="true"
        >
          <strong className="layer-key">{layers[layer][1]}</strong>
          <span className="layer-description">{layers[layer][2]}</span>
        </p>
      </figcaption>
    </figure>
  );
}
