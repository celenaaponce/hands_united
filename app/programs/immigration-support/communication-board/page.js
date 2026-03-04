"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CommunicationBoard from "../../../../components/communicationBoard/CommunicationBoard";
import { immigrationBoardData } from "../../../../components/communicationBoard/immigrationBoardData";
import { translations } from "../../../../components/communicationBoard/translations";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const [secondaryLang, setSecondaryLang] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedLang = localStorage.getItem("secondaryLang");
    if (storedLang) {
      setSecondaryLang(storedLang);
    }

    // 🔥 Listen for updates
    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem("secondaryLang");
      setSecondaryLang(updatedLang);
    };

    window.addEventListener("languageChanged", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("secondaryLang");
    if (storedLang) {
      setSecondaryLang(storedLang);
    }
  }, []);

  const getText = (key) => {
    if (!mounted) return translations[key]?.en || "";
    return translations[key]?.[secondaryLang] || translations[key]?.en || "";
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <div className={styles.topDecisionRow}>
        {/* LEFT – Not Detained Info */}
        <div className={styles.notDetainedBlock}>
          <div className={styles.detainedRow}>
            <span>🙅🏾</span>
            <img src="/icons/detained.svg" className={styles.iconLarge} />
            <span>{getText("notDetainedQuestion")}</span>
          </div>

          <div className={styles.line}>
            <span>👍🏽</span>
            <span>🤐</span>
            <span>{getText("staySilentShort")}</span>
          </div>

          <div className={styles.line}>
            <span>👎🏽</span>
            <span>📄</span>
            <span>{getText("doNotShowPapers")}</span>
          </div>

          <div className={styles.line}>
            <span>👍🏽</span>
            <span>⚖️</span>
            <span>{getText("askForLawyer")}</span>
          </div>
        </div>

        {/* CENTER – Digital Rights Card */}
        <Link
          href="/programs/immigration-support/digital-kyr"
          className={styles.detainedCard}
        >
          <div className={styles.detainedRow}>
            <img src="/icons/rights.svg" className={styles.iconLarge} />
            📱
            <span>{getText("digitalRightsCard")}</span>
          </div>

          <div className={styles.detainedRow}>
            <img src="/icons/click.svg" className={styles.iconLarge} />
            {getText("clickHere")}
          </div>
        </Link>

        {/* RIGHT – Detained Link */}
        <Link
          href="/programs/immigration-support/communication-board/detained"
          className={styles.detainedCard}
        >
          <div className={styles.detainedRow}>
            <img src="/icons/detained.svg" className={styles.iconLarge} />
            <span className={styles.emoji}>❓</span>
            <div>{getText("detainedQuestion")}</div>
          </div>

          <div className={styles.line}>
            <img src="/icons/click.svg" className={styles.iconLarge} />
            <div>{getText("clickHere")}</div>
          </div>
        </Link>
      </div>

      <CommunicationBoard
        data={immigrationBoardData}
        alertMessage="🚨 I AM DEAF. I REQUIRE A QUALIFIED SIGN LANGUAGE INTERPRETER."
      />
    </main>
  );
}
