import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ChevronDown, Sparkles, ArrowUpRight, Clock, Video } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SIMULATIONS, PERSONAS, YIELDS, rand } from "@/lib/sim-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Room — VoiceOffice Simulator" },
      {
        name: "description",
        content:
          "Run realistic AI sales call simulations, track deal yield vs revenue leakage, and review call intelligence reports.",
      },
      { property: "og:title", content: "Practice Room — VoiceOffice" },
      {
        property: "og:description",
        content:
          "Practice against lifelike prospect personas and review yield, pacing and confidence analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lobby,
});

function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block rounded-2xl border border-border bg-background/50 px-4 py-3 transition-colors focus-within:border-primary/50">
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="relative mt-1 flex items-center">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent pr-6 text-sm font-medium text-foreground outline-none"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-surface text-foreground">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 size-4 text-muted-foreground" />
      </span>
    </label>
  );
}

function Lobby() {
  const [persona, setPersona] = useState(PERSONAS[0]!);
  const [target, setTarget] = useState(YIELDS[2]!);

  return (
    <AppShell
      title="Lobby / Practice Room"
      subtitle="Spin up a live simulated deal and pressure-test your pitch."
      actions={
        <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-win" /> Simulator online
        </span>
      }
    >
      <section className="grid-glow panel overflow-hidden">
        <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_1fr] lg:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
              <Sparkles className="size-3.5" /> Quick Practice Room
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight">
              Join a simulated sales call
              <span className="block text-muted-foreground">and defend your deal yield.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              No hints, no prompts, no safety net — just you and the prospect. Your call
              intelligence report unlocks the moment you hang up.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-win)] transition-all hover:brightness-110 active:scale-[0.98]">
                <Phone className="size-4" />
                Join Simulation Room
              </button>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" /> Uses ~10 of your 24 remaining minutes
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface-2/50 p-5">
            <div className="mb-5 flex aspect-video items-center justify-center rounded-xl border border-border bg-background/60">
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-surface-2 ring-1 ring-border">
                  <Video className="size-5 text-muted-foreground" />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Room preview · audio only</p>
              </div>
            </div>
            <div className="space-y-3">
              <Field
                label="Prospect Persona"
                value={persona}
                options={PERSONAS}
                onChange={setPersona}
              />
              <Field
                label="Target Deal Yield"
                value={target}
                options={YIELDS}
                onChange={setTarget}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h3 className="text-base font-semibold tracking-tight">Recent Simulation History</h3>
            <p className="text-sm text-muted-foreground">Your last four mock calls.</p>
          </div>
          <Link
            to="/history"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SIMULATIONS.map((s) => (
            <SimCard key={s.id} sim={s} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}

export function SimCard({ sim }: { sim: (typeof SIMULATIONS)[number] }) {
  const won = sim.status === "won";
  return (
    <article className="panel group flex flex-col gap-4 p-5 transition-colors hover:border-border-strong">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
              won
                ? "bg-win/12 text-win ring-1 ring-win/25"
                : "bg-leak/12 text-leak ring-1 ring-leak/25",
            )}
          >
            <span className={cn("size-1.5 rounded-full", won ? "bg-win" : "bg-leak")} />
            {won ? "Deal Won" : "Revenue Leaked"}
          </span>
          <h4 className="mt-3 truncate text-sm font-semibold">{sim.scenario}</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            {sim.date} · {sim.duration} · {sim.persona}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Final yield</p>
          <p className={cn("num text-lg font-semibold", won ? "text-win" : "text-leak")}>
            {rand(sim.final)}
          </p>
          <p className="num text-[11px] text-muted-foreground">of {rand(sim.target)}</p>
        </div>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-background">
        <div
          className={cn("h-full rounded-full", won ? "bg-win" : "bg-leak")}
          style={{ width: `${Math.round((sim.final / sim.target) * 100)}%` }}
        />
      </div>

      <Link
        to="/report/$simId"
        params={{ simId: sim.id }}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/60 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
      >
        Open Call Intelligence Report
      </Link>
    </article>
  );
}
