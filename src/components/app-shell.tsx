import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Home,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  Timer,
  Mic,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { initials, signOutDemo, useDemoUser } from "@/lib/demo-auth";


const NAV = [
  { to: "/practice", label: "Lobby / Practice Room", short: "Lobby", icon: Home },
  { to: "/history", label: "Simulation History", short: "History", icon: BarChart3 },
  { to: "/settings", label: "Settings", short: "Settings", icon: Settings },
];

export function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const user = useDemoUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) navigate({ to: "/auth", replace: true });
  }, [user, navigate]);

  return (
    <div className="min-h-screen w-full bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-300 ease-out",
          expanded ? "w-[240px]" : "w-16",
        )}
      >
        <div className="flex h-16 items-center gap-3 px-4">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
            <Mic className="size-4.5" />
          </div>
          {expanded && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">VoiceOffice</p>
              <p className="truncate text-[11px] text-muted-foreground">Sales Flight Sim</p>
            </div>
          )}
        </div>

        <nav className="mt-4 flex flex-1 flex-col gap-1 px-2">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                title={item.label}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                )}
              >
                <item.icon
                  className={cn("size-4.5 shrink-0", active && "text-primary")}
                  strokeWidth={2}
                />
                {expanded && <span className="truncate">{item.short}</span>}
                {active && expanded && (
                  <span className="ml-auto size-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 border-t border-sidebar-border p-3">
          <div
            className={cn(
              "rounded-xl border border-border bg-surface-2/60 px-3 py-2.5",
              !expanded && "px-0 py-2 text-center",
            )}
          >
            {expanded ? (
              <>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <Timer className="size-3.5" />
                  Minutes left
                </div>
                <p className="num mt-1 text-sm font-semibold">
                  24 <span className="text-muted-foreground">/ 30 Mins</span>
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background">
                  <div className="h-full w-[80%] rounded-full bg-primary" />
                </div>
              </>
            ) : (
              <span className="num text-xs font-semibold text-primary">24</span>
            )}
          </div>

          <div className="flex items-center gap-3 rounded-xl px-1 py-1">
            <div className="num flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-semibold ring-1 ring-border">
              {user ? initials(user.name) : "--"}
            </div>
            {expanded && (
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{user?.name ?? "Guest"}</p>
                <p className="truncate text-[11px] text-muted-foreground">
                  {user?.role ?? "Not signed in"}
                </p>
              </div>
            )}
            {expanded && (
              <button
                onClick={() => {
                  signOutDemo();
                  navigate({ to: "/auth", replace: true });
                }}
                title="Sign out"
                className="ml-auto rounded-lg p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
              >
                <LogOut className="size-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
          >
            {expanded ? (
              <>
                <PanelLeftClose className="size-4" /> Collapse
              </>
            ) : (
              <PanelLeftOpen className="mx-auto size-4" />
            )}
          </button>
        </div>
      </aside>

      <div
        className={cn(
          "transition-[padding] duration-300 ease-out",
          expanded ? "pl-[240px]" : "pl-16",
        )}
      >
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-8 py-5">
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold tracking-tight">{title}</h1>
              {subtitle && (
                <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
            <div className="ml-auto flex items-center gap-3">{actions}</div>
          </div>
        </header>
        <main className="mx-auto max-w-[1400px] px-8 pb-16 pt-8">{children}</main>
      </div>
    </div>
  );
}
