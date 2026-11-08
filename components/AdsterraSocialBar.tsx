import Script from "next/script";
import { ADSTERRA_SOCIAL_BAR } from "@/lib/adsterra";

/**
 * Site-wide Adsterra Social Bar (floating widget, mostly mobile).
 * Mounted from layout; guarded by ADSTERRA_ENABLED in layout.
 */
export function AdsterraSocialBar() {
  return <Script src={ADSTERRA_SOCIAL_BAR.scriptUrl} strategy="lazyOnload" />;
}
