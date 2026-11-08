// Adsterra ad config (pattern verified on magicloot.net / slayers-2).
// Master switch: NEXT_PUBLIC_ADSTERRA_ENABLED, default on; set "false" on Vercel to disable globally.
// Note: NEXT_PUBLIC_ vars are inlined at build time — disabling in production requires setting it before build.
export const ADSTERRA_ENABLED =
  process.env.NEXT_PUBLIC_ADSTERRA_ENABLED !== "false";

// Social Bar (site-wide floating widget, mostly mobile)
export const ADSTERRA_SOCIAL_BAR = {
  scriptUrl: "https://bauval.org/14/044e4052f9564564bb549705ac4148cf",
};

// Native Banner (desktop >= md / 768px, below header; network injects into #container-<key>)
export const ADSTERRA_NATIVE_BANNER = {
  key: "1cd83ca8970f9db150955ffa9b2c83cc",
  scriptUrl: "https://bauval.org/21/1cd83ca8970f9db150955ffa9b2c83cc",
};

// Mobile banner (< md / 768px, below header, 320x50; window.atOptions iframe type)
export const ADSTERRA_BANNER_MOBILE = {
  key: "965a5ef6843b3f23386910717e81955c",
  invokeUrl: "https://bauval.org/22/965a5ef6843b3f23386910717e81955c",
  format: "iframe",
  width: 320,
  height: 50,
};

// Content-area banner (desktop >= md / 768px, top of page body, 728x90; window.atOptions iframe type)
export const ADSTERRA_BANNER_CONTENT = {
  key: "39b78797ef8516a71db0b7d6502bd1d0",
  invokeUrl: "https://bauval.org/22/39b78797ef8516a71db0b7d6502bd1d0",
  format: "iframe",
  width: 728,
  height: 90,
};
