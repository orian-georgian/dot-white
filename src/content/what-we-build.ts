import {
  Boxes,
  Cloud,
  Cpu,
  Database,
  Network,
  Workflow,
} from "lucide-react";

export const whatWeBuildBulletPoints = [
  {
    title: "Custom Enterprise Software",
    text: "Purpose-built systems designed around your business model, governance, and growth plans.",
  },
  {
    title: "Internal Tools for Operations",
    text: "Operational platforms that reduce friction across departments and improve execution quality.",
  },
  {
    title: "Platform Integrations",
    text: "Seamless integration with ecosystems like SharePoint, Salesforce, SAP, and adjacent tooling.",
  },
  {
    title: "High-Volume Workflow Handling",
    text: "Architectures engineered for throughput, reliability, and process consistency at scale.",
  },
] as const;

export const whatWeBuildNodePositions = [
  { left: "8%", top: "10%", Icon: Boxes, label: "SharePoint" },
  { left: "38%", top: "8%", Icon: Cloud, label: "Salesforce" },
  { left: "52%", top: "46%", Icon: Cpu, label: "Integration Hub" },
  { left: "92%", top: "62%", Icon: Database, label: "SAP" },
  { left: "88%", top: "16%", Icon: Network, label: "API Gateway" },
  { left: "14%", top: "52%", Icon: Workflow, label: "Workflow Engine" },
  { left: "60%", top: "90%", Icon: Boxes, label: "Internal Tools" },
] as const;
