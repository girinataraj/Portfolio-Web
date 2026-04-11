"use client"

import { useEffect, useRef } from "react"

/**
 * LenisProvider
 *
 * Initialises Lenis smooth-scroll and wires it to GSAP ScrollTrigger so
 * the canvas scrub stays in perfect sync with inertia scroll position.
 *
 * Architecture:
 *   - Dynamically imports both `lenis` and `gsap/ScrollTrigger` to keep
 *     them out of the SSR bundle.
 *   - Drives ScrollTrigger's scroll position via Lenis `on("scroll")`.
 *   - Feeds Lenis RAF loop through `gsap.ticker` so a single rAF loop runs.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import("lenis").default | null>(null)

  useEffect(() => {
    const init = async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      const gsap          = gsapMod.default
      const ScrollTrigger = stMod.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        lerp:        0.1,
        duration:    1.4,
        smoothWheel: true,
        // Disable smooth on touch — mobile uses native scroll
        touchMultiplier: 0,
      })

      lenisRef.current = lenis

      // ── Sync Lenis scroll position → GSAP ScrollTrigger ──────────────────
      lenis.on("scroll", () => ScrollTrigger.update())

      // ── Use GSAP ticker as the single RAF loop ────────────────────────────
      gsap.ticker.add((time) => lenis.raf(time * 1000))

      // Prevent GSAP from calling its own rAF (Lenis drives it via ticker)
      gsap.ticker.lagSmoothing(0)
    }

    init()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  // No DOM wrapper needed — renders children as-is
  return <>{children}</>
}
