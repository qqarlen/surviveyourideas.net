import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import {
  CASH_META_WORDS,
  ROBUX_META_WORDS,
  ROBUX_BUNDLE,
  CASH_META_TOTAL,
} from "@/lib/meta-words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Meta Words — All 10 Prices & Effects (November 2026)",
  description:
    "All 10 Survive Your Ideas Meta Words with prices: /double and /secret (250K Cash), /lag and /undo (400K), /ghost (500K), /jackpot (750K), plus all four Robux slash commands and the bundle math. Effects and strategy for each.",
  alternates: { canonical: "/meta-words" },
};

const faqs = [
  {
    q: "What are Meta Words in Survive Your Ideas?",
    a: "Meta Words are 10 unlockable slash-commands that supercharge your turns. You buy them in the lobby's Meta Words menu using Cash (earned in matches) or Robux, and during a match you activate them by typing the command with a slash prefix — /double, /secret, /undo and so on. Without the slash, the game treats your input as a normal word.",
  },
  {
    q: "How much do all Meta Words cost?",
    a: "The six Cash-side words total 2,550,000 Cash: /double 250K + /secret 250K + /lag 400K + /undo 400K + /ghost 500K + /jackpot 750K. The four Robux words cost 79 + 159 + 199 + 360 = 797 Robux individually, but a bundle of all four sells for 797 Robux (observed at 570 Robux during promotions) — meaning the bundle is effectively the four words for the price of one purchase.",
  },
  {
    q: "Which Meta Word should I buy first?",
    a: "/double or /secret — both 250,000 Cash, the cheapest tier. /double doubles your next word's effect, the straightforward power pick. /secret hides your typed word from other players, removing the reaction window that lets opponents escape strong hazards. Both are 10x cheaper than /jackpot and pay off every single match you use them, unlike the one-shot-feeling expensive picks.",
  },
  {
    q: "Are Meta Words prices confirmed?",
    a: "Yes — every price on this page is cross-checked across two independent sources (Sportskeeda's Meta Words guide and GamestratWiki's breakdown), which agree exactly on all ten prices and all effects. The bundle sale price (570 Robux) is documented as an occasional promotion rather than a permanent price.",
  },
  {
    q: "Is /admin worth 360 Robux?",
    a: "It is the priciest single Meta Word and grants admin commands for one match. Buy it last, if at all: /god (79) teaches you the instant-activation playstyle for under a quarter of the price, and /chaos (159) delivers the word-volume fantasy. Players who already know they love admin-style control get the full value — but as a first Robux spend, it is the wrong order.",
  },
  {
    q: "What does /jackpot actually do — is it good?",
    a: "/jackpot (750,000 Cash) makes Cash rain across the whole map — for everyone, including your opponents. It is a 'win-more' card: if you are already the strongest survivor, you recollect more of the rain than anyone else and snowball further. It is the natural last purchase for a complete collection, but as a first or second Meta Word it funds your rivals more than it helps you.",
  },
  {
    q: "How long does it take to afford Meta Words without Robux?",
    a: "Cash comes from survival time and one-time Word Diary discovery bonuses, so the honest answer is 'depends on how well and how often you play'. At an active-evening pace — roughly 6 matches a day at 10 minutes with decent survival — the reference estimate is around 5-6 days per 500K Cash. Our Cash Planner turns your actual match count and earnings rate into exact unlock dates for all six Cash words.",
  },
];

