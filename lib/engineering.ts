export const career = [
  {
    id: "igen",
    period: "May–August 2026",
    kind: "Software Developer Intern",
    organization: "iGEN Services and Solutions",
    title: "Software used in real operations.",
    summary:
      "Contributed to SAAI’s clinic-management workflows and dashboard functionality, and placement tracking dashboard interfaces used to monitor students’ progress.",
    details: [
      "SAAI Physiotherapy is published on Google Play for authorized clinic staff.",
      "The Student Training & Placement system is live, private production software.",
      "Product-level functionality is distinct from the modules I personally contributed to.",
    ],
    links: [
      { label: "SAAI case study", href: "/projects/saai-physiotherapy/" },
      {
        label: "Placement case study",
        href: "/projects/student-placement-system/",
      },
    ],
  },
  {
    id: "ast",
    period: "20 June–5 July 2025",
    kind: "Internship",
    organization: "AST Technologies, Salem",
    title: "A responsive React dashboard.",
    summary:
      "Project: Responsive React Admin Dashboard for Railway Waiting Hall Billing System.",
    details: [
      "Verified internship dates: 20 June–5 July 2025.",
      "The confirmed project focus is a responsive React admin dashboard.",
      "Additional responsibilities and business outcomes are not claimed.",
    ],
    links: [],
  },
  {
    id: "education",
    period: "2023–2027 · Expected graduation 2027",
    kind: "Education",
    organization: "Nandha Engineering College, Erode",
    title: "B.Tech, Information Technology.",
    summary:
      "Undergraduate study alongside independent full-stack applications, practical AI work and open-source contributions.",
    details: [
      "B.Tech in Information Technology.",
      "Independent projects are presented as projects, not employment.",
      "Open-source contributions include merged TypeScript and Python fixes.",
    ],
    links: [
      { label: "Independent projects", href: "/projects/" },
      { label: "Open-source work", href: "/open-source/" },
    ],
  },
];
export const technologyGroups = [
  {
    id: "interfaces",
    title: "Interfaces",
    symbol: "01",
    summary:
      "Role-aware screens, responsive layouts and recoverable browser state.",
    technologies: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS"],
    projects: [
      "saai-physiotherapy",
      "student-placement-system",
      "queueless-pulse",
      "sacred-commerce",
    ],
    evidence:
      "React dashboards in the iGEN projects; role-specific queue interfaces; product discovery and guest-cart interaction in Sacred Commerce.",
  },
  {
    id: "backend",
    title: "Backend",
    symbol: "02",
    summary:
      "Connect interfaces to explicit service and permission boundaries.",
    technologies: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"],
    projects: [
      "saai-physiotherapy",
      "queueless-pulse",
      "closefuture-agent",
      "resume-rag",
    ],
    evidence:
      "Verified Node.js/Express work in SAAI; Flask services and scoped permissions in QueueLess; FastAPI in Resume RAG.",
  },
  {
    id: "data",
    title: "Data",
    symbol: "03",
    summary:
      "Shared state, persistence and retrieval each demand different models.",
    technologies: [
      "PostgreSQL",
      "SQL Server",
      "Prisma",
      "ChromaDB",
      "pgvector",
    ],
    projects: [
      "student-placement-system",
      "queueless-pulse",
      "sacred-commerce",
      "resume-rag",
      "closefuture-agent",
    ],
    evidence:
      "SQL Server is confirmed for the placement dashboard. Public projects document service-row locks, browser-local cart behavior and vector retrieval.",
  },
  {
    id: "intelligence",
    title: "Applied AI",
    symbol: "04",
    summary:
      "Retrieve context, cite evidence and keep tool execution within scope.",
    technologies: ["RAG", "LangChain", "MCP", "Context retrieval"],
    projects: ["closefuture-agent", "resume-rag"],
    evidence:
      "CloseFuture combines retrieval, citations and specialized tool routing. Resume RAG retrieves three resume chunks as answer context.",
  },
  {
    id: "tools",
    title: "Engineering tools",
    symbol: "05",
    summary:
      "Work in existing codebases and make changes that can be inspected.",
    technologies: ["Git", "Docker", "Vitest", "Playwright"],
    projects: ["queueless-pulse", "sacred-commerce", "closefuture-agent"],
    evidence:
      "Public repositories document implementation and verification. Sacred Commerce includes Vitest and Playwright suites; merged open-source PRs show changes and review context.",
  },
  {
    id: "delivery",
    title: "Delivery",
    symbol: "06",
    summary: "The interface includes everything around the interface.",
    technologies: [
      "Vercel",
      "Static export",
      "Metadata",
      "Accessibility",
      "Reduced motion",
    ],
    projects: [],
    evidence:
      "This portfolio uses a static Next.js build, separate preview deployment, route-specific metadata, keyboard controls and explicit motion preferences.",
  },
];
export const processSteps = [
  {
    title: "Understand the state",
    label: "CONTEXT",
    text: "QueueLess connects customers, staff, owners and displays. The engineering problem begins with several views of one shared queue.",
    project: "queueless-pulse",
    note: "Start with roles, state and the actions each role can take.",
  },
  {
    title: "Make the boundary explicit",
    label: "SCOPE",
    text: "Sacred Commerce deliberately separates an interactive shopping demonstration from real payments, shipments and durable hosted orders.",
    project: "sacred-commerce",
    note: "A clear boundary is part of the product experience.",
  },
  {
    title: "Build the connective tissue",
    label: "IMPLEMENTATION",
    text: "PostgreSQL service-row locks serialize QueueLess queue actions. Role-specific React interfaces sit above Flask APIs and permission checks.",
    project: "queueless-pulse",
    note: "The visible interface and the underlying state must agree.",
  },
  {
    title: "Leave evidence behind",
    label: "VERIFICATION",
    text: "Public code, documented trade-offs and regression tests make an implementation inspectable. The Python-Markdown contribution pairs a URL-handling fix with tests and documentation.",
    project: "",
    note: "Read the merged PR, not an invented outcome.",
  },
];
export const projectEvidence: Record<
  string,
  {
    status: string;
    decisions: { title: string; text: string }[];
    source: string;
    sourceLabel: string;
  }
