"use client"

import React, { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "text-white",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", ".NET Core", "RESTful APIs", "GraphQL", "Socket.io"],
      color: "text-white/90",
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "Mongoose", "Entity Framework"],
      color: "text-white/80",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "JWT", "Stripe", "Razorpay"],
      color: "text-white/70",
    },
  ]

  useGSAP(() => {
    // Elegant, Apple-style stagger fade-up on scroll
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    )

    // Stagger text header
    gsap.fromTo(
      ".section-header",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-5 lg:px-12 relative">
      <div className="max-w-6xl mx-auto relative divide-y divide-white/5">
        
        <div className="section-header text-center pb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
            Technical Arsenal
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium tracking-wide">
            Precision tools and modular frameworks engineered to orchestrate scalable, high-performance web systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/[0.08] pt-10 md:pt-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="skill-card bg-transparent border-none shadow-none rounded-none p-6 md:p-8 lg:p-12 transition-colors duration-500 hover:bg-white/[0.03]"
            >
              <CardContent className="p-0">
                <h3 className={`text-2xl font-bold mb-8 tracking-tight ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors duration-300 font-medium px-4 py-2 text-sm rounded-full cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
