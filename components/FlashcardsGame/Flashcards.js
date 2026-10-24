"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { flashcards as defaultCards, PLAYLIST_ID } from "./flashcardData";
import "./Flashcards.css";

/**
 * Flip flashcards: drawing on the front, YouTube video on the back.
 * Reusable for any language: pass a different cards list and imageBasePath.
 *
 * Props
 *  - cards          array of cards (defaults to ./flashcardData.js)
 *  - imageBasePath  folder inside /public that holds the drawings
 *  - playlistId     YouTube playlist used when a card has no videoId
 *  - uiLanguage     "en" | "ht" | "es" for button labels (default "en")
 *  - showEnglish    show the English meaning under the counter (default false)
 */

const LABELS = {
  en: { showVideo: "Show video", showPicture: "Show picture", of: "of", shuffle: "Shuffle", original: "Original order", prev: "Previous card", next: "Next card" },
  ht: { showVideo: "Montre videyo a", showPicture: "Montre imaj la", of: "sou", shuffle: "Melanje", original: "Lòd orijinal", prev: "Kat anvan an", next: "Pwochen kat la" },
  es: { showVideo: "Ver video", showPicture: "Ver imagen", of: "de", shuffle: "Mezclar", original: "Orden original", prev: "Tarjeta anterior", next: "Siguiente tarjeta" },
};

function videoSrc(card, playlistId) {
  const params = "rel=0&modestbranding=1&playsinline=1";
  if (card.videoId) {
    return `https://www.youtube-nocookie.com/embed/${card.videoId}?${params}`;
  }
  return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&index=${card.playlistIndex}&${params}`;
}

function shuffled(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Flashcards({
  cards = defaultCards,
  imageBasePath = "/games/haitian-food/",
  playlistId = PLAYLIST_ID,
  uiLanguage = "en",
  showEnglish = false,
}) {
  const t = LABELS[uiLanguage] || LABELS.en;
  const [order, setOrder] = useState(cards || []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setOrder(cards || []);
    setIndex(0);
    setFlipped(false);
  }, [cards]);

  const card = order[index];
  const total = order.length;

  const go = useCallback(
    (step) => {
      setFlipped(false);
      setIndex((i) => (i + step + total) % total);
    },
    [total]
  );

  const flip = useCallback(() => setFlipped((f) => !f), []);

  const shuffle = () => {
    setOrder(shuffled(cards || []));
    setIndex(0);
    setFlipped(false);
  };

  const restore = () => {
    setOrder(cards || []);
    setIndex(0);
    setFlipped(false);
  };

  // Keyboard: arrows to move, space or Enter to flip.
  const onKeyDown = (e) => {
    if (e.target.closest("button") && (e.key === " " || e.key === "Enter")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    else if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
  };

  // Preload the next drawing so moving forward feels instant.
  const nextImage = useMemo(() => (total ? order[(index + 1) % total]?.image : null), [order, index, total]);
  useEffect(() => {
    if (!nextImage) return;
    const img = new Image();
    img.src = imageBasePath + nextImage;
  }, [nextImage, imageBasePath]);

  if (!card) return null;

  return (
    <section className="fc" onKeyDown={onKeyDown} tabIndex={-1} aria-label="Flashcards">
      <div className={`fc-card ${flipped ? "is-flipped" : ""}`}>
        <div className="fc-inner">
          {/* Front: drawing */}
          <button
            type="button"
            className="fc-face fc-front"
            onClick={flip}
            aria-hidden={flipped}
            tabIndex={flipped ? -1 : 0}
            aria-label={`${card.word}. ${t.showVideo}.`}
          >
            <img
              src={imageBasePath + card.image}
              alt={`${card.word} (${card.english})`}
              draggable="false"
            />
          </button>

          {/* Back: video. Only mounted while flipped, so it stops when you flip back. */}
          <div className="fc-face fc-back" aria-hidden={!flipped}>
            {flipped && (
              <iframe
                key={card.id}
                src={videoSrc(card, playlistId)}
                title={`Video: ${card.word}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>

      <div className="fc-controls">
        <button type="button" className="fc-btn" onClick={() => go(-1)} aria-label={t.prev}>
          ‹
        </button>
        <button type="button" className="fc-btn fc-btn-main" onClick={flip}>
          {flipped ? t.showPicture : t.showVideo}
        </button>
        <button type="button" className="fc-btn" onClick={() => go(1)} aria-label={t.next}>
          ›
        </button>
      </div>

      <div className="fc-meta">
        <span aria-live="polite">
          {index + 1} {t.of} {total}
          {showEnglish && <em className="fc-english">{card.english}</em>}
        </span>
        <span className="fc-meta-actions">
          <button type="button" className="fc-link" onClick={shuffle}>{t.shuffle}</button>
          {order !== cards && (
            <button type="button" className="fc-link" onClick={restore}>{t.original}</button>
          )}
        </span>
      </div>
    </section>
  );
}