import Link from "next/link";
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
          Giri N S.
          <br />
          <span className="serif-word">Software Developer.</span>
        </h1>
        <p>
          I’m Giri N S, an early-career developer interested in the full path
          from a useful idea to dependable software.
        </p>
      </div>
      <AboutSection extended />
      <section className="container source-context section">
        <article>
          <p className="eyebrow">A THREAD THROUGH THE WORK / SHARED STATE</p>
          <h2>
            Different screens.
            <br />
            One underlying truth.
          </h2>
          <p>
            QueueLess exposes a queue to customers, staff, owners and reception
            displays. The placement dashboard presents progress within a private
            operational system. Both make the relationship between interface and
            state concrete.
          </p>
          <Link className="text-link" href="/projects/queueless-pulse/">
            Explore the queue system ↗
          </Link>
        </article>
        <article>
          <p className="eyebrow">A THREAD THROUGH THE WORK / EVIDENCE</p>
          <h2>
            Context before
            <br />a confident answer.
          </h2>
          <p>
            Resume RAG and the CloseFuture case study explore retrieval, context
            and tool boundaries. The lab makes a small part of that reasoning
            interactive, with an honestly limited local corpus.
          </p>
          <Link className="text-link" href="/lab/">
            Explore the retrieval experiment ↗
          </Link>
        </article>
      </section>
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <ContactSection />
    </>
  );
}
