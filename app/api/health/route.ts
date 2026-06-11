import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      status: "healthy",
      service: "ApplyReadyCV",
      timestamp: new Date().toISOString(),
    },
    {
      headers: noStoreHeaders,
    },
  );
}

export function HEAD() {
  return new Response(null, {
    status: 204,
    headers: noStoreHeaders,
  });
}
