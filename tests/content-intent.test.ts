import assert from "node:assert/strict";
import test from "node:test";
import { EDITORIAL_AUTHOR } from "../lib/editorial";
import { guidePages } from "../lib/guides";
import { contentPages, homepageSeo } from "../lib/site";

test("homepage, ATS landing page, and ATS guide target distinct intents", () => {
  const guide = guidePages.find(
    (item) => item.slug === "ats-resume-checker-guide",
  );

  assert.match(homepageSeo.title, /Free Resume & CV Checker/i);
  assert.match(
    contentPages.ats.metadataTitle,
    /Interactive ATS Resume Checker/i,
  );
  assert.match(guide?.metadataTitle ?? "", /How ATS Resume Checkers Work/i);
});

test("ATS guide includes editorial authorship and authoritative sources", () => {
  const guide = guidePages.find(
    (item) => item.slug === "ats-resume-checker-guide",
  );

  assert.equal(EDITORIAL_AUTHOR.name, "ApplyReadyCV Editorial Team");
  assert.ok((guide?.sources?.length ?? 0) >= 2);
  assert.ok(
    guide?.sections.some((section) => /methodology/i.test(section.title)),
  );
  assert.ok(
    guide?.sections.some((section) =>
      /sample report walkthrough/i.test(section.title),
    ),
  );
});

test("ATS pages reference current product screenshots with fictional data", () => {
  const guide = guidePages.find(
    (item) => item.slug === "ats-resume-checker-guide",
  );
  const walkthrough = guide?.sections.find((section) =>
    /sample report walkthrough/i.test(section.title),
  );

  assert.equal(
    contentPages.ats.screenshot?.src,
    "/screenshots/general-resume-checker.png",
  );
  assert.equal(
    walkthrough?.image?.src,
    "/screenshots/sample-general-report.png",
  );
  assert.match(walkthrough?.image?.caption ?? "", /fictional/i);
});
