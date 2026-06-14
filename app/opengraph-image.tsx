import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt =
  "ApplyReadyCV free ATS resume and CV checker for job applications";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
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
                Private resume feedback before applying
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
            Free checker
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 70,
              fontWeight: 850,
              letterSpacing: -1,
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            Check your resume for ATS, keywords, and job fit.
          </div>
          <div
            style={{
              color: "#334155",
              display: "flex",
              flexWrap: "wrap",
              fontSize: 28,
              gap: 14,
            }}
          >
            {["ATS readiness", "Resume keywords", "Remote", "Freelance", "Local jobs"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: "12px 18px",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            color: "#475569",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
          }}
        >
          <div>No account. No resume storage. Practical editing guidance.</div>
          <div style={{ color: "#4f46e5", fontWeight: 800 }}>
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
