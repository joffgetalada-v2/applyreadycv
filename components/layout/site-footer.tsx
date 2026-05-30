import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { footerNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Free, privacy-first CV feedback for remote, freelance, and local
              applications. Informational only, with no hiring or ATS guarantees.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3"
          >
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          ApplyReadyCV cannot guarantee interviews, job offers, recruiter
          decisions, or ATS approval. Review all recommendations before using
          them in a real application.
        </p>
      </div>
    </footer>
  );
}
