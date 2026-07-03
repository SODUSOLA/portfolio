export type ProjectStatus = "live" | "in-progress" | "hackathon-build" | "demo-down";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  outcome: string;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  category: string[];
}

export const projects: Project[] = [
  {
    id: "halocity",
    title: "HaloCity",
    tagline: "Real-Time Incident Management System",
    problem: "Real-time incident reporting and escalation for a simulated city, coordinating three distinct roles — citizens, field mayors, and command center — on one live system.",
    role: "Full-stack. Designed the room-based WebSocket architecture (admin/zone/mayor/citizen channels), built the BullMQ escalation engine that auto-escalates unacknowledged incidents through tiered notifications, and the React/Leaflet frontend for live incident mapping.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.IO", "React", "TypeScript", "shadcn/ui", "Leaflet", "Recharts"],
    outcome: "Reached Stage 3 at KingdomHack. Fully working deploy.",
    status: "live",
    liveUrl: "https://halo-city.vercel.app/",
    githubUrl: "https://github.com/SODUSOLA/HaloCity",
    category: ["Full-Stack", "Real-Time", "Backend"],
  },
  {
    id: "aegis",
    title: "AEGIS",
    tagline: "Subscription Reliability Layer for Nomba",
    problem: "Subscription businesses building on Nomba have no billing layer between payment processing and recurring revenue logic — every merchant rebuilds plan management, dunning, and webhook reliability from scratch.",
    role: "Designing the full subscription lifecycle engine — plan management with prorated upgrades/downgrades, a state machine (trialing → active → past_due → suspended → cancelled), automated dunning/retry workflows, and HMAC-signed webhook delivery with exponential backoff. Multi-tenant merchant isolation via API key auth.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    outcome: "Built for the Nomba Infrastructure Hackathon. Backend actively in development.",
    status: "in-progress",
    githubUrl: "https://github.com/SODUSOLA/AEGIS",
    category: ["Backend", "Fintech", "Infrastructure"],
  },
  {
    id: "spendwise",
    title: "SpendWise",
    tagline: "Nigerian-First Personal Finance Tracker",
    problem: "Nigerians get bank SMS alerts on every transaction but have no automatic way to turn them into a real spending picture — leaving budgeting to spreadsheets or guesswork.",
    role: "Full-stack. Built SMS parsing/categorization pipeline across 7+ Nigerian banks, kobo-based integer money handling to eliminate float errors, savings-goal tracking with daily-target calculation, JWT + Google OAuth. Frontend dashboard with Recharts visualizations and a shareable WhatsApp summary card.",
    stack: ["React 19", "TypeScript", "Zustand", "TanStack Query", "Recharts", "Node.js", "Express 5", "PostgreSQL", "Prisma"],
    outcome: "Built for the 234 Hackathon. Fully functional — live demo currently down, repo and write-up available.",
    status: "demo-down",
    liveUrl: "https://spendwise-app-snowy.vercel.app/",
    githubUrl: "https://github.com/SODUSOLA/SpendWise",
    category: ["Full-Stack", "Fintech"],
  },
  {
    id: "scripta",
    title: "Scripta",
    tagline: "AI-Powered Social Media Publishing API",
    problem: "Creating and managing multi-platform social content requires juggling drafts, tone variations, and secure multi-device access — most tools handle publishing but not the generation and security layer underneath.",
    role: "Sole backend developer. Built device-verification login (email-code confirmation for new devices), trusted-session tracking, and an AI caching layer that cuts Gemini API costs by reusing near-duplicate generation requests. Designed the draft/regenerate system so users can reshape tone or target platform without re-prompting from scratch.",
    stack: ["Node.js", "Express 5", "PostgreSQL", "Prisma", "JWT", "Google Gemini AI", "Nodemailer"],
    outcome: "Fully documented via Swagger; core auth, session, and AI-generation systems complete — social publishing integrations scoped as next phase.",
    status: "in-progress",
    githubUrl: "https://github.com/SODUSOLA/Scripta",
    category: ["Backend", "AI"],
  },
  {
    id: "splitsmart",
    title: "SplitSmart",
    tagline: "Group Expense Splitter API",
    problem: "Splitting shared expenses across a group — trips, rent, events — usually means manual math and awkward reminders about who owes who.",
    role: "Sole backend developer, TechCrush capstone. Built the automatic settlement engine that computes exact debts across a group after every expense. JWT-protected group and expense endpoints with full member and payer tracking.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    outcome: "13-endpoint API, fully documented via Swagger UI with request/response formats and Bearer Token auth — evaluated on architecture and documentation quality as capstone project.",
    status: "live",
    githubUrl: "https://github.com/SODUSOLA/SplitSmart-Project",
    category: ["Backend", "API Design"],
  },
  {
    id: "myguestly-ai",
    title: "MyGuestly AI",
    tagline: "Event & Guest Management Backend",
    problem: "Event hosts need secure guest invitation, RSVP tracking, and gate verification that can't be gamed by duplicate check-ins or leaked sessions.",
    role: "Backend architecture. Built Redis-backed JWT auth with token blocklisting (logout that actually invalidates sessions), QR-based gate verification with anti-duplicate check-in protection, bulk guest invitation workflows, and structured Winston logging across auth, event, invitation, and queue layers.",
    stack: ["Node.js", "Express 5", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Winston", "Docker"],
    outcome: "Production-grade auth/security layer with Docker-based dev/deploy setup (API, worker, Postgres, Redis, Prisma Studio, NGINX).",
    status: "live",
    githubUrl: "https://github.com/SODUSOLA/Guestly-AI",
    category: ["Backend", "Systems"],
  },
  {
    id: "careercraft",
    title: "CareerCraft",
    tagline: "AI Career Intelligence API",
    problem: "Generic AI chatbots give shallow career advice — no structured comparison of options, no grounding in real salary or demand data.",
    role: "Sole backend developer. Built CareerCraft Query 2.0 — separates structured query-answering from open-ended contextual chat, so each interaction type gets a purpose-built response. Redis-backed chat sessions auto-expire after 10 minutes.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Google Gemini AI", "Redis", "Docker"],
    outcome: "Fully documented via Swagger, containerized with Docker, deployed on Render.",
    status: "live",
    githubUrl: "https://github.com/SODUSOLA/CareerCraft.git",
    category: ["Backend", "AI"],
  },
  {
    id: "instapay",
    title: "InstaPay",
    tagline: "Shadow Balance for NIP Payments",
    problem: "NIBSS instant transfers sometimes leave the sender's account without reflecting instantly on the receiver's side due to core banking lag — causing panic and repeat transfers that erode trust in digital payments.",
    role: "Sole backend developer, WEMA Hackaholics Hackathon. Built middleware sitting between NIBSS and core banking — ingesting live transaction events, detecting delay patterns, and issuing provisional shadow credits so transfers feel instant.",
    stack: ["FastAPI", "Python", "PostgreSQL (Neon)", "Event-driven architecture"],
    outcome: "Hackathon build — architecture and core middleware logic complete, not finalized since.",
    status: "hackathon-build",
    githubUrl: "https://github.com/SODUSOLA/InstaPay.git",
    category: ["Backend", "Fintech", "Hackathon Build"],
  },
];
