"use client";
import Link from "next/link";
import { useReducer, useState } from "react";
import {
  initialQueue,
  queueTransition,
  ticketLabel,
  retrieveEvidence,
} from "@/lib/lab-model";
export function QueueExperiment() {
  const [state, dispatch] = useReducer(
    queueTransition,
    undefined,
    initialQueue,
  );
  const called = state.tickets.find((t) => t.status === "CALLED");
  const waiting = state.tickets.filter((t) => t.status === "WAITING");
  return (
    <section className="experiment" aria-labelledby="queue-lab-title">
      <div className="experiment-heading">
        <p className="eyebrow">01 / STATE & CONCURRENCY</p>
        <span className="lab-badge">Browser local · synthetic</span>
      </div>
      <h2 id="queue-lab-title">One queue. One active ticket.</h2>
      <p className="experiment-intro">
        A real, interactive state model inspired by QueueLess Pulse. Issue
        tickets, call one, and explore terminal transitions. The original
        backend’s database locks and authorization are not reproduced here.
      </p>
      <div className="lab-toolbar">
        <button
          onClick={() => dispatch({ type: "add" })}
          disabled={state.tickets.length >= 12}
        >
          Issue ticket +
        </button>
        <button
          onClick={() => dispatch({ type: "call" })}
          disabled={!!called || !waiting.length}
        >
          Call next →
        </button>
        <button
          onClick={() => dispatch({ type: "complete" })}
          disabled={!called}
        >
          Complete ✓
        </button>
        <button onClick={() => dispatch({ type: "skip" })} disabled={!called}>
          Skip ↗
        </button>
        <button
          className="lab-reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      {state.tickets.length >= 12 && (
        <p className="lab-rule">
          This local experiment is limited to 12 tickets. Reset to begin another
          run.
        </p>
      )}
      <div className="queue-board">
        <div className="queue-lane">
          <p className="eyebrow">
            WAITING <span>{waiting.length}</span>
          </p>
          {waiting.map((t) => (
            <div key={t.id} className="lab-ticket">
              <strong>{ticketLabel(t.id)}</strong>
              <button
                aria-label={`Cancel waiting ticket ${ticketLabel(t.id)}`}
                onClick={() => dispatch({ type: "cancel", id: t.id })}
              >
                Cancel
              </button>
            </div>
          ))}
          {!waiting.length && <p className="empty-lane">No waiting tickets.</p>}
        </div>
        <div className="queue-lane active-lane">
          <p className="eyebrow">
            CALLED <span>{called ? "1" : "0"}</span>
          </p>
          <div className="active-ticket">
            <span className="ticket-orbit" aria-hidden="true" />
            <strong>{called ? ticketLabel(called.id) : "—"}</strong>
            <span>
              {called ? "Service in progress" : "Ready for the next ticket"}
            </span>
          </div>
          <p className="lab-rule">
            A second call is disabled while a ticket is active.
          </p>
        </div>
        <div className="queue-lane">
          <p className="eyebrow">TERMINAL STATES</p>
          {state.tickets
            .filter((t) => !["WAITING", "CALLED"].includes(t.status))
            .map((t) => (
              <div className="lab-ticket terminal-ticket" key={t.id}>
                <strong>{ticketLabel(t.id)}</strong>
                <span>{t.status}</span>
              </div>
            ))}
          {!state.tickets.some(
            (t) => !["WAITING", "CALLED"].includes(t.status),
          ) && (
            <p className="empty-lane">
              Complete, skip or cancel to see a terminal state.
            </p>
          )}
        </div>
      </div>
      <div className="experiment-log">
        <p className="eyebrow">EVENT HISTORY</p>
        <p aria-live="polite" aria-atomic="true">
          {state.events[0]}
        </p>
        <ol>
          {state.events.slice(1).map((event, i) => (
            <li key={`${event}-${i}`}>{event}</li>
          ))}
        </ol>
      </div>
      <Link href="/projects/queueless-pulse/" className="text-link">
        Read the original engineering case study ↗
      </Link>
    </section>
  );
}
export function RetrievalExperiment() {
  const [query, setQuery] = useState("cart recovery");
  const results = retrieveEvidence(query);
  return (
    <section className="experiment" aria-labelledby="retrieval-lab-title">
      <div className="experiment-heading">
        <p className="eyebrow">02 / EVIDENCE & RETRIEVAL</p>
        <span className="lab-badge">Synthetic corpus · no AI calls</span>
      </div>
      <h2 id="retrieval-lab-title">Watch context take shape.</h2>
      <p className="experiment-intro">
        Explore retrieval mechanics with three original project summaries. This
        small demonstration uses keyword overlap—not vector embeddings or an
        LLM. It retrieves passages rather than generating an answer.
      </p>
      <label className="retrieval-label" htmlFor="retrieval-query">
        Search this local corpus
      </label>
      <div className="retrieval-input">
        <span aria-hidden="true">⌕</span>
        <input
          id="retrieval-query"
          value={query}
          onChange={(e) => setQuery(e.target.value.slice(0, 160))}
          maxLength={160}
          placeholder="Try permissions, cart recovery, citations…"
          autoComplete="off"
        />
      </div>
      <div className="query-examples">
        {["permissions", "cart recovery", "citations", "volcanoes"].map((q) => (
          <button
            key={q}
            onClick={() => setQuery(q)}
            aria-pressed={q === query}
          >
            {q}
          </button>
        ))}
      </div>
      <p className="retrieval-status" aria-live="polite" aria-atomic="true">
        {results.length
          ? `${results.length} matching passage${results.length === 1 ? "" : "s"} in the local corpus.`
          : "No matching passage. This demonstration has no evidence for that query."}
      </p>
      <div className="retrieval-results">
        {results.map((r, i) => (
          <article key={r.id}>
            <span className="result-index">0{i + 1}</span>
            <div>
              <p className="eyebrow">{r.project}</p>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <div className="matched-terms">
                Matched words: {r.matches.join(" · ")}
              </div>
              <Link href={`/projects/${r.slug}/`} className="text-link">
                Inspect the source project ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="evidence-boundary">
        <span aria-hidden="true">◇</span>
        <p>
          Relevant context is a starting point, not a correctness guarantee.
          Real retrieval systems must also consider chunking, semantic
          similarity, source quality and insufficient evidence.
        </p>
      </div>
    </section>
  );
}
