"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "home", href: "/" },
  { label: "shop", href: "/shop" },
  { label: "schedule", href: "/schedule" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`nav-tab ${pathname === tab.href ? "nav-tab-active" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
