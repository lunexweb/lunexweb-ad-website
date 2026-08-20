export function LunexMark({ className = "size-9" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Lunexweb" 
      className={className}
    />
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
