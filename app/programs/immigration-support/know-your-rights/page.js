"use client";

import Link from "next/link";
import styles from "./page.module.css";

const FILE_URL = "/resources/KYR.pdf";

export default function KYRPage() {
  return (
    <div className={styles.container}>
      
      {/* Header */}
      <h1 className={styles.title}>
        Know Your Rights Cards
      </h1>

      <p className={styles.subtitle}>
        You can view the printable cards below or download them to use on your phone or print.
      </p>

      {/* NEW: Sign Language Version Link */}
      <div className={styles.signLanguageBox}>
        <h2 className={styles.signLanguageTitle}>
          🌎 Know Your Rights in Sign Languages
        </h2>

        <p className={styles.signLanguageText}>
          Access Know Your Rights digital card.
        </p>

        <Link
          href="/programs/immigration-support/digital-kyr"
          className={styles.primaryButton}
        >
          View Digital Card →
        </Link>
      </div>

      {/* Buttons */}
      <div className={styles.actions}>
        <a
          href={FILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
        >
          🔎 View Full Size
        </a>

        <a
          href={FILE_URL}
          download
          className={styles.secondaryButton}
        >
          ⬇️ Download
        </a>

        <a
          href={FILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButton}
        >
          🖨️ Print
        </a>
      </div>

      {/* Embedded PDF */}
      <div className={styles.viewer}>
        <iframe
          src={FILE_URL}
          className={styles.iframe}
          title="Know Your Rights Cards"
        />
      </div>

    </div>
  );
}