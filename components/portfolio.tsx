import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Code as Github,
  GitMerge,
  Briefcase as Linkedin,
  Mail,
} from "lucide-react";
import {
  contributions,
  projects,
  site,
  skills,
  type Project,
} from "@/lib/portfolio";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual ${project.accent}${large ? " large" : ""}`}
      aria-label={`${project.name} architecture overview`}
    >
      <div className="visual-top">
        <span>
          <i />
          {project.slug === "queueless-pulse"
            ? "QUEUE / SYSTEM"
            : project.slug === "sacred-commerce"
              ? "SACRED / COMMERCE"
              : project.slug === "resume-rag"
                ? "RESUME / RETRIEVAL"
                : "CONTEXT / TO ACTION"}
        </span>
        <span>↗</span>
      </div>
      <div className="diagram">
        {project.diagram.map((step, i) => (
          <div className="diagram-step" key={step}>
            <span className="diagram-number">0{i + 1}</span>
            <span>{step}</span>
            {i === 0 && <span className="diagram-dot" />}
          </div>
        ))}
      </div>
      <p className="visual-caption">
        SYSTEM OVERVIEW <span>Architecture illustration</span>
      </p>
    </div>
  );
}
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}/`}
        className="visual-link"
        aria-label={`Explore ${project.name}`}
      >
        <ProjectVisual project={project} />
      </Link>
      <div className="project-meta">
        <span>
          0{index + 1} / {project.category}
        </span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <h3>
        <Link href={`/projects/${project.slug}/`}>{project.name}</Link>
      </h3>
      <p className="project-summary">{project.summary}</p>
      <ul className="tags" aria-label="Technologies">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link href={`/projects/${project.slug}/`} className="text-link">
        Explore the project <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
export function WorkSection({ all = false }: { all?: boolean }) {
  return (
    <section id="work" className="section container">
      {!all && (
        <SectionHeading
          number="01"
          label="Selected work"
          title="Built with purpose."
        >
          <Link className="text-link" href="/projects/">
            All projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </SectionHeading>
      )}
      <div className="project-grid">
        {(all ? projects : projects.slice(0, 3)).map((project, i) => (
          <ProjectCard project={project} index={i} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
export function AboutSection({ extended = false }: { extended?: boolean }) {
  return (
    <section id="about" className="section container about-section">
      <SectionHeading
        number="02"
        label="A little about me"
        title="Curious by nature. Builder by practice."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            I’m Giri, a software developer and Information Technology student at
            Nandha Engineering College, graduating in 2027.
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
          <Link
            href={extended ? "/projects/" : "/about/"}
            className="text-link"
          >
            {extended ? "Explore my work" : "More about me"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-aside">
          <p className="eyebrow">Currently exploring</p>
          <ul>
            <li>
              <span>01</span> Full-stack product engineering
            </li>
            <li>
              <span>02</span> Retrieval & tool-using AI
            </li>
            <li>
              <span>03</span> Open-source collaboration
            </li>
          </ul>
          <p className="location">
            <span className="status-dot" /> Erode, Tamil Nadu, India
          </p>
        </div>
      </div>
    </section>
  );
}
export function SkillsSection() {
  return (
    <section className="section container">
      <SectionHeading
        number="03"
        label="Technical toolkit"
        title="The tools behind the work."
      />
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className="skill-group">
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
        title="Learning in the real world."
      />
      <div className="timeline">
        <article className="timeline-row">
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
        <article className="timeline-row">
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
    <section id="open-source" className="section container">
      <SectionHeading
        number="05"
        label="Open source"
        title="Small changes. Shared progress."
      >
        <ExternalLink
          href={`${site.github}?tab=repositories`}
          className="text-link"
        >
          Find me on GitHub <Github size={16} aria-hidden="true" />
        </ExternalLink>
      </SectionHeading>
      <div className="contribution-grid">
        {contributions.map((pr) => (
          <article key={pr.url} className="contribution">
            <div className="contribution-top">
              <span>
                <GitMerge size={17} aria-hidden="true" />
                Merged
              </span>
              <span>{pr.date}</span>
            </div>
            <p className="repo-name">
              {pr.name} <span>{pr.number}</span>
            </p>
            <h3>{pr.title}</h3>
            <p>{pr.description}</p>
            <div className="contribution-bottom">
              <span>{pr.language}</span>
              <ExternalLink href={pr.url} className="text-link">
                View pull request <ArrowUpRight size={15} aria-hidden="true" />
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <p className="eyebrow">
        <span className="status-dot" /> Open to developer opportunities
      </p>
      <div className="contact-heading">
        <h2>
          Have something
          <br />
          in mind<span className="accent">?</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${site.email}`}
          aria-label="Email Giri N S"
        >
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          Let’s talk about software, useful ideas,
          <br className="desktop-break" /> and what we could build together.
        </p>
        <a className="email-link" href={`mailto:${site.email}`}>
          {site.email}
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <Link href="/" className="footer-name">
        Giri N S<span className="accent">.</span>
      </Link>
      <p>Thoughtfully built. Always learning.</p>
      <div>
        <ExternalLink href={site.github}>
          GitHub <Github size={14} aria-hidden="true" />
        </ExternalLink>
        <ExternalLink href={site.linkedin}>
          LinkedIn <Linkedin size={14} aria-hidden="true" />
        </ExternalLink>
        <a href="/resume/Giri-Resume.pdf" download>
          Resume <Download size={14} aria-hidden="true" />
        </a>
      </div>
      <a href="#top" className="back-top" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
}
export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow hero-intro">
          <span className="status-dot" /> SOFTWARE DEVELOPER · CLASS OF 2027
        </p>
        <p className="hero-name">Hi, I’m Giri N S.</p>
        <h1>
          Thoughtful code.
          <br />
          Useful <span className="serif-word">things.</span>
        </h1>
        <p className="hero-description">
          I build full-stack products and practical AI applications, with care
          for the experience and the engineering underneath.
        </p>
        <div className="hero-actions">
          <Link href="#work" className="button primary">
            Explore my work <ArrowDown size={17} aria-hidden="true" />
          </Link>
          <a
            href="/resume/Giri-Resume.pdf"
            className="button secondary"
            download
          >
            Resume <Download size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials">
          <ExternalLink href={site.github}>
            <Github size={16} aria-hidden="true" />
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={site.linkedin}>
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </ExternalLink>
          <a href={`mailto:${site.email}`} aria-label="Email Giri">
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img
            src="/assets/Giri1.jpg"
            alt="Portrait of Giri N S"
            width="1024"
            height="1024"
            fetchPriority="high"
          />
          <span className="portrait-corner top-left" />
          <span className="portrait-corner bottom-right" />
        </div>
        <div className="portrait-caption">
          <span>BASED IN ERODE, INDIA</span>
          <span>11.34° N / 77.73° E</span>
        </div>
        <div className="portrait-note">
          <span className="note-icon">
            <Check size={17} aria-hidden="true" />
          </span>
          <div>
            From idea to implementation.
            <span>Interfaces · APIs · Applied AI</span>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <p>
          Building at the intersection of <span>people & technology.</span>
        </p>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
