import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code,
  LockKeyhole,
} from "lucide-react";
import { ExternalLink, ProjectVisual } from "@/components/portfolio";
import { ProjectStudy, QueueGallery } from "@/components/project-study";
import { projects, site } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? pageMetadata(p.name, p.summary, `/projects/${slug}/`) : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const company = !!project.organization;
  return (
    <article className={`case-study case-${project.accent}`}>
      <div className="container">
        <Link href="/projects/" className="text-link back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          All projects
        </Link>
        <header className="case-header">
          <div className="case-eyebrow">
            <p className="eyebrow">{project.category}</p>
            {project.status && (
              <p className="case-status">
                <span className="status-dot" />
                {project.status}
              </p>
            )}
          </div>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <div className="case-header-bottom">
            <p className="lead">{project.summary}</p>
            <div className="case-project-links">
              {project.publicUrl ? (
                <ExternalLink
                  href={project.publicUrl}
                  className="button primary"
                >
                  {project.publicLabel}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </ExternalLink>
              ) : project.repo ? (
                <ExternalLink href={project.repo} className="button primary">
                  Explore the source
                  <Code size={18} aria-hidden="true" />
                </ExternalLink>
              ) : (
                <span className="private-label">
                  <LockKeyhole size={17} aria-hidden="true" />
                  Private company project
                </span>
              )}
            </div>
          </div>
          <div className="case-facts">
            {project.organization && (
              <span>
                <small>Organization</small>
                {project.organization}
              </span>
            )}
            <span>
              <small>Focus</small>
              {project.category}
            </span>
            {project.stack.length > 0 && (
              <span>
                <small>Technologies</small>
                {project.stack.join(" · ")}
              </span>
            )}
          </div>
        </header>
        <ProjectVisual project={project} large />
      </div>
      <div className="container case-body">
        <aside className="case-index" aria-label="Case study sections">
          <p className="eyebrow">In this case study</p>
          <a href="#overview">01 / The context</a>
          <a href="#contribution">02 / My contribution</a>
          {!company && <a href="#interaction">03 / Inside the system</a>}
          <a href="#boundaries">{company ? "03" : "04"} / Scope & boundaries</a>
        </aside>
        <div className="case-content">
          <section id="overview" data-reveal>
            <p className="eyebrow">01 / The context</p>
            <h2>
              {company ? "Software in real use." : "A problem worth solving."}
            </h2>
            <p>{project.problem}</p>
          </section>
          <section id="contribution" data-reveal>
            <p className="eyebrow">02 / My contribution</p>
            <h2>
              {company ? "Where I contributed." : "The engineering underneath."}
            </h2>
            <p>{project.contribution}</p>
            <h3 className="capabilities-title">
              {company ? "Product-level functionality" : "Implemented features"}
            </h3>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <ArrowUpRight size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            {company && (
              <p className="scope-attribution">
                The contribution above describes my personal work. This feature
                list describes the broader product.
              </p>
            )}
          </section>
          {slug === "queueless-pulse" && <QueueGallery />}
          {slug === "sacred-commerce" && (
            <figure className="sacred-gallery" data-reveal>
              <div>
                <img
                  src="/projects/v2/sacred-cotton-stole.webp"
                  width="720"
                  height="720"
                  loading="lazy"
                  alt="Forest Cotton Stole, original Sacred Commerce product illustration"
                />
                <span>Forest Cotton Stole</span>
              </div>
              <div>
                <img
                  src="/projects/v2/sacred-ceramic-bowl.webp"
                  width="720"
                  height="720"
                  loading="lazy"
                  alt="Handcrafted Ceramic Bowl, original Sacred Commerce product illustration"
                />
                <span>Handcrafted Ceramic Bowl</span>
              </div>
              <figcaption>
                Original AI-assisted product illustrations from the project
                repository. These are fictional products and artwork, not
                product photographs.
              </figcaption>
            </figure>
          )}
          {!company && (
            <div id="interaction">
              <ProjectStudy slug={slug} />
            </div>
          )}
          <section className="scope-note" id="boundaries" data-reveal>
            <p className="eyebrow">
              {company ? "03" : "04"} / Scope & boundaries
            </p>
            <h2>
              {company
                ? "Built with discretion."
                : "An honest account of the scope."}
            </h2>
            <p>{project.boundary}</p>
          </section>
          {project.repo && (
            <section className="source-section" data-reveal>
              <h2>Read the implementation.</h2>
              <p>
                The repository contains the source and supporting context for
                this project.
              </p>
              <ExternalLink href={project.repo} className="text-link">
                View on GitHub
                <ArrowUpRight size={18} aria-hidden="true" />
              </ExternalLink>
            </section>
          )}
        </div>
      </div>
      <div className="container next-project">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <Link href={`/projects/${next.slug}/`}>
            {next.name}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <a className="text-link" href={`mailto:${site.email}`}>
          Discuss my work
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
