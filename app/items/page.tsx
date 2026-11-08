import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { LOADOUT_ITEMS, RARITIES, SPIN_ECONOMY } from "@/lib/items";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Items & Spins — Rarities, Loadout Slots, Spin Economy",
  description:
    "Survive Your Ideas items explained: Common-to-Mythical rarities, the five loadout slots, regular spins at $10,000 Cash vs Lucky Spins from codes, and the community-recommended Grapple Hook + Force Field core.",
  alternates: { canonical: "/items" },
};

const faqs = [
  {
    q: "How do items work in Survive Your Ideas?",
    a: "Items are equipment you bring into matches, with a five-slot loadout cap. You obtain them through spins: regular spins cost $10,000 Cash each, while Lucky Spins are the alternative roll type — so far granted free by codes like THANKYOU. Rarities run from Common up to Mythical, and community guides report that rarity is gated by spin type rather than playtime.",
  },
  {
    q: "What are the best items to chase first?",
    a: "Per community-reported loadout advice: Grapple Hook (mobility) and Force Field (defense) are the two-item core — they answer the two biggest hazard families, chasers and blasts. Rocket Launcher is the third priority for creature-heavy lobbies. Golden Pencils and Erasers round out collection progress while you chase higher tiers. The specific items are community-ranked; the underlying hazard-answer logic is from documented word behavior.",
  },
  {
    q: "How much is a regular spin in Survive Your Ideas?",
    a: "$10,000 Cash per regular spin (community-reported figure from current item guides). That price matters beyond shopping: every spin you buy is $10,000 NOT going toward Meta Words, where /double and /secret cost 250,000 each. The standard advice is to let Lucky Spins from codes drive item rolls and keep Cash for Meta Words.",
  },
  {
    q: "What are Lucky Spins and how do you get them?",
    a: "Lucky Spins are the alternative roll type to regular Cash spins. So far the only confirmed source is codes — the THANKYOU code grants 5 Lucky Spins, worth an effective $50,000 of rolls. Rarity is reported to be gated by spin type, which makes Lucky Spins the more valuable roll per use, not just a free price tag.",
  },
  {
    q: "What item rarities exist in Survive Your Ideas?",
    a: "Six tiers: Common, Uncommon, Rare, Epic, Legendary and Mythical (community-reported scale from current guides). Specific per-rarity drop odds have not been published by the developer and are not documented anywhere reliable — any site quoting exact percentages is guessing, and we don't.",
  },
  {
    q: "Why only five item slots?",
    a: "The five-slot cap is the loadout design: as your collection grows, your usable build narrows rather than widens, forcing role balance over raw rarity. Community guides describe the resulting soft meta as one defensive pick, one mobility pick and three flex slots — because five Legendary items that all solve the same hazard lose to five answers covering five families.",
  },
  {
    q: "Can I play without items?",
    a: "Yes — items supplement movement and defense, but every hazard in the game is survivable with positioning alone: high ground beats floods, open routes beat chasers, cover beats bombardment. Items are the insurance layer on top. A new player's first spins matter less than their first ten matches of reading words quickly.",
  },
];

