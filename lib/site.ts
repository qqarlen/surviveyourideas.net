export const SITE = {
  name: "Survive Your Ideas Wiki",
  domain: "www.surviveyourideas.net",
  url: "https://www.surviveyourideas.net",
  tagline: "Codes, Words List, Best Words & Guides",
  description:
    "Independent wiki for Survive Your Ideas on Roblox: working codes checked daily, the confirmed words list, best words to type, all 10 Meta Words with prices, items, badges and survival guides.",
  locale: "en_US",
  // GTM container or GA4 measurement id. "GTM-*" loads gtm.js, "G-*" loads gtag.js.
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "GTM-WJ4VJFH8",
  game: {
    name: "Survive Your Ideas",
    developer: "SlayHatt (Survive Your Ideas group)",
    robloxUrl:
      "https://www.roblox.com/games/77900175935766/Survive-Your-Ideas",
    groupUrl: "https://www.roblox.com/communities/1111201510/Survive-Your-Ideas",
    released: "October 6, 2026",
    placeId: 77900175935766,
  },
  lastDataCheck: "November 8, 2026",
  stats: {
    ccu: "53,451",
    visits: "19.5M+",
    favorites: "50,519",
    groupMembers: "162,617",
    maxPlayers: 40,
    chartRank: "#3 global (BloxControl, Nov 7)",
  },
};

export type NavItem = { href: string; label: string };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Tools",
    items: [
      { href: "/cash-planner", label: "Cash Planner" },
      { href: "/spin-planner", label: "Spin Planner" },
    ],
  },
  {
    title: "Words",
    items: [
      { href: "/words", label: "Words List" },
      { href: "/best-words", label: "Best Words" },
      { href: "/meta-words", label: "Meta Words & Prices" },
    ],
  },
  {
    title: "Database",
    items: [
      { href: "/items", label: "Items & Spins" },
      { href: "/badges", label: "Badges" },
    ],
  },
  {
    title: "Guides",
    items: [
      { href: "/how-to-play", label: "How to Play" },
      { href: "/tips", label: "Tips & Winning" },
      { href: "/updates", label: "Update Log" },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "/codes", label: "Codes" },
      { href: "/discord", label: "Discord & Links" },
    ],
  },
];

export const POPULAR_PAGES: NavItem[] = [
  { href: "/codes", label: "Codes" },
  { href: "/best-words", label: "Best Words" },
  { href: "/words", label: "Words List" },
  { href: "/meta-words", label: "Meta Words Prices" },
  { href: "/cash-planner", label: "Cash Planner" },
  { href: "/words/nuke", label: "Nuke Word Guide" },
];

export const TOOL_PAGES = [
  {
    href: "/cash-planner",
    title: "Cash Planner",
    desc: "Your Cash per match and play schedule → exactly when you can afford /double, /lag, /ghost or /jackpot, with a buy-order verdict.",
    tag: "Most used",
  },
  {
    href: "/spin-planner",
    title: "Spin Planner",
    desc: "Compare Lucky Spins from codes against $10,000 regular spins — see the Cash value you are leaving on the table before you roll.",
    tag: "Spin budget",
  },
];
