"use client";

import { useEffect, useRef } from "react";
import { ADSTERRA_NATIVE_BANNER } from "@/lib/adsterra";

/**
 * Adsterra Native Banner (desktop >= md / 768px viewport).
 * Replicates the official snippet order exactly: <script src=...> first,
 * then <div id="container-<key>"> — the script scans for the mount node in order.
 * Mounted in layout (below header); not re-initialized on client-side navigation.
 * Guarded by ADSTERRA_ENABLED in layout.
 */
export function AdsterraNativeBanner() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    // Official snippet order: script before container div.
    // React never touches these nodes after mount — one-shot static injection is safe.
    host.replaceChildren();
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = ADSTERRA_NATIVE_BANNER.scriptUrl;
    const container = document.createElement("div");
    container.id = `container-${ADSTERRA_NATIVE_BANNER.key}`;
    host.append(script, container);
  }, []);

  return (
    <div className="hidden border-b border-blue-200 bg-white md:block">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div ref={hostRef} className="min-h-[100px] overflow-hidden" />
      </div>
    </div>
  );
}
