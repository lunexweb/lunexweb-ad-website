type IconProps = { className?: string };

const base = (className?: string) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: className ?? "size-5",
  "aria-hidden": true,
});

export function IconWorkflow({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M6 9v4a3 3 0 0 0 3 3h6" />
      <path d="M15 6h3a3 3 0 0 1 3 3v2" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M9 7 4 12l5 5" />
      <path d="m15 7 5 5-5 5" />
      <path d="M13 4l-2 16" />
    </svg>
  );
}

export function IconSpeed({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21a9 9 0 1 0-9-9" />
      <path d="M12 12l4.5-4.5" />
      <path d="M3 12h2M12 3v2M20.5 16.5 19 15" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-4M12.5 16V8M17 16v-6" />
    </svg>
  );
}

export function IconPlug({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M9 3v5M15 3v5" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
      <path d="M12 16v5" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
      <path d="M5 15c-1 2-1 4-1 5 1 0 3 0 5-1" />
      <path d="M9 19c-2-1-4-3-5-5l3-6c2-4 6-6 12-6 0 6-2 10-6 12l-6 3Z" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconCash({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6.5 12h.01M17.5 12h.01" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12Z" />
      <path d="M9.5 9.5c0 3 2 5 5 5 .8 0 1-1 .5-1.4l-1-.6-1 .8c-.9-.4-1.7-1.2-2.1-2.1l.8-1-.6-1c-.4-.5-1.4-.3-1.6.5Z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
