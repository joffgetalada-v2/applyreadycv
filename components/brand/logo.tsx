import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 56 56"
      role="img"
      aria-label="ApplyReadyCV logo"
      {...props}
    >
      <rect width="56" height="56" rx="14" fill="#172554" />
      <path
        d="M17 11h15.8L41 19.2V43H17V11Z"
        fill="#F8FAFC"
        stroke="#DBEAFE"
        strokeWidth="1.5"
      />
      <path d="M32.8 11v8.2H41" fill="#DBEAFE" />
      <circle cx="38.5" cy="17.5" r="6.5" fill="#EEF2FF" stroke="#6366F1" />
      <path
        d="M38.5 14.8v2.7l2.2 1.3"
        fill="none"
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m22 31 4.2 4.2L34.8 25"
        fill="none"
        stroke="#0F766E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M18.5 47.2h19"
        stroke="#8B5CF6"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0" />
      {!compact && (
        <div className="min-w-0">
          <span className="block text-base font-semibold text-slate-950">
            ApplyReadyCV
          </span>
          <span className="block text-xs font-medium text-slate-500">
            CV readiness workspace
          </span>
        </div>
      )}
    </div>
  );
}
