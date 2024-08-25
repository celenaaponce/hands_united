"use client"
import styles from "./audioPlayer.module.css"
import { useState, useRef } from 'react';

const AudioPlayer = ({ src, style}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
<div className={styles.audioPlayer} style={style}>
  <button className={styles.playPauseButton}onClick={togglePlayPause}>
    {isPlaying ? (
      <img src="/audio/pause.png" alt="Pause" width={30} height={30}/>
    ) : (
      <img src="/audio/play.png" alt="Play" width={30} height={30}/>
    )}
  </button>
  <audio ref={audioRef} src={src} />
</div>

  );
};

export default AudioPlayer;