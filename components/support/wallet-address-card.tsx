"use client";

import { useState } from "react";
import { CheckCircle2, Copy } from "lucide-react";

export function WalletAddressCard({ address }: { address: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyAddress() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        copyAddressFallback(address);
      }
      setStatus("copied");
    } catch {
      try {
        copyAddressFallback(address);
        setStatus("copied");
      } catch {
        setStatus("failed");
      }
    }

    window.setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold uppercase text-indigo-700">
        MetaMask wallet address
      </p>
      <code className="mt-3 block break-all rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 font-mono text-sm leading-6 text-slate-900">
        {address}
      </code>
      <button
        type="button"
        onClick={copyAddress}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        {status === "copied" ? (
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Copy failed"
            : "Copy address"}
      </button>
    </div>
  );
}

function copyAddressFallback(address: string) {
  const textArea = document.createElement("textarea");

  textArea.value = address;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";

  document.body.appendChild(textArea);
  textArea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Copy command failed");
  }
}
