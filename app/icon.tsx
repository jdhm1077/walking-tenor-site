import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  const font = readFileSync(
    path.join(process.cwd(), "public/fonts/playfair-display-600.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          borderRadius: "50%",
          background: "#123F3F",
          border: "18px solid #1B6868",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Playfair Display",
          fontSize: 214,
          fontWeight: 600,
          letterSpacing: "-6px",
          paddingRight: "6px",
        }}
      >
        <span style={{ color: "#C9A24A" }}>W</span>
        <span style={{ color: "#C4573A" }}>T</span>
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
