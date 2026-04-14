"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function DownloadPage() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "aprender";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredPassword.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {!isUnlocked ? (
        <div className={styles.card}>
          <h1>📘 Access Your ASL Resources</h1>
          <p>Please enter the password provided in your email.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Unlock
            </button>
          </form>

          <p style={{ fontSize: "0.9rem", marginTop: "10px", color: "#666" }}>
            Passwords are based on the language of the resource you purchased.
          </p>

          {error && <p className={styles.error}>{error}</p>}
        </div>
      ) : (
        <div className={styles.card}>
          <h1>📘 Your Resources Are Ready</h1>

          <p>Click below to access your materials:</p>

          {/* Dictionary */}
          <a
            href="/pdfs/spanish-dictionary.pdf"
            target="_blank"
            className={styles.downloadButton}
          >
            📘 Download Dictionary (PDF)
          </a>

          {/* Slides PDF */}
          <a
            href="/pdfs/spanish-slides.pdf"
            target="_blank"
            className={styles.viewButton}
          >
            📄 Download Slides (PDF)
          </a>

          {/* Google Slides */}
          <a
            href="https://docs.google.com/presentation/d/XXXXXXXX"
            target="_blank"
            className={styles.viewButton}
          >
            🖥 Open Google Slides
          </a>

          {/* Optional instruction (VERY helpful for teachers) */}
          <p style={{ marginTop: "16px", fontSize: "0.9rem" }}>
            Tip: You can make a copy of the Google Slides to edit for your own use.
          </p>

          {/* Mission-aligned message */}
          <div className={styles.notice}>
            <p>
              This resource was created to support families and educators.
            </p>
            <p>
              If you are an educator, you are welcome to use this with the families you support.
            </p>
            <p>
              If others are interested, we invite them to support this work so we can continue creating resources.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}