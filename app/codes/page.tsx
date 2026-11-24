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
  title: "Survive Your Ideas Codes (November 2026) — 100KCCU, 1MMEMBERS, SATURDAYISTHEDAY + NEWMAPSCOMING, Checked Daily",
  description:
    "Working Survive Your Ideas codes as of November 24, 2026: 100KCCU (5 Lucky Spins), 1MMEMBERS (20 Spins), SATURDAYISTHEDAY (10 Lucky Spins), NEWMAPSCOMING (30 Free Spins), BIG5 (5 Lucky Spins) and FIRSTUPDATE (free rewards). THANKYOU expired mid-November. Redemption steps, where new codes come from, and why some listed codes are fake — re-verified every day.",
  alternates: { canonical: "/codes" },
};

const faqs = [
  {
    q: "What are the working Survive Your Ideas codes as of November 2026?",
    a: "Six codes are live as of November 24, 2026: 100KCCU (5 Lucky Spins) dropped November 14 to celebrate the game hitting 100,000 concurrent players; 1MMEMBERS (20 Spins) and SATURDAYISTHEDAY (10 Lucky Spins) both landed November 13 to celebrate the game's community growth; NEWMAPSCOMING landed November 10 with the developer's new-maps teaser and grants 30 Free Spins; BIG5 (5 Lucky Spins) shipped the same day; and FIRSTUPDATE arrived with the game's first update on November 8 — though three major outlets now list it expired, so redeem it soon. THANKYOU, the game's first-ever code, expired around November 14. The active list is cross-checked by GamesRadar, Destructoid, Beebom, IGN and Roblox Den.",
  },
  {
    q: "How do I redeem codes in Survive Your Ideas?",
    a: "Launch the game, look at the upper-left corner of the screen and click the Codes icon. A redemption window pops up in the middle of the screen — type or paste the code exactly as listed and press Redeem. Codes for this game have so far been simple uppercase words, and entries are not case-confirmed, so if a code fails, first check for paste errors like trailing spaces.",
  },
  {
    q: "What do Lucky Spins from codes actually give you?",
    a: "Spins roll items for your five equipment slots, with rarities from Common to Mythical. Lucky Spins are the alternative roll type to regular spins, which cost $10,000 Cash each — so the five Lucky Spins from 100KCCU are effectively $50,000 of rolls you did not have to grind for. Community guides recommend Lucky Spins as your primary upgrade path while banking Cash for Meta Words.",
  },
  {
    q: "Why do some sites list Survive Your Ideas codes that don't work?",
    a: "Two reasons. First, the game is new and fast-moving: the first code only went live on November 7, and slower trackers still show zero codes days later — or copy each other's stale lists. Second, low-quality sites invent plausible strings like WELCOME or RELEASE for any trending game. As of our last check no such codes have ever existed for Survive Your Ideas, and we list every expired code with dates so you can see exactly what shipped and when.",
  },
  {
    q: "When do new Survive Your Ideas codes usually drop?",
    a: "The game is three weeks into its code era and the pattern is already visible: seven codes shipped in the first two weeks, the first expiry (THANKYOU) hit at day seven, and no new code has dropped since 100KCCU on November 14 — a quiet stretch that fits the developer saving the next wave for the promised new maps. Codes celebrate milestones (100KCCU = 100K concurrent players, 1MMEMBERS = one-million-member group) and update moments (FIRSTUPDATE, NEWMAPSCOMING). The game updates frequently, and the developer communicates through the official group and Discord. We check all of them daily.",
  },
  {
    q: "Are there any expired Survive Your Ideas codes?",
    a: "Yes — one. THANKYOU (5 Lucky Spins), the game's very first code from around November 7, expired around November 14 after roughly seven days, confirmed by Destructoid, IGN, GamesRadar, RadioTimes and GamestratWiki. FIRSTUPDATE (November 8) is on watch: IGN, RadioTimes and GamesRadar list it expired while Roblox Den still tracked it active on November 19, so we keep it in the working list with a warning — redeem it soon either way. Every retirement gets an expiry date here, so you always know whether a code you missed is gone forever or just contested.",
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

      {/* Status highlight */}
      <div className="mt-6 rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎉</span>
          <div>
            <h2 className="font-extrabold text-lg text-slate-900">
              Status check November 24: six codes live, THANKYOU expired
            </h2>
            <p className="text-slate-700 mt-1 leading-relaxed text-sm">
              The working list now stands at <strong>six codes</strong>:
              100KCCU (the newest, from November 14), SATURDAYISTHEDAY,
              1MMEMBERS, NEWMAPSCOMING, BIG5 and FIRSTUPDATE.{" "}
              <strong>THANKYOU — the game&apos;s first-ever code — expired
              around November 14</strong> after roughly a week, so if you
              never redeemed it, that roll is gone. FIRSTUPDATE is on the
              bubble (three outlets call it expired, Roblox Den still had it
              tracked November 19): redeem it <strong>now</strong> if you
              haven&apos;t. No new codes have dropped since 100KCCU — the
              promised new maps are the likely next drop window.
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
        <div className="space-y-3">
          {CODES_STATE.expired.map((c, i) => (
            <div key={i} className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <CodePill code={c.code} />
                <span className="font-bold text-slate-600 line-through">{c.reward}</span>
                <span className="text-xs text-slate-500">
                  added {c.added} · expired {c.expired}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">⚠️ {c.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-500">
          FIRSTUPDATE sits on the bubble: three outlets list it expired, Roblox
          Den still had it tracked November 19 — it stays in the working list
          above with a warning until the picture settles.
        </p>
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
          stuffing &quot;Survive Your Ideas codes&quot; pages with invented strings.
          The tells are the same as every trending Roblox game: rewards in
          suspiciously round numbers (100K Cash, 2x Victory), codes named
          WELCOME / RELEASE / SPINFREE — none of which have ever existed
          here — and lists copied from other typing-survival games. As of{" "}
          {CODES_STATE.lastVerified}, exactly seven codes have ever shipped
          (100KCCU, 1MMEMBERS, SATURDAYISTHEDAY, NEWMAPSCOMING, BIG5,
          FIRSTUPDATE and THANKYOU — the last now expired). Beware single-source
          &quot;new&quot; codes too: a &quot;100KLIKES&quot; code circulating on one
          low-quality tracker has never been confirmed by any major outlet and
          follows a naming pattern this game&apos;s developer has never used
          (celebration codes here honor CCU and member milestones, not like
          counts). We would rather run an honest verified list than a wall of
          garbage, and this page becomes the fastest accurate list every time
          a new wave drops.
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
          <strong>BIG5</strong> (5 Lucky Spins) alongside it. The fourth wave
          landed November 13: <strong>1MMEMBERS</strong> (20 Spins) celebrates
          the game&apos;s one-million-member Roblox group milestone and{" "}
          <strong>SATURDAYISTHEDAY</strong> (10 Lucky Spins) kept the weekend
          momentum going. The fifth arrived November 14: <strong>100KCCU</strong>{" "}
          (5 Lucky Spins) fired when the game smashed through 100,000
          concurrent players — a CCU milestone celebration, the classic
          Roblox pattern. And the era&apos;s first expiry followed:
          THANKYOU, the code that started it all, died around{" "}
          <strong>November 14</strong> after roughly seven days — the
          retirement signal every Roblox code watcher expects at this stage.
          FIRSTUPDATE (November 8) is now on the same bubble: three outlets
          list it expired while Roblox Den still tracked it November 19, so
          we keep it listed with a warning. That pacing — seven codes in
          under two weeks, first expiry at day seven — tells you the
          developer is actively cycling codes to fuel the game&apos;s
          growth phase, and the promised new maps are the likely next drop
          window. When that hits, expect a fresh wave, and this page will
          have each code with its reward, source and dates within a day.
        </p>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
