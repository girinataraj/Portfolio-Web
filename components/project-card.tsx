import Link from "next/link";
import { projectEvidence } from "@/lib/engineering";
import { ArrowUpRight, Code, LockKeyhole, Plus } from "lucide-react";
import { type Project } from "@/lib/portfolio";
import { ExternalLink } from "./ui";
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
    <article className={`project-card card-${project.slug}`} data-reveal>
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
          {(project.status || projectEvidence[project.slug]?.status) && (
            <span className="project-status">
              <i />
              {project.status || projectEvidence[project.slug]?.status}
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
