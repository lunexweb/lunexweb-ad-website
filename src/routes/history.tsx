import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { SIMULATIONS } from "@/lib/sim-data";
import { SimCard } from "./practice";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Simulation History — VoiceOffice" },
      {
        name: "description",
        content:
          "Every simulated sales call you've run, with deal-won or revenue-leaked outcomes and final yield per session.",
      },
      { property: "og:title", content: "Simulation History — VoiceOffice" },
      {
        property: "og:description",
        content: "Browse past mock calls and open their call intelligence reports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: History,
});

function History() {
  return (
    <AppShell
      title="Simulation History"
      subtitle={`${SIMULATIONS.length} recorded practice calls`}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {SIMULATIONS.map((s) => (
          <SimCard key={s.id} sim={s} />
        ))}
      </div>
    </AppShell>
  );
}
