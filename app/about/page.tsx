import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Giri N S | MERN Stack Developer",
  description:
    "Learn more about Giri N S, a passionate MERN Stack and .NET developer with expertise in building scalable web applications and innovative solutions.",
  keywords: ["About", "MERN Stack Developer", "Full Stack", "Web Developer", "React", "Node.js", ".NET"],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutContent />
      <ExperienceSection />
      <EducationSection />
    </div>
  )
}
