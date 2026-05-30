import Link from "next/link";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { primaryNav } from "@/lib/site";

export function SiteSidebar() {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[276px] lg:shrink-0 lg:flex-col lg:border-r lg:border-slate-200/80 lg:bg-white/80 lg:px-5 lg:py-6 lg:backdrop-blur-xl">
      <Link href="/" aria-label="ApplyReadyCV home">
        <Logo />
      </Link>

      <nav aria-label="Primary navigation" className="mt-10 grid gap-1">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-lg border border-indigo-100 bg-indigo-50/70 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-indigo-900">
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            Privacy-first MVP
          </div>
          <p className="mt-2 text-sm leading-6 text-indigo-900/75">
            Resume text is checked locally in the browser. No account, database,
            or server-side file storage.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
            <ShieldCheck className="h-4 w-4 text-emerald-700" aria-hidden="true" />
            Honest guidance
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Checks common issues. Does not guarantee interviews, hiring, or ATS
            approval.
          </p>
        </div>
        <Link
          href="/#checker"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          Open checker
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
