import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ─── FONTS ───────────────────────────────────────────────────────
        // To switch fonts, update the CSS variable here and in app/layout.tsx
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        // ─── PALETTE ─────────────────────────────────────────────────────
        charcoal: "#1c1c1c",
        silver: "#b0b0b0",
        "silver-dim": "#7a7a7a",
        "deep-purple": {
          DEFAULT: "#2d1b4e",
          light: "#4a2d7a",
          glow: "rgba(90, 50, 160, 0.35)",
        },
      },
      letterSpacing: {
        "ultra-wide": "0.35em",
        "hero": "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
