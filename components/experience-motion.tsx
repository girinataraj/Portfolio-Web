"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";

export function MotionToggle() {
  const [paused, setPaused] = useState(false);
  return (
    <button
      className="motion-toggle"
      aria-label="Pause decorative motion"
      aria-pressed={paused}
      onClick={() => {
        const next = !paused;
        setPaused(next);
        document.documentElement.dataset.motion = next ? "reduced" : "full";
        window.dispatchEvent(new Event("portfolio:motion"));
      }}
    >
      {paused ? (
        <Play size={13} aria-hidden="true" />
      ) : (
        <Pause size={13} aria-hidden="true" />
      )}
      <span>Motion</span>
    </button>
  );
}

export function ExperienceMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.enhanced = "true";
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let observer: IntersectionObserver | null = null;
    let frame = 0;
    let rect: DOMRect | null = null;
    const animations: Animation[] = [];
    const portraits = [
      ...document.querySelectorAll<HTMLElement>("[data-depth]"),
    ];
    const permitted = () =>
      !reduced.matches && root.dataset.motion !== "reduced";
    const enter = (event: PointerEvent) => {
      rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    };
    const move = (event: PointerEvent) => {
      if (!permitted() || !fine.matches || !rect) return;
      const el = event.currentTarget as HTMLElement;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--depth-x", `${x * 6}deg`);
        el.style.setProperty("--depth-y", `${-y * 6}deg`);
      });
    };
    const leave = (event: PointerEvent) => {
      const el = event.currentTarget as HTMLElement;
      cancelAnimationFrame(frame);
      el.style.setProperty("--depth-x", "0deg");
      el.style.setProperty("--depth-y", "0deg");
    };
    const setup = () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      portraits.forEach((el) => {
        el.style.setProperty("--depth-x", "0deg");
        el.style.setProperty("--depth-y", "0deg");
      });
      if (!permitted()) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            animations.push(
              el.animate(
                [
                  { transform: "translateY(24px)", opacity: 0.72 },
                  { transform: "translateY(0)", opacity: 1 },
                ],
                { duration: 720, easing: "cubic-bezier(.22,1,.36,1)" },
              ),
            );
            observer?.unobserve(el);
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer?.observe(el));
    };
    portraits.forEach((el) => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
    });
    reduced.addEventListener("change", setup);
    window.addEventListener("portfolio:motion", setup);
    setup();
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener("change", setup);
      window.removeEventListener("portfolio:motion", setup);
      portraits.forEach((el) => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
