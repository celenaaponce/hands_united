"use client";

import styles from "./page.module.css";
import Link from "next/link";

const videos = [
  {
    title: "Know Your Rights (ASL 🇺🇸 & LSC 🇨🇴 & LSV 🇻🇪)",
    url: "https://www.youtube.com/watch?v=PQ6k3tcVPjk",
    thumbnail: "https://i.ytimg.com/vi/PQ6k3tcVPjk/maxresdefault.jpg",
    duration: "59:23",
  },
  {
    title: "Know Your Rights (ASL 🇺🇸 / LSM 🇲🇽)",
    url: "https://www.youtube.com/watch?v=9ZIdf3JsRAA",
    thumbnail: "https://i.ytimg.com/vi/9ZIdf3JsRAA/maxresdefault.jpg",
    duration: "1:04:34",
  },
  {
    title: "Know Your Rights | ASL & LSEC 🇪🇨",
    url: "https://www.youtube.com/watch?v=SD2_6qEvWdE",
    thumbnail: "https://i.ytimg.com/vi/SD2_6qEvWdE/maxresdefault.jpg",
    duration: "1:08:58",
  },
  {
    title: "Know Your Rights (ASL / LSM)",
    url: "https://www.youtube.com/watch?v=8C86cbehHZ4",
    thumbnail: "https://i.ytimg.com/vi/8C86cbehHZ4/maxresdefault.jpg",
    duration: "47:26",
  },
  {
    title: "Know Your Rights – Jan 29 Presentation",
    url: "https://www.youtube.com/watch?v=aV5jntTFcZg",
    thumbnail: "https://i.ytimg.com/vi/aV5jntTFcZg/maxresdefault.jpg",
    duration: "28:20",
  },
  {
    title: "ICE Visitation Rights",
    url: "https://www.youtube.com/watch?v=dOHl5CV6dAM",
    thumbnail: "https://i.ytimg.com/vi/dOHl5CV6dAM/maxresdefault.jpg",
    duration: "49:52",
  },
  {
    title: "Simple Know Your Rights (Spanish & ASL)",
    url: "https://www.youtube.com/watch?v=7wfi4zrefqI",
    thumbnail: "https://i.ytimg.com/vi/7wfi4zrefqI/maxresdefault.jpg",
    duration: "6:02",
  },
  {
    title: "ICE at the Door (LSM 🇲🇽)",
    url: "https://www.youtube.com/watch?v=__xtHW-8FRY",
    thumbnail: "https://i.ytimg.com/vi/__xtHW-8FRY/maxresdefault.jpg",
    duration: "3:23",
  },
  {
    title: "ICE at the Door (LSP 🇵🇪)",
    url: "https://www.youtube.com/watch?v=vGnrZ090uUY",
    thumbnail: "https://i.ytimg.com/vi/vGnrZ090uUY/maxresdefault.jpg",
    duration: "2:58",
  },
  {title: "How to Open and Use a USCIS Account",
    url: "https://youtu.be/lWd0_ykY8PI?si=z-cGYDxaOx6CjpmS",
    thumbnail: "https://i.ytimg.com/vi/lWd0_ykY8PI/maxresdefault.jpg",
    duration: "17:00"
  }
];

export default function SignLanguageWorkshopsPage() {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Workshops in Sign Languages
      </h1>

      <p className={styles.subtitle}>
        Workshops presented in American Sign Language and other international sign languages.
      </p>

      <div className={styles.grid}>
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.thumbnailContainer}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles.thumbnail}
              />
              <span className={styles.duration}>
                {video.duration}
              </span>
            </div>

            <div className={styles.cardTitle}>
              {video.title}
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}