import assert from "node:assert/strict";
import test from "node:test";
import { buildCheckerCtaEvent } from "../lib/analytics/checker-cta";

test("checker CTA event includes source context without sensitive data", () => {
  const event = buildCheckerCtaEvent({
    sourceType: "guide",
    sourcePath: "/guides/ats-resume-checker-guide",
    ctaLocation: "sidebar",
    targetMode: "general",
    guideSlug: "ats-resume-checker-guide",
  });

  assert.equal(event.name, "checker_cta_clicked");
  assert.deepEqual(event.properties, {
    source_type: "guide",
    source_path: "/guides/ats-resume-checker-guide",
    cta_location: "sidebar",
    target_mode: "general",
    guide_slug: "ats-resume-checker-guide",
  });
  assert.equal("resume_text" in event.properties, false);
  assert.equal("job_description" in event.properties, false);
});

test("checker CTA event omits guide slug outside guide pages", () => {
  const event = buildCheckerCtaEvent({
    sourceType: "landing_page",
    sourcePath: "/ats-resume-checker",
    ctaLocation: "sidebar",
    targetMode: "general",
  });

  assert.equal("guide_slug" in event.properties, false);
});
