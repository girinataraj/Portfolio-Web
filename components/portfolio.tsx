import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Code,
  GitMerge,
  Briefcase,
} from "lucide-react";
import { contributions, projects, site, skills } from "@/lib/portfolio";
import { Lumen } from "./lumen";

import { ExternalLink, SectionHeading } from "./ui";
import { ProjectCard } from "./project-card";
import { MotionToggle } from "./experience-motion";

export function WorkSection({ all = false }: { all?: boolean }) {
  return (
    <section id="work" className="work-section">
      <div className="container">
        {!all && (
          <SectionHeading
            number="01"
            label="Selected work"
            title="Systems, made tangible."
          >
            <p className="section-note">
              Published products, private systems,
              <br />
              and independent explorations.
            </p>
          </SectionHeading>
        )}
        <div className="project-grid">
          {(all
            ? projects
            : [
                projects[2],
                projects[3],
                projects[0],
                projects[1],
                projects[4],
                projects[5],
              ]
          ).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        {!all && (
          <div className="work-outro">
            <span>
              Six projects. Published products, private systems and independent
              explorations.
            </span>
            <Link className="text-link" href="/projects/">
              All projects <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="headline-line">GIRI N S</span>
        </h1>
        <p className="hero-role">
          Software Developer<span>Full-stack &amp; Applied AI</span>
        </p>
        <div className="hero-intro">
          <p className="engineering-statement">
            Beyond the interface.
            <br />
            Connected underneath.
          </p>
        </div>
      </div>
      <div className="hero-actions" aria-label="Primary actions">
        <a href="#work" data-lumen-cue="work" className="button button-primary">
          Explore Work <ArrowDown size={18} aria-hidden="true" />
        </a>
        <a href="#about" data-lumen-cue="about" className="button button-text">
          About me <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
      <Lumen />
      <div className="hero-bottom">
        <p>
          FULL-STACK DEVELOPMENT <span>/</span> APPLIED AI <span>/</span> OPEN
          SOURCE
        </p>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function AboutSection({ extended = false }: { extended?: boolean }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-heading" data-reveal>
          <p className="eyebrow">
            <span>02</span>Behind the work
          </p>
          <h2>
            Interfaces.
            <br />
            Shared state.
            <br />
            <em>Evidence.</em>
          </h2>
          <span className="about-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="about-copy" data-reveal>
          <p className="lead">
            I’m Giri N S, a software developer and Information Technology
            student at Nandha Engineering College, graduating in 2027.
          </p>
          <p>
            I work across interfaces, APIs, and data, with a growing focus on
            practical AI applications. I like the parts of engineering where the
            details matter: shared state, clear permissions, dependable
            workflows, and answers backed by evidence.
          </p>
          {extended && (
            <p>
              My projects span virtual queues, commerce, and retrieval-based
              assistants. Open source gives me a place to work with existing
              codebases, handle edge cases, and make small changes that stand up
              to review.
            </p>
          )}
          <div className="about-interests">
            <span>Full-stack product engineering</span>
            <span>Retrieval & tool-using AI</span>
            <span>Open-source collaboration</span>
          </div>
          <Link
            className="text-link"
            href={extended ? "/projects/" : "/about/"}
          >
            {extended ? "Explore my work" : "More about me"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function SkillsSection() {
  return (
    <section className="section container toolkit-section">
      <SectionHeading
        number="03"
        label="Technical toolkit"
        title="Across the stack."
      />
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div className="skill-group" key={group.title} data-reveal>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ExperienceSection() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="04"
        label="Experience & education"
        title="Experience, in context."
      />
      <div className="timeline">
        <article className="timeline-row" data-reveal>
          <div className="timeline-date">MAY — AUG 2026</div>
          <div>
            <p className="eyebrow">Software Developer Intern</p>
            <h3>iGEN Services and Solutions</h3>
            <p>
              Contributed to SAAI’s clinic-management workflows and dashboard
              functionality, and to placement tracking dashboard interfaces for
              monitoring students’ placement progress.
            </p>
          </div>
          <span className="row-label">Industry experience</span>
        </article>
        <article className="timeline-row" data-reveal>
          <div className="timeline-date">
            20 JUN — 05 JUL 2025<span>Salem, India</span>
          </div>
          <div>
            <p className="eyebrow">Internship</p>
            <h3>AST Technologies</h3>
            <p>
              Project: Responsive React Admin Dashboard for Railway Waiting Hall
              Billing System.
            </p>
          </div>
          <span className="row-label">Industry experience</span>
        </article>
        <article className="timeline-row" data-reveal>
          <div className="timeline-date">
            2023 — 2027<span>Erode, India</span>
          </div>
          <div>
            <p className="eyebrow">Education · expected 2027</p>
            <h3>B.Tech, Information Technology</h3>
            <p>Nandha Engineering College</p>
          </div>
          <span className="row-label">Undergraduate</span>
        </article>
      </div>
    </section>
  );
}
export function OpenSourceSection() {
  return (
    <section id="open-source" className="section container open-source-section">
      <SectionHeading
        number="05"
        label="Open source"
        title="Small changes. Shared progress."
      >
        <ExternalLink
          href={`${site.github}?tab=repositories`}
          className="text-link"
        >
          Find me on GitHub <Code size={17} aria-hidden="true" />
        </ExternalLink>
      </SectionHeading>
      <div className="contribution-list">
        {contributions.map((pr) => (
          <article className="contribution" key={pr.url} data-reveal>
            <div className="contribution-identity">
              <span className="merge-badge">
                <GitMerge size={15} aria-hidden="true" />
                Merged
              </span>
              <h3>
                {pr.name}
                <span>{pr.number}</span>
              </h3>
              <p>
                {pr.language} · {pr.date}
              </p>
            </div>
            <div className="contribution-copy">
              <h4>{pr.title}</h4>
              <p>{pr.description}</p>
            </div>
            <ExternalLink href={pr.url} className="contribution-link">
              <span className="sr-only">
                View {pr.name} pull request {pr.number}
              </span>
              <ArrowUpRight size={26} aria-hidden="true" />
            </ExternalLink>
          </article>
        ))}
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="eyebrow">
          <span className="status-dot" />
          Open to developer opportunities
        </p>
        <div className="contact-heading" data-reveal>
          <h2>
            Let’s build
            <br />
            <em>what’s next.</em>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="contact-arrow"
            aria-label="Email Giri N S"
          >
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-bottom">
          <p>
            A role, a collaboration, a useful idea.
            <br />
            It starts with a conversation.
          </p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Link href="/" className="footer-name">
          Giri N S<span>.</span>
        </Link>
        <p>Software, with a point of view.</p>
        <div className="footer-links">
          <ExternalLink href={site.github}>
            GitHub <Code size={14} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={site.linkedin}>
            LinkedIn <Briefcase size={14} aria-hidden="true" />
          </ExternalLink>
          <a href="/resume/Giri-Resume.pdf" download>
            Resume <Download size={14} aria-hidden="true" />
          </a>
        </div>
        <MotionToggle />
        <a href="#top" className="back-top" aria-label="Back to top">
          ↑
        </a>
      </div>
      <p className="container resume-disclosure">
        Resume: existing PDF. The iGEN internship and projects are documented on
        this site and are not yet included in the PDF.
      </p>
      <nav
        className="footer-directory container"
        aria-label="Portfolio directory"
      >
        {[
          { label: "Projects", href: "/projects/" },
          { label: "About", href: "/about/" },
          { label: "Experience", href: "/experience/" },
          { label: "Technologies", href: "/technologies/" },
          { label: "Open source", href: "/open-source/" },
          { label: "Developer Lab", href: "/lab/" },
          { label: "Contact", href: "/contact/" },
        ].map((l) => (
          <Link href={l.href} key={l.href}>
            {l.label} <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
      <div className="footer-signature container" aria-hidden="true">
        giri<span> / </span>ns
        <svg viewBox="0 0 100 100">
          <path d="M10 90L90 10M10 10H90V90" />
        </svg>
      </div>
    </footer>
  );
}

export { ExternalLink, SectionHeading } from "./ui";
export { ProjectVisual, ProjectCard } from "./project-card";
