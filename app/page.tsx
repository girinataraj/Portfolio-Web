import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Hero,
  OpenSourceSection,
  SkillsSection,
  WorkSection,
} from "@/components/portfolio";
export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <ContactSection />
    </>
  );
}
