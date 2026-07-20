import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0b1220",
          border: "3px solid #14b8a6",
          borderRadius: "16px",
          color: "#f8fafc",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "27px",
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-2px",
          paddingRight: "2px",
          position: "relative",
          width: "100%",
        }}
      >
        VL
        <span
          style={{
            background: "#2dd4bf",
            border: "2px solid #0b1220",
            borderRadius: "999px",
            bottom: "5px",
            display: "flex",
            height: "10px",
            position: "absolute",
            right: "5px",
            width: "10px",
          }}
        />
      </div>
    ),
    size,
  );
}
