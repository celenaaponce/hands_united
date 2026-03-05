"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import signLanguages from "../../../data/sign-languages.json";
import videoData from "../../../../components/kyrlayout/kyr.json";

export default function DigitalKYRPage() {

  const [selectedCode, setSelectedCode] = useState(signLanguages[0].code);
  const [flipped, setFlipped] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // LOAD saved language on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredSignLanguage");
    if (savedLang) {
      setSelectedCode(savedLang);
    }
  }, []);

  const handleLanguageChange = (value) => {
    setSelectedCode(value);
    localStorage.setItem("preferredSignLanguage", value);
  };

  const selected = signLanguages.find((lang) => lang.code === selectedCode);

  const matchingVideo = videoData.find(
    (video) => video.countryCode === selected?.countryCode
  );

  const videoId =
    matchingVideo?.youtubeId || matchingVideo?.youtubeId2 || null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Digital Know Your Rights Card</h1>

      {/* Dropdown */}
      <div className={styles.dropdown}>
        <label className={styles.dropdownLabel}>Your language:</label>

        <select
          value={selectedCode}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          {signLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.acronym} ({lang.name})
            </option>
          ))}
        </select>
      </div>

      {/* Watch Button (only if video exists) */}
      {videoId && (
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowVideo(true);
            }}
            style={{
              padding: "8px 14px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            🎥 Watch
          </button>
        </div>
      )}

      {/* Card */}
      <div
        className={`${styles.card} ${flipped ? styles.flip : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* FRONT */}
        <div className={styles.front}>
          <h3>Know Your Rights</h3>

          <div className={styles.rightsList}>
            <p>
              <span className={styles.emoji}>👎🏽 🗣️</span>
              I do <span className={styles.emphasis}>not</span> wish to{" "}
              <span className={styles.emphasis}>speak</span> with you.
            </p>

            <p>
              <span className={styles.emoji}>👍🏽 ⚖️</span>
              I <span className={styles.emphasis}>want</span> to speak to a{" "}
              <span className={styles.emphasis}>lawyer</span>.
            </p>

            <p>
              <span className={styles.emoji}>👎🏽 🚪</span>
              I do <span className={styles.emphasis}>not</span> give permission to{" "}
              <span className={styles.emphasis}>enter</span>.
            </p>

            <p>
              <span className={styles.emoji}>👎🏽 🔍</span>
              I do <span className={styles.emphasis}>not</span> give permission to{" "}
              <span className={styles.emphasis}>search</span>.
            </p>
          </div>

          <p className={styles.flipHintFront}>Tap to flip →</p>
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <h3>Deaf Rights Notice</h3>

          <p>
            I am <span className={styles.emphasis}>Deaf/hard of hearing</span>.
            Per Section 504, I have the right to a{" "}
            <span className={styles.emphasis}>hearing interpreter</span> and a{" "}
            <span className={styles.emphasis}>Deaf interpreter</span>.
          </p>

          <p>My preferred sign language is:</p>

          <div className={styles.languageDisplay}>
            {selected.name} ({selected.acronym})
          </div>

          <p className={styles.flipHint}>Tap to flip →</p>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "600px",
            }}
          >
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Sign Language Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}