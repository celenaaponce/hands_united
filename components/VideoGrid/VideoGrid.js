"use client";

import { useState } from "react";
import styles from "./VideoGrid.module.css";
import VideoModal from "../VideoModal/VideoModal.js";

export default function VideoGrid({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setSelectedVideo(video)}
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
          </div>
        ))}
      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}