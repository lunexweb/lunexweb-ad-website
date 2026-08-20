import { useSyncExternalStore } from "react";

export type DemoUser = { name: string; email: string; role: string };

const KEY = "voiceoffice.demo-user";
const listeners = new Set<() => void>();

let cache: DemoUser | null | undefined;

function read(): DemoUser | null {
  if (typeof window === "undefined") return null;
  if (cache !== undefined) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    cache = null;
  }
  return cache;
}

function emit() {
  listeners.forEach((l) => l());
}

export function signInDemo(email: string, name?: string): DemoUser {
  const user: DemoUser = {
    email,
    name: name?.trim() || email.split("@")[0]!.replace(/[._-]+/g, " ") || "Demo User",
    role: "Enterprise AE",
  };
  cache = user;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(user));
  } catch {
    /* ignore */
  }
  emit();
  return user;
}

export function signOutDemo() {
  cache = null;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  emit();
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useDemoUser() {
  return useSyncExternalStore(
    subscribe,
    () => read(),
    () => null,
  );
}
