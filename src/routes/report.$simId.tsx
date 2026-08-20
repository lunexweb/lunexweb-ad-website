import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Play,
  MessageSquare,
  Send,
  Target,
  TrendingDown,
  Wallet,
  X,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SIMULATIONS, rand } from "@/lib/sim-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/report/$simId")({
  head: () => ({
    meta: [
      { title: "Call Intelligence Report — VoiceOffice" },
      {
        name: "description",
        content:
          "Deal target vs leakage vs final yield, pacing metrics, timeline event markers and an AI sales coach for every simulated call.",
      },
      { property: "og:title", content: "Call Intelligence Report — VoiceOffice" },
      {
        property: "og:description",
        content: "Review yield, pacing and confidence analytics from your sales simulation.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Report,
});

const METRICS = [
  { label: "Talk-to-Listen Ratio", value: "58 / 42", note: "Target ≤ 45%", tone: "opportunity" },
  { label: "Longest Monologue", value: "1m 52s", note: "3 over 60s", tone: "leak" },
  { label: "Objection Pause", value: "0.6s", note: "Too fast", tone: "leak" },
  { label: "Question Density", value: "14 / 10m", note: "Strong", tone: "win" },
  { label: "Value Built", value: "72%", note: "+9 vs last", tone: "win" },
  { label: "Confidence Score", value: "81", note: "Dipped at 07:20", tone: "opportunity" },
] as const;

const MARKERS = [
  { at: 12, type: "win", label: "Discovery hook landed" },
  { at: 31, type: "leak", label: "Discount offered unprompted" },
  { at: 46, type: "win", label: "ROI framing accepted" },
  { at: 63, type: "leak", label: "Confidence drop on pricing" },
  { at: 84, type: "win", label: "Next step locked" },
] as const;

const BARS = Array.from({ length: 88 }, (_, i) =>
  Math.round(24 + Math.abs(Math.sin(i * 0.55) * 46) + ((i * 37) % 19)),
);

const CHAT = [
  {
    role: "coach" as const,
    text: "At 05:12 you offered 15% off before the prospect anchored a number. That single move accounts for R2,500 of leakage.",
  },
  {
    role: "user" as const,
    text: "What should I have said instead?",
  },
  {
    role: "coach" as const,
    text: '"Before we talk price, help me understand what budget range this sits in for you." Then stay silent for 3 seconds. Your objection pause averaged 0.6s — hold it longer at 05:12 and 07:20.',
  },
];

function Report() {
  const { simId } = Route.useParams();
  const sim = SIMULATIONS.find((s) => s.id === simId) ?? SIMULATIONS[0]!;
  const leak = sim.target - sim.final;
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <AppShell
      title="Call Intelligence Report"
      subtitle={`${sim.scenario} · ${sim.date} · ${sim.duration}`}
      actions={
        <>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Lobby
          </Link>
          <button
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <MessageSquare className="size-4" /> Ask AI Coach
          </button>
        </>
      }
    >
      <div className={cn("transition-[padding] duration-300", chatOpen && "xl:pr-[404px]")}>
        <section className="grid gap-5 lg:grid-cols-[1fr_1.35fr]">
          <div className="panel p-6">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Expected Yield Output
            </p>
            <p className={cn("num mt-3 text-4xl font-semibold", sim.status === "won" ? "text-win" : "text-leak")}>
              {rand(sim.final)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Final yield captured</p>

            <div className="mt-6 flex h-2.5 overflow-hidden rounded-full bg-background">
              <div
                className="h-full bg-win"
                style={{ width: `${(sim.final / sim.target) * 100}%` }}
              />
              <div className="h-full flex-1 bg-leak/70" />
            </div>

            <div className="mt-6 space-y-3">
              <YieldRow icon={Target} label="Deal target" value={rand(sim.target)} tone="muted" />
              <YieldRow icon={TrendingDown} label="Revenue leakage" value={`- ${rand(leak)}`} tone="leak" />
              <YieldRow icon={Wallet} label="Final yield" value={rand(sim.final)} tone="win" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="panel p-4">
                <p className="text-[11px] leading-tight text-muted-foreground">{m.label}</p>
                <p className="num mt-2.5 text-xl font-semibold">{m.value}</p>
                <p
                  className={cn(
                    "mt-1 text-[11px] font-medium",
                    m.tone === "win" && "text-win",
                    m.tone === "leak" && "text-leak",
                    m.tone === "opportunity" && "text-opportunity",
                  )}
                >
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel mt-5 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold">Call Playback</h3>
              <p className="text-xs text-muted-foreground">
                Markers flag wins and leaks on the timeline.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-win" /> Win
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-leak" /> Leak
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-5">
            <button className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow-win)] transition-all hover:brightness-110">
              <Play className="size-4 translate-x-px" />
            </button>

            <div className="relative flex-1">
              <div className="flex h-16 items-center gap-[3px]">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex-1 rounded-full",
                      i < 34 ? "bg-primary/70" : "bg-border-strong",
                    )}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="relative mt-3 h-1 rounded-full bg-background">
                <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-primary/60" />
                {MARKERS.map((m) => (
                  <span
                    key={m.at}
                    title={m.label}
                    className={cn(
                      "absolute -top-1 size-3 -translate-x-1/2 cursor-pointer rounded-full ring-2 ring-card transition-transform hover:scale-125",
                      m.type === "win" ? "bg-win" : "bg-leak",
                    )}
                    style={{ left: `${m.at}%` }}
                  />
                ))}
              </div>
              <div className="num mt-2 flex justify-between text-[11px] text-muted-foreground">
                <span>04:48</span>
                <span>{sim.duration}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {chatOpen && (
        <aside className="panel fixed bottom-6 right-6 top-24 z-30 flex w-[380px] flex-col overflow-hidden">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex size-8 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
              <MessageSquare className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Ask AI Coach</p>
              <p className="truncate text-[11px] text-muted-foreground">Scoped to this meeting</p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {CHAT.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <p
                  className={cn(
                    "max-w-[85%] text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 font-medium text-primary-foreground"
                      : "text-foreground/90",
                  )}
                >
                  {m.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Rewrite my pricing line", "Where did I lose control?"].map((q) => (
                <button
                  key={q}
                  className="rounded-full border border-border bg-surface-2/60 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-3 py-2 focus-within:border-primary/50">
              <input
                placeholder="Ask AI Coach about this meeting..."
                className="min-w-0 flex-1 bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:brightness-110">
                <Send className="size-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}
    </AppShell>
  );
}

function YieldRow({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Target;
  label: string;
  value: string;
  tone: "muted" | "win" | "leak";
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 px-3.5 py-3">
      <Icon
        className={cn(
          "size-4",
          tone === "win" && "text-win",
          tone === "leak" && "text-leak",
          tone === "muted" && "text-muted-foreground",
        )}
      />
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={cn(
          "num ml-auto text-sm font-semibold",
          tone === "win" && "text-win",
          tone === "leak" && "text-leak",
        )}
      >
        {value}
      </span>
    </div>
  );
}
