// Meta Words — 10 unlockable slash-commands. Prices cross-checked on two independent
// sources (Sportskeeda + GamestratWiki), zero conflicts (docs/关键词素材.md §6).
// Enter them WITH the slash prefix in a match; without it, a normal word effect fires.

export type MetaWord = {
  slug: string;
  word: string;
  currency: "cash" | "robux";
  price: number;
  effect: string;
  strategy: string;
};

export const CASH_META_WORDS: MetaWord[] = [
  {
    slug: "double",
    word: "/double",
    currency: "cash",
    price: 250_000,
    effect: "Your next word activates twice instead of once.",
    strategy:
      "The cheapest multiplier in the game, and the natural first purchase. Pair it with a persistent word (ZOMBIES, METEOR) so the second activation extends total pressure instead of wasting both charges on one moment.",
  },
  {
    slug: "secret",
    word: "/secret",
    currency: "cash",
    price: 250_000,
    effect: "The words you enter are invisible to other players.",
    strategy:
      "Information advantage, not raw power. Because everyone sees the typed word at the same time, hiding your input denies opponents their reaction window — the single biggest timing edge recognized in advanced play.",
  },
  {
    slug: "lag",
    word: "/lag",
    currency: "cash",
    price: 400_000,
    effect: "Other players experience lag. You are immune.",
    strategy:
      "A griefing tool that punishes reaction-based play. Strongest in endgame circles where every survivor needs precise movement — but it does not help you directly, so treat it as a pick for chaos lobbies, not solo carries.",
  },
  {
    slug: "undo",
    word: "/undo",
    currency: "cash",
    price: 400_000,
    effect: "Undoes the effects of the previous word.",
    strategy:
      "The safety valve. It is the only Cash word that REMOVES pressure instead of adding it — including pressure you created yourself. Worth owning if you misfire often; skip it once your word accuracy is decent.",
  },
  {
    slug: "ghost",
    word: "/ghost",
    currency: "cash",
    price: 500_000,
    effect: "Ghosts appear and grab things.",
    strategy:
      "Object-interaction play: it interferes with items and props rather than players directly. Niche — most guides treat it as a mid-priority collection unlock rather than a meta pick.",
  },
  {
    slug: "jackpot",
    word: "/jackpot",
    currency: "cash",
    price: 750_000,
    effect: "Cash rains all over the map for everyone.",
    strategy:
      "The most expensive Cash word is also the strangest: it funds your OPPONENTS too. Its real use is greed at scale — if you are already surviving longest, the rain pays you back more than anyone. A win-more card, and the natural last purchase.",
  },
];

export const ROBUX_META_WORDS: MetaWord[] = [
  {
    slug: "god",
    word: "/god",
    currency: "robux",
    price: 79,
    effect: "Your words activate instantly for 30 seconds.",
    strategy:
      "The cheapest Robux entry. Instant activation removes the spawn delay that lets players reposition — pair it with fast point-effects for maximum pressure during the window.",
  },
  {
    slug: "chaos",
    word: "/chaos",
    currency: "robux",
    price: 159,
    effect: "Gives you access to 10 random words at once.",
    strategy:
      "Volume play: ten words in one window can stack several hazards beyond what the lobby can answer. Outcomes are swingy — great for highlight clips, unreliable for ranked climbing.",
  },
  {
    slug: "reset",
    word: "/reset",
    currency: "robux",
    price: 199,
    effect: "Resets the game world and heals all players.",
    strategy:
      "A board-wipe that heals EVERYONE, including your rivals. Use it when stacked hazards are about to eliminate you — trading a clean slate for a level field is often the correct desperation play late in a match.",
  },
  {
    slug: "admin",
    word: "/admin",
    currency: "robux",
    price: 360,
    effect: "Access to admin commands until the end of the match.",
    strategy:
      "The premium pick and the priciest single word in the game. Buy it only once the cheaper Robux words have taught you which admin-style controls you actually use.",
  },
];

export const ROBUX_BUNDLE = {
  price: 797,
  salePrice: 570,
  note: "Bundle of all four Robux-exclusive Meta Words; the bundle has been observed at 570 Robux during promotions.",
};

export const CASH_META_TOTAL = CASH_META_WORDS.reduce((s, w) => s + w.price, 0); // 2,550,000

// Cash economy anchors (all multi-source, docs/关键词素材.md §3/§7).
export const CASH_ECONOMY = {
  earnNote:
    "Cash is rewarded primarily for survival time, plus one-time bonuses for unlocking Index entries.",
  regularSpinCost: 10_000,
  diaryNote:
    "Each newly discovered Word Diary entry pays a one-time Cash bonus toward your Meta Word fund.",
};