> = {
  "queueless-pulse": {
    status: "Development project · public source",
    decisions: [
      {
        title: "Serialize shared queue actions",
        text: "Service-row locks in PostgreSQL serialize ticket issuance and queue actions. Tenant-scoped memberships and service assignments keep permissions tied to the appropriate business and service.",
      },
      {
        title: "Make role boundaries visible",
        text: "Customer, staff, owner and display interfaces expose different actions over the same queue. QR entry and event history are documented alongside the state transitions.",
      },
    ],
    source: "https://github.com/girinataraj/QueueLess-Pulse",
    sourceLabel: "Read the repository and implementation",
  },
  "sacred-commerce": {
    status: "Independent fictional storefront · simulated checkout",
    decisions: [
      {
        title: "Treat browser state defensively",
        text: "The guest cart is browser-local, with persistence and recovery behavior. This makes storage failures and recoverability part of the interface design.",
      },
      {
        title: "Keep the transaction boundary honest",
        text: "Checkout validates a simulated journey. Authentication/admin boundaries are explicit in demo mode; real payments, shipments and durable hosted orders are outside the implemented scope.",
      },
    ],
    source:
      "https://github.com/girinataraj/sacred-commerce/blob/main/docs/product-owner/case-study.md",
    sourceLabel: "Read the documented product case study",
  },
  "closefuture-agent": {
    status: "Independent case-study implementation · public source",
    decisions: [
      {
        title: "Separate intent from execution",
        text: "Specialized search, scheduling and lead agents work through intent routing and local stdio MCP tools. Retrieval provides cited context or a no-answer fallback.",
      },
      {
        title: "Consider retries and restored sessions",
        text: "Session restoration and claimed-state/idempotency mechanisms guard against duplicate email dispatches. External integrations require separate configuration and are not executed by this portfolio.",
      },
    ],
    source: "https://github.com/girinataraj/closefuture-agent",
    sourceLabel: "Read the architecture in the repository",
  },
  "resume-rag": {
    status: "Source-verified application · no live deployment claimed",
    decisions: [
      {
        title: "Keep retrieval concrete",
        text: "The FastAPI/LangChain pipeline retrieves the top three similar resume chunks from ChromaDB and supplies them as response context.",
      },
      {
        title: "Represent unavailable information",
        text: "The prompt constrains responses to context and includes an unavailable-information response. Context constraints alone do not guarantee correctness or hallucination prevention.",
      },
    ],
    source: "https://github.com/girinataraj/Resume-RAG-Application",
    sourceLabel: "Inspect the client and retrieval pipeline",
  },
  "saai-physiotherapy": {
    status: "Published on Google Play · Live production",
    decisions: [],
    source:
      "https://play.google.com/store/apps/details?id=com.saai.physiotherapy",
    sourceLabel: "View the official Google Play listing",
  },
  "student-placement-system": {
    status: "Live · Private Production",
    decisions: [],
    source: "",
    sourceLabel: "",
  },
};
