"use client";
import styles from "./flashcard.module.css";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function Flashcard({ flashcard, key }) {
  // console.log(flashcard.word)
  let url;
  const [flip, setFlip] = useState(false);

  if (flashcard.link) {
    url = flashcard.link.replace("shorts", "embed").replace("feature=share", "") + '?rel=0&modestbranding=1';
    // console.log(url)
    // url = url + '&rel=0'
  } else {
    url = "";
  }
  // console.log(url)
  const addedName = `${styles.card} ${flip ? styles.flip : ""}`;
  return (
    <div className={addedName} onClick={() => setFlip(!flip)}>
      <div className={styles.front}>
        <div className={styles.image}>
          {flashcard.image != [] && (
            <img
              src={flashcard.image}
              alt={flashcard.word}
              layout="fill"
              objectFit="contain"
              display="flex"
              justify-content= "center"
              align-items= "center"
            />
          )}
        </div>
        <div className={styles.headerText}>
          <h2>{flashcard.word}</h2>
          <p style={{textAlign: "right"}}>Mirar otro lado →</p>
        </div>
      </div>
      <div className={styles.back}>
        {/* {url != "" && <iframe loading="lazy" src={url} frameborder="0" allowFullScreen />} */}
        {url != "" && <iframe loading="lazy"
    src={url}
    frameborder="0" 
    allow="autoplay; encrypted-media"
    allowFullScreen>
</iframe>
}
        {flashcard.synonyms.length != 0 && (
          <div className={styles.summary}>
            <p>Sinónimos:</p> {flashcard.synonyms[0]}
          </div>
        )}
      </div>
    </div>
  );
}
