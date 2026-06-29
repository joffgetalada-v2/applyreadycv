"use client";

import { startTransition, useCallback, useEffect, useState } from "react";
import { ResumeChecker, type CheckerInputSnapshot } from "./resume-checker";
import { RoleFitCompassPanel } from "./role-fit-compass-panel";
import {
  DEFAULT_ANALYSIS_MODE,
  resolveAnalysisMode,
} from "@/lib/analyzer/modes";
import type {
  AnalysisMode,
  AnalysisResult,
  RoleFitCompass,
} from "@/lib/analyzer/types";

const initialSnapshot: CheckerInputSnapshot = {
  hasResumeText: false,
  hasJobDescription: false,
  isExtracting: false,
  fileName: "",
};

export function CheckerWorkspace() {
  const [mode, setMode] = useState<AnalysisMode>(DEFAULT_ANALYSIS_MODE);
  const [snapshot, setSnapshot] = useState<CheckerInputSnapshot>(initialSnapshot);
  const [compass, setCompass] = useState<RoleFitCompass | null>(null);

  useEffect(() => {
    const nextMode = resolveAnalysisMode(
      new URLSearchParams(window.location.search).get("mode"),
    );

    startTransition(() => {
      setMode(nextMode);
    });
  }, []);

  const handleAnalysisResultChange = useCallback((result: AnalysisResult | null) => {
    setCompass(result?.roleFitCompass ?? null);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(720px,1fr)_370px]">
      <ResumeChecker
        mode={mode}
        onModeChange={setMode}
        onInputSnapshotChange={setSnapshot}
        onAnalysisResultChange={handleAnalysisResultChange}
      />
      <RoleFitCompassPanel
        mode={mode}
        compass={compass}
        hasResumeText={snapshot.hasResumeText}
        hasJobDescription={snapshot.hasJobDescription}
        isExtracting={snapshot.isExtracting}
        fileName={snapshot.fileName}
      />
    </div>
  );
}
