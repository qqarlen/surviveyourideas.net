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
  lastVerified: "November 11, 2026",
  working: [
    {
      code: "BIG5",
      reward: "5 Lucky Spins",
      added: "November 10, 2026",
      source: "GamesRadar (Nov 10) — newest drop",
    },
    {
      code: "NEWMAPSCOMING",
      reward: "30 Free Spins",
      added: "November 10, 2026",
      source: "PCGamesN, Dexerto, ProGameGuides (3-source cross-check) — shipped with the new-maps teaser update",
    },
    {
      code: "FIRSTUPDATE",
      reward: "Free rewards (first update drop)",
      added: "November 8, 2026",
      source: "Togame.io (Nov 8) — arrived with the game's first patch",
    },
    {
      code: "THANKYOU",
      reward: "5 Lucky Spins",
      added: "November 7, 2026",
      source: "Destructoid, Dexerto, ProGameGuides (3-source cross-check)",
    },
  ] as CodeEntry[],
  expired: [] as CodeEntry[],
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
