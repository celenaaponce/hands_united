"use client";

import styles from "./VideoModal.module.css";
import { usePathname } from "next/navigation";

export default function VideoModal({ video, onClose }) {
  const pathname = usePathname();

  const youtubeLabels = {
    english: "Watch on YouTube ↗",
    spanish: "Ver en YouTube ↗",
    "haitian-creole": "Gade sou YouTube ↗",
    russian: "Смотреть на YouTube ↗",
    burmese: "YouTube တွင်ကြည့်ရန် ↗",
    "tigrinya-amharic": "Watch on YouTube ↗",
  };

  const segments = pathname.split("/").filter(Boolean);

  const languageSlug = segments[1];

  const youtubeText = youtubeLabels[languageSlug] ?? "Watch on YouTube ↗";
  if (!video) return null;

  const videoId = video.url.split("v=")[1];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.title}>{video.title}</div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeLink}
        >
          {youtubeText}
        </a>
      </div>
    </div>
  );
}
