import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";
import { checkerHrefForMode, contentPages } from "@/lib/site";
import type { ContentPage } from "@/lib/site";

type RelatedResource = {
  label: string;
  href: string;
  description: string;
};

const relatedResourcesByPath: Record<string, RelatedResource[]> = {
  [contentPages.remote.path]: [
    {
      label: "Remote Job CV Guide",
      href: "/guides/remote-job-cv-guide",
      description: "Learn how to show remote readiness and distributed tools.",
    },
    {
      label: "Resume Keywords Guide",
      href: "/guides/resume-keywords-guide",
      description: "Place job-description keywords naturally in your CV.",
    },
    {
      label: "ATS Resume Formatting Tips",
      href: "/guides/ats-resume-formatting-tips",
      description: "Keep your remote CV readable for software and recruiters.",
    },
  ],
  [contentPages.freelance.path]: [
    {
      label: "Freelance CV Checklist",
      href: "/guides/freelance-cv-checklist",
      description: "Improve service focus, project proof, and client outcomes.",
    },
    {
      label: "Resume Keywords Guide",
      href: "/guides/resume-keywords-guide",
      description: "Match client briefs without stuffing unsupported keywords.",
    },
    {
      label: "Common CV Mistakes",
      href: "/guides/common-cv-mistakes",
      description: "Fix vague bullets, missing proof, and weak positioning.",
    },
  ],
  [contentPages.local.path]: [
    {
      label: "Local Job CV Guide for Philippine Applicants",
      href: "/guides/local-job-cv-philippines",
      description: "Improve contact details, availability, keywords, and local proof.",
    },
    {
      label: "Common CV Mistakes",
      href: "/guides/common-cv-mistakes",
      description: "Avoid unclear contact details and weak work-history signals.",
    },
    {
      label: "ATS Resume Formatting Tips",
      href: "/guides/ats-resume-formatting-tips",
      description: "Use clean sections and readable bullets for local applications.",
    },
    {
      label: "Resume Keywords Guide",
      href: "/guides/resume-keywords-guide",
      description: "Find local role keywords from job descriptions.",
    },
  ],
  [contentPages.ats.path]: [
    {
      label: "Free Resume Score Checker Guide",
      href: "/guides/resume-score-checker-guide",
      description: "Learn what the score means and what to fix first.",
    },
    {
      label: "ATS vs Human Resume Review",
      href: "/guides/ats-vs-human-resume-review",
      description: "Understand what checkers flag and what recruiters still judge.",
    },
    {
      label: "ATS Resume Checker Guide",
      href: "/guides/ats-resume-checker-guide",
      description: "Understand what ATS checkers can and cannot tell you.",
    },
    {
      label: "ATS Resume Formatting Tips",
      href: "/guides/ats-resume-formatting-tips",
      description: "Reduce common parsing and layout risks before applying.",
    },
    {
      label: "Resume Keywords Guide",
      href: "/guides/resume-keywords-guide",
      description: "Use role keywords with evidence, not keyword stuffing.",
    },
  ],
  [contentPages.keywords.path]: [
    {
      label: "Free Resume Score Checker Guide",
      href: "/guides/resume-score-checker-guide",
      description: "Use score categories to prioritize resume edits.",
    },
    {
      label: "ATS vs Human Resume Review",
      href: "/guides/ats-vs-human-resume-review",
      description: "Use keywords without weakening human readability.",
    },
    {
      label: "Resume Keywords Guide",
      href: "/guides/resume-keywords-guide",
      description: "Learn where keywords belong in summaries, skills, and bullets.",
    },
    {
      label: "ATS Resume Checker Guide",
      href: "/guides/ats-resume-checker-guide",
      description: "See how keyword matching fits into ATS readiness.",
    },
    {
      label: "Remote Job CV Guide",
      href: "/guides/remote-job-cv-guide",
      description: "Use remote-specific keywords with real examples.",
    },
  ],
};

export function ContentPageLayout({ page }: { page: ContentPage }) {
  const checkerHref = checkerHrefForMode(page.analysisMode);
  const relatedResources = relatedResourcesByPath[page.path] ?? [
    {
      label: "Resume & CV Guides",
      href: "/guides",
      description: "Browse practical guides for ATS, keywords, and CV readiness.",
    },
  ];

  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-indigo-700">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{page.intro}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.summary.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.65fr]">
          <div className="space-y-10">
            <ContentSection
              icon={ClipboardCheck}
              title={page.checklistTitle}
              cards={page.checklist}
            />
            <ContentSection
              icon={ShieldAlert}
              title={page.mistakesTitle}
              cards={page.mistakes}
            />
            <ContentSection
              icon={FileText}
              title={page.evaluationTitle}
              cards={page.evaluation}
            />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg border border-indigo-100 bg-white p-5">
              <p className="text-sm font-semibold uppercase text-indigo-700">
                Use the checker
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                Run a private CV audit
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Paste your CV and an optional job description to get practical
                local feedback. The score is guidance, not a hiring promise.
              </p>
              <Link
                href={checkerHref}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Open free checker
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-950">
                Related resources
              </h2>
              <div className="mt-4 grid gap-4">
                {relatedResources.map((link) => (
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
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">
                Important disclaimer
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                ApplyReadyCV does not guarantee interviews, employment, ATS
                approval, or recruiter decisions. Use the report as an editing
                guide before making your final application choices.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-700" aria-hidden="true" />
            <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
          </div>
          <div className="mt-5 divide-y divide-slate-200">
            {page.faq.map((item) => (
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
      </section>
    </main>
  );
}

function ContentSection({
  icon: Icon,
  title,
  cards,
}: {
  icon: typeof ClipboardCheck;
  title: string;
  cards: ContentPage["checklist"];
}) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
