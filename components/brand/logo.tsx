import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 56 56"
      role="img"
      aria-label="ApplyReadyCV logo"
      {...props}
    >
      <rect width="56" height="56" rx="13" fill="#172554" />
      <path
        d="M15 8h23.6L47 16.4V48H15V8Z"
        fill="#F8FAFC"
      />
      <path d="M38.6 8v8.4H47" fill="#DBEAFE" />
      <path
        d="m21 30.2 6.1 6.6 12.2-14.9"
        fill="none"
        stroke="#059669"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.2"
      />
      <circle cx="41.1" cy="17.5" r="6.1" fill="#4F46E5" />
      <path
        d="M41.1 14v3.5l2.6 1.7"
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M17.5 49h22"
        stroke="#8B5CF6"
        strokeLinecap="round"
        strokeWidth="2.6"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0" />
      {!compact && (
        <div className="min-w-0">
          <span className="block truncate text-base font-semibold text-slate-950">
            ApplyReadyCV
          </span>
          <span className="block truncate text-xs font-medium text-slate-500">
            CV readiness workspace
          </span>
        </div>
      )}
    </div>
  );
}
