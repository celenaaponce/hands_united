"use client";

import { useEffect, useState } from "react";
import styles from "./communicationBoard.module.css";
import { supportedLanguages } from "./languages";
import TabNav from "./TabNav";
import TabContent from "./TabContent";

// Spanish flags
const spanishFlags = [
  "🇲🇽",
  "🇪🇸",
  "🇨🇴",
  "🇦🇷",
  "🇵🇪",
  "🇨🇱",
  "🇻🇪",
  "🇪🇨",
  "🇬🇹",
  "🇭🇳",
  "🇸🇻",
  "🇳🇮",
  "🇨🇷",
  "🇵🇦",
  "🇩🇴",
  "🇵🇷",
  "🇧🇴",
  "🇵🇾",
  "🇺🇾",
  "🇨🇺",
];

// simple random picker
function getRandomSpanishFlag() {
  return spanishFlags[Math.floor(Math.random() * spanishFlags.length)];
}

function getStaticFlag(code) {
  switch (code) {
    case "en":
      return "🇺🇸";
    case "ru":
      return "🇷🇺";
    case "my":
      return "🇲🇲";
    case "ht":
      return "🇭🇹";
    case "ti":
      return "🇪🇷";
    case "am":
      return "🇪🇹";
    case "chk":
      return "🇫🇲";
    default:
      return "🌐";
  }
}

export default function CommunicationBoard({ data = [], alertMessage = null }) {
  const [activeTab, setActiveTab] = useState(data?.[0]?.id || null);
  const [secondaryLang, setSecondaryLang] = useState(null);
  const [mounted, setMounted] = useState(false);

  // 🔥 store random Spanish flag for THIS page load
  const [spanishFlag, setSpanishFlag] = useState("🇪🇸");

  useEffect(() => {
    setMounted(true);

    // restore selected language
    const storedLang = localStorage.getItem("secondaryLang");
    if (storedLang) {
      setSecondaryLang(storedLang);
    }

    // 🔥 generate new random flag on each load
    setSpanishFlag(getRandomSpanishFlag());
  }, []);

  const handleLangChange = (value) => {
    setSecondaryLang(value);

    if (value) {
      localStorage.setItem("secondaryLang", value);
    } else {
      localStorage.removeItem("secondaryLang");
    }

    window.dispatchEvent(new Event("languageChanged"));
  };

  const currentTab = data?.find((tab) => tab.id === activeTab);

  return (
    <div className={styles.container}>
      {alertMessage && <div className={styles.alertBanner}>{alertMessage}</div>}

      <div className={styles.languageBar}>
        <span className={styles.primaryLanguage}>🇺🇸 English +</span>

        <select
          value={mounted ? secondaryLang || "" : ""}
          onChange={(e) => handleLangChange(e.target.value || null)}
        >
          <option value="">None</option>

          {supportedLanguages.map((lang) => {
            let flag = "";

            if (mounted) {
              if (lang.code === "es") {
                flag = spanishFlag; // 🔥 random per load
              } else {
                flag = getStaticFlag(lang.code);
              }
            }

            return (
              <option key={lang.code} value={lang.code}>
                {mounted ? `${flag} ${lang.label}` : lang.label}
              </option>
            );
          })}
        </select>
      </div>

      {currentTab && (
        <TabContent
          tab={currentTab}
          secondaryLang={mounted ? secondaryLang : null}
        />
      )}

      {data.length > 0 && (
        <TabNav tabs={data} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}