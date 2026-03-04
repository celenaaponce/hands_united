"use client";

import { useEffect, useState } from "react";
import styles from "./communicationBoard.module.css";
import { supportedLanguages } from "./languages";
import TabNav from "./TabNav";
import TabContent from "./TabContent";
import { getLanguageFlag } from "../../utils/getLanguageFlag";

export default function CommunicationBoard({ data = [], alertMessage = null }) {
  const [activeTab, setActiveTab] = useState(data?.[0]?.id || null);
  const [secondaryLang, setSecondaryLang] = useState(null);
  const [deviceSeed, setDeviceSeed] = useState("default");
  const [mounted, setMounted] = useState(false);

  // ✅ Run ONLY on client after mount
  useEffect(() => {
    setMounted(true);

    // Restore secondary language
    const storedLang = localStorage.getItem("secondaryLang");
    if (storedLang) {
      setSecondaryLang(storedLang);
    }

    // Restore or generate device seed
    let storedSeed = localStorage.getItem("deviceSeed");
    if (!storedSeed) {
      storedSeed = Math.random().toString(36).substring(2);
      localStorage.setItem("deviceSeed", storedSeed);
    }

    setDeviceSeed(storedSeed);
  }, []);

  const handleLangChange = (value) => {
    setSecondaryLang(value);

    if (value) {
      localStorage.setItem("secondaryLang", value);
    } else {
      localStorage.removeItem("secondaryLang");
    }

    // 🔥 Notify the rest of the app
    window.dispatchEvent(new Event("languageChanged"));
  };

  const currentTab = data?.find((tab) => tab.id === activeTab);

  return (
    <div className={styles.container}>
      {/* ✅ Dynamic Alert Banner */}
      {alertMessage && <div className={styles.alertBanner}>{alertMessage}</div>}

      {/* ✅ Language Selector */}
      <div className={styles.languageBar}>
        <span className={styles.primaryLanguage}>🇺🇸 English +</span>

        <select
          value={mounted ? secondaryLang || "" : ""}
          onChange={(e) => handleLangChange(e.target.value || null)}
        >
          <option value="">None</option>

          {supportedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {mounted
                ? `${getLanguageFlag(lang.code, deviceSeed)} ${lang.label}`
                : lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Pass language only after mount to prevent hydration mismatch */}
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
