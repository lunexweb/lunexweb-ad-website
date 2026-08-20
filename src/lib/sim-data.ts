export type Sim = {
  id: string;
  scenario: string;
  persona: string;
  status: "won" | "leaked";
  date: string;
  duration: string;
  target: number;
  final: number;
};

export const SIMULATIONS: Sim[] = [
  {
    id: "sim-8421",
    scenario: "Skeptical Enterprise Procurement",
    persona: "CFO-led buying committee",
    status: "won",
    date: "Aug 2, 2026",
    duration: "12m 40s",
    target: 50000,
    final: 47500,
  },
  {
    id: "sim-8419",
    scenario: "Price-Sensitive Agency Client",
    persona: "Owner-operator, 8 staff",
    status: "leaked",
    date: "Aug 1, 2026",
    duration: "09m 05s",
    target: 35000,
    final: 12250,
  },
  {
    id: "sim-8412",
    scenario: "Multi-Stakeholder SaaS Renewal",
    persona: "Ops lead + Finance",
    status: "won",
    date: "Jul 30, 2026",
    duration: "15m 22s",
    target: 80000,
    final: 80000,
  },
  {
    id: "sim-8407",
    scenario: "Cold Outbound Discovery",
    persona: "Distracted Sales Director",
    status: "leaked",
    date: "Jul 28, 2026",
    duration: "06m 51s",
    target: 25000,
    final: 8000,
  },
];

export const PERSONAS = [
  "Skeptical Enterprise Procurement",
  "Price-Sensitive Agency Client",
  "Multi-Stakeholder SaaS Renewal",
  "Distracted Sales Director",
  "Technical Evaluator (CTO)",
];

export const YIELDS = ["R25,000", "R35,000", "R50,000", "R80,000", "R120,000"];

export const rand = (n: number) => `R${n.toLocaleString("en-ZA")}`;
