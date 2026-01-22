"use client";
import { useEffect, useState } from "react";

export default function ZeffyEmbed({ title, src }) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // DESKTOP: load iframe immediately
  if (!isMobile) {
    return (
      <div style={{ position: "relative", paddingTop: "450px" }}>
        <iframe
          title={title}
          src={src}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowPaymentRequest
          allowTransparency="true"
        />
      </div>
    );
  }

  // MOBILE: load iframe only after tap
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            background: "linear-gradient(90deg, #72b200, #b4e956)",
            color: "#ffffff",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          View details & register
        </button>
      )}

      {open && (
        <div style={{ position: "relative", paddingTop: "450px" }}>
          <iframe
            title={title}
            src={src}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            loading="lazy"
            allowPaymentRequest
            allowTransparency="true"
          />
        </div>
      )}
    </div>
  );
}
