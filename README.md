# Christian Phillips — Personal Site

Dark, atmospheric one-page site built with Next.js 14 + Tailwind CSS.  
Designed for Vercel deployment.

---

## Quickstart (run locally)

```bash
npm install
npm run dev
# → open http://localhost:3000
```

---

## How to customize

**Everything you'll ever need to change lives in one file: `config.ts`**

### 1. Replace the background video

1. Copy your `.mp4` file into the `/public` folder.  
   Rename it `bg-video.mp4` — or any name you like.
2. In `config.ts`, set:
   ```ts
   video: "/your-filename.mp4",
   ```
3. Save. The page hot-reloads automatically in dev mode.

> **Tip:** Keep the video under ~15 MB for fast loading. A 1080p clip compressed  
> with [HandBrake](https://handbrake.fr) or [Squoosh](https://squoosh.app) works great.

---

### 2. Change your name

In `config.ts`:
```ts
name: "Your Name Here",
```

---

### 3. Add / remove / edit social links

In `config.ts`, edit the `socials` array:
```ts
socials: [
  {
    platform: "instagram",          // see supported platforms below
    handle: "@yourhandle",
    url: "https://instagram.com/yourhandle",
  },
  {
    platform: "tiktok",
    handle: "@yourhandle",
    url: "https://tiktok.com/@yourhandle",
  },
],
```

**Supported platforms** (icons included):  
`"instagram"` · `"tiktok"` · `"twitter"` · `"youtube"` · `"spotify"`

To add a new platform, drop an SVG entry into the `icons` object in `app/page.tsx`.

---

### 4. Adjust overlay darkness

In `config.ts`:
```ts
overlayClass: "bg-black/60",   // 60% opacity
// lighter: "bg-black/40"
// darker:  "bg-black/75"
```

---

### 5. Change the text glow color

In `app/globals.css`, find `.name-glow` and adjust the `rgba` values:
```css
.name-glow {
  text-shadow:
    0 0 40px rgba(110, 60, 180, 0.45),   /* inner purple glow */
    0 0 80px rgba(80, 30, 140, 0.25),
    0 0 160px rgba(50, 10, 100, 0.15);   /* outer bloom */
}
```

---

## Deploy to Vercel

### First deploy

1. **Create a GitHub repo** and push this project:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to **[vercel.com](https://vercel.com)** → New Project → Import your GitHub repo.

3. Leave all settings as default — Vercel auto-detects Next.js.

4. Click **Deploy**. Done. Your site is live in ~60 seconds.

### Updating the site later

```bash
git add .
git commit -m "update content"
git push
```
Vercel auto-deploys on every push to `main`.

### Adding a custom domain

In Vercel dashboard → your project → **Settings → Domains** → add your domain.

---

## Project structure

```
/
├── config.ts          ← EDIT THIS to customize everything
├── app/
│   ├── layout.tsx     ← Font setup & <head> metadata
│   ├── page.tsx       ← Page layout & social icons
│   └── globals.css    ← Glow effect & base styles
├── public/
│   └── bg-video.mp4   ← Drop your video here
├── tailwind.config.ts ← Colors & font tokens
└── package.json
```

---

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via `next/font/google`
- Deployed on [Vercel](https://vercel.com)
