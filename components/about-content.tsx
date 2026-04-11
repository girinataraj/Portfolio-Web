"use client"

import { useRef, useEffect } from "react"
import { Code, Database, Globe, Zap } from "lucide-react"

const expertise = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET Core", "REST / GraphQL"],
  },
  {
    icon: Globe,
    title: "Databases",
    skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis"],
  },
  {
    icon: Zap,
    title: "DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD & Vercel"],
  },
]

export function AboutContent() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".about-item")
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            setTimeout(() => {
              el.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)"
              el.style.opacity = "1"
              el.style.transform = "translateY(0)"
            }, i * 80)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    items.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(24px)"
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-16 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="about-item text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-12">
          Expertise
        </p>

        {/* 2-column expertise grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
          {expertise.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="about-item group bg-[#202328] hover:bg-white/[0.03] transition-colors duration-300 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className="h-4 w-4 text-white/30" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white tracking-wide">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] text-white/50 border border-white/[0.08] rounded-full px-3 py-1 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="about-item mt-20 border-l-2 border-white/10 pl-8">
          <p className="text-2xl text-white/50 leading-relaxed font-medium italic max-w-3xl">
            "Great software is not just about writing code — it's about understanding problems,
            shipping fast, and building things that last."
          </p>
        </div>
      </div>
    </section>
  )
}
