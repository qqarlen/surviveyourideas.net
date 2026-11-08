import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { WORDS } from "@/lib/words";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const pages: { path: string; priority: number; freq: string }[] = [
    { path: "/", priority: 1.0, freq: "daily" },
    { path: "/codes", priority: 0.95, freq: "daily" },
    { path: "/cash-planner", priority: 0.95, freq: "weekly" },
    { path: "/spin-planner", priority: 0.95, freq: "weekly" },
    { path: "/words", priority: 0.9, freq: "daily" },
    { path: "/best-words", priority: 0.9, freq: "weekly" },
    { path: "/meta-words", priority: 0.9, freq: "weekly" },
    { path: "/items", priority: 0.85, freq: "weekly" },
    { path: "/badges", priority: 0.85, freq: "weekly" },
    { path: "/how-to-play", priority: 0.9, freq: "weekly" },
    { path: "/tips", priority: 0.85, freq: "weekly" },
    { path: "/updates", priority: 0.85, freq: "daily" },
    { path: "/discord", priority: 0.7, freq: "weekly" },
    { path: "/about", priority: 0.5, freq: "monthly" },
    { path: "/contact", priority: 0.5, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" },
  ];

  const wordPages = WORDS.map((w) => ({
    path: `/words/${w.slug}`,
    priority: 0.8,
    freq: "weekly",
  }));

  return [...pages, ...wordPages].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));
}
