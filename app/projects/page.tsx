import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsHero } from "@/components/projects-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Giri N S | MERN Stack Developer",
  description:
    "Explore my portfolio of full-stack web applications built with MERN stack, .NET, and modern technologies. Real-world projects showcasing innovative solutions.",
  keywords: ["Projects", "Portfolio", "MERN Stack", "Full Stack", "Web Development", "React", "Node.js"],
}

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #202328 0%, #111315 60%, #0A0A0A 100%)" }}
    >
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}
