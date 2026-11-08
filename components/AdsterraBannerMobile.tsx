"use client";

import { useEffect, useRef } from "react";
import { ADSTERRA_BANNER_MOBILE } from "@/lib/adsterra";

declare global {
  interface Window {
    atOptions?: Record<string, string | number | object>;
  }
}

/**
 * Adsterra mobile iframe banner (320x50, < md / 768px viewport, below header).
 * The legacy loader uses a single global window.atOptions — only one unit can run
 * at a time: mobile (<768px) shows this unit, desktop shows the NativeBanner,
 * the two are mutually exclusive via media query. Guarded by ADSTERRA_ENABLED in layout.
 */
export function AdsterraBannerMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia("(max-width: 767.98px)");
    if (!media.matches) return;

    container.style.minHeight = "50px";

    // Clean previous unit before injecting (atOptions is a single global)
    container.replaceChildren();
    delete window.atOptions;

    window.atOptions = {
      key: ADSTERRA_BANNER_MOBILE.key,
      format: ADSTERRA_BANNER_MOBILE.format,
      height: ADSTERRA_BANNER_MOBILE.height,
      width: ADSTERRA_BANNER_MOBILE.width,
      params: {},
    };
    const script = document.createElement("script");
    script.src = ADSTERRA_BANNER_MOBILE.invokeUrl;
    script.async = true;
    container.appendChild(script);

    return () => {
      // Release the global so other units can claim it
      if (window.atOptions?.key === ADSTERRA_BANNER_MOBILE.key) {
        delete window.atOptions;
      }
    };
  }, []);

  return (
    <div className="border-b border-blue-200 bg-white md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-2">
        <div
          ref={containerRef}
          className="flex justify-center overflow-x-auto"
          style={{ minHeight: "50px" }}
        />
      </div>
    </div>
  );
}
