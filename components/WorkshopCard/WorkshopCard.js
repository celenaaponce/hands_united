"use client";

import { useState } from "react";
import styles from "./WorkshopCard.module.css";
import ZeffyEmbed from "../zeffyembed/zeffy-embed"; // adjust path if needed
import { createPortal } from "react-dom";

export default function WorkshopCard({ workshop }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.title}>{workshop.title}</h3>

          {workshop.languages && (
            <p className={styles.languages}>
              🌍 {workshop.languages.join(" • ")}
            </p>
          )}

          {workshop.ceu && <p className={styles.ceu}>🎓 {workshop.ceu} CEUs</p>}

          <p className={styles.price}>💲{workshop.price}</p>
        </div>

        <button className={styles.button} onClick={() => setOpen(true)}>
          View Workshop
        </button>
      </div>

      {/* MODAL */}
      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <div className={styles.embedWrapper}>
                <ZeffyEmbed title={workshop.title} src={workshop.link} />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
