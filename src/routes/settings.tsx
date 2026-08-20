import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — VoiceOffice" },
      {
        name: "description",
        content:
          "Configure simulation difficulty, default deal currency, coaching tone and your monthly practice minutes.",
      },
      { property: "og:title", content: "Settings — VoiceOffice" },
      {
        property: "og:description",
        content: "Tune your VoiceOffice simulator preferences and practice minute plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Settings,
});

const ROWS = [
  { label: "Default currency", value: "ZAR (R)" },
  { label: "Simulation difficulty", value: "Hard — pushback heavy" },
  { label: "Coach tone", value: "Direct, tactical" },
  { label: "Live hints during calls", value: "Off (locked)" },
  { label: "Monthly minutes", value: "30 mins" },
];

function Settings() {
  return (
    <AppShell title="Settings" subtitle="Simulator preferences and plan.">
      <div className="panel max-w-2xl divide-y divide-border">
        {ROWS.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="text-sm text-muted-foreground">{r.label}</span>
            <span className="text-sm font-medium">{r.value}</span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
