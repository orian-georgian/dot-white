export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  avatar: "male" | "female";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "dotWhite brought structure to a highly complex integration program. Delivery became predictable without slowing us down.",
    name: "Andrei Popescu",
    company: "Operations Director, Nordic Logistics Group",
    avatar: "male",
  },
  {
    quote:
      "They were clear, practical, and accountable from day one. Our internal teams trusted the process quickly.",
    name: "Marta Keller",
    company: "Head of Digital Platforms, FinCore Europe",
    avatar: "female",
  },
  {
    quote:
      "What stood out was calm execution under pressure. The platform now scales with our workflows, not against them.",
    name: "Lukas Marin",
    company: "CTO, Meridian Services",
    avatar: "male",
  },
  {
    quote:
      "The team translated business complexity into a clear delivery plan. Stakeholder confidence improved almost immediately.",
    name: "Elena Varga",
    company: "Program Lead, Atlas Manufacturing",
    avatar: "female",
  },
  {
    quote:
      "Integration quality and documentation were consistently strong. We reduced handover friction across departments.",
    name: "Mihai Ionescu",
    company: "IT Manager, Verdan Utilities",
    avatar: "male",
  },
  {
    quote:
      "They brought calm decision-making to a fast-moving roadmap. The outcomes were practical and measurable.",
    name: "Sophie Brandt",
    company: "Head of Product Operations, NovaCare Systems",
    avatar: "female",
  },
  {
    quote:
      "dotWhite handled evolving requirements without losing quality. The collaboration felt structured and dependable.",
    name: "Radu Stoica",
    company: "Delivery Director, Helix Commerce",
    avatar: "male",
  },
  {
    quote:
      "Their engineers worked like an extension of our core team. Communication stayed clear even during critical releases.",
    name: "Klara Neumann",
    company: "Engineering Manager, Elevate Mobility",
    avatar: "female",
  },
];
