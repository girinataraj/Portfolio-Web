import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  OpenSourceSection,
  SkillsSection,
} from "@/components/portfolio";
export const metadata: Metadata = pageMetadata(
  "About",
  "Meet Giri N S, B.Tech IT student at Nandha Engineering College, graduating in 2027. Explore his engineering interests, internship, and open-source work.",
  "/about/",
);
export default function AboutPage() {
  return (
    <>
      <div className="container page-intro">
        <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
        <h1>
          Always curious.
          <br />
          <span className="serif-word">Always building.</span>
        </h1>
        <p>
          I’m Giri N S, an early-career developer interested in the full path
          from a useful idea to dependable software.
        </p>
      </div>
      <AboutSection extended />
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <ContactSection />
    </>
  );
}
