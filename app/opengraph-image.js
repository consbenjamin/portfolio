import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 45%, rgba(79,70,229,1) 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          Constantino Abba
        </div>
        <div style={{ fontSize: 34, opacity: 0.92, marginTop: 18 }}>
          Full-Stack Developer · Next.js · React · Node.js
        </div>
        <div style={{ marginTop: 42, fontSize: 24, opacity: 0.9 }}>
          Portfolio · Projects · Contact
        </div>
      </div>
    ),
    size
  );
}

