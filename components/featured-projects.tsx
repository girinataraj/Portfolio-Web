"use client"

import React, { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/app/api/projects/route"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        const data = await response.json()
        setProjects(data.projects.filter((p: Project) => p.featured))
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useGSAP(() => {
    // Only animate if we have loaded the projects
    if (loading || projects.length === 0) return

    // Header animation
    gsap.fromTo(
      ".project-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    )

    // Staggered card animation
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    )
  }, { scope: containerRef, dependencies: [loading, projects.length] })

  if (loading) {
    return (
      <section id="featured-projects" className="py-20 md:py-32 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-pulse">
            <div className="h-10 w-64 bg-white/10 mx-auto rounded mb-4" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="bg-[#111] border-none animate-pulse h-[500px]">
                <div className="h-64 bg-white/5 rounded-t-lg" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} id="featured-projects" className="py-20 md:py-32 px-5 lg:px-12 relative">
      <div className="max-w-7xl mx-auto relative cursor-default">
        
        <div className="project-header text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
            Selected Works
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium tracking-wide">
            A showcase of precision-engineered applications blending robust backend architecture with flawless front-end execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20">
          {projects.map((project) => (
            <div key={project.id} className="project-card group shrink-0">
              <Card className="h-full overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] flex flex-col">
                <div className="relative h-48 md:h-72 overflow-hidden bg-black/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex flex-col flex-grow p-5 md:p-8">
                  <CardHeader className="p-0 pb-6">
                    <CardTitle className="text-xl md:text-3xl font-bold tracking-tight text-white mb-2 md:mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/60 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 flex flex-col flex-grow justify-end space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors duration-300 px-3 py-1 text-xs font-semibold rounded-full border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {project.liveUrl && (
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 rounded-full font-semibold px-4 md:px-6 py-4 md:py-6 text-sm md:text-base"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="bg-transparent border border-white/20 text-white hover:bg-white/5 hover:text-white transition-colors duration-300 rounded-full py-4 md:py-6 px-4 md:px-6 text-sm md:text-base"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="project-header text-center pt-8 border-t border-white/5">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="group text-white/80 hover:text-white hover:bg-white/5 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300"
          >
            <Link href="/projects">
              View Project Archive
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
