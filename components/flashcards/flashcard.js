"use client";
import styles from "./flashcard.module.css";
import React, { useState } from "react";

export default function Flashcard({ flashcard }) {
  let url;
  const [flip, setFlip] = useState(false);

  if (flashcard.link) {
    url =
      flashcard.link.replace("shorts", "embed").replace("feature=share", "") +
      "?rel=0&modestbranding=1";
  } else {
    url = "";
  }

  const addedName = `${styles.card} ${flip ? styles.flip : ""}`;

  return (
    <div
      className={`${addedName} theme-${flashcard.languageCode}`}
      onClick={() => setFlip(!flip)}
    >
      {/* LANGUAGE BADGE */}
      {flashcard.languageBadge && (
        <div className={styles.languageBadge}>{flashcard.languageBadge}</div>
      )}

      <div className={styles.front}>
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
        </div>

        <div className={styles.headerText}>
          <h2>{flashcard.word}</h2>

          <p style={{ textAlign: "right" }}>
            {flashcard.flipText || "See other side →"}
          </p>
        </div>
      </div>

      <div className={styles.back}>
        {url && (
          <iframe
            loading="lazy"
            src={url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}

        {flashcard.synonyms.length !== 0 && (
          <div className={styles.summary}>
            <p>Sinónimos:</p>
            {flashcard.synonyms[0]}
          </div>
        )}
      </div>
    </div>
  );
}
