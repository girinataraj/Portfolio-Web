"use client";
import { useState, type ReactNode } from "react";
const categories = [
  "All work",
  "Production software",
  "Independent systems",
  "Applied AI",
];
export function ProjectExplorer({
  entries,
  children,
}: {
  entries: { slug: string; category: string }[];
  children: ReactNode[];
}) {
  const [selected, setSelected] = useState("All work");
  const count =
    selected === "All work"
      ? entries.length
      : entries.filter((e) => e.category === selected).length;
  return (
    <>
      <div className="project-explorer-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={selected === c}
              onClick={() => setSelected(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite" aria-atomic="true">
          {count} project{count === 1 ? "" : "s"} in view
        </p>
      </div>
      <div className="project-grid project-archive">
        {entries.map((entry, i) => (
          <div
            className="project-slot"
            key={entry.slug}
            hidden={selected !== "All work" && selected !== entry.category}
          >
            {children[i]}
          </div>
        ))}
      </div>
    </>
  );
}
