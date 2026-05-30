"use client";

import { useRef, useState } from "react";
import {
  FileUp,
  Loader2,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ModeSelector, checkerModes } from "@/components/checker/mode-selector";
import { ReportCard } from "@/components/checker/report-card";
import { ScoreMeter } from "@/components/checker/score-meter";
import { analyzeResume } from "@/lib/analyzer/analyzeResume";
import { extractResumeText } from "@/lib/analyzer/textExtraction";
import type { AnalysisMode, AnalysisResult } from "@/lib/analyzer/types";

function recommendationsText(result: AnalysisResult) {
  return [
    `ApplyReadyCV score: ${result.score}/100 - ${result.label}`,
    result.summary,
    "",
    "Top recommended fixes:",
    ...result.topFixes.map((fix, index) => `${index + 1}. ${fix}`),
    "",
    "Missing keywords:",
    result.missingKeywords.length > 0
      ? result.missingKeywords.join(", ")
      : "None detected.",
    "",
    "Mode-specific suggestions:",
    ...result.modeSpecificSuggestions.map((suggestion) => `- ${suggestion}`),
    "",
    "Disclaimer: This tool cannot guarantee interviews or ATS approval. It checks readability, relevance, completeness, and common application issues.",
  ].join("\n");
}

export function ResumeChecker() {
  const [mode, setMode] = useState<AnalysisMode>("remote");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [fileMessage, setFileMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const extractionRunRef = useRef(0);

  const selectedMode = checkerModes.find((item) => item.value === mode) ?? checkerModes[0];

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileMessage("");
    setFormMessage("");
    setResult(null);

    if (!file) {
      return;
    }

    setFileName(file.name);
    setIsExtracting(true);
    const extractionRun = extractionRunRef.current + 1;
    extractionRunRef.current = extractionRun;
    const extraction = await extractResumeText(file).finally(() => {
      if (extractionRunRef.current === extractionRun) {
        setIsExtracting(false);
      }
    });

    if (extractionRunRef.current !== extractionRun) {
      return;
    }

    if (extraction.text.trim()) {
      setResumeText(extraction.text);
      setFileMessage(
        `Extracted resume text from ${file.name}. The file stays in your browser.`,
      );
      return;
    }

    setFileMessage(extraction.error ?? "Please paste your resume text instead.");
  }

  function handleAnalyze() {
    const trimmedResume = resumeText.trim();
    setCopied(false);
    setFormMessage("");

    if (!trimmedResume) {
      setFormMessage(
        "Paste resume text or upload a supported file with extractable text before analyzing.",
      );
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsAnalyzing(true);
    timeoutRef.current = setTimeout(() => {
      setResult(
        analyzeResume({
          mode,
          resumeText: trimmedResume,
          jobDescription,
        }),
      );
      setIsAnalyzing(false);
    }, 450);
  }

  async function handleCopy() {
    if (!result) {
      return;
    }

    try {
      await navigator.clipboard.writeText(recommendationsText(result));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleStartOver() {
    extractionRunRef.current += 1;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setResumeText("");
    setJobDescription("");
    setResult(null);
    setFormMessage("");
    setFileMessage("");
    setFileName("");
    setIsAnalyzing(false);
    setIsExtracting(false);
    setCopied(false);
  }

  return (
    <section id="checker" aria-labelledby="checker-heading">
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-gradient-to-r from-white via-indigo-50/60 to-blue-50/70 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-indigo-700">
                CV Readiness Workspace
              </p>
              <h2
                id="checker-heading"
                className="mt-2 text-3xl font-semibold text-slate-950"
              >
                Audit your CV before you apply.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Pick an application path, add your CV text, and optionally paste a
                job post. The analysis runs locally with transparent scoring.
              </p>
            </div>
            <div className="rounded-lg border border-indigo-100 bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <Sparkles className="h-4 w-4 text-indigo-700" aria-hidden="true" />
                Current mode
              </div>
              <p className="mt-1 text-sm font-semibold text-indigo-800">
                {selectedMode.description}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {selectedMode.detail}
              </p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <ModeSelector
            value={mode}
            onChange={(nextMode) => {
              setMode(nextMode);
              setResult(null);
            }}
          />

          <div className="mt-5 grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="resume-file"
                  className="block text-sm font-semibold text-slate-950"
                >
                  Upload resume/CV file
                </label>
                <div className="mt-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                      <FileUp className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <input
                        ref={fileInputRef}
                        id="resume-file"
                        type="file"
                        accept=".txt,.pdf,.docx,.doc,text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-slate-950 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
                      />
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Accepted: .txt, .pdf, .docx. Files are parsed locally
                        in your browser. For Google Docs, download as .docx,
                        .pdf, or .txt first.
                      </p>
                      {isExtracting && (
                        <p className="mt-2 text-sm font-semibold text-indigo-800">
                          Extracting text locally...
                        </p>
                      )}
                      {fileName && (
                        <p className="mt-2 truncate text-xs font-semibold text-slate-600">
                          Selected: {fileName}
                        </p>
                      )}
                      {fileMessage && (
                        <p className="mt-2 text-sm leading-6 text-indigo-800">
                          {fileMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4">
                <p className="flex items-start gap-2 text-sm leading-6 text-emerald-900">
                  <LockKeyhole
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  Privacy lock: resume content is analyzed in this browser
                  session only. No account, database, or third-party resume API.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="resume-text"
                  className="block text-sm font-semibold text-slate-950"
                >
                  Resume/CV text
                </label>
                <textarea
                  id="resume-text"
                  value={resumeText}
                  onChange={(event) => {
                    setResumeText(event.target.value);
                    setResult(null);
                  }}
                  rows={9}
                  className="mt-3 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Paste your resume text here..."
                />
              </div>

              <div>
                <label
                  htmlFor="job-description"
                  className="block text-sm font-semibold text-slate-950"
                >
                  Job description (optional)
                </label>
                <textarea
                  id="job-description"
                  value={jobDescription}
                  onChange={(event) => {
                    setJobDescription(event.target.value);
                    setResult(null);
                  }}
                  rows={6}
                  className="mt-3 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Paste a job post to check keyword match..."
                />
              </div>
            </div>
          </div>

          {formMessage && (
            <p className="mt-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {formMessage}
            </p>
          )}

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={isAnalyzing || isExtracting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            {isAnalyzing || isExtracting ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5" aria-hidden="true" />
            )}
            {isExtracting ? "Extracting file" : isAnalyzing ? "Analyzing" : "Analyze my CV"}
          </button>
        </div>
      </div>

      <div className="mt-6">
        {result ? (
          <ReportCard
            result={result}
            copied={copied}
            onCopy={handleCopy}
            onStartOver={handleStartOver}
          />
        ) : (
          <EmptyReportPreview />
        )}
      </div>
    </section>
  );
}

function EmptyReportPreview() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
        <ScoreMeter value={78} label="sample" size="sm" />
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
            Sample report preview
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">
            Your analysis will appear here.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            After analysis, you will see an overall score, category progress
            bars, top fixes, missing keywords, strengths, warnings, and
            mode-specific suggestions.
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["ATS readability", "Clear sections and extractable text"],
          ["Job match", "Matched and missing job keywords"],
          ["Mode fit", "Remote, freelance, or local readiness"],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-950">{title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
