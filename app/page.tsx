import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Radar } from "lucide-react";
import { CheckerWorkspace } from "@/components/checker/checker-workspace";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo/schema";
import { contentPages, homepageSeo } from "@/lib/site";

const homepageFaq = [
  {
    question: "Is ApplyReadyCV free?",
    answer:
      "Yes. The current MVP is free to use and does not include ads, payments, accounts, or paid products.",
  },
  {
    question: "Does the checker upload my resume?",
    answer:
      "No. Resume text is analyzed locally in your browser. TXT, PDF, and DOCX files are read locally; older DOC files or Google Docs should be exported as DOCX, PDF, or TXT first.",
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
  title: homepageSeo.title,
  description: homepageSeo.description,
  path: homepageSeo.path,
  keywords: homepageSeo.keywords,
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(homepageFaq, homepageSeo.path),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <main>
        <section className="border-b border-slate-200 bg-white/70">
          <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
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
                job-match keywords, achievements, completeness, and role fit
                without storing your resume.
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

            <CheckerWorkspace />
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
                  "Resume & CV guides",
                  "Read practical articles on ATS readiness, resume keywords, and remote job CV preparation.",
                  "/guides",
                ],
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
