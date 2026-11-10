import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CodePill from "@/components/CodePill";
import { CODES_STATE, REDEEM_STEPS } from "@/lib/codes";
import { SITE } from "@/lib/site";
import { SPIN_ECONOMY } from "@/lib/items";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Codes (November 2026) — NEWMAPSCOMING, BIG5, FIRSTUPDATE + THANKYOU, Checked Daily",
  description:
    "Working Survive Your Ideas codes as of November 11, 2026: NEWMAPSCOMING (30 Free Spins), BIG5 (5 Lucky Spins), FIRSTUPDATE (free rewards) and THANKYOU (5 Lucky Spins). Redemption steps, where new codes come from, and why some listed codes are fake — re-verified every day.",
  alternates: { canonical: "/codes" },
};

const faqs = [
  {
    q: "What are the working Survive Your Ideas codes as of November 2026?",
    a: "There are four active codes as of November 11, 2026. NEWMAPSCOMING dropped November 10 with the developer's new-maps teaser and grants 30 Free Spins; BIG5 landed the same day for 5 Lucky Spins; FIRSTUPDATE shipped with the game's first update on November 8 with free rewards; and THANKYOU (5 Lucky Spins) went live around November 7 during the game's chart-topping week. All four are confirmed by independent Roblox codes trackers, with the newest batch cross-checked by GamesRadar, PCGamesN, Dexerto and ProGameGuides.",
  },
  {
    q: "How do I redeem codes in Survive Your Ideas?",
    a: "Launch the game, look at the upper-left corner of the screen and click the Codes icon. A redemption window pops up in the middle of the screen — type or paste the code exactly as listed and press Redeem. Codes for this game have so far been simple uppercase words, and entries are not case-confirmed, so if a code fails, first check for paste errors like trailing spaces.",
  },
  {
    q: "What do Lucky Spins from codes actually give you?",
    a: "Spins roll items for your five equipment slots, with rarities from Common to Mythical. Lucky Spins are the alternative roll type to regular spins, which cost $10,000 Cash each — so a single THANKYOU redemption is effectively $50,000 of rolls you did not have to grind for. Community guides recommend Lucky Spins as your primary upgrade path while banking Cash for Meta Words.",
  },
  {
    q: "Why do some sites list Survive Your Ideas codes that don't work?",
    a: "Two reasons. First, the game is new and fast-moving: the first code only went live on November 7, and slower trackers still show zero codes days later — or copy each other's stale lists. Second, low-quality sites invent plausible strings like WELCOME or RELEASE for any trending game. As of our last check no such codes have ever existed for Survive Your Ideas, and we list every expired code with dates so you can see exactly what shipped and when.",
  },
  {
    q: "When do new Survive Your Ideas codes usually drop?",
    a: "The game is one week into its code era, so no pattern is established yet. That said, THANKYOU appeared alongside a major chart milestone, which fits the common Roblox pattern: codes celebrate visit counts, updates or events. The game updates frequently (it was updated the same morning we last verified this page), and the developer communicates through the official group and Discord. We check all of them daily.",
  },
  {
    q: "Are there any expired Survive Your Ideas codes?",
    a: "Not yet. NEWMAPSCOMING, BIG5, FIRSTUPDATE and THANKYOU are the only codes the game has ever released and all four are still active as of November 11, 2026. Once codes start expiring — and they will, because that is how Roblox code cycles work — each one moves to our expired list with its retirement date, so you always know whether a code you missed is gone forever or just old.",
  },
  {
    q: "Do codes work on mobile and console?",
    a: "Yes. The Codes icon is part of the game's UI rather than a PC-only menu, and redemption is account-based, so spins granted on any platform appear on all of them. If you cannot find the icon on a small screen, rotate to landscape — the upper-left HUD compresses in portrait mode.",
  },
];

