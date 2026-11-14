import Script from "next/script";
import { ADSTERRA_POPUNDER } from "@/lib/adsterra";

/**
 * Site-wide Adsterra Popunder (opens on first user click).
 * Mounted from layout; guarded by ADSTERRA_ENABLED in layout.
 */
export function AdsterraPopunder() {
  return <Script src={ADSTERRA_POPUNDER.scriptUrl} strategy="lazyOnload" />;
}
