import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { evidenceCorpus } from "@/lib/lab-model";
import {
  QueueExperiment,
  RetrievalExperiment,
} from "@/components/developer-lab";
export const metadata = pageMetadata(
  "Developer Lab",
  "Two working browser-local experiments: queue state transitions and evidence retrieval. Clearly labeled synthetic demonstrations.",
  "/lab/",
);
export default function LabPage() {
  return (
    <div className="container lab-page">
      <header className="page-intro">
        <p className="eyebrow">DEVELOPER LAB / SMALL SYSTEMS, MADE VISIBLE</p>
        <h1>
          Touch the
          <br />
          <span className="serif-word">engineering.</span>
        </h1>
        <p>
          Two working experiments, distilled from documented project ideas.
          Change an input. Follow the state. Inspect the boundary.
        </p>
        <a className="text-link" href="#queue-lab-title">
          Enter the queue experiment ↓
        </a>
      </header>
      <noscript>
        <aside className="evidence-boundary">
          <div>
            <h2>This lab requires JavaScript for interaction.</h2>
            <p>
              The queue below is a static synthetic starting state. Search and
              ticket actions are unavailable. You can still read the complete
              project case studies and this local example corpus.
            </p>
            {evidenceCorpus.map((doc) => (
              <article key={doc.id}>
                <h3>{doc.title}</h3>
                <p>{doc.text}</p>
                <Link className="text-link" href={`/projects/${doc.slug}/`}>
                  Read {doc.project} ↗
                </Link>
              </article>
            ))}
          </div>
        </aside>
      </noscript>
      <QueueExperiment />
      <RetrievalExperiment />
    </div>
  );
}
