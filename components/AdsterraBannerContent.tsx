"use client";

import { useEffect, useRef } from "react";
import { ADSTERRA_BANNER_CONTENT } from "@/lib/adsterra";

declare global {
  interface Window {
    atOptions?: Record<string, string | number | object>;
  }
}

/**
 * Adsterra content leaderboard banner (728x90, >= md / 768px viewport).
 * The legacy loader uses a single global window.atOptions — only one unit at a time:
 * - Desktop (>=768px): this unit at the top of each page body (below breadcrumb/title)
 * - Mobile (<768px): not rendered; the 320x50 mobile banner sits below the header
 * The NativeBanner below the header is a container-div type (no atOptions) — no conflict.
 * Mounted explicitly per page + guarded by ADSTERRA_ENABLED in layout.
 */
export function AdsterraBannerContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    container.style.minHeight = "90px";

    // Clean previous unit before injecting (atOptions is a single global)
    container.replaceChildren();
    delete window.atOptions;

    window.atOptions = {
      key: ADSTERRA_BANNER_CONTENT.key,
      format: ADSTERRA_BANNER_CONTENT.format,
      height: ADSTERRA_BANNER_CONTENT.height,
      width: ADSTERRA_BANNER_CONTENT.width,
      params: {},
    };
    const script = document.createElement("script");
    script.src = ADSTERRA_BANNER_CONTENT.invokeUrl;
    script.async = true;
    container.appendChild(script);

    return () => {
      // Release the global so other units can claim it
      if (window.atOptions?.key === ADSTERRA_BANNER_CONTENT.key) {
        delete window.atOptions;
      }
    };
  }, []);

  return (
    <div className="my-6 hidden justify-center md:flex">
      <div
        ref={containerRef}
        className="flex justify-center overflow-x-auto"
        style={{ minHeight: "90px" }}
      />
    </div>
  );
}
