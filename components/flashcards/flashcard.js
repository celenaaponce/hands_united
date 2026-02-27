"use client";

import styles from "./flashcard.module.css";

export default function Flashcard({ flashcard, onWatch }) {
  function handleClick() {
    if (flashcard.link && onWatch) {
      onWatch(flashcard.link);
    }
  }

  function handleKeyDown(e) {
    if ((e.key === "Enter" || e.key === " ") && flashcard.link && onWatch) {
      e.preventDefault();
      onWatch(flashcard.link);
    }
  }

  return (
    <div
      className={`${styles.card} theme-${flashcard.languageCode}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* LANGUAGE BADGE */}
      {flashcard.languageBadge && (
        <div className={styles.languageBadge}>
          {flashcard.languageBadge}
        </div>
      )}

      {/* IMAGE */}
      <div className={styles.image}>
        {flashcard.image && (
          <img
            src={flashcard.image}
            alt={flashcard.word}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        )}

        {/* WATCH OVERLAY */}
        {flashcard.link && (
          <div className={styles.watchOverlay}>
            🎥 {flashcard.watchText || "Watch"}
          </div>
        )}
      </div>

      {/* WORD */}
      <div className={styles.headerText}>
        <h2>{flashcard.word}</h2>
      </div>
    </div>
  );
}