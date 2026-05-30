export function ScoreMeter({
  value,
  label = "Score",
  size = "md",
}: {
  value: number;
  label?: string;
  size?: "sm" | "md";
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, value)) / 100) * circumference;
  const dimensions = size === "sm" ? "h-28 w-28" : "h-36 w-36";

  return (
    <div className={`relative ${dimensions}`}>
      <svg viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="9"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#scoreGradient)"
          strokeLinecap="round"
          strokeWidth="9"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="52%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-slate-950">{value}</span>
        <span className="text-xs font-semibold uppercase text-slate-500">
          {label}
        </span>
      </div>
    </div>
  );
}
