// Items & Spins — community-reported layer (single source: RoUniverse, Nov 7 2026).
// Every claim on the site that cites this file must be labeled "community-reported".
// docs/关键词素材.md §7.

export type ItemRarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Mythical";

export const RARITIES: ItemRarity[] = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythical",
];

export type LoadoutItem = {
  slug: string;
  name: string;
  role: "mobility" | "defense" | "offense" | "utility";
  answer: string; // which hazard family this item answers
  note: string;
};

// The five community-recommended collection targets (RoUniverse).
export const LOADOUT_ITEMS: LoadoutItem[] = [
  {
    slug: "grapple-hook",
    name: "Grapple Hook",
    role: "mobility",
    answer: "Repositioning for every hazard family",
    note: "Community consensus slot-one pick. Blast and flood words both get answered by leaving the area, not tanking it.",
  },
  {
    slug: "force-field",
    name: "Force Field",
    role: "defense",
    answer: "Blast words (NUKE-style), flood overflow",
    note: "The no-mobility fallback: eating a blast in place beats dying to it. Pairs with Grapple Hook as the two-item core.",
  },
  {
    slug: "rocket-launcher",
    name: "Rocket Launcher",
    role: "offense",
    answer: "Creature words (DINOSAUR-style chasers)",
    note: "Hold fire until the creature commits to a direction, then punish recovery.",
  },
  {
    slug: "golden-pencil",
    name: "Golden Pencils",
    role: "utility",
    answer: "Collection progress",
    note: "Collection-target item named in community guides; fills the utility slot while chasing higher tiers.",
  },
  {
    slug: "eraser",
    name: "Erasers",
    role: "utility",
    answer: "Collection progress",
    note: "The other named collection staple — rounds out a five-slot loadout before Mythical drops.",
  },
];

export const SPIN_ECONOMY = {
  regularSpinCost: 10_000,
  regularSpinNote:
    "Regular spins cost $10,000 Cash each (community-reported, RoUniverse).",
  luckySpinNote:
    "Lucky Spins are the alternative roll type — so far obtainable free from codes (THANKYOU grants 5).",
  rarityGateNote:
    "Rarity is gated by spin type, not playtime: grinding rounds never rolls Mythicals the way spins do.",
  slots: 5,
  slotNote:
    "You bring five items into a match, so a balanced five-role loadout beats five raw-rarity picks that all solve the same problem.",
};

// Badges — official data (badges.roblox.com API, pulled 2026-11-08).
export type Badge = {
  name: string;
  requirement: string;
  difficulty: "starter" | "easy" | "medium" | "hard" | "grind";
  tip: string;
};

export const BADGES: Badge[] = [
  {
    name: "Welcome",
    requirement: "You made it. Now try to survive your ideas.",
    difficulty: "starter",
    tip: "Joins automatically when you enter your first match.",
  },
  {
    name: "My First Idea",
    requirement: "Write your very first word in a match.",
    difficulty: "starter",
    tip: "Any input counts — type TACOS on your first turn and bank it.",
  },
  {
    name: "Survivor",
    requirement: "Survive 60 words in a single match.",
    difficulty: "medium",
    tip: "Matches regularly run long, so this is a stamina check: keep a mobility item and re-position every few words.",
  },
  {
    name: "Unstoppable",
    requirement: "Win 2 matches in a row.",
    difficulty: "hard",
    tip: "Queue during busy hours so lobbies are full; fewer decent players per lobby means weaker competition.",
  },
  {
    name: "Champion",
    requirement: "Be the last one standing and win a match.",
    difficulty: "medium",
    tip: "Endgame circles favor the player with unspent resources — save your Force Field and Grapple for the final words.",
  },
  {
    name: "Deadly Idea",
    requirement: "Eliminate 3 players with a single word.",
    difficulty: "hard",
    tip: "Type area words (NUKE, TSUNAMI) when the lobby clusters — after a jackpot or during a bottleneck crossing.",
  },
  {
    name: "Collector",
    requirement: "Discover 150 words in your Word Diary.",
    difficulty: "grind",
    tip: "This is the long-game badge: every match, spend early turns typing confirmed words you have not logged yet. Each new entry also pays one-time Cash.",
  },
  {
    name: "Veteran",
    requirement: "Play 100 matches.",
    difficulty: "grind",
    tip: "Pure playtime. It accumulates naturally while you grind Collector.",
  },
];
