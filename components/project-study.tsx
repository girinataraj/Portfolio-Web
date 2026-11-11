"use client";
import { useId, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clampStep, storySteps } from "@/lib/story-model";

export function ProjectStudy({ slug }: { slug: string }) {
  const steps = storySteps(slug);
  const [selected, setSelected] = useState(0);
  const id = useId();
  const step = steps[selected];
  const company =
    slug === "saai-physiotherapy" || slug === "student-placement-system";
  return (
    <section className="project-study" aria-labelledby={`${id}-title`}>
      <div className="study-heading">
        <p className="eyebrow">Inside the system</p>
        <h2 id={`${id}-title`}>
          {company ? "Explore the product scope." : "Follow the thinking."}
        </h2>
        <p>
          {company
            ? "Original conceptual illustration of confirmed product-level functionality. Personal contributions are described separately above. "
            : "Explore a source-based interaction study. "}
          No live data, AI calls, or transactions.
        </p>
      </div>
      <div className="study-controls" aria-label="Story steps">
        {steps.map((item, index) => (
          <button
            key={item.state}
            type="button"
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="study-stage" aria-live="polite" aria-atomic="true">
        <div className="study-state">
          <span className="status-dot" />
          {step.state}
          <span>
            0{selected + 1} / 0{steps.length}
          </span>
        </div>
        <div className="pipeline" key={step.state}>
          <svg
            className="pipeline-path"
            viewBox="0 0 900 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M60 50H840" />
            <path className="flow-trace" d="M60 50H840" pathLength="1" />
          </svg>
          {step.nodes.map((node, index) => (
            <div className="pipeline-node" key={`${index}-${node}`}>
              <span>0{index + 1}</span>
              <strong>{node}</strong>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="study-explanation">
          <h3>{step.title}</h3>
          <p>{step.detail}</p>
        </div>
      </div>
      <div className="study-bottom">
        <p>
          {company
            ? "Conceptual product-level illustration"
            : "Illustration of documented behavior"}
        </p>
        <div>
          <button
            aria-label="Previous story step"
            disabled={selected === 0}
            onClick={() => setSelected(clampStep(selected - 1, steps.length))}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Next story step"
            disabled={selected === steps.length - 1}
            onClick={() => setSelected(clampStep(selected + 1, steps.length))}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <details className="study-transcript">
        <summary>Read the complete flow as text</summary>
        <ol>
          {steps.map((item) => (
            <li key={item.state}>
              <strong>
                {item.title} · {item.state}
              </strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}

export function QueueGallery() {
  const [view, setView] = useState<"customer" | "staff">("customer");
  return (
    <figure className="project-gallery">
      <div className="gallery-heading">
        <p className="eyebrow">The actual interface</p>
        <div className="gallery-controls" aria-label="Screenshot view">
          <button
            aria-pressed={view === "customer"}
            onClick={() => setView("customer")}
          >
            Customer
          </button>
          <button
            aria-pressed={view === "staff"}
            onClick={() => setView("staff")}
          >
            Staff
          </button>
        </div>
      </div>
      <picture>
        <source
          media="(max-width:760px)"
          width="390"
          height={view === "customer" ? 1203 : 1085}
          srcSet={
            view === "customer"
              ? "/projects/v2/queue-customer-mobile.webp"
              : "/projects/v2/queue-staff-mobile.webp"
          }
        />
        <img
          key={view}
          src={`/projects/v2/queue-${view}-desktop.webp`}
          srcSet={
            view === "customer"
              ? "/projects/v2/queue-customer-768.webp 768w, /projects/v2/queue-customer-desktop.webp 1366w"
              : "/projects/v2/queue-staff-640.webp 640w, /projects/v2/queue-staff-desktop.webp 1366w"
          }
          sizes="(max-width: 760px) 92vw, 65vw"
          width="1366"
          height={view === "customer" ? 1198 : 1067}
          loading="lazy"
          decoding="async"
          alt={
            view === "customer"
              ? "Original QueueLess customer interface showing service entry and ticket tracking"
              : "Original QueueLess staff interface showing queue management actions"
          }
        />
      </picture>
      <figcaption>
        Original development screenshot · synthetic demonstration data · from
        the project repository.
      </figcaption>
    </figure>
  );
}
