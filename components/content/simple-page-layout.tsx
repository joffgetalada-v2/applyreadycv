import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type SimplePageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
  cta?: {
    label: string;
    href: string;
  };
};

export function SimplePageLayout({
  eyebrow,
  title,
  intro,
  sections,
  cta,
}: SimplePageLayoutProps) {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-indigo-700">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {section.body}
              </p>
              {section.items && (
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {cta && (
          <div className="mt-8 rounded-lg border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">
              Ready to check a CV?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use the free checker for practical feedback on readability,
              keywords, completeness, and application fit.
            </p>
            <Link
              href={cta.href}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
