import Link from "next/link";
import {
  Hero,
  WorkSection,
  AboutSection,
  OpenSourceSection,
  ContactSection,
  SectionHeading,
} from "@/components/portfolio";
import {
  TechnologyLandscape,
  ProcessExplorer,
  CareerTimeline,
} from "@/components/engineering-explorers";
export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <section className="container section home-landscape">
        <SectionHeading
          number="02 /"
          label="Engineering capabilities"
          title="Keep the whole system in view."
        >
          <Link className="text-link" href="/technologies/">
            Explore technologies ↗
          </Link>
        </SectionHeading>
        <TechnologyLandscape compact />
      </section>
      <ProcessExplorer />
      <section className="container section" id="experience">
        <SectionHeading
          number="04 /"
          label="Experience & education"
          title="Software in real settings."
        >
          <Link href="/experience/" className="text-link">
            The complete timeline ↗
          </Link>
        </SectionHeading>
        <CareerTimeline />
      </section>
      <AboutSection />
      <div className="container">
        <section
          className="lab-invitation"
          aria-labelledby="lab-invitation-title"
        >
          <div>
            <p className="eyebrow">DEVELOPER LAB / PLAY WITH THE PRINCIPLES</p>
            <h2 id="lab-invitation-title">
              Don’t just read it.
              <br />
              <em>Change the state.</em>
            </h2>
            <p>
              Issue a synthetic queue ticket. Follow a transition. Search a
              small local evidence corpus. Two working experiments make the
              engineering visible.
            </p>
            <Link data-lumen-cue="lab" className="text-link" href="/lab/">
              Enter the developer lab ↗
            </Link>
          </div>
          <div className="lab-invitation-code" aria-hidden="true">
            <span>{"// browser-local state model"}</span>
            <p>
              WAITING <strong>→</strong> CALLED
            </p>
            <p>
              CALLED <strong>→</strong> COMPLETED
            </p>
            <span>{"// one active ticket at a time"}</span>
            <p>
              context <strong>→</strong> evidence
            </p>
          </div>
        </section>
      </div>
      <OpenSourceSection />
      <ContactSection />
    </>
  );
}
