import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SkillsSection } from "@/components/skills-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #202328 0%, #000000 100%)",
      }}
    >
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <CTASection />
    </div>
  )
}
