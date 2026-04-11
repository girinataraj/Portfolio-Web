"use client"

import { useEffect, useRef } from "react"

export function ProjectsHero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
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

  return (
    <section className="pt-32 pb-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div ref={ref}>
          <p className="text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-6">
            Work
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight text-white mb-8">
            Selected<br />
            <span className="text-white/30">Projects.</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed max-w-xl font-medium">
            Full-stack applications built to ship — each one a real production problem solved.
          </p>
        </div>
      </div>
    </section>
  )
}
