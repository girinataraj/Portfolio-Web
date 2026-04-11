"use client"

import { useRef, useEffect } from "react"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "XYZ University",
    location: "Erode, India",
    period: "2018 – 2022",
    grade: "8.5 CGPA",
    highlights: [
      "Dean's List for 3 consecutive semesters",
      "Led the Web Development Club",
      "Published research paper on web optimization",
    ],
  },
]

const certifications = [
  { name: "MongoDB Certified Developer",     issuer: "MongoDB University", year: "2023" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "React Developer Certification",   issuer: "Meta",               year: "2022" },
  { name: "Node.js Application Development", issuer: "IBM",                year: "2022" },
]

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".edu-item")
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
    <section ref={sectionRef} className="py-20 px-6 lg:px-16 border-t border-white/[0.06] pb-36">
      <div className="max-w-5xl mx-auto">

        <p className="edu-item text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-12">
          Education & Credentials
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education */}
          <div>
            <div className="edu-item flex items-center gap-2.5 mb-8">
              <GraduationCap className="h-4 w-4 text-white/30" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest">Education</h3>
            </div>

            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <h4 className="text-lg font-bold text-white mb-1 leading-snug">{edu.degree}</h4>
                <p className="text-white/50 font-medium mb-1">{edu.institution}</p>
                <p className="text-white/30 text-sm mb-1">{edu.location} · {edu.period}</p>
                <span className="inline-block text-[11px] font-semibold border border-white/10 rounded-full px-3 py-0.5 text-white/40 mb-5">
                  {edu.grade}
                </span>
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/40">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/25 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="edu-item flex items-center gap-2.5 mb-8">
              <Award className="h-4 w-4 text-white/30" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest">Certifications</h3>
            </div>

            <div className="edu-item space-y-0 divide-y divide-white/[0.06]">
              {certifications.map((cert, i) => (
                <div key={i} className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/80">{cert.name}</p>
                    <p className="text-xs text-white/35 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-white/25 font-medium shrink-0 mt-0.5">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
