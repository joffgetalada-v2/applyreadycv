import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { primaryNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link href="/" aria-label="ApplyReadyCV home" className="min-w-0">
          <Logo />
        </Link>
        <Link
          href="/#checker"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:px-4"
        >
          Check CV
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <nav
        aria-label="Primary navigation"
        className="scrollbar-hide flex max-w-full gap-2 overflow-x-auto border-t border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 sm:px-6"
      >
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-md px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
