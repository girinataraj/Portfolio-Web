"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/contact",  label: "Contact"  },
]

// ─────────────────────────────────────────────────────────────────────────────
export function Navigation() {
  const pathname  = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Refs for entrance animations
  const wordmarkRef = useRef<HTMLAnchorElement>(null)
  const pillRef     = useRef<HTMLDivElement>(null)
  const hireRef     = useRef<HTMLAnchorElement>(null)

  // Animate in after mount — staggered slide-up
  useEffect(() => {
    const els = [wordmarkRef.current, pillRef.current, hireRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity   = "0"
      el.style.transform = "translateY(20px)"
    })
    els.forEach((el, i) => {
      if (!el) return
      const delay = 300 + i * 80
      setTimeout(() => {
        el.style.transition = "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)"
        el.style.opacity    = "1"
        el.style.transform  = "translateY(0)"
      }, delay)
    })
  }, [])

  // Close mobile menu on navigation
  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <>
      {/* ── Bottom-left: Wordmark ─────────────────────────────────────── */}
      <Link
        ref={wordmarkRef}
        href="/"
        className="fixed bottom-6 left-6 z-50 select-none hidden sm:block"
        style={{ willChange: "transform" }}
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase hover:text-white/80 transition-colors duration-300">
          Giri N S
        </span>
      </Link>

      {/* ── Bottom-center: Floating pill nav (desktop) ────────────────── */}
      <div
        ref={pillRef}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex"
        style={{ willChange: "transform" }}
      >
        <nav
          className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/[0.1]"
          style={{
            background:       "rgba(45, 49, 54, 0.88)",
            backdropFilter:   "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 select-none",
                  active
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white hover:bg-white/[0.07]"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* ── Bottom-right: Hire Me button ──────────────────────────────── */}
      <Link
        ref={hireRef}
        href="/contact"
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden sm:flex items-center gap-2",
          "px-5 py-2.5 rounded-full text-[13px] font-semibold",
          "transition-all duration-300 group select-none",
          "bg-white text-black hover:bg-gray-100 hover:scale-[1.05] active:scale-[0.98]",
          // Subtle glow
          "shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_4px_24px_rgba(255,255,255,0.08)]",
          "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_6px_32px_rgba(255,255,255,0.15)]",
        )}
        style={{ willChange: "transform" }}
      >
        {/* Pulsing dot indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Hire Me
      </Link>

      {/* ── Mobile: Floating menu button + drawer ─────────────────────── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {/* Hire Me compact on mobile */}
        <Link
          href="/contact"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold bg-white text-black shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Hire Me
        </Link>

        {/* Hamburger pill */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:text-white transition-colors"
          style={{ background: "rgba(45, 49, 54, 0.92)", backdropFilter: "blur(20px)" }}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* ── Mobile drawer — slides up from bottom ─────────────────────── */}
      <div
        className={cn(
          "md:hidden fixed inset-x-4 z-40 rounded-2xl border border-white/[0.08] transition-all duration-300 ease-out overflow-hidden",
          isOpen
            ? "bottom-24 opacity-100 pointer-events-auto"
            : "bottom-16 opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(38, 42, 46, 0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="py-4 px-2">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-200",
                  active
                    ? "text-white bg-white/[0.08]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
