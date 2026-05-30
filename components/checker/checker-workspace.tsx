"use client";

import { useCallback, useState } from "react";
import { ResumeChecker, type CheckerInputSnapshot } from "./resume-checker";
import { RoleFitCompassPanel } from "./role-fit-compass-panel";
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
  const [mode, setMode] = useState<AnalysisMode>("remote");
  const [snapshot, setSnapshot] = useState<CheckerInputSnapshot>(initialSnapshot);
  const [compass, setCompass] = useState<RoleFitCompass | null>(null);

  const handleAnalysisResultChange = useCallback((result: AnalysisResult | null) => {
    setCompass(result?.roleFitCompass ?? null);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(720px,1fr)_370px]">
      <ResumeChecker
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
