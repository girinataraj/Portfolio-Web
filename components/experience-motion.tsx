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
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    let observer: IntersectionObserver | null = null;
    const animations: Animation[] = [];
    const permitted = () =>
      !reduced.matches && root.dataset.motion !== "reduced" && !document.hidden;
    const setup = () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      if (!permitted()) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            observer?.unobserve(el);
            if (el.dataset.seen) continue;
            el.dataset.seen = "true";
            const visual = el.querySelector(".visual-link");
            const heading = el.querySelector("h2");
            if (visual)
              animations.push(
                visual.animate(
                  [
                    {
                      transform:
                        "perspective(1000px) rotateX(5deg) translateY(20px)",
                      filter: "brightness(.75)",
                    },
                    { transform: "none", filter: "brightness(1)" },
                  ],
                  { duration: 750, easing: "cubic-bezier(.2,.8,.2,1)" },
                ),
              );
            else if (heading)
              animations.push(
                heading.animate(
                  [
                    { transform: "translateX(14px)" },
                    { transform: "translateX(0)" },
                  ],
                  { duration: 550, easing: "cubic-bezier(.2,.8,.2,1)" },
                ),
              );
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(
          ".project-card[data-reveal],.section-heading[data-reveal]",
        )
        .forEach((el) => observer?.observe(el));
    };
    const focusAnchor = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href^="#"]');
      const href = link?.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (target) {
        if (!target.hasAttribute("tabindex"))
          target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    };
    reduced.addEventListener("change", setup);
    window.addEventListener("portfolio:motion", setup);
    document.addEventListener("visibilitychange", setup);
    document.addEventListener("click", focusAnchor);
    setup();
    return () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener("change", setup);
      window.removeEventListener("portfolio:motion", setup);
      document.removeEventListener("visibilitychange", setup);
      document.removeEventListener("click", focusAnchor);
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
