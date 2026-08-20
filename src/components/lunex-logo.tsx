export function LunexMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* solid angular check block */}
      <path
        d="M5 19.5 15.5 33 27 12.5 20.5 12.5 14.5 23.5 10.5 17.5 5 19.5Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      {/* bright swoosh tail */}
      <path
        d="M13.5 26.5C18 17.5 25.5 10.5 35.5 6.5c-7.5 6.5-13 14-16.5 22.5"
        fill="currentColor"
      />
    </svg>
  );
}

export function LunexLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
        <LunexMark className="size-6" />
      </span>
      <span className="text-[17px] font-semibold tracking-tight">
        Lunex<span className="text-primary">web</span>
      </span>
    </span>
  );
}
