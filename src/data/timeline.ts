export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  current?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    id: "halocity-aegis",
    period: "2026 · Finished",
    title: "KingdomHack & Nomba Infrastructure Hackathon",
    org: "Independent",
    description: "Built HaloCity — real-time three-role incident management system, reached Stage 3. Currently building AEGIS, a subscription billing engine for the Nomba API ecosystem.",
    current: true,
  },
  {
    id: "house56",
    period: "2025 – Present",
    title: "Backend Developer (Contract)",
    org: "House 56 Hotel",
    description: "Built a full hotel management system — 14+ REST endpoints covering reservations, guest management, ordering, and financial reconciliation. Replaced manual paper-based operations with a structured digital backend.",
    current: true,
  },
  {
    id: "techcrush",
    period: "2025",
    title: "Backend Engineering Trainee",
    org: "TechCrush",
    description: "Structured programme covering Node.js, Express, MongoDB, PostgreSQL, JWT auth, REST API design, and Swagger documentation. Delivered SplitSmart as capstone.",
  },
  {
    id: "instapay",
    period: "2025",
    title: "Backend Developer — WEMA Hackaholics Hackathon",
    org: "InstaPay",
    description: "Sole backend developer. Built shadow-balance middleware for NIBSS instant payments to solve trust/delay issues in Nigeria's payment rails.",
  },
  {
    id: "freelance",
    period: "2023 – 2024",
    title: "Freelance Automation Developer",
    org: "Independent Clients",
    description: "Built ExpenseParser for two clients — Python/Streamlit tools converting raw expense logs into structured, auditable Excel records. Eliminated manual bookkeeping entry.",
  },
  {
    id: "python-cert",
    period: "2024",
    title: "Python Programming Certificate",
    org: "New Horizons",
    description: "Certificate programme in Python fundamentals.",
  },
  {
    id: "unilag",
    period: "Expected 2028",
    title: "B.Sc. Data Science",
    org: "University of Lagos",
    description: "In progress — transitioning toward machine learning engineering.",
  },
];
