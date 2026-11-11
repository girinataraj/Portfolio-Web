export type StoryStep = {
  title: string;
  state: string;
  detail: string;
  nodes: [string, string, string];
};
export function clampStep(index: number, length: number): number {
  return Number.isFinite(index) && length > 0
    ? Math.min(length - 1, Math.max(0, Math.floor(index)))
    : 0;
}
export function storySteps(kind: string): StoryStep[] {
  if (kind === "queueless-pulse")
    return [
      {
        title: "Join the queue",
        state: "WAITING",
        detail:
          "A customer enters through a QR flow. The service issues a waiting ticket; service-row locks serialize competing queue actions.",
        nodes: ["Customer", "Service lock", "WAITING"],
      },
      {
        title: "Call next",
        state: "CALLED",
        detail:
          "Staff call the next waiting ticket. A service cannot call another while it already has a CALLED ticket.",
        nodes: ["Staff action", "Role + service checks", "CALLED"],
      },
      {
        title: "Complete service",
        state: "COMPLETED",
        detail:
          "Staff complete the called ticket. The event history records the transition; skip and cancel are separate supported paths.",
        nodes: ["Staff action", "Event history", "COMPLETED"],
      },
    ];
  if (kind === "sacred-commerce")
    return [
      {
        title: "Discover",
        state: "DISCOVERY",
        detail:
          "The project supports product search, filtering, sorting, and product detail views. Original project artwork appears in this study.",
        nodes: ["Product collection", "Search + filters", "Product detail"],
      },
      {
        title: "Keep a cart",
        state: "CART",
        detail:
          "A browser-local guest cart persists selected items and recovers defensively from invalid stored state. This diagram does not place an order.",
        nodes: ["Guest selection", "Local persistence", "Recoverable cart"],
      },
      {
        title: "Make the boundary clear",
        state: "SIMULATION",
        detail:
          "Checkout is validated and simulated. No payment, shipment, hosted order, or authentication is performed in this portfolio study.",
        nodes: ["Cart", "Input validation", "Simulated checkout"],
      },
    ];
  if (kind === "resume-rag")
    return [
      {
        title: "Ask a question",
        state: "QUESTION",
        detail:
          "The React client sends a resume question to a FastAPI service. This is a source-based explanation, not a running AI endpoint.",
        nodes: ["Question", "FastAPI", "Resume context"],
      },
      {
        title: "Retrieve context",
        state: "RETRIEVAL",
        detail:
          "LangChain retrieves the top three similar resume chunks from ChromaDB for the response context.",
        nodes: ["Resume chunks", "ChromaDB", "Three relevant chunks"],
      },
      {
        title: "Answer within scope",
        state: "RESPONSE",
        detail:
          "The prompt constrains answers to retrieved context and includes an unavailable-information response. This does not guarantee hallucination prevention.",
        nodes: [
          "Retrieved context",
          "Constrained prompt",
          "Answer / unavailable",
        ],
      },
    ];
  return [
    {
      title: "Understand intent",
      state: "ROUTING",
      detail:
        "The case study routes a conversation toward specialized search, scheduling, or lead agents.",
      nodes: ["Conversation", "Intent routing", "Specialized agent"],
    },
    {
      title: "Ground the answer",
      state: "RETRIEVAL",
      detail:
        "Retrieval uses PostgreSQL and pgvector. Responses can cite sources or use a no-answer fallback when context is insufficient.",
      nodes: ["Knowledge sources", "Vector retrieval", "Cited context"],
    },
    {
      title: "Coordinate a tool",
      state: "TOOLS",
      detail:
        "Local stdio MCP tools connect calendar and lead workflows. Session restoration and idempotency guard against repeated side effects.",
      nodes: [
        "Agent decision",
        "MCP tool boundary",
        "Calendar / lead workflow",
      ],
    },
  ];
}
