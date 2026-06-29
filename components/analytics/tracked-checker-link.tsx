"use client";

import type { ComponentProps } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import {
  buildCheckerCtaEvent,
  type CheckerCtaContext,
} from "@/lib/analytics/checker-cta";

type TrackedCheckerLinkProps = ComponentProps<typeof Link> &
  CheckerCtaContext;

export function TrackedCheckerLink({
  sourceType,
  sourcePath,
  ctaLocation,
  targetMode,
  guideSlug,
  onClick,
  ...linkProps
}: TrackedCheckerLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={(event) => {
        const analyticsEvent = buildCheckerCtaEvent({
          sourceType,
          sourcePath,
          ctaLocation,
          targetMode,
          guideSlug,
        });

        try {
          track(analyticsEvent.name, analyticsEvent.properties);
        } catch {
          // Analytics must never block checker navigation.
        }

        onClick?.(event);
      }}
    />
  );
}
