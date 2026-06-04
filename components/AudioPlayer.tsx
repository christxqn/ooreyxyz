"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config";

const songs = siteConfig.music;

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const current = songs[trackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.src = current.src;
    audio.play().catch(() => setPlaying(false));
  }, [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.src = current.src;
    audio.play().catch(() => setPlaying(false));
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => setPlaying(false));
    }
    setPlaying(!playing);
  }

  function prev() {
    setTrackIndex((i) => (i - 1 + songs.length) % songs.length);
  }

  function next() {
    setTrackIndex((i) => (i + 1) % songs.length);
  }

  function onEnded() {
    if (songs.length > 1) {
      setTrackIndex((i) => (i + 1) % songs.length);
    } else {
      setPlaying(false);
    }
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} onEnded={onEnded} />

      {/* Track info */}
      <div className="audio-info">
        <span className="audio-title">{current.title}</span>
        <span className="audio-artist">{current.artist}</span>
      </div>

      {/* Controls */}
      <div className="audio-controls">
        {songs.length > 1 && (
          <button onClick={prev} className="audio-btn" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
            </svg>
          </button>
        )}

        <button onClick={togglePlay} className="audio-btn audio-play" aria-label={playing ? "Pause" : "Play"}>
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {songs.length > 1 && (
          <button onClick={next} className="audio-btn" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M6 18l8.5-6L6 6v12zm2-8.14 4.72 3.36L8 16.86V9.86zM16 6h2v12h-2z" />
            </svg>
          </button>
        )}

        {/* Volume toggle */}
        <button
          onClick={() => setShowVolume((v) => !v)}
          className="audio-btn"
          aria-label="Volume"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            {volume === 0 ? (
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 4.27zM12 4 9.91 6.09 12 8.18V4z" />
            ) : volume < 0.5 ? (
              <path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z" />
            ) : (
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            )}
          </svg>
        </button>
      </div>

      {/* Volume slider */}
      {showVolume && (
        <div className="audio-volume">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="volume-slider"
            aria-label="Volume slider"
          />
        </div>
      )}
    </div>
  );
}
