import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { WalletAddressCard } from "@/components/support/wallet-address-card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { SUPPORT_WALLET_ADDRESS, supportPages } from "@/lib/site";

const page = supportPages.support;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function SupportPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
            keywords: page.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.breadcrumbName, path: page.path },
          ]),
        ]}
      />
      <main>
        <section className="border-b border-slate-200 bg-white/70">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase text-indigo-700">
              Optional support
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Support ApplyReadyCV improvements.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              ApplyReadyCV is free to use. If the checker helped you review a
              CV or prepare an application, an optional donation can help with
              hosting, maintenance, and future improvements.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div className="space-y-5">
            <WalletAddressCard address={SUPPORT_WALLET_ADDRESS} />

            <article className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase text-amber-900">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                Crypto safety note
              </div>
              <p className="mt-3 text-sm leading-6 text-amber-950/80">
                Crypto transfers are irreversible. Please double-check the
                wallet address, token, and network inside MetaMask before
                sending anything. Send only from a wallet you control and only
                if you are comfortable with the risk.
              </p>
            </article>
          </div>

          <aside className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-2xl font-semibold text-slate-950">
                What donations support
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {[
                  "Keeping the free CV checker online.",
                  "Improving resume feedback and keyword checks.",
                  "Adding better support pages and application guidance.",
                  "Testing privacy-friendly features before launch.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-950">
                Donation disclaimer
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Donations are voluntary support for the site. They are not a
                payment for employment advice, resume certification, ATS
                approval, interviews, or job placement.
              </p>
              <Link
                href="/#checker"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Use the free checker
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
