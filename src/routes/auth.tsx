import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mic, ArrowRight, Sparkles } from "lucide-react";
import { signInDemo, useDemoUser } from "@/lib/demo-auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — VoiceOffice Demo Access" },
      {
        name: "description",
        content:
          "Sign in to the VoiceOffice demo to run AI sales call simulations and open your Call Intelligence Report.",
      },
      { property: "og:title", content: "Sign in to VoiceOffice" },
      {
        property: "og:description",
        content: "Demo access to the AI sales call flight simulator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useDemoUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate({ to: "/practice", replace: true });
  }, [user, navigate]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 4) {
      setError("Enter any email and a password of at least 4 characters.");
      return;
    }
    setError("");
    signInDemo(email, mode === "signup" ? name : undefined);
    navigate({ to: "/practice", replace: true });
  }

  return (
    <div className="grid-glow flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
            <Mic className="size-4.5" />
          </span>
          <span className="text-sm font-semibold tracking-tight">VoiceOffice</span>
        </Link>

        <div className="panel p-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
            <Sparkles className="size-3.5" /> Demo access
          </span>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">
            {mode === "signin" ? "Welcome back" : "Create your practice account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This is a demo sign-in — any email and password gets you into the simulator.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface-2/50 p-1">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {m === "signin" ? "Sign in" : "Sign up"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-6 space-y-3">
            {mode === "signup" && (
              <Input label="Full name" value={name} onChange={setName} placeholder="Thabo Mokoena" />
            )}
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@company.com"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
            />

            {error && <p className="text-xs text-leak">{error}</p>}

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-win)] transition-all hover:brightness-110 active:scale-[0.99]"
            >
              {mode === "signin" ? "Sign in to simulator" : "Start practicing"}
              <ArrowRight className="size-4" />
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              signInDemo("demo@voiceoffice.ai", "Thabo Mokoena");
              navigate({ to: "/practice", replace: true });
            }}
            className="mt-3 w-full rounded-2xl border border-border bg-surface-2/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            Continue with demo account
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">
            ← Back to VoiceOffice
          </Link>
        </p>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block rounded-2xl border border-border bg-background/50 px-4 py-3 transition-colors focus-within:border-primary/50">
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
      />
    </label>
  );
}
