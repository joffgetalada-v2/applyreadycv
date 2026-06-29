import assert from "node:assert/strict";
import test from "node:test";
import {
  isAnalysisMode,
  resolveAnalysisMode,
} from "../lib/analyzer/modes";

test("missing or invalid mode input resolves to general", () => {
  assert.equal(resolveAnalysisMode(null), "general");
  assert.equal(resolveAnalysisMode("unsupported"), "general");
});

test("all supported modes remain valid", () => {
  assert.equal(isAnalysisMode("general"), true);
  assert.equal(isAnalysisMode("remote"), true);
  assert.equal(isAnalysisMode("freelance"), true);
  assert.equal(isAnalysisMode("local"), true);
});
