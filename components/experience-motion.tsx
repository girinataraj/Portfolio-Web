"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";

export function MotionToggle() {
  const [paused, setPaused] = useState(false);
  const [system, setSystem] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const user = document.documentElement.dataset.userPaused === "true";
      setPaused(user);
      setSystem(media.matches);
      document.documentElement.dataset.motion =
        user || media.matches ? "reduced" : "full";
    };
    media.addEventListener("change", update);
    window.addEventListener("portfolio:motion", update);
    update();
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("portfolio:motion", update);
    };
  }, []);
  const quiet = paused || system;
  return (
    <button
      className="motion-toggle"
      aria-label={
        system
          ? "Motion off — system reduced motion preference"
          : quiet
            ? "Motion off — resume decorative motion"
            : "Motion on — pause decorative motion"
      }
      aria-pressed={quiet}
      onClick={() => {
        document.documentElement.dataset.userPaused = String(!paused);
        document.documentElement.dataset.motion =
          !paused || system ? "reduced" : "full";
        window.dispatchEvent(new Event("portfolio:motion"));
      }}
    >
      {quiet ? (
        <Play size={13} aria-hidden="true" />
      ) : (
        <Pause size={13} aria-hidden="true" />
      )}
      <span>Motion {quiet ? "off" : "on"}</span>
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
    const depthElements = [
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
      depthElements.forEach((el) => {
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
    depthElements.forEach((el) => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
    });
    reduced.addEventListener("change", setup);
    window.addEventListener("portfolio:motion", setup);
    setup();
    const focusAnchor = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (target) {
        if (!target.hasAttribute("tabindex"))
          target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    };
    document.addEventListener("click", focusAnchor);
    return () => {
      document.removeEventListener("click", focusAnchor);
      observer?.disconnect();
      cancelAnimationFrame(frame);
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener("change", setup);
      window.removeEventListener("portfolio:motion", setup);
      depthElements.forEach((el) => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
