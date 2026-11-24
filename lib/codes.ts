// Survive Your Ideas codes — the game HAS a working redemption system.
// Verified November 8, 2026 against four independent trackers (see docs/关键词素材.md §1).
// Daily flow: add new codes to `working` with added date + reward, move dead ones to `expired`, bump lastVerified.

export type CodeEntry = {
  code: string;
  reward: string;
  added?: string;
  expired?: string;
  source?: string;
};

export const CODES_STATE = {
  hasRedemptionSystem: true,
  lastVerified: "November 24, 2026",
  working: [
    {
      code: "100KCCU",
      reward: "5 Lucky Spins",
      added: "November 14, 2026",
      source: "Destructoid, Bloxodes, SuperCheats (3-source cross-check, Nov 14/15) — 100K concurrent players milestone. Beebom lists 20 Spins; majority reward text (5 Lucky Spins) wins. MrGuider adds it needs a fresh server. GamingRoute (Nov 20) confirms Roblox Den Active.",
    },
    {
      code: "SATURDAYISTHEDAY",
      reward: "10 Lucky Spins",
      added: "November 13, 2026",
      source: "GamesRadar, Destructoid, Beebom (3-source cross-check, Nov 13) — weekend drop. Still Active per Roblox Den (Nov 19) and Beebom, despite the Saturday-throwback name.",
    },
    {
      code: "1MMEMBERS",
      reward: "20 Spins",
      added: "November 13, 2026",
      source: "GamesRadar, Destructoid, Beebom (3-source cross-check, Nov 13) — Roblox group milestone (1M members celebration). Active per Roblox Den (Nov 19).",
    },
    {
      code: "BIG5",
      reward: "5 Lucky Spins",
      added: "November 10, 2026",
      source: "GamesRadar (Nov 10) — shipped with the new-maps teaser update. Active on all three trackers GamingRoute checked (Nov 19-20).",
    },
    {
      code: "NEWMAPSCOMING",
      reward: "30 Free Spins",
      added: "November 10, 2026",
      source: "PCGamesN, Dexerto, ProGameGuides (3-source cross-check) — shipped with the new-maps teaser update. Active per Roblox Den (Nov 19), Beebom and Pocket Gamer; GamesRadar's Nov 16 expiry listing is the lone outlier.",
    },
    {
      code: "FIRSTUPDATE",
      reward: "Free rewards (first update drop)",
      added: "November 8, 2026",
      source: "Togame.io (Nov 8) — arrived with the game's first patch. ⚠️ Status contested as of Nov 24: IGN, RadioTimes and GamesRadar list it expired, but Roblox Den still tracked it Nov 19 (unverified 'Check' status). Redeem to find out — nothing to lose.",
    },
  ] as CodeEntry[],
  expired: [
    {
      code: "THANKYOU",
      reward: "5 Lucky Spins",
      added: "November 7, 2026",
      expired: "around November 14, 2026",
      source: "The game's first-ever code and its first expiry: Destructoid moved it to expired Nov 14, followed by IGN (Nov 15), GamesRadar (Nov 16), RadioTimes and GamestratWiki. Lifespan ~7 days. Every code so far has been free Spins/Lucky Spins — THANKYOU's five rolls stay safe on accounts that redeemed in time.",
    },
  ] as CodeEntry[],
  // Known fake codes circulating from low-quality sites — warn section.
  fakePatterns: [
    "Any WELCOME / RELEASE / SPINFREE code — none has ever existed for this game",
    "Codes promising Cash or Robux — the redemption system only grants spins so far",
  ],
};

// How to redeem, cross-checked on Destructoid + ProGameGuides + ProGamePilot.
export const REDEEM_STEPS = [
  "Launch Survive Your Ideas on Roblox and wait for the lobby to load.",
  "Look at the upper-left corner of the screen and click the Codes icon.",
  "Type or paste a working code into the text field of the pop-up window.",
  "Press the Redeem button — your Lucky Spins are added immediately.",
];