export default function MetaWordsPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Meta Words"
        subtitle={`${CASH_META_WORDS.length} Cash words totaling ${CASH_META_TOTAL.toLocaleString()} · ${ROBUX_META_WORDS.length} Robux words + bundle · prices verified on two sources`}
        image="/images/official/shot-81392951073628.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Meta Words" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The Slash-Command Arsenal, Fully Priced</h2>
        <p>
          Meta Words are the permanent progression layer under Survive Your
          Ideas' typing gimmick. Every player gets writer turns; Meta Words
          decide how much those turns are worth. They are purchased in the
          lobby's Meta Words menu, activated in-match by typing the command
          with its slash prefix, and split across two economies: six words on
          the Cash side (funded entirely by playing) and four on the Robux
          side. Every price below is verified across two independent
          published guides that agree exactly — no community-guesswork
          numbers on this page.
        </p>
        <p>
          How to read the tables: the <strong>price</strong> column is what
          the lobby menu charges, the <strong>effect</strong> is the
          documented mechanic, and <strong>strategy</strong> is our editorial
          read on where each word fits — clearly judgment, layered on the
          sourced facts, and disagreeing with it is reasonable. If you want
          the buy order personalized, the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          converts your play schedule into unlock dates for every word.
        </p>
      </section>

      {/* Cash meta words */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Cash Meta Words — {CASH_META_WORDS.length} words, {CASH_META_TOTAL.toLocaleString()} total
        </h2>
        <div className="space-y-4">
          {CASH_META_WORDS.map((w) => (
            <div key={w.slug} className="rounded-xl border border-blue-200 bg-white p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xl font-extrabold text-brand-700">{w.word}</span>
                <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-sm font-extrabold text-slate-800">
                  {w.price.toLocaleString()} Cash
                </span>
                <span className="text-sm text-slate-600 font-semibold">{w.effect}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Strategy:</strong> {w.strategy}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-4 text-sm font-bold text-slate-700">
          Buying order verdict: /double → /secret → /undo → /lag → /ghost →
          /jackpot. Two cheap multipliers before everything, the safety valve
          third, griefing and niche picks later, and the win-more card dead
          last.
        </div>
      </section>

      {/* Robux meta words */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Robux Meta Words — {ROBUX_META_WORDS.length} words + bundle
        </h2>
        <div className="space-y-4">
          {ROBUX_META_WORDS.map((w) => (
            <div key={w.slug} className="rounded-xl border border-emerald-200 bg-white p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xl font-extrabold text-brand-700">{w.word}</span>
                <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-sm font-extrabold text-slate-800">
                  {w.price} Robux
                </span>
                <span className="text-sm text-slate-600 font-semibold">{w.effect}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Strategy:</strong> {w.strategy}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4 text-sm font-bold text-slate-700">
          Bundle math: all four words individually cost{" "}
          {ROBUX_META_WORDS.reduce((s, w) => s + w.price, 0)} Robux — the
          bundle is {ROBUX_BUNDLE.price} (sales have dropped it to{" "}
          {ROBUX_BUNDLE.salePrice}), so the bundle IS the discount.{" "}
          {ROBUX_BUNDLE.note}
        </div>
      </section>

      {/* How to use */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>How Meta Words Work In A Match</h2>
        <p>
          Activation is typed, not clicked: during your writer turn, enter the
          command with its slash — <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">/double</code>{" "}
          followed by your word when the double is queued, or the command
          itself where it acts immediately. The slash matters: type{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">double</code>{" "}
          without it and the game resolves it as a normal word input instead
          of the Meta Word. Each purchase is permanent — you are unlocking the
          command, not consuming it — so the roster you own compounds match
          over match.
        </p>
        <p>
          Sequencing is where the value hides. /double queues a doubling on
          your <em>next</em> word, which makes it a two-turn plan: fire the
          double at a moment hazard you know you will get value from, or
          better, pair it with a persistent word so the doubled effect
          stretches across the rest of the match. /secret inverts the game's
          core information dynamic — because every player normally reads your
          word the instant you type it, hiding that read denies the entire
          lobby their reaction window, which is why it earns its price tag
          despite doing zero direct damage. /undo is the only word that
          removes pressure rather than adding it; it is simultaneously the
          best mistake-insurance and the worst first purchase.
        </p>

        <h2>The Economy: Earning 2.55 Million Cash</h2>
        <p>
          Every Cash-side Meta Word is fundable without spending a cent —
          Cash flows from two sources: survival time in matches and one-time
          bonuses for each new Word Diary/Index discovery (the same discoveries
          that roll toward the Collector badge's 150-word target). The
          efficient loop is therefore: fill the diary early in matches when
          the floor is calm, survive as long as possible late, and resist the{" "}
          <strong>$10,000 regular spin</strong> — each spin is a fifteenth of
          a /double you did not buy. Codes complicate this pleasantly: Lucky
          Spins from codes (THANKYOU grants 5) are rolls that do not touch
          your Meta Word fund at all. The{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          shows exactly how much Cash your code spins are saving you.
        </p>
        <p>
          For pacing context: at an active-evening rhythm (six matches, ten
          minutes each, solid survival), the reference math lands near 90K
          Cash an hour — roughly 5-6 days per 500K word at the cheap end,
          about a month of evenings for the full 2.55M set. Your actual rate
          depends on survival skill and how much diary you have left to
          fill, which is why the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          takes your real numbers instead of our reference ones.
        </p>

        <h2>Robux Words: What Money Actually Buys</h2>
        <p>
          The four Robux words are convenience and spectacle rather than
          pay-to-win. /god (79) is the best pure value — instant activation
          for 30 seconds teaches the timing-pressure playstyle for impulse-purchase
          money. /chaos (159) is ten random words at once: swingy,
          clip-friendly, occasionally match-ending. /reset (199) is the
          strangest design in the set — it heals everyone, so its real use is
          wiping the board when stacked hazards have you cornered, trading a
          level field for your survival. /admin (360) rounds out the set for
          players who already know they want maximum control. Nothing here
          gates a free player's progression; the Cash set covers every
          competitive need at zero cost, just slower.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Meta Words FAQ" />
    </div>
  );
}
