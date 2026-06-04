"use client";

import { useState } from "react";

const GAME_URL = "https://kodub.itch.io/polytrack";

export default function Game() {
  const [blocked, setBlocked] = useState(false);

  return (
    <main className="game-page">
      {blocked ? (
        <div className="game-blocked">
          <p className="game-blocked-text">couldn&apos;t load the game here</p>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="game-link"
          >
            play on itch.io →
          </a>
        </div>
      ) : (
        <iframe
          src={GAME_URL}
          className="game-frame"
          allowFullScreen
          allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr"
          onError={() => setBlocked(true)}
          title="Polytrack"
        />
      )}
    </main>
  );
}
