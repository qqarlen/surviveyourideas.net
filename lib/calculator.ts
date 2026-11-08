// Calculator logic — pure functions, testable, no React (skill 3.11 recipe).
// All input constants come from lib/meta-words.ts and lib/items.ts (sourced data only).

import { CASH_META_WORDS, ROBUX_META_WORDS, CASH_META_TOTAL } from "./meta-words";

export function parseFlexibleNumber(input: string): number | null {
  const m = input.trim().match(/^\$?([\d,]+(?:\.\d+)?)\s*([KkMmBb]?)\s*$/);
  if (!m) return null;
  const base = parseFloat(m[1].replace(/,/g, ""));
  if (Number.isNaN(base)) return null;
  const suffix = m[2].toLowerCase();
  const mult = suffix === "k" ? 1e3 : suffix === "m" ? 1e6 : suffix === "b" ? 1e9 : 1;
  return base * mult;
}

export function formatCash(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n >= 1e9) return `${trim(n / 1e9)}B`;
  if (n >= 1e6) return `${trim(n / 1e6)}M`;
  if (n >= 1e3) return `${trim(n / 1e3)}K`;
  return Math.round(n).toString();
}

function trim(v: number): string {
  if (v >= 100) return Math.round(v).toString();
  if (v >= 10) return v.toFixed(1);
  return v.toFixed(2);
}

export function formatDuration(minutes: number): string {
  if (!Number.isFinite(minutes) || minutes < 0) return "—";
  if (minutes < 1) return "under a minute";
  if (minutes < 60) return `${Math.ceil(minutes)} min`;
  const hours = minutes / 60;
  if (hours < 24) return `${hours < 10 ? hours.toFixed(1) : Math.ceil(hours)} hours`;
  const days = hours / 24;
  if (days < 365) return `${days < 10 ? days.toFixed(1) : Math.ceil(days)} days`;
  const years = days / 365;
  return `${years < 10 ? years.toFixed(1) : Math.ceil(years)} years`;
}

export type PlaySchedule = {
  matchesPerDay: number;
  minutesPerMatch: number;
  cashPerMinute: number;
};

/** Daily Cash estimate from play schedule. cashPerMinute is user-observed (the game shows your earnings). */
export function dailyCash(s: PlaySchedule): number {
  return s.matchesPerDay * s.minutesPerMatch * s.cashPerMinute;
}

export type AffordResult = {
  word: string;
  price: number;
  days: number;
  verdict: string;
};

/** For each Cash Meta Word: how many days at this schedule until affordable. */
export function affordSchedule(s: PlaySchedule, currentCash: number): AffordResult[] {
  const daily = dailyCash(s);
  return CASH_META_WORDS.map((w) => {
    const remaining = Math.max(0, w.price - currentCash);
    const days = daily > 0 ? remaining / daily : Number.POSITIVE_INFINITY;
    return {
      word: w.word,
      price: w.price,
      days,
      verdict: verdictFor(w.price, currentCash, daily, w.word),
    };
  });
}

function verdictFor(price: number, currentCash: number, daily: number, word: string): string {
  if (currentCash >= price) return `Buy ${word} now — you already have the Cash.`;
  if (daily <= 0) return "Enter your earnings rate to get a timeline.";
  const days = (price - currentCash) / daily;
  if (days <= 1) return `${word} is one session away. Buy it today.`;
  if (days <= 7) return `${word} lands this week. Hold your Cash and skip regular spins meanwhile.`;
  if (days <= 30) return `${word} is about ${formatDuration(days * 1440)} away — steady grind, avoid spin temptation.`;
  return `${word} is ${formatDuration(days * 1440)} away at this pace. Start with /double or /secret first.`;
}

/** Reference pace: 6 matches x 10 min x 1,500 Cash/min — an active evening player. */
function dailyCashDefault(): number {
  return 6 * 10 * 1500;
}

/** Recommended purchase order: cheapest first. */
export function purchaseOrder(currentCash: number): { word: string; price: number; when: string }[] {
  let bank = currentCash;
  return [...CASH_META_WORDS]
    .sort((a, b) => a.price - b.price)
    .map((w) => {
      const when =
        bank >= w.price
          ? "buy immediately (affordable now)"
          : `after ~${formatDuration(((w.price - bank) / Math.max(dailyCashDefault(), 1)) * 1440)} at a reference pace`;
      if (bank >= w.price) bank -= w.price;
      return { word: w.word, price: w.price, when };
    });
}

export const FULL_COLLECTION_COST = CASH_META_TOTAL; // 2,550,000
export const FULL_ROBUX_COST = ROBUX_META_WORDS.reduce((s, w) => s + w.price, 0); // 797
export const BUNDLE_PRICE = 797;
export const BUNDLE_SALE_PRICE = 570;

/** Time to full Cash collection. */
export function daysToFullCollection(s: PlaySchedule, currentCash: number): number {
  const daily = dailyCash(s);
  return daily > 0 ? Math.max(0, CASH_META_TOTAL - currentCash) / daily : Number.POSITIVE_INFINITY;
}

// ---------- Spin Planner ----------

export type SpinPlanInput = {
  luckySpins: number;
  cash: number;
  spinsWanted: number;
};

export type SpinPlanResult = {
  luckyCoverage: number;
  cashSpinsAffordable: number;
  cashLeftAfter: number;
  cashValueOfLucky: number;
  verdict: string;
};

export function planSpins(input: SpinPlanInput): SpinPlanResult {
  const luckyCoverage = input.luckySpins;
  const remainingWanted = Math.max(0, input.spinsWanted - luckyCoverage);
  const cashSpinsAffordable = Math.floor(input.cash / 10_000);
  const usedCashSpins = Math.min(remainingWanted, cashSpinsAffordable);
  const cashLeftAfter = input.cash - usedCashSpins * 10_000;
  const cashValueOfLucky = luckyCoverage * 10_000;

  let verdict: string;
  if (input.spinsWanted <= luckyCoverage) {
    verdict =
      "Your Lucky Spins cover the whole plan — do NOT spend Cash on regular spins at all. Bank it toward /double or /secret.";
  } else if (usedCashSpins < remainingWanted) {
    verdict = `You are ${((remainingWanted - usedCashSpins) * 10_000).toLocaleString()} Cash short of the plan. Grind more matches or shrink the goal — and remember every Lucky Spin from codes is $10,000 you keep.`;
  } else {
    verdict = `Plan covered. But consider stopping after the Lucky Spins: every regular spin delays your first Meta Word by $10,000.`;
  }

  return {
    luckyCoverage,
    cashSpinsAffordable,
    cashLeftAfter,
    cashValueOfLucky,
    verdict,
  };
}
