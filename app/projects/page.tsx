import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ProjectCard } from "@/components/project-card";
import { ProjectExplorer } from "@/components/project-explorer";
import { projects } from "@/lib/portfolio";
export const metadata: Metadata = pageMetadata(
  "Selected projects",
  "Explore Giri N S's full-stack and AI projects, engineering decisions, source code, and implementation boundaries.",
  "/projects/",
);
export default function ProjectsPage() {
  return (
    <>
      <div className="container page-intro">
        <p className="eyebrow">THE PROJECT ARCHIVE</p>
        <h1>
          Ideas into
          <br />
          <span className="serif-word">working software.</span>
        </h1>
        <p>
          Full-stack systems, thoughtful interfaces, and practical AI. A closer
          look at what I’ve built and the decisions behind it.
        </p>
      </div>
      <section className="container archive-section">
        <ProjectExplorer
          entries={projects.map((p) => ({
            slug: p.slug,
            category: p.organization
              ? "Production software"
              : ["closefuture-agent", "resume-rag"].includes(p.slug)
                ? "Applied AI"
                : "Independent systems",
          }))}
        >
          {projects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} index={index} />
          ))}
        </ProjectExplorer>
      </section>
    </>
  );
}
