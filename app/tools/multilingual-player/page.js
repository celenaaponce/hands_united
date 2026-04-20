"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MultilingualPlayer.module.css";

// ===== PARSER =====
function parseVTT(data) {
  const lines = data.split("\n");
  const cues = [];

  let i = 0;
  while (i < lines.length) {
    if (lines[i].includes("-->")) {
      const [start, end] = lines[i].split(" --> ");

      const startTime = toSeconds(start);
      const endTime = toSeconds(end);

      let text = "";
      i++;

      while (lines[i] && lines[i].trim() !== "") {
        text += lines[i] + " ";
        i++;
      }

      cues.push({ start: startTime, end: endTime, text: text.trim() });
    }
    i++;
  }

  return cues;
}

function toSeconds(time) {
  const parts = time.split(":");
  const seconds = parseFloat(parts.pop());
  const minutes = parseInt(parts.pop());
  const hours = parts.length ? parseInt(parts.pop()) : 0;

  return hours * 3600 + minutes * 60 + seconds;
}

// ===== NORMALIZE =====
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[.,!?¿¡]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ===== SIMILARITY =====
function areSimilar(a, b) {
  const na = normalize(a);
  const nb = normalize(b);

  if (!na || !nb) return false;

  const wordsA = na.split(" ");
  const wordsB = nb.split(" ");

  const shorter = wordsA.length < wordsB.length ? wordsA : wordsB;
  const longer = wordsA.length < wordsB.length ? wordsB : wordsA;

  let matchCount = 0;
  shorter.forEach((w) => {
    if (longer.includes(w)) matchCount++;
  });

  return matchCount / longer.length > 0.7;
}

export default function MultilingualPlayerPage() {
  const videoRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const [englishCues, setEnglishCues] = useState([]);
  const [spanishCues, setSpanishCues] = useState([]);

  const [currentEnglish, setCurrentEnglish] = useState("");
  const [currentSpanish, setCurrentSpanish] = useState("");

  const [showEnglish, setShowEnglish] = useState(true);
  const [showSpanish, setShowSpanish] = useState(true);

  // ===== HYDRATION FIX =====
  useEffect(() => {
    setMounted(true);
  }, []);

  // ===== LOAD EPISODES =====
  useEffect(() => {
    async function loadEpisodes() {
      const res = await fetch("/data/episodes.json");
      const json = await res.json();

      setEpisodes(json.episodes);
      setCurrentEpisode(json.episodes[0]);
    }

    loadEpisodes();
  }, []);

  // ===== LOAD SUBTITLES (FIXED) =====
  useEffect(() => {
    if (!currentEpisode) return;

    async function loadSubs() {
      try {
        const en = await fetch(
          `/api/vtt?url=${encodeURIComponent(currentEpisode.english)}`,
        )
          .then((r) => r.text())
          .then((t) => t.replace(/^\uFEFF/, ""));

        const es = await fetch(
          `/api/vtt?url=${encodeURIComponent(currentEpisode.spanish)}`,
        )
          .then((r) => r.text())
          .then((t) => t.replace(/^\uFEFF/, ""));

        console.log("EN RAW:", en.slice(0, 100));
        console.log("ES RAW:", es.slice(0, 100));

        const parsedEN = parseVTT(en);
        const parsedES = parseVTT(es);

        console.log("EN cues:", parsedEN);
        console.log("ES cues:", parsedES);

        setEnglishCues(parsedEN);
        setSpanishCues(parsedES);
      } catch (err) {
        console.error("Subtitle load failed:", err);
      }
    }

    loadSubs();
  }, [currentEpisode]);

  // ===== SYNC =====
  useEffect(() => {
    const video = videoRef.current;

    function updateSubs() {
      if (!video) return;

      const time = video.currentTime;

      const enCue = englishCues.find((c) => time >= c.start && time <= c.end);
      const esCue = spanishCues.find((c) => time >= c.start && time <= c.end);

      setCurrentEnglish(enCue ? enCue.text : "");
      setCurrentSpanish(esCue ? esCue.text : "");
    }

    video?.addEventListener("timeupdate", updateSubs);

    return () => {
      video?.removeEventListener("timeupdate", updateSubs);
    };
  }, [englishCues, spanishCues]);

  const showOnlyOne =
    currentEnglish &&
    currentSpanish &&
    areSimilar(currentEnglish, currentSpanish);

  if (!mounted) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> </h1>

      {/* DROPDOWN */}
      {episodes.length > 0 && (
        <select
          value={currentEpisode?.id || ""}
          onChange={(e) => {
            const ep = episodes.find((x) => x.id === e.target.value);
            setCurrentEpisode(ep);
          }}
        >
          {episodes.map((ep) => (
            <option key={ep.id} value={ep.id}>
              {ep.title}
            </option>
          ))}
        </select>
      )}
      <h1 className={styles.title}> </h1>
      {/* VIDEO */}
      {currentEpisode && (
        <div className={styles.playerWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            controls
            src={currentEpisode.video}
          />

          {(showSpanish && currentSpanish && (!showOnlyOne || !showEnglish)) && (
            <div className={`${styles.subtitle} ${styles.top}`}>
              <span
                dangerouslySetInnerHTML={{
                  __html: currentSpanish.replace(/<\/?br\s*\/?>/g, "<br/>"),
                }}
              />
            </div>
          )}

          {showEnglish && currentEnglish && (
            <div className={`${styles.subtitle} ${styles.bottom}`}>
              <span
                dangerouslySetInnerHTML={{
                  __html: currentEnglish.replace(/<\/?br\s*\/?>/g, "<br/>"),
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* CONTROLS */}
      <div className={styles.controls}>
        <div className={styles.toggleRow}>
          <span>English</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showEnglish}
              onChange={() => setShowEnglish(!showEnglish)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.toggleRow}>
          <span>Spanish</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showSpanish}
              onChange={() => setShowSpanish(!showSpanish)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
}
