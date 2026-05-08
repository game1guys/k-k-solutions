import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const title = site.name;
  const subtitle = site.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#030712",
          color: "#F8FAFC",
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -200,
            background:
              "radial-gradient(ellipse 60% 45% at 20% 30%, rgba(34,211,238,0.25), transparent 55%), radial-gradient(ellipse 60% 45% at 80% 40%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 110%, rgba(14,165,233,0.14), transparent 70%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 62,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>{subtitle}</div>
          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {["Web", "Apps", "Digital marketing", "Lucknow"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 20,
                  padding: "10px 14px",
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