export default function CodesPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Codes"
        subtitle={`${CODES_STATE.working.length} working codes · checked daily · expired codes archived with dates`}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Codes" }]}
      />
      <AdsterraBannerContent />

      {/* Newest code highlight */}
      <div className="mt-6 rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎉</span>
          <div>
            <h2 className="font-extrabold text-lg text-slate-900">
              New codes: NEWMAPSCOMING + BIG5 are live
            </h2>
            <p className="text-slate-700 mt-1 leading-relaxed text-sm">
              Two <strong>fresh codes</strong> landed on November 10, 2026:{" "}
              <strong>NEWMAPSCOMING</strong> grants a huge{" "}
              <strong>30 Free Spins</strong> and doubles as the developer&apos;s
              teaser for upcoming maps — new content is on the way.{" "}
              <strong>BIG5</strong> adds <strong>5 Lucky Spins</strong>. They
              join FIRSTUPDATE and THANKYOU, bringing the working list to{" "}
              <strong>four codes</strong>. Redeem all of them before the wave
              rotates; early codes are rarely permanent.
            </p>
          </div>
        </div>
      </div>

      {/* Working codes */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          All Working Survive Your Ideas Codes
        </h2>
        {CODES_STATE.working.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600 leading-relaxed">
            No working codes right now — we last checked {CODES_STATE.lastVerified}.
            Expired codes are archived below with dates.
          </div>
        ) : (
          <div className="space-y-3">
            {CODES_STATE.working.map((c, i) => (
              <div key={i} className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 flex flex-wrap items-center gap-3">
                <CodePill code={c.code} />
                <span className="font-bold text-slate-800">{c.reward}</span>
                <span className="text-xs text-slate-500">added {c.added}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Expired codes */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Expired Codes
        </h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
          None yet — all four shipped codes (NEWMAPSCOMING, BIG5, FIRSTUPDATE
          and THANKYOU) are still active as of {CODES_STATE.lastVerified}. When
          they rotate out (or new codes replace them), each retired code lands
          here with its expiry date instead of silently vanishing from the
          list.
        </div>
      </section>

      {/* How to redeem */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>How to Redeem Codes in Survive Your Ideas</h2>
        <p>
          Redemption has been live since around November 7, 2026, and the flow
          matches what Destructoid, ProGameGuides and ProGamePilot all
          document:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          {REDEEM_STEPS.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
        <p>
          Two practical notes. First, the window accepts pasted text, but a
          trailing space or line break from copying on mobile is the most
          common "invalid code" cause — retype the code if a paste fails.
          Second, spins are granted to your account instantly, so you can
          redeem on PC and roll the items on mobile (or the other way around)
          without losing anything.
        </p>

        <h2>What Lucky Spins Are Worth</h2>
        <p>
          The reward side of every code so far is Lucky Spins, and the value
          math is clean: a regular spin costs {SPIN_ECONOMY.regularSpinCost.toLocaleString()}{" "}
          Cash (community-reported figure from current item guides), so
          THANKYOU's five spins are effectively $50,000 of rolls you keep in
          your pocket. Rolls feed the five-slot loadout system — rarities run
          from Common up to Mythical, and community guides consistently advise
          letting Lucky Spins drive your item progression while raw Cash goes
          to Meta Words. If you want the numbers for your own budget, the{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          compares your Lucky Spin stock against Cash rolls directly, and the{" "}
          <Link href="/items" className="text-brand-700 font-bold hover:underline">
            items page
          </Link>{" "}
          breaks down what each loadout slot should answer.
        </p>

        <h2>Where New Codes Come From</h2>
        <p>
          Survive Your Ideas has three official channels: the{" "}
          <a href={SITE.game.groupUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 font-bold hover:underline">
            Survive Your Ideas Roblox group
          </a>{" "}
          (162,000+ members, run by developer SlayHatt), an official Discord
          server where word suggestions and announcements happen, and the
          developer's X account. Codes have so far appeared alongside game
          milestones — THANKYOU dropped the same week the game reached #3 on
          third-party global charts — which is the classic Roblox celebration
          pattern. Update days are the other likely window, and this game
          updates fast: it was patched the same morning we last verified this
          page.
        </p>
        <p>
          Our verification loop runs daily across all three channels plus the
          major trackers. A code lands here once it is confirmable — either
          working in-game for us or reported identically by at least two
          independent outlets — which is why the list above sometimes trails
          a brand-new drop by hours but is never wrong.
        </p>

        <h2>Fake Code Warning</h2>
        <p>
          With the game trending this hard, low-quality sites are already
          stuffing "Survive Your Ideas codes" pages with invented strings.
          The tells are the same as every trending Roblox game: rewards in
          suspiciously round numbers (100K Cash, 2x Victory), codes named
          WELCOME / RELEASE / SPINFREE — none of which have ever existed
          here — and lists copied from other typing-survival games. As of{" "}
          {CODES_STATE.lastVerified}, exactly four codes have ever shipped
          (NEWMAPSCOMING, BIG5, FIRSTUPDATE and THANKYOU). Any page listing
          eight or ten "active" codes right now is listing fiction. We would
          rather run an honest four-line list than a wall of garbage, and this
          page becomes the fastest accurate list every time a new wave drops.
        </p>

        <h2>Codes History Timeline</h2>
        <p>
          For a game barely a month old, the code era is young enough to
          summarize in a few lines: the game launched October 6, 2026 with{" "}
          <strong>no redemption system</strong> at all; the Codes icon and the
          spin economy arrived with the game's early-November update wave; and
          the first code (THANKYOU, 5 Lucky Spins) went live around November
          7 during the game's chart-topping week. The second code
          (FIRSTUPDATE, free rewards) followed on November 8 with the game's
          first content update — two codes in three days is a fast rotation
          for a game this young. The third wave arrived November 10:{" "}
          <strong>NEWMAPSCOMING</strong> (30 Free Spins, the biggest single
          drop so far) doubles as official confirmation that{" "}
          <strong>new maps are in development</strong>, with{" "}
          <strong>BIG5</strong> (5 Lucky Spins) alongside it. That pacing —
          four codes in five days — tells you the developer is actively using
          codes to fuel the game's growth phase. When the next milestone hits
          (the new maps themselves, visit counts, a seasonal event), expect a
          fresh wave, and this page will have each code with its reward,
          source and dates within a day.
        </p>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
