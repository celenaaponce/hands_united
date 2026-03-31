"use client";
import { useEffect, useState } from "react";

export default function ZeffyEmbed({ title, src }) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const iframe = (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );

  // DESKTOP: always show iframe
  if (!isMobile) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {iframe}
      </div>
    );
  }

  // MOBILE
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(90deg, #72b200, #b4e956)",
            color: "#1a1a1a",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          View details & register
        </button>
      )}

      {open && (
        <div
          style={{
            width: "100%",
            height: "100%", // 👈 KEY
            display: "flex",
          }}
        >
          {iframe}
        </div>
      )}
    </div>
  );
}