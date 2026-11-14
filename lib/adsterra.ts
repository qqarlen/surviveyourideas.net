// Adsterra ad config (pattern verified on magicloot.net / slayers-2).
// Survive Your Ideas site keys — issued 2026-11-08 for surviveyourideas.net.
// Master switch: NEXT_PUBLIC_ADSTERRA_ENABLED, default on; set "false" on Vercel to disable globally.
// Note: NEXT_PUBLIC_ vars are inlined at build time — disabling in production requires setting it before build.
export const ADSTERRA_ENABLED =
  process.env.NEXT_PUBLIC_ADSTERRA_ENABLED !== "false";

// Social Bar (site-wide floating widget, mostly mobile)
export const ADSTERRA_SOCIAL_BAR = {
  scriptUrl: "https://bauval.org/14/450c0b31e3a257f848e9efd127dba11a",
};

// Popunder (site-wide script, opens on first click; placement Popunder_1 id 32156898)
export const ADSTERRA_POPUNDER = {
  scriptUrl: "https://abscloud.org/1/e69fb7147449683e0e7c9eedd69ebb68",
};

// Native Banner (desktop >= md / 768px, below header; network injects into #container-<key>)
export const ADSTERRA_NATIVE_BANNER = {
  key: "19c780996c1aaa95e90f4fea167940a3",
  scriptUrl: "https://bauval.org/21/19c780996c1aaa95e90f4fea167940a3",
};

// Mobile banner (< md / 768px, below header, 320x50; window.atOptions iframe type)
export const ADSTERRA_BANNER_MOBILE = {
  key: "23f6f04614b723ff4732ea55aeab600a",
  invokeUrl: "https://bauval.org/22/23f6f04614b723ff4732ea55aeab600a",
  format: "iframe",
  width: 320,
  height: 50,
};

// Content-area banner (desktop >= md / 768px, top of page body, 728x90; window.atOptions iframe type)
export const ADSTERRA_BANNER_CONTENT = {
  key: "dfc8113604b53c34595e7e846470b7d2",
  invokeUrl: "https://bauval.org/22/dfc8113604b53c34595e7e846470b7d2",
  format: "iframe",
  width: 728,
  height: 90,
};
