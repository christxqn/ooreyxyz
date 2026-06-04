import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config";

// ─── FONT SETUP ──────────────────────────────────────────────────────────────
// To switch fonts, change the import and variable here + in tailwind.config.ts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
