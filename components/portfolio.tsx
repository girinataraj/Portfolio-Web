import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Code,
  GitMerge,
  Briefcase,
  LockKeyhole,
  Plus,
} from "lucide-react";
import {
  contributions,
  projects,
  site,
  skills,
  type Project,
} from "@/lib/portfolio";
import { SignalArt } from "./signal-art";
import { SignalField } from "./signal-field";
import { MotionToggle } from "./experience-motion";

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
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow">
          <span>{number}</span>
          {label}
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
  const slug = project.slug;
  return (
    <div className={`project-visual ${project.accent}${large ? " large" : ""}`}>
      {slug === "queueless-pulse" ? (
        <div className="queue-cover">
          <div className="cover-title">
            <span className="cover-kicker">A better way to wait</span>
            <strong>
              QueueLess<span>Pulse.</span>
            </strong>
          </div>
          <div className="queue-screens">
            <picture>
              <source
                media="(max-width:760px)"
                srcSet="/projects/v2/queue-customer-mobile.webp"
              />
              <img
                className="queue-screen-desktop"
                src="/projects/v2/queue-staff-desktop.webp"
                srcSet="/projects/v2/queue-staff-640.webp 640w, /projects/v2/queue-staff-desktop.webp 1366w"
                sizes="(max-width: 760px) 70vw, 60vw"
                alt="Original QueueLess development interface with synthetic demonstration data"
                width="1366"
                height="1067"
                loading={large ? "eager" : "lazy"}
                fetchPriority={large ? "high" : undefined}
                decoding="async"
              />
            </picture>
            <img
              className="queue-screen-mobile"
              src="/projects/v2/queue-customer-mobile.webp"
              srcSet="/projects/v2/queue-mobile-200.webp 200w, /projects/v2/queue-customer-mobile.webp 390w"
              sizes="(max-width: 760px) 22vw, 14vw"
              alt="QueueLess original customer ticket development screenshot"
              width="390"
              height="1203"
              loading={large ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
          <span className="cover-caption">
            Original development views · synthetic data
          </span>
        </div>
      ) : slug === "sacred-commerce" ? (
        <div className="commerce-cover">
          <img
            className="commerce-landscape"
            src="/projects/v2/sacred-stillness.webp"
            width="1200"
            height="750"
            loading={large ? "eager" : "lazy"}
            fetchPriority={large ? "high" : undefined}
            alt="Original Sacred Commerce indigo mountain illustration"
          />
          <div className="commerce-cover-title">
            <span>Independent lifestyle storefront</span>
            <strong>
              Sacred
              <br />
              <em>Commerce.</em>
            </strong>
          </div>
          <img
            className="commerce-product"
            src="/projects/v2/sacred-ceramic-bowl.webp"
            width="720"
            height="720"
            loading="lazy"
            alt="Handcrafted Ceramic Bowl, original project illustration"
          />
          <span className="cover-caption">
            Original project artwork · fictional storefront
          </span>
        </div>
      ) : slug === "saai-physiotherapy" ? (
        <div className="privacy-cover saai-cover">
          <div className="privacy-title">
            <span>Clinic workflows, thoughtfully connected.</span>
            <strong>
              SAAI<span>Physiotherapy</span>
            </strong>
          </div>
          <div className="care-symbol" aria-hidden="true">
            <svg viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="115" />
              <circle cx="150" cy="150" r="85" />
              <path d="M150 80V220M80 150H220" />
            </svg>
            <Plus size={80} />
          </div>
          <div className="privacy-caption">
            <LockKeyhole size={14} />
            <span>Authorized clinic staff</span>
            <span>Google Play ↗</span>
          </div>
          <span className="cover-caption">
            Original privacy-safe illustration · no patient data
          </span>
        </div>
      ) : slug === "student-placement-system" ? (
        <div className="privacy-cover placement-cover">
          <span className="cover-kicker">Training & placement</span>
          <strong>
            Building
            <br />
            <em>possibilities.</em>
          </strong>
          <div className="placement-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <LockKeyhole size={28} />
          </div>
          <div className="privacy-caption">
            <span>iGEN Services and Solutions</span>
            <span>Private production</span>
          </div>
          <span className="cover-caption">
            Conceptual illustration · no application screens
          </span>
        </div>
      ) : (
        <div className="ai-cover">
          <div className="cover-kicker">
            {slug === "resume-rag" ? "RESUME / RETRIEVAL" : "CONTEXT / ACTION"}
          </div>
          <strong>
            {slug === "resume-rag" ? (
              <>
                Grounded
                <br />
                <em>in context.</em>
              </>
            ) : (
              <>
                An answer.
                <br />
                <em>With a source.</em>
              </>
            )}
          </strong>
          <svg className="ai-map" viewBox="0 0 600 220" aria-hidden="true">
            <path d="M40 110H180Q220 110 220 70V40H390M220 110H460M220 110V180H390" />
            <circle cx="40" cy="110" r="14" />
            <circle cx="220" cy="110" r="23" />
            <circle cx="405" cy="40" r="9" />
            <circle cx="475" cy="110" r="9" />
            <circle cx="405" cy="180" r="9" />
            <text x="435" y="45">
              {slug === "resume-rag" ? "Chunks" : "Search"}
            </text>
            <text x="505" y="115">
              {slug === "resume-rag" ? "Context" : "Tools"}
            </text>
            <text x="435" y="185">
              {slug === "resume-rag" ? "Answer" : "Citations"}
            </text>
          </svg>
          <span className="cover-caption">
            Original architecture illustration · source-based
          </span>
        </div>
      )}
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
    <article className="project-card" data-reveal>
      <Link href={`/projects/${project.slug}/`} className="visual-link">
        <span className="sr-only">Explore {project.name}. </span>
        <ProjectVisual project={project} />
        <span className="project-open" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </Link>
      <div className="project-info">
        <div className="project-meta">
          <span>
            0{index + 1} / {project.category}
          </span>
          {project.status && (
            <span className="project-status">
              <i />
              {project.status}
            </span>
          )}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}/`}>{project.name}</Link>
        </h3>
        <p className="project-summary">{project.summary}</p>
        {project.organization && (
          <>
            <p className="project-organization">
              {project.organization} · Software Developer Intern
            </p>
            <p className="project-credit">
              <strong>My contribution</strong>
              {project.slug === "saai-physiotherapy"
                ? "Clinic-management workflows and dashboard functionality."
                : "Placement tracking dashboard interfaces for monitoring students’ progress."}
            </p>
          </>
        )}
        {project.stack.length > 0 && (
          <ul className="tags" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
        <Link href={`/projects/${project.slug}/`} className="text-link">
          Explore the case study <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        {project.publicUrl && (
          <ExternalLink
            href={project.publicUrl}
            className="text-link project-public"
          >
            {project.publicLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalLink>
        )}
        {project.repo && (
          <ExternalLink
            href={project.repo}
            className="text-link project-source"
          >
            Source on GitHub <Code size={16} aria-hidden="true" />
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
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
        <a href="#work" className="button button-primary">
          Explore Work <ArrowDown size={18} aria-hidden="true" />
        </a>
        <a href="#about" className="button button-text">
          About me <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
      <SignalField>
        <SignalArt />
      </SignalField>
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
            Serious about
            <br />
            the details.
            <br />
            <em>
              Curious about
              <br />
              everything.
            </em>
          </h2>
          <span className="about-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="about-copy" data-reveal>
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
      <div className="footer-signature container" aria-hidden="true">
        giri<span> / </span>ns
        <svg viewBox="0 0 100 100">
          <path d="M10 90L90 10M10 10H90V90" />
        </svg>
      </div>
    </footer>
  );
}
