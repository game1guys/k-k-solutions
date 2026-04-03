/** Curated tools & platforms — AI-heavy where relevant. Used on /tools and referenced from home. */

export const toolCategories = [
  {
    name: "AI, LLMs & intelligent automation",
    blurb:
      "Modern product work increasingly includes models, evals, and guardrails — not a single “ChatGPT button.” We help you choose patterns that survive real traffic and compliance review.",
    items: [
      "OpenAI API (GPT-4 class models, assistants, structured outputs)",
      "Anthropic Claude · Amazon Bedrock · Azure OpenAI",
      "LangChain / LangGraph-style orchestration (when complexity warrants)",
      "Vector DBs: Pinecone, Weaviate, pgvector, Redis vector search",
      "Embeddings, reranking, hybrid search (keyword + semantic)",
      "Evaluation: prompt regression suites, offline eval sets, human review loops",
      "Guardrails: PII redaction, policy filters, jailbreak testing",
      "Observability: token/cost dashboards, latency SLOs, failure sampling",
    ],
  },
  {
    name: "Frontend & design-to-code",
    items: [
      "React 18+ · Next.js (App Router) · TypeScript",
      "Tailwind CSS · Radix UI / headless patterns",
      "Storybook for component documentation",
      "Figma → code workflows and design tokens",
      "Accessibility: WCAG-oriented patterns, axe, manual keyboard testing",
      "Core Web Vitals: image optimization, font loading, bundle analysis",
    ],
  },
  {
    name: "Backend, APIs & realtime",
    items: [
      "Node.js (Express/Fastify) · serverless functions",
      "REST & GraphQL · OpenAPI documentation",
      "PostgreSQL · Redis · message queues (SQS, Rabbit patterns)",
      "WebSockets / SSE for live dashboards and ops tools",
      "Auth: OAuth2/OIDC, JWT refresh, session hardening",
      "Idempotency, rate limits, and abuse protection for public APIs",
    ],
  },
  {
    name: "Mobile",
    items: [
      "React Native (new architecture where applicable)",
      "Flutter & Dart for expressive UI",
      "Push notifications · deep links · app links",
      "Offline sync patterns for field / technician apps",
      "Store release: Play Console & App Store Connect workflows",
    ],
  },
  {
    name: "Cloud, DevOps & quality",
    items: [
      "AWS · GCP · Vercel — fit-for-purpose hosting",
      "Docker · CI/CD (GitHub Actions, etc.)",
      "Infrastructure as code where teams benefit",
      "Secrets management · least-privilege IAM",
      "Testing: unit, integration, e2e (Playwright/Cypress) for critical paths",
      "Error tracking: Sentry or equivalent",
    ],
  },
  {
    name: "Data, analytics & experimentation",
    items: [
      "Google Analytics 4 · Tag Manager (server-side when needed)",
      "Product analytics: Mixpanel / Amplitude-style event models",
      "Warehouse patterns: BigQuery-ready exports when scale demands",
      "A/B testing and feature flags for safe rollouts",
      "Attribution models with honest limits documented for leadership",
    ],
  },
  {
    name: "Growth, SEO & paid media",
    items: [
      "Technical SEO audits · schema · sitemaps · internationalization",
      "Content clusters & editorial calendars tied to funnel stages",
      "Google Ads · Meta Ads — creative iteration with clear hypotheses",
      "Conversion tracking and offline conversion imports where applicable",
      "CRM hooks: HubSpot-style integrations, lead routing SLAs",
    ],
  },
  {
    name: "Crypto / fintech-adjacent (where relevant)",
    items: [
      "Wallet UX patterns · chain-agnostic product thinking",
      "KYC vendor integration patterns (vendor-specific)",
      "Admin, risk, and treasury dashboards — role separation",
      "High-readiness monitoring for trading-adjacent workloads",
    ],
  },
];

export const aiPrinciples = [
  {
    title: "Start from outcomes, not models",
    text: "We tie AI work to measurable tasks: support deflection, sales qualification, document extraction, or internal copilots — with baselines before models.",
  },
  {
    title: "Safety and privacy by design",
    text: "Data classification, retention, and regional constraints are mapped early — especially for health, finance, and education clients.",
  },
  {
    title: "Cost-aware architecture",
    text: "Caching, batching, smaller models for subtasks, and fallbacks when providers rate-limit — so bills do not surprise finance.",
  },
  {
    title: "Human-in-the-loop when stakes are high",
    text: "Escalation paths, review queues, and override rules — so automation helps operators instead of boxing them in.",
  },
];
