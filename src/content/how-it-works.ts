import { Handshake, Hammer, Search, TrendingUp } from "lucide-react";

export const howItWorksSteps = [
  {
    Icon: Search,
    title: "Understand",
    text: "We map your operational context, constraints, and business outcomes before writing code.",
    outcome: "Result: shared direction before implementation begins.",
    badges: ["Discovery", "Constraints", "Business Goals"],
    tone: "pink" as const,
  },
  {
    Icon: Handshake,
    title: "Align",
    text: "We align architecture, scope, and delivery cadence with your teams and decision stakeholders.",
    outcome: "Result: fewer late surprises and tighter stakeholder alignment.",
    badges: ["Architecture", "Scope", "Cadence"],
    tone: "sky" as const,
  },
  {
    Icon: Hammer,
    title: "Build",
    text: "We deliver in structured increments, integrating with your ecosystem and validating quality continuously.",
    outcome: "Result: steady progress with visible quality gates.",
    badges: ["Iterations", "Integrations", "Quality"],
    tone: "emerald" as const,
  },
  {
    Icon: TrendingUp,
    title: "Evolve",
    text: "We optimize over time with measurable improvements in reliability, throughput, and maintainability.",
    outcome: "Result: long-term resilience and performance gains.",
    badges: ["Reliability", "Throughput", "Maintainability"],
    tone: "pink" as const,
  },
] as const;
