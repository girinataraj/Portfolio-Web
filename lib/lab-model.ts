export type Ticket = {
  id: number;
  status: "WAITING" | "CALLED" | "COMPLETED" | "SKIPPED" | "CANCELLED";
};
export type QueueState = {
  tickets: Ticket[];
  nextId: number;
  events: string[];
};
export type QueueAction =
  | { type: "add" | "call" | "complete" | "skip" | "reset" }
  | { type: "cancel"; id: number };
export const ticketLabel = (id: number) => `Q-${String(id).padStart(2, "0")}`;
export function initialQueue(): QueueState {
  return {
    tickets: [1, 2, 3].map((id) => ({ id, status: "WAITING" })),
    nextId: 4,
    events: ["Three synthetic tickets ready."],
  };
}
export function queueTransition(
  state: QueueState,
  action: QueueAction,
): QueueState {
  if (action.type === "reset") return initialQueue();
  const log = (tickets: Ticket[], event: string, nextId = state.nextId) => ({
    tickets,
    nextId,
    events: [event, ...state.events].slice(0, 5),
  });
  if (action.type === "add")
    return log(
      [...state.tickets, { id: state.nextId, status: "WAITING" }],
      `${ticketLabel(state.nextId)} issued.`,
      state.nextId + 1,
    );
  const called = state.tickets.find((t) => t.status === "CALLED");
  if (action.type === "call") {
    const waiting = state.tickets.find((t) => t.status === "WAITING");
    if (called || !waiting) return state;
    return log(
      state.tickets.map((t) =>
        t.id === waiting.id ? { ...t, status: "CALLED" } : t,
      ),
      `${ticketLabel(waiting.id)} called.`,
    );
  }
  if (action.type === "cancel") {
    if (
      !state.tickets.some((t) => t.id === action.id && t.status === "WAITING")
    )
      return state;
    return log(
      state.tickets.map((t) =>
        t.id === action.id ? { ...t, status: "CANCELLED" } : t,
      ),
      `${ticketLabel(action.id)} cancelled while waiting.`,
    );
  }
  if (!called) return state;
  const status = action.type === "complete" ? "COMPLETED" : "SKIPPED";
  return log(
    state.tickets.map((t) => (t.id === called.id ? { ...t, status } : t)),
    `${ticketLabel(called.id)} ${status.toLowerCase()}.`,
  );
}
export const evidenceCorpus = [
  {
    id: "queue",
    title: "Shared queue state",
    project: "QueueLess Pulse",
    slug: "queueless-pulse",
    text: "Queue tickets move from waiting to called and completed. Scoped permissions and PostgreSQL service-row locks keep concurrent queue actions consistent.",
  },
  {
    id: "commerce",
    title: "Resilient guest cart",
    project: "Sacred Commerce",
    slug: "sacred-commerce",
    text: "Browser-local cart persistence includes recovery behavior. Product search, filters and a simulated checkout form the shopping journey. No real payments are processed.",
  },
  {
    id: "retrieval",
    title: "Evidence before an answer",
    project: "CloseFuture AI Assistant",
    slug: "closefuture-agent",
    text: "Retrieval supplies context and citations. Specialized agents route search, scheduling and lead tasks through MCP tools. Insufficient evidence can produce a no-answer fallback.",
  },
];
export function retrieveEvidence(query: string) {
  const tokens = [...new Set(query.toLowerCase().match(/[a-z]{3,}/g) ?? [])];
  return evidenceCorpus
    .map((doc) => {
      const words = new Set(
        `${doc.title} ${doc.text}`.toLowerCase().match(/[a-z]{3,}/g) ?? [],
      );
      return { ...doc, matches: tokens.filter((token) => words.has(token)) };
    })
    .filter((doc) => doc.matches.length > 0)
    .sort((a, b) => b.matches.length - a.matches.length)
    .slice(0, 3);
}
