"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// ─── Constants ────────────────────────────────────────────────────────────────
const START_FRAME = 120   // zoomed out — shown at scroll 0
const END_FRAME = 60      // zoomed in  — shown at scroll 1
const TOTAL_FRAMES = START_FRAME - END_FRAME  // 60
const PRELOAD_PRIORITY = 20  // frames loaded before first paint

// ─── Frame URL helper ────────────────────────────────────────────────────────
const frameUrl = (index: number) =>
  `/sequence/frame_${String(index).padStart(3, "0")}.jpg`

// ─────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const containerRef  = useRef<HTMLDivElement>(null)
  const canvasRef     = useRef<HTMLCanvasElement>(null)
  const textIntroRef  = useRef<HTMLDivElement>(null)
  const textMidRef    = useRef<HTMLDivElement>(null)
  const textFinalRef  = useRef<HTMLDivElement>(null)

  const imagesRef     = useRef<(HTMLImageElement | null)[]>([])
  const currentFrame  = useRef<number>(-1)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gsapCtxRef    = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stRef         = useRef<any>(null)

  const [isMobile, setIsMobile]     = useState(false)
  const [hydrated, setHydrated]     = useState(false)

  // ── Hydration & mobile detection ──────────────────────────────────────────
  useEffect(() => {
    setHydrated(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check, { passive: true })
    return () => window.removeEventListener("resize", check)
  }, [])

  // ── Canvas draw (stable ref — never re-created) ───────────────────────────
  const drawFrame = useCallback((index: number) => {
    if (index === currentFrame.current) return
    currentFrame.current = index

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const dpr  = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    const W    = Math.max(1, Math.round(rect.width))
    const H    = Math.max(1, Math.round(rect.height))

    // Resize backing store — use setTransform instead of scale()
    // ctx.scale() ACCUMULATES on every call and corrupts coordinates.
    // setTransform() always resets to an absolute matrix.
    if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
      canvas.width  = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const img = imagesRef.current[index]
    if (!img || !img.complete || img.naturalWidth === 0) {
      ctx.fillStyle = "#202328"
      ctx.fillRect(0, 0, W, H)
      return
    }

    // Cover fill — maintain aspect, crop edges
    const ratio = Math.max(W / img.naturalWidth, H / img.naturalHeight)
    const dx    = (W - img.naturalWidth  * ratio) / 2
    const dy    = (H - img.naturalHeight * ratio) / 2

    ctx.clearRect(0, 0, W, H)
    ctx.drawImage(
      img,
      0, 0, img.naturalWidth, img.naturalHeight,
      dx, dy, img.naturalWidth * ratio, img.naturalHeight * ratio
    )
  }, [])

  // ── Smart preloading ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!hydrated || isMobile) return

    // Allocate array indexed by frame number (60..120)
    const images: (HTMLImageElement | null)[] = new Array(START_FRAME + 1).fill(null)
    imagesRef.current = images
    let destroyed = false

    const loadOne = (idx: number): Promise<void> =>
      new Promise((resolve) => {
        if (destroyed) return resolve()
        const img = new window.Image()
        img.decoding = "async"
        img.src      = frameUrl(idx)
        img.onload   = () => { if (!destroyed) images[idx] = img; resolve() }
        img.onerror  = () => resolve()
      })

    const run = async () => {
      // Phase 1 — Priority: frames 120 → 101 (first 20)
      const critical: Promise<void>[] = []
      for (let i = START_FRAME; i > START_FRAME - PRELOAD_PRIORITY; i--) {
        critical.push(loadOne(i))
      }
      await Promise.all(critical)
      if (destroyed) return

      // Force render of frame 0 of the sequence
      drawFrame(START_FRAME)

      // Phase 2 — Idle: frames 100 → 60
      const lazyLoad = async () => {
        for (let i = START_FRAME - PRELOAD_PRIORITY; i >= END_FRAME; i--) {
          if (destroyed) return
          await loadOne(i)
        }
      }

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => { if (!destroyed) lazyLoad() })
      } else {
        setTimeout(() => { if (!destroyed) lazyLoad() }, 600)
      }
    }

    run()

    return () => {
      destroyed = true
      // Release image references so GC can collect bitmaps
      images.fill(null)
      imagesRef.current = []
    }
  }, [hydrated, isMobile, drawFrame])

  // ── GSAP ScrollTrigger ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!hydrated || isMobile) return

    let gsap: typeof import("gsap")["default"]
    let ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"]

    const init = async () => {
      const gsapMod = await import("gsap")
      const stMod   = await import("gsap/ScrollTrigger")
      gsap          = gsapMod.default
      ScrollTrigger = stMod.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // ── Try to sync with Lenis if it is present ──────────────────────────
      // Lenis emits a scroll event on its instance; we proxy it to GSAP.
      // This is the safest way without coupling to Lenis internals.
      ScrollTrigger.defaults({ invalidateOnRefresh: true })

      const container = containerRef.current
      if (!container) return

      // Frame scrub (120 → 60)
      // scrub: 1.5 → GSAP will take 1.5 seconds to "catch up" to scroll,
      // giving cinematic inertia instead of mechanical 1:1 frame jumps.
      // onUpdate fires on GSAP's own ticker — do NOT wrap in requestAnimationFrame.
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end:   "bottom bottom",
        scrub: 1.5,
        onUpdate(self) {
          // Use Math.floor for smoother integer steps (avoids rounding bias)
          const offset     = Math.floor(self.progress * TOTAL_FRAMES)
          const frameIndex = Math.max(END_FRAME, Math.min(START_FRAME, START_FRAME - offset))
          drawFrame(frameIndex)   // call directly — no extra rAF wrapper
        },
      })
      stRef.current = st

      // Text timeline — scrub: 1.5 matches the frame scrub exactly
      // so text fades stay in perfect sync with the image sequence.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end:   "bottom bottom",
          scrub: 1.5,
        },
      })

      // Phase 1 — Intro LEFT: visible at 0, fades out over 0→30%
      tl.to(textIntroRef.current,
        { opacity: 0, y: -30, ease: "power1.in", duration: 28 }, 0)

      // Phase 2 — Mid RIGHT: slides in 30→45%, holds, slides out 55→70%
      tl.fromTo(textMidRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, ease: "power2.out", duration: 15 },
        28)
      tl.to(textMidRef.current,
        { opacity: 0, x: -50, ease: "power2.in", duration: 15 }, 55)

      // Phase 3 — Final LEFT: fades in 72→90%
      tl.fromTo(textFinalRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 22 },
        72)

      // Resize: invalidate canvas dimensions + force redraw
      const onResize = () => {
        currentFrame.current = -1
        ScrollTrigger.refresh()
      }
      window.addEventListener("resize", onResize, { passive: true })

      gsapCtxRef.current = gsap.context(() => {}, container)

      return () => {
        window.removeEventListener("resize", onResize)
      }
    }

    const cleanup = init()

    return () => {
      cleanup.then((fn) => fn?.())
      if (stRef.current)      stRef.current.kill()
      if (gsapCtxRef.current) gsapCtxRef.current.revert()
    }
  }, [hydrated, isMobile, drawFrame])

  const scrollToProjects = () => {
    document.getElementById("featured-projects")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  // ─── Mobile Fallback ──────────────────────────────────────────────────────
  if (hydrated && isMobile) {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pb-24">
        <div className="z-10 w-full max-w-sm text-center space-y-8">
          <div className="relative w-56 h-56 mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-6">
            <Image
              src="/assets/Giri1.jpg"
              alt="Giri N S"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Hi, I'm Giri.
            </h1>
            <p className="text-lg text-white/60 font-medium">
              I build performant systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-white text-black hover:bg-gray-100 font-semibold py-6 text-base w-full rounded-full transition-colors"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 text-white hover:bg-white/5 font-semibold py-6 text-base w-full rounded-full bg-transparent"
            >
              <Link href="/resume/Giri-Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // ─── Desktop Canvas Hero ──────────────────────────────────────────────────
  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "300vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas — full bleed */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* Text overlay grid */}
        <div className="absolute inset-0 pointer-events-none select-none">

          {/* ── PHASE 1: LEFT — "Hi, I'm Giri." ─────────────────────── */}
          <div
            ref={textIntroRef}
            className="absolute left-[6%] top-[45%] -translate-y-1/2 max-w-[40%]"
          >
            <h1 className="text-[clamp(3rem,6vw,7rem)] font-bold leading-none tracking-tight text-white drop-shadow-2xl">
              Hi,<br />I'm Giri.
            </h1>
            <p className="mt-5 text-lg text-white/50 font-medium tracking-widest uppercase">
              Scroll to explore
            </p>
          </div>

          {/* ── PHASE 2: RIGHT — "I value time." ────────────────────── */}
          <div
            ref={textMidRef}
            className="absolute right-[6%] top-[45%] -translate-y-1/2 max-w-[40%] text-right opacity-0"
          >
            <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-bold leading-none tracking-tight text-white drop-shadow-2xl">
              I value<br />time.
            </h2>
          </div>

          {/* ── PHASE 3: LEFT — "I build performant systems." ────────── */}
          <div
            ref={textFinalRef}
            className="absolute left-[6%] top-[33%] -translate-y-1/2 max-w-[45%] opacity-0 pointer-events-auto"
          >
            <h2 className="text-[clamp(2.5rem,4.5vw,5.5rem)] font-bold leading-tight tracking-tight text-white drop-shadow-2xl mb-10">
              I build<br />performant<br />systems.
            </h2>

            <div className="flex flex-row items-center gap-5">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-white text-black hover:bg-gray-100 hover:scale-[1.03] transition-all duration-300 font-semibold px-8 py-7 text-lg rounded-full shadow-xl"
              >
                View My Work
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-8 px-8 py-4 rounded-full border border-white/10 w-max"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
              {[
                { href: "https://github.com/girinataraj",          label: "GitHub"   },
                { href: "https://www.linkedin.com/in/giri765",     label: "LinkedIn" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center font-medium text-base hover:-translate-y-0.5 transform duration-200"
                >
                  {label}
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-40" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
