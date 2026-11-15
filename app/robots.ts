import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // GEO/AEO 核心爬虫：放行
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "GeminiBot",
          "cc-bots",
        ],
        allow: "/",
      },
      {
        // 资源大户 + 低转化爬虫：拒绝（2026-11-15 Vercel 配额防御）
        userAgent: [
          "Bytespider",
          "SEMrushBot",
          "AhrefsBot",
          "MJ12bot",
          "DotBot",
          "PetalBot",
          "Baiduspider",
          "YandexBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
