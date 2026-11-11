export const site = {
  name: "Giri N S",
  url: "https://portfolio-web-ochre-five.vercel.app",
  email: "girinataraj765@gmail.com",
  github: "https://github.com/girinataraj",
  linkedin: "https://www.linkedin.com/in/girins/",
  description:
    "Software developer and B.Tech IT student building thoughtful full-stack products, practical AI applications, and open-source improvements.",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  repo: string;
  problem: string;
  contribution: string;
  features: string[];
  boundary: string;
  diagram: string[];
  accent: "lime" | "sand" | "blue" | "lilac";
};

export const projects: Project[] = [
  {
    slug: "queueless-pulse",
    name: "QueueLess Pulse",
    category: "Full-stack application",
    summary:
      "A virtual queue system connecting customers, staff, business owners, and reception displays.",
    stack: ["React", "TypeScript", "Flask", "PostgreSQL"],
    repo: "https://github.com/girinataraj/QueueLess-Pulse",
    problem:
      "A queue is shared state. Customers need clear ticket progress while staff and owners need consistent, permission-aware controls across multiple services.",
    contribution:
      "Built role-specific React interfaces over Flask APIs, with tenant-scoped memberships and service assignments. PostgreSQL service-row locks serialize ticket issuance and queue actions to keep concurrent operations consistent.",
    features: [
      "QR entry and customer ticket tracking",
      "Staff call, complete, skip, and cancel workflows",
      "Owner management and reception displays",
      "Role checks, database constraints, and event history",
    ],
    boundary:
      "Development project with synthetic demonstration data. No claim of clinical readiness or production healthcare use. A hosted demo is not linked until its availability is verified.",
    diagram: [
      "Customer · Staff · Owner · Display",
      "React + TypeScript",
      "Flask API · scoped permissions",
      "PostgreSQL · serialized queue actions",
    ],
    accent: "lime",
  },
  {
    slug: "sacred-commerce",
    name: "Sacred Commerce",
    category: "Commerce & product design",
    summary:
      "An independent lifestyle storefront, from product discovery to a resilient guest cart and simulated checkout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    repo: "https://github.com/girinataraj/sacred-commerce",
    problem:
      "A storefront needs a coherent shopping journey, dependable cart behavior, and clear boundaries between an interactive demo and a real transaction.",
    contribution:
      "Developed product search, filters, sorting, and detail views alongside a browser-local guest cart with recovery behavior. Built persistent Light and Moonlight themes, keyboard navigation, and documented product trade-offs with regression suites.",
    features: [
      "Product browse, search, filters, and sorting",
      "Defensive cart persistence and recovery",
      "Validated simulated checkout",
      "Theme-aware components with Vitest and Playwright suites",
    ],
    boundary:
      "Fictional independent storefront. Simulated checkout only: no real payments, shipments, or durable hosted orders. Not affiliated with Isha Foundation or Isha Life. Hosted authentication and an AI shopping assistant are not presented as implemented features.",
    diagram: [
      "Browse · Search · Product detail",
      "Next.js + TypeScript",
      "Browser-local guest cart",
      "Validated simulated checkout",
    ],
    accent: "sand",
  },
  {
    slug: "closefuture-agent",
    name: "CloseFuture AI Assistant",
    category: "AI application · case study",
    summary:
      "A retrieval-driven assistant with source citations, specialized agents, and MCP tool integrations.",
    stack: ["React", "Node.js", "pgvector", "MCP"],
    repo: "https://github.com/girinataraj/closefuture-agent",
    problem:
      "A useful assistant must connect answers to evidence and coordinate actions without repeating side effects when a conversation resumes or a request is retried.",
    contribution:
      "Implemented retrieval with citations, intent routing, and specialized search, scheduling, and lead agents. Local stdio MCP servers connect tools, while session restoration and idempotency mechanisms guard against duplicate email dispatches.",
    features: [
      "Grounded retrieval and a no-answer fallback",
      "Search, scheduling, and lead routing",
      "Calendar and email tool integrations",
      "Session restoration and sanitized traces",
    ],
    boundary:
      "An independent case-study implementation, without implied employment by or endorsement from CloseFuture. External integrations require their own configuration; this portfolio does not call or depend on them.",
    diagram: [
      "Question + conversation context",
      "Intent routing · retrieval",
      "Cited answer or no-answer fallback",
      "MCP · calendar and lead tools",
    ],
    accent: "blue",
  },
  {
    slug: "resume-rag",
    name: "Resume RAG",
    category: "Applied AI · retrieval",
    summary:
      "A resume question-answering application using vector retrieval and context-constrained responses.",
    stack: ["React", "Python", "FastAPI", "LangChain", "ChromaDB"],
    repo: "https://github.com/girinataraj/Resume-RAG-Application",
    problem:
      "Resume questions should be answered using the document's content, with a clear response when the context does not contain the requested information.",
    contribution:
      "Connected a TypeScript React client to a Python FastAPI service. The LangChain pipeline retrieves the top three similar resume chunks from ChromaDB and supplies them as answer context.",
    features: [
      "React and TypeScript client",
      "FastAPI service and LangChain pipeline",
      "Similarity retrieval over resume chunks",
      "Explicit unavailable-information response",
    ],
    boundary:
      "Source-verified application. No live deployment or measured accuracy is claimed; context constraints do not guarantee hallucination prevention.",
    diagram: [
      "Resume question",
      "FastAPI + LangChain",
      "ChromaDB · top-three retrieval",
      "Context-constrained response",
    ],
    accent: "lilac",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "HTML & CSS"],
  },
  {
    title: "Interfaces",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Services & data",
    items: [
      "Node.js / Express",
      "Flask / FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: "AI & developer tools",
    items: [
      "RAG / LangChain",
      "pgvector / ChromaDB",
      "MCP",
      "Git / Docker",
      "Vitest / Playwright",
    ],
  },
];

export const contributions = [
  {
    name: "Silex",
    number: "#1935",
    date: "October 2026",
    title: "Make editor actions reflect storage capabilities.",
    description:
      "Fixed Sign out visibility when storage disables logout, including delayed and changing user state in the TypeScript / GrapesJS editor.",
    url: "https://github.com/silexlabs/Silex/pull/1935",
    language: "TypeScript",
  },
  {
    name: "Python-Markdown",
    number: "#1675",
    date: "October 2026",
    title: "Recognize more URL schemes in autolinks.",
    description:
      "Expanded autolink handling, including SSH and Git URLs with user information, with regression tests and documentation.",
    url: "https://github.com/Python-Markdown/markdown/pull/1675",
    language: "Python",
  },
];
