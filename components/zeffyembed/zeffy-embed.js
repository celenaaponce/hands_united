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

  // DESKTOP: always show iframe
  if (!isMobile) {
    return (
      <div className="embedWrapper">
        <iframe
          title={title}
          src={src}
        />
      </div>
    );
  }

  // MOBILE: button → iframe expands below
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
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
        <div className="embedWrapper">
          <iframe
            title={title}
            src={src}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
