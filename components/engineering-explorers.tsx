"use client";
import { useState } from "react";
import Link from "next/link";
import { career, technologyGroups, processSteps } from "@/lib/engineering";
import { projects } from "@/lib/portfolio";
export function CareerTimeline() {
  const [active, setActive] = useState("igen");
  const item = career.find((c) => c.id === active)!;
  return (
    <section
      className="career-explorer"
      aria-label="Confirmed experience timeline"
    >
      <div className="career-track" role="group" aria-label="Select experience">
        {career.map((c, i) => (
          <button
            key={c.id}
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            <span className="track-dot" />
            <span className="eyebrow">
              0{i + 1} / {c.kind}
            </span>
            <strong>{c.organization}</strong>
            <span>{c.period}</span>
          </button>
        ))}
      </div>
      <article
        className="career-detail"
        key={item.id}
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="eyebrow">
          {item.kind} / {item.period}
        </p>
        <h2>{item.title}</h2>
        <h3>{item.organization}</h3>
        <p className="lead">{item.summary}</p>
        <ul className="detail-points">
          {item.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="inline-links">
          {item.links.map((l) => (
            <Link className="text-link" key={l.href} href={l.href}>
              {l.label} ↗
            </Link>
          ))}
        </div>
      </article>
      <details className="static-transcript">
        <summary>Read the complete confirmed timeline</summary>
        {career.map((c) => (
          <article key={c.id}>
            <h3>{c.organization}</h3>
            <p>
              {c.kind} · {c.period}
            </p>
            <p>{c.summary}</p>
          </article>
        ))}
      </details>
    </section>
  );
}
export function TechnologyLandscape({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [active, setActive] = useState("interfaces");
  const group = technologyGroups.find((g) => g.id === active)!;
  return (
    <section
      className={`technology-landscape${compact ? " compact-landscape" : ""}`}
      aria-label="Technologies connected to evidence"
    >
      <div
        className="technology-switches"
        role="group"
        aria-label="Technology disciplines"
      >
        {technologyGroups.map((g) => (
          <button
            key={g.id}
            aria-pressed={active === g.id}
            onClick={() => setActive(g.id)}
          >
            <span>{g.symbol}</span>
            {g.title}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="technology-detail" key={group.id}>
        <div className="technology-map" aria-hidden="true">
          <svg viewBox="0 0 600 240">
            <path d="M300 120 75 58M300 120 300 35M300 120 525 58M300 120 75 195M300 120 300 215M300 120 525 195" />
            {technologyGroups.map((g, i) => {
              const [x, y] = [
                [75, 58],
                [300, 35],
                [525, 58],
                [75, 195],
                [300, 215],
                [525, 195],
              ][i];
              return (
                <g key={g.id} className={g.id === active ? "tech-active" : ""}>
                  <circle cx={x} cy={y} r="13" />
                  <text x={x + 23} y={y + 4}>
                    {g.symbol}
                  </text>
                </g>
              );
            })}
            <circle className="technology-core" cx="300" cy="120" r="38" />
            <text
              className="technology-core-label"
              x="300"
              y="126"
              textAnchor="middle"
            >
              {group.symbol}
            </text>
          </svg>
        </div>
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{group.title}</p>
          <h2>{group.summary}</h2>
          <ul className="technology-tags">
            {group.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>{group.evidence}</p>
          <div className="technology-evidence">
            {group.projects.map((slug) => {
              const p = projects.find((p) => p.slug === slug)!;
              return (
                <Link href={`/projects/${slug}/`} key={slug}>
                  {p.name}
                  <span aria-hidden="true">↗</span>
                </Link>
              );
            })}
            {!group.projects.length && (
              <Link href="/">Explore this portfolio ↗</Link>
            )}
          </div>
        </div>
      </div>
      <noscript>
        <div className="noscript-landscape">
          {technologyGroups.map((g) => (
            <article key={g.id}>
              <h3>{g.title}</h3>
              <p>{g.technologies.join(" · ")}</p>
              <p>{g.evidence}</p>
            </article>
          ))}
        </div>
      </noscript>
    </section>
  );
}
export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];
  return (
    <section
      className="process-section container section"
      aria-labelledby="process-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>03 /</span> ENGINEERING IN PRACTICE
          </p>
          <h2 id="process-title">
            The work behind
            <br />
            <em>the interface.</em>
          </h2>
        </div>
        <p className="section-note">
          Four documented ideas.
          <br />
          Follow the evidence across projects.
        </p>
      </div>
      <div className="process-explorer">
        <div
          className="process-tabs"
          role="group"
          aria-label="Explore the development process"
        >
          {processSteps.map((s, i) => (
            <button
              key={s.label}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              {s.title}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div
          className="process-detail"
          key={step.label}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="process-number" aria-hidden="true">
            0{active + 1}
          </span>
          <p className="eyebrow">{step.label}</p>
          <h3>{step.note}</h3>
          <p>{step.text}</p>
          <Link
            className="text-link"
            href={step.project ? `/projects/${step.project}/` : "/open-source/"}
          >
            Inspect the evidence ↗
          </Link>
        </div>
        <details className="static-transcript">
          <summary>Read all four engineering ideas</summary>
          {processSteps.map((s) => (
            <article key={s.label}>
              <p className="eyebrow">{s.label}</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link
                className="text-link"
                href={s.project ? `/projects/${s.project}/` : "/open-source/"}
              >
                Inspect the evidence ↗
              </Link>
            </article>
          ))}
        </details>
      </div>
    </section>
  );
}
