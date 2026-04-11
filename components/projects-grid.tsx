"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/app/api/projects/route"

// ─── Skeleton ────────────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-[#202328] p-8 space-y-4 animate-pulse">
          <div className="h-48 bg-white/[0.05] rounded-none" />
          <div className="h-5 bg-white/[0.05] rounded w-3/4" />
          <div className="h-3 bg-white/[0.04] rounded w-full" />
          <div className="h-3 bg-white/[0.04] rounded w-2/3" />
        </div>
      ))}
    </div>
  )
}

// ─── Category pill ────────────────────────────────────────────────────────────
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[12px] font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
        active
          ? "bg-white text-black border-white"
          : "border-white/[0.1] text-white/40 hover:text-white hover:border-white/30 bg-transparent"
      }`}
    >
      {label}
    </button>
  )
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-[#202328] hover:bg-white/[0.03] transition-colors duration-300 border border-white/[0.05] hover:border-white/[0.12]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-black/20">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202328] via-transparent to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase text-white/60 border border-white/10 rounded-full px-2.5 py-0.5 bg-black/30">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 pb-6">
        {/* Category */}
        <p className="text-[10px] font-semibold tracking-[0.18em] text-white/30 uppercase mb-3">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-5 line-clamp-3 flex-1">
          {project.longDescription || project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-white/35 border border-white/[0.07] rounded-full px-2.5 py-0.5 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-white/25 border border-white/[0.05] rounded-full px-2.5 py-0.5">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-white hover:text-white/70 transition-colors"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium text-white/35 hover:text-white transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main grid ─────────────────────────────────────────────────────────────────
export function ProjectsGrid() {
  const [projects, setProjects]               = useState<Project[]>([])
  const [loading, setLoading]                 = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.projects))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  // Animate cards in whenever filtered list changes
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".proj-card")
    if (!cards) return
    cards.forEach((card, i) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)"
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, i * 60)
    })
  }, [selectedCategory, loading])

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section className="pb-36 px-6 lg:px-16 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">

        {/* Filter */}
        <div className="flex flex-wrap gap-2 py-10">
          {categories.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
              {filtered.map((project) => (
                <div key={project.id} className="proj-card">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-white/30 text-sm font-medium">No projects in this category.</p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-24 pt-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Have a project in mind?</h3>
                <p className="text-white/40 text-sm">Let's build something great together.</p>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors shrink-0"
              >
                Get in touch
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
