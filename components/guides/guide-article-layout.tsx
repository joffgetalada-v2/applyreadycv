import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks } from "lucide-react";
import { TrackedCheckerLink } from "@/components/analytics/tracked-checker-link";
import type { GuidePage } from "@/lib/guides";

function formatGuideDate(value?: string) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function GuideArticleLayout({ guide }: { guide: GuidePage }) {
  const updatedAt = formatGuideDate(guide.updatedAt);

  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <Link
            href="/guides"
            className="text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
          >
            Resume & CV Guides
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase text-indigo-700">
            {guide.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {guide.intro}
          </p>
          {updatedAt && (
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Last updated {updatedAt}
            </p>
          )}
          {guide.image && (
            <figure className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src={guide.image.src}
                alt={guide.image.alt}
                width={guide.image.width}
                height={guide.image.height}
                className="h-auto w-full"
                unoptimized
              />
              <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-600">
                {guide.image.caption}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <article className="min-w-0 space-y-10">
          <div className="grid gap-4 md:grid-cols-3">
            {guide.summary.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  className="h-5 w-5 text-emerald-700"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.title}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <ListChecks className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 rounded-lg border border-slate-200 bg-white p-3"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
            <div className="mt-5 divide-y divide-slate-200">
              {guide.faq.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                    {item.question}
                    <span className="text-indigo-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-lg border border-indigo-100 bg-white p-5">
            <p className="text-sm font-semibold uppercase text-indigo-700">
              Try the checker
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Turn this guide into action
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Paste your resume or CV, add a job description if you have one,
              and review private, browser-based feedback before applying.
            </p>
            <TrackedCheckerLink
              href={guide.cta.href}
              sourceType="guide"
              sourcePath={guide.path}
              ctaLocation="sidebar"
              targetMode={guide.cta.mode ?? "general"}
              guideSlug={guide.slug}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
            >
              {guide.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedCheckerLink>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">
              Related resources
            </h2>
            <div className="mt-4 grid gap-4">
              {guide.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-indigo-50/30"
                >
                  <span className="font-semibold text-slate-950">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-950">
              Important limitation
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              ApplyReadyCV gives practical editing guidance. It cannot
              guarantee interviews, job offers, recruiter decisions, or ATS
              approval.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
