"use client"

import { useEffect, useRef } from "react"

export function AboutHero() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    }, 100)
    return () => clearTimeout(t)
  }, [])

  const stats = [
    { value: "3+",  label: "Years building" },
    { value: "10+", label: "Projects shipped" },
    { value: "99%", label: "Client satisfaction" },
  ]

  return (
    <section className="pt-32 pb-20 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef}>
          {/* Label */}
          <p className="text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-6">
            About
          </p>

          {/* Headline */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight text-white mb-8">
            I build things<br />
            <span className="text-white/30">that matter.</span>
          </h1>

          {/* Bio */}
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-16 font-medium">
            Full-stack developer from Erode specializing in MERN stack and .NET.
            I care about clean code, performance, and products that actually ship.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 pt-10 border-t border-white/[0.07]">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl font-bold text-white tracking-tight">{value}</div>
                <div className="text-sm text-white/40 font-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