export default function ItemsPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Items & Spins"
        subtitle={`${RARITIES.length} rarity tiers · 5 loadout slots · $${SPIN_ECONOMY.regularSpinCost.toLocaleString()} regular spins vs Lucky Spins from codes`}
        image="/images/official/shot-128957347570067.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Items & Spins" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The Five-Slot Loadout System</h2>
        <p>
          Every match, you bring up to five items. That cap is the most
          consequential design choice in the item system: unlike collection
          games where more unlocks mean more power, Survive Your Ideas makes
          your build get <em>narrower</em> as it grows. A full collection
          forces real choices about roles, because five high-rarity items
          that all answer the same hazard lose to a balanced five that cover
          different families. Community guides describe the resulting soft
          meta as one defense pick, one mobility pick and three flex slots —
          and the rest of this page follows that logic.
        </p>
        <p>
          Transparency note: the item system is the game's least-documented
          layer. The five-slot cap, the spin economy and the named items below
          come from community-reported guides rather than developer
          documentation, and they are labeled as such throughout this wiki.
          What IS documented is the hazard side — which words exist, what
          they do, and how they behave — and that documented half is what
          makes the loadout logic below sound regardless of exact item stats.
        </p>
      </section>

      {/* Loadout items */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Community-Recommended Collection Targets
        </h2>
        <div className="space-y-4">
          {LOADOUT_ITEMS.map((item) => (
            <div key={item.slug} className="rounded-xl border border-blue-200 bg-white p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xl font-extrabold text-slate-900">{item.name}</span>
                <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-700">
                  {item.role}
                </span>
                <span className="text-sm text-slate-500 font-semibold">
                  answers: {item.answer}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Item names and role rankings are community-reported (RoUniverse item
          guide, Nov 2026). Hazard families referenced are documented on our
          words list with evidence tiers.
        </p>
      </section>

      {/* Rarity table */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Rarity Tiers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Tier</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Status</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">What's documented</th>
              </tr>
            </thead>
            <tbody>
              {RARITIES.map((r) => (
                <tr key={r}>
                  <td className="border border-slate-200 px-3 py-2 font-bold">{r}</td>
                  <td className="border border-slate-200 px-3 py-2">
                    {r === "Mythical" ? (
                      <span className="font-bold text-purple-600">Collection ceiling</span>
                    ) : (
                      "Confirmed tier"
                    )}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">
                    {r === "Mythical"
                      ? "Top of the reported scale — the roll everyone chases. No official drop rate published."
                      : "Part of the reported six-tier scale. Exact drop odds undocumented — we don't invent numbers."}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Rarity scale per community guides. The developer has not published
          official drop rates; per-tier percentages found elsewhere are
          speculation and deliberately absent here.
        </p>
      </section>

      {/* Spin economy */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>The Spin Economy: Cash Rolls vs Lucky Rolls</h2>
        <p>
          Two roll types feed the item system. <strong>Regular spins</strong>{" "}
          cost {SPIN_ECONOMY.regularSpinCost.toLocaleString()} Cash each — real money
          in match-earned currency. <strong>Lucky Spins</strong> are the
          alternative roll, and the only confirmed free source so far is
          codes: THANKYOU grants five, worth an effective $50,000 of rolls
          you did not grind. Community guides add the crucial detail that
          rarity is gated by <em>spin type</em>, not playtime — meaning
          grinding matches never rolls Mythicals the way spins do, and Lucky
          Spins are not just free rolls but potentially better-odds rolls.
        </p>
        <p>
          The economic conclusion follows: Lucky Spins should drive your item
          progression, and Cash should go to Meta Words. Every $10,000
          regular spin delays /double or /secret (250K each) by a
          twenty-fifth. This is why our{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          exists — it takes your Lucky Spin stock (check after redeeming{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>
          ), your Cash bank and your roll goal, and tells you whether to roll,
          wait for the next code wave or bank for Meta Words entirely. The{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          covers the other side: when your match earnings actually fund each
          slash-command.
        </p>

        <h2>How Loadouts Meet Hazards</h2>
        <p>
          The reason the two-item core works: the game's hazard families map
          cleanly onto movement problems. Blast words (NUKE-family) punish
          position — the answer is either leave (Grapple Hook) or tank
          (Force Field). Flood words punish low ground — answered by
          verticality, which is a Grapple Hook problem. Chasers punish being
          caught without escape routes — again mobility first, offense
          second. Persistent words punish stillness over minutes — the
          five-slot build matters less than route planning, but a mobility
          item keeps your options open as safe ground shrinks. Each hazard
          family is documented with its own counter-play on the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          and the situation ranking on{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words
          </Link>
          .
        </p>
        <p>
          What to expect as the game matures: more items, more rarities,
          probably seasonal rotations — this is the layer Roblox games expand
          most aggressively. The loadout <em>logic</em> (one answer per hazard
          family) should survive any expansion, because it derives from the
          hazard system rather than the item list. We re-verify item claims
          after each update and label everything community-reported until the
          developer publishes hard numbers.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Items & Spins FAQ" />
    </div>
  );
}
