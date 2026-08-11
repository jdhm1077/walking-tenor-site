import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const font = readFileSync(
    path.join(process.cwd(), "public/fonts/playfair-display-600.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#123F3F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Playfair Display",
          padding: "0 80px",
        }}
      >
        {/* WT monogram badge */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "#1B6868",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 28,
            fontFamily: "Playfair Display",
            fontWeight: 600,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: "#C9A24A" }}>W</span>
          <span style={{ color: "#C4573A" }}>T</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 600,
            color: "#FAF7F0",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          The Walking Tenor
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: "#C9A24A",
            marginBottom: 24,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 34,
            color: "#C9A24A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "Playfair Display",
          }}
        >
          Stories That Sing
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: font,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
