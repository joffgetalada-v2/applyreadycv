import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { guidePages, guidesIndex } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: guidesIndex.metadataTitle,
  description: guidesIndex.metaDescription,
  path: guidesIndex.path,
  keywords: guidesIndex.seoKeywords,
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: guidesIndex.title,
            description: guidesIndex.metaDescription,
            path: guidesIndex.path,
            keywords: guidesIndex.seoKeywords,
            schemaType: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: guidesIndex.path },
          ]),
        ]}
      />
      <main>
        <section className="border-b border-slate-200 bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase text-indigo-700">
              Resume & CV Guides
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Practical guides for better job applications.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Start with ATS readiness, resume keywords, and remote job CV
              preparation. Each guide is written to help you improve a real
              application and then check it with ApplyReadyCV.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Use clear formatting that works for people and software.",
              "Match job description keywords without stuffing.",
              "Turn each guide into action with the free checker.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  className="h-5 w-5 text-emerald-700"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {guidePages.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.path}
                className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:bg-indigo-50/30"
              >
                <BookOpen className="h-5 w-5 text-indigo-700" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold uppercase text-indigo-700">
                  {guide.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-8 text-slate-950">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {guide.metaDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                  Read guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
