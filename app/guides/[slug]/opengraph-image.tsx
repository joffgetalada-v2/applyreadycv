import { ImageResponse } from "next/og";
import { getGuideBySlug } from "@/lib/guides";
import { SITE_NAME } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  const eyebrow = guide?.eyebrow ?? "Resume & CV Guide";
  const title = guide?.title ?? "Resume & CV Guide";
  const description =
    guide?.metaDescription ??
    "Practical resume and CV guidance from ApplyReadyCV.";
  const tags = guide?.seoKeywords.slice(0, 4) ?? [
    "ATS",
    "Resume keywords",
    "CV review",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          height: "100%",
          justifyContent: "space-between",
          padding: 64,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#4f46e5",
                borderRadius: 18,
                color: "#ffffff",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 74,
                justifyContent: "center",
                width: 74,
              }}
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800 }}>{SITE_NAME}</div>
              <div style={{ color: "#475569", fontSize: 24 }}>
                Practical resume guidance
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#e0e7ff",
              border: "1px solid #c7d2fe",
              borderRadius: 999,
              color: "#3730a3",
              fontSize: 22,
              fontWeight: 700,
              padding: "12px 22px",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: title.length > 58 ? 58 : 66,
              fontWeight: 850,
              letterSpacing: 0,
              lineHeight: 1.04,
              maxWidth: 1010,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#334155",
              fontSize: 27,
              lineHeight: 1.3,
              maxWidth: 960,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  color: "#334155",
                  fontSize: 20,
                  fontWeight: 700,
                  padding: "10px 14px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ color: "#4f46e5", fontSize: 24, fontWeight: 800 }}>
            applyreadycv.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
