"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function DownloadPage() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "emwechu";

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
          <h1>📘 Access Your ASL Dictionary</h1>
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
            Passwords are based on the language of the dictionary you purchased.
          </p>

          {error && <p className={styles.error}>{error}</p>}
        </div>
      ) : (
        <div className={styles.card}>
          <h1>📘 Your Dictionary is Ready</h1>

          <p>Click below to view or download your dictionary:</p>

          <a
            href="/pdfs/chuukese-dictionary.pdf"
            target="_blank"
            className={styles.downloadButton}
          >
            📥 Download PDF
          </a>

          <a
            href="/pdfs/chuukese-dictionary.pdf"
            target="_blank"
            className={styles.viewButton}
          >
            👀 View Online
          </a>

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