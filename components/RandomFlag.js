"use client";

import { useEffect, useState } from "react";

const spanishFlags = [
  "🇲🇽", "🇪🇸", "🇨🇴", "🇦🇷", "🇵🇪",
  "🇨🇱", "🇻🇪", "🇪🇨", "🇬🇹", "🇭🇳",
  "🇸🇻", "🇳🇮", "🇨🇷", "🇵🇦", "🇩🇴",
  "🇵🇷", "🇧🇴", "🇵🇾", "🇺🇾", "🇨🇺"
];

export default function RandomFlag({ lang = "es" }) {
  const [flag, setFlag] = useState("🌐");

  useEffect(() => {
    if (lang === "es") {
      const random =
        spanishFlags[Math.floor(Math.random() * spanishFlags.length)];
      setFlag(random);
    } else if (lang === "en") {
      setFlag("🇺🇸");
    } else {
      setFlag("🌐");
    }
  }, [lang]);

  return <span>{flag}</span>;
}