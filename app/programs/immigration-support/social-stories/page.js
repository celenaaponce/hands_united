"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const stories = [
  {
    key: "door",
    title: "ICE at the Door",
    description:
      "A visual social story explaining what to do if ICE comes to your home.",
    enFile: "/resources/ICE at the door.pdf",
    esFile: "/resources/ICE at the door Spanish.pdf",
    thumbnail: "/images/ice_door.png",
  },
  {
    key: "street",
    title: "ICE in the Street",
    description:
      "A social story about what to do if ICE stops you in public.",
    enFile: "/resources/ICE in the street.pdf",
    esFile: "/resources/ICE in the street Spanish.pdf",
    thumbnail: "/images/ice_street.png",
  },
  {
    key: "school",
    title: "ICE at School",
    description:
      "A social story about ICE-related situations involving schools.",
    enFile: "/resources/ICE in the school.pdf",
    esFile: "/resources/ICE in the school Spanish.pdf",
    thumbnail: "/images/ice_school.png",
  },
  {
    key: "lovedone",
    title: "ICE Has Your Loved One",
    description:
      "A social story about what to do if ICE detains a family member.",
    enFile: "/resources/ICE has your loved one.pdf",
    esFile: "/resources/ICE has your loved one Spanish.pdf",
    thumbnail: "/images/ice_loved.png",
  },
];

const safeUrl = (url) => encodeURI(url);

export default function SocialStoriesPage() {
  const defaultSelection = useMemo(() => {
    const first = stories[0];
    return {
      storyKey: first.key,
      lang: "en",
      title: `${first.title} (English)`,
      file: first.enFile,
    };
  }, []);

  const [selected, setSelected] = useState(defaultSelection);

  const selectedFile = safeUrl(selected.file);
  const selectedTitle = selected.title;

  const handleSelect = (story, lang) => {
    const file = lang === "en" ? story.enFile : story.esFile;
    const suffix = lang === "en" ? "(English)" : "(Spanish)";
    setSelected({
      storyKey: story.key,
      lang,
      title: `${story.title} ${suffix}`,
      file,
    });

    requestAnimationFrame(() => {
      const el = document.getElementById("viewer");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className={styles.container}>


      <h1 className={styles.title}>Social Stories</h1>

      <p className={styles.subtitle}>
        Visual stories designed to help Deaf and hard of hearing families
        prepare for possible ICE situations. Choose a topic and language.
      </p>

      <div className={styles.grid}>
        {stories.map((story) => {
          const isActive = selected.storyKey === story.key;

          return (
            <div key={story.key} className={styles.card}>
              <div className={styles.thumbnailContainer}>
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className={styles.thumbnail}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{story.title}</div>
                <div className={styles.cardDescription}>
                  {story.description}
                </div>

                <div className={styles.langButtons}>
                  <button
                    onClick={() => handleSelect(story, "en")}
                    className={
                      isActive && selected.lang === "en"
                        ? styles.primaryButton
                        : styles.secondaryButton
                    }
                  >
                    🇺🇸 English
                  </button>

                  <button
                    onClick={() => handleSelect(story, "es")}
                    className={
                      isActive && selected.lang === "es"
                        ? styles.primaryButton
                        : styles.secondaryButton
                    }
                  >
                    🇲🇽 Español
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="viewer" className={styles.viewerBlock}>
        <h2 className={styles.sectionTitle}>📖 {selectedTitle}</h2>

        <div className={styles.actions}>
          <a
            href={selectedFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            🔎 View Full Size
          </a>

          <a href={selectedFile} download className={styles.secondaryButton}>
            ⬇️ Download
          </a>

          <a
            href={selectedFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            🖨️ Print
          </a>
        </div>

        <div className={styles.viewer}>
          <iframe
            src={`${selectedFile}#toolbar=0`}
            className={styles.iframe}
            title={selectedTitle}
          />
        </div>
      </div>
    </div>
  );
}