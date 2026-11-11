import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code as Github,
} from "lucide-react";
import { ExternalLink, ProjectVisual } from "@/components/portfolio";
import { projects, site } from "@/lib/portfolio";
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
  const project = projects.find((p) => p.slug === slug);
  return project
    ? pageMetadata(project.name, project.summary, `/projects/${project.slug}/`)
    : {};
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
  return (
    <article className="container case-study">
      <Link href="/projects/" className="text-link back-link">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="case-header">
        <p className="eyebrow">{project.category}</p>
        <h1>
          {project.name}
          <span className="accent">.</span>
        </h1>
        <p className="lead">{project.summary}</p>
        <ul className="tags">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ExternalLink href={project.repo} className="button primary">
          Explore the source <Github size={17} aria-hidden="true" />
        </ExternalLink>
      </header>
      <ProjectVisual project={project} large />
      <div className="case-content">
        <section>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>What needed solving.</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <p className="eyebrow">02 / ENGINEERING</p>
          <h2>How I approached it.</h2>
          <p>{project.contribution}</p>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <ArrowUpRight size={16} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
        {project.slug === "queueless-pulse" && (
          <figure className="case-screenshot">
            <img
              src="/projects/queue-customer.png"
              width="1366"
              height="768"
              loading="lazy"
              alt="QueueLess Pulse customer interface showing service entry and ticket controls"
            />
            <figcaption>
              Original customer interface · development screenshot from the
              repository.
            </figcaption>
          </figure>
        )}
        <section className="scope-note">
          <p className="eyebrow">03 / SCOPE & TRADE-OFFS</p>
          <h2>Clear boundaries.</h2>
          <p>{project.boundary}</p>
        </section>
        <section>
          <p className="eyebrow">04 / GO DEEPER</p>
          <h2>Read the implementation.</h2>
          <p>
            The repository contains the source and supporting context for this
            project.
          </p>
          <ExternalLink href={project.repo} className="text-link">
            View on GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        </section>
      </div>
      <div className="next-project">
        <div>
          <p className="eyebrow">NEXT PROJECT</p>
          <Link href={`/projects/${next.slug}/`}>
            {next.name}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <a href={`mailto:${site.email}`} className="text-link">
          Discuss my work <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
