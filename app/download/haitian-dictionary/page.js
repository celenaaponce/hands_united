
"use client";

import { useState } from "react";
import styles from "./page.module.css";

const dictionaries = {
  manje: {
    title: "Haitian Creole Food Dictionary",
    file: "/pdfs/haitian-food-dictionary.pdf",
  },
  aprann: {
    title: "Haitian Creole Family Dictionary",
    file: "/pdfs/haitian-family-dictionary.pdf",
  },
};

export default function DownloadPage() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [selectedDictionary, setSelectedDictionary] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = enteredPassword.trim().toLowerCase();
    const dictionary = dictionaries[password];

    if (dictionary) {
      setSelectedDictionary(dictionary);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {!selectedDictionary ? (
        <div className={styles.card}>
          <h1>📘 Access Your ASL Dictionary</h1>
          <p>Please enter the password provided in your purchase email.</p>

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

          {error && <p className={styles.error}>{error}</p>}
        </div>
      ) : (
        <div className={styles.card}>
          <h1>📘 {selectedDictionary.title}</h1>

          <p>Your dictionary is ready to view or download.</p>

          <a
            href={selectedDictionary.file}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            📥 Download PDF
          </a>

          <a
            href={selectedDictionary.file}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            👀 View Online
          </a>

          <div className={styles.notice}>
            <p>
              This resource was created to support families.
              Please do not share this link publicly.
            </p>
            <p>
              If others are interested, we invite them to support
              this work so we can continue creating resources.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
