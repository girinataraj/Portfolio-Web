"use client"

import { useRef, useEffect } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 – Present",
    description:
      "Building custom web applications for clients using MERN stack and .NET. Delivered production systems including TurfZone (live booking platform), gym management dashboards, and payment-integrated e-commerce solutions.",
    achievements: [
      "Built and deployed TurfZone.com — live production booking platform",
      "10+ full-stack applications shipped with 99% client satisfaction",
      "Real-time features via Socket.io and SignalR",
      "Integrated Stripe and Razorpay for e-commerce",
    ],
    stack: ["React", "Node.js", "MongoDB", ".NET Core", "TypeScript", "AWS"],
  },
  {
    title: "Web Developer",
    company: "Tech Solutions Inc.",
    location: "Erode, India",
    period: "2021 – 2022",
    description:
      "Worked on enterprise-level web applications in healthcare and finance domains. Focused on performance optimization and cross-team collaboration.",
    achievements: [
      "40% faster load times through app-level optimizations",
      "Mentored junior developers and led code reviews",
      "Automated testing strategies that improved code quality",
    ],
    stack: ["React", "Express.js", "SQL Server", "Azure", "Jest", "Docker"],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".exp-item")
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
            }, i * 100)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.05 }
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

        <p className="exp-item text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-12">
          Experience
        </p>

        <div className="space-y-0 divide-y divide-white/[0.06]">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item py-12 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-white/50 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-1.5 lg:items-end text-sm text-white/30 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed mb-6 max-w-3xl">{exp.description}</p>

              <ul className="space-y-2 mb-7">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/25 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium text-white/40 border border-white/[0.07] rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
