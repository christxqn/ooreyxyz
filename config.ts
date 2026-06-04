// ════════════════════════════════════════════════════
//  SITE CONFIG — edit this file to customize your site
// ════════════════════════════════════════════════════

export const siteConfig = {
  // ── Your name (displayed center screen) ──────────────
  name: "Christian Phillips",

  // ── Background video ─────────────────────────────────
  // Place your .mp4 in the /public folder and set the filename here.
  // Example: if your file is public/my-video.mp4, set "/my-video.mp4"
  video: "/bg-video.mp4",

  // ── Overlay opacity ─────────────────────────────────
  // Controls how dark the overlay on top of the video is.
  // "bg-black/50" = 50%, "bg-black/60" = 60%, "bg-black/70" = 70%
  overlayClass: "bg-black/60",

  // ── Social links ─────────────────────────────────────
  // Add, remove, or reorder items in this array.
  // Supported platforms: "instagram" | "tiktok" | "twitter" | "youtube" | "spotify"
  socials: [
    {
      platform: "instagram" as const,
      handle: "@imchristianphillips",
      url: "https://instagram.com/imchristianphillips",
    },
    {
      platform: "tiktok" as const,
      handle: "@imchristianphillips",
      url: "https://tiktok.com/@imchristianphillips",
    },
  ],

  // ── Music ────────────────────────────────────────────
  // Place .mp3 files in /public/music/ and list them here.
  // Example: if your file is public/music/song.mp3, set src: "/music/song.mp3"
  music: [
    { title: "Over", artist: "Christian Phillips", src: "/music/over.mp3" },
  ],

  // ── SEO / meta ───────────────────────────────────────
  meta: {
    title: "Christian Phillips",
    description: "Christian Phillips",
  },
};

export type SocialPlatform = "instagram" | "tiktok" | "twitter" | "youtube" | "spotify";
