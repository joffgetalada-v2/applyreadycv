import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ResumeChecker } from "@/components/checker/resume-checker";
import { ScoreMeter } from "@/components/checker/score-meter";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  faqSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { contentPages } from "@/lib/site";

const homepageFaq = [
  {
    question: "Is ApplyReadyCV free?",
    answer:
      "Yes. The current MVP is free to use and does not include ads, payments, accounts, or paid products.",
  },
  {
    question: "Does the checker upload my resume?",
    answer:
      "No. Resume text is analyzed locally in your browser. Text files are read through the browser File API, and PDF or DOCX uploads currently fall back to pasted text.",
  },
  {
    question: "Can the score guarantee interviews or ATS approval?",
    answer:
      "No. The score is practical guidance based on common readability, keyword, completeness, and application-fit checks.",
  },
  {
    question: "Which application modes are supported?",
    answer:
      "The checker supports remote job, freelance or gig, and local job application modes.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "ApplyReadyCV — Free Resume & CV Checker",
  description:
    "Check if your CV is ready for remote, freelance, and local job applications. Get private, practical feedback on readability, keywords, completeness, and application fit.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[websiteSchema(), softwareApplicationSchema(), faqSchema(homepageFaq)]}
      />
      <main>
        <section className="border-b border-slate-200 bg-white/70">
          <div className="mx-auto grid max-w-[1500px] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 xl:grid-cols-[minmax(760px,1fr)_370px]">
            <div>
              <div className="mb-6 rounded-lg border border-slate-200 bg-white p-5">
                <p className="inline-flex items-center gap-2 rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-800">
                  <Radar className="h-4 w-4" aria-hidden="true" />
                  Privacy-first CV readiness dashboard
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                  Check whether your CV is ready for remote, freelance, or local
                  job applications.
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  ApplyReadyCV gives practical, honest feedback on ATS readability,
                  job-match keywords, achievements, completeness, and application
                  fit without storing your resume.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#checker"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                  >
                    Start the free check
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                  >
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    Read privacy notes
                  </Link>
                </div>
              </div>
              <ResumeChecker />
            </div>

            <WorkspaceInsights />
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Remote Job",
                href: contentPages.remote.path,
                body: "Review async communication, distributed tools, documentation, ownership, and remote role keywords.",
              },
              {
                title: "Freelance / Gig",
                href: contentPages.freelance.path,
                body: "Check portfolio signals, selected projects, client outcomes, deliverables, and service clarity.",
              },
              {
                title: "Local Job",
                href: contentPages.local.path,
                body: "Surface contact details, location, availability, education, certifications, and work history gaps.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30"
              >
                <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                  Read mode guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/70">
          <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-indigo-700">
                Publisher-friendly content
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Helpful pages around the free tool.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                The site now has useful, original guidance pages for remote,
                freelance, local, ATS, and keyword review topics, plus privacy,
                terms, about, and contact pages.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "ATS readability",
                  "Learn formatting basics, extraction limits, and why scores are only guidance.",
                  "/ats-resume-checker",
                ],
                [
                  "Keyword matching",
                  "Compare resume text to a job description without stuffing or misleading wording.",
                  "/resume-keyword-checker",
                ],
                [
                  "Privacy-first approach",
                  "Understand what is processed locally and what is not stored.",
                  "/privacy",
                ],
                [
                  "Honest limitations",
                  "Read the informational-use terms and no-guarantee disclaimer.",
                  "/terms",
                ],
              ].map(([title, body, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-indigo-200"
                >
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-indigo-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Common questions
          </h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {homepageFaq.map((item) => (
              <details key={item.question} className="group p-5">
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
      </main>
    </>
  );
}

function WorkspaceInsights() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-700">
              Status
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">
              Local audit engine
            </h2>
          </div>
          <ScoreMeter value={82} label="sample" size="sm" />
        </div>
        <div className="mt-5 grid gap-3">
          {[
            ["ATS readability", "Section and extraction checks"],
            ["Job match", "Transparent keyword comparison"],
            ["Mode fit", "Remote, freelance, or local signals"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-semibold text-slate-950">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Privacy by design
        </div>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-900/80">
          {[
            "No resume storage.",
            "No third-party resume API.",
            "No account required.",
            "No database for current analysis.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase text-indigo-700">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Sample insight
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          A strong report usually combines readable structure, truthful job
          keywords, measurable achievements, and mode-specific evidence. A score
          can guide edits, but it cannot promise results.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <FileSearch className="h-4 w-4 text-indigo-700" aria-hidden="true" />
          Learn before applying
        </p>
        <div className="mt-3 grid gap-2">
          {[
            ["Remote guide", "/remote-cv-checker"],
            ["ATS basics", "/ats-resume-checker"],
            ["Keyword guide", "/resume-keyword-checker"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
